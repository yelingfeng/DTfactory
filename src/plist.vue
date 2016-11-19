<template>
  <div class="container">
    <div class="header">
      <el-row>
        <el-col :span="24" >
          <el-form :inline="true" label-position="right"  :model="plistForm" label-width="80px" >
            <el-form-item label="产品名称">
              <el-input v-model="plistForm.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="plistForm.time"
                type="daterange"
                align="right"
                format="yyyy-MM-dd"
                placeholder="选择日期范围"
                :picker-options="pickerOptions2"
                style="width: 220px">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="使用状态">
              <el-select v-model="plistForm.status" >
                <el-option label="有效" value="1"></el-option>
                <el-option label="无效" value="0"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="searchClick">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <div class="toolbar">
        <el-button  icon="upload" @click.native="addAction">新建</el-button>
        <el-button  icon="edit"  @click.native="editorAction" >编辑</el-button>
        <el-button  icon="share"  @click.native="copyAction">复制</el-button>
        <el-button  icon="delete"  @click.native="delAction">删除</el-button>
        <el-button  icon="edit"  @click.native="statusAction">标记</el-button>
        <el-button  icon="search"  @click.native="viewAction">查看</el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableList" ref="table"
                  :highlight-current-row ="true"
                  selection-mode="multiple" :stripe = "true" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"> </el-table-column>
          <el-table-column  property="name" label="产品名称"  width="400" sortable></el-table-column>
          <el-table-column  property="desc" label="产品描述"></el-table-column>
          <el-table-column inline-template label="创建日期" >
            <div>{{ row.createTime }}</div>
          </el-table-column>
          <el-table-column inline-template label="更新日期"  >
            <div>{{ row.updateTime }}</div>
          </el-table-column>
          <el-table-column  inline-template label="使用状态"
                            prop="tag"
          >
            <el-tag :type="row.status === '1' ? 'success' : ''" close-transition>{{row.status == "1"? "使用中" : '未使用'}}</el-tag>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="end">
      <el-col :span="24" >
        <div class="pagebar">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import moment from "moment"
  import 'moment/locale/zh-cn';
  import {mapActions,mapGetters} from "vuex"
  const fmt = "YYYY-MM-DD";
  export default {
    data() {
      return {
        plistForm: {
          name: "",
          startTime:"",
          endTime : "",
          status: "",
          time:"",
        },

        timeStr: [],
        multiple: [],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const now = moment(new Date()).format(fmt)
              const last = moment(now).add(-1,"w").format(fmt)
              picker.$emit('pick', [moment(last).format(fmt), moment(now).format(fmt)]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
               const now = moment(new Date()).format(fmt)
              const last = moment(now).add(-1,"M").format(fmt)
              picker.$emit('pick', [moment(last).format(fmt), moment(now).format(fmt)]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const now = moment(new Date()).format(fmt)
              const last = moment(now).add(-3,"M").format(fmt)
              picker.$emit('pick', [moment(last).format(fmt), moment(now).format(fmt)]);
            }
          }]
        }
      }
    },

    computed:{
        timeStr(){
            if(this.plistForm.time.length){
                return [moment(this.plistForm.time[0]).format(fmt),moment(this.plistForm.time[1]).format(fmt)]
            }
        },
        ...mapGetters({
          'tableList':'getList',
          'total':'getTotal'
        })
    },
    methods: {
      ...mapActions([
          'searchList',
          'delList',
          'changePStatue'
      ]),
      searchClick() {
          this.searchData();
      },

      searchData(){
         var timeStr = this.timeStr;
         if(timeStr && timeStr!=''){
             this.plistForm.startTime = timeStr[0];
             this.plistForm.endTime = timeStr[1];
         }
         this.searchList(this.plistForm);
      },

       // 新建
      addAction(){
          window.location.href = "editor.html";
      },

      // 编辑
      editorAction(){
         if(this.multiple.length > 1){
             this.$alert('请选择一条记录进行操作', '提示', {
               confirmButtonText: '确定',
             });
             return ;
         }
         if(this.multiple.length == 0){
             this.$alert('请选择需要编辑的产品', '提示', {
                confirmButtonText: '确定',
             });
             return ;
         }
         let id = this.multiple[0].id;
         window.location.href="editor.html?zid="+id+"&type=2";
      },

      // 复制
      copyAction(){
        if(this.multiple.length > 1){
             this.$alert('请选择一条记录进行操作', '提示', {
               confirmButtonText: '确定',
             });
             return ;
         }
         if(this.multiple.length == 0){
             this.$alert('请选择需要复制的产品', '提示', {
                confirmButtonText: '确定',
             });
             return ;
         }
         let id = this.multiple[0].id;
         window.location.href="editor.html?zid="+id+"&type=3";
      },


      viewAction(){
         var me = this;
         if(this.multiple.length > 1){
             this.$alert('请选择一条记录进行操作', '提示', {
               confirmButtonText: '确定',
             });
             return ;
         }
         if(this.multiple.length == 0){
             this.$alert('请选择需要查看的产品', '提示', {
                confirmButtonText: '确定',
             });
             return ;
         }

      },


       // 标记
     statusAction(){

        console.log(this.$refs.table)

         var me = this;
         if(this.multiple.length > 1){
             this.$alert('请选择一条记录进行操作', '提示', {
               confirmButtonText: '确定',
             });
             return ;
         }
         if(this.multiple.length == 0){
             this.$alert('请选择需要标记的产品', '提示', {
                confirmButtonText: '确定',
             });
             return ;
         }
         let id = this.multiple[0].id;
         this.changePStatue(id).then((resp) => {
           if(resp.status == "200"){
               me.$message({
                 type: 'success',
                 message: '标记成功!'
               });
               me.searchData();
               me.multiple = [];
           }
         })
     },


      // 删除
      delAction(){

          var me = this;

          if(this.multiple.length> 0){
               this.$confirm('此操作将删除这些记录, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {

                    let ids = [];
                    me.multiple.forEach((it) => {
                        ids.push(it.id)
                    })
                    if(ids.length){
                       me.delList(ids.join(',')).then((resp) => {
                           if(resp.status == "200"){
                               me.$message({
                                 type: 'success',
                                 message: '删除成功!'
                               });
                           }
                       })
                       me.searchData();
                       me.multiple = [];
                    }

                });
         }else{
             this.$alert('请选择需要删除的产品', '提示', {
                confirmButtonText: '确定',
             });
             return ;
         }

      },


      handleSelectionChange(val) {
        this.multiple = val;
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted(){
        this.searchData();
    }
  }
</script>
<style>
    @reset-global pc;
    body {
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
        overflow:hidden;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        background-color:#eee;
    }

    .header {
        height: 50px;
        line-height: 50px;
        margin: 10px auto;
    }

    .toolbar {
        height: 30px;
        margin: 10px 0;
    }

    .container{
        margin:20px;
        border:1px solid #ccc;
        padding:25px;
        background-color:#fff;
    }

    .el-row{
        margin-bottom : 10px;
    }
</style>

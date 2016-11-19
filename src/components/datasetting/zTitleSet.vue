<template>
    <div class="df-dset">
        <el-dialog title="设置动态标题" v-model="isShow" ref="dialog" @close="hideTitle">
            <div class="df-dset__con" rel="dsetbox">
                <el-row >
                    <el-col :span="24">
                        <div class="df-dset__box">
                            <el-form  label-width="90px" >
                                <el-row>
                                    <el-col :span="24">
                                        <el-form-item label="动态标题">
                                            <el-input v-model="titleName"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="控件名称">
                                            <el-input v-model="code" :disabled="true"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="指定数据源">
                                            <el-select v-model="datasourceId" @change="toggleDB">
                                                <el-option
                                                        v-for="opt in dbData"
                                                        :label="opt.label"
                                                        :value="opt.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row >
                                    <el-col :span="24">
                                        <el-form-item label="控件名称">
                                            <el-radio class="radio" v-model="sqlType" v-for="item in sqlTypeList" :label=item.value>{{item.name}}</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <zTabSlide :tabList="paramStr"  v-on:addParam="addParamTo"></zTabSlide>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <div class="df-dset__area">
                                        <el-input type="textarea" id="sqlText" v-model="sql" ></el-input>
                                    </div>
                                </el-row>
                                <el-row >
                                    <el-button type="primary" @click="dataSearchResult">查询</el-button>
                                </el-row>
                            </el-form>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div class="df-dset__box df-dset__boxDown">
                            <el-table
                                    :data="resultData"
                                    stripe
                                    style="width: 100%">
                                <el-table-column v-for="(item,key,index) in resultData[0]" :prop="key" :label="key"  >
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
                <treeSlide :treeData="dbTreeData"></treeSlide>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native="hideTitle">取 消</el-button>
                <el-button type="primary" @click.native="dataSetSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>
    @import "../../assets/css/dset.css";
    .el-form-item {
        margin-bottom: 6px;
    }
    .el-dialog--small{
        overflow:hidden;
    }
</style>
<script>
    import {mapActions ,mapGetters} from "vuex"
    import $ from "jquery";
    import zTabSlide from  "components/datasetting/zTabSlide"
    import treeSlide from  "components/datasetting/treeSlide"
    export default{
        data(){
            return{
                titleName:"",
                code:"",
                datasourceId:"",
                sqlType:"",
                sql:"",
                paramStr:[],
                resultData:[],
                sqlTypeList:[
                    {name:"SQL文本",value:"1"},{name:"存储过程",value:"2"}
                ],
            }
        },
        computed:{
             ...mapGetters({
                 dbData:'getDBData',
                 dbTreeData:'getDBTree',
                 execResult:'getExecResult',
                 curTitleDatasets:'getCurTitleDatasets',
                 curComponent:'getCurComponent',
                 isShow:'dialogTitleStatus',
                 curCascade:'getCurCascade'
             }),
            //数据字典定位
            treeStyle(){
                return {
                    right:this.treeRight + 'px'
                }
            },
        },
        watch:{
            isShow(){
                if(this.isShow){
                    //console.log(this.curTitleDatasets.titleDatasets);
                    this.getDBDataAct();
                    this.getDBTreeAct({datasourceId:this.datasourceId});
                    this.dataSearchResult();
                }
            },
            curTitleDatasets:{
                handler: function (newVal,oldVal) {
                    if(newVal){
                        this.titleName = newVal.titleName;
                        if(newVal.titleDatasets){
                            this.datasourceId=newVal.titleDatasets.datasourceId;
                            this.sqlType=newVal.titleDatasets.sqlType;
                            this.sql=newVal.titleDatasets.sql;
                            this.paramStr = newVal.titleDatasets.paramStr;
                        }else{
                            this.sqlType="";
                            this.paramStr="";
                            this.datasourceId="";
                            this.sql="";
                        }

                    }
                },
                deep: true
            },
            curComponent:{
                handler: function (newVal,oldVal) {
                    if(newVal){
                        this.code = newVal.code;
                    }
                },
                deep: true
            },
            curCascade:{
                handler: function (newVal,oldVal) {
                    if(newVal){
                        this.paramStr = _.chain(newVal.cascadeData)
                            .map(function(chr){
                                return chr.name + "." + chr.column
                            }).value();
                        console.log(newVal);
                    }
                },
                deep: true
            },
            execResult:{
                handler: function (newVal,oldVal) {
                    if(newVal){
                        this.resultData = newVal.rows;
                    }
                },
                deep: true
            }
        },
        mounted(){
           // console.log(this.$el)
           //console.log(this.$refs);
        },
        components:{
            zTabSlide,
            treeSlide
        },
        methods:{
            ...mapActions({
               getDBDataAct: 'loadDBList', //数据源列表
               getDBTreeAct: 'loadDBTree', //数据库表和存储过程
               getExecResultAct:'execSQL', //sql或者存储过程查询结果
            }),
            //数据源切换库表和存储过程
            toggleDB(){
                 this.getDBTreeAct({datasourceId:this.datasourceId});
            },
            addParamTo(str){
                let startPos = $("#sqlText textarea")[0].selectionStart; //光标起始位置
    			let endPos =   $("#sqlText textarea")[0].selectionEnd;//光标结束位置
    			this.sql = sql.substring(0, startPos) + str + sql.substring(endPos,sql.length);
            },
            //动态标题sql查询结果
            dataSearchResult(){
                this.getExecResultAct({
                    datasourceId:this.datasourceId,
                    sqlType:this.sqlType,
                    sql:this.sql
                 })
            },
            hideTitle(){
                this.$store.dispatch('hideTitleSet');
            },
            //数据配置确定
            dataSetSubmit(){
                this.curTitleDatasets.titleDatasets.datasourceId = this.datasourceId;
                this.curTitleDatasets.titleDatasets.sqlType = this.sqlType;
                this.curTitleDatasets.titleDatasets.sql = this.sql;
                this.$store.dispatch('saveTitleDatasets',{titleName:this.titleName,titleDatasets:this.curTitleDatasets.titleDatasets});
                this.hideTitle();
            },

        }
    }
</script>

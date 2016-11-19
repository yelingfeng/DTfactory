<template>
    <div class="df-cascade">
        <el-dialog title="级联配置" v-model="isShow" @close="hideCascade">
            <div class="df-cascade__con">
                <el-form label-width="120px" >
                    <el-row>
                        <el-col :span="24">
                            <el-radio class="radio" v-model="cascadeSetting.parentRelation" v-for="(item,index) in parentRelationList" :label=item.value>{{item.name}}</el-radio>
                        </el-col>
                    </el-row>
                    <el-row v-for="(item,index) in selectGroupList">
                        <el-col :span="7">
                            <el-form-item label="级联父控件名称">
                                <el-select v-model="item.oneValue" @change="selOneChange(index)" ref="sel">
                                    <el-option
                                            v-for="opt in selectOneOpts"
                                            :label="opt.name"
                                            :value="opt.zid">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="控件列选择">
                                <el-select v-model="item.twoValue" @change="selTwoChange(index)" >
                                    <el-option
                                            v-for="opt in item.selectTwoOpts"
                                            :label="opt.name"
                                            :value="opt.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="图表A.NAME">
                                <el-select v-model="item.threeValue">
                                    <el-option
                                            v-for="opt in item.selectThreeOpts"
                                            :label="opt.name"
                                            :value="opt.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="df-cascade__act">
                                <i class="el-icon-plus" @click="plusCascade"></i>
                                <i class="el-icon-minus" @click="minusCascade(index)" ></i>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
                <treeSlide :treeData="dbTreeData"></treeSlide>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native="hideCascade">取 消</el-button>
                <el-button type="primary" @click.native="cascadeSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>
    @component-namespace df {
        @b cascade {
            margin-top:10px;
            @e act{
                padding:10px 0 0 10px;
            }
            @e act i{
                padding-left:5px;
                cursor:pointer;
            }
        }
    }
</style>
<script>
    import {mapActions ,mapGetters} from "vuex"
    import $ from "jquery";
    import treeSlide from  "components/datasetting/treeSlide"
    export default{
        data(){
            return{
                 parentRelationList:[
                      {name:"And",value:"and"},{name:"Or",value:"or"}
                 ],
                 selectOneOpts:[],
                 selectGroupList:[],
                 cascadeSetting:{
                      parentRelation:'and',
                      cascadeType:'1',
                      cascadeData:[]
                 }
            }
        },
        mounted(){
            //console.log(this.$el)
        },
        components:{
            treeSlide
        },
        computed:{
            ...mapGetters({
                 dbTreeData:'getDBTree',
                 curDatasets:'getCurDatasets',
                 components:'getComponents',
                 isShow:'dialogCascadeStatus',
                 execResult:'getExecResult',
                 curCascade:'getCurCascade'
            })
        },
        watch:{
            isShow(){
                if(this.isShow){
                    this.getParentCascade();
                    this.getDBTreeAct({datasourceId:this.curDatasets.datasourceId});
                }
            },
            curCascade:{
                handler: function (newVal,oldVal) {
                    let _this = this;
                    if(newVal){
                        this.cascadeSetting.parentRelation = newVal.parentRelation;
                        this.cascadeSetting.cascadeType = newVal.cascadeType;
                        this.selectGroupList = [];
                        _.forEach(newVal.cascadeData, function(it,index) {
                            _this.selectOneOpts.push({
                                name:it.name,zid:it.id
                            });
                            _this.selectGroupList.push(
                                {
                                     datasourceId:"",
                                     sqlType:"",
                                     sql:"",
                                     oneValue:it.id,
                                     twoValue:it.column,
                                     threeValue:'',
                                     selectTwoOpts:[],
                                     selectThreeOpts:[],
                                     resultData:{}
                                }
                            );
                            _this.getSeletedDataSets(it.id,index);

                        });
                        //console.log(this.selectGroupList);
                    }
                },
                deep: true
            },

        },
        methods:{
            ...mapActions({
                getDBTreeAct: 'loadDBTree', //数据库表和存储过程
                getExecResultAct:'execSQL', //sql或者存储过程查询结果
            }),
            //级联父控件
            getParentCascade(){
                this.selectOneOpts = [];
                this.components.forEach((it)=>{
                    this.selectOneOpts.push({name:it.code,zid:it.zid});
                });
            },
            //隐藏级联配置窗口
            hideCascade(){
                this.$store.dispatch('hideCascade');
            },
            //级联配置确定
            cascadeSubmit(){
                let _this = this;
                this.selectGroupList.forEach(function(it,index){
                    if(it.oneValue!='' && it.twoValue!=''){
                        this.cascadeData.push({
                            name:_this.$refs.sel[index].selectedLabel,
                            id:it.oneValue,
                            column:it.twoValue
                        });
                    }
                });
                this.cascadeSetting.cascadeData=cascadeData;
                this.$store.dispatch('saveCascadeOp',this.cascadeSetting);
                this.hideCascade();
            },
            //添加级联
            plusCascade(){
                this.selectGroupList.push({
                    datasourceId:"",
                    sqlType:"",
                    sql:"",
                    oneValue:'',
                    twoValue:'',
                    threeValue:'',
                    selectTwoOpts:[],
                    selectThreeOpts:[],
                    resultData:{}
                });
            },
            //删除级联
            minusCascade(index){
                if(this.selectGroupList.length > 1){
                    this.selectGroupList.splice(index, 1)
                }
            },
            //父级联change
            selOneChange(index){
                let _this = this;
                let zid = this.selectGroupList[index].oneValue;
                //this.selectGroupList[index].twoValue = "";
                this.selectGroupList[index].selectTwoOpts=[];
                this.getSeletedDataSets(zid,index);
            },
            //设置当前级联选项值
            getSeletedDataSets(zid,index){
                let _this = this;
                //console.log(zid);
                this.$store.dispatch('getActionCurrentComp',zid).then(function(obj){
                    //console.log(obj);
                    _this.selectGroupList[index].datasourceId = obj.datasets[0].datasourceId;
                    _this.selectGroupList[index].sqlType = obj.datasets[0].sqlType;
                    _this.selectGroupList[index].sql = obj.datasets[0].sql;
                    _this.getResultData(index);
                });
            },
            //获取当前级联父组件sql查询数据
            getResultData(index){
                let _this = this;
                this.$store.dispatch('execSQLOUT',{
                    datasourceId:this.selectGroupList[index].datasourceId,
                    sqlType:this.selectGroupList[index].sqlType,
                    sql:this.selectGroupList[index].sql
                }).then(function(rep){
                    _this.selectGroupList[index].resultData = rep.data.result;
                    _this.setSelectTwoOpts(index);
                });
            },
            //设置列opts
            setSelectTwoOpts(index){
                let _this =this;
                let rows = this.selectGroupList[index].resultData.rows;
                if(rows&&rows.length > 0){
                    _.forEach(rows[0], function(n, key) {
                        _this.selectGroupList[index].selectTwoOpts.push(
                            {value:key.toUpperCase(),name:key.toUpperCase()}
                        );
                    });
                }
            },
            //列选择事件
            selTwoChange(index){
                let v = this.selectGroupList[index].twoValue;
                let resultData = this.selectGroupList[index].resultData;
                //this.selectGroupList[index].threeValue = "";
                this.selectGroupList[index].selectThreeOpts=_.chain(resultData.rows)
                   .map(function (chr) {
                        return {
                            name:chr[v],
                            value:chr[v]
                        }
                    }).value()
            }
        }
    }
</script>

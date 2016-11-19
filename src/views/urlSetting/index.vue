<template>
    <div>
        <el-dialog title="提示" v-model="isShow" size="small" @close="close">
            <div :class="bodyClass">
                <el-row :class="rowStyle">
                    <el-col :span="2">
                        <span>URL地址:</span>
                    </el-col>
                    <el-col :span="12">
                        <el-input placeholder="请输入URL" @blur="urlChange" v-model="url"></el-input>
                    </el-col>
                </el-row>
                <el-row :class="rowStyle">
                    <el-col :span="2">
                        <span>打开类型:</span>
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="openType">
                            <el-option
                                     v-for="item in openStyle"
                                     :value="item.value"
                                     :label="item.name"
                                    >
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :class="rowStyle">
                    <el-col :span="2">参数设置:</el-col>
                    <el-col :span="18" :class="parameterDiv">
                        <parameter :parameterArr="parameterArr" :sub="sub" @subm="returnJson"></parameter>
                    </el-col>
                </el-row>
                <el-row :class="rowStyle">
                    <el-col :span="2">
                        <span>参数备注:</span>
                    </el-col>
                    <el-col :span="18">
                        <el-input
                                type="textarea"
                                placeholder="请输入内容"
                                v-model="remarks"
                                >
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native="close">取 消</el-button>
                <el-button type="primary" @click.native="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import parameter from './parameter'
    import {mapActions ,mapGetters} from "vuex"
    export default {
        name :"URLSetting",
        data(){
            return {
                dialogVisible:false,
                openType:"2",
                bodyClass:"df-url__body",
                rowStyle : 'df-url__rowStyle',
                url:"",
                sub:'',
                remarks:"",
                parameterDiv:'df-url__parameterDiv',
                parameterArr:[
                    {"name":"","value":"","options":[{"label":"全局","option":["secdomain","category","value"]},{"label":"私有","option":["name"]}]}
                ],
                openStyle:[
                    {"value":"0","name":"模态弹窗"},
                    {"value":"1","name":"非模态弹窗"},
                    {"value":"2","name":"刷新"}
                    ]
            }
        },
        components:{
            parameter
        },
        methods:{
            urlChange(){
                let _this = this;
            },
            submit(){
                let _this = this;
                if(_this.url == ""){
                    alert("请输入正确的URL")
                }else{
                    let config = {
                        "url":_this.url,
                        "openType":_this.openType,
                        "remark":_this.remarks,
                        "paramStr":""
                    }
                    let paramStr = [];
                    this.parameterArr.forEach(function (e) {
                        var json = {"name":e.name,"value":e.value};
                        paramStr.push(json);
                    })
                    config["paramStr"] = paramStr;
                    this.$store.dispatch('saveUrlSetting',config)
                    this.close()
                }
            },
            returnJson(e){

            },
            close(){
                this.$store.dispatch('hideURLDialog')
            }
        },
        computed:{
            ...mapGetters({
                getCurUrlSetting : "getCurUrlSetting",
                isShow : "getURLDialogStatus"
            })
        },
        watch:{
            getCurUrlSetting:{
                deep:true,
                handler(e){
                    console.log(e)
                    let _this = this;
                    if(e){
                        _this.url = e.url
                        _this.parameterArr = []
                        _this.openType = e.openType
                        e.paramStr.forEach(function (item) {
                            _this.parameterArr.push({"name":item.name,"value":item.value,"options":[{"label":"全局","option":["secdomain","category","value"]},{"label":"私有","option":["name"]}]})
                        })
                        if(this.parameterArr.length==0){
                            _this.parameterArr.push({"name":"","value":"","options":[{"label":"全局","option":["secdomain","category","value"]},{"label":"私有","option":["name"]}]})
                        }
                        _this.remarks = e.remark
                    }
                }
            }
        }
    }

</script>

<style>
 @import  "../../assets/css/URLSetting.css";
.el-dialog--small{
  width:70%;
}
</style>

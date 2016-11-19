<template>
    <div>
        <el-row :class="rowStyle" v-for="(parr,index) in parameterArr">
            <el-col :span="3">参数名称:</el-col>
            <el-col :span="6">
                <el-input placeholder="请输入内容" v-model="parr.name"></el-input>
            </el-col>
            <el-col :span="2" :offset="2">参数值:</el-col>
            <el-col :span="6">
                <el-select v-model="parr.value">
                    <el-option-group
                            v-for="items in parr.options"
                            :label="items.label">
                        <el-option
                                v-for="item in items.option"
                                :value="item">
                        </el-option>
                    </el-option-group>
                </el-select>
            </el-col>
            <el-col :span="1" :offset="2"><i class="el-icon-minus" :class="iconClass" @click="removeArr(index)"></i></el-col>
            <el-col :span="1"><i class="el-icon-plus" :class="iconClass" @click="addArr"></i></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                rowStyle:"",
                iconClass:"df-url__iconStyle",
            }
        },
        props:[
            "parameterArr","sub"
        ],
        watch:{
            sub:{
                deep:true,
                handler(items){
                }
            }
        },
        methods:{
            addArr(){
                let _this = this;
                if(_this.parameterArr.length >= 10){
                    return
                }else{
                    _this.parameterArr.push({"name":"","value":"","options":[{"label":"全局","option":["secdomain","category","value"]},{"label":"私有","option":["name"]}]})
                }
            },
            removeArr(i){
                let _this = this;
                _this.parameterArr.splice(i,1)
                if(_this.parameterArr.length <= 0) {
                    _this.parameterArr.push({"name":"","value":"","options":[{"label":"全局","option":["secdomain","category","value"]},{"label":"私有","option":["name"]}]})
                }
            }
        }
    }

</script>

<style>

</style>

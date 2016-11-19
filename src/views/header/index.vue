<template>
    <div>
        <header :class="headerStyle">
            <el-row>
                <el-col :span="3" :class="title" ><span @click="titleClick">数字工厂</span></el-col>
                <el-col :span="5" :offset="16">
                    <ul>
                        <li v-for="item in iconJson" :class="iconStyle" @click="iconClick(item.type)">
                            <i :class="item.className"></i>
                            <span>{{item.type}}</span>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </header>
        <div :class="tooltipStyle">
            <el-row>
                <el-col :span="6">
                    <ul>
                        <li v-for="item in tooltipJson" :class="controlStyle" @click="settingClick(item.key)">
                            <i :class="item.className"></i>
                            <span>{{item.type}}</span>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="2" :offset="16" :class="propSetting">
                    <div @click="propClick">
                        <i class="el-icon-setting"></i>
                        <span>属性设置</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <choicechart :openOrClose="openOrClose" @close="closeCharts"></choicechart>
        <bgColor></bgColor>
    </div>
</template>

<script>
    import {mapActions} from  "vuex"
    import choicechart from "../choiceChart"
    import bgColor from "./bgColor"
    export default {
        data(){
            return {
                title : "df-header__title",
                headerStyle : "df-header",
                iconStyle : "df-header__icon",
                tooltipStyle : "df-header__tooltip",
                controlStyle : "df-header__control",
                propSetting : "df-header__propSetting",
                iconJson : [
                    {"className":"el-icon-share","type":"首页"},
                    {"className":"el-icon-star-off","type":"组件库"},
                    {"className":"el-icon-setting","type":"页码设置"},
                    ],
                tooltipJson : [
                    {"className":"el-icon-check","type":"保存" ,"key":"save"},
                    {"className":"el-icon-picture","type":"背景色","key":"bg"},
                    {"className":"el-icon-plus","type":"添加组件","key":"add"},
                ],
                openOrClose:false
            }
        },
        methods:{
            ...mapActions({
               showSaveMenu: 'showSaveMenu'
            }),

            titleClick(){
                console.log(11)
            },
            iconClick(type){
                console.log(type)
            },
            settingClick(type){
                if(type == "add"){
                    this.openOrClose = true;
                }else if(type =="save"){
                    this.showSaveMenu();
                }
                if(type == "bg"){
                    this.$store.dispatch("showBgColor");
                }
            },
            propClick(){
                console.log(22)
            },
            closeCharts(){
                this.openOrClose = false;
            }
        },
        components:{
            choicechart,
            bgColor
        }
    }

</script>

<style>
    @import  "../../assets/css/header.css";
</style>

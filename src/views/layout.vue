<template>
    <div class="df-layout" :style='layoutSize' @click.self="layoutAction">
        <saveMenu></saveMenu>
        <el-button type="primary" @click.native="dialogTitleSet" >设置动态标题</el-button>
        <choiceChart></choiceChart>
        <urlSetting></urlSetting>
        <zDset></zDset>
        <zCascade></zCascade>
        <zTitleSet></zTitleSet>
        <propMenu></propMenu>
        <contentMenu></contentMenu>
        <box v-for="comp in comps" :options="comp"  ></box>
    </div>
</template>

<script>
import {mapGetters ,mapActions} from "vuex"
import $ from "jquery"
import zDset from  "components/datasetting/zDset"
import zCascade from  "components/datasetting/zCascade"
import zTitleSet from  "components/datasetting/zTitleSet"
import contentMenu from  "components/contentMenu"
import util from "util"
import choiceChart from "views/choiceChart";
import urlSetting from "views/urlSetting";
import propMenu from "views/properties";
import saveMenu from "views/save"
import box from "components/common/box"
export default{
    name : "layout",
    data(){
       return {
          layoutSize :{},

       }
    },
    watch:{
        isLoadSuccess(){
            console.log("isLoadSuccess")
        }
    },
    // 挂载后事件
    mounted(){
        this.initEvent()
        this.layoutResize();


        // 加载产品数据
        var zid = util.getUrlString("zid");
        var type = util.getUrlString("type");
        if(zid){
          this.loadModules({
             moduleId : zid
          });
        }

    },
    computed:{
        ...mapGetters({
            'isLoadSuccess':'isLoadSuccess',
            'comps':'getComponents',
        })
    },
    methods:{
        initEvent(){
            $(window).resize(()=>{
                 this.layoutResize();
            });

        },
        dialogTitleSet(){
            this.$store.dispatch('showTitleSet');
        },

        layoutAction(){
            this.$store.dispatch("hidePropMenu")
        },

        layoutResize(){
            let ww = $(window).width();
            let top = 85;
            let hh = $(window).height() -  top;
            this.layoutSize = {
                width : ww +"px",
                height : hh +"px",
                top  : top +"px"
            }
        },
        ...mapActions({
            loadModules:'loadModules',
            'getCurrentComp':'getCurrentComp'
        })
    },
    components:{
        box,
        zDset,
        zCascade,
        zTitleSet,
        choiceChart,
        urlSetting,
        contentMenu,
        saveMenu,
        propMenu
    }
}
</script>
<style>
@import "../assets/css/layout.css"
</style>
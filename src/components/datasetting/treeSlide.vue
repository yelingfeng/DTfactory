<template>
    <div class="df-tree">
        <i v-if = "treeFlg" class="el-icon-d-arrow-left df-tree__showData" @click="treeSlide"></i>
        <i v-else class="el-icon-d-arrow-right df-tree__showData" @click="treeSlide"></i>
        <div class="df-tree__list" :style="treeStyle">
            <el-tree :data="treeData" :props="defaultProps" ></el-tree>
        </div>
    </div>
</template>
<style>
     @import "../../assets/css/common/var.css";
     @component-namespace df {
        @b tree{
            @e showData{
                position: absolute;
                right: 10px;
                top:50px;
                cursor: pointer;
            }

            @e list {
                position: absolute;
                top:70px;
                width:300px;
                height: 100%;
                z-index: 2;
                overflow: auto;
                transition: right 1s;
                -webkit-transition:right 1s;
            }
        }
     }
</style>
<script>
    import $ from "jquery";
    export default{
        data(){
            return{
                treeRight:-300,
                treeFlg:true,
                defaultProps: {
                  children: 'children',
                  label: 'label'
                },
            }
        },
        props:['treeData'],
        computed:{
            //数据字典定位
            treeStyle(){
                return {
                    right:this.treeRight + 'px',
                    height:$(".df-tree__list").height() -70 + 'px'
                }
            }
        },
        methods:{
            //查看数据字典
            treeSlide(){
                this.treeFlg = !this.treeFlg
                if(parseInt(this.treeRight) == 0){
                    this.treeRight = -300
                }else{
                    this.treeRight = 0
                }
            },
        }

    }
</script>

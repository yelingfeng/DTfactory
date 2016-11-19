<template>
    <div class="props__box" v-show="isShow">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>基本属性</template>
                <el-menu-item-group title="分组一">
                    <el-form :model="formAlignRight" label-width="80px">
                        <el-form-item label="属性A">
                            <el-input v-model="formAlignRight.p1"></el-input>
                        </el-form-item>
                        <el-form-item label="属性B">
                            <el-input v-model="formAlignRight.p2"></el-input>
                        </el-form-item>
                        <el-form-item label="属性C">
                            <el-input v-model="formAlignRight.p3"></el-input>
                        </el-form-item>
                    </el-form>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>颜色</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>坐标</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>专有属性</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import {mapGetters } from "vuex"
export default {
    data(){
        return {
            formAlignRight:{
                p1:"",
                p2:"",
                p3:""
            }
        }
    },
    computed:{
        ...mapGetters({
            'isShow':'getPropMenuStatus'
        })
    },
    methods:{
     handleOpen(e){

        console.log(e)
     },
     handleClose(e){
        console.log(e)
     }
    }
}
</script>
<style>
 .props__box{
     position: absolute;
     right:20px;
     top:10px;
     width :300px;
     height:100%;
     z-index:9999;
 }
</style>
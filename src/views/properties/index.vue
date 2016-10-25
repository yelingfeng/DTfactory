<template>
    <div class="props__box">
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
    </div>
</template>
<script>
    export default {
        data(){
            return {
                formAlignRight:{
                    p1:"",
                    p2:"",
                    p3:""
                }
            }
        }
    }
</script>
<style>
 .props__box{
     position: absolute;
     right:0;
     top:20px;
     width :300px;
     height:400px;
 }
</style>
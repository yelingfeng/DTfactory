<template>
    <div class="controls__box">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">
            <el-submenu index="1">
                <template slot="title">图表组件</template>
                <el-menu-item-group title="柱图">
                    <el-menu-item index="1-1">普通柱图</el-menu-item>
                    <el-menu-item index="1-2">分组柱图</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="饼图">
                    <el-menu-item index="1-3">玫瑰图</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">表格</el-menu-item>
            <el-menu-item index="3">富文本</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
// 控件view
export default {
  name :"control",
  data(){
      return {

      }
  },
  methods:{
      handleopen(){

      },
      handleclose(){

      }
  }
}
</script>
<style>
.controls__box{
    position: absolute;
    left: 10px;
    top: 10px;
    width : 300px;
    height : 100%;
}
</style>
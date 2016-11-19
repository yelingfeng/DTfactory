<template>
  <div class="workspace" >
      <topheader></topheader>
      <layout></layout>
  </div>
</template>
<script>
import layout from './views/layout';
import props from "./views/properties";
import topheader from "./views/header";
export default {
  components: {
      layout,props,topheader
  }
};
</script>
<style>
@reset-global pc;
@import "./assets/css/common/var.css";
body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

</style>

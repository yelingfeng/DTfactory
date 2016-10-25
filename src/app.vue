<template>
  <div>
     <control></control>
     <screen></screen>
     <props></props>
  </div>
</template>
<script>
import screen from './views/screen';
import control from "./views/controls";
import props from "./views/properties";

export default {
  components: {
      screen,control,props
  }
};
</script>
<style>
@reset-global pc;
body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

</style>

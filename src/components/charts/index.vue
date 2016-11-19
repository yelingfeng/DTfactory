<template>
  <div :style="chartstyle"> </div>
</template>
<script>
import Charts from "charts/index"
export default{
  props:{
    options:Object,
    renderData:Array
  },
  watch:{
     renderData:{
        deep:true,
        handler(newV,oldVal){
               this.$compChart.render(this.renderData);
        }
     }
  },
  data(){
    return{
      chartstyle:{
        width :'300px',
        height:'200px'
      },
    }
  },
  mounted(){
      let opData = this.barData;
      let chartType = this.options.content.chartType
      let compOp = {
          el : this.$el,
          sub : "base"
      };
      let comp;
      switch(chartType){
          case "bar" :
               comp = "Bar";
              break;
          case "line":
               comp = "Line";
              break;
          case "pie" :
              break;
          case "map":
              break;
      }
      this.$compChart = new Charts[comp](compOp)
  },
  methods:{
      resizeChart(op){
        this.chartstyle.width = op.width +"px";
        this.chartstyle.height = op.height + "px";
        this.$compChart.resize();
      }
  },
  beforeDestory(){
     this.$compChart.dispose()
  }
}
</script>

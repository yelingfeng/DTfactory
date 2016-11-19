/**
 * Created by yelingfeng on 2016/11/5.
 */
const config = {

  // 最小尺寸
  ZELEMENT_MINH : 150,
  ZELEMENT_MINW : 100,

  // 元素控制拖拽span
  ZElEMENT_SPAN:"span[class^='z-radius']",
  // 元素 选中效果class
  ZElEMENT_ELE_FOCUS : "ele-focus",

  //元素内部content header
  ZElEMENT_CONTENT_CLS : ".zlayout-eleContent",
  ZElEMENT_HEADER_CLS :  ".zlayout-eleHeader",

  ZELEMENT_COMPONENT_CLS : "zlayout-component",

  // 组件类型
  COMP_TYPE : {
    // 图表
    CHART: "0",
    // 文本
    TEXT: "1",
    // 表格
    TABLE: "2",
    // 查询
    SEARCH: "3",
    // 其他
    OTHER: "9"
  },

  // 图表类型
  CHART_TYPE:{
    BAR : "bar",
    LINE : "line",
    PIE : "pie",
    MAP : "map",
  }

}

export default config
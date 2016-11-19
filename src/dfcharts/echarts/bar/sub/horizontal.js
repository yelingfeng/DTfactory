import _ from "lodash"
import {
  getTooltip,
  getAxisLabel,
  getAxisLine,
  getAxisName,
  getGirdOption
} from "../../../props"
import * as config from "../../../config/commonConfig"


// 引用通用样式
let barColors = config.barColorList
let gridOp = {}
let axisLabel = getAxisLabel()
let axisLine = getAxisLine()

/**
 * 创建series
 * @param data
 * @returns {Array}
 */
function createSeries(data, props) {

  let _colors;
  // 小于30个数据   截取30 - len数组
  if (data.length < 30) {
    _colors = _.drop(barColors, (30 - data.length));
  } else {
    _colors = barColors;
  }

  let chainsData = _.chain(data);
  let axis = [];
  let series = [];
  let seriesObj = {};
  seriesObj.type = 'bar';
  seriesObj.data = [];
  seriesObj.itemStyle = {
    normal: {
      color: function (params) {
        var color = _colors[params.dataIndex];
        if (color == undefined) {
          var index = params.dataIndex % (_colors.length - 1);
          color = _colors[index - 1]
        }
        return color;
      }
    }
  }
  let dt = data.slice(0).reverse();
  dt.forEach((it, key) => {
    axis.push(it.ordernum);
  seriesObj.data.push({
    value: it.value,
    desc: it.name,
    name: it.name,
    info: it.info || "",
    dataObj: it,
    label: {
      normal: {
        show: true,
        position: "right",
        formatter: function (v) {
          if (v.data.value) {
            return v.data.desc + " " + v.data.value;
          }
        },
        textStyle: {
          color: 'white'
        }
      }
    },
  });
})
  series.push(seriesObj)
  return {
    series,
    axis
  };
}


function getConfig(obj, props) {
  let series;
  let axis;
  if (obj !== undefined) {
    series = obj.series;
    axis = obj.axis;
  }
  else {
    series = [];
    axis = ['无数据']
  }

  gridOp = getGirdOption(props)

  var option = {
    tooltip: getTooltip(),
    grid: gridOp,
    xAxis: [{
      name: '',
      axisLine: axisLine,
      type: 'value',
      axisLabel: axisLabel,
      scale: true,
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitNumber: 10,
      splitLine: {show: false},
    }],
    yAxis: [{
      type: 'category',
      axisLine: axisLine,
      boundaryGap: true,
      axisTick: {onGap: false},
      splitLine: {show: false},
      data: axis,
      axisLabel: {
        interval: 0,
        textStyle: axisLabel.textStyle
      }
    }],
    series: series
  }
  return option;
}


/**
 * 水平横向柱图 倒叙排列 显示text在柱上
 * @param data
 * @param props 属性配置项
 */
function setting(data, props) {

  if (data.length == 0 || (data[0].ordernum == "" && data[0].name == "")) {
    return getConfig();
  }
  let series = createSeries(data, props);
  let option = getConfig(series, props);
  return option;
}

export default  {
  setting
}
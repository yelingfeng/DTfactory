/**
 * Created by yelingfeng on 2016/10/14.
 */
import {barMaxWidth, barHoverColor} from "../../../config/barConfig"

/**
 *
 * 处理返回option
 * @param gop 分组处理后的op 包括{category: Array, xAxis: Array, series: Array}
 * @param props
 * @returns Object
 */
function setting(option, props) {
  option.barMaxWidth = barMaxWidth
  if (option.series.length) {
    option.series.forEach((it) => {
      it.itemStyle = {
        emphasis: {
          color: barHoverColor
        }
      }
    })
  }
  return option;
}


export default {
  setting
}

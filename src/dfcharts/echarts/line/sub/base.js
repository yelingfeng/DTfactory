/**
 * Created by yelingfeng on 2016/8/24.
 */
import {getLinearGradient} from "../../../props"
/**
 * 核心setting方法
 * @param option 分组处理后对象
 * @param props
 */
function setting(option, props) {

    let seriesObj = option.series;

    if (seriesObj.length) {
        seriesObj[0].itemStyle = {
            color: getLinearGradient()
        }
    }

    return option;
}

export default {
    setting
}
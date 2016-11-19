/**
 * Created by yelingfeng on 2016/8/29.
 */
import * as config from "../../config/mapConfig"
import * as commonConfig from "../../config/commonConfig"
import {axisMaxmin} from "../../props/axisHelper"

/**
 * 获取itemStyle配置
 */
export function getMapItemOption() {
    const itemStyle = {
        normal: {
            borderColor: config.mapBorderColor,
            borderWidth: config.mapBorderWidth,
            areaColor: config.mapAreaColor
        },
        emphasis: {
            label: {
                show: false
            },
            color: config.mapEmphasisColor
        }
    }
    return itemStyle;
}

/**
 * 获取label的配置
 */
export function getMapLabelOption() {
    const labelStyle = {
        normal: {
            show: false,
            textStyle: {
                fontSize: 12
            }
        }
    }
    return labelStyle;
}

/**
 * 获得VisualMap
 */
export function getMapVisualMap(data) {
    let maxMin = axisMaxmin(data, 1, {});
    const visualConfig = {
        type: 'continuous',
        color: commonConfig.commonColorList,
        min: maxMin.min,//0,
        max: maxMin.max,//1000,
        text: ['高', '低'],
        realtime: false,
        precision: 0,
        calculable: true,
        textStyle: {
            color: config.visualRangeColor
        }
    }
    return visualConfig
}
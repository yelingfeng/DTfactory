/**
 * Created by yelingfeng on 2016/8/29.
 */

import {getMapProps} from "../../../helper/propsUtil"
import * as helper from "../helper"


function setting(option, props) {
    let data = option.data;
    let mapType = getMapProps('mapType') || 'china';
    let visualMap = helper.getMapVisualMap(data)
    let series = {
        type: 'map',
        roam: true,
        mapType: mapType,
        label: helper.getMapLabelOption(),
        itemStyle: helper.getMapItemOption(),
        data: data
    }
    let op = {
        visualMap: visualMap,
        series: [series]
    }

    console.log(op)

    return op;
}
export default  {
    setting
}
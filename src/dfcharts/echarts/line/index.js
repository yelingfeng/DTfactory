/**
 * Created by yelingfeng on 2016/8/11.
 */
import ChartClass from "../../core/chartClass"
import subComps from './sub'

// sub模块构建方法名
const _settingMethod_ = "setting"

const subModuleName = {
    'base': 1,
    'single': 1
}

/**
 * 折线图图封装类
 */
export default class Line extends ChartClass {
    constructor(op) {
        super(op);
        this.registerModule('line', subModuleName)
    }

    create() {
        this.checkModule();
        // 二级模块名
        const sub = this.option.sub
        const props = this.option.props || {};
        let config = [this.option.data];
        if (sub == "base") {
            config[0] = this.axisChartSetting(this.groupData(), props)
        }
        // 单组
        else if (sub == "single") {
            config[0] = this.singleChartSetting(this.noGroupData(), props)
        }

        config[1] = props;
        let option = subComps[sub][_settingMethod_](...config
    )
        ;
        this.build(option);
    }

}
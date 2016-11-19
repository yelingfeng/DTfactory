/**
 * Created by yelingfeng on 2016/8/11.
 */
import BaseChart from "../../core/chartClass"
import subComps from './sub'

// sub模块构建方法名
const _settingMethod_ = "setting"

const subModuleName = {
    'base': 1,
    'lightMap': 2
}

/**
 * 地图封装类
 */
export default class Map extends BaseChart {
    constructor(op) {
        super(op);
        this.registerModule('map', subModuleName)
    }

    create() {
        this.checkModule();
        // 二级模块名
        const sub = this.option.sub
        // 属性
        const props = this.option.props || {};
        let config = [this.option.data];
        // 通用
        if (sub == "base") {
            config[0] = this.groupData()
        }

        config[1] = props;
        let option = subComps[sub][_settingMethod_](...config
    )
        ;
        this.build(option);
    }

}
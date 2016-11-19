/**
 * Created by yelingfeng on 2016/10/14.
 */
import ChartClass from "../../core/chartClass"
import subComps from './sub'

// sub模块构建方法名
const _settingMethod_ = "setting"

const subModuleName = {
  'base': 1,
  'horizontal': 1
}

/**
 * 柱形图封装类
 */
export default class Bar extends ChartClass {
  constructor(op) {
    super(op);
    this.registerModule('bar', subModuleName)
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
      config[0] = this.axisChartSetting(this.groupData(), props)
    }
    config[1] = props;
    let option = subComps[sub][_settingMethod_](...config)
      ;
    this.build(option);
  }
}
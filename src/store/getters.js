/**
 * Created by yelingfeng on 2016/10/25.
 */

import _ from "lodash"
/**
 * 判断当前所有组件是否加载完成
 * @param state
 * @returns {boolean}
 */
export const isLoadSuccess = state => {
  let comp = state.layout.globalData.components;
  comp = comp == undefined ? 0 : comp;
  return state.layout.loadedCompNum == comp.length ;
}

/**
 * 获取当前所有组件配置
 * @param state
 */
export const getComponents = state => state.layout.globalData.components;

/**
 * 数据源列表
 * @param state
 */
export const getDBData = state => state.dataset.globalDB;

/**
 * 数据库和存储过程
 * @param state
 */
export const getDBTree = state => state.dataset.dbTreeData;

/**
 * 执行sql和存储过程返回结果集
 * @param state
 */
export const getExecResult = state => state.dataset.execResult;

/**
 * 数据配置界面dialog状态
 * @param state
 */
export const dialogDataSetStatus = state => state.dataset.isShowDataSet;

/**
 * 级联配置界面dialog状态
 * @param state
 */
export const dialogCascadeStatus = state => state.dataset.isShowCascade;

/**
 * 动态标题界面dialog状态
 * @param state
 */
export const dialogTitleStatus = state => state.dataset.isShowTitleSet;


/**
 * header 背景色dialog状态
 * @param state
 */
export const dialogBgColorStatus = state => state.dataset.isShowBgColor;

/**
 * 右键界面dialog状态
 * @param state
 */
export const getContextMenuStatus = state => state.layout.isShowContextMenu;
/**
 * URL界面dialog状态
 * @param state
 */
export const getURLDialogStatus = state => state.layout.isShowURLDialog;

/**
 * 保存界面dialog状态
 * @param state
 */
export const getSaveMenuStatus = state => state.layout.isShowSaveMenu;

/**
 * 属性界面界面状态
 * @param state
 */
export const getPropMenuStatus = state => state.layout.isShowPropMenu;

/**
 * 获取当前鼠标位置信息
 * @param state
 * @returns {{x: (Number|*), y: (Number|*)}}
 */
export const getEventConfig = state => {
  let pageX = state.layout.pageX
  let pageY = state.layout.pageY
  return {
      x : pageX,
      y : pageY
  }
}
/**
 * 获取当前zid
 * @param state
 */
export const getCurZid = state => state.layout.curZid;

/**
 * 获取当前url跳转配置信息
 * @param state
 * @param getters
 */
export const getCurUrlSetting = (state,getters) => {
  let comp = getters.getCurComponent;
  return comp && comp.jumpConfig;
}

/**
 * 获取当前数据配置信息
 * @param state
 * @param getters
 */
export const getCurDatasets = (state , getters) =>{
  let comp = getters.getCurComponent;
  return  comp && comp.datasets && comp.datasets[0];
}

/**
 * 获取级联参数信息
 * @param state
 * @param getters
 */
export const getCurCascade = (state , getters) =>{
  let comp = getters.getCurComponent;
  return  comp && comp.cascadeSetting;
}

/**
 * 获取当前动态标题
 * @param state
 * @param getters
 * @returns {{titleName: (*|string|string|string), titleDatasets: *}}
 */
export const getCurTitleDatasets = (state , getters) =>{
  let comps = getters.getCurComponent;
  let obj = {
     titleName : comps.titleName ? comps.titleName :"",
     titleDatasets: comps.titleDatasets ? comps.titleDatasets[0] :""
  }
  return comps && obj
}

/**
 * 获取当前组件信息
 * @param state
 * @param getters
 */
export const getCurComponent = (state,getters)=>{
    let compOp = _.chain(getters.getComponents)
    .filter((comp) => {return comp.zid === getters.getCurZid })
    .first()
    .value()
   return compOp ? compOp : {}
}
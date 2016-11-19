/**
 * Created by yelingfeng on 2016/11/14.
 */
import {
  INIT_GLOBAL_DATA,
  SYNC_COMP_OPTION,
  SHOW_CONTEXT_MENU,
  HIDE_CONTEXT_MENU,
  SHOW_URL_DIALOG,
  HIDE_URL_DIALOG,
  SYNC_COMP_CACHE,
  SYNC_PAGE_XY,
  SYNC_CUR_ZID,
  SYNC_URLSETTING_OP,
  SYNC_DATASET_OP,
  SYNC_TITLE_DATASET_OP,
  SYNC_CASCADE_OP,
  SHOW_SAVE_MENU,
  HIDE_SAVE_MENU,
  SHOW_PROP_MENU,
  HIDE_PROP_MENU
} from "../mutation-types"


const state  = {
  Z:{},
  globalData : {},
  loadedCompNum :0,
  isShowContextMenu:false,
  isShowURLDialog:false,
  isShowSaveMenu:false,
  isShowPropMenu:false,
  curZid:"",
  curOption:{},
  pageX:0,
  pageY:0
};


let loadTreeComponents = function(config){
  let rootDataObj = {};
  let allDataObj = {};
  // 所有一级节点遍历
  let buildTree = (childList) => {
    childList.forEach((obj) => {
      rootDataObj[obj.zid] = obj.childList;
    });
  }

  // 所有节点遍历  方便可以掉到中间某及节点
  let buildAll = (childList) => {
    childList.forEach((obj)=>{
      allDataObj[obj.zid] = obj.childList;
      if(obj.childList && obj.childList.length){
        buildAll(obj.childList);
      }
    });
  }

  if(config && typeof config == "object"){
    buildTree(config);
    buildAll(config);

  }

  // console.log(rootDataObj);
  // console.log(allDataObj);
  return {
      tree : rootDataObj,
      all : allDataObj
  }
}


//TODO 设置子窗体数据
let setChildConfig = (data) => {

}


let buildPanelConfig = (components) => {
  components.forEach( comp => {
      console.log(comp)
  })
}


const mutations = {
  /**
   * 初始化全局Data
   * @param state
   * @param data
   */
  [INIT_GLOBAL_DATA](state, data){
    state.globalData = data;
    // 解析属性递归菜单
    let treeObj = loadTreeComponents(data.pidTreeComponents)
    state.treeOp = treeObj.tree;
    state.allOp = treeObj.all;
    //setChildConfig(data.components)

    //buildPanelConfig(data.components)

  },

  /**
   * 同步计算组件渲染个数
   * @param state
   * @param option
   */
  [SYNC_COMP_OPTION](state, option){
    state.globalData.components.forEach((it) => {
      if (option.zid === it.zid) {
        state.loadedCompNum++
      }
    })
  },

  /**
   * 缓存全局组件对象关系
   * @param state
   * @param compObj
   */
  [SYNC_COMP_CACHE](state,compObj){

      if(!state.Z[compObj.zid]){
         state.Z[compObj.zid] = compObj;
      }
  },


  [SHOW_CONTEXT_MENU](state){
     state.isShowContextMenu = true
  },
  [HIDE_CONTEXT_MENU](state){
     state.isShowContextMenu = false
  },

  [SHOW_URL_DIALOG](state){
      state.isShowURLDialog = true
  },
  [HIDE_URL_DIALOG](state){
      state.isShowURLDialog = false
  },

  [SHOW_SAVE_MENU](state){
     state.isShowSaveMenu = true;
  },

  [HIDE_SAVE_MENU](state){
    state.isShowSaveMenu = false;
  },

  [SHOW_PROP_MENU](state){
    state.isShowPropMenu = true;
  },

  [HIDE_PROP_MENU](state){
    state.isShowPropMenu = false;
  },

  /**
   * 设置当前鼠标位置
   * @param state
   * @param pageConfig
   */
  [SYNC_PAGE_XY](state , pageConfig){
    state.pageX = pageConfig.x;
    state.pageY = pageConfig.y;
  },

  /**
   * 设置当前桌面激活的组件ID
   * @param state
   * @param curZid
   */
  [SYNC_CUR_ZID](state , curZid){
     if(curZid){
       state.curZid = curZid
     }
  },
  /**
   * 设置url配置
   * @param state
   * @param op { jumpConfig:{}}
   */
  [SYNC_URLSETTING_OP](state , op){
    state.globalData.components.forEach((it) => {
      if (op.zid === state.curZid) {
        it.jumpConfig = op.jumConfig
      }
    })
  },

  /**
   * 设置数据配置
   * @param state
   * @param op {  datasets:[{xx}]}
   */
  [SYNC_DATASET_OP](state , op){
    state.globalData.components.forEach((it) => {
      if (op.zid === state.curZid) {
        it.datasets[0] = op.datasets
      }
    })
  },

  /**
   * 设置动态标题配置
   * @param state
   * @param op { titleName:xxx, titleDatasets:[{xx}]}
   */
  [SYNC_TITLE_DATASET_OP](state ,op){
    state.globalData.components.forEach((it) => {
      if (op.zid === state.curZid) {
        it.titleName = op.titleName
        it.titleDatasets[0] = op.titleDatasets
      }
    })
  },

  /**
   * 设置级联配置
   * @param state
   * @param op
   */
  [SYNC_CASCADE_OP](state , op){
    state.globalData.components.forEach((it) => {
      if (op.zid === state.curZid) {
         it.cascadeSetting = op.cascadeSetting;
      }
    })
  }

}

export default {
  state,
  mutations
}

/**
 * Created by yelingfeng on 2016/10/25.
 */
import {initSelectModules , initGetDBList ,initGetDBTree,excuteSql} from "../../api"
import * as types from '../mutation-types'
import _ from "lodash"

export const syncComponentOption = ({commit},option) => {
  commit(types.SYNC_COMP_OPTION,option);
};

// 加载全局模块
export const loadModules = ({commit,state},payload) => {
  initSelectModules(payload).then(rep => {
      if(rep.status == 200){
        commit(types.INIT_GLOBAL_DATA,rep.data.result)
      }
  });
};
//加载数据源列表
export  const loadDBList = ({commit,state},payload) => {
  initGetDBList({

  }).then(rep => {
      if(rep.status == 200){
          commit(types.INIT_GLOBAL_DB,rep.data.result)
      }
  });
};

//加载数据库表和存储过程
export const loadDBTree = ({commit,state},payload) => {
  initGetDBTree({
      datasourceId:payload.datasourceId
  }).then(rep => {
    if(rep.status == 200){
      commit(types.GET_DB_TREE,rep.data.result)
    }
  });
};

//执行sql和存储过程
export const execSQL = ({commit,state},payload) => {
  //console.log(payload);
  excuteSql({
    datasourceId:payload.datasourceId,
    sqlType:payload.sqlType,
    sql:payload.sql
  }).then(rep=>{
    if(rep.status == 200){
      commit(types.EXEC_SQL,rep.data.result)
    }
  });
};

//执行sql和存储过程
export const execSQLOUT = ({commit,state},payload) => {
  //console.log(payload);
  return excuteSql({
    datasourceId:payload.datasourceId,
    sqlType:payload.sqlType,
    sql:payload.sql
  });
};

//显示数据配置
export  const showDataSet = ({commit}) =>{
    commit(types.SHOW_DATASET)
}
//隐藏数据配置
export const hideDataSet = ({commit}) =>{
  commit(types.HIDE_DATASET)
}
//显示级联配置
export  const showCascade = ({commit}) =>{
  commit(types.SHOW_CASCADE)
}
//隐藏级联配置
export const hideCascade = ({commit}) =>{
  commit(types.HIDE_CASCADE)
}

//显示动态标题配置
export  const showTitleSet = ({commit}) =>{
  commit(types.SHOW_TITLESET)
}
//隐藏动态标题配置
export const hideTitleSet = ({commit}) =>{
  commit(types.HIDE_TITLESET)
}

// 显示保存菜单
export const showSaveMenu =({commit}) =>{
   commit(types.SHOW_SAVE_MENU)
}

// 隐藏保存菜单
export const hideSaveMenu = ({commit}) =>{
  commit(types.HIDE_SAVE_MENU)
}

// 显示右键菜单
export const showPropMenu = ({commit}) =>{
  commit(types.SHOW_PROP_MENU)
}

// 隐藏右键菜单
export const hidePropMenu = ({commit}) =>{
  commit(types.HIDE_PROP_MENU)
}


//显示header背景色
export  const showBgColor = ({commit}) =>{
  commit(types.SHOW_BG_COLOR)
}
//隐藏header背景色
export const hideBgColor = ({commit}) =>{
  commit(types.HIDE_BG_COLOR)
}

// 更新当前鼠标位置
export const syncPageXY = ({commit}, payload) => {
   commit(types.SYNC_PAGE_XY,payload)
}
//  更新当前zid
export const syncCurZid = ({commit} , zid) =>{
  commit(types.SYNC_CUR_ZID,zid)
}


/**
 * 组件鼠标点击事件
 * @param commit
 * @param dispatch
 * @param payload
 */
export const compClickAction = ({commit ,dispatch} , payload) =>{
  dispatch('syncCurZid',payload.zid)
  dispatch('hideContextMenu')
}

/**
 * 显示右键菜单
 * @param commit
 * @param dispatch
 * @param param
 */
export const showContextMenu = ({commit,dispatch },param) =>{
  dispatch('syncCurZid',param.zid);
  dispatch('syncPageXY',param).then(()=>{
    commit(types.SHOW_CONTEXT_MENU)
  })
}

/**
 * 隐藏右键菜单
 * @param commit
 */
export const hideContextMenu = ({commit}) =>{
  commit(types.HIDE_CONTEXT_MENU)
}

/**
 * 显示URL菜单
 * @param commit
 */
export const showURLDialog = ({commit}) =>{
    commit(types.SHOW_URL_DIALOG)
}

/**
 * 隐藏URL菜单
 * @param commit
 */
export const  hideURLDialog = ({commit}) =>{
    commit(types.HIDE_URL_DIALOG)
}

/**
 * 获取当前组件信息 action
 * @param getters
 * @returns {*|string}
 */
export const getActionCurrentComp = ({getters} , zid) =>{
   let compOp = _.chain(getters.getComponents)
      .filter((comp) => {return comp.zid === zid })
      .first()
      .value()
  return compOp
}


/**
 *  保存url配置信息
 * @param commit
 * @param payload
 */
export const saveUrlSetting = ({commit},payload) =>{
  commit(types.SYNC_URLSETTING_OP,payload)
}
/**
 *  保存数据配置信息
 * @param commit
 * @param payload
 */
export const saveDatasets = ({commit},payload) =>{
  commit(types.SYNC_DATASET_OP,payload)
}

/**
 *  保存数据配置信息
 * @param commit
 * @param payload
 */
export const saveTitleDatasets = ({commit},payload) =>{
  commit(types.SYNC_TITLE_DATASET_OP,payload)
}

/**
 * 保存级联
 * @param commit
 * @param payload
 */
export const saveCascadeOp = ({commit} ,payload) =>{
  commit(types.SYNC_CASCADE_OP , payload)
}
/**
 * Created by yelingfeng on 2016/11/14.
 */
/**
 * Created by yelingfeng on 2016/10/25.
 */
import _ from  "lodash"
import {
  INIT_GLOBAL_DB,
  GET_DB_TREE,
  EXEC_SQL,
  SHOW_DATASET,
  HIDE_DATASET,
  SHOW_CASCADE,
  HIDE_CASCADE,
  SHOW_TITLESET,
  HIDE_TITLESET,
  SHOW_BG_COLOR,
  HIDE_BG_COLOR
} from "../mutation-types"


const state  = {
  //数据库列表
  globalDB:[],
  //数据库表和存储过程
  dbTreeData:{},
  //sql执行结果返回数据
  execResult:{},
  //数据配置显示状态
  isShowDataSet:false,
  //级联配置显示状态
  isShowCascade:false,
  //动态标题配置显示状态
  isShowTitleSet:false,
  //背景色显示状态
  isShowBgColor:false,
};


const mutations = {
  //数据源列表
  [INIT_GLOBAL_DB](state,data){
    state.globalDB = _.chain(data)
    .sortBy('id')
    .map(function(chr) {
      return {label:chr.code,value:chr.id};
    }).value();
  },

  //数据库和存储过程 TREE
  [GET_DB_TREE](state,data){
    let pros = [];
    let tables = [];
    let dbName='';
    if(data){
      //组织存储过程数据显示格式
      pros = _.chain(data.procedures)
      .map(function (chr) {
        return {
          label:chr.objectName,
          children:_.chain(chr.arguments)
          .map(function (cchr) {
            return {label:cchr.argumentName+ '('+ cchr.dataType + ',' + cchr.inOut + ',' + cchr.inOut + ')'}
          }).value()
        }
      }).value();
      //组织表数据显示格式
      tables = _.chain(data.tables)
      .map(function (chr) {
        return {
          label:chr.tbname,
          children:_.chain(chr.columns)
          .map(function (cchr) {
            return{label:cchr.clcode}
          }).value()
        }
      }).value()

      dbName = data.dsname;
    }else{
      dbName="暂无";
    }


    state.dbTreeData = [
      {
        label:dbName,
        children:[
          {
            label:"表",
            children:tables
          },
          {
            label:"存储过程",
            children:pros
          }
        ]
      }
    ];
  },
  //执行脚本
  [EXEC_SQL](state,data){
    state.execResult = data;
  },
  //数据配置显示
  [SHOW_DATASET](state){
      state.isShowDataSet = true;
  },
  //数据配置隐藏
  [HIDE_DATASET](state){
      state.isShowDataSet = false;
  },
  //级联配置显示
  [SHOW_CASCADE](state){
    state.isShowCascade = true;
  },
  //级联配置隐藏
  [HIDE_CASCADE](state){
    state.isShowCascade = false;
  },
  //动态标题配置显示
  [SHOW_TITLESET](state){
    state.isShowTitleSet = true;
  },
  //动态标题配置隐藏
  [HIDE_TITLESET](state){
    state.isShowTitleSet = false;
  },
  //背景色显示
  [SHOW_BG_COLOR](state){
    state.isShowBgColor = true;
  },
  //背景色隐藏
  [HIDE_BG_COLOR](state){
    state.isShowBgColor = false;
  },
};


export default {
  state,
  mutations
}
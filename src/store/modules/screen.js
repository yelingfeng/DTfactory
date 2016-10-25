/**
 * Created by yelingfeng on 2016/10/25.
 */
import {
  INIT_GLOBAL_DATA,
  SYNC_COMP_OPTION,
  UPDATE_TEST_NUM
} from "../mutation-types"

const state  = {
  globalData : {},
  loadedCompNum :0,
  testNum : 0,
};


const mutations = {
  // 初始化全局Data
  [INIT_GLOBAL_DATA](state,data){
    state.globalData = data;
  },

  [SYNC_COMP_OPTION](state,option){
    state.globalData.components.forEach((it) => {
      if(option.id === it.id){
        it = option
        state.loadedCompNum++
      }
    })
  },

  [UPDATE_TEST_NUM](state , num){
     state.testNum += num;
  }
};


export default {
  state,
  mutations
}
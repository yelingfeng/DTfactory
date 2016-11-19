/**
 * Created by yelingfeng on 2016/11/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {searchPlist ,delList , changeStatue} from "../api"
import createLogger from 'vuex/dist/logger.js';
Vue.use(Vuex) ;
const isProd = process.env.NODE_ENV === 'production';
const plugins = isProd ? [] : [createLogger];


const store = new Vuex.Store({
  state :{
     plist : [],
     total : 0,
     pageSize :10,
     curPage : 1,
  },
  actions:{
    searchList:({commit ,state},payload) =>{

      payload.rows = state.pageSize;
      payload.page = state.curPage;

      searchPlist(payload).then((resp)=>{
        if(resp.status == "200"){
          commit('SET_LIST',resp.data.result)
        }
      })
    },
    delList:({commit},payload)=>{
      return delList({
          ids : payload
      })
    },

    changePStatue:({commit},payload)=>{
       return changeStatue({
           ids : payload
       })
    }
  },
  mutations:{
      SET_LIST:(state , data)=>{
        state.plist = data.rows;
        state.total = data.total;
      }
  },
  getters:{
    getList : state=> state.plist,
    getTotal: state=> state.total
  }
});

export default store ;

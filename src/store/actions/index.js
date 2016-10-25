/**
 * Created by yelingfeng on 2016/10/25.
 */
import api from "../../api"
import * as types from '../mutation-types'


// 加载全局模块
export const loadModules = ({commit,state},payload) => {

  api.initSelectModules({
      moduleId:payload.mid
  }).then(rep => {
      if(rep.status == 200){
        commit(types.INIT_GLOBAL_DATA,rep.data.result)
      }
  });
};

export const testAction = ({commit} , num) =>{
  commit(types.UPDATE_TEST_NUM,num)
}

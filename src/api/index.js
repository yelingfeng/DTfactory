import axios from "axios"
import {API_ROOT} from './config'
import qs from "qs"

export const initSelectModules = (options) => axios.get(API_ROOT + "/module/selectModule", {params: options});
//数据源列表
export const initGetDBList = (options) => axios.get(API_ROOT + "/db/getdbs",{params:options});
//数据库表和存储过程
export const initGetDBTree = (options) => axios.get(API_ROOT + "/db/getdbTree",{params:options});
//执行sql和存储过程
export const excuteSql = (options) => axios.post(API_ROOT + "/db/excuteSql",qs.stringify(options));
// 查询产品列表
export const searchPlist = (options) => axios.post(API_ROOT+"/module/selectlist",qs.stringify(options));
// 删除产品
export const delList = (options) => axios.post(API_ROOT+"/module/delModule",qs.stringify(options));
// 保存产品
export const saveOrUpdateList = (options) => axios.post(API_ROOT+"/module/saveOrUpdate",qs.stringify(options));
// 修改状态
export const changeStatue = (options) => axios.post(API_ROOT+"/module/updateStatus",qs.stringify(options));
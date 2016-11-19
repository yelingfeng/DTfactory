/**
 * Created by yelingfeng on 2016/10/25.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
  ?'http://172.17.18.1:8999/digital-factory'
  :'http://localhost:8400'
  // :"http://172.17.18.1:8999/digital-factory"

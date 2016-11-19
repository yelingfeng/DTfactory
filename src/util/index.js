/**
 * Created by yelingfeng on 2016/11/5.
 */

import uuid from "node-uuid";

export default  {

  // UUID
  getUUID(){
     return uuid.v1();
  },

  /**
   * 得到 URL参数
   * @param name
   * @returns
   */
  getUrlString(name){
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null){
      return  unescape(r[2]);
    }
    return null;
  },

  /**
   * 数字转换字符
   * @param n
   * @returns {string}
   */
  getNumberToAlphabet(n){
    let ordA = 'a'.charCodeAt(0);
    let ordZ = 'z'.charCodeAt(0);
    let len = ordZ - ordA + 1;
    let s = "";
    while(n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  }


}
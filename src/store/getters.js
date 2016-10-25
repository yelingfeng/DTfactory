/**
 * Created by yelingfeng on 2016/10/25.
 */

export const isLoadSuccess = state => {
  let comp = state.screen.globalData.components;
  comp = comp == undefined ? 0 : comp;
  return state.app.loadedCompNum == comp.length ;
}

export const getComponents = state => state.screen.globalData.components
export const getTestNum = state => state.screen.testNum
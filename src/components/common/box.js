/**
 * Created by yelingfeng on 2016/11/5.
 */
import Element from "./element"
import Component from "vue-class-component"
import {defaultOtion, getVueComponent} from "./componentStrategy"
import RC from "util/ResourcesConfig"
import $ from "jquery"
import zIndexHelper from "./zIndexCommon"
import Chart from "../charts/"
import Tables from "../table/"
import {mapActions ,mapGetters} from "vuex"

@Component({
  props: {
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    Chart, Tables
  }
})
export default class box extends Element {
  data() {
    var compName = getVueComponent(this.options.content.type)
    return {
      compName:compName,
      isRunTime: true
    }
  }

  created(){
    this.$store.dispatch('syncComponentOption',{zid:this.options.zid})
  }

  mounted() {

    let zid = this.options.zid;
    console.log(this.$refs)
    // 设置zindex
    zIndexHelper.put($("#"+zid),this.options.levelIndex)

    //this.initScreenSize();

  }

  render(h){
    let compBox
    if(this.compName == "Chart"){
      compBox =  <Chart ref='comp'></Chart>
    }
    return(
        <Element options={this.options} on-handlerC={this.clickHandler} on-contentMenu={this.contentMenuHandler}>
            {compBox}
        </Element>
    )
  }


  /**
   * 点击事件
   */
  clickHandler(e){

    this.$store.dispatch('compClickAction',{
        zid : this.zid
    })
    this.$store.dispatch('showPropMenu')
    e.preventDefault();
  }

  /**
   * 右键事件
   */
  contentMenuHandler(e){
    this.$store.dispatch('showContextMenu' ,{
        x : e.pageX,
        y : e.pageY,
        zid : this.zid
    })
    e.preventDefault();
  }



  // 初始化屏幕占比数 为自适应做处理
  initScreenSize() {
    // var size = this.getBoundSize();
    // var screenSize = {
    //   w: size.w,
    //   h: size.h,
    //   left: size.left,
    //   top: size.top >= 50 ? size.top - 50 : size.top,
    //   containerH: this.isRunTime ? this.screenParamSize.height : size.parentHeight,
    //   containerW: this.isRunTime ? this.screenParamSize.width : size.parentWidth
    // }
    // this.screenSize = screenSize;
  }


  /**
   * 设置组件标题
   */
  initCompTitle(title) {
    const me = this;
    const props = me.options.props;
    if (me.options.titleName != "") {

    }
  }


  resizeComponent() {

    this.$refs.comps.resize()
  }

  resizeBox() {
    if (!this.isView)return;
    if (this.componentType == RC.ZCOMP_TYPE.OTHER) {
      return;
    }
    var ch = $(window).height(),
      cw = $(window).width();

    var screenParam = this.screenSize;
    var vectorH = Math.floor((screenParam.h * ch ) / screenParam.containerH);
    var vectorW = Math.floor((screenParam.w * cw ) / screenParam.containerW);
    var vectorLeft = Math.floor((screenParam.left * cw ) / screenParam.containerW);
    var vectorTop = Math.floor((screenParam.top * ch ) / screenParam.containerH);
    vectorH = RC.ZELEMENT_MINH >= vectorH ? RC.ZELEMENT_MINH : vectorH;
    vectorW = RC.ZELEMENT_MINW >= vectorW ? RC.ZELEMENT_MINW : vectorW;
    vectorTop = vectorTop <= 0 ? 10 : vectorTop;
    vectorLeft = vectorLeft <= 0 ? 10 : vectorLeft;

    // 查询按钮最小left
    if (this.options.content.childType == RC.Z_SEARCH_COMPONENT.SUBMITBUTTON) {
      if (vectorLeft < 530) {
        vectorLeft = 530;
      }
    }

    if (this.componentType == RC.ZCOMP_TYPE.SEARCH &&
      this.options.content.childType !== RC.Z_SEARCH_COMPONENT.TIME_PICKER) {
      this.x = vectorLeft;
      this.y = vectorTop
    } else {
      // 变化前 left 与容器宽度比
      this.w = vectorW;
      this.h = vectorH;
      this.x = vectorLeft;
      this.y = vectorTop
    }


    this.resizeComponent();
  }


  get  compH(){
    return this.h - 30
  }

}

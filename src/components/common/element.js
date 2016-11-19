/**
 * Created by  on 2016/6/20.
 */

import Component from "vue-class-component"
import dragResize from "./dragResize"
import RC from "util/ResourcesConfig"
import {mixin} from "core-decorators"
import $ from "jquery"


function int(i){
  return parseInt(i,10);
}

@Component({
   props :{
     options:{
       type:Object
     }
   },
})
@mixin(dragResize)
export default class Element {
  data(){
      let opt = {
        lastX: 0,
        lastY: 0,
        dragging:false,
        resizeStartX:0,
        resizeStartY:0,
        resizing:false,
        rotatable:false,
        grid:[0,0],
        w:RC.ZELEMENT_MINW,
        h:RC.ZELEMENT_MINH,
        x:0,
        y:0,
        axis:'both',
        handle:'',
        cancel:false,
        bounds:{parent:true},
        contentBoxStyle:{},

        // 编辑状态
        isEditor:false
      }
      return opt
  }
  created(){
    let width = int(this.options.coordinate.width);
    let height = int(this.options.coordinate.height);
    this.top = int(this.options.coordinate.y);
    this.left = int(this.options.coordinate.x);
    this.w = width;
    this.h = height;
    this.x = 0;
    this.y = 0;
    this.zid = this.options.zid;
    this.componentType = this.options.content.type;
  }
  mounted(){
      this.addEvent('handleMove',this)
      //this.contentBox = $(this.$rel.contentBox);

      $(document).click((e) => {
          this.handleUp()
          this.isEditor = false;
      })
  }
  beforeDestroy(){
      this.removeEvent('handleMove',this)
  }
  /**
   *
   */
  getBoundSize(){
      //console.log(this.$parent.$el.nextSibling)
      var $centerBox = $("#"+RC.VIEW_CENTER_ID);
      let obj ={
          parentWidth :$centerBox.width(),
          parentHeight : $centerBox.height(),
          top : this.y,
          left  : this.x,
          right : $centerBox.outerWidth(true) - this.w - this.x ,
          bottom : $centerBox.outerHeight(true)  - this.h - this.y,
          w : this.w,
          h : this.h
      };
      return obj ;
  }

  // 拖拽或者resize时候显示边框
  get isEleFocus(){
    return  this.dragging ||  this.resizing;
  }
  // 绑定样式
  get boxStyle(){
      let _this = this;
      return {
        width:this.w+'px',
        height:this.h+'px',
        left:this.left +"px",
        top : this.top + "px",
        transform:'translate('+this.x+'px,'+this.y+'px)'
      }
  }
  get initStyle(){
      return {

      }
  }

  get contentBoxStyle(){
    return {
      width :this.w +'px',
      height : (this.h - 25) + "px"
    }
  }


  rbScaleMouseDown(e){
    this.resizeStart(e)
    e.stopPropagation()
  }

  handlerClick(e){

    this.isEditor = true;
    this.$emit('handlerC',e);
    e.stopPropagation();
  }


  handleContextMenu(e){
    this.$emit('contentMenu',e);
    e.stopPropagation();
  }

  render(h){
    return (
      <div class="df-element" id={this.options.zid}
          on-mousedown={this.handleDown} on-mouseup={this.handleUp} style={this.boxStyle} on-click={this.handlerClick}
          on-contextmenu={this.handleContextMenu}
          >
        <div class="df-eheader">{this.options.titleName}</div>
        <div class="df-content" >
           <div class="df-component"  style={this.contentBoxStyle}>
            {this.$slots.default}
           </div>
        </div>
        <div class="df-rb" style={{display:this.isEditor?"block":"none"}}>
          <span class="df-rb__scale" on-mousedown={this.rbScaleMouseDown}></span>
        </div>
     </div>
   )
  }
}




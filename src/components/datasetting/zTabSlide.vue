<template>
    <div class="df-dset__tabSwitch" >
        <div class="df-dset__tabSwitch--tabWrap" >
            <ul class="df-dset__tabSwitch--tabList" :style="tabListStyle">
                <li v-for="item in tabList" @dblclick="addParam($event)">{{item}}</li>
            </ul>
        </div>
        <div class="df-dset__tabSwitch--left" @click="putLeft"><i class="el-icon-arrow-left"></i></div>
        <div class="df-dset__tabSwitch--right" @click="putRight"><i class="el-icon-arrow-right"></i></div>
    </div>
</template>
<style>

</style>
<script>
    import $ from "jquery";
    export default{
        data(){
            return{
                xleft :0,
                curIndex:0,
            }
        },
        props: ['tabList'],
        computed:{
            //返回参数区域定位
            tabListStyle(){
                return {
                    left: this.xleft + 'px'
                }
            }
        },
        methods:{
            //获取tablist外层div宽度
            getWrapWidth(){
                return $(".df-dset__tabSwitch--tabWrap").width()
            },
            //左滑动
            putLeft(){
                let n = Math.floor(this.getWrapWidth()/85)
                if((Math.abs(this.curIndex) + n) < this.tabList.length){
                    this.curIndex --;
                    this.xleft -= 95;
                }
            },
            //右滑动
            putRight(){
                if(this.xleft>=0){
                    this.xleft = 0;
                }else{
                    this.curIndex ++;
                    this.xleft += 95;
                }
            },
            //tablist>li双击添加到sql编辑区域
            addParam(event){
                let liVal = '%%' + event.srcElement.innerText + '%%';
    			this.$emit('addParam',liVal)  //触发事件，数据传回父组件
            },
        }
    }
</script>

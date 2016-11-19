<template>
    <div class="df-smartMenu" v-show="isShow" :style="{left:offsetX+'px',top:offsetY+'px'}"  >
        <div class="df-smartMenu__body">
            <ul class="df-smartMenu__ul">
                <li v-for="item in itemsLi" class="df-smartMenu__li" @click.stop="firstMenu(item.type)">
                    <a href="javascript:;" class="df-smartMenu__a">
                        {{item.text}}
                        <i class="df-smartMenu__i" v-show="item.box"></i>
                    </a>
                    <div class="df-smartMenu__box aa" v-if="item.box">
                        <div class="df-smartMenu__body">
                            <ul class="df-smartMenu__ul">
                                <li class="df-smartMenu__li" v-for="box in item.box" @click.stop="secondMenu(box.type)">
                                    <a href="javascript:;" class="df-smartMenu__a">{{box.text}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions ,mapGetters} from "vuex"
    export default {
        data(){
            return {
                itemsLi:[
                    {"type":"border","text":"控件边框","box":[{"type":"noBorder","text":"无边框"},{"type":"borderStyle","text":"边框样式"}]},
                    {"type":"zIndex","text":"控件层级","box":[{"type":"up","text":"上移一层"},{"type":"down","text":"下移一层"},{"type":"highest","text":"置顶"},{"type":"lowest","text":"置底"}]},
                    {"type":"dataSetting","text":"数据源配置","box":[{"type":"dset","text":"数据源配置"},{"type":"cd","text":"子窗体配置"},{"type":"URL","text":"URL配置"}]},
                    {"type":"cascade","text":"级联配置","box":[{"type":"noCascade","text":"无级联"},{"type":"rowCascade","text":"横向级联"}]},
                    {"type":"remove","text":"移除控件"},
                ],
                offsetX:0,
                offsetY:0
            }
        },
        computed:{
            ...mapGetters({
                isShow : "getContextMenuStatus",
                eventConfig  : "getEventConfig"
            })
        },
        watch:{
            eventConfig:{
                deep:true,
                handler(items){
                    let x = document.body.clientWidth;
                    let y = document.body.clientHeight;
                    let _this = this;
                    _this.offsetX = items.x;
                    _this.offsetY = items.y -65;
                    if(_this.offsetX/x >=0.9){
                        _this.offsetX = _this.offsetX - 200
                    }
                    if(_this.offsetY/y>=0.7){
                        _this.offsetY = _this.offsetY - 100
                    }
                }
            }

        },
        methods:{
            mouseDown(e){
                console.log(e)
            },
            firstMenu(type){
                this.$store.dispatch('hideContextMenu')
            },
            secondMenu(type){
                if(type == "URL"){
                    this.$store.dispatch('showURLDialog');
                }else if(type == "dset"){
                    this.$store.dispatch('showDataSet');
                }else if(type == "rowCascade"){
                    this.$store.dispatch('showCascade');
                }
                this.$store.dispatch('hideContextMenu')
            }
        },
        mounted(){
            let _this = this;
            _this.$nextTick(function () {
//                document.oncontextmenu = function () {
//                    return false;
//                }
            })
        },
    }

</script>

<style>
    @component-namespace df {
        @b smartMenu{
            width: 150px;
            position: absolute;
            z-index: 201105;

            @e body{
                padding: 1px;
                border: 1px solid #B8CBCB;
                background-color: #fff;
                -moz-box-shadow: 2px 2px 5px #666;
                -webkit-box-shadow: 2px 2px 5px #666;
                box-shadow: 2px 2px 5px #666;
            }

            @e ul{
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            @e li{
                position: relative;
            }

            @e li:hover{
                &>a{
                    color:#fff;
                    background-color: deepskyblue;
                }
                &>div{
                    display: block;
                    top: -1px;
                    left: 130px;
                }
            }

            @e a{
                display: block;
                height: 25px;
                line-height: 24px;
                padding: 0 5px 0 25px;
                color: #000;
                font-size: 12px;
                text-decoration: none;
                overflow: hidden;
            }

            @e box{
                display: none;
                width: 150px;
                position: absolute;
                z-index: 201105;
            }
            @e i{
                width: 0;
                height: 0;
                border: 5px dashed transparent;
                border-left: 5px solid #666;
                overflow: hidden;
                position: absolute;
                top: 7px;
                right: 5px;
            }
        }
    }
</style>

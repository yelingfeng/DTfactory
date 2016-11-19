<template>
    <div class="df-smartMenu" v-show="isShow">
        <div class="df-smartMenu__body">
            <ul class="df-smartMenu__ul">
                <li v-for="item in itemsLi" class="df-smartMenu__li">
                    <a href="javascript:;" class="df-smartMenu__a">
                        {{item.text}}
                        <i class="df-smartMenu__i" v-show="item.box"></i>
                    </a>
                    <div class="df-smartMenu__box" v-if="item.box">
                        <div class="df-smartMenu__body">
                            <ul class="df-smartMenu__ul">
                                <li class="df-smartMenu__li" v-for="box in item.box">
                                    <a href="javascript:;" class="df-smartMenu__a">{{box.text}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <p>
            {{eventConfig.x}} - {{eventConfig.y}}
        </p>
    </div>
</template>

<script>
   import {mapGetters} from "vuex"
    export default {
        data(){
            return {
                itemsLi:[
                    {"text":"aaddgg","box":[{"text":"1234"}]},
                    {"text":"faadf"},
                    {"text":"adfdfa"},
                    ]
            }
        },
        computed:{
             ...mapGetters({
                isShow : "getContextMenuStatue",
                eventConfig  : "getEventConfig"
             })
        },
        methods:{
            mouseDown(e){
                console.log(e)
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
    .df-smartMenu{
        width: 150px;
        position: absolute;
        z-index: 201105;
    }
    .df-smartMenu__body{
        padding: 1px;
        border: 1px solid #B8CBCB;
        background-color: #fff;
        -moz-box-shadow: 2px 2px 5px #666;
        -webkit-box-shadow: 2px 2px 5px #666;
        box-shadow: 2px 2px 5px #666;
    }
    .df-smartMenu__ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .df-smartMenu__li{
        position: relative;
    }
    .df-smartMenu__li:hover .df-smartMenu__a{
        color:#fff;
        background-color: deepskyblue;
    }
    .df-smartMenu__a{
        display: block;
        height: 25px;
        line-height: 24px;
        padding: 0 5px 0 25px;
        color: #000;
        font-size: 12px;
        text-decoration: none;
        overflow: hidden;
    }
    .df-smartMenu__box{
        width: 150px;
        position: absolute;
        z-index: 201105;
    }
    .df-smartMenu__li:hover .df-smartMenu__box{
        top: -1px;
        left: 130px;
    }
    .df-smartMenu__i{
        width: 0;
        height: 0;
        border: 5px dashed transparent;
        border-left: 5px solid #666;
        overflow: hidden;
        position: absolute;
        top: 7px;
        right: 5px;
    }
</style>

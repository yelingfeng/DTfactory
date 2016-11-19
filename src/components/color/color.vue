<template>
    <div class="df-color">
        <div class="df-color__box">
            <span class='df-color__box--bg' @click="openColor" :style="chooseResutlBg"></span>
            <span class='df-color__box--choose' @click.stop="openColor"></span>
        </div>
       <sketch-picker v-show="colorVisible" v-model="colors" @change-color="onChange(val,$event)"></sketch-picker>
    </div>
</template>
<style>
    @component-namespace df {
        @b color{
            @e box{
                width:80px;
                height:36px;
                border:1px solid #d9d9d9;
                @m bg{
                    display:inline-block;
                    width:40px;
                    height:20px;
                    margin:8px 4px;
                    background:red;
                    cursor:pointer;
                }
                @m choose {
                    display:inline-block;
                    width:12px;
                    height:12px;
                    margin:12px 4px;
                    background:url('../../assets/images/icon_bg.jpg') no-repeat;
                    cursor:pointer;
                }
            }
        }
    }
</style>
<script>
    import { Sketch } from 'vue-color'
    import $ from "jquery"
    export default{
        data(){
            return {
                colorVisible:false,
                colorVal:"#000000",
                colors:{
                    hex: this.colorVal,
                }
            }
        },
        mounted(){
            let _this = this;
            $(document).click(function(){
                 _this.colorVisible = false;
             });
        },
        computed:{
            //返回参数区域定位
            chooseResutlBg(){
                return {
                    background: this.colorVal
                }
            }
        },
        components: {
            'sketch-picker': Sketch
        },
        methods:{
            openColor(){
                let _this = this;
                this.colorVisible = true;
            },
            onChange(val){
                this.colors = val;
                this.colorVal  = val.hex;
            }
        }
    }

</script>

<template>
    <div class="df-bgColor">
        <el-dialog title="背景色" v-model="isShow" size="tiny">
            <div>
                <el-row>
                    <el-col :span="3">
                        <span class='df-bgColor__title'>背景色:</span>
                    </el-col>
                    <el-col :span="21">
                        <color></color>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span class='df-bgColor__title'>透明度:</span>
                    </el-col>
                    <el-col :span="21">
                        <div class="block">
                            <el-slider
                                    v-model="slideVal"
                                    show-input>
                            </el-slider>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native="hideBgColor">取 消</el-button>
                <el-button type="primary" @click.native="bgColorSubmit">确 定</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<style>
   @component-namespace df {
       @b bgColor {
           @e title{
                height:36px;
                line-height:36px;
           }
       }
   }
</style>
<script>
    import {mapActions ,mapGetters} from "vuex"
    import $ from "jquery"
    import _ from  "lodash"
    import color from  "components/color/color"
    export default{
        data(){
            return{
                slideVal:50
            }
        },
        computed:{
            ...mapGetters({
                isShow:"dialogBgColorStatus"
            }),
        },
        components:{
            color
        },
        methods:{
            hideBgColor(){
                this.$store.dispatch('hideBgColor');
            },
            dataSetSubmit(){
                //TODO
                this.hideBgColor();
            }
        }
    }
</script>

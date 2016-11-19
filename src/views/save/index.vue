<template>
    <el-dialog title="保存产品" v-model="isShow" size="tiny"  @close="hideSaveMenu">
        <el-form ref="form" :model="saveform" label-width="80px">
            <el-form-item label="产品名称">
                <el-input v-model="saveform.name"></el-input>
            </el-form-item>
            <el-form-item label="产品描述">
                <el-input type="textarea" v-model="saveform.desc"></el-input>
            </el-form-item>
        </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native="hideSaveMenu">取 消</el-button>
                <el-button type="primary" @click.native="saveAction">确 定</el-button>
              </span>
    </el-dialog>
</template>
<style>
</style>
<script>
import {mapGetters,mapActions} from "vuex"
export default{
    data(){
        return{
           "saveform":{
                name:"",
                desc:""
            }
        }
    },
    methods:{
        ...mapActions(['saveDfAction','hideSaveMenu'] )
    },
    computed:{
         ...mapGetters({
            'isShow':'getSaveMenuStatus'
         })
    }
}
</script>

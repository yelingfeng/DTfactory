<template>
    <div class="container">
        <div class="header">
                <el-row >
                    <el-col :span="24" :offset="1">
                        <el-form :inline="true" :model="plistForm"  class="demo-form-inline">
                            <el-form-item>
                                <el-input v-model="plistForm.name" placeholder="产品名称"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="plistForm.status" placeholder="产品状态">
                                    <el-option label="有效" value="1"></el-option>
                                    <el-option label="无效" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click.native="onSubmit">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
        </div>
        <el-row>
            <div class="toolbar">
                <el-button type="primary" icon="edit"></el-button>
                <el-button type="primary" icon="share"></el-button>
                <el-button type="primary" icon="delete"></el-button>
            </div>
            <el-col :span="24">
                <ptable></ptable>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ptable from "./views/plistTable"
export default {
  data() {
      return {
          plistForm:{
              name:"",
              status:""
          }
      }
  },
  methods: {
    onSubmit() {
        console.log(this.plistForm);
    }
  },
  components:{
      ptable
  }
}
</script>
<style>
@reset-global pc;
body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

.header{
    height: 50px;
    line-height:50px;
    margin:10px auto;
}

.toolbar {
    height : 30px;
    margin:10px;
}

</style>

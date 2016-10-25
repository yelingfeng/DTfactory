<template>
    <div class="screen">
        <el-button :plain="true" @click.native="open5">消息</el-button>
        <el-button :plain="true" @click.native="open6">成功</el-button>
        <el-button :plain="true" @click.native="open7">警告</el-button>
        <el-button :plain="true" @click.native="open8">错误</el-button>

        <el-card class="box-card">
            <div v-for="comp in componentsArr" class="text item">
                {{comp.code}}
            </div>
        </el-card>

        <br/>
        <p>{{testNum}}</p>
        <el-button type="primary" @click.native="changeTestNum">测试vuex</el-button>
    </div>
</template>
<script>
import {mapActions ,mapGetters} from "vuex"
export default{
  name:"screen",
  data(){
    return{

    }
  },
  computed:{
     ...mapGetters({
         componentsArr:'getComponents',
         testNum : 'getTestNum'
     })
  },
  mounted(){
      this.getScreenData('1')
  },
  methods: {
    ...mapActions({
       getScreenData: 'loadModules',
       testAction : 'testAction'
    }),
    open5() {
        this.$message({
            showClose: true,
            message: '恭喜你，这是一条成功消息'
        });
    },
    open6() {
        this.$message({
            showClose: true,
            message: '警告哦，这是一条警告消息',
            type: 'warning'
        });
    },

    open7() {
        this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
        });
    },

    open8() {
        this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
        });
    },

    changeTestNum(){
        this.testAction(1);
    }
  }
}
</script>

<style>
.screen{
    width:1000px;
    height : 600px;
    border: 1px solid #ccc;
    margin: 10px auto ;
    padding:5px;
}

.box-card{
    margin-top: 10px;
    width : 480px;
}
</style>
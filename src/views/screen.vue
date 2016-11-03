<template>
    <div class="df-screen">
        <div class="df-screen__element df-screen__element--hover">
            <el-button :plain="true" @click.native="open5">消息</el-button>
            <el-button :plain="true" @click.native="open6">成功</el-button>
            <el-button :plain="true" @click.native="open7">警告</el-button>
            <el-button :plain="true" @click.native="open8">错误</el-button>

            <el-card class="box-card">
                <div v-for="comp in componentsArr" class="text item">
                    {{comp.code}}
                </div>
            </el-card>

        </div>
        <p>{{testNum}}</p>
        <el-button type="primary" @click.native="changeTestNum">测试vuex</el-button>
        <p>
            <color ></color>
        </p>
    </div>
</template>
<script>
import {mapActions ,mapGetters} from "vuex"
import color from "components/common/colorpicker/index.vue"
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
     onChange (val) {
      console.log(val)
    },
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
  },
  components:{
      color
  }
}
</script>

<style>
@import "../assets/css/screen.css";
.box-card{
    margin-top: 10px;
    width : 480px;
}
</style>
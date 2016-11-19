<template>
    <div>
        <el-dialog  title="选择图表" v-model="opOr" size="large" class="df-navbox">
            <div class="df-nav">
                <el-row>
                    <el-col :span="4">
                        <ul>
                            <li v-for="(item,index) in menuItem" :class="[menuChartType,{'df-nav__menuActive' : menuActive == index}]" @click="menuClick(index,item.type,item.text)">{{item.text}}</li>
                        </ul>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-pink " :class="contentClass">
                            <el-tabs>
                                <el-tab-pane :label="chartText"></el-tab-pane>
                            </el-tabs>
                            <el-row>
                                <el-col :span="6" v-for="(item,index) in filteredItems"  :class="contentChart">
                                    <div  :class="[contentCard , {'df-nav__contentCardActive' : isActive == index}]" @click="activeCard(index,item.type)" >
                                        <span  :class="spanClass">{{item.text}}</span>
                                        <div :class="[contentImg,item.type]" ></div>
                                    </div>
                                </el-col>
                            </el-row>
                            <div :class="contentBottom">
                                <div :class="contentButton">
                                    <el-button type="primary" @click="submit">确定</el-button>
                                    <el-button @click="closeFrame">取消</el-button>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import $ from "jquery"
    // 控件view
    export default {
        name :"control",
        data(){
            return {
                buttonOpen:true,
                dialogVisible:false,
                opOr:false,
                menuItem:[
                    {"type":"Pie","text":"饼图"},
                    {"type":"Bar","text":"柱状图"},
                    {"type":"Line","text":"折线图"},
                    {"type":"Map","text":"地图"},
                    {"type":"Radar","text":"雷达图"},
                    {"type":"Graph","text":"关系图"},
                    {"type":"HeatMap","text":"热力图"},
                    {"type":"Table","text":"表格"},
                    {"type":"Text","text":"文本"},
                    {"type":"Search","text":"查询"},
                    {"type":"Other","text":"其他"}
                ],
                chartItem:[
                    {"type":"bar1","imgSrc":"bar1.png","init":false}
                ],
                allChartItems:{
                    "Pie":[
                        {"type":"pie1","imgSrc":"pie1.png","text":"饼图1","init":false},
                        {"type":"pie2","imgSrc":"pie1.png","text":"饼图2"},
                        {"type":"pie3","imgSrc":"pie1.png","text":"饼图3"},
                        {"type":"pie3","imgSrc":"pie1.png","text":"饼图3"},
                        {"type":"pie3","imgSrc":"pie1.png","text":"饼图3"},
                        {"type":"pie3","imgSrc":"pie1.png","text":"饼图3"},
                    ],
                    "Bar":[
                        {"type":"bar1","imgSrc":"bar1.png","text":"柱图1","init":false},
                        {"type":"bar2","imgSrc":"bar1.png","text":"柱图2"},
                        {"type":"bar3","imgSrc":"bar1.png","text":"柱图3"},
                    ],
                    "Line":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],
                    "Map":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],
                    "Radar":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],
                    "Graph":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],
                    "HeatMap":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],"Table":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],"Text":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],"Search":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],"Other":[
                        {"type":"line1","imgSrc":"line1.png","text":"折线图1","init":false},
                        {"type":"line2","imgSrc":"line1.png","text":"折线图2"},
                        {"type":"line3","imgSrc":"line1.png","text":"折线图3"},
                    ],
                },
                chartText:"图表类型",
                chartType:"",
                spanClass:"df-nav__contentSpan",
                contentCard:"df-nav__contentCard",
                contentClass:"df-nav__content",
                contentChart:"df-nav__contentChart",
                contentImg:" df-nav__contentImg",
                contentBottom:"df-nav__contentBottom",
                contentButton:"df-nav__contentButton",
                menuChartType:"df-nav__menuChartType",
                openButton:"df-nav__openButton",
                activeChart:"",
                isActive:-1,
                menuActive:0
            }
        },
        methods:{
            handleOpen(){
                this.openOrClose = !this.openOrClose
                this.buttonOpen = !this.buttonOpen
            },
            handleclose(){

            },
            menuClick(index,type,text){
                let _this = this;
                _this.isActive = -1;
                _this.menuActive = index;
                _this.activeChart = "";
                _this.chartItem = this.allChartItems[type]
                _this.chartText = text;
                _this.chartType = type;
            },
            activeCard(index,type){
                if(this.isActive == index){
                    this.isActive = -1;
                    this.activeChart = "";
                }else{
                    this.isActive = index;
                    this.activeChart = type;
                }
            },
            submit(){
                let _this = this
                if(_this.activeChart == ""){
                    alert("请选择一个图表")
                }else{
                    let chartInfo = {
                        "chartType":"",
                        "chart":""
                    }
                    chartInfo.chartType = _this.chartType
                    chartInfo.chart = _this.activeChart
                    console.log(chartInfo)
                }
            },
            closeFrame(){
                this.buttonOpen = true
                this.$emit('close');
            }
        },
        computed:{
            filteredItems(){
                let _this = this;
                let item = _this.chartItem[0];
                if(item["init"] == false){
                    _this.chartItem.forEach(e => {e.imgSrc = "../assets/images/"+e.imgSrc})
                    item["init"] = true;
                }
                return _this.chartItem;
            }
        },
        mounted: function () {
            let _this = this;
            _this.$nextTick(function () {
                _this.chartItem = _this.allChartItems["Pie"]
                _this.chartType = "Pie"
                _this.chartText = "饼图"
            })
        },
        props:["openOrClose"],
        watch:{
            openOrClose:{
                deep:true,
                handler(e){
                    this.opOr = e;
                }
            },
            opOr:{
                deep:true,
                handler(e){
                    if(e==false){
                        this.$emit('close');
                    }
                }
            }
        }
    }
</script>
<style>
    @import  "../../assets/css/choiceChart.css";

</style>
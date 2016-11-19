/**
 * Created by yelingfeng on 2016/11/5.
 */
/**
 * 初始化模拟数据方法
 */
import  RC from "util/ResourcesConfig"
const  TYPE = RC.CHART_TYPE;
const  compType = RC.COMP_TYPE;
const  BAR = TYPE.BAR;
const  LINE = TYPE.LINE;
const  MAP = TYPE.MAP;
const  PIE = TYPE.PIE;
let CD = {
};
CD[BAR] = {
  "0" : [{ name: '数据1', value: 10 ,category:"分类A"},
    { name: '数据1', value: 20 ,category:"分类A"},
    { name: '数据1', value: 30 ,category:"分类A"},
    { name: '数据2', value: 30 ,category:"分类B"},
    { name: '数据2', value: 15 ,category:"分类B"},
    { name: '数据2', value: 25 ,category:"分类B"},
    { name: '数据3', value: 25 ,category:"分类C"},
    { name: '数据3', value: 35 ,category:"分类C"},
    { name: '数据3', value: 45 ,category:"分类C"}],
  "zb1": [{"ordernum":"1","value":"27.88","service_group_id":"19","name":"其他HTTP应用",},{"ordernum":"2","value":"19.1","service_group_id":"20","name":"传统互联网应用",},{"ordernum":"3","value":"10.47","service_group_id":"11","name":"下载工具",},{"ordernum":"4","value":"9.58","service_group_id":"14","name":"网络游戏",},{"ordernum":"5","value":"8.9","service_group_id":"1","name":"通用协议",},{"ordernum":"6","value":"6.16","service_group_id":"8","name":"视频",},{"ordernum":"7","value":"3.98","service_group_id":"38","name":"其他移动互联网应用",},{"color":"#77D011","ordernum":"8","value":"3.07","service_group_id":"17","name":"终端控制",},{"ordernum":"9","value":"3.04","service_group_id":"2","name":"即时通信",},{"ordernum":"10","value":"2.85","service_group_id":"32","name":"移动互联网VoIP业务",},{"ordernum":"11","value":"2.07","service_group_id":"3","name":"文件传输",},{"ordernum":"12","value":"0.59","service_group_id":"23","name":"移动互联网即时通信",},{"ordernum":"13","value":"0.54","service_group_id":"15","name":"网络安全",},{"ordernum":"14","value":"0.37","service_group_id":"6","name":"微博",},{"ordernum":"15","value":"0.34","service_group_id":"4","name":"门户网站",},{"ordernum":"16","value":"0.27","service_group_id":"9","name":"音乐",},{"color":"#4F438C","ordernum":"17","value":"0.15","service_group_id":"24","name":"移动互联网阅读",},{"ordernum":"18","value":"0.13","service_group_id":"10","name":"电子邮件",},{"ordernum":"19","value":"0.13","service_group_id":"16","name":"数据库",},{"ordernum":"20","value":"0.13","service_group_id":"12","name":"搜索工具",}],
  "zb2": [{ name: '05:00', value: 10 ,category:"联通"},
    { name: '05:00', value: 20 ,category:"联通"},
    { name: '05:00', value: 30 ,category:"联通"},
    { name: '08:00', value: 30 ,category:"移动"},
    { name: '08:00', value: 15 ,category:"移动"},
    { name: '08:00', value: 25 ,category:"移动"},
    { name: '10:00', value: 25 ,category:"电信"},
    { name: '10:00', value: 35 ,category:"电信"},
    { name: '10:00', value: 45 ,category:"电信"}],
  "cq1" : [{ name: '制造页', value: 10 ,category:"A"},
    { name: '金融', value: 20 ,category:"A"},
    { name: '教育', value: 50 ,category:"A"},
    { name: '个人', value: 60 ,category:"A"},
    { name: '军队', value: 15 ,category:"A"},
    { name: '事业单位', value: 120 ,category:"A"}],
  "cq2" : [{ name: '制造页', value: 10 ,category:"A"},
    { name: '金融', value: 20 ,category:"A"},
    { name: '教育', value: 50 ,category:"A"},
    { name: '个人', value: 60 ,category:"A"},
    { name: '军队', value: 15 ,category:"A"},
    { name: '事业单位', value: 120 ,category:"A"}]
};
CD[LINE] = {
  "z1":[{"direction":null,"flowRate":null,"flowin":15312.2,"flowout":15312.2,"xtime":"2015-11-02 22:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":15624.99,"flowout":15624.99,"xtime":"2015-11-02 22:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":15088.06,"flowout":15088.06,"xtime":"2015-11-02 22:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":14856.74,"flowout":14856.74,"xtime":"2015-11-02 22:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":14713.39,"flowout":14713.39,"xtime":"2015-11-02 23:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":14290.73,"flowout":14290.73,"xtime":"2015-11-02 23:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13373.7,"flowout":13373.7,"xtime":"2015-11-02 23:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12679.9,"flowout":12679.9,"xtime":"2015-11-02 23:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":11900.41,"flowout":11900.41,"xtime":"2015-11-03 00:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":11338.52,"flowout":11338.52,"xtime":"2015-11-03 00:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":9882.53,"flowout":9882.53,"xtime":"2015-11-03 00:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":9242.08,"flowout":9242.08,"xtime":"2015-11-03 00:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":8625.66,"flowout":8625.66,"xtime":"2015-11-03 01:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":8041.89,"flowout":8041.89,"xtime":"2015-11-03 01:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":7711.37,"flowout":7711.37,"xtime":"2015-11-03 01:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":7155.82,"flowout":7155.82,"xtime":"2015-11-03 01:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6861.59,"flowout":6861.59,"xtime":"2015-11-03 02:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6582.6,"flowout":6582.6,"xtime":"2015-11-03 02:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6394.17,"flowout":6394.17,"xtime":"2015-11-03 02:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6016.73,"flowout":6016.73,"xtime":"2015-11-03 02:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5811.44,"flowout":5811.44,"xtime":"2015-11-03 03:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5580.05,"flowout":5580.05,"xtime":"2015-11-03 03:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5200.75,"flowout":5200.75,"xtime":"2015-11-03 03:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4952.08,"flowout":4952.08,"xtime":"2015-11-03 03:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4784,"flowout":4784,"xtime":"2015-11-03 04:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4756.11,"flowout":4756.11,"xtime":"2015-11-03 04:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4589.85,"flowout":4589.85,"xtime":"2015-11-03 04:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4515.22,"flowout":4515.22,"xtime":"2015-11-03 04:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4433.02,"flowout":4433.02,"xtime":"2015-11-03 05:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4621.39,"flowout":4621.39,"xtime":"2015-11-03 05:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4456.98,"flowout":4456.98,"xtime":"2015-11-03 05:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4541.2,"flowout":4541.2,"xtime":"2015-11-03 05:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4509.04,"flowout":4509.04,"xtime":"2015-11-03 06:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":4871.36,"flowout":4871.36,"xtime":"2015-11-03 06:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5120.47,"flowout":5120.47,"xtime":"2015-11-03 06:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5481.12,"flowout":5481.12,"xtime":"2015-11-03 06:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":5849.04,"flowout":5849.04,"xtime":"2015-11-03 07:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6287.75,"flowout":6287.75,"xtime":"2015-11-03 07:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6700.95,"flowout":6700.95,"xtime":"2015-11-03 07:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":6992.19,"flowout":6992.19,"xtime":"2015-11-03 07:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":7581.58,"flowout":7581.58,"xtime":"2015-11-03 08:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":8066.01,"flowout":8066.01,"xtime":"2015-11-03 08:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":8802.27,"flowout":8802.27,"xtime":"2015-11-03 08:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":9737.44,"flowout":9737.44,"xtime":"2015-11-03 08:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":10310.96,"flowout":10310.96,"xtime":"2015-11-03 09:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":10928.55,"flowout":10928.55,"xtime":"2015-11-03 09:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":11144.47,"flowout":11144.47,"xtime":"2015-11-03 09:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":11547.05,"flowout":11547.05,"xtime":"2015-11-03 09:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":11561.8,"flowout":11561.8,"xtime":"2015-11-03 10:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12284.44,"flowout":12284.44,"xtime":"2015-11-03 10:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12412.19,"flowout":12412.19,"xtime":"2015-11-03 10:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12728.91,"flowout":12728.91,"xtime":"2015-11-03 10:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12475.29,"flowout":12475.29,"xtime":"2015-11-03 11:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12613.82,"flowout":12613.82,"xtime":"2015-11-03 11:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12776.09,"flowout":12776.09,"xtime":"2015-11-03 11:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13016.17,"flowout":13016.17,"xtime":"2015-11-03 11:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12799.63,"flowout":12799.63,"xtime":"2015-11-03 12:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12984.83,"flowout":12984.83,"xtime":"2015-11-03 12:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13189.4,"flowout":13189.4,"xtime":"2015-11-03 12:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13582.81,"flowout":13582.81,"xtime":"2015-11-03 12:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13309.87,"flowout":13309.87,"xtime":"2015-11-03 13:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13534.07,"flowout":13534.07,"xtime":"2015-11-03 13:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13188.69,"flowout":13188.69,"xtime":"2015-11-03 13:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13209.94,"flowout":13209.94,"xtime":"2015-11-03 13:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13033.09,"flowout":13033.09,"xtime":"2015-11-03 14:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13467.24,"flowout":13467.24,"xtime":"2015-11-03 14:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13293.8,"flowout":13293.8,"xtime":"2015-11-03 14:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13404.72,"flowout":13404.72,"xtime":"2015-11-03 14:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13009.68,"flowout":13009.68,"xtime":"2015-11-03 15:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13490.87,"flowout":13490.87,"xtime":"2015-11-03 15:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13468.63,"flowout":13468.63,"xtime":"2015-11-03 15:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13144.83,"flowout":13144.83,"xtime":"2015-11-03 15:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13062.46,"flowout":13062.46,"xtime":"2015-11-03 16:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13206.07,"flowout":13206.07,"xtime":"2015-11-03 16:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13005.76,"flowout":13005.76,"xtime":"2015-11-03 16:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13075.31,"flowout":13075.31,"xtime":"2015-11-03 16:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13157.82,"flowout":13157.82,"xtime":"2015-11-03 17:00","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12950.68,"flowout":12950.68,"xtime":"2015-11-03 17:15","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":12906.61,"flowout":12906.61,"xtime":"2015-11-03 17:30","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13094.99,"flowout":13094.99,"xtime":"2015-11-03 17:45","ispid":"-1","ispname":"全部"},{"direction":null,"flowRate":null,"flowin":13135.54,"flowout":13135.54,"xtime":"2015-11-03 18:00","ispid":"-1","ispname":"全部"}],
  "z2":[{"bd_usage_rate_down":71.06,"bd_usage_rate_up":74.58,"direction":null,"llinkspeed_down":"7.11","llinkspeed_up":"7.46","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-02 23:00"},{"bd_usage_rate_down":83.52,"bd_usage_rate_up":69.22,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"6.92","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-02 23:15"},{"bd_usage_rate_down":83.67,"bd_usage_rate_up":62.84,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"6.28","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-02 23:30"},{"bd_usage_rate_down":83.2,"bd_usage_rate_up":58.34,"direction":null,"llinkspeed_down":"8.32","llinkspeed_up":"5.83","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-02 23:45"},{"bd_usage_rate_down":79.94,"bd_usage_rate_up":57.42,"direction":null,"llinkspeed_down":"7.99","llinkspeed_up":"5.74","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 00:00"},{"bd_usage_rate_down":74.46,"bd_usage_rate_up":53.02,"direction":null,"llinkspeed_down":"7.45","llinkspeed_up":"5.3","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 00:15"},{"bd_usage_rate_down":64.62,"bd_usage_rate_up":50.41,"direction":null,"llinkspeed_down":"6.46","llinkspeed_up":"5.04","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 00:30"},{"bd_usage_rate_down":59.46,"bd_usage_rate_up":46.83,"direction":null,"llinkspeed_down":"5.95","llinkspeed_up":"4.68","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 00:45"},{"bd_usage_rate_down":55.8,"bd_usage_rate_up":43.83,"direction":null,"llinkspeed_down":"5.58","llinkspeed_up":"4.38","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 01:00"},{"bd_usage_rate_down":47.62,"bd_usage_rate_up":40.59,"direction":null,"llinkspeed_down":"4.76","llinkspeed_up":"4.06","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 01:15"},{"bd_usage_rate_down":46.12,"bd_usage_rate_up":36.86,"direction":null,"llinkspeed_down":"4.61","llinkspeed_up":"3.69","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 01:30"},{"bd_usage_rate_down":42.22,"bd_usage_rate_up":34.16,"direction":null,"llinkspeed_down":"4.22","llinkspeed_up":"3.42","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 01:45"},{"bd_usage_rate_down":39.01,"bd_usage_rate_up":31.91,"direction":null,"llinkspeed_down":"3.9","llinkspeed_up":"3.19","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 02:00"},{"bd_usage_rate_down":35.98,"bd_usage_rate_up":31.43,"direction":null,"llinkspeed_down":"3.6","llinkspeed_up":"3.14","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 02:15"},{"bd_usage_rate_down":37.25,"bd_usage_rate_up":29.46,"direction":null,"llinkspeed_down":"3.73","llinkspeed_up":"2.95","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 02:30"},{"bd_usage_rate_down":34.98,"bd_usage_rate_up":28.31,"direction":null,"llinkspeed_down":"3.5","llinkspeed_up":"2.83","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 02:45"},{"bd_usage_rate_down":33.45,"bd_usage_rate_up":27.03,"direction":null,"llinkspeed_down":"3.35","llinkspeed_up":"2.7","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 03:00"},{"bd_usage_rate_down":33.84,"bd_usage_rate_up":25.41,"direction":null,"llinkspeed_down":"3.38","llinkspeed_up":"2.54","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 03:15"},{"bd_usage_rate_down":29.78,"bd_usage_rate_up":23.79,"direction":null,"llinkspeed_down":"2.98","llinkspeed_up":"2.38","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 03:30"},{"bd_usage_rate_down":27.56,"bd_usage_rate_up":23.43,"direction":null,"llinkspeed_down":"2.76","llinkspeed_up":"2.34","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 03:45"},{"bd_usage_rate_down":26.24,"bd_usage_rate_up":23.14,"direction":null,"llinkspeed_down":"2.62","llinkspeed_up":"2.31","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 04:00"},{"bd_usage_rate_down":25.79,"bd_usage_rate_up":22.68,"direction":null,"llinkspeed_down":"2.58","llinkspeed_up":"2.27","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 04:15"},{"bd_usage_rate_down":25.69,"bd_usage_rate_up":22.67,"direction":null,"llinkspeed_down":"2.57","llinkspeed_up":"2.27","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 04:30"},{"bd_usage_rate_down":25.81,"bd_usage_rate_up":21.38,"direction":null,"llinkspeed_down":"2.58","llinkspeed_up":"2.14","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 04:45"},{"bd_usage_rate_down":26.22,"bd_usage_rate_up":20.33,"direction":null,"llinkspeed_down":"2.62","llinkspeed_up":"2.03","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 05:00"},{"bd_usage_rate_down":27.57,"bd_usage_rate_up":20.6,"direction":null,"llinkspeed_down":"2.76","llinkspeed_up":"2.06","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 05:15"},{"bd_usage_rate_down":27.95,"bd_usage_rate_up":20.41,"direction":null,"llinkspeed_down":"2.79","llinkspeed_up":"2.04","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 05:30"},{"bd_usage_rate_down":27.87,"bd_usage_rate_up":21.08,"direction":null,"llinkspeed_down":"2.79","llinkspeed_up":"2.11","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 05:45"},{"bd_usage_rate_down":28.83,"bd_usage_rate_up":21.05,"direction":null,"llinkspeed_down":"2.88","llinkspeed_up":"2.1","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 06:00"},{"bd_usage_rate_down":32.32,"bd_usage_rate_up":22.63,"direction":null,"llinkspeed_down":"3.23","llinkspeed_up":"2.26","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 06:15"},{"bd_usage_rate_down":36.7,"bd_usage_rate_up":24.09,"direction":null,"llinkspeed_down":"3.67","llinkspeed_up":"2.41","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 06:30"},{"bd_usage_rate_down":41.77,"bd_usage_rate_up":25.6,"direction":null,"llinkspeed_down":"4.18","llinkspeed_up":"2.56","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 06:45"},{"bd_usage_rate_down":44.95,"bd_usage_rate_up":27.89,"direction":null,"llinkspeed_down":"4.5","llinkspeed_up":"2.79","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 07:00"},{"bd_usage_rate_down":50.71,"bd_usage_rate_up":29.55,"direction":null,"llinkspeed_down":"5.07","llinkspeed_up":"2.96","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 07:15"},{"bd_usage_rate_down":56.24,"bd_usage_rate_up":31.24,"direction":null,"llinkspeed_down":"5.62","llinkspeed_up":"3.12","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 07:30"},{"bd_usage_rate_down":59.92,"bd_usage_rate_up":34.93,"direction":null,"llinkspeed_down":"5.99","llinkspeed_up":"3.49","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 07:45"},{"bd_usage_rate_down":64.79,"bd_usage_rate_up":39.29,"direction":null,"llinkspeed_down":"6.48","llinkspeed_up":"3.93","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 08:00"},{"bd_usage_rate_down":73,"bd_usage_rate_up":44.31,"direction":null,"llinkspeed_down":"7.3","llinkspeed_up":"4.43","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 08:15"},{"bd_usage_rate_down":79.38,"bd_usage_rate_up":49.12,"direction":null,"llinkspeed_down":"7.94","llinkspeed_up":"4.91","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 08:30"},{"bd_usage_rate_down":82.6,"bd_usage_rate_up":54.77,"direction":null,"llinkspeed_down":"8.26","llinkspeed_up":"5.48","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 08:45"},{"bd_usage_rate_down":83.66,"bd_usage_rate_up":58.64,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"5.86","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 09:00"},{"bd_usage_rate_down":83.81,"bd_usage_rate_up":60.71,"direction":null,"llinkspeed_down":"8.38","llinkspeed_up":"6.07","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 09:15"},{"bd_usage_rate_down":83.73,"bd_usage_rate_up":66.19,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"6.62","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 09:30"},{"bd_usage_rate_down":83.72,"bd_usage_rate_up":67.5,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"6.75","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 09:45"},{"bd_usage_rate_down":83.75,"bd_usage_rate_up":68.64,"direction":null,"llinkspeed_down":"8.38","llinkspeed_up":"6.86","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 10:00"},{"bd_usage_rate_down":83.57,"bd_usage_rate_up":71.44,"direction":null,"llinkspeed_down":"8.36","llinkspeed_up":"7.14","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 10:15"},{"bd_usage_rate_down":83.57,"bd_usage_rate_up":72.42,"direction":null,"llinkspeed_down":"8.36","llinkspeed_up":"7.24","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 10:30"},{"bd_usage_rate_down":83.68,"bd_usage_rate_up":75.9,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"7.59","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 10:45"},{"bd_usage_rate_down":83.52,"bd_usage_rate_up":74.27,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.43","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 11:00"},{"bd_usage_rate_down":83.67,"bd_usage_rate_up":77.89,"direction":null,"llinkspeed_down":"8.37","llinkspeed_up":"7.79","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 11:15"},{"bd_usage_rate_down":83.52,"bd_usage_rate_up":80.27,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"8.03","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 11:30"},{"bd_usage_rate_down":83.59,"bd_usage_rate_up":76.95,"direction":null,"llinkspeed_down":"8.36","llinkspeed_up":"7.69","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 11:45"},{"bd_usage_rate_down":70.92,"bd_usage_rate_up":79.55,"direction":null,"llinkspeed_down":"7.09","llinkspeed_up":"7.96","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 12:00"},{"bd_usage_rate_down":83.45,"bd_usage_rate_up":78.42,"direction":null,"llinkspeed_down":"8.34","llinkspeed_up":"7.84","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 12:15"},{"bd_usage_rate_down":83.53,"bd_usage_rate_up":75.72,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.57","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 12:30"},{"bd_usage_rate_down":83.51,"bd_usage_rate_up":77.28,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.73","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 12:45"},{"bd_usage_rate_down":70.59,"bd_usage_rate_up":77.73,"direction":null,"llinkspeed_down":"7.06","llinkspeed_up":"7.77","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 13:00"},{"bd_usage_rate_down":83.43,"bd_usage_rate_up":77.91,"direction":null,"llinkspeed_down":"8.34","llinkspeed_up":"7.79","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 13:15"},{"bd_usage_rate_down":83.46,"bd_usage_rate_up":75.83,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.58","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 13:30"},{"bd_usage_rate_down":83.45,"bd_usage_rate_up":75.05,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.51","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 13:45"},{"bd_usage_rate_down":70.48,"bd_usage_rate_up":76.24,"direction":null,"llinkspeed_down":"7.05","llinkspeed_up":"7.62","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 14:00"},{"bd_usage_rate_down":83.44,"bd_usage_rate_up":75.85,"direction":null,"llinkspeed_down":"8.34","llinkspeed_up":"7.58","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 14:15"},{"bd_usage_rate_down":83.48,"bd_usage_rate_up":76.24,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.62","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 14:30"},{"bd_usage_rate_down":83.44,"bd_usage_rate_up":74.87,"direction":null,"llinkspeed_down":"8.34","llinkspeed_up":"7.49","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 14:45"},{"bd_usage_rate_down":70.86,"bd_usage_rate_up":73.08,"direction":null,"llinkspeed_down":"7.09","llinkspeed_up":"7.31","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 15:00"},{"bd_usage_rate_down":83.52,"bd_usage_rate_up":73.97,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.4","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 15:15"},{"bd_usage_rate_down":83.57,"bd_usage_rate_up":75.03,"direction":null,"llinkspeed_down":"8.36","llinkspeed_up":"7.5","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 15:30"},{"bd_usage_rate_down":83.47,"bd_usage_rate_up":74.15,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.41","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 15:45"},{"bd_usage_rate_down":70.76,"bd_usage_rate_up":75.11,"direction":null,"llinkspeed_down":"7.08","llinkspeed_up":"7.51","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 16:00"},{"bd_usage_rate_down":83.63,"bd_usage_rate_up":76.49,"direction":null,"llinkspeed_down":"8.36","llinkspeed_up":"7.65","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 16:15"},{"bd_usage_rate_down":83.41,"bd_usage_rate_up":77.95,"direction":null,"llinkspeed_down":"8.34","llinkspeed_up":"7.79","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 16:30"},{"bd_usage_rate_down":83.48,"bd_usage_rate_up":75.08,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.51","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 16:45"},{"bd_usage_rate_down":83.51,"bd_usage_rate_up":75.7,"direction":null,"llinkspeed_down":"8.35","llinkspeed_up":"7.57","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 17:00"},{"bd_usage_rate_down":82.82,"bd_usage_rate_up":71.82,"direction":null,"llinkspeed_down":"8.28","llinkspeed_up":"7.18","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 17:15"},{"bd_usage_rate_down":81.24,"bd_usage_rate_up":68.01,"direction":null,"llinkspeed_down":"8.12","llinkspeed_up":"6.8","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 17:30"},{"bd_usage_rate_down":80.07,"bd_usage_rate_up":68.35,"direction":null,"llinkspeed_down":"8.01","llinkspeed_up":"6.83","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 17:45"},{"bd_usage_rate_down":79.24,"bd_usage_rate_up":66.96,"direction":null,"llinkspeed_down":"7.92","llinkspeed_up":"6.7","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 18:00"},{"bd_usage_rate_down":80.6,"bd_usage_rate_up":69.86,"direction":null,"llinkspeed_down":"8.06","llinkspeed_up":"6.99","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 18:15"},{"bd_usage_rate_down":82.06,"bd_usage_rate_up":71.57,"direction":null,"llinkspeed_down":"8.21","llinkspeed_up":"7.16","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 18:30"},{"bd_usage_rate_down":83.16,"bd_usage_rate_up":72.62,"direction":null,"llinkspeed_down":"8.32","llinkspeed_up":"7.26","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 18:45"},{"bd_usage_rate_down":83.21,"bd_usage_rate_up":73,"direction":null,"llinkspeed_down":"8.32","llinkspeed_up":"7.3","name1":"电信鼓楼—移动竹山路","name2":"移动竹山路—电信鼓楼","xtime":"2015-11-03 19:00"}],
  "5" :[ { name: '2015-11-18 10:30:00', category: 'A', value: 10.46 },
    { name: '2015-11-18 10:30:00', category: 'B', value: 12.31 },
    { name: '2015-11-18 10:30:00', category: 'C', value: 12.43},
    { name: '2015-11-18 10:30:00', category: 'D', value: 16.23 },
    { name: '2015-11-18 10:30:15', category: 'A', value: 4.46 },
    { name: '2015-11-18 10:30:15', category: 'B', value: 8.31 },
    { name: '2015-11-18 10:30:15', category: 'C', value: 11.43},
    { name: '2015-11-18 10:30:15', category: 'D', value: 15.13 },
    { name: '2015-11-18 10:30:30', category: 'A', value: 22.46 },
    { name: '2015-11-18 10:30:30', category: 'B', value: 13.31 },
    { name: '2015-11-18 10:30:30', category: 'C', value: 11.43},
    { name: '2015-11-18 10:30:30', category: 'D', value: 9.13 },
    { name: '2015-11-18 10:30:45', category: 'A', value: 32.46 },
    { name: '2015-11-18 10:30:45', category: 'B', value: 12.31 },
    { name: '2015-11-18 10:30:45', category: 'C', value: 14.43},
    { name: '2015-11-18 10:30:45', category: 'D', value: 13.13 },
    { name: '2015-11-18 10:31:00', category: 'A', value: 30.21 },
    { name: '2015-11-18 10:31:00', category: 'B', value: 13.31 },
    { name: '2015-11-18 10:31:00', category: 'C', value: 15.43},
    { name: '2015-11-18 10:31:00', category: 'D', value: 11.13 },
  ],
  "6": [{ name: '2015-11-18 10:30:00', category: 'A', value: 10.46 },
    { name: '2015-11-18 10:30:05', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:30:10', category: 'A', value: 12.43},
    { name: '2015-11-18 10:30:15', category: 'A', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'A', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'A', value: 8.31 },
    { name: '2015-11-18 10:30:30', category: 'A', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'A', value: 15.13 },
    { name: '2015-11-18 10:31:00', category: 'A', value: 22.46 },
    { name: '2015-11-18 10:31:05', category: 'A', value: 13.31 },
    { name: '2015-11-18 10:31:10', category: 'A', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'A', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'A', value: 32.46 },
    { name: '2015-11-18 10:31:45', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:32:00', category: 'A', value: 14.43}
  ],
  "0" : [ { name: '2015-11-18 10:30:00', category: 'A', value: 10.46 },
    { name: '2015-11-18 10:30:05', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:30:10', category: 'A', value: 12.43},
    { name: '2015-11-18 10:30:15', category: 'A', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'A', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'A', value: 8.31 },
    { name: '2015-11-18 10:30:30', category: 'A', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'A', value: 15.13 },
    { name: '2015-11-18 10:31:00', category: 'A', value: 22.46 },
    { name: '2015-11-18 10:31:05', category: 'A', value: 13.31 },
    { name: '2015-11-18 10:31:10', category: 'A', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'A', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'A', value: 32.46 },
    { name: '2015-11-18 10:31:45', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:32:00', category: 'A', value: 14.43},
    { name: '2015-11-18 10:30:00', category: 'B', value: 3.46 },
    { name: '2015-11-18 10:30:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:30:10', category: 'B', value: 5.43},
    { name: '2015-11-18 10:30:15', category: 'B', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'B', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'B', value: 2.31 },
    { name: '2015-11-18 10:30:30', category: 'B', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'B', value: 12.13 },
    { name: '2015-11-18 10:31:00', category: 'B', value: 23.46 },
    { name: '2015-11-18 10:31:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:31:10', category: 'B', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'B', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'B', value: 2.46 },
    { name: '2015-11-18 10:31:45', category: 'B', value: 22.31 },
    { name: '2015-11-18 10:32:00', category: 'B', value: 15.43}
  ],
  "cq1": [ { name: '2015-11-18 10:30:00', category: 'A', value: 10.46 },
    { name: '2015-11-18 10:30:05', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:30:10', category: 'A', value: 12.43},
    { name: '2015-11-18 10:30:15', category: 'A', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'A', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'A', value: 8.31 },
    { name: '2015-11-18 10:30:30', category: 'A', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'A', value: 15.13 },
    { name: '2015-11-18 10:31:00', category: 'A', value: 22.46 },
    { name: '2015-11-18 10:31:05', category: 'A', value: 13.31 },
    { name: '2015-11-18 10:31:10', category: 'A', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'A', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'A', value: 32.46 },
    { name: '2015-11-18 10:31:45', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:32:00', category: 'A', value: 14.43},
    { name: '2015-11-18 10:30:00', category: 'B', value: 3.46 },
    { name: '2015-11-18 10:30:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:30:10', category: 'B', value: 5.43},
    { name: '2015-11-18 10:30:15', category: 'B', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'B', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'B', value: 2.31 },
    { name: '2015-11-18 10:30:30', category: 'B', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'B', value: 12.13 },
    { name: '2015-11-18 10:31:00', category: 'B', value: 23.46 },
    { name: '2015-11-18 10:31:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:31:10', category: 'B', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'B', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'B', value: 2.46 },
    { name: '2015-11-18 10:31:45', category: 'B', value: 22.31 },
    { name: '2015-11-18 10:32:00', category: 'B', value: 15.43}
  ],
  "cq2": [ { name: '2015-11-18 10:30:00', category: 'A', value: 10.46 },
    { name: '2015-11-18 10:30:05', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:30:10', category: 'A', value: 12.43},
    { name: '2015-11-18 10:30:15', category: 'A', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'A', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'A', value: 8.31 },
    { name: '2015-11-18 10:30:30', category: 'A', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'A', value: 15.13 },
    { name: '2015-11-18 10:31:00', category: 'A', value: 22.46 },
    { name: '2015-11-18 10:31:05', category: 'A', value: 13.31 },
    { name: '2015-11-18 10:31:10', category: 'A', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'A', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'A', value: 32.46 },
    { name: '2015-11-18 10:31:45', category: 'A', value: 12.31 },
    { name: '2015-11-18 10:32:00', category: 'A', value: 14.43},
    { name: '2015-11-18 10:30:00', category: 'B', value: 3.46 },
    { name: '2015-11-18 10:30:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:30:10', category: 'B', value: 5.43},
    { name: '2015-11-18 10:30:15', category: 'B', value: 16.23 },
    { name: '2015-11-18 10:30:20', category: 'B', value: 4.46 },
    { name: '2015-11-18 10:30:25', category: 'B', value: 2.31 },
    { name: '2015-11-18 10:30:30', category: 'B', value: 11.43},
    { name: '2015-11-18 10:30:45', category: 'B', value: 12.13 },
    { name: '2015-11-18 10:31:00', category: 'B', value: 23.46 },
    { name: '2015-11-18 10:31:05', category: 'B', value: 4.31 },
    { name: '2015-11-18 10:31:10', category: 'B', value: 11.43},
    { name: '2015-11-18 10:31:15', category: 'B', value: 9.13 },
    { name: '2015-11-18 10:31:30', category: 'B', value: 2.46 },
    { name: '2015-11-18 10:31:45', category: 'B', value: 22.31 },
    { name: '2015-11-18 10:32:00', category: 'B', value: 15.43}
  ],
  "cq3":[
    { name: '制造页', value: 10 ,info:"AAAAAAAAAA"},
    { name: '金融', value: 20 ,info:"AAAAAAAAAA"},
    { name: '教育', value: 50 ,info:"AAAAAAAAAA"},
    { name: '个人', value: 60 ,info:"AAAAAAAAAA"},
    { name: '军队', value: 15 ,info:"AAAAAAAAAA"},
    { name: '事业单位', value: 12000 ,info:"AAAAAAAAAA"}
  ]

};

// CD[GAUGE] = {
//   "1" :[{ name: '数据A', value: "70" ,info:"dddddddddddddddd"}]
// // };
// CD[FORCE] = {
//   "1":[
//     { name :"主机",value :"1",phototype : "0",id:1, pid:null},
//     {id:2, name : "分机1",value:"1" ,phototype:"1",relname:"123" ,pid :"1"},
//     {id:3,name : "子节点1",value:"1" ,phototype:"2",relname:"123" ,pid :"2"},
//     {id:4,name : "子节点2",value:"1" ,phototype:"2",relname:"123",pid :"2"},
//     {id:5,name : "子节点3",value:"1" ,phototype:"2",relname:"123",pid :"2"},
//     {id:6,name : "分机2",value:"1" ,phototype:"1",relname:"444",pid :"1"},
//     {id:7,name : "分机3",value:"1" ,phototype:"1",relname:"123",pid :"1"}
//   ],
//   "2": [{ id:1 ,name :"211.138.106.70",value :"1",status:"0",info:"asdsadasdsadasdasdasdsadasdas"},
//     { id:2 ,name :"211.138.106.71",value :"1",status:"1",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:3 ,name :"211.138.106.72",value :"1",status:"0",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:4 ,name :"211.138.106.73",value :"1",status:"0",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:5 ,name :"211.138.106.74",value :"1",status:"1",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:6 ,name :"211.138.106.75",value :"1",status:"0",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:7 ,name :"211.138.106.76",value :"1",status:"1",info:"22asdsadsadsadasdasdsadsadasd22"},
//     { id:8 ,name :"211.138.106.77",value :"1",status:"0",info:"22asdsadsadsadasdasdsadsadasd22"}
//   ]
// };
CD[PIE] = {
  "0" : [
    { name: '数据A', value: 10 },
    { name: '数据C', value: 20},
    { name: '数据B', value: 30}
  ],
  "zp1":[{"color":0,"diffv":8809.15,"idx":1,"value":9310.72,"prov_id":"320000","name":"江苏","percent ":70.4},{"color":1,"diffv":108.52,"idx":2,"value":501.57,"prov_id":"370000","name":"山东","percent ":3.79},{"color":2,"diffv":91.82,"idx":3,"value":393.05,"prov_id":"110000","name":"北京","percent ":2.97},{"color":3,"diffv":20.79,"idx":4,"value":301.23,"prov_id":"360000","name":"江西","percent ":2.28},{"color":3,"diffv":40.29,"idx":5,"value":280.44,"prov_id":"340000","name":"安徽","percent ":2.12},{"color":3,"diffv":23.56,"idx":6,"value":240.15,"prov_id":"410000","name":"河南","percent ":1.82},{"color":3,"diffv":13.69,"idx":7,"value":216.59,"prov_id":"610000","name":"陕西","percent ":1.64},{"color":3,"diffv":25.91,"idx":8,"value":202.9,"prov_id":"310000","name":"上海","percent ":1.53},{"color":3,"diffv":8,"idx":9,"value":176.99,"prov_id":"210000","name":"辽宁","percent ":1.34},{"color":3,"diffv":8.64,"idx":10,"value":168.99,"prov_id":"420000","name":"湖北","percent ":1.28},{"color":3,"diffv":2.95,"idx":11,"value":160.35,"prov_id":"140000","name":"山西","percent ":1.21},{"color":3,"diffv":1.39,"idx":12,"value":157.4,"prov_id":"330000","name":"浙江","percent ":1.19},{"color":3,"diffv":25.43,"idx":13,"value":156.01,"prov_id":"440000","name":"广东","percent ":1.18},{"color":3,"diffv":2.52,"idx":14,"value":130.58,"prov_id":"130000","name":"河北","percent ":0.99},{"color":3,"diffv":23.11,"idx":15,"value":128.06,"prov_id":"510000","name":"四川","percent ":0.97},{"color":3,"diffv":18.93,"idx":16,"value":104.95,"prov_id":"220000","name":"吉林","percent ":0.79},{"color":3,"diffv":7.4,"idx":17,"value":86.02,"prov_id":"230000","name":"黑龙江","percent ":0.65},{"color":3,"diffv":1.16,"idx":18,"value":78.62,"prov_id":"430000","name":"湖南","percent ":0.6},{"color":3,"diffv":18.18,"idx":19,"value":77.46,"prov_id":"500000","name":"重庆","percent ":0.59},{"color":3,"diffv":1.41,"idx":20,"value":59.28,"prov_id":"450000","name":"广西","percent ":0.45},{"color":3,"diffv":8.63,"idx":21,"value":57.87,"prov_id":"350000","name":"福建","percent ":0.44},{"color":3,"diffv":1.73,"idx":22,"value":49.24,"prov_id":"150000","name":"内蒙","percent ":0.37},{"color":3,"diffv":10.98,"idx":23,"value":47.51,"prov_id":"120000","name":"天津","percent ":0.36},{"color":3,"diffv":0.98,"idx":24,"value":36.53,"prov_id":"530000","name":"云南","percent ":0.28},{"color":3,"diffv":13.93,"idx":25,"value":35.55,"prov_id":"520000","name":"贵州","percent ":0.27},{"color":3,"diffv":4.21,"idx":26,"value":21.62,"prov_id":"620000","name":"甘肃","percent ":0.16},{"color":3,"diffv":6.29,"idx":27,"value":17.41,"prov_id":"650000","name":"新疆","percent ":0.13},{"color":3,"diffv":2.9,"idx":28,"value":11.12,"prov_id":"540000","name":"西藏","percent ":0.08},{"color":3,"diffv":2.89,"idx":29,"value":8.22,"prov_id":"460000","name":"海南","percent ":0.06},{"color":3,"diffv":2.17,"idx":30,"value":5.33,"prov_id":"640000","name":"宁夏","percent ":0.04},{"color":3,"diffv":null,"idx":31,"value":3.16,"prov_id":"630000","name":"青海","percent ":0.02}],
  "zp2":[{"color":0,"diffv":8809.15,"idx":1,"value":9310.72,"prov_id":"320000","name":"江苏","percent ":70.4},{"color":1,"diffv":108.52,"idx":2,"value":501.57,"prov_id":"370000","name":"山东","percent ":3.79},{"color":2,"diffv":91.82,"idx":3,"value":393.05,"prov_id":"110000","name":"北京","percent ":2.97},{"color":3,"diffv":20.79,"idx":4,"value":301.23,"prov_id":"360000","name":"江西","percent ":2.28},{"color":3,"diffv":40.29,"idx":5,"value":280.44,"prov_id":"340000","name":"安徽","percent ":2.12},{"color":3,"diffv":23.56,"idx":6,"value":240.15,"prov_id":"410000","name":"河南","percent ":1.82},{"color":3,"diffv":13.69,"idx":7,"value":216.59,"prov_id":"610000","name":"陕西","percent ":1.64},{"color":3,"diffv":25.91,"idx":8,"value":202.9,"prov_id":"310000","name":"上海","percent ":1.53},{"color":3,"diffv":8,"idx":9,"value":176.99,"prov_id":"210000","name":"辽宁","percent ":1.34},{"color":3,"diffv":8.64,"idx":10,"value":168.99,"prov_id":"420000","name":"湖北","percent ":1.28},{"color":3,"diffv":2.95,"idx":11,"value":160.35,"prov_id":"140000","name":"山西","percent ":1.21},{"color":3,"diffv":1.39,"idx":12,"value":157.4,"prov_id":"330000","name":"浙江","percent ":1.19},{"color":3,"diffv":25.43,"idx":13,"value":156.01,"prov_id":"440000","name":"广东","percent ":1.18},{"color":3,"diffv":2.52,"idx":14,"value":130.58,"prov_id":"130000","name":"河北","percent ":0.99},{"color":3,"diffv":23.11,"idx":15,"value":128.06,"prov_id":"510000","name":"四川","percent ":0.97},{"color":3,"diffv":18.93,"idx":16,"value":104.95,"prov_id":"220000","name":"吉林","percent ":0.79},{"color":3,"diffv":7.4,"idx":17,"value":86.02,"prov_id":"230000","name":"黑龙江","percent ":0.65},{"color":3,"diffv":1.16,"idx":18,"value":78.62,"prov_id":"430000","name":"湖南","percent ":0.6},{"color":3,"diffv":18.18,"idx":19,"value":77.46,"prov_id":"500000","name":"重庆","percent ":0.59},{"color":3,"diffv":1.41,"idx":20,"value":59.28,"prov_id":"450000","name":"广西","percent ":0.45},{"color":3,"diffv":8.63,"idx":21,"value":57.87,"prov_id":"350000","name":"福建","percent ":0.44},{"color":3,"diffv":1.73,"idx":22,"value":49.24,"prov_id":"150000","name":"内蒙","percent ":0.37},{"color":3,"diffv":10.98,"idx":23,"value":47.51,"prov_id":"120000","name":"天津","percent ":0.36},{"color":3,"diffv":0.98,"idx":24,"value":36.53,"prov_id":"530000","name":"云南","percent ":0.28},{"color":3,"diffv":13.93,"idx":25,"value":35.55,"prov_id":"520000","name":"贵州","percent ":0.27},{"color":3,"diffv":4.21,"idx":26,"value":21.62,"prov_id":"620000","name":"甘肃","percent ":0.16},{"color":3,"diffv":6.29,"idx":27,"value":17.41,"prov_id":"650000","name":"新疆","percent ":0.13},{"color":3,"diffv":2.9,"idx":28,"value":11.12,"prov_id":"540000","name":"西藏","percent ":0.08},{"color":3,"diffv":2.89,"idx":29,"value":8.22,"prov_id":"460000","name":"海南","percent ":0.06},{"color":3,"diffv":2.17,"idx":30,"value":5.33,"prov_id":"640000","name":"宁夏","percent ":0.04},{"color":3,"diffv":null,"idx":31,"value":3.16,"prov_id":"630000","name":"青海","percent ":0.02}]
};
CD[MAP] = {
  "1":[ {name: "广东", value:"780" ,groups:"china"},
    {name: "青海", value:"10" },
    {name: "四川", value:"366" },
    {name: "山东", value:"60" },
    {name: "辽宁", value:"555" },
    {name: "陕西", value:"1000"}
  ],
  "2":[ {name: "太原市", value:"42528.8114" ,category:"山西"},
    {name: "大同市", value:"24" ,category:"山西"},
    {name: "晋中市", value:"50",category:"山西" },
    {name: "长治市", value:"66" ,category:"山西"},
    {name: "吕梁市", value:"44",category:"山西"}],
  "3":[ {"name":"太原","targetname": "长治","value":"38.77","legend":"太原","info":"太原攻击长治流量：38.77K"},
    {"name":"沈阳","targetname":"长治","value":"30.8","legend":"沈阳","info":"沈阳攻击长治流量：3.08K"},
    {"name":"天津","targetname":"长治","value":"19.1","legend":"天津","info":"天津攻击长治流量：1.91K"},
    {"name":"成都","targetname":"长治","value":"18.7","legend":"成都","info":"成都攻击长治流量：1.87K"},
    {"name":"温州","targetname":"长治","value":"12.5","legend":"温州","info":"温州攻击长治流量：1.25K"}
  ],
  "4":[{name : "中国", targetname : "赞比亚", value : "50", legend :"世界",info:"123213",lineType:"1" },
    {name : "中国", targetname : "比利时", value : "10", legend :"世界",info:"234234" ,lineType:"1" },
    {name : "中国", targetname : "英国", value : "200", legend :"世界",info:"234324" ,lineType:"4" },
    {name : "中国", targetname : "美国", value : "30", legend :"世界",info:"345435345" ,lineType:"1" },
    {name : "中国", targetname : "澳大利亚", value : "500", legend :"世界",info:"44444444444" ,lineType:"1" },
    {name : "中国", targetname : "巴西", value : "700", legend :"世界" ,info:"44444444444",lineType:"2" },
    {name : "中国", targetname : "阿根廷", value : "50", legend :"世界" ,info:"44444444444",lineType:"2" },
    {name : "中国", targetname : "韩国", value : "10", legend :"世界" ,info:"44444444444" ,lineType:"1"},
    {name : "中国", targetname : "加拿大", value : "20", legend :"世界",info:"44444444444" ,lineType:"2" },
    {name : "中国", targetname : "荷兰", value : "328", legend :"世界",info:"44444444444" ,lineType:"1" },
    {name : "中国", targetname : "挪威", value : "40", legend :"世界",info:"44444444444"  ,lineType:"3"},
    {name : "中国", targetname : "新加坡", value : "50", legend :"世界",info:"新加坡" ,lineType:"1" }
  ],
  "5":[{name : "中国", targetname : "赞比亚", value : "50", info:"123213",lineType:"1" },
    {name : "中国", targetname : "比利时", value : "10", info:"234234" ,lineType:"1" },
    {name : "中国", targetname : "英国", value : "200",info:"234324" ,lineType:"4" },
    {name : "中国", targetname : "美国", value : "30", info:"345435345" ,lineType:"1" },
    {name : "中国", targetname : "澳大利亚", value : "500", info:"44444444444" ,lineType:"1" },
    {name : "中国", targetname : "巴西", value : "700",  info:"44444444444",lineType:"2" },
    {name : "中国", targetname : "阿根廷", value : "50",  info:"44444444444",lineType:"2" },
    {name : "中国", targetname : "韩国", value : "10",  info:"44444444444" ,lineType:"1"},
    {name : "中国", targetname : "加拿大", value : "20", info:"44444444444" ,lineType:"2" },
    {name : "中国", targetname : "荷兰", value : "328", info:"44444444444" ,lineType:"1" },
    {name : "中国", targetname : "挪威", value : "40", info:"44444444444"  ,lineType:"3"},
    {name : "中国", targetname : "孟加拉国", value : "50", info:"44444444444" ,lineType:"1" }
  ],
  "wh":[{name: "武汉市", value:"123.64" ,category:"湖北"}]	,
  "cq":[
    {name: "万州区", value:"100" ,category:"重庆",info:"1123213123"},
    {name: "南川区", value:"20" ,category:"重庆",info:"1123213123"},
    {name: "开县", value:"30" ,category:"重庆",info:"1123213123"},
    {name: "涪陵区", value:"50" ,category:"重庆",info:"1123213123"},
    {name: "永川区", value:"70" ,category:"重庆",info:"1123213123"},
  ]	,
  "cq1":[
    {name: "万州区", value:"100" ,category:"重庆",info:"1123213123"},
    {name: "南川区", value:"20" ,category:"重庆",info:"5555"},
    {name: "开县", value:"30" ,category:"重庆",info:"gfdgdfgdfg"},
    {name: "涪陵区", value:"50" ,category:"重庆",info:"dfgdfg"},
    {name: "永川区", value:"70" ,category:"重庆",info:"gfhgfhfghgf"},
  ]	,
  "cq2":[
    {name: "中国",  value:"100" ,info:"1123213123"},
    {name: "美国",  value:"20"  ,info:"5555"},
    {name: "巴西",  value:"30"  ,info:"gfdgdfgdfg"},
    {name: "加拿大", value:"50" ,info:"dfgdfg"},
    {name: "加拿大", value:"50" ,info:"dfgdfg"},
    {name: "俄罗斯", value:"70" ,info:"gfhgfhfghgf"},
    {name: "新加坡", value:"70" ,info:"新加坡12312312321"},
  ]	,
  "xj":[
    {name: "乌鲁木齐市", value:"100" ,category:"新疆",info:"1123213123"},
    {name: "克拉玛依市", value:"20" ,category:"新疆",info:"5555"},
    {name: "吐鲁番市", value:"30" ,category:"新疆",info:"gfdgdfgdfg"},
    {name: "哈密瓜区", value:"50" ,category:"新疆",info:"dfgdfg"},
    {name: "五家渠市", value:"70" ,category:"新疆",info:"gfhgfhfghgf"},
  ],
  "zj":[
    {name: "杭州市", value:"100" ,category:"浙江",info:"1123213123"},
    {name: "宁波市", value:"20" ,category:"浙江",info:"5555"},
    {name: "温州市", value:"30" ,category:"浙江",info:"gfdgdfgdfg"},
    {name: "嘉兴市", value:"50" ,category:"浙江",info:"dfgdfg"},
    {name: "湖州市", value:"70" ,category:"浙江",info:"gfhgfhfghgf"},
    {name: "绍兴市", value:"40" ,category:"浙江",info:"this is made by zwj"},
    {name: "金华市", value:"10" ,category:"浙江",info:"suelan"},
  ]
};




let EMPTY_DATA = [];


// 获得图表数据
function getChartData(type,childType){
  childType = childType == undefined && childType == '' ?childType : "0"  ;
  return CD[type][childType];
}

function getTableData() {
  return EMPTY_DATA;
}
function getTextData() {
  return EMPTY_DATA;
}


function getDateRangeData(){
  return EMPTY_DATA;
}

function getSearchData(type,childType) {
  return EMPTY_DATA;
}
function getOtherData() {
  return EMPTY_DATA;
}

/**
 * 根据类型获取初始化模拟数据
 * @param componentType 组件类别(图表,表格,文本)
 * @param type    组件类别
 * @param childType  组件子类型
 * @returns
 */
function MorkData(componentType,type,childType) {
  var args =[type,childType];
  switch(componentType){
    case compType.CHART :
      return getChartData(...args);
      break;
    case compType.TEXT :
      return getTextData(...args);
      break;
    case compType.TABLE :
      return getTableData(...args);
      break;
    case compType.SEARCH :
      return getSearchData(...args);
      break;
    case compType.DATERANGE :
      return getDateRangeData(...args);
      break;
    case compType.OTHER :
      return getOtherData(...args);
      break;
    default:break;
  }
}

export default MorkData

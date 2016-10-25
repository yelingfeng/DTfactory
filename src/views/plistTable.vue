<template>
    <el-table
            :data="tableData3"
            selection-mode="multiple"
            stripe = "true"
            style="width: 100%"
            @selectionchange="handleSelectionChange">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column  property="name" label="产品名称"  width="400"sortable>
        </el-table-column>
        <el-table-column  property="parttern" label="产品类型">
        </el-table-column>
        <el-table-column  property="desc" label="产品描述">
        </el-table-column>
        <el-table-column inline-template label="创建日期" >
            <div>{{ row.createTime }}</div>
        </el-table-column>
        <el-table-column inline-template label="更新日期"  >
            <div>{{ row.updateTime }}</div>
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        data() {
            return {
                tableData3: [{
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-27 14:21:13",
                    "createUser" : "a5af2c05-a949-42e9-8ada-93fadaa0a3ea",
                    "createUserName" : "",
                    "desc" : "",
                    "id" : "8329bc71-ddb5-4190-9311-8b934fc21e5f",
                    "ip" : "",
                    "layout" : "",
                    "name" : "二十二、反射式dns DDoS攻击",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-09-30 15:09:36"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-27 14:09:31",
                    "createUser" : "28102b6a-4b2a-4c75-aac5-dc244b8fffec",
                    "createUserName" : "",
                    "desc" : "",
                    "id" : "1735598c-c7b4-4344-92a9-7bade650bebc",
                    "ip" : "",
                    "layout" : "",
                    "name" : "二十、域名服务器DDoS攻击",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1364"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-18 10:02:57"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-27 13:09:13",
                    "createUser" : "c559e9b8-bd17-4a72-80c3-4f2b5b2c97c2",
                    "createUserName" : "",
                    "desc" : "",
                    "id" : "3badacbe-1f72-4ceb-8fcc-0f01254673cc",
                    "ip" : "",
                    "layout" : "",
                    "name" : "二十一、域名篡改事件",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-11 17:53:49"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-03 11:00:30",
                    "createUser" : "dedc997d-30a3-48ac-9729-29b7dfa7e9e1",
                    "createUserName" : "",
                    "desc" : "使用双坐标折线图",
                    "id" : "63c5a4be-748a-42a0-9dc2-57b4d9c53cb3",
                    "ip" : "",
                    "layout" : "",
                    "name" : "六、恶意域名-域名指标统计-0903",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1364"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-18 17:40:12"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-03 10:12:10",
                    "createUser" : "bc605523-0bb1-4b35-b476-9c7d77071feb",
                    "createUserName" : "",
                    "desc" : "使用双坐标面积折线图",
                    "id" : "cd91df4c-2e52-4c47-bccf-f7be9cf5a4b1",
                    "ip" : "",
                    "layout" : "",
                    "name" : "五、综合统计-总体态势",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-14 09:42:40"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-03 09:58:34",
                    "createUser" : "e31174d6-a7aa-4722-9424-e5d5ce02f376",
                    "createUserName" : "",
                    "desc" : "使用双坐标面积折线图",
                    "id" : "097acf92-5a19-4a61-80e3-e1f9ab63c9cf",
                    "ip" : "",
                    "layout" : "",
                    "name" : "四、域名服务器监测—0903",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-11 19:14:15"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-03 09:36:27",
                    "createUser" : "43b1e71a-d39e-43b4-82a8-4cac23808eb2",
                    "createUserName" : "",
                    "desc" : "使用双坐标面积折线图",
                    "id" : "3159c39f-946f-402c-a9f8-58a9d4febe62",
                    "ip" : "",
                    "layout" : "",
                    "name" : "二、恶意域名监测-域名详情-闫菁-0903-备份",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-14 11:34:43"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-03 09:02:13",
                    "createUser" : "e5e9f773-83de-4ea3-a366-923a663ce1a7",
                    "createUserName" : "",
                    "desc" : "优化",
                    "id" : "73c33165-cc00-46e5-abac-e2f4d289a4ad",
                    "ip" : "",
                    "layout" : "",
                    "name" : "一、总体态势-0903-复制",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-14 11:30:03"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-09-02 09:44:25",
                    "createUser" : "33ec4296-368d-49b1-95b2-0aa8534d55cc",
                    "createUserName" : "",
                    "desc" : "闫菁定稿0902",
                    "id" : "ef0643a1-be80-4289-bdb0-7d8c2e4f1636",
                    "ip" : "",
                    "layout" : "",
                    "name" : "十八、DDOS-24h攻击详情展示--0902定稿",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1364"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-17 14:58:30"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-30 18:13:33",
                    "createUser" : "d290fa17-e489-4ea3-8057-a1e255ca3f83",
                    "createUserName" : "",
                    "desc" : "",
                    "id" : "b4df25df-e659-4262-93ed-a5fedfed8aa8",
                    "ip" : "",
                    "layout" : "",
                    "name" : "七、恶意域名-IP指标统计-0830-备份",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-09-14 11:00:31"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-25 13:53:49",
                    "createUser" : "5f39962d-32fe-4bc7-893d-9c1d09729789",
                    "createUserName" : "",
                    "desc" : "使用双坐标折线图",
                    "id" : "ee668f85-79e9-43a7-86a8-0e13ab9470f5",
                    "ip" : "",
                    "layout" : "",
                    "name" : "废弃九、网站监测--网站攻击监测-0825",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-09-05 16:12:57"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-25 10:43:58",
                    "createUser" : "81799988-3a93-4723-98dd-37d985a627c5",
                    "createUserName" : "",
                    "desc" : "使用双坐标折线图",
                    "id" : "28c8f6d0-d64d-41e5-92d6-06d7d2470828",
                    "ip" : "",
                    "layout" : "",
                    "name" : "废弃八、网站访问动态监测",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-09-05 16:07:23"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-25 09:47:35",
                    "createUser" : "3b05968b-d4d7-4bdb-ab32-73d54a2f9d83",
                    "createUserName" : "",
                    "desc" : "宋萍",
                    "id" : "86681db4-1315-40c4-ad30-ce2b06968df3",
                    "ip" : "",
                    "layout" : "",
                    "name" : "十、网站安全监测-恶意网站监测-0825",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-09-05 16:01:47"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-23 14:00:37",
                    "createUser" : "1cb88a91-8b9a-462d-9c77-4b8f13cdf897",
                    "createUserName" : "",
                    "desc" : "",
                    "id" : "203c5c10-7914-4be4-8015-5f2ea74494a4",
                    "ip" : "",
                    "layout" : "",
                    "name" : "三、重点网站监测—统计访问量--0823",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1366"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-14 11:37:21"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-22 16:14:57",
                    "createUser" : "7bff371e-abf3-4eaa-be4f-3eceeafcb6c6",
                    "createUserName" : "",
                    "desc" : "闫菁--0811",
                    "id" : "8cf83e74-038a-4b11-9f16-e047c838de07",
                    "ip" : "",
                    "layout" : "",
                    "name" : "十九、互联网流量-全局统计",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1364"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-18 09:37:39"
                }, {
                    "bkcolor" : "rgb(11, 83, 148)",
                    "bkimg" : "",
                    "components" : [],
                    "createTime" : "2016-08-09 13:08:39",
                    "createUser" : "9d49a032-12aa-47f2-b370-b28eb96df834",
                    "createUserName" : "",
                    "desc" : "闫菁--0809",
                    "id" : "c2ea7778-d42a-41fb-b50c-40753ac13a7d",
                    "ip" : "",
                    "layout" : "",
                    "name" : "十七、DDoS攻击事件实时监测",
                    "parameters" : [],
                    "parttern" : "0",
                    "pid2TreeComponents" : [],
                    "queryComponents" : [],
                    "remark" : "",
                    "size" : {
                        "height" : "616",
                        "max" : true,
                        "min" : true,
                        "title" : "",
                        "width" : "1364"
                    },
                    "status" : "1",
                    "styleid" : "",
                    "transparency" : "65",
                    "updateTime" : "2016-10-20 10:37:47"
                }
                ],
                multiple: []
            }
        },

        methods: {
            handleSelectionChange(val) {
                this.multiple = val;
            }
        }
    };
</script>

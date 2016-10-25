/**
 * Created by yelingfeng on 2016/9/9.
 */
var Express = require('express');

var app = new Express();
var port = process.env.PORT || 8400;

app.get('/', function(req, res) {
  return res.send('<html><head></head><body><h1>test ApiServer</h1></body></html>');
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/selectModules', (req, res)=>{
  res.send({
    'result':{
      "bkcolor": "rgb(11, 83, 148)",
      "bkimg": "",
      "components": [
        {
          "border": "",
          "child": [],
          "childList": [],
          "childSize": null,
          "clsName": "",
          "code": "图表A",
          "content": {
            "cascade": "",
            "chartCategory": "z_chart",
            "chartType": "line",
            "childType": "cq3",
            "code": "图表A",
            "componentId": "2724571b-0914-483a-ae63-1adcee295e2c",
            "content": "",
            "contentObj": null,
            "createTime": "2016-06-16 16:05:25.0",
            "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
            "datasets": [
              {
                "code": "",
                "contentId": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "976cfbde-d295-4971-bec6-f469293c8904",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [],
                "params": "[]",
                "refreshTime": "",
                "refreshType": "",
                "remark": "",
                "rows": "",
                "sql": "近一月感染恶意事件的用户变化趋势",
                "sqlType": "",
                "type": "2"
              },
              {
                "code": "",
                "contentId": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "f56ced8e-c124-47be-a787-db2a59a5fd94",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [],
                "params": "[]",
                "refreshTime": "",
                "refreshType": "0",
                "remark": "",
                "rows": "",
                "sql": "SELECT DATE_FORMAT(day_time,'%Y-%m-%d') AS NAME, \n       day_num AS VALUE, \n       CONCAT(DATE_FORMAT(day_time,'%Y-%m-%d'), '<p/>', '感染数量：',CAST(day_num AS CHAR), ' 次') AS info, '感染' AS category\nFROM mobinterana_i_controlevente_day_stat\nWHERE day_time>= ADDDATE(NOW(), INTERVAL -1 MONTH)",
                "sqlType": "1",
                "type": "1"
              }
            ],
            "id": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
            "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
            "type": "0"
          },
          "coordinate": {
            "height": "180",
            "opacity": "0",
            "width": "1340",
            "x": "16",
            "y": "52"
          },
          "createTime": "2016-06-16 16:05:25",
          "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
          "grapping": "2",
          "id": "2724571b-0914-483a-ae63-1adcee295e2c",
          "levelIndex": "502",
          "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
          "pid": "",
          "pid2": "",
          "props": {
            "commonProp": {
              "cascadeValueType": "2",
              "commonAxis": "",
              "commonBg": "",
              "commonft": "",
              "deg": "",
              "labelStep": "",
              "legendPositon": "",
              "showGVal": "",
              "showLegend": "",
              "showRestoreVal": ""
            },
            "specialProp": {
              "axis": "",
              "pieShowPercent": "",
              "showBarVal": "",
              "showLinePoint": "",
              "showLineVal": "",
              "showPieName": "",
              "showPiePercent": "",
              "showPieValues": "",
              "tpDateFormat": "",
              "tpDefaultType": "",
              "tpIsDay": "",
              "tpIsFixed": "",
              "tpIsHour": "",
              "tpIsQuarter": "",
              "tpMinSize": "",
              "xMax": "",
              "xMin": "",
              "xName": "",
              "xUnit": "",
              "xbName": "",
              "xbUint": "",
              "xtName": "",
              "xtUint": "",
              "ylMax": "",
              "ylMin": "",
              "ylName": "",
              "ylUnit": "",
              "yrMax": "",
              "yrMin": "",
              "yrName": "",
              "yrUnit": ""
            },
            "title": {
              "fontColor": "",
              "fontFamily": "Microsoft YaHei",
              "fontSize": "16px",
              "fontStyle": "",
              "fontWeight": "",
              "textDecoration": "",
              "titleAlign": "left-top"
            }
          },
          "remark": "",
          "titleName": "近一月感染恶意事件的用户变化趋势",
          "visible": "1",
          "zid": "zid-3629a83a-0b743313-3be59e35"
        },
        {
          "border": "",
          "child": [],
          "childList": [],
          "childSize": null,
          "clsName": "",
          "code": "图表B",
          "content": {
            "cascade": "图表A.NAME",
            "chartCategory": "f_chart",
            "chartType": "pie",
            "childType": "2",
            "code": "图表B",
            "componentId": "9dc4b6fe-7f98-4f89-9d90-7a30c9ef9daa",
            "content": "",
            "contentObj": null,
            "createTime": "2016-06-16 16:05:25.0",
            "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
            "datasets": [
              {
                "code": "",
                "contentId": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "afbec346-fa5a-4de4-a653-d27c43e6cf86",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [
                  {
                    "name": "图表A.NAME",
                    "value": ""
                  }
                ],
                "params": "[{\"name\":\"图表A.NAME\",\"value\":\"\"}]",
                "refreshTime": "",
                "refreshType": "",
                "remark": "",
                "rows": "",
                "sql": "%%图表A.NAME%% 数据来源占比",
                "sqlType": "",
                "type": "2"
              },
              {
                "code": "",
                "contentId": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "dc95da0b-2457-40a5-9803-41d565e92d63",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [
                  {
                    "name": "图表A.NAME",
                    "value": ""
                  }
                ],
                "params": "[{\"name\":\"图表A.NAME\",\"value\":\"\"}]",
                "refreshTime": "",
                "refreshType": "0",
                "remark": "",
                "rows": "",
                "sql": "SELECT data_source AS NAME, VALUE,\n          CONCAT('来源： ',data_source, '<p/>', '感染数量：',CAST(VALUE AS CHAR), ' 次') AS info, '感染' AS category\nFROM \n(\nSELECT CASE WHEN data_source = 'CM' THEN '重庆移动' \n\t         WHEN data_source = 'CU' THEN '重庆联通'\n\t         WHEN data_source = 'CT' THEN '重庆电信'\n\t         WHEN data_source = 'CNCERT' THEN '国家中心' END AS data_source, SUM(num) AS VALUE\n\t          \nFROM mobinterana_i_controlevente\nWHERE event_time_day = %%图表A.NAME%%\nGROUP BY data_source\n) t",
                "sqlType": "1",
                "type": "1"
              }
            ],
            "id": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
            "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
            "type": "0"
          },
          "coordinate": {
            "height": "380",
            "opacity": "",
            "width": "650",
            "x": "20",
            "y": "274"
          },
          "createTime": "2016-06-16 16:05:25",
          "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
          "grapping": "1",
          "id": "9dc4b6fe-7f98-4f89-9d90-7a30c9ef9daa",
          "levelIndex": "504",
          "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
          "pid": "",
          "pid2": "zid-3629a83a-0b743313-3be59e35",
          "props": {
            "commonProp": {
              "cascadeValueType": "",
              "commonAxis": "",
              "commonBg": "",
              "commonft": "",
              "deg": "",
              "labelStep": "",
              "legendPositon": "",
              "showGVal": "",
              "showLegend": "true",
              "showRestoreVal": ""
            },
            "specialProp": {
              "axis": "",
              "pieShowPercent": "",
              "showBarVal": "",
              "showLinePoint": "",
              "showLineVal": "",
              "showPieName": "true",
              "showPiePercent": "true",
              "showPieValues": "true",
              "tpDateFormat": "",
              "tpDefaultType": "",
              "tpIsDay": "",
              "tpIsFixed": "",
              "tpIsHour": "",
              "tpIsQuarter": "",
              "tpMinSize": "",
              "xMax": "",
              "xMin": "",
              "xName": "",
              "xUnit": "",
              "xbName": "",
              "xbUint": "",
              "xtName": "",
              "xtUint": "",
              "ylMax": "",
              "ylMin": "",
              "ylName": "",
              "ylUnit": "",
              "yrMax": "",
              "yrMin": "",
              "yrName": "",
              "yrUnit": ""
            },
            "title": {
              "fontColor": "",
              "fontFamily": "Microsoft YaHei",
              "fontSize": "16px",
              "fontStyle": "",
              "fontWeight": "",
              "textDecoration": "",
              "titleAlign": "left-top"
            }
          },
          "remark": "",
          "titleName": " 数据来源占比",
          "visible": "1",
          "zid": "zid-3d608040-9355e4e8-4b5ffdaf"
        },
        {
          "border": "",
          "child": [],
          "childList": [],
          "childSize": null,
          "clsName": "",
          "code": "表格AA",
          "content": {
            "cascade": "图表A.NAME",
            "chartCategory": "",
            "chartType": "z_table_normal",
            "childType": "",
            "code": "表格AA",
            "componentId": "de306897-3b65-43c7-a9dd-1fb9f54d6c4d",
            "content": "",
            "contentObj": null,
            "createTime": "2016-06-16 16:05:25.0",
            "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
            "datasets": [
              {
                "code": "",
                "contentId": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "b16dc906-876a-47c4-816a-97c819fe5320",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [
                  {
                    "name": "图表A.NAME",
                    "value": ""
                  }
                ],
                "params": "[{\"name\":\"图表A.NAME\",\"value\":\"\"}]",
                "refreshTime": "",
                "refreshType": "",
                "remark": "",
                "rows": "",
                "sql": "%%图表A.NAME%% 用户感染恶意事件TOP100",
                "sqlType": "",
                "type": "2"
              },
              {
                "code": "",
                "contentId": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "d5abf3a2-f39f-4a42-8bcb-56f5c0a1f53d",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [
                  {
                    "name": "图表A.NAME",
                    "value": ""
                  }
                ],
                "params": "[{\"name\":\"图表A.NAME\",\"value\":\"\"}]",
                "refreshTime": "",
                "refreshType": "0",
                "remark": "",
                "rows": "",
                "sql": "SELECT virus_name AS '恶意程序', \n\td_ip AS '控制IP',\n\ts_ip AS '受控IP', \n\tphone AS '手机号' ,\n        count(1) AS '发生次数', \n\tdate_format(MAX(last_time),'%H:%i:%s') AS '最近一次发生时间'\nFROM mobinterana_i_controlevente\nWHERE event_time_day = %%图表A.NAME%%\nGROUP BY virus_name, phone, d_ip, s_ip\norder by  发生次数 desc\nlimit 100",
                "sqlType": "1",
                "type": "1"
              }
            ],
            "id": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
            "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
            "type": "2"
          },
          "coordinate": {
            "height": "330",
            "opacity": "",
            "width": "660",
            "x": "670",
            "y": "275"
          },
          "createTime": "2016-06-16 16:05:25",
          "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
          "grapping": "1",
          "id": "de306897-3b65-43c7-a9dd-1fb9f54d6c4d",
          "levelIndex": "505",
          "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
          "pid": "",
          "pid2": "zid-3629a83a-0b743313-3be59e35",
          "props": {
            "commonProp": {
              "cascadeValueType": "",
              "commonAxis": "",
              "commonBg": "",
              "commonft": "",
              "deg": "",
              "labelStep": "",
              "legendPositon": "",
              "showGVal": "",
              "showLegend": "",
              "showRestoreVal": ""
            },
            "specialProp": {
              "axis": "",
              "pieShowPercent": "",
              "showBarVal": "",
              "showLinePoint": "",
              "showLineVal": "",
              "showPieName": "",
              "showPiePercent": "",
              "showPieValues": "",
              "tpDateFormat": "",
              "tpDefaultType": "",
              "tpIsDay": "",
              "tpIsFixed": "",
              "tpIsHour": "",
              "tpIsQuarter": "",
              "tpMinSize": "",
              "xMax": "",
              "xMin": "",
              "xName": "",
              "xUnit": "",
              "xbName": "",
              "xbUint": "",
              "xtName": "",
              "xtUint": "",
              "ylMax": "",
              "ylMin": "",
              "ylName": "",
              "ylUnit": "",
              "yrMax": "",
              "yrMin": "",
              "yrName": "",
              "yrUnit": ""
            },
            "title": {
              "fontColor": "",
              "fontFamily": "Microsoft YaHei",
              "fontSize": "16px",
              "fontStyle": "",
              "fontWeight": "",
              "textDecoration": "",
              "titleAlign": "left-top"
            }
          },
          "remark": "",
          "titleName": " 用户感染恶意事件TOP100",
          "visible": "1",
          "zid": "zid-50432379-d149c6ab-06d09694"
        }
      ],
      "createTime": "2016-06-16 16:05:25",
      "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
      "createUserName": "",
      "desc": "闫菁-0616-勿删除",
      "id": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
      "layout": "",
      "name": "十、用户感染恶意事件数量变化趋势",
      "parameters": [],
      "parttern": "0",
      "pid2TreeComponents": [
        {
          "border": "",
          "child": [],
          "childList": [
            {
              "border": "",
              "child": [],
              "childList": [],
              "childSize": null,
              "clsName": "",
              "code": "图表B",
              "content": {
                "cascade": "图表A.NAME",
                "chartCategory": "f_chart",
                "chartType": "pie",
                "childType": "2",
                "code": "图表B",
                "componentId": "9dc4b6fe-7f98-4f89-9d90-7a30c9ef9daa",
                "content": "",
                "contentObj": null,
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasets": [
                  {
                    "code": "",
                    "contentId": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
                    "createTime": "2016-06-16 16:05:25.0",
                    "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                    "datasourceId": "103",
                    "datasourceName": "cradar3",
                    "id": "afbec346-fa5a-4de4-a653-d27c43e6cf86",
                    "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                    "name": "",
                    "page": "",
                    "paramStr": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "params": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "refreshTime": "",
                    "refreshType": "",
                    "remark": "",
                    "rows": "",
                    "sql": "%%图表A.NAME%% 数据来源占比",
                    "sqlType": "",
                    "type": "2"
                  },
                  {
                    "code": "",
                    "contentId": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
                    "createTime": "2016-06-16 16:05:25.0",
                    "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                    "datasourceId": "103",
                    "datasourceName": "cradar3",
                    "id": "dc95da0b-2457-40a5-9803-41d565e92d63",
                    "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                    "name": "",
                    "page": "",
                    "paramStr": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "params": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "refreshTime": "",
                    "refreshType": "0",
                    "remark": "",
                    "rows": "",
                    "sql": "SELECT data_source AS NAME, VALUE,\n          CONCAT('来源： ',data_source, '<p/>', '感染数量：',CAST(VALUE AS CHAR), ' 次') AS info, '感染' AS category\nFROM \n(\nSELECT CASE WHEN data_source = 'CM' THEN '重庆移动' \n\t         WHEN data_source = 'CU' THEN '重庆联通'\n\t         WHEN data_source = 'CT' THEN '重庆电信'\n\t         WHEN data_source = 'CNCERT' THEN '国家中心' END AS data_source, SUM(num) AS VALUE\n\t          \nFROM mobinterana_i_controlevente\nWHERE event_time_day = %%图表A.NAME%%\nGROUP BY data_source\n) t",
                    "sqlType": "1",
                    "type": "1"
                  }
                ],
                "id": "1527c52c-189d-418f-a186-f05a4cf8f6c9",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "type": "0"
              },
              "coordinate": {
                "height": "380",
                "opacity": "",
                "width": "650",
                "x": "20",
                "y": "274"
              },
              "createTime": "2016-06-16 16:05:25",
              "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
              "grapping": "1",
              "id": "9dc4b6fe-7f98-4f89-9d90-7a30c9ef9daa",
              "levelIndex": "504",
              "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
              "pid": "",
              "pid2": "zid-3629a83a-0b743313-3be59e35",
              "props": {
                "commonProp": {
                  "cascadeValueType": "",
                  "commonAxis": "",
                  "commonBg": "",
                  "commonft": "",
                  "deg": "",
                  "labelStep": "",
                  "legendPositon": "",
                  "showGVal": "",
                  "showLegend": "true",
                  "showRestoreVal": ""
                },
                "specialProp": {
                  "axis": "",
                  "pieShowPercent": "",
                  "showBarVal": "",
                  "showLinePoint": "",
                  "showLineVal": "",
                  "showPieName": "true",
                  "showPiePercent": "true",
                  "showPieValues": "true",
                  "tpDateFormat": "",
                  "tpDefaultType": "",
                  "tpIsDay": "",
                  "tpIsFixed": "",
                  "tpIsHour": "",
                  "tpIsQuarter": "",
                  "tpMinSize": "",
                  "xMax": "",
                  "xMin": "",
                  "xName": "",
                  "xUnit": "",
                  "xbName": "",
                  "xbUint": "",
                  "xtName": "",
                  "xtUint": "",
                  "ylMax": "",
                  "ylMin": "",
                  "ylName": "",
                  "ylUnit": "",
                  "yrMax": "",
                  "yrMin": "",
                  "yrName": "",
                  "yrUnit": ""
                },
                "title": {
                  "fontColor": "",
                  "fontFamily": "Microsoft YaHei",
                  "fontSize": "16px",
                  "fontStyle": "",
                  "fontWeight": "",
                  "textDecoration": "",
                  "titleAlign": "left-top"
                }
              },
              "remark": "",
              "titleName": " 数据来源占比",
              "visible": "1",
              "zid": "zid-3d608040-9355e4e8-4b5ffdaf"
            },
            {
              "border": "",
              "child": [],
              "childList": [],
              "childSize": null,
              "clsName": "",
              "code": "表格AA",
              "content": {
                "cascade": "图表A.NAME",
                "chartCategory": "",
                "chartType": "z_table_normal",
                "childType": "",
                "code": "表格AA",
                "componentId": "de306897-3b65-43c7-a9dd-1fb9f54d6c4d",
                "content": "",
                "contentObj": null,
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasets": [
                  {
                    "code": "",
                    "contentId": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
                    "createTime": "2016-06-16 16:05:25.0",
                    "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                    "datasourceId": "103",
                    "datasourceName": "cradar3",
                    "id": "b16dc906-876a-47c4-816a-97c819fe5320",
                    "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                    "name": "",
                    "page": "",
                    "paramStr": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "params": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "refreshTime": "",
                    "refreshType": "",
                    "remark": "",
                    "rows": "",
                    "sql": "%%图表A.NAME%% 用户感染恶意事件TOP100",
                    "sqlType": "",
                    "type": "2"
                  },
                  {
                    "code": "",
                    "contentId": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
                    "createTime": "2016-06-16 16:05:25.0",
                    "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                    "datasourceId": "103",
                    "datasourceName": "cradar3",
                    "id": "d5abf3a2-f39f-4a42-8bcb-56f5c0a1f53d",
                    "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                    "name": "",
                    "page": "",
                    "paramStr": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "params": [
                      {
                        "name": "图表A.NAME",
                        "value": ""
                      }
                    ],
                    "refreshTime": "",
                    "refreshType": "0",
                    "remark": "",
                    "rows": "",
                    "sql": "SELECT virus_name AS '恶意程序', \n\td_ip AS '控制IP',\n\ts_ip AS '受控IP', \n\tphone AS '手机号' ,\n        count(1) AS '发生次数', \n\tdate_format(MAX(last_time),'%H:%i:%s') AS '最近一次发生时间'\nFROM mobinterana_i_controlevente\nWHERE event_time_day = %%图表A.NAME%%\nGROUP BY virus_name, phone, d_ip, s_ip\norder by  发生次数 desc\nlimit 100",
                    "sqlType": "1",
                    "type": "1"
                  }
                ],
                "id": "63ad481a-8ce2-4fbf-9488-46292d51ad8c",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "type": "2"
              },
              "coordinate": {
                "height": "330",
                "opacity": "",
                "width": "660",
                "x": "670",
                "y": "275"
              },
              "createTime": "2016-06-16 16:05:25",
              "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
              "grapping": "1",
              "id": "de306897-3b65-43c7-a9dd-1fb9f54d6c4d",
              "levelIndex": "505",
              "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
              "pid": "",
              "pid2": "zid-3629a83a-0b743313-3be59e35",
              "props": {
                "commonProp": {
                  "cascadeValueType": "",
                  "commonAxis": "",
                  "commonBg": "",
                  "commonft": "",
                  "deg": "",
                  "labelStep": "",
                  "legendPositon": "",
                  "showGVal": "",
                  "showLegend": "",
                  "showRestoreVal": ""
                },
                "specialProp": {
                  "axis": "",
                  "pieShowPercent": "",
                  "showBarVal": "",
                  "showLinePoint": "",
                  "showLineVal": "",
                  "showPieName": "",
                  "showPiePercent": "",
                  "showPieValues": "",
                  "tpDateFormat": "",
                  "tpDefaultType": "",
                  "tpIsDay": "",
                  "tpIsFixed": "",
                  "tpIsHour": "",
                  "tpIsQuarter": "",
                  "tpMinSize": "",
                  "xMax": "",
                  "xMin": "",
                  "xName": "",
                  "xUnit": "",
                  "xbName": "",
                  "xbUint": "",
                  "xtName": "",
                  "xtUint": "",
                  "ylMax": "",
                  "ylMin": "",
                  "ylName": "",
                  "ylUnit": "",
                  "yrMax": "",
                  "yrMin": "",
                  "yrName": "",
                  "yrUnit": ""
                },
                "title": {
                  "fontColor": "",
                  "fontFamily": "Microsoft YaHei",
                  "fontSize": "16px",
                  "fontStyle": "",
                  "fontWeight": "",
                  "textDecoration": "",
                  "titleAlign": "left-top"
                }
              },
              "remark": "",
              "titleName": " 用户感染恶意事件TOP100",
              "visible": "1",
              "zid": "zid-50432379-d149c6ab-06d09694"
            }
          ],
          "childSize": null,
          "clsName": "",
          "code": "图表A",
          "content": {
            "cascade": "",
            "chartCategory": "z_chart",
            "chartType": "line",
            "childType": "cq3",
            "code": "图表A",
            "componentId": "2724571b-0914-483a-ae63-1adcee295e2c",
            "content": "",
            "contentObj": null,
            "createTime": "2016-06-16 16:05:25.0",
            "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
            "datasets": [
              {
                "code": "",
                "contentId": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "976cfbde-d295-4971-bec6-f469293c8904",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [],
                "params": [],
                "refreshTime": "",
                "refreshType": "",
                "remark": "",
                "rows": "",
                "sql": "近一月感染恶意事件的用户变化趋势",
                "sqlType": "",
                "type": "2"
              },
              {
                "code": "",
                "contentId": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
                "createTime": "2016-06-16 16:05:25.0",
                "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
                "datasourceId": "103",
                "datasourceName": "cradar3",
                "id": "f56ced8e-c124-47be-a787-db2a59a5fd94",
                "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
                "name": "",
                "page": "",
                "paramStr": [],
                "params": [],
                "refreshTime": "",
                "refreshType": "0",
                "remark": "",
                "rows": "",
                "sql": "SELECT DATE_FORMAT(day_time,'%Y-%m-%d') AS NAME, \n       day_num AS VALUE, \n       CONCAT(DATE_FORMAT(day_time,'%Y-%m-%d'), '<p/>', '感染数量：',CAST(day_num AS CHAR), ' 次') AS info, '感染' AS category\nFROM mobinterana_i_controlevente_day_stat\nWHERE day_time>= ADDDATE(NOW(), INTERVAL -1 MONTH)",
                "sqlType": "1",
                "type": "1"
              }
            ],
            "id": "4167dee8-0259-48ed-a4d0-d76cfff8252a",
            "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
            "type": "0"
          },
          "coordinate": {
            "height": "180",
            "opacity": "0",
            "width": "1340",
            "x": "16",
            "y": "52"
          },
          "createTime": "2016-06-16 16:05:25",
          "createUser": "551214bf-931f-43dd-95ea-676d8f62b95d",
          "grapping": "2",
          "id": "2724571b-0914-483a-ae63-1adcee295e2c",
          "levelIndex": "502",
          "moduleId": "2b1fa1a4-11b2-4169-ab37-e0408f8f655a",
          "pid": "",
          "pid2": "",
          "props": {
            "commonProp": {
              "cascadeValueType": "2",
              "commonAxis": "",
              "commonBg": "",
              "commonft": "",
              "deg": "",
              "labelStep": "",
              "legendPositon": "",
              "showGVal": "",
              "showLegend": "",
              "showRestoreVal": ""
            },
            "specialProp": {
              "axis": "",
              "pieShowPercent": "",
              "showBarVal": "",
              "showLinePoint": "",
              "showLineVal": "",
              "showPieName": "",
              "showPiePercent": "",
              "showPieValues": "",
              "tpDateFormat": "",
              "tpDefaultType": "",
              "tpIsDay": "",
              "tpIsFixed": "",
              "tpIsHour": "",
              "tpIsQuarter": "",
              "tpMinSize": "",
              "xMax": "",
              "xMin": "",
              "xName": "",
              "xUnit": "",
              "xbName": "",
              "xbUint": "",
              "xtName": "",
              "xtUint": "",
              "ylMax": "",
              "ylMin": "",
              "ylName": "",
              "ylUnit": "",
              "yrMax": "",
              "yrMin": "",
              "yrName": "",
              "yrUnit": ""
            },
            "title": {
              "fontColor": "",
              "fontFamily": "Microsoft YaHei",
              "fontSize": "16px",
              "fontStyle": "",
              "fontWeight": "",
              "textDecoration": "",
              "titleAlign": "left-top"
            }
          },
          "remark": "",
          "titleName": "近一月感染恶意事件的用户变化趋势",
          "visible": "1",
          "zid": "zid-3629a83a-0b743313-3be59e35"
        }
      ],
      "queryComponents": [],
      "remark": "",
      "size": {
        "height": "616",
        "max": true,
        "min": true,
        "title": "",
        "width": "1366"
      },
      "status": "1",
      "styleid": "",
      "transparency": "65",
      "updateTime": "2016-07-11 10:18:09"
    }
  });
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==>  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

/**
 * Created by yelingfeng on 2016/10/14.
 */
/**
 * Created by yelingfeng on 2016/8/9.
 */

import Utils from "./Util"
const mapUtil = (function (me) {

    var axisCommon = {
        getLabel: function (op) {
            var obj = {
                textStyle: {
                    color: 'rgb(3, 167, 234)',
                }
            };
            if (op.axisLabel) {
                obj.rotate = op.axisLabel["rotate"];
                obj.interval = op.axisLabel["interval"];
            }
            ;
            return obj
        },
        getLine: function (op) {
            return {
                lineStyle: {
                    color: "rgba(255,255,255,0.5)",
                    width: 1
                }
            }
        },
        getName: function (name, unit) {
            return name + unit;
        }

    }
    var getTooltip = function () {
        return {
            trigger: 'item',
            textStyle: {
                fontSize: 12,
                align: "left"
            },
            formatter: function (params) {
                var info = params.data.info;
                if (info) {
                    return info;
                } else {
                    return params.name + "<br/>" + params.value;
                }
            }
        }
    }
    var colorList = ["#C96565", "#CD8366", "#CA9D6C", "#CE9451", "#D9A126",
        "#D1B814", "#B1D114", "#77D011", "#14D13E", "#15D184",
        "#17CECF", "#179AD0", "#1566D2", "#294fa9", "#6F3FBC",
        "#9D39BB", "#4F438C"];

    //TODO
    return me = {

        mapTipData: {},

        getPointCQMap: function (op) {
            var option = me.getMapOption(op);
            option.series[0].markPoint = me.getMarkPointData(op.data);
            option.series[0].geoCoord = cqGeoCoord;
            option.series[0].data = [];
            option.series[0].roam = true;
            return option;
        },
        getRangeCQMap: function (op) {
            var option = me.getMapOption(op);
            option.series[0].roam = true;
            return option;
        },
        getRangeWorldMap: function (op) {
            var option = me.getMapOption(op);
            option.series[0].geoCoord = worldGeoCoord;
            option.series[0].nameMap = worldName;
            option.series[0].mapType = 'world';
            option.series[0].roam = true;
            return option;
        },


        getMapSeries: function (op) {
            var series = op.series;
            var itemStyle2 = {
                normal: {
                    borderColor: "#008FBF",
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#00AFFE'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    color: "rgba(235, 200, 5,0.7)"
                }
            };
            series[0].itemStyle = itemStyle2;
            return series;
        },

        getMarkPointData: function (data) {
            var areaData = [];
            data.forEach(function (d) {
                areaData.push({
                    name: d.name,
                    value: d.value
                })
            })
            var markPoint = {
                clickable: false,
                symbolSize: 12,
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: false,
                        }
                    }
                },
                data: areaData
            }
            return markPoint;
        },

        getMapOption: function (op) {
            var maxin = Utils.getMaxmin(op.data);
            var _series = me.getMapSeries(op);

            var isRefresh = op.showRestore;

            var mapTipData = {};
            if (op.data.length) {
                op.data.forEach(function (it) {
                    mapTipData[it.name] = it.info;
                })
            }

            var option = {
//					backgroundColor : "rgba(0,0,0,0)",
                dataRange: {
                    x: 'left',
                    y: 'top',
                    calculable: true,
                    color: ['#d94e5d', '#eac736', '#50a3ba'],
                    min: maxin.min,//0,
                    max: maxin.max,//1000,
                    realtime: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    enterable: true,
                    position: function (p) {
                        return [p[0] + 5, p[1] - 40];
                    },
                    formatter: function (params, ticket, callback) {
                        var str = me.mapTipData[params.name] || params.name;
                        return str;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                        align: "left"
                    }
                },
                series: _series
            }

            if (isRefresh) {
                option.toolbox = {
                    show: true,
                    orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                    x: 'right',
                    y: 'top',
                    backgroundColor: 'rgba(0,0,0,.3)',
                    padding: 5,
                    feature: {
                        restore: {
                            show: true,
                            title: '刷新',
                            color: '#fff',
                        }
                    },
                    textStyle: {
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12
                    }
                };
            }
            return option;
        },


        // 普通单线图
        getBaseLine: function (op) {
            var sObj = me.getOneLineData(op.data);
            var yConfig = me.getYAxis({
                yName: op.yName || "",
                yUnit: op.yUnit || "",
                type: "value",
            });
            var xConfig = me.getXAxis({
                xName: op.xName || "",
                xUnit: op.xUnit || "",
                type: "category",
                data: sObj.xAxis
            })

            if (op.data.length == 0 || (op.data.length == 1 && op.data.value == '')) {
                return me._getNullConfig(xConfig, yConfig, 'line');
            }

            var maxin = Utils.getMaxmin(op.data);
            var maxNum = maxin.max;
            var minNum = maxin.min;
            var min = minNum - ( maxNum - minNum) * 0.05;
            var max = maxNum + ( maxNum - minNum) * 0.05;
            max = max == 0 ? 100 : max;
            min = min < 0 ? 0 : min;

            xConfig.boundaryGap = false;
            xConfig.max = max || 5;
            xConfig.min = min || 0;

            return {
                grid: {
                    borderWidth: 0,
                    x: 60,
                    y: 20,
                    x2: 40,
                    y2: 40
                },
                yAxis: [yConfig],
                backgroundColor: CQbackGroundColor,
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        fontSize: 12,
                        align: "left"
                    },
                    formatter: function (params) {
                        var info = params[0].data.info;
                        window._echart_line_hoverData_X = {
                            name: params[0].name,
                            value: params[0].value,
                            dataObj: params[0].dataObj
                        };
                        if (info) {
                            return info;
                        } else {
                            return params[0].name + "<br/>" + params[0].value;
                        }
                    }
                },
                xAxis: [xConfig],
                series: sObj.series
            }
        },
        //堆积柱图
        getStacklBar: function (op) {
            var data = op.data;
            var dd = Echarts.dataFormat.groupData(data, 'bar', true);
            console.log(dd.series)
            var yConfig = me.getYAxis({
                yName: op.yName || "",
                yUnit: op.yUnit || "",
                type: "value",
            });
            var xConfig = me.getXAxis({
                xName: op.xName || "",
                xUnit: op.xUnit || "",
                type: "category",
                data: dd.xAxis,
                axisLabel: {
                    rotate: 60,
                    interval: 0
                }
            })
            return me._getBar(xConfig, yConfig, dd.series);
        },
        // 普通柱图(非分组)
        getVerticalBar: function (op) {
            console.log(1)
            var dd = me.getBarSeriesData(op.data);
            var yConfig = me.getYAxis({
                yName: op.yName || "",
                yUnit: op.yUnit || "",
                type: "value",
            });
            var xConfig = me.getXAxis({
                xName: op.xName || "",
                xUnit: op.xUnit || "",
                type: "category",
                data: dd.xAxis,
                axisLabel: {
                    rotate: 60,
                    interval: 0
                }
            })
            return me._getBar(xConfig, yConfig, dd.series);
        },


        // 横向柱图(非分组)
        getHorizontalBar: function (op) {
            var dd = me.getBarSeriesData(op.data);
            var yConfig = me.getYAxis({
                yName: op.yName || "",
                yUnit: op.yUnit || "",
                type: "category",
                data: dd.xAxis
            });
            var xConfig = me.getXAxis({
                xName: op.xName || "",
                xUnit: op.xUnit || "",
                type: "value",
            })
            return {
                grid: {
                    x: 120,
                    y: 30,
                    x2: 30,
                    y2: 50,
                    borderWidth: 0
                },
                backgroundColor: CQbackGroundColor,

                yAxis: [yConfig],
                tooltip: getTooltip(),
                xAxis: [xConfig],
                series: dd.series
            };

        },

        _getBar: function (xConfig, yConfig, series) {
            return {
                grid: {
                    x: 60,
                    y: 15,
                    x2: 20,
                    y2: 50,
                    borderWidth: 0,
                    height: "55%",
                    width: "70%"
                },
                backgroundColor: CQbackGroundColor,
                yAxis: [yConfig],
                tooltip: getTooltip(),
                xAxis: [xConfig],
                series: series
            }
        },

        // 获取单分组data
        getOneData: function (data) {
            var xAxis = [];
            var _data = [];
            data.forEach(function (it) {
                xAxis.push(it.name);
                _data.push({value: it.value, name: it.name, dataObj: it, info: it.info || ""});
            })
            return {
                xAxis: xAxis,
                data: _data
            }
        },

        // 获得单线图数据
        getOneLineData: function (data, op) {
            var oneData = me.getOneData(data);
            var series = [];
            series.push({
                type: "line",
                data: oneData.data,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var color = colorList[params.dataIndex];
                            if (color == undefined) {
                                var index = params.dataIndex % colorList.length;
                                color = colorList[index]
                            }
                            return color;
                        }
                    }
                }
            });
            return {
                series: series,
                xAxis: oneData.xAxis
            };
        },


        // 获得普通柱图的series数据
        getBarSeriesData: function (data, op) {
            var oneData = me.getOneData(data);
            var series = [];
            series.push({
                type: "bar",
                data: oneData.data,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var color = colorList[params.dataIndex];
                            if (color == undefined) {
                                var index = params.dataIndex % (colorList.length - 1);
                                color = colorList[index - 1]
                            }
                            return color;
                        }
                    }
                }
            })
            return {
                series: series,
                xAxis: oneData.xAxis
            };
        },
        // yAxis
        getYAxis: function (op) {
            var _o = $.extend({
                name: op.yName,
                unit: op.yUnit
            }, _.omit(op, ['yName', 'yUnit']));
            return me._getAxis(_o);
        },
        // xAxis
        getXAxis: function (op) {
            var _o = $.extend({
                name: op.xName,
                unit: op.xUnit
            }, _.omit(op, ['xName', 'xUnit']));
            return me._getAxis(_o);
        },

        // 获取bar的yAxis
        _getAxis: function (op, data) {
            var obj = {
                name: axisCommon.getName(op.name, op.unit),
                axisLabel: axisCommon.getLabel(op),
                splitLine: false,
                axisLine: axisCommon.getLine(),
                axisTick: {show: false},
            }
            if (op.type) {
                obj.type = op.type || 'category';
            }
            if (op.data) {
                obj.data = op.data || [];
            }
            return obj;
        },

        // 空数据处理
        _getNullConfig: function (xConfig, yConfig, type) {
            xConfig.data = ['无数据'];
            return {
                grid: {
                    borderWidth: 0,
                    x: 60,
                    y: 20,
                    x2: 20,
                    y2: 40,
                },
                xAxis: [xConfig],
                yAxis: [yConfig],
                series: [{type: type, data: [0]}]
            }
        },


        groupData: function (data) {

            var xAxis = [];
            var group = [];
            var series = [];

            var emptyData = {category: [], xAxis: [], series: []};
            if (data == null || (data.length == 1 && data[0].name == "" )) {
                return emptyData;
            }

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < xAxis.length && xAxis[j] != data[i].name; j++);
                if (j == xAxis.length)
                    xAxis.push(data[i].name);

                for (var k = 0; k < group.length && group[k] != data[i].category; k++);
                if (k == group.length)
                    group.push(data[i].category);
            }

            for (var i = 0; i < group.length; i++) {
                var temp = [];
                for (var j = 0; j < data.length; j++) {
                    if (group[i] == data[j].category) {
                        temp.push({
                            name: data[j].name, value: data[j].value, dataObj: data[j], tooltip: {
                                formatter: data[j].info
                            }
                        });
                    }
                }
                var series_temp = {
                    type: 'map',
                    mapType: "ningxia",
                    //selectedMode: 'single',
                    itemStyle: {
                        normal: {
                            label: {show: true},
                            borderColor: '#008FBF',
                            borderWidth: 1,
                            areaStyle: {
                                color: '#00AFFE'
                            },
                            textStyle: {
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                            color: "rgba(235, 200, 5,0.7)"
                        }
                    },
                    data: temp
                };
                series.push(series_temp);
            }

            return {category: group, xAxis: xAxis, series: series};
        }
    }

})();


export default mapUtil
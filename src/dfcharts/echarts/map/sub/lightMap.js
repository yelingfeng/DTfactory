/**
 * Created by yelingfeng on 2016/9/2.
 */

function setting(option, props) {

    let op = {
        title: {
            text: 'World Map',
            left: 'center',
            top: 5,
            itemGap: 0,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        geo: {
            map: 'world',
            silent: true,
            label: {
                emphasis: {
                    show: false,
                    areaColor: '#eee'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1.5,
                    areaColor: 'transparent',
                    borderColor: "rgba(126, 220, 248,0.95)",
                    shadowColor: 'rgba(255,255,255,0.9)',
                    shadowBlur: 20
                }
            },
            left: '6%',
            top: 40,
            bottom: '10%',
            right: '14%',
            roam: true,
        },
        series: [
            {
                name: 'Prices and Earnings 2012',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 8,
                activeOpacity: 1,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbolSize: function (data) {
                    return data[2] / 5;
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        color: '#577ceb',
                    }
                }
            },
        ]
    }

    return op
}

export default  {
    setting
}
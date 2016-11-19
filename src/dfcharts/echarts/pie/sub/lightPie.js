/**
 * Created by yelingfeng on 2016/9/2.
 */
import echarts from "echarts"
const shadowColor = 'rgba(30, 130, 182,0.9)';
const shadowSize = 30

// 高亮样式
let highLightDataStyle = {
    normal: {
        label: {show: false},
        labelLine: {show: false},
        color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
            offset: 0, color: 'rgb(194, 252, 248)' // 0% 处的颜色
        }, {
            offset: 1, color: 'rgba(255,255,255,0.9)' // 100% 处的颜色
        }], false),
        shadowBlur: 80,
        shadowColor: "rgb(26, 179, 212)",
    }
};

// 普通高亮
let lightDataStyle = {
    normal: {
        label: {show: false},
        labelLine: {show: false},
        color: "#fff",
        shadowBlur: shadowSize,
        shadowColor: shadowColor,
    }
}

const dataStyle = {
    normal: {
        label: {show: false},
        labelLine: {show: false},
        color: "rgba(194 ,252, 248,0.9)"
    }
};


const placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {show: false},
        labelLine: {show: false},
        borderColor: 'rgba(0,0,0,0)'
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};


function setting(op, props) {
    const option = {
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        animation: false,
        series: [
            {
                name: 'Line 1',
                type: 'pie',
                radius: [150, 190],
                startAngle: 110,
                itemStyle: highLightDataStyle,
                hoverAnimation: false,
                data: [
                    {
                        value: 120,
                        name: '01'
                    },
                    {
                        value: 240,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }

                ]
            },
            {
                name: 'Line 2',
                type: 'pie',
                hoverAnimation: false,
                radius: [100, 120],
                startAngle: 145,
                itemStyle: lightDataStyle,
                data: [
                    {
                        value: 120,
                        name: '02'
                    },
                    {
                        value: 240,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 3',
                type: 'pie',
                hoverAnimation: false,
                radius: [70, 80],
                itemStyle: dataStyle,
                startAngle: 100,
                data: [
                    {
                        value: 240,
                        name: '03'
                    },
                    {
                        value: 120,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },

        ]
    };
    return option

}

export default {
    setting
}
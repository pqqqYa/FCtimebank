import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#38cafb", "#4caff9", "#4adeca", "#2aa7ee", "#0270f2", "#488cf7"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['25%', '50%'],
      
      data: [{
        name: "公益活动 \n 23.23",
        value: 23,
        
      },
      {
        name: "公益服务 \n 12.98",
        value: 12,
      },
      {
        name: "关爱服务 \n 20.22",
        value: 20,
      },
      {
        name: "家政服务 \n 14.33",
        value: 14,
      },
      {
        name: "上门服务 \n 32.22",
        value: 32,
      },
      {
        name: "培训教育 \n 20.93",
        value: 20,
      },],
      
    }],
    graphic: {  
      elements: [{  
        type: 'text',  
        left: 'center',  
        top: 'middle',  
        style: {  
          text: '总量 \n 123.91', // 要显示的文本内容  
          textBaseline: 'middle',  
          textAlign: 'center',  
          fill: '#000', // 文本颜色  
          fontSize: 18 // 字体大小  
        }  
      }]  
    }
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
  },

  onReady() {
  }
});

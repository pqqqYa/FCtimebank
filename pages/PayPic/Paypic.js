import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    legend: {
    orient: "vertical",
    x: "85%",
    top: "48%",
    data: ["收入", "支出"],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    right: "14%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "收入",
      type: "bar",
      stack: "总量",
      barWidth: "70%",
      label: {
        normal: {
          show: true,
          position: "top",
        },
      },
      data: [4, 14, 8, 5, 0, 0, 0],
    },
    {
      name: "支出",
      type: "bar",
      stack: "总量",
      barWidth: "70%",
      label: {
        normal: {
          show: true,
          position: "bottom",
        },
      },
      data: [-9, -15, -22, -10, 0, 0, 0],
    },
  ],
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
    }
  },

  onReady() {
    setTimeout(function () {
    }, 2000);
  }
});

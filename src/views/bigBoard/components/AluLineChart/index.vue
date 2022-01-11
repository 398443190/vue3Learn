<template>
  <div class="line-chart">
    <div class="title-wrapper">
      <div class="title">饿了么外卖骑手概况</div>
      <div class="sub-title">Rider Growth rate</div>
    </div>
    <div id="average-age-chart2">
      <alu-echarts :options="options" id="lineChart" />
    </div>
  </div>
</template>

<script>
import { watch, onUnmounted, ref } from "vue";

const colors = ["rgb(209,248,139)", "rgb(115,201,245)", "rgb(124,136,146)"];

export default {
  name: "lineChart",
  props: {
    data: Object,
  },
  setup(props) {

    const options = ref({
      color: colors,
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        top: 20,
        right: 40,
        icon: "rect",
        textStyle: {
          fontSize: 16,
          color: colors[2],
        },
        data: [],
      },
      grid: {
        top: 60,
        bottom: 30,
        left: 80,
        right: 40,
      },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2],
            },
          },
          axisLabel: {
            fontSize: 16,
          },
          data: [1,2,3,4,5,6],
        },
        {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2],
            },
          },
          axisLabel: {
            fontSize: 16,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
            },
          },
        },
      ],
      series: [
        {
          name: ['12'],
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          lineStyle: {
            width: 2,
          },
          symbol: "none",
          data: [5, 100, 70, 120, 80, 15, 200, 300, 195, 150, 80, 103],
          //   data: data1
        },
        {
          name: ['22'],
          type: "line",
          smooth: true,
          lineStyle: {
            width: 2,
          },
          symbol: "none",
          data: [10, 50, 80, 4, 90, 50, 105, 160, 111, 54, 108, 50],
          //   data: data2
        },
      ],
    });
    return {
      options,
    };
  },
};
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);

  .title-wrapper {
    padding: 20px 40px 0;
    box-sizing: border-box;

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  #average-age-chart2 {
    width: 100%;
    height: 250px;
  }
}
</style>

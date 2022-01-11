<template>
  <div class="bar-chart">
    <div class="title-wrapper">
      <div class="left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="right">
        <div class="sub-title">最后更新时间：{{ date }} {{ time }}</div>
      </div>
    </div>
    <div id="average-age-chart3">
      <alu-echarts :options="options" id="barChart" />
    </div>
  </div>
</template>

<script>
import { watch, onUnmounted, ref } from "vue";
import {clock as useClock } from '../../../../utils/clock'

const colors = ["rgb(209,248,139)", "rgb(115,201,245)", "rgb(124,136,146)"];

export default {
  name: "lineChart",
  props: {
    data: Object,
  },
  setup(props) {
    const { time, date } = useClock();

    const options = ref({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      color: ["rgb(209,248,138)", "rgba(65,65,65,.5)"],
      grid: {
        left: 20,
        right: 0,
        bottom: 30,
        top: 20,
      },
      dataset: {
        source: [
          ["product", "2015", "2016", "2017"],
          ["Matcha Latte", 43.3, 85.8, 93.7],
          ["Milk Tea", 83.1, 73.4, 55.1],
          ["Cheese Cocoa", 86.4, 65.2, 82.5],
          ["Walnut Brownie", 72.4, 53.9, 39.1],
        ],
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dotted",
          },
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "rgb(124,136,146)",
          },
        },
        axisLabel: {
          color: "rgb(98,105,113)",
          fontSize: 16,
        },
        axisTick: { show: false },
      },
      xAxis: {
        type: "category",
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "rgb(98,105,113)",
          fontSize: 16,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "rgb(124,136,146)",
          },
        },
      },
      series: [
        {
          type: "bar",
          stack: "total",
          barWidth: 40,
        },
        {
          type: "bar",
          stack: "total",
        },
      ],
    });
    return {
      options,
      time,
      date,
    };
  },
};
</script>

<style lang="scss" scoped>
  .bar-chart {
    width: 100%;
    height: 100%;
    background: rgb(43, 44, 46);
    padding: 20px 40px;
    box-sizing: border-box;

    .title-wrapper {
      display: flex;

      .right {
        flex: 1;
        text-align: right;
      }

      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 16px;
        margin-top: 10px;
      }
    }

    #average-age-chart3 {
      height: 250px;
    }
  }
</style>

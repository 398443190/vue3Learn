<template>
  <div class="schedule-view">
      <alu-echarts :options="options" id="schedule-view-barChart" />
    <div class="bg1 bg" />
    <div class="bg2 bg" />
  </div>
</template>

<script>
import { watch, onUnmounted, ref } from "vue";
export default {
  name: "scheduleView",
  setup(props) {
    const options = ref({
      calendar: [
        {
          top: 30,
          left: 80,
          right: 40,
          bottom: 10,
          range: ["2020-06-01", "2020-12-31"],
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgb(127, 127, 127)",
            },
          },
          yearLabel: { show: false },
          dayLabel: {
            color: "rgb(127, 127, 127)",
            fontSize: 18,
          },
          monthLabel: {
            color: "rgb(127, 127, 127)",
            fontSize: 18,
          },
          itemStyle: {
            color: "rgb(48, 48, 48)",
            borderWidth: 1,
            borderColor: "rgb(48, 48, 48)",
          },
        },
      ],
      series: [
        {
          name: "步数",
          type: "scatter",
          coordinateSystem: "calendar",
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.20],
            [11.5, 7.20],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
        ],
          symbolSize: function (val) {
            return val[1] / 600;
          },
          itemStyle: {
            color: "rgb(208,248,138)",
          },
        },
        {
          name: "Top 12",
          type: "effectScatter",
          coordinateSystem: "calendar",
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
          ],
          symbolSize: function (val) {
            return val[1] / 50;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          itemStyle: {
            color: "rgb(208,248,138)",
            shadowBlur: 10,
            shadowColor: "#333",
          },
          zlevel: 1,
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
.schedule-view {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(48, 48, 48);
  padding: 20px 0;
  box-sizing: border-box;

  #schedule-view-chart {
    width: 100%;
    height: 100%;
  }

  .bg {
    width: 100%;
    height: 20px;
    background: rgb(72, 122, 72);
  }

  .bg1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bg2 {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>

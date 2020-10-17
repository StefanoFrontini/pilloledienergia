<template>
  <div ref="containerId" class="svg-container">
    <svg :width="svgWidth" :height="svgHeight">
      <text x="22" y="40" :style="`font-size: ${textTitle}em;`">
        {{ title }}
      </text>
      <g
        id="ste"
        :transform="`translate(${this.margin.left},${this.margin.top})`"
      >
        <g
          v-yAxis="{ yScale: yScale, innerWidth: -innerWidth }"
          :style="
            `font-size: ${textAxis}em; text-anchor: left; fill: #1B1B1B;font-family: radnika-medium;`
          "
        ></g>
        <g
          v-xAxis="{ xScale: xScale }"
          :style="`font-size: ${textAxis}em;font-family: radnika-medium;`"
          :transform="`translate(0,${innerHeight})`"
        ></g>
        <text
          :x="innerWidth / 2"
          :y="innerHeight + 35"
          style="font-size: 0.5em; text-anchor: middle;"
        >
          {{ xKey }}
        </text>
        <g transform="rotate(-90)">
          <text
            :x="-innerHeight / 2"
            :y="-margin.left + 7"
            style="font-size: 0.5em; text-anchor: middle;"
          >
            {{ y1Key }}
          </text>
        </g>
        <g>
          <path
            :d="path1"
            fill="none"
            stroke="#f78411"
            stroke-width="0.1em"
          ></path>
        </g>
        <g v-for="(item, i) in chartData" :key="i">
          <text
            style="text-anchor: middle; font-size: 0.45em; fill: #f78411;font-family: radnika-medium;"
            :x="item.x"
            :y="item.y1 - 15"
          >
            {{ item.y1Value }}
          </text>
        </g>
      </g>
      <g :transform="`translate(0,${this.svgHeight - 22})`">
        <text
          x="35"
          y="15"
          style="font-size: 0.5em; fill: #1B1B1B; font-style: italic;"
        >
          Fonte:
        </text>
        <text x="70" y="15" style="font-size: 0.5em; fill: #1B1B1B;">
          Ministero dello Sviluppo Economico, ARERA
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { max, extent } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { line } from "d3-shape";
import { axisLeft, axisBottom } from "d3-axis";
import { select, selectAll } from "d3-selection";
import { timeParse, timeFormatDefaultLocale } from "d3-time-format";

import _ from "lodash";

export default {
  name: "annualeConsumiPrimari",
  props: {
    title: String,
    xKey: String,
    y1Key: String,
    data: Array,
  },
  data: () => ({
    svgWidth: 355,
    margin: {
      top: 100,
      right: 22,
      bottom: 100,
      left: 45,
    },
    dataTitle: {
      x: { low: 15, high: 15 },
      y: { low: 50, high: 50 },
      fontsize: { low: 0.7, high: 1 },
    },
    dataAxis: { fontsize: { low: 0.3, high: 0.5 } },
  }),
  computed: {
    constant() {
      if (this.svgWidth < 600) {
        return 1.0803398875;
      } else {
        return 1.3803398875;
      }
    },
    textTitle() {
      if (this.svgWidth < 600) {
        return this.dataTitle.fontsize.low;
      } else {
        return this.dataTitle.fontsize.high;
      }
    },
    textAxis() {
      if (this.svgWidth < 600) {
        return this.dataAxis.fontsize.low;
      } else {
        return this.dataAxis.fontsize.high;
      }
    },
    svgHeight() {
      return this.svgWidth / this.constant;
    },
    innerWidth() {
      return this.svgWidth - this.margin.left - this.margin.right;
    },
    innerHeight() {
      return this.svgHeight - this.margin.top - this.margin.bottom;
    },
    dataMax() {
      return max(this.data, (d) => +d[this.y1Key]);
    },
    yScale() {
      return scaleLinear()
        .domain([150, this.dataMax])
        .range([this.innerHeight, 0])
        .nice();
    },
    xScale() {
      return scaleTime()
        .domain(extent(this.data, (d) => this.parseTime(d[this.xKey])))
        .range([0, this.innerWidth])
        .nice();
    },
    lineGenerator1() {
      return line()
        .x((d) => this.xScale(this.parseTime(d[this.xKey])))
        .y((d) => this.yScale(+d[this.y1Key]));
    },
    path1() {
      return this.lineGenerator1(this.data);
    },
    parseTime() {
      return timeParse("%Y");
    },
    chartData() {
      return _.map(this.data, (d) => {
        return {
          x: this.xScale(this.parseTime(d[this.xKey])),
          y1: this.yScale(+d[this.y1Key]),
          y1Value: +d[this.y1Key],
        };
      });
    },
  },
  directives: {
    yAxis(el, binding) {
      select(el).call(
        axisLeft(binding.value.yScale)
          .tickSize(binding.value.innerWidth)
          .tickPadding(14)
      );
      select(el)
        .selectAll(".domain")
        .remove();
    },
    xAxis(el, binding) {
      select(el).call(axisBottom(binding.value.xScale));
      select(el)
        .selectAll(".domain, .tick line")
        .remove();
    },
  },

  methods: {
    getWindowWidth(event) {
      this.svgWidth = this.$refs.containerId.offsetWidth;
    },
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
    });
    this.getWindowWidth();

    //this.svgWidth = this.$refs.containerId.offsetWidth;
    //this.AddResizeListener();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>

<style scoped lang="scss">
.svg-container {
  text-align: center;
  font-family: "radnika-medium";
}

::v-deep .tick line {
  stroke: #f5f3f2;
  stroke-dasharray: 4 1;
}
.fonte_b {
  font-size: 0.8em;
  fill: #1b1b1b;
  font-style: italic;
}
.fonte_n {
  font-size: 0.8em;
  fill: #1b1b1b;
}
</style>

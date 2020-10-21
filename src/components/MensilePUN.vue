<template>
  <div ref="containerId" class="svg-container">
    <svg :width="svgWidth" :height="svgHeight">
      <text
        x="12"
        y="50"
        :style="`font-size: ${textTitle}em;font-family: radnika-medium;`"
      >
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
          :style="`font-size: ${textAxis}em;`"
          :transform="`translate(0,${innerHeight})`"
        ></g>
        <text
          :x="innerWidth / 2"
          :y="innerHeight + 35"
          style="font-size: 0.5em; text-anchor: middle;stroke-width: 0em;stroke: #1B1B1B;font-family: radnika-medium;"
        >
          {{ xKey }}
        </text>
        <!-- legend -->
        <line
          :x1="innerWidth - 100"
          :y1="-32"
          :x2="innerWidth - 80"
          :y2="-32"
          style="stroke:#5B9BD5; stroke-width: 2"
        />
        <text
          :x="innerWidth - 70"
          :y="-30"
          style="font-size: 0.4em;font-family: radnika-medium;"
        >
          {{ y1Key }}
        </text>
        <line
          :x1="innerWidth - 100"
          :y1="-22"
          :x2="innerWidth - 80"
          :y2="-22"
          style="stroke:#f78411; stroke-width: 2"
        />
        <text
          :x="innerWidth - 70"
          :y="-20"
          style="font-size: 0.4em;font-family: radnika-medium;"
        >
          {{ y2Key }}
        </text>
        <line
          :x1="innerWidth - 100"
          :y1="-12"
          :x2="innerWidth - 80"
          :y2="-12"
          style="stroke:#92D050; stroke-width: 2"
        />
        <text
          :x="innerWidth - 70"
          :y="-10"
          style="font-size: 0.4em;font-family: radnika-medium;"
        >
          {{ y3Key }}
        </text>

        <g transform="rotate(-90)">
          <text
            :x="-innerHeight / 2"
            :y="-margin.left + 7"
            style="font-size: 0.5em; text-anchor: middle;stroke-width: 0em;stroke: #1B1B1B;font-family: radnika-medium;"
          >
            €/MWh
          </text>
        </g>
        <g>
          <path
            :d="path1"
            fill="none"
            stroke="#5B9BD5"
            stroke-width="0.1em"
          ></path>
          <path
            :d="path2"
            fill="none"
            stroke="#f78411"
            stroke-width="0.1em"
          ></path>
          <path
            :d="path3"
            fill="none"
            stroke="#92D050"
            stroke-width="0.1em"
          ></path>
        </g>
        <g v-for="(item, i) in chartData" :key="i">
          <text
            style="font-size: 0.45em; stroke-width: 0.1em; stroke: #5B9BD5;"
            :x="item.x"
            :y="item.y1 - 15"
          >
            {{ item.y1Value }}
          </text>
          <text
            style="text-anchor: middle; font-size: 0.45em; stroke-width: 0.1em; stroke: #f78411;"
            :x="item.x"
            :y="item.y2 - 8"
          >
            {{ item.y2Value }}
          </text>
          <text
            style="text-anchor: middle; font-size: 0.45em; stroke-width: 0.1em; stroke: #92D050;"
            :x="item.x"
            :y="item.y3 + 20"
          >
            {{ item.y3Value }}
          </text>
        </g>
      </g>
      <g :transform="`translate(0,${this.svgHeight - 22})`">
        <text
          x="8"
          y="-15"
          style="font-size: 0.5em; fill: #1B1B1B; font-style: italic;font-family: radnika-medium;"
        >
          Fonte:
        </text>
        <text
          x="40"
          y="-15"
          style="font-size: 0.5em; fill: #1B1B1B;font-family: radnika-medium;font-style: italic;"
        >
          Elaborazioni Pillole di Energia su dati pubblicati dal Gestore dei
          Mercati Energetici
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

import map from "lodash/map";
import locale from "@/data/locale.json";

export default {
  name: "MensilePUN",
  props: {
    title: String,
    xKey: String,
    y1Key: String,
    y2Key: String,
    y3Key: String,
    data: Array,
  },
  data: () => ({
    locale,
    svgWidth: 355,
    margin: {
      top: 100,
      right: 23,
      bottom: 100,
      left: 35,
    },
    dataTitle: {
      x: { low: 15, high: 15 },
      y: { low: 50, high: 50 },
      fontsize: { low: 0.6, high: 1 },
    },
    dataAxis: { fontsize: { low: 0.3, high: 0.5 } },
  }),
  computed: {
    svgHeight() {
      return this.svgWidth / this.constant;
    },
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
        .domain([15, this.dataMax])
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
    lineGenerator2() {
      return line()
        .x((d) => this.xScale(this.parseTime(d[this.xKey])))
        .y((d) => this.yScale(+d[this.y2Key]));
    },
    lineGenerator3() {
      return line()
        .x((d) => this.xScale(this.parseTime(d[this.xKey])))
        .y((d) => this.yScale(+d[this.y3Key]));
    },
    path1() {
      return this.lineGenerator1(this.data);
    },
    path2() {
      return this.lineGenerator2(this.data);
    },
    path3() {
      return this.lineGenerator3(this.data);
    },
    parseTime() {
      return timeParse("%Y, %m");
    },
    chartData() {
      return map(this.data, (d) => {
        return {
          x: this.xScale(this.parseTime(d[this.xKey])),
          y1: this.yScale(+d[this.y1Key]),
          y2: this.yScale(+d[this.y2Key]),
          y3: this.yScale(+d[this.y3Key]),
          y1Value: +d[this.y1Key],
          y2Value: +d[this.y2Key],
          y3Value: +d[this.y3Key],
        };
      });
    },
  },
  //watch: {
  //  svgWidth: function() {
  //    this.svgWidth= this.$refs.containerId.offsetWidth;
  //  }
  //},

  methods: {
    getWindowWidth(event) {
      this.svgWidth = this.$refs.containerId.offsetWidth;
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
  created() {
    timeFormatDefaultLocale(this.locale);
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

// window.addEventListener("resize", () => {
//      setTimeout(() => {
//        this.svgWidth = this.$refs.containerId.offsetWidth;

//      }, 1000);
//    })
</script>

<style scoped lang="scss">
.svg-container {
  text-align: center;
}
::v-deep .tick line {
  stroke: #f5f3f2;
  stroke-dasharray: 4 1;
}
</style>

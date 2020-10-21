<template>
  <div ref="containerId" class="svg-container" :key="componentKey">
    <svg :width="svgWidth" :height="svgHeight">
      <text
        x="22"
        y="40"
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
          :style="`font-size: ${textAxis}em;font-family: radnika-medium;`"
          :transform="`translate(0,${innerHeight})`"
        ></g>
        <text
          :x="innerWidth / 2"
          :y="innerHeight + 40"
          style="font-size: 0.5em; text-anchor: middle;font-family: radnika-medium;"
        >
          {{ xKey }}
        </text>
        <g transform="rotate(-90)">
          <text
            :x="-innerHeight / 2"
            :y="-margin.left + 6"
            style="font-size: 0.5em; text-anchor: middle;font-family: radnika-medium;"
          >
            {{ yKey }}
          </text>
        </g>
        <g v-for="(item, i) in chartData" :key="i">
          <text
            class="yValueCumulato"
            :style="
              `text-anchor: middle; font-size: ${textYval}em; fill: #f78411;font-family: radnika-medium;`
            "
            :x="item.x + item.bandWidth / 2"
            :y="item.y - 10"
          >
            {{}}
          </text>
          <rect
            class="bar-positive-cumulato"
            :x="item.x"
            :y="yScale(0)"
            :width="item.bandWidth"
            :height="0"
          ></rect>
        </g>
      </g>
      <g :transform="`translate(0,${this.svgHeight - 22})`">
        <text
          x="35"
          y="-5"
          style="font-size: 0.5em; fill: #1B1B1B; font-style: italic;font-family: radnika-medium;"
        >
          Fonte:
        </text>
        <text
          x="75"
          y="-5"
          style="font-size: 0.5em; fill: #1B1B1B;font-style: italic;font-family: radnika-medium;"
        >
          UNRAE
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { max, extent } from "d3-array";
import { scaleLinear, scaleTime, scaleBand } from "d3-scale";
import { line } from "d3-shape";
import { axisLeft, axisBottom } from "d3-axis";
import { select, selectAll } from "d3-selection";
import { timeParse, timeFormatDefaultLocale } from "d3-time-format";
import { transition } from "d3-transition";

import map from "lodash/map";

export default {
  props: {
    title: String,
    xKey: String,
    yKey: String,
    data: Array,
  },
  data() {
    return {
      windowWidth: 0,
      componentKey: 0,
      svgWidth: 355,
      dataset: this.data,
      margin: {
        top: 100,
        right: -5,
        bottom: 100,
        left: 40,
      },
      dataTitle: {
        x: { low: 15, high: 15 },
        y: { low: 50, high: 50 },
        fontsize: { low: 0.6, high: 1 },
      },
      dataAxis: { fontsize: { low: 0.3, high: 0.5 } },
      dataYval: { fontsize: { low: 0.5, high: 0.8 } },
    };
  },

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
    textYval() {
      if (this.svgWidth < 600) {
        return this.dataYval.fontsize.low;
      } else {
        return this.dataYval.fontsize.high;
      }
    },
    innerWidth() {
      return this.svgWidth - this.margin.left - this.margin.right;
    },
    innerHeight() {
      return this.svgHeight - this.margin.top - this.margin.bottom;
    },
    dataMax() {
      return max(this.dataset, (d) => +d[this.yKey]);
    },
    yScale() {
      return scaleLinear()
        .domain([0, this.dataMax])
        .range([this.innerHeight, 0]);
    },
    xScale() {
      return scaleBand()
        .domain(this.dataset.map((d) => d[this.xKey]))
        .range([0, this.innerWidth])
        .padding(0.1);
    },
    chartData() {
      return map(this.dataset, (d) => {
        return {
          x: this.xScale(d[this.xKey]),
          y: this.yScale(+d[this.yKey]),
          bandWidth: this.xScale.bandwidth(),
          bandHeight: this.innerHeight - this.yScale(+d[this.yKey]),
          yValue: +d[this.yKey],
        };
      });
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    getWindowWidth(event) {
      if (window.innerWidth != this.windowWidth) {
        this.windowWidth = window.innerWidth;
        this.svgWidth = this.$refs.containerId.offsetWidth;
        this.forceRerender();
      }
    },
    checkResize() {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", this.getWindowWidth);
    },
    animateLoad() {
      selectAll(".bar-positive-cumulato")
        .data(this.dataset)
        .transition()
        .delay((d, i) => {
          return i * 150;
        })
        .duration(1000)
        .attr("y", (d) => {
          return this.yScale(+d[this.yKey]);
        })

        .attr("height", (d) => {
          return this.innerHeight - this.yScale(+d[this.yKey]);
        });
    },
    animateText() {
      selectAll(".yValueCumulato")
        .data(this.dataset)
        .transition()
        .text((d) => +d[this.yKey])
        .delay((d, i) => {
          return 2500;
        });
    },
  },

  directives: {
    yAxis(el, binding) {
      select(el).call(
        axisLeft(binding.value.yScale).tickSize(binding.value.innerWidth)
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
  updated() {
    this.animateLoad();
    this.animateText();
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("load", this.checkResize);
      // window.addEventListener("resize", this.getWindowWidth);
    });
    this.getWindowWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>

<style scoped lang="scss">
.svg-container {
  text-align: center;
}

.bar-positive-cumulato {
  fill: #f78411;
  opacity: 0.8;
}

::v-deep .tick line {
  stroke: #f5f3f2;
  stroke-dasharray: 4 1;
}
</style>

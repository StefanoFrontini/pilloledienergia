<template>
  <div ref="RepowerId">
    <div class="img">
      <g-image src="~/assets/grigio.png" alt="" />
      <iframe
        title="Spot della campagna pubblicitaria Repower 2019"
        width="100%"
        :height="`${heightYouTube}`"
        data-src="https://www.youtube.com/embed/v9YEwA_2800"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/v9YEwA_2800?autoplay=1><img src=https://img.youtube.com/vi/v9YEwA_2800/hqdefault.jpg alt='Conguagli elevati nella bolletta della luce? Ecco come eliminarli.'><span>▶</span></a>"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      YouTube: { height: { low: 180, high: 590 } },
      deviceWidth: 180,
    };
  },
  methods: {
    getWindowWidth(event) {
      this.deviceWidth = this.$refs.RepowerId.offsetWidth;
    },
  },
  computed: {
    heightYouTube() {
      if (this.deviceWidth < 600) {
        return this.YouTube.height.low;
      } else {
        return this.YouTube.height.high;
      }
    },
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
    });
    this.getWindowWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  //height: 200px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;

  iframe {
    width: 90%;
    height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 13%;
    border: 10px solid white;
  }
  p {
    position: absolute;
    top: 80%;
    width: 75%;
  }
}
.g-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 3em;
  position: relative;
}

/* .img:after {
  position: absolute;
  z-index: 10;
  top: 0%;
  right: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, #ededed, transparent);
  content: "";
}
 */
</style>

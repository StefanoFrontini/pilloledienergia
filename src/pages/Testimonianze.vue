<template>
  <Layout>
    <div class="page-testimonianze-wrapper">
      <div class="page-testimonianze">
        <h1>Testimonianze</h1>
        <h2>
          Ristorante <a href="https://lacolubrina.it/">La Colubrina</a> di
          Milano
        </h2>
        <div class="img">
          <g-image src="~/assets/grigio.png" alt="fondo grigio" />

          <iframe
            title="Video testimonianza Ristorante La Colubrina"
            width="100%"
            height="315"
            data-src="https://www.youtube.com/embed/wvBmXA-YFuc?enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/wvBmXA-YFuc?autoplay=1><img src=https://img.youtube.com/vi/wvBmXA-YFuc/hqdefault.jpg alt='Video testimonianza Ristorante La Colubrina'><span>▶</span></a>"
          ></iframe>
        </div>


          <CheckUp />


        <SocialSharing
          title="Testimonianze"
          description="Testimonianze"
          url="testimonianze"
        />
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

<script>
import SocialSharing from "~/components/SocialSharing.vue";
import CheckUp from "~/components/CheckUpComponent.vue";

export default {
  components: {
    SocialSharing,
    CheckUp,
  },
  metaInfo() {
    return {
      title: "Testimonianze | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Testimonianze | Pillole di Energia",
        },
        {
          property: "og:description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/testimonianze/`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Testimonianze | Pillole di Energia",
        },
        {
          name: "twitter:description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/testimonianze/`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  data: () => ({}),
  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
  },
};
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  //height: 200px;

  cursor: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;

  iframe {
    width: 90%;
    height: 75%;
    margin: 0 auto;
    position: absolute;
    top: 10%;
    border: 10px solid white;
  }
  .g-image {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
}

.page-testimonianze-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.page-testimonianze {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 900px;
}

.call {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
}

.call p {
  width: 80%;
  border-left: 0.3em solid $primaryColor;
  padding: 0 15px;
  font-style: italic;
  font-family: "radnika-medium";
}
</style>

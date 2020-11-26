<template>
  <Layout>
    <div class="page-container">
      <div class="page-contatti">
        <h1>Contatti</h1>
        <Contact />
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
import Contact from "../components/Contact.vue";

export default {
  components: {
    Contact,
  },
  metaInfo() {
    return {
      title: "Contatti | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Contattami per ricevere un check-up energetico gratuito che può farti risparmiare fino al 30% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Contattami per ricevere un check-up energetico gratuito che può farti risparmiare fino al 30% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          property: "og:description",
          content:
            "Contattami per ricevere un check-up energetico gratuito che può farti risparmiare fino al 30% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/contatti`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Contattami per ricevere un check-up energetico gratuito che può farti risparmiare fino al 30% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          name: "twitter:description",
          content:
            "Contattami per ricevere un check-up energetico gratuito che può farti risparmiare fino al 30% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/contatti`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },

  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
}

.page-contatti {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

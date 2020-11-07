<template>
  <Layout>
    <div class="page-container">
      <div class="page-contatti">
        <h1>
          Quante stazioni di ricarica ci sono vicino al mio ristorante/hotel?
        </h1>
        <iframe
          src="https://map.openchargemap.io/?mode=embedded"
          allow="geolocation"
          frameborder="0"
          width="100%"
          height="500px"
        ></iframe>
        <div class="call">
          <p>
            <g-link to="/contatti/">Contattami</g-link> per avere a fianco del
            tuo ristorante/hotel una persona che ti aiuta a cogliere tutte le
            opportunità della mobilità elettrica.
          </p>
        </div>
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
export default {
  components: {},
  metaInfo() {
    return {
      title: "Stazioni di ricarica per veicoli elettrici | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Stazioni di ricarica per veicoli elettrici",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Stazioni di ricarica per veicoli elettrici",
        },
        {
          property: "og:description",
          content: "Stazioni di ricarica per veicoli elettrici",
        },
        {
          property: "og:url",
          content: `${
            this.$static.metadata.siteUrl
          }/stazioni-ricarica-veicoli-elettrici`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Stazioni di ricarica per veicoli elettrici",
        },
        {
          name: "twitter:description",
          content: "Stazioni di ricarica per veicoli elettrici",
        },
        {
          name: "twitter:site",
          content: `${
            this.$static.metadata.siteUrl
          }/stazioni-ricarica-veicoli-elettrici`,
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

<style scoped lang="scss">
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

.call {
  display: flex;
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

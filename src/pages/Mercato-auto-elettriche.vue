<template>
  <Layout>
    <div class="page-auto-elettriche">
      <div class="title-auto-elettriche">
        <h1>Andamento mercato italiano auto elettriche</h1>
      </div>
      <div class="chart-container">
        <div class="chart">
          <AutoElettriche
            title="Immatricolazioni auto elettriche per marca e modello: luglio 2021"
            xKey="Modello"
            yKey="Immatricolazioni"
            :data="AutoElettricheData"
          />
          <CumulatoAutoElettriche
            title="Immatricolazioni auto elettriche per marca e modello: gennaio - luglio 2021"
            xKey="Modello"
            yKey="Immatricolazioni"
            :data="CumulatoAutoElettricheData"
          />
          <MensileImmatricolazioni
            title="Andamento mensile immatricolazioni auto elettriche"
            xKey="Mese"
            y1Key="Immatricolazioni"
            :data="MensileImmatricolazioniData"
          />
          <p>I grafici illustrano rispettivamente:</p>
          <ul>
            <li>
              Il numero di immatricolazioni di auto elettriche in Italia a
              luglio 2021 distinte per marca e modello;
            </li>
            <li>
              Il numero di immatricolazioni in Italia nel periodo gennaio -
              luglio 2021 distinte per marca e modello;
            </li>
            <li>
              L’andamento mensile delle immatricolazioni di auto elettriche in
              Italia;
            </li>
            <li>
              Fonte: Unione Nazionale Rappresentanti Autoveicoli Esteri (<a
                href="http://www.unrae.it/"
                >UNRAE</a
              >).
            </li>
          </ul>

          <SocialSharing
            title="Andamento mercato auto elettriche"
            description="Andamento mercato auto elettriche in Italia"
            url="mobilita-elettrica"
          />
        </div>
      </div>

      <div class="page-contatti">
        <h2>
          Quante stazioni di ricarica ci sono vicino al tuo ristorante/hotel?
        </h2>
        <iframe
          title="strumento per la ricerca delle infrstrutture di ricarica per auto elettriche"
          src="https://map.openchargemap.io/?mode=embedded"
          allow="geolocation"
          frameborder="0"
          width="100%"
          height="500px"
        ></iframe>
        <CheckUp />
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
import AutoElettriche from "../components/AutoElettriche.vue";
import CumulatoAutoElettriche from "../components/CumulatoAutoElettriche.vue";
import AutoElettricheData from "@/data/mensile-auto-elettriche.json";
import CumulatoAutoElettricheData from "@/data/cumulato-auto-elettriche.json";
import MensileImmatricolazioniData from "@/data/mensileImmatricolazioni.json";
import MensileImmatricolazioni from "../components/MensiliImmatricolazioni.vue";

import SocialSharing from "~/components/SocialSharing.vue";
import CheckUp from "~/components/CheckUpComponentP.vue";

export default {
  components: {
    AutoElettriche,
    MensileImmatricolazioni,
    CheckUp,
    SocialSharing,
    CumulatoAutoElettriche,
  },
  metaInfo() {
    return {
      title: "Mobilità elettrica | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Andamento mercato auto elettriche in Italia",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Mobilità elettrica | Pillole di Energia",
        },
        {
          property: "og:description",
          content: "Andamento mercato auto elettriche in Italia",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/mercato`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Mobilità elettrica | Pillole di Energia",
        },
        {
          name: "twitter:description",
          content: "Andamento mercato auto elettriche in Italia",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/mercato-auto-elettriche/`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  data: () => ({
    AutoElettricheData,
    MensileImmatricolazioniData,
    CumulatoAutoElettricheData,
  }),
  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  border-left: 0.2em solid $primaryColor;
  border-right: 0.2em solid $primaryColor;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.chart-container {
  display: flex;
  justify-content: center;
}
.chart {
  width: 100%;
  max-width: 900px;
}

.title-auto-elettriche {
  display: flex;
  justify-content: center;
}

.title-mercato h1 {
  font-size: 1.5em;
}

.page-auto-elettriche {
  width: 95%;
  margin: 0 auto;
}

.call {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
  margin: 0 auto;
  max-width: 1200px;
}

.call p {
  width: 80%;
  border-left: 0.3em solid $primaryColor;
  padding: 0 15px;
  font-style: italic;
  font-family: "radnika-medium", sans-serif;
}

.page-contatti {
  text-align: center;
}
</style>

<template>
  <Layout>
    <div class="page-mercato">
      <div class="title-mercato">
        <h1>Andamento dei mercati energetici italiani</h1>
      </div>
      <div class="chart-container">
        <div class="chart">
          <h2>Energia elettrica</h2>
          <MensilePUN
            title="Andamento mensile del prezzo all'ingrosso dell'energia elettrica (PUN)"
            xKey="Mese"
            y1Key="Fascia alta"
            y2Key="Media 24 ore"
            y3Key="Fascia bassa"
            :data="MensilePUNData"
          />
          <AnnualePUN
            title="Andamento annuale del prezzo all'ingrosso dell'energia elettrica (PUN)"
            xKey="Anno"
            y1Key="Fascia alta"
            y2Key="Media 24 ore"
            y3Key="Fascia bassa"
            :data="AnnualePUNData"
          />
          <p>
            I grafici illustrano l'andamento mensile per fasce orarie da aprile
            2019 ad oggi del prezzo all'ingrosso dell'energia elettrica (PUN) e
            l'andamento annuale del PUN dal 2004 (anno di fondazione della Borsa
            elettrica italiana) ad oggi. <br />
            I dati sono presi dal sito del
            <a href="http://www.mercatoelettrico.org/It/default.aspx"
              >Gestore dei Mercati Energetici</a
            >
            e fanno riferimento al Mercato del Giorno Prima (MGP).
          </p>
          <ul>
            <li>
              Fascia alta: sono le ore comprese tra le 9:00 e le 20:00 dei
              giorni lavorativi;
            </li>
            <li>
              Fascia bassa: tutte le ore dei giorni festivi e le ore comprese
              tra le 21:00 e le 8:00 dei giorni lavorativi;
            </li>
            <li>1 MWh = 1000 kWh;</li>
            <li>PUN = Prezzo Unico Nazionale.</li>
          </ul>

          <h2>Gas naturale</h2>
          <MensileGas
            title="Andamento mensile del prezzo all'ingrosso del gas naturale"
            xKey="Mese"
            y1Key="Media"
            :data="MensileGASData"
          />
          <p>
            Il grafico illustra l'andamento mensile del prezzo all'ingrosso del
            gas naturale da aprile 2019 ad oggi.
          </p>
          <ul>
            <li>
              I prezzi, pubblicati dal
              <a href="http://www.mercatoelettrico.org/It/default.aspx"
                >Gestore dei Mercati Energetici</a
              >, fanno riferimento al Mercato del Giorno Prima (MGP-GAS). I
              prezzi sono pubblicati dal GME in €/MWh e sono stati trasformati
              in €/Smc moltiplicando per un coefficiente pari a 0,0107;
            </li>
            <li>
              Il potere calorifico superiore (PCS) è assunto pari a 0,03852
              GJ/Smc.
            </li>
          </ul>

          <CheckUp />

          <SocialSharing
            title="Andamento dei mercati energetici italiani"
            description="Andamento storico dei prezzi dell'energia elettrica e del gas naturale all'ingrosso in Italia"
            url="mercato"
          />
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
import AnnualePUN from "../components/AnnualePUN.vue";
import MensilePUN from "../components/MensilePUN.vue";
import MensileGas from "../components/MensileGas.vue";

import MensilePUNData from "@/data/mensilePUN.json";
import AnnualePUNData from "@/data/annualePUN.json";
import MensileGASData from "@/data/mensileGAS.json";

import SocialSharing from "~/components/SocialSharing.vue";
import CheckUp from "~/components/CheckUpComponentP.vue";

export default {
  components: {
    AnnualePUN,
    MensilePUN,
    MensileGas,
    SocialSharing,
    CheckUp,
  },
  metaInfo() {
    return {
      title: "Andamento mercati energetici italiani | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Andamento storico dei prezzi dell'energia elettrica e del gas naturale all'ingrosso in Italia",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Andamento mercati energetici italiani | Pillole di Energia",
        },
        {
          property: "og:description",
          content:
            "Andamento storico dei prezzi dell'energia elettrica e del gas naturale all'ingrosso in Italia",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/mercato/`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Andamento mercati energetici italiani | Pillole di Energia",
        },
        {
          name: "twitter:description",
          content:
            "Andamento storico dei prezzi dell'energia elettrica e del gas naturale all'ingrosso in Italia",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/mercato/`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  data: () => ({
    AnnualePUNData,
    MensilePUNData,
    MensileGASData,
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.chart {
  width: 100%;
  max-width: 800px;

  p {
    padding: 1em;
  }
}

.title-mercato {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.page-mercato {
  width: 100%;
  margin: 0 auto;
}
</style>

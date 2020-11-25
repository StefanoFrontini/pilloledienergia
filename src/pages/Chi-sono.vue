<template>
  <Layout>
    <div class="chi-sono-wrapper">
      <div class="chi-sono">
        <div class="section">
          <h2 class="title">Chi sono</h2>
          <p>
            Guarda questa intervista per capire come un consulente energetico
            specializzato può aiutare il tuo ristorante/hotel.
          </p>
          <div class="intervista">
            <iframe
              title="La mia attività raccontata a Live Social Radio"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6w-0ySPz3ks"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/6w-0ySPz3ks?autoplay=1><img src=https://img.youtube.com/vi/6w-0ySPz3ks/hqdefault.jpg alt='La mia attività raccontata a Live Social Radio'><span>▶</span></a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <!-- <p>
            Dopo il Master in Economics dell'Università Bocconi di Milano, nel
            2004 ho lavorato per
            <a href="https://www.ref-e.com/it"
              >REF-E, ricerca e consulenza per i mercati energetici</a
            >. Oltre alla stesura di articoli per la newsletter
            dell'Osservatorio Energia - mensile di analisi delle trasformazioni
            del settore energetico in Italia e Europa - e per il Previsivo -
            quadrimestrale di previsione dei prezzi della Borsa elettrica
            italiana - ho svolto consulenze ad operatori del sistema elettrico
            riguardanti l'evoluzione dei prezzi dell'energia elettrica,
            dell'offerta termoelettrica, dei prezzi dei combustibili, dei
            Certificati Verdi (per l'analisi dei quali ho sviluppato un modello
            di previsione di lungo periodo) e l'impatto del sistema europeo dei
            permessi di CO2 (emission trading) sui prezzi all'ingrosso
            dell'energia elettrica. Insieme a M. Leonardi ho pubblicato sul
            Quaderno di ricerca n. 23 dell'aprile 2006 di REF-E un articolo dal
            titolo: "L'impatto dell'emission trading sul sistema elettrico
            italiano".
          </p>

          <p>
            Nel 2007 ho iniziato a lavorare per
            <a href="https://www.repower.com/it/">Repower</a> come Responsabile
            Affari Regolatori. Analizzavo i provvedimenti normativi riguardanti
            il settore energetico al fine di individuare gli impatti sul
            business della società. Inoltre, come esperto di normativa di
            settore, davo supporto alla funzione Legale per i ricorsi della
            società.
          </p>
          <div class="call">
            <p>
              Ora aiuto le strutture ricettive - in particolare ristoranti e
              hotel - ad acquistare energia elettrica e gas sui mercati
              energetici, ad assisterle in maniera continua durante il periodo
              di fornitura e ad essere più sostenibili.
            </p>
          </div> -->
        </div>
        <!-- <div class="section">
          <h2 class="title">BNI</h2>
          <h4>Amo lavorare in squadra.</h4>
          <div class="bni">
            <div class="img-container">
              <g-image
                src="~/assets/logo-bni.png"
                style="object-fit: cover; width:100%; height: 100%"
                alt="logo bni"
              ></g-image>
            </div>
            <div class="img-container">
              <g-image
                src="~/assets/logo-bni-capitolo-buenos-aires.jpg"
                style="object-fit: cover; width:100%; height: 100%"
                alt="logo bni capitolo buenos aires"
              ></g-image>
            </div>
          </div>
          <p>
            In <a href="http://bni-milanosudest.it/it/index">BNI</a> ho trovato
            una squadra di professionisti e imprenditori che mi aiutano a
            migliorare ogni giorno e che mi danno supporto per aiutare i miei
            Clienti sempre più.
          </p>
        </div> -->
        <!-- <div class="section">
          <h2 class="title">My Guitar Songs</h2>
          <h4>Amo ascoltare musica.</h4>
          <div class="myguitarsongs">
            <div class="img-container">
              <g-image
                src="~/assets/logo-myguitarsongs.png"
                style="object-fit: cover; width:100%; height: 100%"
                alt="logo my guitar songs"
              ></g-image>
            </div>
          </div>
          <p>
            Mi piace anche suonare la chitarra e nel 2016 ho fondato
            <a href="https://myguitarsongs.com/">My Guitar Songs</a>: una
            community online dove è possibile pubblicare testi e accordi delle
            proprie canzoni.
          </p>
        </div> -->
        <div class="section">
          <h2 class="title">Grottammare</h2>
          <p>
            Quando ho un po’ di tempo torno a
            <a href="http://www.comune.grottammare.ap.it/">Grottammare</a>
            nelle Marche: tra mare, sole e colline.
          </p>
          <div class="grottammare">
            <g-image
              src="~/assets/grottammare.jpg"
              style="object-fit: cover; width:100%; height: 100%"
              alt="grottammare"
            ></g-image>
          </div>
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
      title: "Chi sono | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Cos’è un consulente energetico specializzato?",
        },
        {
          property: "og:description",
          content: "Cos’è un consulente energetico specializzato?",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/chi-sono`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Cos’è un consulente energetico specializzato?",
        },
        {
          name: "twitter:description",
          content: "Cos’è un consulente energetico specializzato?",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/chi-sono`,
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

.section {
  position: relative;
}

.foto-wrapper {
  display: flex;
  justify-content: center;
}

.foto {
  position: relative;
  z-index: -1;
  display: inline-block;
  margin-top: 7em;
}

.foto::before {
  content: " ";
  position: absolute;
  left: -60px;
  top: -100px;
  height: 180px;
  width: 140px;
  background-color: $primaryColor;
  z-index: -2;
}

.title::before {
  content: " ";
  position: absolute;
  left: -18px;
  top: 3px;
  height: 35px;
  width: 8px;
  background-color: $primaryColor;
  z-index: -3;
}

.title-h1::before {
  content: " ";
  position: absolute;
  left: -18px;
  top: 15px;
  height: 35px;
  width: 8px;
  background-color: $primaryColor;
  z-index: -3;
}

.intervista {
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  margin-top: 2em;
}

.img-container {
  width: 250px;
  height: 200px;
}

.bni {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.myguitarsongs {
  display: flex;
  justify-content: center;
}

.chi-sono-wrapper {
  display: flex;
  justify-content: center;
}

.chi-sono {
  width: 88%;
}

@media (min-width: 750px) {
  .chi-sono {
    width: 80%;
  }
}
@media (min-width: 1000px) {
  .chi-sono {
    width: 70%;
  }
  .title-h1::before {
    top: 12px;
  }
}

@media (min-width: 1200px) {
  .chi-sono {
    width: 60%;
  }
}
</style>

<template>
  <Layout>
    <div class="question">
      <transition appear name="fade" mode="out-in">
        <div
          class="question-text-wrapper"
          :style="
            `background-image: url(${images[first]}); background-position: ${
              imagesPosition[first]
            }`
          "
          :key="images[first]"
        ></div>
      </transition>
      <transition name="slide">
        <div v-if="firstImage" class="question-text" :key="images[first]">
          <p class="up">
            In un ristorante<br />
            la scelta<br />
            delle materie prime<br />conta.
          </p>
          <p class="down">
            <strong>Come quella dell’energia.</strong>
          </p>
          <p class="lavoro">
            <span class="green"><strong> Stefano Frontini </strong></span><br />

            <strong>consulente energetico per ristoranti e hotel</strong>
          </p>
        </div>

        <div v-else class="question-text" :key="images[first]">
          <p class="up">
            In un hotel<br />
            l’offerta<br />
            del servizio<br />conta.
          </p>
          <p class="down">
            <strong>Come quella dell’energia.</strong>
          </p>
          <p class="lavoro">
            <span class="green"><strong> Stefano Frontini </strong></span><br />

            <strong>consulente energetico per ristoranti e hotel</strong>
          </p>
        </div>
      </transition>
    </div>
    <div class="desktop">
      <div class="pericoli">
        <h1>
          Quali sono i <span><strong>pericoli</strong></span
          >, i <span><strong>problemi</strong></span> e le
          <span><strong>opportunità</strong></span
          ><br />

          legate alle forniture di <strong>energia elettrica</strong> e
          <strong>gas</strong> per il tuo ristorante/hotel?
        </h1>

        <main>
          <div class="scopri">
            <i
              ><strong>Scoprilo in queste </strong>
              <span><strong>pillole di energia</strong></span></i
            >
          </div>

          <Pillole2 />
        </main>
      </div>
      <section class="section">
        <div class="consulente-wrapper">
          <div class="consulente">
            <p>
              <strong>Chi è il consulente energetico?</strong>
            </p>
          </div>
          <div class="benefici">
            <div>
              <p><strong>Efficienza Energetica</strong></p>
              <p>
                Risparmia fino al 25% attraverso nuove tecnologie che ti
                permettono di ridurre i consumi di energia elettrica e gas.
                <!-- Tramite la consulenza e l’assistenza
                <span class="grassetto">gratuita</span><br />
                che solo io ti posso dare.<br />
                <a href="/report-periodico.pdf" download
                  >Scarica il report periodico.</a
                > -->
              </p>
            </div>
            <div>
              <p><strong>Luce e gas</strong></p>
              <ul>
                <li>
                  Sono io il tuo referente per qualsiasi problema o esigenza.
                </li>
                <li>
                  Condizioni contrattuali trasparenti e a
                  <g-link to="/mercato/">mercato</g-link>. Nel tempo.
                </li>
                <li>
                  Newsletter mensile con aggiornamenti dai mercati e dalla
                  normativa di settore.
                </li>
                <li>
                  <a
                    href="/certificato-utility-manager-stefano-frontini.pdf"
                    download
                  >
                    Utility Manager certificato UNI 11782:2020</a
                  >.
                </li>

                <li>
                  <a target="_blank" href="https://energy-report.netlify.app/"
                    >Report periodici sui consumi</a
                  >. Personalizzabili.
                </li>
                <!-- Sono io il tuo referente per qualsiasi problema<br />
                o esigenza. -->
              </ul>
            </div>
            <div>
              <p><strong>Mobilità elettrica</strong></p>
              <ul>
                <li>
                  Fornisci un servizio di ricarica per le auto elettriche.
                </li>
                <li>
                  Cattura l’attenzione di chi guida l’auto elettrica attraverso
                  servizi di visibilità internazionale.
                </li>
              </ul>
            </div>
          </div>
          <div class="pulsante">
            <g-link to="/chi-sono/"
              ><g-image
                src="~/assets/pulsante-lungo.png"
                alt="scopri di più"
                width="300"
              ></g-image
            ></g-link>
          </div>
        </div>
      </section>

      <section class="section">
        <CheckUp />
      </section>

      <section class="section">
        <div class="consulente">
          <p>
            <strong>I’ve got Repower!</strong>
          </p>
          <Repower />
        </div>
      </section>
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
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

import Pillole2 from "~/components/Pillole2.vue";
import CheckUp from "~/components/CheckUpComponentP.vue";
import Repower from "~/components/Repower.vue";

//import ateco from "@/data/ateco.json";

export default {
  components: {
    Pillole2,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    CheckUp,
    Repower,
  },
  data() {
    return {
      firstImage: true,
      images: [
        require("../assets/chef-donna-che-cucina-piatto-vegetariano.jpeg"),
        require("../assets/donna-che-mostra-camera-hotel.jpeg"),
      ],
      imagesPosition: ["center bottom", "top center"],
    };
  },
  metaInfo() {
    return {
      title: `${this.$static.metadata.siteName}`,
      titleTemplate: "%s",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.$static.metadata.siteName}` },
        {
          property: "og:description",
          content: `${this.$static.metadata.siteDescription}`,
        },
        { property: "og:url", content: `${this.$static.metadata.siteUrl}` },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.$static.metadata.siteName}` },
        {
          name: "twitter:description",
          content: `${this.$static.metadata.siteDescription}`,
        },
        { name: "twitter:site", content: `${this.$static.metadata.siteUrl}` },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  methods: {
    changeSlide() {
      this.firstImage = !this.firstImage;
    },
  },

  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
    first() {
      if (this.firstImage) {
        return 0;
      } else return 1;
    },
  },
  mounted() {
    let intervalTime = 5000;
    let slideInterval;
    slideInterval = setInterval(this.changeSlide, intervalTime);
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active {
  -webkit-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.fade-leave-active {
  -webkit-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  -webkit-transition: opacity 1.5s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
  transition: opacity 1.5s ease-in-out, -webkit-transform 0.4s ease-in-out 0.3s;
  -o-transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
}

.slide-leave-active {
  -webkit-transition: opacity 0.6s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
  transition: opacity 0.6s ease-in-out, -webkit-transform 0.4s ease-in-out 0.3s;
  -o-transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  -webkit-transform: translateX(-600px);
  -ms-transform: translateX(-600px);
  transform: translateX(-600px);
}

.lavoro {
  font-size: 0.65em;
  .green {
    color: green;
  }
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #ededed;
  padding-top: 2em;
  .pulsante {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .pulsante a {
    color: white;
    position: relative;
  }
  .pulsante a:after {
    content: "Guarda l’intervista su Radio LiveSocial";
    position: absolute;
    left: 22%;
    top: 25%;
    font-weight: bold;
    width: 80%;
    font-size: 1em;
  }
}

.pericoli h1,
.scopri {
  text-align: center;
  font-size: 1.2em;
  font-weight: normal;
  font-family: serif;
  span {
    color: $primaryColor;
  }
}

.benefici {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  p {
    font-size: 1em;
  }

  p strong {
    font-size: 1.3em;
  }
  padding: 0.5rem;
}

.consulente-wrapper {
  width: 100%;
}

.consulente {
  text-align: center;
  font-weight: bold;

  strong {
    border-left: 0.2em solid $primaryColor;
    border-right: 0.2em solid $primaryColor;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background: #ededed;
    font-size: 1.3em;
  }
}

.desktop {
  max-width: 1200px;
  margin: 0 auto;
}

.question-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-size: cover;
  height: 70vh;
  position: relative;
  min-height: 250px;
  background-position: center bottom;
}

.question-text {
  font-size: 1.2em;
  color: black;
  position: absolute;
  padding: 1em;
  text-align: center;
  left: 0;
  top: 0;
  .up {
    margin-bottom: -0.5em;
  }
  .down {
    margin-bottom: 0.5em;
  }
}

a.button {
  background: $primaryColor;
  padding: 0.4em;
  text-align: center;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
  display: inline-block;
}

.button:hover {
  background-color: #ffad3b;
}

.question {
  width: 100%;
  position: relative;
  display: inline-block;
}

@media (min-width: 370px) {
  .benefici {
    p strong {
      font-size: 1.5em;
    }
  }

  .consulente {
    strong {
      font-size: 1.5em;
    }
  }
}

@media (min-width: 550px) {
  .benefici {
    p strong {
      font-size: 2em;
    }
  }

  .consulente {
    strong {
      font-size: 2em;
    }
  }
  .question {
    min-height: 350px;
    background-position: center center;
  }
  .question-text-wrapper {
    min-height: 350px;
  }

  .desktop {
    margin-top: 0em;
  }
}

@media (min-width: 750px) {
  .lavoro {
    font-size: 0.6em;
  }
  .question {
    height: 53vh;
    min-height: 400px;
    font-size: 1.5em;
  }
  .question-text-wrapper {
    min-height: 400px;
  }

  .desktop {
    margin-top: 12em;
  }
}

@media (min-width: 800px) {
  .question {
    height: 70vh;
  }
  .desktop {
    margin-top: 0em;
  }
}

@media (min-width: 1000px) {
  .lavoro {
    font-size: 0.5em;
  }
  .question-text-wrapper {
    min-height: 525px;
  }
  .question {
    font-size: 2em;
    min-height: 525px;
  }

  .desktop {
    margin-top: 0em;
  }

  .pericoli h1,
  .scopri {
    font-size: 2em;
  }
  .consulente {
    strong {
      font-size: 2.5em;
    }
  }
}

@media (min-width: 1200px) {
  .section {
    background-color: #ededed;
  }

  .question-text-wrapper {
    min-height: 900px;
  }
  .question {
    min-height: 900px;
  }

  .section {
    .pulsante a:after {
      left: 22%;
    }
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
}
</style>

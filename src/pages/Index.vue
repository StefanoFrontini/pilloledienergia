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
          <p style="margin-bottom: -0.5em;">
            In un ristorante<br />
            la scelta<br />
            delle materie prime<br />conta.
          </p>
          <p style="margin-bottom: 0.5em;">
            <strong>Come quella dell’energia.</strong>
          </p>
          <p style="font-size: 0.5em;">
            <strong style="color: green; "> Stefano Frontini </strong><br />

            <strong>consulente energetico per ristoranti e hotel</strong>
          </p>
        </div>

        <div v-else class="question-text" :key="images[first]">
          <p style="margin-bottom: -0.5em;">
            In un hotel<br />
            l’offerta<br />
            del servizio<br />conta.
          </p>
          <p style="margin-bottom: 0.5em;">
            <strong>Come quella dell’energia.</strong>
          </p>
          <p style="font-size: 0.5em;">
            <strong style="color: green; "> Stefano Frontini </strong><br />

            <strong>consulente energetico per ristoranti e hotel</strong>
          </p>
        </div>
      </transition>
    </div>
    <div class="desktop">
      <div class="pericoli">
        <p>
          Quali sono i <span>pericoli</span>, i <span>problemi</span> e le
          <span>opportunità</span><br />

          legate alle forniture di <strong>energia elettrica</strong> e
          <strong>gas</strong> per il tuo ristorante/hotel?
        </p>

        <p>
          <i
            ><strong>Scoprilo in queste </strong>
            <span>pillole di energia</span></i
          >
        </p>
        <Pillole2 />
      </div>
      <div class="section">
        <div style="width: 100%;">
          <div class="consulente">
            <p>
              <strong>Chi è il consulente energetico?</strong>
            </p>
          </div>
          <div class="benefici">
            <div>
              <p><strong>Risparmia fino al 25%</strong></p>
              <p>
                Tramite la consulenza e l’assistenza gratuita<br />
                che solo io ti posso dare.<br />
                <a href="/report-periodico.pdf" download
                  >Scarica il report periodico.</a
                >
              </p>
            </div>
            <div>
              <p><strong>Dimentica il call center</strong></p>
              <p>
                Sono io il tuo referente per qualsiasi problema<br />
                o esigenza.
              </p>
            </div>
            <div>
              <p><strong>Nessun costo nascosto</strong></p>
              <p>
                Condizioni contrattuali trasparenti e a mercato.<br />Nel tempo.
              </p>
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
      </div>

      <div class="section">
        <Check-up />
      </div>

      <div class="section">
        <div class="consulente">
          <p>
            <strong>I’ve got Repower!</strong>
          </p>
          <Repower />
        </div>
      </div>

      <!-- <div class="section">
        <div class="soluzione">
          <h2 class="titolo titolo-soluzione">
            Soluzione
          </h2>
          <div class="soluzione-text-wrapper">
            <div class="soluzione-text">
              <p>
                I pericoli e problemi
                <span class="grassetto">POSSONO ESSERE EVITATI</span> e le
                opportunità <span class="grassetto">COLTE</span> se sarò io a
                seguire il tuo ristorante/hotel.
              </p>
              <p>
                Il <span class="grassetto">VERO RISPARMIO</span> nella bolletta
                della luce e del gas? L’assistenza continua da parte di un
                <span class="grassetto"
                  >CONSULENTE ENERGETICO SPECIALIZZATO</span
                >
                e una società di fornitura
                <span class="grassetto">SERIA, INNOVATIVA e TRASPARENTE</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="me">
          <h2 class="titolo">
            Perché me
          </h2>
          <div class="box-container">
            <VantaggiConsulenteCard
              v-for="edge in $page.vantaggiConsulente.edges"
              :key="edge.node.id"
              :vantaggi="edge.node"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box-container">
          <InstagramCardStefano />
        </div>
      </div>

      <div class="section">
        <div class="vantaggi-repower">
          <h2 class="titolo">
            Perché Repower
          </h2>
          <div class="box-container">
            <VantaggiRepowerCard
              v-for="edge in $page.vantaggiRepower.edges"
              :key="edge.node.id"
              :vantaggi="edge.node"
            />
          </div>
        </div>
      </div>

      <div class="box-container">
        <InstagramCardRepower />
      </div>

      <div class="section">
        <div class="check-up-energetico">
          <h2 class="titolo titolo-check-up-energetico">
            Check-up energetico gratuito
          </h2>
          <div class="check-up-energetico-text-wrapper">
            <div class="check-up-energetico-text">
              <p>
                Sei sicuro di gestire con il massimo dell’efficienza le
                forniture di energia del tuo ristorante/hotel?
              </p>
              <p>
                <a class="button" href="/check-up-energetico/"
                  >ESEGUI IL CHECK-UP ENERGETICO GRATUITO</a
                >
              </p>
              <p>oppure</p>
              <p><g-link class="button" to="/contatti">CONTATTAMI</g-link></p>
              <p>
                per eseguire un
                <span class="grassetto">check-up gratuito completo</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="check-up-iva">
          <h2 class="titolo titolo-check-up-iva">
            Check-up iva e accise gratuito
          </h2>
          <div class="check-up-iva-text-wrapper">
            <div class="check-up-iva-text">
              <p>
                Sei sicuro che l’IVA e le accise della bolletta della luce e del
                gas del tuo ristorante/hotel siano applicate in maniera
                corretta?
              </p>
              <p>
                <g-link class="button" to="/analisi-iva-accise-agevolate"
                  >ESEGUI IL CHECK-UP GRATUITO IVA E ACCISE</g-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="hero-wrapper">
          <div class="usp">
            <h2 class="titolo title-home">
              <span>Meno problemi</span> e più serenità
            </h2>
            <div>
              <p class="grassetto title-h4">
                Scegli i vantaggi di avere a fianco del tuo ristorante/hotel un
                fornitore di luce e gas in carne e ossa
              </p>
            </div>
          </div>
          <div class="cta">
            <div class="foto">
              <g-image
                src="~/assets/stefano-frontini.jpg"
                width="150"
                height="150"
                fit="cover"
                alt="stefano-frontini"
              ></g-image>
            </div>
            <div class="cta-b">
              <div class="tel">
                <p class="chiama">CHIAMA ORA</p>
                <p>
                  <font-awesome :icon="['fas', 'phone']" /><small>
                    335 103 03 01</small
                  >
                </p>
                <p>
                  <span
                    ><g-link class="button" to="/chi-sono/"
                      >Chi sono</g-link
                    ></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="mercato">
          <h2 class="titolo titolo-mercato">Mercati energetici</h2>
          <div class="mercato-wrapper">
            <div class="mercato-text">
              <p>Qual è l’andamento dei mercati energetici italiani?</p>
              <p>
                Scoprilo nella sezione
                <g-link class="button" to="/mercato">MERCATI ENERGETICI</g-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="mercato-auto-elettriche">
          <h2 class="titolo titolo-mercato-auto-elettriche">
            Mobilità elettrica
          </h2>
          <div class="mercato-auto-elettriche-wrapper">
            <div class="mercato-text">
              <p>
                Qual è l’andamento del mercato italiano delle auto elettriche?
              </p>
              <p>
                Scoprilo nella sezione
                <g-link class="button" to="/mercato-auto-elettriche"
                  >MERCATO AUTO ELETTRICHE</g-link
                >
              </p>
              <p>Quante colonnine ci sono vicino al mio ristorante/hotel?</p>
              <p>
                Scoprilo nella sezione
                <g-link class="button" to="/mercato-auto-elettriche"
                  >STAZIONI DI RICARICA</g-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="blog">
          <h2 class="titolo titolo-blog">Ultimissime dal blog</h2>
          <div class="blog-content-wrapper">
            <div class="blog-content">
              <PostCard
                v-for="edge in $page.posts.edges"
                :key="edge.node.id"
                :post="edge.node"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="episodi">
          <h2 class="titolo titolo-episodi">
            Impara qualcosa di nuovo sull’energia
          </h2>
          <div class="blog-content-wrapper">
            <div class="blog-content">
              <EpisodeCard
                v-for="edge in $page.episodes.edges"
                :key="edge.node.id"
                :episode="edge.node"
              />
            </div>
          </div>
        </div>
      </div>
 -->
      <!-- <div class="section">
        <div class="infografiche">
          <h2 class="titolo titolo-infografiche">L’energia in numeri</h2>
          <div class="blog-content-wrapper">
            <div class="blog-content">
              <InfograficaCard
                v-for="edge in $page.infografiche.edges"
                :key="edge.node.id"
                :infografica="edge.node"
              />
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </Layout>
</template>

<page-query>

query {
  posts: allPost(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}, limit: 1) {
    edges{
      node{
        id
        title
        cover
        alt
        description
        path
        created_at (format: "D MMMM YYYY", locale: "it")
        author
      }
    }

  }
  episodes: allEpisode(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}, limit: 1) {
    edges{
      node{
        id
        title
        description
        cover
        alt
        path
        created_at (format: "D MMMM YYYY", locale: "it")
        author
      }
    }

  }

  infografiche: allInfografica(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}, limit: 3) {
    edges{
      node{
        id
        title
        description
        path
        created_at (format: "D MMMM YYYY", locale: "it")
        author
      }
    }

  }

  vantaggiConsulente: allVantaggiConsulente (order: ASC) {
    edges{
      node{
        id
        pre
        name
        title
        text
      }
    }
	}
  vantaggiRepower: allVantaggiRepower (order: ASC) {
    edges{
      node{
        id
        pre
        name
        title
        text
      }
    }
	}

}





</page-query>

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
/* import PostCard from "~/components/PostCard.vue";
import EpisodeCard from "~/components/EpisodeCard.vue";
import InfograficaCard from "~/components/InfograficaCard.vue";
import InstagramCardStefano from "~/components/InstagramCardStefano.vue";
import InstagramCardRepower from "~/components/InstagramCardRepower.vue";
import VantaggiConsulenteCard from "~/components/VantaggiConsulenteCard.vue";
import VantaggiRepowerCard from "~/components/VantaggiRepowerCard.vue"; */
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

import Pillole2 from "~/components/Pillole2.vue";
import CheckUp from "~/components/CheckUpComponent.vue";
import Repower from "~/components/Repower.vue";

//import ateco from "@/data/ateco.json";

export default {
  components: {
    /* PostCard,
    EpisodeCard,
    InfograficaCard,

    InstagramCardStefano,
    InstagramCardRepower,
    VantaggiConsulenteCard,
    VantaggiRepowerCard, */
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
        require("../assets/hotel.jpeg"),
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
  }

  .pulsante a {
    color: white;
    position: relative;
  }
  .pulsante a:after {
    content: "Guarda l’intervista su Radio LiveSocial";
    position: absolute;
    left: 22%;
    top: 36%;
    font-weight: bold;
    width: 90%;
    font-size: 0.8em;
  }
}

.pericoli p {
  text-align: center;
  font-size: 1.2em;
  span {
    color: $primaryColor;
    font-weight: bold;
  }
}

.benefici {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;

  p strong {
    font-size: 1.3em;
  }
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

.titolo {
  border-left: 0.2em solid $primaryColor;
  padding: 0 10px;
  margin-left: 0.5%;
}

.hero-wrapper {
  text-align: center;
  position: relative;
  margin-bottom: 2em;
  margin-top: 2em;
  width: 90%;
}

/* .check-up-energetico-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: url("~@/assets/lente-ingrandimento.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  opacity: 1;
  min-height: 350px;
} */

/* .check-up-energetico-text-wrapper::before {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  position: absolute;
  opacity: 0.4;
  z-index: -1;
}

.check-up-energetico-text {
  font-size: 1.3em;
  color: white;
  position: relative;
  padding: 1em;
  text-align: center;
  z-index: -1;
} */

/* .check-up-iva-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: url("~@/assets/tasse.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  transition: all 3s ease;
  min-height: 350px;
}

.check-up-iva-text-wrapper::before {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  position: absolute;
  opacity: 0.4;
  z-index: -1;
}

.check-up-iva-text {
  font-size: 1.3em;
  color: white;
  position: relative;
  padding: 1em;
  text-align: center;
  z-index: -1;
} */

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
}

.soluzione-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background: url("~@/assets/uomo-che-taglia-le-verdure.jpg");
  background-size: cover;
  background-position: center bottom;
  position: relative;
  z-index: -2;
  opacity: 1;
  min-height: 250px;
}

.soluzione-text-wrapper::before {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  position: absolute;
  opacity: 0.4;

  z-index: -1;
}

.soluzione-text {
  font-size: 1.3em;
  color: white;
  position: relative;
  padding: 1em;
}
/*
.mercato-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background: url("~@/assets/tabellone-borsa-valori.jpg");
  background-size: cover;
  position: relative;
  z-index: 0;
  opacity: 1;
  min-height: 150px;
}

.mercato-text {
  font-size: 1.3em;
  color: white;
  position: relative;
  padding: 1em;
  z-index: -1;
  text-align: center;
} */

/* .mercato-auto-elettriche-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url("~@/assets/cargo-bike-repower.jpg");
  background-size: cover;
  background-position: center bottom;
  position: relative;
  z-index: 0;
  opacity: 1;
  min-height: 150px;
} */

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

/* .iva {
  display: block;
} */
/*
.mercato-wrapper::before,
.mercato-auto-elettriche-wrapper::before {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  position: absolute;
  opacity: 0.4;
  z-index: -2;
} */

/* .title-home {
  position: relative;
  z-index: -1;
}

.titolo-benefici {
  margin-bottom: 0em;
}

.titolo-blog,
.titolo-episodi,
.titolo-infografiche {
  margin-bottom: 2em;
} */
/*
.usp {
  margin-top: -2em;
}

.foto {
  position: relative;
  display: inline-block;
  margin-top: 7em;
  margin-left: 5em;
  z-index: -1;
}

.foto-mercato {
  margin-bottom: 1em;
}

.foto::before {
  content: " ";
  position: absolute;
  left: -70px;
  top: -100px;
  height: 180px;
  width: 140px;
  background-color: $primaryColor;
  z-index: -2;
} */
/*
.chiama {
  position: relative;

  display: inline-block;
}

.chiama::before {
  content: " ";
  position: absolute;
  left: -17px;
  top: -2px;
  height: 28px;
  width: 6px;
  background-color: $primaryColor;
}

.cta-b {
  margin-top: 2em;
}
.cta-b p {
  font-size: 1em;
} */

/* .carousel,
.check-up-energetico,
.check-up-iva,
.repower,
.newsletter,
.mercato,
.mercato-auto-elettriche,
.blog,
.episodi,
.infografiche, */
.question
/* .soluzione,
.me,
.vantaggi-repower */ {
  width: 100%;
  position: relative;
  display: inline-block;
}

/* .blog-content-wrapper {
  display: flex;
  justify-content: center;
}

.blog-content {
  width: 90%;
} */

/* .box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

@media (min-width: 300px) {
  .soluzione-text-wrapper {
    height: 90vh;
  }
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
  .mercato-auto-elettriche-wrapper {
    height: 60vh;
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
    height: 100vh;
    min-height: 250px;
    background-position: center center;
  }
  .foto-mercato {
    width: 100%;
    height: 50vh;
  }
  .soluzione-text-wrapper {
    height: 50vh;
  }
  .desktop {
    margin-top: -5em;
  }
}

@media (min-width: 650px) {
  .question {
    height: 90vh;
  }
}

@media (min-width: 750px) {
  .foto {
    margin-top: 4.5em;
    margin-left: -4em;
  }
  .foto::before {
    left: -100px;
    top: -240px;
    height: 320px;
    width: 180px;
  }
  .cta {
    display: flex;
    justify-content: center;
    padding-left: 8em;
    margin-top: 3em;
  }

  .cta-b {
    display: inline-block;
    margin-left: 2em;
    margin-top: 4em;
    width: 70%;
  }
  .cta-b p {
    font-size: 1em;
  }
  .title-home {
    z-index: 0;
  }
  .tel {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .chiama::before {
    content: " ";
    position: absolute;
    left: -17px;
    top: -1px;
    height: 28px;
    width: 6px;
    background-color: $primaryColor;
  }
  .blog-content {
    width: 60%;
  }
  .foto-mercato {
    width: 100%;
    height: 30vh;
  }
  .question {
    height: 53vh;
    min-height: 250px;
    font-size: 1.2em;
  }

  .foto::before {
    left: -70px;
    top: -70px;
    height: 150px;
    width: 140px;
  }
  .soluzione-text-wrapper {
    height: 30vh;
  }
  .check-up-energetico-text-wrapper,
  .check-up-iva-text-wrapper {
    height: 40vh;
  }
  .desktop {
    margin-top: 12em;
  }
}

@media (min-width: 800px) {
  .question {
    height: 70vh;
    font-size: 1.2em;
  }
  .desktop {
    margin-top: 0em;
  }
}

@media (min-width: 1000px) {
  .question-text-wrapper {
    min-height: 525px;
  }
  .question {
    font-size: 2em;
    min-height: 525px;
  }

  .foto-mercato {
    height: 30vh;
  }
  .desktop {
    margin-top: 0em;
  }
  .mercato-text {
    font-size: 2em;
  }
  .check-up-iva-text {
    font-size: 2em;
  }
  .pericoli p {
    font-size: 2em;
  }
}

@media (min-width: 1200px) {
  .titolo {
    font-size: 3rem;
  }
  .usp {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  .title-home span {
    display: block;
  }
  .title-h4 {
    width: 600px;
  }
  .foto {
    margin-left: 1em;
  }
  .cta-b {
    padding-left: 6em;
  }

  .section {
    background-color: #ededed;
  }

  .foto-mercato {
    width: 100%;
    height: 280px;
  }
  .question-text-wrapper {
    min-height: 700px;
  }
  .question {
    min-height: 700px;
  }

  .foto-mercato {
    width: 50%;
  }
  .section {
    .pulsante a:after {
      left: 18%;
    }
  }
}

@media (min-width: 1300px) {
  .foto {
    margin-top: 2.5em;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
}
</style>

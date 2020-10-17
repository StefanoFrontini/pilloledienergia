<template>
  <Layout>
    <div class="iva-accise-section">
      <div class="iva-accise">
        <div class="iva-accise-text-wrapper">
          <div class="iva-accise-text">
            <h1>
              Sei sicuro che l'IVA e le accise della bolletta della luce e del
              gas del tuo ristorante/hotel siano applicate in maniera corretta?
            </h1>
          </div>
        </div>
      </div>
      <div class="corpo">
        <div>
          <p>
            Molti imprenditori non sanno di aver diritto ad agevolazioni
            fiscali, com'è il caso di un mio Cliente che per 20 anni ha pagato
            700€/anno in più di accise sulla bolletta del gas.
          </p>
        </div>

        <h3>
          Ristorante <a href="https://lacolubrina.it/">La Colubrina</a> di
          Milano
        </h3>

        <iframe
          title="Video testimonianza Ristorante La Colubrina"
          width="100%"
          height="315"
          data-src="https://www.youtube.com/embed/wvBmXA-YFuc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/wvBmXA-YFuc?autoplay=1><img src=https://img.youtube.com/vi/wvBmXA-YFuc/hqdefault.jpg alt='Video testimonianza Ristorante La Colubrina'><span>▶</span></a>"
        ></iframe>

        <div class="compila">
          <p>
            Compila i campi sottostanti per una veloce verifica che potrebbe
            valere centinania se non migliaia di euro/anno!
          </p>
        </div>

        <div>
          Oltre a ricevere gratuitamente una mail con il risultato del check-up
          riceverai una newsletter con:

          <ul>
            <li>
              <p>
                Tanti altri consigli per gestire al meglio le forniture di
                energia elettrica e gas della tua azienda;
              </p>
            </li>
            <li>
              <p>
                Informazioni sul mondo dell'energia, la sostenibilità e la
                mobilità elettrica;
              </p>
            </li>
            <li>
              <p>
                Eventi interessanti e occasioni in cui ci possiamo incontrare;
              </p>
            </li>
            <li>
              <p>Promozioni speciali.</p>
            </li>
          </ul>

          <div class="form-section">
            <form
              name="analisi"
              method="post"
              v-on:submit.prevent="handleSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="analisi" />
              <p hidden>
                <label> Don’t fill this out: <input name="bot-field" /> </label>
              </p>

              <div class="sender-info">
                <div>
                  <label for="name" class="label">Nome</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    v-model="formData.name"
                    class="zoom"
                  />
                </div>
                <div>
                  <label class="label" for="cognome">Cognome</label>
                  <input
                    id="cognome"
                    type="text"
                    name="cognome"
                    v-model="formData.cognome"
                    class="zoom"
                  />
                </div>

                <div>
                  <label class="email" for="email">Indirizzo email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model="formData.email"
                    class="zoom"
                  />
                </div>

                <h4>La mia società svolge la seguente attività:</h4>
                <div class="select-box">
                  <div class="options-container" :class="{ active: isActive2 }">
                    <Option2
                      v-on:click-attivita="log2"
                      v-for="option in attivitaList"
                      :key="option.id"
                      :data="option"
                    />
                  </div>
                  <div
                    class="selected"
                    @click="toggleMenu2"
                    v-inner="{ text: optionText2 }"
                  ></div>
                </div>

                <h4>Il codice ATECO 2007 della mia attività è:</h4>
                <small>Trovi il codice ATECO 2007 in visura camerale</small>

                <div class="select-box">
                  <div
                    class="options-container"
                    :class="{ active: isActive }"
                    infinite-wrapper
                  >
                    <Option
                      v-on:click-option="log"
                      v-for="{ node } of loadedAteco"
                      :key="node.id"
                      :data="node"
                    />
                    <ClientOnly>
                      <infinite-loading
                        @infinite="infiniteHandler"
                        spinner="spiral"
                      >
                        <div slot="no-more">
                          You've scrolled through all the posts ;)
                        </div>
                        <div slot="no-results">
                          Sorry, no posts yet :(
                        </div>
                      </infinite-loading>
                    </ClientOnly>
                  </div>
                  <div
                    class="selected"
                    @click="toggleMenu"
                    v-inner="{ text: optionText }"
                  ></div>
                </div>

                <div>
                  <label class="consenso" for="consenso"
                    >Consenso all'uso dei dati</label
                  >
                  <div class="privacy">
                    <input
                      id="consenso"
                      type="checkbox"
                      name="consenso"
                      value="true"
                      v-model="formData.consenso"
                    />
                    <p class="privacy-p">
                      I tuoi dati sono al sicuro (qui c'è l'<g-link
                        to="/privacy"
                        >informativa</g-link
                      >)
                    </p>
                  </div>
                </div>
              </div>
              <button class="btn-analisi" type="submit">ANALIZZA!</button>
              <div class="result">
                <input
                  v-model="formData.iva"
                  name="iva"
                  id="iva"
                  type="hidden"
                />
                <input
                  v-model="formData.accise"
                  name="accise"
                  id="accise"
                  type="hidden"
                />
              </div>
            </form>
            <br />
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="error"
            >
              {{ message }}
            </div>
            <SocialSharing
              title="Analisi iva e accise agevolate bolletta luce e gas"
              description="Sei sicuro che le tasse della bolletta della luce e del gas della tua azienda siano applicate in maniera corretta?"
              url="analisi-iva-accise-agevolate"
            />
          </div>
        </div>
        <div class="normativa">
          <h2>Normativa di riferimento</h2>
          <p>
            L'imposizione fiscale in materia di imposta sul valore aggiunto
            (IVA) sui consumi di energia elettrica è disciplinata dal D.P.R.
            26/10/1972 n. 633 e successive modifiche e integrazioni.
          </p>
          <p>
            In particolare per individuare l'aliquota IVA da applicare ai
            consumi di energia elettrica è necessario fare riferimento all'art.
            16 del citato D.P.R. 26/10/1972 n. 633 (aliquota ordinaria) e al n.
            103 della relativa Tabella A, parte II, ad esso collegata (aliquota
            ridotta del 10%).
          </p>
          <p>
            Da citare infine il Decreto Ministeriale del 31/12/1988 recante
            l'elenco delle attività che hanno diritto all'agevolazione.
          </p>
          <p>
            Per quanto riguarda le accise agevolate la normativa di riferimento
            è il DL 26 ottobre 1995 n. 504.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query ($page: Int) {
	atecoList: allAteco( perPage: 10, page: $page, order: ASC) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				codice
        descrizione

			}
		}
	}
}

</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import Option from "~/components/Option.vue";
import Option2 from "~/components/Option2.vue";

import attivitaList from "@/data/attivita.json";
import SocialSharing from "~/components/SocialSharing.vue";

export default {
  components: {
    Option,
    Option2,
    SocialSharing,
  },
  metaInfo() {
    return {
      title:
        "Analisi iva e accise agevolate bolletta luce e gas | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Sei sicuro che le tasse della bolletta della luce e del gas della tua azienda siano applicate in maniera corretta?",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Analisi iva e accise agevolate bolletta luce e gas",
        },
        {
          property: "og:description",
          content:
            "Sei sicuro che le tasse della bolletta della luce e del gas della tua azienda siano applicate in maniera corretta?",
        },
        {
          property: "og:url",
          content: `${
            this.$static.metadata.siteUrl
          }/analisi-iva-accise-agevolate`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Analisi iva e accise agevolate bolletta luce e gas",
        },
        {
          name: "twitter:description",
          content:
            "Sei sicuro che le tasse della bolletta della luce e del gas della tua azienda siano applicate in maniera corretta?",
        },
        {
          name: "twitter:site",
          content: `${
            this.$static.metadata.siteUrl
          }/analisi-iva-accise-agevolate`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      optionText: "Seleziona il codice ATECO",
      optionText2: "Seleziona l'attività",
      attivitaList,
      formData: { iva: "Not checked", accise: "Not checked", email: "" },
      atecoCheck: "Not checked",
      attivitaIVAcheck: false,
      attivitaAccisecheck: false,
      output2: [],
      messages: [],
      loadedAteco: [],
      currentPage: 1,
    };
  },
  created() {
    this.loadedAteco.push(...this.$page.atecoList.edges);
  },
  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.atecoList.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(
          `/analisi-iva-accise-agevolate/${this.currentPage + 1}`
        );

        if (data.atecoList.edges.length) {
          this.currentPage = data.atecoList.pageInfo.currentPage;

          this.loadedAteco.push(...data.atecoList.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },

    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      this.messages = [];
      console.log(this.formData.email, this.atecoCheck, this.formData.accise);
      const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.formData.email.match(mailFormat)) {
        this.messages.push("E' necessario inserire un indirizzo email valido!");
      }
      if (this.atecoCheck == "Not checked") {
        this.messages.push("E' necessario selezionare il codice ATECO!");
      }
      if (this.formData.accise == "Not checked") {
        this.messages.push(
          "E' necessario selezionare il tipo di attività svolta!"
        );
      }

      if (this.formData.consenso !== true) {
        this.messages.push("E' necessario dare il consenso all'uso dei dati!");
      }

      if (
        this.formData.email.match(mailFormat) &&
        this.atecoCheck !== "Not checked" &&
        this.formData.accise !== "Not checked" &&
        this.formData.consenso == true
      ) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formData,
          }),
        })
          .then(() => this.$router.push("/grazie-mille"))
          .catch((error) => alert(error));
      }
    },
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    toggleMenu2() {
      this.isActive2 = !this.isActive2;
    },
    log(codice, descrizione) {
      this.optionText = codice + " - " + descrizione;
      this.isActive = false;
      const num = parseFloat(codice);

      if (isNaN(num)) {
        this.atecoCheck = false;
      } else if (num >= 10 && num <= 33.2) {
        this.atecoCheck = true;
      } else {
        this.atecoCheck = false;
      }
      if (this.atecoCheck == "Not checked") {
        this.formData.iva = "Not checked";
      } else {
        this.formData.iva = this.attivitaIVAcheck || this.atecoCheck;
      }
      console.log("atecoCheck", this.atecoCheck);
      console.log("check iva", this.formData.iva);
      console.log("check accise", this.formData.accise);
    },
    log2(e) {
      const iva = ["Agricola", "Estrattiva"];
      const accise = [
        "Artigianale",
        "Industriale",
        "Alberghiera",
        "Ristorazione",
        "Distribuzione commerciale",
        "Casa di cura",
        "Associazione sportiva dilettantistica senza fini di lucro",
        "Attività ricettive senza fini di lucro per assistenza dei disabili, degli orfani, degli anziani e degli indigenti",
      ];
      this.optionText2 = e;
      this.isActive2 = false;
      if (iva.includes(e)) {
        this.attivitaIVAcheck = true;
        this.attivitaAccisecheck = false;
      } else if (accise.includes(e)) {
        this.attivitaAccisecheck = true;
        this.attivitaIVAcheck = false;
      } else {
        this.attivitaAccisecheck = false;
        this.attivitaIVAcheck = false;
      }
      if (this.atecoCheck == "Not checked") {
        this.formData.iva = "Not checked";
      } else {
        this.formData.iva = this.attivitaIVAcheck || this.atecoCheck;
      }

      this.formData.accise = this.attivitaAccisecheck;
      console.log("atecoCheck", this.atecoCheck);
      console.log("check iva", this.formData.iva);
      console.log("check accise", this.formData.accise);
    },
  },

  directives: {
    inner(el, binding) {
      el.innerHTML = binding.value.text;
    },
  },
};
</script>

<style scoped lang="scss">
.iva-accise-section {
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.corpo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  max-width: 900px;
  margin-top: 1em;
}

.iva-accise-text-wrapper {
  display: flex;
  align-items: center;
  height: 70vh;
  background: url("~@/assets/tasse.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  opacity: 1;
  min-height: 350px;
}

.iva-accise-text-wrapper::before {
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

.iva-accise-text {
  font-size: 1em;
  color: white;
  position: relative;
  padding: 1em;
  text-align: center;
  z-index: -1;
}

.form-section {
  margin-top: 3em;
  margin-bottom: 3em;
}

.label,
.email,
.consenso {
  font-family: "radnika-medium";
  display: block;
  margin-top: 1.2em;
}

input {
  border: 1px solid #707070;
  width: 90%;
  max-width: 600px;
  padding: 1em;
  border-radius: 0.5em;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  text-align: center;
}

input[type="checkbox"] {
  width: 20px;
}

.btn-analisi {
  padding: 1em 0;
  font-family: "radnika-medium";
  width: 20%;
  border-radius: 0.5em;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;
  margin-top: 2em;
  max-width: 200px;
  background-color: $primaryColor;
  color: #1b1b1b;
}

.btn-analisi:hover {
  background-color: #ffad3b;
}

.news-title {
  margin-bottom: 1.8em;
  font-size: 1.5em;
}

.compila p {
  width: 80%;
  border-left: 0.3em solid $primaryColor;
  padding: 0 15px;
  font-style: italic;
  font-family: "radnika-medium";
}

.compila {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
}

.privacy {
  display: flex;
  justify-content: flex-start;
}

.privacy-p {
  font-size: 0.75rem;
  margin-top: 0.9em;
}

.select-box {
  display: flex;
  flex-direction: column;
  width: 95%;
  position: relative;
}

.select-box .options-container {
  background: #1b1b1b;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
}

.selected {
  background: #1b1b1b;
  border-radius: 8px;
  margin-bottom: 38px;
  color: #f5f6fa;
  position: relative;
  order: 0;
}

.selected::after {
  content: "";
  background-color: #f5f6fa;
  -webkit-mask: url("~@/assets/arrow-down.svg") no-repeat 100% 100%;
  mask: url("~@/assets/arrow-down.svg") no-repeat 100% 100%;
  -webkit-mask-size: contain;
  mask-size: contain;
  position: absolute;
  height: 30%;
  width: 22px;
  right: 10px;
  top: 18px;
  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
  margin-top: -35px;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: black;
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  padding: 12px 24px;
  cursor: pointer;
}

.select-box .option:hover {
  background: #414b57;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

.select-box .options-container.active ~ .search-box input {
  opacity: 1;
  pointer-events: auto;
}

.error {
  color: red;
}

.normativa {
  padding: 0 1em;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .zoom {
    font-size: 16px;
  }
  .btn-analisi {
    width: 40%;
  }
}

@media (min-width: 750px) {
  .iva-accise-text {
    font-size: 1.5em;
  }
}

@media (min-width: 1000px) {
  .select-box {
    max-width: 630px;
  }
}
</style>

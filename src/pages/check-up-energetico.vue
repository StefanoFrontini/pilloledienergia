<template>
  <Layout>
    <div class="root">
      <div class="container-progressbar">
        <ul class="progressbar">
          <li
            :class="{
              active: passo === 1,
            }"
          >
            Passo 1
          </li>
          <li
            :class="{
              active: passo === 2,
            }"
          >
            Passo 2
          </li>
          <li
            :class="{
              active: passo === 3,
            }"
          >
            Passo 3
          </li>
          <li
            :class="{
              active: passo === 4,
            }"
          >
            Passo 4
          </li>
          <li
            :class="{
              active: passo === 5,
            }"
          >
            Passo 5
          </li>
          <li
            :class="{
              active: passo === 6,
            }"
          >
            Passo 6
          </li>
          <li
            :class="{
              active: passo === 7,
            }"
          >
            Passo 7
          </li>
          <li
            :class="{
              active: passo === 8,
            }"
          >
            Passo 8
          </li>
          <li
            :class="{
              active: passo === 9,
            }"
          >
            Passo 9
          </li>
          <li
            :class="{
              active: passo === 10,
            }"
          >
            Passo 10
          </li>
        </ul>
      </div>

      <div class="form-section">
        <form
          name="checkupenergetico"
          method="post"
          @submit.prevent="handleSubmit"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field"/></label>
          </p>
          <div class="cartolina-container">
            <div class="cartolina-wrapper">
              <div class="domande">
                <transition appear name="fade" mode="out-in">
                  <div v-if="passo === 0" :key="passo" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="80"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image class="img" src="~/assets/check-up.jpeg" alt="" />
                    <p>
                      Compila i campi e inizia <strong>SUBITO</strong><br />il
                      tuo check-up energetico
                      <strong>GRATUITO</strong>,<br />riceverai il risultato via
                      mail!
                    </p>
                    <div class="start" @click.prevent="next()">start*</div>
                    <div class="nome">
                      <input
                        type="text"
                        name="name"
                        required
                        v-model="formData.nome"
                        autocomplete="off"
                      />
                      <label for="name" class="label-name">
                        <span class="content-name">nome</span></label
                      >
                    </div>
                    <div class="error-nome" ref="errorName">
                      <p>
                        Inserisci un nome!
                      </p>
                    </div>
                    <div class="mail">
                      <input
                        type="text"
                        name="email"
                        v-model="formData.email"
                        required
                        autocomplete="off"
                      />
                      <label class="label-mail" for="email"
                        ><span class="content-mail"
                          >indirizzo @ valido</span
                        ></label
                      >
                    </div>

                    <div class="error-mail" ref="errorMail" key="1">
                      <p>
                        Inserisci un indirizzo email valido!
                      </p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                    <div class="usoDati">
                      <p>
                        *Cliccando su <strong>start</strong> dai il consenso
                        all'uso dei dati. <br />I tuoi dati sono al sicuro.
                        Leggi l'<g-link to="/privacy"
                          >informativa privacy</g-link
                        >.
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 1" :key="passo + 2" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-arancione.jpg"
                      alt=""
                    />
                    <p>
                      <span>1° domanda</span><br />
                      Conosci la <strong>data di scadenza</strong> della tua
                      attuale offerta<br />
                      e le <strong>condizioni economiche</strong> di rinnovo?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaArancione">
                      <p>forniture<br />trasparenti</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 2" :key="passo + 3" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-rossa.jpg"
                      alt=""
                    />
                    <p>
                      <span>2° domanda</span><br />
                      Sei consapevole che esistono
                      <strong>voci aggiuntive</strong>, a volte<br />
                      nascoste, <strong>che paghi</strong> oltre i consueti
                      kWh/Smc, oneri e tasse?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 3" :key="passo + 4" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-rossa.jpg"
                      alt=""
                    />
                    <p>
                      <span>3° domanda</span><br />
                      Sai quanto impatta sui costi
                      <strong>accendere</strong><br />nello stesso momento<br />
                      <strong>tutte le macchine</strong> che consumano energia
                      elettrica?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 4" :key="passo + 5" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-rossa.jpg"
                      alt=""
                    />
                    <p>
                      <span>4° domanda</span><br />
                      Ti sei mai accorto di pagare
                      <strong>penali</strong><br />
                      per l’ <strong>energia reattiva</strong>*?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                    <small>
                      <strong
                        >*L’energia reattiva è un'energia che viene assorbita da
                        alcune apparecchiature elettriche come motori e
                        trasformatori, senza che venga effettivamente
                        utilizzata. Il suo consumo eccessivo porta all'addebito
                        di una penale in bolletta e per questo motivo per le
                        aziende è un parametro da tenere sottocontrollo per
                        evitare di pagare tale penale.</strong
                      >
                    </small>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 5" :key="passo + 6" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-gialla.jpeg"
                      alt=""
                    />
                    <p>
                      <span>5° domanda</span><br />
                      Sai se la
                      <strong>fatturazione</strong>
                      avviene sulla base<br />
                      di stime o dalla lettura <strong>effettiva</strong>?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaRossa">
                      <p>evitare<br />conguagli</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 6" :key="passo + 7" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-arancione.jpg"
                      alt=""
                    />
                    <p>
                      <span>6° domanda</span><br />
                      Quando hai acquistato la <strong>tua fornitura</strong
                      ><br />di energia elettrica e gas, conoscevi<br />
                      i <strong>vantaggi</strong> e gli
                      <strong>svantaggi</strong> di tutte le tipologie di
                      contratto?<br /><i
                        >(ad esempio: prezzo fisso, prezzo variabile, 50 e 50,
                        altro...)</i
                      >
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaArancione">
                      <p>forniture<br />trasparenti</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 7" :key="passo + 8" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-rossa.jpg"
                      alt=""
                    />
                    <p>
                      <span>7° domanda</span><br />
                      Sei stato informato che hai diritto a delle<br />
                      <strong>agevolazioni fiscali</strong> sull’IVA e le
                      accise?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 8" :key="passo + 9" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-blu.jpeg"
                      alt=""
                    />
                    <p>
                      <span>8° domanda</span><br />
                      Il tuo
                      <strong>referente</strong> è un
                      <strong>call center</strong>?
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaBlu">
                      <p>come evitare<br />di perdere tempo</p>
                    </div>
                  </div>

                  <div v-if="passo === 9" :key="passo + 10" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-blu.jpeg"
                      alt=""
                    />
                    <p>
                      <span>9° domanda</span><br />
                      Hai un
                      <strong>consulente</strong> personale
                      <strong>certificato*</strong>?<br /><i
                        >*Utility Manager UNI 11782:2020</i
                      >
                    </p>

                    <div class="si" @click.prevent="si">SI</div>
                    <div class="no" @click.prevent="no">NO</div>
                    <div class="fascettaBlu">
                      <p>come evitare<br />di perdere tempo</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>

                  <div v-if="passo === 10" :key="passo + 11" class="step">
                    <g-image
                      class="logo"
                      src="~/assets/logo-pillole-di-energia.svg"
                      alt="logo pillole di energia"
                      width="100"
                    />
                    <h1>
                      CHECK-UP ENERGETICO GRATUITO<br />per ristoranti e hotel
                    </h1>
                    <g-image
                      class="img"
                      src="~/assets/fascetta-verde.jpeg"
                      alt=""
                    />
                    <p>
                      <span>10° domanda</span><br />
                      Sai quali sono i vantaggi per il tuo ristorante/hotel<br />
                      se scegli una fornitura
                      <strong>elettrica sostenibile</strong>?
                    </p>

                    <div class="si" @click.prevent="si">
                      SI
                    </div>

                    <input
                      type="submit"
                      ref="submitInputSi"
                      style="display:none"
                    />

                    <div class="no" @click.prevent="no">
                      NO
                    </div>

                    <input
                      type="submit"
                      ref="submitInputNo"
                      style="display:none"
                    />

                    <div class="fascettaBlu">
                      <p>verde dentro<br />belli fuori</p>
                    </div>
                    <div class="foot">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>
                  <div v-if="passo === 11" :key="passo + 12" class="step">
                    <g-image
                      class="img"
                      src="~/assets/fondi-grigi.jpg"
                      alt=""
                    />
                    <div class="response">
                      <p>
                        {{ message }}
                      </p>
                    </div>
                    <div class="serverResponse">
                      <p v-html="serverResponse"></p>
                    </div>
                    <p hidden>{{ ste }}</p>

                    <div class="footGrigio">
                      <p>
                        <span class="pill"
                          >pillole di energia ©
                          {{ new Date().getFullYear() }}</span
                        >
                        <br /><strong
                          >Stefano Frontini consulente energetico per ristoranti
                          e hotel</strong
                        ><br />
                        <a href="https://www.pilloledienergia.com/"
                          >www.pilloledienergia.com</a
                        ><br />
                        <a href="mailto:stefano.frontini@con.repower.com"
                          >stefano.frontini@con.repower.com</a
                        ><br />
                        <a href="tel:+393351030301">cell: 335.103.03.01</a>
                      </p>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <br />
        </form>
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
import axios from "axios";

export default {
  metaInfo() {
    return {
      title: "Check-up energetico gratuito | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          property: "description",
          name: "description",
          content:
            "Non perdere l’occasione di risparmiare fino al 25% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        { key: "og:type", property: "og:type", content: "website" },
        {
          key: "og:title",
          property: "og:title",
          content: "Check-up energetico gratuito | Pillole di Energia",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "Non perdere l’occasione di risparmiare fino al 25% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/check-up-energetico/`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Check-up energetico gratuito | Pillole di Energia",
        },
        {
          name: "twitter:description",
          content:
            "Non perdere l’occasione di risparmiare fino al 25% sulle forniture di energia elettrica e gas del tuo ristorante/hotel",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/check-up-energetico/`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },
  data() {
    return {
      passo: 0,
      formData: {
        form: "checkupenergetico",
        nome: "",
        email: "",
        domanda1: "",
        domanda2: "",
        domanda3: "",
        domanda4: "",
        domanda5: "",
        domanda6: "",
        domanda7: "",
        domanda8: "",
        domanda9: "",
        domanda10: "",
        iva: false,
        accise: false,
      },
      messages: [],
      serverResponse: "",
      message: "",
    };
  },

  computed: {
    ste() {
      this.$refs.submitInputSi.click();
    },
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
  },

  methods: {
    errorMailDisappear() {
      this.$refs.errorMail.style.display = "none";
    },
    errorNameDisappear() {
      this.$refs.errorName.style.display = "none";
    },
    next() {
      if (this.passo === 0) {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.formData.email.match(mailFormat)) {
          this.$refs.errorMail.style.display = "block";
          setTimeout(() => this.errorMailDisappear(), 3000);
        }
        if (this.formData.nome === "") {
          this.$refs.errorName.style.display = "block";

          setTimeout(() => this.errorNameDisappear(), 3000);
        }
        if (
          this.formData.email.match(mailFormat) &&
          this.formData.nome !== ""
        ) {
          this.passo++;
        }
      }
    },
    si() {
      if (this.passo === 0) {
        this.passo++;
      } else {
        const tick = `domanda${this.passo}`;
        this.formData[tick] = "si";
        this.passo++;
      }
    },
    no() {
      if (this.passo === 0) {
        this.passo++;
      } else {
        const tick = `domanda${this.passo}`;
        this.formData[tick] = "no";
        this.passo++;
      }
    },

    /* encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }, */
    async handleSubmit(e) {
      this.message = "Complimenti e grazie per le tue preziose risposte!";
      try {
        const response = await axios.post(
          "/.netlify/functions/submissions",
          this.formData
        );

        this.serverResponse = response.data.message;

        /* {

          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify(this.formData),
          this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
        }); */
      } catch (error) {
        this.serverResponse =
          "Ops...c'è stato un errore.<br /> Contattami all'indirizzo email:<br /> stefano.frontini@con.repower.com<br /> per avere il risultato del check-up";
      }

      /* const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formData,
          }),
          axiosConfig
        ) */
      /*    .then((response) => {
          this.serverResponse = response.data.message;
        })
        .catch((error) => {
          this.serverResponse =
            "Ops...c'è stato un errore.<br /> Contattami all'indirizzo email:<br /> stefano.frontini@con.repower.com<br /> per avere il risultato del check-up";
        })
        .then((this.message = "Elaboro i dati...")); */

      //console.log("formdata:", this.formData);
      /* this.$router.push("/grazie-mille");
      this.messages = [];

      if (this.formData.email == "") {
        this.messages.push("E' necessario inserire un indirizzo email!");
      }

      if (this.formData.consenso !== true) {
        this.messages.push("E' necessario dare il consenso all'uso dei dati!");
      }
      if (this.formData.email !== "" && this.formData.consenso == true) {}
       */

      /* fetch("/.netlify/functions/submission-created", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/grazie-mille"))
        .catch((error) => alert(error)); */

      /* fetch("/.netlify/functions/submission-created", {
        method: "POST",
        body: JSON.stringify({
          email: this.formData.email,
          name: this.formData.name,
          domanda1: this.formData.domanda1,
          domanda2: this.formData.domanda2,
          domanda3: this.formData.domanda3,
          domanda4: this.formData.domanda4,
          domanda5: this.formData.domanda5,
          domanda6: this.formData.domanda6,
          domanda7: this.formData.domanda7,
          domanda8: this.formData.domanda8,
          domanda9: this.formData.domanda9,
          domanda10: this.formData.domanda10,
          si: this.formData.numerosi,
          no: this.formData.numerono,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          mailchimpDiv = document.querySelector(".mailchimp");
          mailchimpDiv.innerText = "Data has been sent!";

        }); */
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cartolina-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cartolina-wrapper {
  width: 100%;

  max-width: 900px;
  text-align: center;
  .step {
    position: relative;
  }

  .img {
    width: 100%;
  }
  p {
    width: 100%;
  }
  .logo {
    //width: 100%;
    position: absolute;
    top: 3%;
    left: 34%;
  }
  h1 {
    width: 100%;
    position: absolute;
    top: -0.5%;
    z-index: 10;
    font-size: 0.7em;
  }

  .domande p {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translate(-50%, 0);

    top: 16%;
    font-size: 0.75em;
    line-height: 1.2em;
    span {
      font-weight: bold;
    }
  }
  .domande p strong {
    color: $primaryColor;
  }
  .domande small {
    font-size: 0.5em;
    position: absolute;
    width: 90%;
    top: 45%;
    left: 5%;
  }
  .domande .response p {
    width: 100%;
    position: absolute;
    top: 25%;
    font-size: 0.6em;
  }
  .domande .serverResponse p {
    position: absolute;
    width: 100%;
    font-size: 0.6em;
    top: 35%;
  }
  .nome {
    height: 70px;
    width: 23%;
    position: absolute;
    top: 28%;
    left: 7.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    font-size: 1.3em;
    input {
      width: 100%;
      height: 100%;
      padding-top: 40px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      //background: transparent;
      text-align: center;
    }

    label {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-bottom: 2px solid black;
    }

    label::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -2px;
      height: 100%;
      width: 100%;
      border-bottom: 3px solid $primaryColor;
      transform: translateX(-100%);
    }
    .content-name {
      position: absolute;
      bottom: 5px;
      left: 35%;
      transition: all 0.3s ease;
      font-weight: bold;
      font-size: 0.5em;
    }
    input:focus + .label-name .content-name,
    input:valid + .label-name .content-name {
      transform: translateY(-120%);
      font-size: 0.5em;
      color: $primaryColor;
    }
    input:focus + .label-name::after,
    input:valid + .label-name:after {
      transform: translateX(0%);
      transition: all 0.3s ease;
    }
  }
  .mail {
    height: 70px;
    width: 23%;
    position: absolute;
    top: 28%;
    left: 38.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    font-size: 1.3em;
    input {
      width: 100%;
      height: 100%;
      padding-top: 40px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      text-align: center;
    }
    label {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-bottom: 2px solid black;
    }

    label::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -2px;
      height: 100%;
      width: 100%;
      border-bottom: 3px solid $primaryColor;
      transform: translateX(-100%);
    }
    .content-mail {
      position: absolute;
      bottom: 5px;
      left: 7%;
      transition: all 0.3s ease;
      font-weight: bold;
      font-size: 0.4em;
    }

    input:focus + .label-mail .content-mail,
    input:valid + .label-mail .content-mail {
      transform: translateY(-140%);
      font-size: 0.4em;
      color: $primaryColor;
    }
    input:focus + .label-mail::after,
    input:valid + .label-mail:after {
      transform: translateX(0%);
      transition: all 0.3s ease;
    }
  }
  .error-nome {
    width: 100%;
    position: absolute;
    top: 42%;
    left: -32%;
    font-weight: bold;
    font-size: 0.4em;
    color: red;
    display: none;
  }
  .error-mail {
    width: 100%;
    position: absolute;
    top: 42%;
    left: 0%;
    font-weight: bold;
    font-size: 0.4em;
    color: red;
    display: none;
  }

  .start {
    position: absolute;
    top: 38%;
    left: 74%;

    cursor: pointer;
    color: white;
    font-size: 1.2em;
    font-style: italic;
    font-family: "GFS Didot", serif;
    font-weight: bold;
    outline: none;
  }

  .si {
    position: absolute;
    top: 37.5%;
    left: 58%;
    font-family: "radnika-medium", sans-serif;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    outline: none;
  }
  .no {
    position: absolute;
    top: 37.5%;
    left: 32%;
    font-family: "radnika-medium", sans-serif;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    outline: none;
  }
  .fascettaArancione {
    position: absolute;
    top: 19%;
    left: -4%;
    width: 15%;
    p {
      font-size: 0.5em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .fascettaRossa {
    position: absolute;
    top: 19%;
    left: -8%;
    width: 20%;
    p {
      font-size: 0.5em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .fascettaBlu {
    position: absolute;
    top: 19%;
    left: -12%;
    width: 25%;
    p {
      font-size: 0.5em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .foot {
    width: 100%;
    position: absolute;
    top: 55%;
    font-size: 0.8em;

    .pill {
      text-transform: uppercase;
      color: $primaryColor;
      font-size: 0.8em;
    }
    a {
      color: black;
    }
    a:hover {
      color: $primaryColor;
    }
    p strong {
      color: black;
    }
  }
  .footGrigio {
    width: 100%;
    position: absolute;
    top: 55%;
    font-size: 0.7em;

    .pill {
      text-transform: uppercase;
      color: $primaryColor;
      font-size: 0.8em;
    }
    a {
      color: black;
    }
    a:hover {
      color: $primaryColor;
    }
    p strong {
      color: black;
    }
  }
  .usoDati {
    position: absolute;
    width: 100%;

    top: 70%;
  }
}

.container-progressbar {
  width: 100%;
  height: 70px;
  z-index: 1;
  margin-bottom: 6em;
}

.progressbar {
  counter-reset: step;
  display: flex;
  flex-wrap: wrap;
}

.progressbar li {
  width: 18%;
  position: relative;
  text-align: center;
  list-style-type: none;
  font-size: 0.8em;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 5px auto;
  border-radius: 50%;
  line-height: 30px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li.active:before {
  background: #3aac5d;
  border-color: #3aac5d;
  color: white;
}

.progressbar li.active:after {
  background: #3aac5d;
}

.progressbar li:first-child:after {
  content: none;
}

.root {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form-section {
  width: 105%;
}

@media (min-width: 350px) {
  .cartolina-wrapper {
    .domande p {
      top: 18%;
    }
    .domande small {
      font-size: 0.5em;
      top: 48%;
    }
    .logo {
      //width: 100%;
      position: absolute;
      top: 4%;
      left: 37%;
    }
    h1 {
      top: 0%;
    }
    .nome {
      top: 30%;
    }

    .mail {
      top: 30%;
      .content-mail {
        font-size: 0.5em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 0.5em;
      }
    }
    .start {
      top: 38%;
      left: 74%;
      font-size: 1.4em;
    }
    .si {
      top: 38%;
      font-size: 2em;
    }
    .no {
      top: 38%;
      font-size: 2em;
    }
    .fascettaArancione {
      top: 18%;
      left: -4%;
      width: 17%;
      p {
        font-size: 0.7em;
      }
    }
    .fascettaRossa {
      width: 20%;
      left: -7%;
      top: 18%;

      p {
        font-size: 0.7em;
      }
    }
    .fascettaBlu {
      top: 18%;
      left: -12%;

      p {
        font-size: 0.6em;
      }
    }
    .foot {
      font-size: 0.8em;
    }
  }
}

@media (min-width: 400px) {
  .cartolina-wrapper {
    .domande p {
      width: 80%;
      font-size: 0.9em;
    }
    .nome {
      top: 31%;
    }

    .mail {
      top: 31%;
      .content-mail {
        font-size: 0.5em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 0.5em;
      }
    }
    .si {
      top: 38%;
      font-size: 2.2em;
    }
    .no {
      top: 38%;
      font-size: 2.2em;
    }
    .start {
      left: 75%;
      font-size: 1.4em;
    }
    .fascettaArancione {
      top: 18%;
      left: -4%;
      width: 17%;
      p {
        font-size: 0.8em;
      }
    }
    .fascettaRossa {
      width: 25%;
      left: -12%;
      top: 18%;

      p {
        font-size: 0.8em;
      }
    }
    .fascettaBlu {
      top: 18%;
      left: -11%;

      p {
        font-size: 0.7em;
      }
    }
    .foot {
      font-size: 0.9em;
    }
  }
}
@media (min-width: 500px) {
  .cartolina-wrapper {
    .domande p {
      width: 80%;
      font-size: 1em;
    }
    .domande small {
      font-size: 0.7em;

      top: 48%;
    }
    h1 {
      top: 0%;

      font-size: 1em;
    }
    .logo {
      width: 150px;

      top: 4%;
      left: 37%;
    }
    .nome {
      top: 33%;
      .content-name {
        font-size: 0.7em;
      }
    }

    .mail {
      top: 33%;

      .content-mail {
        font-size: 0.6em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 0.6em;
      }
    }
    .si {
      top: 38.5%;

      font-size: 2em;
    }
    .no {
      top: 38.5%;

      font-size: 2em;
    }
    .start {
      font-size: 2em;

      left: 75%;
    }
    .foot {
      top: 54%;

      font-size: 1em;
    }
  }
}

@media (min-width: 550px) {
  .cartolina-wrapper {
    .domande p {
      width: 100%;
      font-size: 1.2em;
    }
    .domande small {
      font-size: 0.7em;

      top: 49%;
    }
    .domande .response p {
      top: 25%;
      font-size: 1em;
    }
    .domande .serverResponse p {
      font-size: 1em;
      top: 35%;
    }
    .nome {
      top: 34%;
      .content-name {
        font-size: 0.7em;
      }
      input:focus + .label-name .content-name,
      input:valid + .label-name .content-name {
        font-size: 0.7em;
      }
    }

    .mail {
      top: 34%;
      .content-mail {
        font-size: 0.7em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 0.7em;
      }
    }
    .si {
      top: 38%;

      font-size: 3em;
    }
    .no {
      top: 38%;

      font-size: 3em;
    }
    .fascettaArancione {
      left: -4%;
      width: 15%;
      p {
        font-size: 0.9em;
      }
    }
    .fascettaRossa {
      left: -14%;
      top: 19%;

      p {
        font-size: 0.9em;
      }
    }
    .fascettaBlu {
      top: 19%;
      left: -15%;

      p {
        font-size: 0.9em;
      }
    }
    .foot {
      top: 55%;
      font-size: 0.9em;
    }
  }
}
@media (min-width: 650px) {
  .cartolina-wrapper {
    h1 {
      font-size: 1.5em;
    }
    .domande p {
      font-size: 1.5em;
    }
    .domande small {
      font-size: 0.9em;

      top: 49%;
    }
    .logo {
      //width: 100%;

      top: 6%;
      left: 39%;
    }
    .nome {
      top: 35%;
      .content-name {
        font-size: 0.8em;
      }
      input:focus + .label-name .content-name,
      input:valid + .label-name .content-name {
        font-size: 0.8em;
      }
    }

    .mail {
      top: 35%;
      .content-mail {
        font-size: 0.8em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 0.8em;
      }
    }
    .start {
      font-size: 2.5em;
    }

    .si {
      top: 38%;

      font-size: 3.5em;
    }
    .no {
      top: 38%;

      font-size: 3.5em;
    }
    .fascettaArancione {
      p {
        font-size: 1em;
      }
    }
    .fascettaRossa {
      left: -10%;
      top: 19%;

      p {
        font-size: 1em;
      }
    }
    .fascettaBlu {
      top: 19%;
      left: -15%;

      p {
        font-size: 1em;
      }
    }
    .foot {
      top: 55%;
      font-size: 0.9em;
    }
  }
}

@media (min-width: 730px) {
  .cartolina-wrapper {
    .domande p {
      width: 100%;
      font-size: 1.5em;
    }
    .logo {
      width: 20%;
      top: 6%;
      left: 40%;
    }
    .nome {
      top: 36%;
      .content-name {
        font-size: 1em;
      }
      input:focus + .label-name .content-name,
      input:valid + .label-name .content-name {
        font-size: 1em;
      }
    }

    .mail {
      top: 36%;
      .content-mail {
        font-size: 1em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 1em;
      }
    }
    .si {
      top: 38%;

      font-size: 4em;
    }
    .no {
      top: 38%;

      font-size: 4em;
    }
    .start {
      left: 74%;
      font-size: 3em;
    }
    .fascettaArancione {
      top: 19%;
      left: -5%;
      width: 15%;
      p {
        font-size: 1.1em;
      }
    }
    .fascettaRossa {
      left: -14%;
      top: 19%;

      p {
        font-size: 1.1em;
      }
    }
    .fascettaBlu {
      top: 19%;
      left: -15%;

      p {
        font-size: 1.1em;
      }
    }
    .foot {
      font-size: 1em;
      top: 54%;
    }
  }
}

@media (min-width: 800px) {
  .cartolina-wrapper {
    .domande p {
      font-size: 2em;
    }
    .domande small {
      font-size: 1em;
    }
    .si {
      font-size: 4.5em;
    }
    .no {
      font-size: 4.5em;
    }
    .fascettaArancione {
      top: 19%;
      left: -5%;

      p {
        font-size: 1.3em;
      }
    }
    .fascettaRossa {
      left: -15%;
      top: 19%;

      p {
        font-size: 1.3em;
      }
    }
    .fascettaBlu {
      top: 19%;
      left: -15%;

      p {
        font-size: 1.3em;
      }
    }
    .foot {
      top: 55%;
      font-size: 0.8em;
    }
  }
}

@media (min-width: 1000px) {
  .cartolina-wrapper {
    .nome {
      top: 37%;
      .content-name {
        font-size: 1em;
      }
    }

    .mail {
      top: 37%;

      .content-mail {
        font-size: 1em;
      }
      input:focus + .label-mail .content-mail,
      input:valid + .label-mail .content-mail {
        font-size: 1em;
      }
    }
    .fascettaArancione {
      top: 18%;
      left: -6%;
      width: 17%;
      p {
        font-size: 1.5em;
      }
    }
    .fascettaRossa {
      width: 25%;
      left: -15%;
      top: 19%;

      p {
        font-size: 1.5em;
      }
    }
    .fascettaBlu {
      top: 18%;
      left: -14%;

      p {
        font-size: 1.5em;
      }
    }
    .start {
      font-size: 3.3em;
    }
  }
}

@media (min-width: 1300px) {
  .cartolina-wrapper {
    h1 {
      font-size: 2em;
    }
    .logo {
      top: 7%;
    }
    .domande p {
      font-size: 1.8em;
    }
    .domande small {
      top: 48%;
    }
    .si {
      font-size: 4.3em;
    }
    .no {
      font-size: 4.3em;
    }
    .fascettaArancione {
      p {
        font-size: 1.3em;
      }
    }
    .fascettaRossa {
      p {
        font-size: 1.3em;
      }
    }
    .fascettaBlu {
      p {
        font-size: 1.3em;
      }
    }
    .foot {
      top: 55%;
    }
    .start {
      font-size: 3em;
    }
  }
  .progressbar li {
    width: 10%;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="text"] {
    font-size: 16px;
  }
}
</style>

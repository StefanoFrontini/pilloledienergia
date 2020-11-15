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
          name="check-up-energetico"
          method="post"
          v-on:submit.prevent="handleSubmit"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field"/></label>
          </p>
          <div class="cartolina-container">
            <div class="cartolina-wrapper">
              <g-image
                class="logo"
                src="~/assets/logo-pillole-di-energia.svg"
                alt="logo pillole di energia"
                width="200"
              />
              <h1>CHECK-UP ENERGETICO GRATUITO</h1>
              <div class="domande">
                <transition appear name="fade" mode="out-in">
                  <div v-if="passo === 1" :key="passo">
                    <g-image class="img" src="~/assets/check-up.jpeg" alt="" />
                    <p>
                      Compila i campi e inizia <strong>SUBITO</strong><br />il
                      tuo check-up energetico
                      <strong>GRATUITO</strong>,<br />riceverai il risultato via
                      mail!
                    </p>
                    <div class="start">
                      <button @click.prevent="next()">start*</button>
                    </div>
                    <div class="nome">
                      <input
                        type="text"
                        name="name"
                        required
                        v-model="formData.name"
                      />
                      <label for="name" class="label-name">
                        <span class="content-name">nome</span></label
                      >
                    </div>
                    <div class="mail">
                      <input
                        type="email"
                        name="email"
                        v-model="formData.email"
                        required
                      />
                      <label class="label-mail" for="email"
                        ><span class="content-mail"
                          >indirizzo @ valido</span
                        ></label
                      >
                    </div>
                  </div>

                  <div v-if="passo === 2" :key="passo + 1">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaArancione">
                      <p>forniture<br />trasparenti</p>
                    </div>
                  </div>

                  <div v-if="passo === 3" :key="passo + 2">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                  </div>

                  <div v-if="passo === 4" :key="passo + 3">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                  </div>

                  <div v-if="passo === 5" :key="passo + 4">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
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
                  </div>

                  <div v-if="passo === 6" :key="passo + 5">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaRossa">
                      <p>evitare<br />conguagli</p>
                    </div>
                  </div>

                  <div v-if="passo === 7" :key="passo + 6">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaArancione">
                      <p>forniture<br />trasparenti</p>
                    </div>
                  </div>

                  <div v-if="passo === 8" :key="passo + 7">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaRossa">
                      <p>come evitare<br />costi extra</p>
                    </div>
                  </div>

                  <div v-if="passo === 9" :key="passo + 8">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaBlu">
                      <p>come evitare<br />di perdere tempo</p>
                    </div>
                  </div>

                  <div v-if="passo === 10" :key="passo + 9">
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

                    <div class="si">
                      <button @click.prevent="si">SI</button>
                    </div>
                    <div class="no">
                      <button @click.prevent="no">NO</button>
                    </div>
                    <div class="fascettaBlu">
                      <p>come evitare<br />di perdere tempo</p>
                    </div>
                  </div>

                  <div v-if="passo === 11" :key="passo + 10">
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

                    <div class="si">
                      <button @click.prevent="si, $refs.submitInputSi.click()">
                        SI</button
                      ><br />
                      <input
                        type="submit"
                        ref="submitInputSi"
                        style="display:none"
                      />
                    </div>
                    <div class="no">
                      <button @click.prevent="no, $refs.submitInputNo.click()">
                        NO</button
                      ><br />
                      <input
                        type="submit"
                        ref="submitInputNo"
                        style="display:none"
                      />
                    </div>
                    <div class="fascettaBlu">
                      <p>verde dentro<br />belli fuori</p>
                    </div>
                  </div>
                </transition>
              </div>
              <div class="foot">
                <p>
                  <span class="pill"
                    >pillole di energia © {{ new Date().getFullYear() }}</span
                  >
                  <br /><strong
                    >Stefano Frontini consulente energetico per ristoranti e
                    hotel<br />EMAIL stefano.frontini@con.repower.com</strong
                  >
                </p>
                <p>
                  *Cliccando su <strong>start</strong> dai il consenso all'uso
                  dei dati. <br />I tuoi dati sono al sicuro. Leggi l'<g-link
                    to="/privacy"
                    >informativa privacy</g-link
                  >.
                </p>
              </div>
            </div>
          </div>

          <br />
          <div v-for="(message, index) in messages" :key="index" class="error">
            {{ message }}
          </div>
          <div class="result">
            <p>
              Il numero di si è {{ formData.si }}, il numero di no è
              {{ formData.no }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      passo: 1,
      formData: {
        name: "",
        email: "",
        consenso: "",
        domanda1: "",
        domanda2: "",
        domanda3: "",
        domanda4: "",
        domanda5: "",
        domanda6: "",
        domanda7: "",
        domanda8: "",
        domanda9: "",
        si: 0,
        no: 0,
      },
      messages: [],
    };
  },

  methods: {
    prev() {
      this.passo--;
    },
    next() {
      if (this.passo === 1) {
        this.formData.consenso = "si";
      }
      this.passo++;
    },
    si() {
      const tick = `domanda${this.passo - 1}`;
      this.formData[tick] = "si";
      this.formData.si++;
      if (this.passo < 11) {
        this.passo++;
      } else {
        return;
      }
    },
    no() {
      const tick = `domanda${this.passo - 1}`;
      this.formData[tick] = "no";
      this.formData.no++;
      if (this.passo < 11) {
        this.passo++;
      } else {
        return;
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
  position: relative;
  max-width: 900px;
  text-align: center;

  .img {
    width: 100%;
  }
  p {
    width: 100%;
  }
  .logo {
    //width: 100%;
    position: absolute;
    top: 2%;
    left: 40%;
    z-index: 10;
  }
  h1 {
    width: 100%;
    position: absolute;
    top: 10%;
    z-index: 10;
  }
  .domande p {
    position: absolute;
    top: 18%;
    font-size: 1.5em;
    line-height: 1.5em;
    span {
      font-weight: bold;
    }
  }
  .domande p strong {
    color: $primaryColor;
  }
  .domande small {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;
  }
  .nome {
    height: 70px;
    width: 23%;
    position: absolute;
    top: 37%;
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
    }
    input:focus + .label-name .content-name,
    input:valid + .label-name .content-name {
      transform: translateY(-100%);
      font-size: 1em;
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
    top: 37%;
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
    }
    input:focus + .label-mail .content-mail,
    input:valid + .label-mail .content-mail {
      transform: translateY(-100%);
      font-size: 1em;
      color: $primaryColor;
    }
    input:focus + .label-mail::after,
    input:valid + .label-mail:after {
      transform: translateX(0%);
      transition: all 0.3s ease;
    }
  }

  .start {
    position: absolute;
    top: 38%;
    left: 73.5%;
    button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      cursor: pointer;
      color: white;
      font-size: 3em;
      font-style: italic;
      font-family: "GFS Didot", serif;
      font-weight: bold;
      outline: none;
    }
  }
  .si {
    position: absolute;
    top: 38.5%;
    left: 58%;
    button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      cursor: pointer;
      color: white;
      font-size: 3.5em;
      font-weight: bold;
      outline: none;
    }
  }
  .no {
    position: absolute;
    top: 38.5%;
    left: 32%;
    button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      cursor: pointer;
      color: white;
      font-size: 3.5em;
      font-weight: bold;
      outline: none;
    }
  }
  .fascettaArancione {
    position: absolute;
    top: 19%;
    left: 5.5%;
    width: 10%;
    p {
      font-size: 1em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .fascettaRossa {
    position: absolute;
    top: 19%;
    left: 5.5%;
    width: 11%;
    p {
      font-size: 1em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .fascettaBlu {
    position: absolute;
    top: 19%;
    left: 3%;
    width: 15%;
    p {
      font-size: 1em;
      transform: rotate(315deg);
      line-height: 0.8em;
      color: white;
      font-weight: bold;
    }
  }
  .foot {
    width: 100%;
    position: absolute;
    bottom: 30%;
    .pill {
      text-transform: uppercase;
      color: $primaryColor;
      font-size: 0.8em;
      font-weight: bold;
    }
  }
}

.container-progressbar {
  width: 100%;
  height: 70px;
  z-index: 1;
  margin-bottom: 2em;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 10%;
  position: relative;
  text-align: center;
  list-style-type: none;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
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
  width: 90%;
}
</style>

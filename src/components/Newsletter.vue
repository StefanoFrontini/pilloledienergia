<template>
  <div class="page-newsletter">
    <div class="news-section">
      <h2 class="news-title">Newsletter</h2>
      <p>Inserisci il tuo <span class="grassetto">indirizzo email</span>.</p>
      <p>Ogni mese riceverai una newsletter con:</p>
      <ul>
        <li>
          <p>
            Consigli per gestire al meglio le forniture di energia elettrica e
            gas della tua azienda;
          </p>
        </li>
        <li>
          <p>
            Informazioni sul mondo dell'energia, la sostenibilità e la mobilità
            elettrica;
          </p>
        </li>
        <li>
          <p>Eventi interessanti e occasioni in cui ci possiamo incontrare;</p>
        </li>
        <li>
          <p>Promozioni speciali.</p>
        </li>
      </ul>

      <div class="form-section">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
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
                  I tuoi dati sono al sicuro (qui c'è l'<g-link to="/privacy"
                    >informativa</g-link
                  >)
                </p>
              </div>
            </div>
          </div>
          <button class="btn-contact" type="submit">ISCRIVITI</button>
        </form>
        <br />
        <div v-for="(message, index) in messages" :key="index" class="error">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: { email: "" },
      messages: [],
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      this.messages = [];
      const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.formData.email.match(mailFormat)) {
        this.messages.push("E' necessario inserire un indirizzo email valido!");
      }
      if (this.formData.consenso !== true) {
        this.messages.push("E' necessario dare il consenso all'uso dei dati!");
      }
      if (
        this.formData.email.match(mailFormat) &&
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
  },
};
</script>

<style scoped lang="scss">
.page-newsletter {
  display: flex;
  justify-content: center;
  color: white;
}

.news-section {
  text-align: left;
  margin-top: 2em;
  padding: 1em;

  background-size: cover;
  background-position: center center;
}

.form-section {
  width: 100%;
  margin-top: 3em;
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
  width: 60%;
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

.btn-contact {
  font-family: "radnika-medium";
  padding: 1em 0;
  font-weight: bold;
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

.btn-contact:hover {
  background-color: #ffad3b;
}

.news-title {
  margin-bottom: 1.8em;
}

.privacy {
  display: flex;
  justify-content: flex-start;
}

.privacy-p {
  font-size: 0.75rem;
  margin-top: 1.2em;
}

.error {
  color: red;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .zoom {
    font-size: 16px;
  }
  .btn-contact {
    width: 40%;
  }
}
</style>

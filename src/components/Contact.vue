<template>
  <div class="form-section">
    <form
      name="check-up"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field"/></label>
      </p>

      <div class="sender-info">
        <div>
          <label for="name" class="label">Nome</label>
          <input type="text" name="name" v-model="formData.name" />
        </div>
        <div>
          <label class="tel" for="tel">Telefono</label>
          <input type="tel" name="tel" v-model="formData.tel" />
        </div>
        <div>
          <label class="email" for="email">Email</label>
          <input type="email" name="email" v-model="formData.email" />
        </div>
      </div>

      <div class="message-wrapper">
        <label class="message" for="message">Messaggio</label>
        <textarea name="message" v-model="formData.message" rows="5"></textarea>
      </div>

      <div>
        <label class="consenso" for="consenso">Consenso all'uso dei dati</label>
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

      <div class="button-wrapper">
        <button class="btn-contact" type="submit">INVIA</button>
      </div>
      <br />
      <div v-for="(message, index) in messages" :key="index" class="error">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: { email: "", tel: "" },
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

      if (this.formData.email == "" && this.formData.tel == "") {
        this.messages.push(
          "E' necessario inserire il numero di telefono o un indirizzo email!"
        );
      }

      if (this.formData.consenso !== true) {
        this.messages.push("E' necessario dare il consenso all'uso dei dati!");
      }
      if (
        (this.formData.email !== "" || this.formData.tel !== "") &&
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
          .then(() => this.$router.push("/grazie"))
          .catch((error) => alert(error));
      }
    },
  },
  beforeMount() {
    this.formData.message =
      "Vorrei essere contattato per eseguire un check-up energetico completo";
  },
};
</script>

<style scoped lang="scss">
.form-section {
  display: flex;
  justify-content: center;
  width: 90vw;
}

.label,
.consenso,
.email,
.message,
.tel {
  font-family: "radnika-medium", sans-serif;
  font-weight: bold;
  display: block;
  margin-top: 1.2em;
}

.privacy {
  display: flex;
  justify-content: flex-start;
}

.privacy-p {
  font-size: 0.75rem;
  margin-top: 1.2em;
}

input[type="checkbox"] {
  width: 20px;
}

input,
textarea {
  border: 1px solid #707070;
  width: 70vw;
  max-width: 600px;
  padding: 1em;
  border-radius: 0.5em;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  text-align: center;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.btn-contact {
  padding: 1em 0;
  font-weight: bold;
  width: 30%;
  border-radius: 0.5em;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;
  margin-top: 2em;
  max-width: 200px;
  background-color: #f78411;
}

.btn-contact:hover {
  background-color: #ffad3b;
}
.error {
  color: red;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  textarea {
    font-size: 16px;
  }
}
</style>

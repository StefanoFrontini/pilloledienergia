<template>
  <div class="page">
    <div v-scrollanimation class="box">
      <font-awesome :icon="[`${vantaggi.pre}`, `${vantaggi.name}`]" size="3x" />
      <p class="vantaggi-titolo">{{ vantaggi.title }}</p>
      <p class="vantaggi-text">{{ vantaggi.text }}</p>
      <a
        v-if="vantaggi.title === 'report periodici'"
        class="button"
        href="/report-periodico.pdf"
        download
        >SCARICA IL REPORT</a
      >
      <g-link
        v-if="vantaggi.title === 'competenza'"
        class="button"
        to="/chi-sono/"
        >Chi sono</g-link
      >
      <a
        v-if="vantaggi.title === 'no conguagli'"
        class="button"
        href="https://youtu.be/x-44ZOc1rzo"
        target="_blank"
        rel="noopener"
        >GUARDA IL VIDEO</a
      >
      <g-link
        v-if="vantaggi.title === 'fornitura sempre a mercato'"
        class="button"
        to="/mercato/"
        >Mercati energetici</g-link
      >
      <a
        v-if="vantaggi.title === 'no extra tasse'"
        class="button"
        href="https://youtu.be/oAyv6FSgYXE"
        target="_blank"
        rel="noopener"
        >GUARDA IL VIDEO</a
      >
      <g-link
        v-if="vantaggi.title === 'consulenza mobilità elettrica'"
        class="button"
        to="/stazioni-ricarica-veicoli-elettrici/"
        >SCOPRI LE STAZIONI PIU' VICINE</g-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["vantaggi"],
};
</script>

<style scoped lang="scss">
.page {
  text-align: left;
  margin-bottom: 3em;
}

.box {
  width: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 40px;
  color: black;
}

.vantaggi-text {
  font-size: 0.9em;
}

.vantaggi-titolo {
  letter-spacing: 3px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
  font-family: "radnika-medium", sans-serif;
}

a.button {
  font-family: "radnika-medium", sans-serif;
  background: $primaryColor;
  padding: 0.4em;
  text-align: center;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
}

.button:hover {
  background-color: #ffad3b;
}
</style>

<template>
  <div class="page">
    <div v-scrollanimation class="box">
      <font-awesome :icon="[`${vantaggi.pre}`, `${vantaggi.name}`]" size="3x" />
      <p class="vantaggi-titolo">{{ vantaggi.title }}</p>
      <p class="vantaggi-text">{{ vantaggi.text }}</p>
      <a
        v-if="vantaggi.title === 'no costi nascosti'"
        class="button"
        href="https://www.repower.com/it/"
        target="_blank"
        rel="noopener"
        >SITO REPOWER</a
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

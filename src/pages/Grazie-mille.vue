<template>
  <Layout>
    <div class="page">
      <div>
        <h1>Grazie!</h1>
        <p>Riceverai a breve una email con il risultato!</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Grazie-mille | Pillole di Energia",
      titleTemplate: "%s",
    };
  },
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <Layout>
    <div class="wrapper-404">
      <h1>Pagina non trovata</h1>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Pagina non trovata (404) | Pillole di Energia",
      titleTemplate: "%s",
    };
  },
};
</script>

<style scoped>
.wrapper-404 {
  display: flex;
  justify-content: center;  
}
</style>

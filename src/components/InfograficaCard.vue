<template>
  <div class="page-numeri">
    <p class="date">{{ infografica.created_at }}</p>
    <h2 class="title">{{ infografica.title }}</h2>
      <g-image v-if="infografica.cover" :src="infografica.cover" style="object-fit: cover; width:100%;" :alt="infografica.alt" />

    <p class="description">{{ infografica.description }}</p>
    <div class="continua">
    <g-link :to="infografica.path">Continua...</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infografica"],
};
</script>

<style scoped>
.page-numeri {
  margin-bottom: 3em;
  width: 95%;
  max-width: 700px;
}

.date {
  text-transform: uppercase;
  margin-bottom: -1em;
  text-align: center;
  font-size: 0.5em;
}

.title {
  width: 100%;
  max-width: 700px;
  font-size: 1.1em;

  margin-bottom: 1em;
  text-align: left;
}

.description {
  text-align: left;
}



.author{
  text-align:center;
}

.continua{
  display: flex;
  justify-content: center;
}
</style>

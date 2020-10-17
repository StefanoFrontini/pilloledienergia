<template>
  <div class="page">
    <p class="date">{{ episode.created_at }}</p>      
      <g-image v-if="episode.cover" :src="episode.cover" style="object-fit: cover; width:100%;" :alt="episode.alt" />
    
    <p>{{ episode.description }}</p>
    <div class="continua">
    <g-link :to="episode.path">Continua...</g-link>
    </div> 
  </div>
</template>

<script>
export default {
  props: ["episode"],
};
</script>

<style scoped>
.page {
  text-align: left;
  margin-bottom: 3em;
}

.date {
  text-transform: uppercase;
  margin-bottom: 2em;
  text-align: center;
  font-size: 0.5em;
}

.title {
  width: 100%;
  max-width: 700px;

  margin-bottom: 1em;
}



.author{
  text-align:center;
}

.continua{
  display: flex;
  justify-content: center;
}
</style>

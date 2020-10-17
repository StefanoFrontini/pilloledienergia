<template>
  <div class="page">
    <p class="date">{{ post.created_at }}</p>
      <h3 class="title">{{ post.title }}</h3>
      <g-image v-if="post.cover" :src="post.cover" style="object-fit: cover; width:100%;" :alt="post.alt" /> 
    <p class="author">di {{ post.author }}</p>
    <p>{{ post.description }}</p>
    <div class="continua">
    <g-link :to="post.path">Continua...</g-link>
    </div> 
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.page {
  text-align: left;
  margin-bottom: 3em;
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

  margin-bottom: 1em;
}



.author{
  text-align:center;
  font-size: 0.5em;
}

.continua{
  display: flex;
  justify-content: center;
}
</style>

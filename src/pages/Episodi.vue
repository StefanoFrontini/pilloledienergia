<template>
  <Layout>
    <h1 class="blog-title"><span>Episodi</span></h1>
    <div class="post-wrapper">
      <div class="post">
        <EpisodeCard
          v-for="edge in $page.episodes.edges"
          :key="edge.node.id"
          :episode="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query {
  episodes: allEpisode(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}) {
    edges{
      node{
        id
        title
        description
        cover
        alt
        path
        created_at (format: "D MMMM YYYY", locale: "it")
        author
      }
    }

  }

}


</page-query>

<script>
import EpisodeCard from "~/components/EpisodeCard.vue";
import Newsletter from "~/components/Newsletter.vue";

export default {
  components: {
    EpisodeCard,
  },

  metaInfo: {
    title: "Episodi | Pillole di Energia",
    titleTemplate: "%s",
  },
};
</script>

<style scoped lang="scss">
.blog-title {
  text-align: center;
  font-size: 2em;
  span {
    border-left: 0.2em solid $primaryColor;
    border-right: 0.2em solid $primaryColor;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
}

.post-wrapper {
  display: flex;
  justify-content: center;
}

.post {
  width: 100%;
  padding: 1em;
  max-width: 900px;
}
</style>

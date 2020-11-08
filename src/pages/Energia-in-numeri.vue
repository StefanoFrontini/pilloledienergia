<template>
  <Layout>
    <h1 class="blog-title">Energia in numeri</h1>
    <div class="post-wrapper">
      <div class="post">
        <InfograficaCard
          v-for="edge in $page.infografiche.edges"
          :key="edge.node.id"
          :infografica="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query {
  infografiche: allInfografica(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}) {
    edges{
      node{
        id
        title
        description
        path
        created_at (format: "D MMMM YYYY", locale: "it")
        author
      }
    }

  }

}


</page-query>

<script>
import InfograficaCard from "~/components/InfograficaCard.vue";

export default {
  components: {
    InfograficaCard,
  },

  metaInfo: {
    title: "Energia in numeri | Pillole di Energia",
    titleTemplate: "%s",
  },
};
</script>

<style scoped>
.blog-title {
  text-align: center;
  font-size: 1.5em;
}

.post-wrapper {
  display: flex;
  justify-content: center;
}

.post {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

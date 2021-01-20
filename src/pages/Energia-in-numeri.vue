<template>
  <Layout>
    <h1 class="blog-title"><span>Energia in numeri</span></h1>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

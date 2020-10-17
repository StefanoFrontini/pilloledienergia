<template>
  <Layout>
    <div class="tag-wrapper">
      <div>
        <h1>Articoli riguardanti: {{ $page.tag.id }}</h1>
        <p>{{ $page.tag.belongsTo.totalCount }} articoli in totale</p>
        <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Tag($id: ID!){
  tag(id: $id){
    id
    belongsTo{
      totalCount
      edges{
        node{
          ... on Post {
            title
            path
          }
        }
      }
    }
  }
}


</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Articoli riguardanti: ${this.$page.tag.id}`,
      titleTemplate: '%s',
    };
  },
};
</script>

<style scoped>
.tag-wrapper {
  display: flex;
  justify-content: center;
  padding: 0 1em 0 1em;
}
</style>

<template>
  <Layout>
    <div class="page-blog">
      <h1 class="blog-title"><span>Blog</span></h1>
      <div class="post-wrapper">
        <div class="post">
          <PostCard
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query {
  posts: allPost(sort:{by:"created_at", order: DESC}, filter: { published: { eq: true }}) {
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
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },

  metaInfo: {
    title: "Blog | Pillole di Energia",
    titleTemplate: "%s",
  },
};
</script>

<style scoped lang="scss">
.page-blog {
  margin: 0 auto;
  max-width: 1200px;
}

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
  width: 95%;
}

@media (min-width: 750px) {
  .post {
    width: 80%;
  }
}

@media (min-width: 1200px) {
  .post {
    width: 60%;
  }
}
</style>

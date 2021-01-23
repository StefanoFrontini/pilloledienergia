<template>
  <Layout>
    <div class="post-container">
      <div class="page">
        <p class="date">{{ $page.post.created_at }}</p>
        <h1 class="title">{{ $page.post.title }}</h1>
        <p class="author">di {{ $page.post.author }}</p>

        <div class="tags">
          <div v-for="tag in $page.post.tags" :key="tag.id">
            <h6 class="tag">
              <g-link
                :to="tag.path"
                :style="`color:${tag.color}; text-decoration: none`"
                >{{ tag.id }}</g-link
              >
            </h6>
          </div>
        </div>
        <g-image
          v-if="$page.post.cover"
          :src="$page.post.cover"
          style="object-fit: cover; width:100%;"
          :alt="$page.post.alt"
        />

        <div class="content">
          <VueRemarkContent />
        </div>
        <CheckUp />
        <SocialSharing
          :title="this.$page.post.title"
          :description="this.$page.post.description"
          :url="this.$page.post.path"
          :tags="tags"
        />
        <h5 class="torna">
          Torna a: <span><g-link to="/blog">Blog</g-link></span>
        </h5>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Post($id: ID!) {
  post(id: $id){
    title
    author
    path
    cover
    alt
    created_at (format: "D MMMM YYYY", locale: "it")
    description
    tags{
      id
      color
      path
    }
  }

}


</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

<script>
import SocialSharing from "~/components/SocialSharing.vue";
import CheckUp from "~/components/CheckUpComponentP.vue";

export default {
  components: {
    SocialSharing,
    CheckUp,
  },
  data() {
    return {
      formData: {},
      tags: "",
    };
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title}`,
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content: `${this.$page.post.description}`,
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: `${this.$page.post.title}` },
        {
          property: "og:description",
          content: `${this.$page.post.description}`,
        },
        { property: "og:url", content: `${this.postUrl}` },
        {
          property: "article:published_time",
          content: `${this.$page.post.created_at}`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.$page.post.title}` },
        {
          name: "twitter:description",
          content: `${this.$page.post.description}`,
        },
        { name: "twitter:creator", content: `${this.$page.post.author}` },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },

  computed: {
    ogImageUrl() {
      return (
        `${this.$page.post.cover.src}` ||
        `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`
      );
    },
    postUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let postPath = this.$page.post.path;

      return `${siteUrl}${postPath}`;
    },
  },
  mounted() {
    let tag;
    const x = [];
    for (tag of this.$page.post.tags) {
      x.push(tag.id);
      this.tags = x.toString().replace(/\s/g, "");
    }
  },
};
</script>

<style scoped>
.post-container {
  display: flex;
  justify-content: center;
}

.page {
  text-align: left;
  width: 100%;
  max-width: 900px;
}

.date,
.author {
  text-align: center;
  font-size: 0.5em;
}

.author {
  margin-top: 3em;
}

.date {
  text-transform: uppercase;
  margin-bottom: -1.3em;
}

.title {
  margin-bottom: -0.6em;
  text-align: left;
  font-size: 1.5em;
  padding-left: 1em;
  padding-right: 1em;
}
.content {
  text-align: left;
  padding: 1em;
}
.tags {
  display: flex;
  justify-content: center;
}
.tag {
  margin: 1em;
  padding: 0.2em;
}

.torna {
  text-align: center;
}

.torna span {
  margin-left: 1em;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .zoom {
    font-size: 16px;
  }
}
</style>

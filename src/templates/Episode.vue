<template>
  <Layout>
    <div class="post-container">
      <div class="page">
        <p class="date">{{ $page.episode.created_at }}</p>
        <h1 class="title">{{ $page.episode.title }}</h1>
        <div class="content">
          <VueRemarkContent />
        </div>
        <CheckUp />
        <SocialSharing
          :title="this.$page.episode.title"
          :description="this.$page.episode.description"
          :url="this.$page.episode.path"
        />
        <h5 class="torna">
          Torna a:
          <span
            ><g-link to="/episodi"
              >Impara qualcosa di nuovo sull'energia</g-link
            ></span
          >
        </h5>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Episode($id: ID!) {
  episode(id: $id){
    title
    author
    path
    cover
    alt
    created_at (format: "D MMMM YYYY", locale: "it")
    description
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
    };
  },
  metaInfo() {
    return {
      title: `${this.$page.episode.title}`,
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content: `${this.$page.episode.description}`,
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: `${this.$page.episode.title}` },
        {
          property: "og:description",
          content: `${this.$page.episode.description}`,
        },
        { property: "og:url", content: `${this.postUrl}` },
        {
          property: "article:published_time",
          content: `${this.$page.episode.created_at}`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.$page.episode.title}` },
        {
          name: "twitter:description",
          content: `${this.$page.episode.description}`,
        },
        { name: "twitter:creator", content: `${this.$page.episode.author}` },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },

  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
    postUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let postPath = this.$page.episode.path;

      return `${siteUrl}${postPath}`;
    },
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

.date {
  text-align: center;
  font-size: 0.5em;
}

.date {
  text-transform: uppercase;
  margin-bottom: 1em;
}

.title {
  margin-bottom: 1em;
  text-align: left;
  font-size: 1.5em;
  padding-left: 1em;
  padding-right: 1em;
}
.content {
  text-align: left;
  padding: 1em;
}

.torna {
  text-align: center;
}

.torna span {
  margin-left: 0.5em;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .zoom {
    font-size: 16px;
  }
}
</style>

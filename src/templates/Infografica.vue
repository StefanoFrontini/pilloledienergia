<template>
  <Layout>
    <div class="post-container">
      <div class="page">
        <p class="date">{{ $page.infografica.created_at }}</p>
        <h1 class="title">{{ $page.infografica.title }}</h1>
        <div class="content">
          <VueRemarkContent />
        </div>
        <CheckUp />
        <SocialSharing
          :title="this.$page.infografica.title"
          :description="this.$page.infografica.description"
          :url="this.$page.infografica.path"
        />
        <h5 class="title">
          Torna a:
          <span
            ><g-link to="/energia-in-numeri">L'energia in numeri</g-link></span
          >
        </h5>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Infografica($id: ID!) {
  infografica(id: $id){
    title
    author
    path
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
      title: `${this.$page.infografica.title}`,
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content: `${this.$page.infografica.description}`,
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: `${this.$page.infografica.title}` },
        {
          property: "og:description",
          content: `${this.$page.infografica.description}`,
        },
        { property: "og:url", content: `${this.postUrl}` },
        {
          property: "article:published_time",
          content: `${this.$page.infografica.created_at}`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.$page.infografica.title}` },
        {
          name: "twitter:description",
          content: `${this.$page.infografica.description}`,
        },
        {
          name: "twitter:creator",
          content: `${this.$page.infografica.author}`,
        },
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
      let postPath = this.$page.infografica.path;

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
  margin-bottom: -1em;
}

.title {
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.5em;
}

.title span {
  margin-left: 1em;
}

.content {
  text-align: left;
  padding: 1em;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .zoom {
    font-size: 16px;
  }
}
</style>

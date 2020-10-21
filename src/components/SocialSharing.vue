<template>
  <div class="page-socials">
    <p class="grassetto">Condividi:</p>
    <div class="social">
      <social-sharing
        :url="postUrl"
        :title="title"
        :description="description"
        :quote="description"
        :hashtags="tags"
        inline-template
      >
        <div>
          <a href="">
            <network network="facebook">
              <font-awesome
                :icon="['fab', 'facebook']"
                :style="{
                  cursor: 'pointer',
                  'margin-right': '2em',
                  'font-size': '2em',
                }"
              />
            </network>
          </a>

          <a href="">
            <network network="linkedin">
              <font-awesome
                :icon="['fab', 'linkedin']"
                :style="{
                  cursor: 'pointer',
                  'font-size': '2em',
                  'margin-right': '2em',
                }"
              />
            </network>
          </a>
          <a href="">
            <network network="twitter">
              <font-awesome
                :icon="['fab', 'twitter']"
                :style="{ cursor: 'pointer', 'font-size': '2em' }"
              />
            </network>
          </a>
        </div>
      </social-sharing>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
export default {
  props: {
    title: String,
    description: String,
    url: String,
    tags: String,
  },
  computed: {
    postUrl() {
      return `${this.$static.metadata.siteUrl}/${this.url}`;
    },
  },
};
</script>

<style scoped>
.page-socials {
  display: flex;
  justify-content: center;
}

.social {
  margin-top: 0.8em;
  margin-left: 3em;
}
</style>

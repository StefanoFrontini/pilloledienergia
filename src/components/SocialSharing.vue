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
          <span class="back">
            <network network="facebook">
              <font-awesome
                :icon="['fab', 'facebook']"
                :style="{
                  cursor: 'pointer',
                  'margin-right': '2em',
                  'font-size': '1.5em',
                }"
              />
            </network>
          </span>

          <span class="back">
            <network network="linkedin">
              <font-awesome
                :icon="['fab', 'linkedin']"
                :style="{
                  cursor: 'pointer',
                  'font-size': '1.5em',
                  'margin-right': '2em',
                }"
              />
            </network>
          </span>

          <span class="back">
            <network network="twitter">
              <font-awesome
                :icon="['fab', 'twitter']"
                :style="{ cursor: 'pointer', 'font-size': '1.5em' }"
              />
            </network>
          </span>
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

<style scoped lang="scss">
.page-socials {
  display: flex;
  justify-content: center;
}

.social {
  margin-top: 0.8em;
  margin-left: 3em;
}

::v-deep .back {
  color: $primaryColor;
}

::v-deep .back:hover {
  color: #ffad3b;
}
</style>

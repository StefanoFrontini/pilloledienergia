<template>
  <div class="icon-page">
    <p><strong>Ci vediamo sui social?</strong></p>
    <div class="icon-wrapper">
      <div class="icons">
        <a
          href="https://www.facebook.com/stefanofrontiniconsulenteenergetico"
          aria-label="facebook"
          target="_blank"
          rel="noopener"
        >
          <font-awesome :icon="['fab', 'facebook']"
        /></a>
        <a
          href="https://www.linkedin.com/in/stefano-frontini/"
          aria-label="linkedin"
          target="_blank"
          rel="noopener"
        >
          <font-awesome :icon="['fab', 'linkedin']"
        /></a>
        <a
          href="https://www.youtube.com/channel/UCR-O1aNnCvdtANr8Yf7h_RQ"
          aria-label="youtube"
          target="_blank"
          rel="noopener"
        >
          <font-awesome :icon="['fab', 'youtube']"
        /></a>
        <a
          href="https://www.instagram.com/pilloledienergia/?hl=it"
          aria-label="instagram"
          target="_blank"
          rel="noopener"
        >
          <font-awesome :icon="['fab', 'instagram']"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
};
</script>

<style scoped>
.icon-page {
  width: 100%;
  text-align: center;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
}

.icon-page h5 {
  text-align: center;
}

.icons {
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  max-width: 600px;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: inherit;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .icons {
    font-size: 1.5em;
  }
}
</style>

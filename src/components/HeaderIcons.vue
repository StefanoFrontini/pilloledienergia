<template>
  <div class="header-icons">
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
      href="https://www.pinterest.it/pilloledienergia/pins/"
      aria-label="pinterest"
      target="_blank"
      rel="noopener"
    >
      <font-awesome :icon="['fab', 'pinterest']"
    /></a>
  </div>
</template>

<script>
export default {
  name: "HeaderIcons",
};
</script>

<style scoped>
.header-icons {
  display: flex;
  justify-content: flex-end;
  font-size: 1em;
  align-items: center;
}

a {
  margin-right: 1.3em;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .icons {
    font-size: 1.5em;
  }
}
</style>

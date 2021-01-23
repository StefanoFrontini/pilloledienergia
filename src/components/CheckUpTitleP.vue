<template>
  <p>
    <strong class="title"
      >CHECK-UP ENERGETICO GRATUITO<br /><span
        >per ristoranti e hotel</span
      ></strong
    >
  </p>
</template>

<style scoped lang="scss">
.title {
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.3em solid $primaryColor;
  border-right: 0.3em solid $primaryColor;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

@media (min-width: 350px) {
  .title {
    font-size: 1em;
  }
}

@media (min-width: 400px) {
  .title {
    font-size: 1.2em;
  }
}

@media (min-width: 550px) {
  .title {
    font-size: 1.6em;
  }
}

@media (min-width: 650px) {
  .title {
    font-size: 1.8em;
  }
}
@media (min-width: 800px) {
  .title {
    font-size: 2em;
  }
}
</style>

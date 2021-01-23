<template>
  <h1>
    <strong class="title"
      >CHECK-UP ENERGETICO GRATUITO<br /><span
        >per ristoranti e hotel</span
      ></strong
    >
  </h1>
</template>

<style scoped lang="scss">
.title {
  font-size: 0.5em;
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
    font-size: 0.55em;
  }
}

@media (min-width: 400px) {
  .title {
    font-size: 0.65em;
  }
}

@media (min-width: 550px) {
  .title {
    font-size: 0.95em;
  }
}

@media (min-width: 650px) {
  .title {
    font-size: 1.1em;
  }
}
@media (min-width: 800px) {
  .title {
    font-size: 1.3em;
  }
}
</style>

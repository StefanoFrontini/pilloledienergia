<template>
  <div class="page">
    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image src="~/assets/due-persone-che-mostrano-un-fonometro.jpg" alt="Stefano Frontini e un dipendente Repower che mostrano un fonometro" />
      </div>

      <div>
        <p class="instagram-text">
          Squadra Repower al lavoro. Obiettivo: ridurre i consumi di energia
          elettrica dei nostri Clienti.
        </p>
      </div>
    </div>
    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image src="~/assets/due-persone-che-mostrano-una-termocamera.jpg" alt="Stefano Frontini e un tecnico Repower che mostrano una termocamera" />
      </div>
      <div>
        <p class="instagram-text">
          Al lavoro per ridurre i rischi di fermo macchina e incendi della
          piccola e media impresa italiana.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin-bottom: 3em;
}

.box {
  width: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 40px;
}
.img-container {
  width: 250px;
  height: 250px;
}
.g-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instagram-text {
  font-size: 0.9em;
}

.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>

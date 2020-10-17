<template>
  <div class="page">
    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image src="~/assets/consulente-energia-repower.jpg" alt="Elettricità e gas online per la tua attività e un personal trainer dell'energia sempre a tua disposizione. In carne e ossa!" />
      </div>

      <div>
        <p class="instagram-text">
          Elettricità e gas online per la tua attività e un personal trainer dell'energia sempre a tua disposizione. In carne e ossa!
        </p>
      </div>
    </div>
    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image src="~/assets/insegna-pastificio-verde-dentro.jpg" alt="Insegna di un pastificio che ha sottoscritto l'offerta Verde Dentro di Repower 100% fonti rinnovabili certificata TUV" />
      </div>
      <div>
        <p class="instagram-text">
          Esperienza impastata con l'amore per le tradizioni e l'ambiente: questi gli ingredienti del pastificio La Ginestra che ha scelto l'energia Verde Dentro. Scopri la sua storia.
        </p>
      </div>
    </div>
    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image src="~/assets/cargo-bike-lambrogio.jpg" alt="Carbo bike Repower Lambrogio" />
      </div>

      <div>
        <p class="instagram-text">
          Il nostro legame con il territorio diventa ancora più forte! Continuiamo a sostenere il @teatromenotti, nel suo progetto di rinascita. Ripartiamo insieme con la "Rassegna all'Imbrunire", ciclo di spettacoli estivi della storica realtà milanese. Ph. Davide Aiello
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

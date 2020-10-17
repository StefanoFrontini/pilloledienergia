<template>
  <div class="page">

    <div v-scrollanimation class="box">
      <div class="img-container">
        <g-image v-if="photo.display_url" :src="photo.display_url" />
      </div>
      <div v-for="edge in photo.edge_media_to_caption.edges" :key="edge.id">
        <p class="instagram-text">{{ edge.node.text }}</p>  
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["photo"]  
};
</script>

<style scoped>
.page {
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
  transform: scale(.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}

</style>

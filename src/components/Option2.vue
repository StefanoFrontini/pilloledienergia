<template>
  <div class="option2" @click="$emit('click-attivita', data.descrizione)">
    <input type="radio" class="radio" :id="data.id" />
    <label for="data.id">{{ data.descrizione }}</label>
    <!-- <label :for="data.id" v-high="{codice: data.descrizione, input: userInput}"></label> -->
  </div>
</template>

<script>
export default {
  props: {    
    data: Object,
    userInput: String,
  },
  methods: { 
    
  },
    directives: {
      high(el, binding) {
        const regex = new RegExp(binding.value.input, 'gi');
        const high = binding.value.codice.replace(regex, `<span class='hl'>${binding.value.input}</span>`);
        el.innerHTML = high;
      }
    },
    
};
</script>

<style scoped>

.option2{
    padding: 12px 24px;
    cursor: pointer;
}

.radio {
    display: none;
}

::v-deep .hl {  
  background-color: rgb(145, 145, 0);
  
}

</style>

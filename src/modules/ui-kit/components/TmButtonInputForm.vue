<template>
  <form @submit.prevent="trySubmit">
    <input type="text" v-model="inputValue">

    <button>{{ actionText }}</button>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props: {
    actionText: {
      type: String,
      required: true
    }
  },

  setup(props, { emit }) {
    const inputValue = ref('');

    const trySubmit = () => {
      if (!inputValue.value) {
        return;
      }
      
      emit('submit', inputValue.value);
      
      inputValue.value = '';
    }

    return {
      inputValue,
      trySubmit,
    }
  }
  
}
</script>

<style lang="scss" scoped>
button {
  color: #B2B2B2;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
}
</style>
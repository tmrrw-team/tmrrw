<template>
  <form class="tm-button-input-form" @submit.prevent="trySubmit">
    <button type="button"
      v-show="isButtonMode"
      @click="switchToInputMode"
    >
      {{ actionText }}
    </button>

    <input type="text"
      ref="inputRef"
      v-show="isInputMode"
      v-model="inputValue"
      @blur="handleInputBlur"
    >
  </form>
</template>

<script>
import { ref, computed } from '@vue/composition-api';

export default {
  props: {
    actionText: {
      type: String,
      required: true
    }
  },

  setup(props, { emit, refs, root }) {
    const inputValue = ref('');
    const isInputMode = ref(false);
    const isButtonMode = computed(() => !isInputMode.value);

    const switchToInputMode = () => {
      isInputMode.value = true;

      root.$nextTick()
        .then(() => {
          refs.inputRef.focus();
        })
    }

    const switchToButtonMode = () => {
      isInputMode.value = false;
    }

    const trySubmit = () => {
      if (inputValue.value) {
        emit('submit', inputValue.value);
        inputValue.value = '';
      } else {
        switchToButtonMode();
      }
    }

    const handleInputBlur = () => {
      trySubmit();
      switchToButtonMode();
    }

    return {
      inputValue,
      isInputMode,
      isButtonMode,
      switchToInputMode,
      switchToButtonMode,
      trySubmit,
      handleInputBlur,
    }
  }
  
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
}

button {
  color: #B2B2B2;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  outline: none;
}

input {
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 0;
  outline: none;
  font-family: 'Roboto', sans-serif;
}
</style>
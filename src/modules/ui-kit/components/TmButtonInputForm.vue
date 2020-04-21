<template>
  <form class="tm-button-input-form"
    @submit.prevent="trySubmit"
    @keydown.esc="handleEscKeydown"
  >
    <button type="button"
      v-show="isButtonMode"
      @click="switchToInputMode"
    >
      <slot />
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
import { ref, computed, nextTick } from 'vue';

export default {
  setup(props, context) {
    const inputValue = ref('');
    const inputRef = ref(null);
    const isInputMode = ref(false);
    const isButtonMode = computed(() => !isInputMode.value);

    const switchToInputMode = () => {
      isInputMode.value = true;

      nextTick()
        .then(() => {
          inputRef.value.focus();
        });
    };

    const switchToButtonMode = () => {
      isInputMode.value = false;
    };

    const handleInputBlur = () => {
      switchToButtonMode();
    };

    const trySubmit = () => {
      if (inputValue.value) {
        context.emit('form-submit', inputValue.value);
        inputValue.value = '';
      } else {
        inputRef.value.blur();
      }
    };

    const handleEscKeydown = () => {
      inputRef.value.blur();
    };

    return {
      inputValue,
      inputRef,
      isInputMode,
      isButtonMode,
      switchToInputMode,
      switchToButtonMode,
      trySubmit,
      handleInputBlur,
      handleEscKeydown
    };
  }
  
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  width: 100%;
}

button {
  color: var(--additional-text-color);
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
}
</style>
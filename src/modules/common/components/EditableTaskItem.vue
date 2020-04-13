<template>
  <span
    class="editable-task-item"
    contenteditable
    ref="contentRef"
    v-text="value"
    @blur="handleBlur"
    @keydown.enter.esc="handleEnterEscKeydown"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
  },

  setup(props, { emit, refs }) {
    const handleBlur = (event) => {
      emit('update', event.target.textContent)
    }

    const handleEnterEscKeydown = () => {
      refs.contentRef.blur();
    }

    return {
      handleBlur,
      handleEnterEscKeydown,
    }
  }

}
</script>

<style lang="scss" scoped>
.editable-task-item {
  outline: none;
}
</style>
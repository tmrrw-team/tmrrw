<template>
  <span>
    <img class="sort-icon" src="./assets/sorticon.svg" alt="Sort Icon" width="11" height="5" />
    <span
      class="editable-task-item"
      contenteditable
      ref="contentRef"
      v-text="value"
      @blur="handleBlur"
      @keydown.enter.esc="handleEnterEscKeydown"
    />
  </span>
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

.sort-icon {
  padding-right: 5px;
  position: relative;
  top: -3px;
  cursor: move;
}
</style>
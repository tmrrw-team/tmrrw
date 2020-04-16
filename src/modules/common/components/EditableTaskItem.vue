<template>
  <span class="editable-task-item">
    <div class="icon-box">
      <SortIcon class="sort-icon" />
    </div>
    
    <div class="text-box">
      <span
        contenteditable
        class="text"
        ref="contentRef"
        v-text="value"
        @blur="handleBlur"
        @keydown.enter.esc="handleEnterEscKeydown"
      />
    </div>
  </span>
</template>

<script>
import { SortIcon } from '@/modules/ui-kit';

export default {
  components: {
    SortIcon,
  },

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
  display: flex;
  align-items: flex-start;
}

.icon-box {
  flex-basis: 20px;
}

.sort-icon {
  position: relative;
  bottom: 1px;
}

.text {
  outline: none;
}

</style>
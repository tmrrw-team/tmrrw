<template>
  <label class="tm-checkbox">
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event)"
    />

    <div class="text">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.tm-checkbox {
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px 1fr;
}

.text {
  margin-left: 5px;
}
</style>

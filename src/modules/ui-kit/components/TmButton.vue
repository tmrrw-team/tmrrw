<template>
  <button
    class="tm-button"
    :class="{ 'text': text }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: Boolean,
    }
  }

}
</script>

<style lang="scss" scoped>
.tm-button {
  font-size: 0.9rem;
  background: none;
  color: var(--accent-color);
  border: none;
  padding: 15px 5px;
  cursor: pointer;
}

.text {
  background: none;
  color: var(--accent-color);
  text-decoration: underline;
}
</style>
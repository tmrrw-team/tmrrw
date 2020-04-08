<template>
  <button class="tm-button" :class="{ 'text': text }">
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
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.text {
  background: none;
  color: var(--accent-color);
  text-decoration: underline;
}
</style>
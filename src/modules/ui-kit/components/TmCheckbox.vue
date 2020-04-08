<template>
  <label class="tm-checkbox">
    <input type="checkbox">

    <span class="text">
      <slot />
    </span>
  </label>  
</template>

<style lang="scss" scoped>
.tm-checkbox {
  cursor: pointer;
}
</style>
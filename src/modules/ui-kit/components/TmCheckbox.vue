<template>
  <label class="tm-checkbox">
    <input type="checkbox">

    <div class="text">
      <slot />
    </div>
  </label>  
</template>

<style lang="scss" scoped>
.tm-checkbox {
  cursor: pointer;
  display: flex;
}

.text {
  margin-left: 5px;
}
</style>
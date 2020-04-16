<template>
  <span class="icon-container">
    <slot />
  </span>  
</template>

<style lang="scss" scoped>
.icon-container {
  /* display: inline-flex; */
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
}
</style>
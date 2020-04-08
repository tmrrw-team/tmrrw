<template>
  <div id="app">
    <header>
      <div class="logo">tmrrw</div>

      <AppNav />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import AppNav from './AppNav';

export default {
  components: {
    AppNav,
  }

}
</script>

<style lang="scss" scoped>
header {
  padding: 18px 48px;
  display: flex;
  align-items: center;
}

.logo {
  position: relative;
  bottom: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
}
</style>

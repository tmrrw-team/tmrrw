<template>
  <div id="app" class="app-layout">
    <main>
      <slot />
    </main>

    <footer>
      <AppNav />
    </footer>
  </div>
</template>

<script>
import AppNav from './AppNav'

export default {
  components: {
    AppNav
  }

}
</script>

<style lang="scss" scoped>
.app-layout {
  background: var(--background-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  padding-bottom: 56px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 600px;
  max-width: 100%;
}
</style>

<template>
  <div id="app" class="app-layout">
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
.app-layout {
  background: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

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

main {
  flex: 1;
  display: flex;
}
</style>

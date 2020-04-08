<template>
  <div id="app">
    <header>
      <div class="logo">tmrrw</div>

      <nav>
        <router-link class="nav-item" #default="{ isExactActive, navigate }" to="/">
          <TmButton :text="!isExactActive" @click="navigate">Today</TmButton>
        </router-link>

        <router-link class="nav-item" #default="{ isExactActive, navigate }" to="/tmrrw">
          <TmButton :text="!isExactActive" @click="navigate">Tomorrow</TmButton>
        </router-link>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { TmButton } from '@/modules/ui-kit';

export default {
  components: {
    TmButton,
  }

}
</script>

<style lang="scss" scoped>
header {
  border: 2px solid red;
  padding: 18px 48px;
  display: flex;
  align-items: center;

  .logo {
    position: relative;
    bottom: 2px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
  }

  nav {
    display: flex;

    .nav-item {
      margin-left: 25px;

      &:first-child {
        margin-left: 40px;
      }
    }
  }
}

main {
  border: 2px solid blue;
}
</style>
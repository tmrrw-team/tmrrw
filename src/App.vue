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
      <router-view />
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

<style lang="scss">
:root {
  --accent-color: #0029FF;
}

body {
  margin: 0;
  font-size: 16px;

  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
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
}
</style>

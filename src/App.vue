<template>
  <div id="app">
    <header>
      <div class="logo">tmrrw</div>

      <nav>
        <router-link to="/">
          Today
        </router-link>

        <router-link to="/tmrrw">
          Tomorrow
        </router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-size: 16px;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  header {
    border: 2px solid red;
    padding: 20px 50px;
    display: flex;
    align-items: center;

    .logo {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: bold;
      font-style: italic;
    }

    nav {
      display: flex;

      a {
        margin-left: 25px;

        &:first-child {
          margin-left: 35px;
        }
      }
    }
  }

  main {
    border: 2px solid blue;
  }
}
</style>

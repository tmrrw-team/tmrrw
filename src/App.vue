<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import { AppLayout } from '@/modules/layout';

export default {
  components: {
    AppLayout
  }

}
</script>

<style lang="scss">
:root {
  --accent-color: #0E5ADD;
  --background-color: #FFFFFF;
  --text-color: #000000;
  --additional-text-color: #B2B2B2;
  --border-color: #B2B2B2;
}

body {
  overflow-y: scroll;
  margin: 0;
  font-size: 16px;
  background: #E5E5E5;
}

body, button, input {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF UI Text", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color)
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: rgb(80, 131, 219);
    --background-color: #222222;
    --text-color: #EEEEEE;
  }

  body {
    background: darkgray;
  }

  input {
    background-color: var(--background-color);
  }
}
</style>

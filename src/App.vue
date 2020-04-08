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
  --accent-color: #0029FF;
}

body {
  margin: 0;
  font-size: 16px;

  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

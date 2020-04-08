<template>
  <nav class="app-nav">
    <router-link class="nav-item" #default="{ isExactActive, navigate }" to="/">
      <TmButton :text="!isExactActive" @click="navigate">Today</TmButton>
    </router-link>

    <router-link class="nav-item" #default="{ isExactActive, navigate }" to="/tmrrw">
      <TmButton :text="!isExactActive" @click="navigate">Tomorrow</TmButton>
    </router-link>
  </nav>
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
.app-nav {
  display: flex;

  .nav-item {
    margin-left: 25px;

    &:first-child {
      margin-left: 40px;
    }
  }
}
</style>

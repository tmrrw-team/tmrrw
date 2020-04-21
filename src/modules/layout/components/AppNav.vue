<template>
  <nav class="app-nav">
    <router-link
      class="nav-item"
      :to="{ name: 'home' }"
    >
      <CheckIcon />
      <div>Today</div>
    </router-link>

    <router-link
      class="nav-item"
      :to="{ name: 'tomorrow' }"
    >
      <PlusIcon />
      <div>In The Future</div>
    </router-link>
  </nav>
</template>

<script>
import CheckIcon from './CheckIcon'
import PlusIcon from './PlusIcon'

export default {
  components: {
    CheckIcon,
    PlusIcon
  }
  
}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  width: 100%;
  border-top: 1px solid var(--border-color);
  background: var(--background-color);

  .nav-item {
    display: block;
    padding: 7px;
    text-align: center;
    font-size: 0.8rem;
    width: 50%;
    outline: none;
    color: var(--text-color);
    text-decoration: none;

    &:first-child {
      border-right: 1px solid var(--border-color);
    }
  }

  .router-link-exact-active {
    color: var(--accent-color);
    font-weight: bold;
  }
}
</style>

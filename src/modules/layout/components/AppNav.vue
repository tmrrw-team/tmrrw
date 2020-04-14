<template>
  <nav class="app-nav">
    <router-link
      class="nav-item"
      :to="{ name: 'home' }"
    >
      <div>
        <img src="../assets/today.svg" alt="Checkbox" width="20" height="20">
      </div>
      <div>
        Today
      </div> 
    </router-link>
    <router-link
      class="nav-item"
      :to="{ name: 'tomorrow' }"
    >
      <div>
        <img src="../assets/tomorrow.svg" alt="Checkbox" width="20" height="20">
      </div>
      <div>
        In The Future
      </div>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  width: 100%;
  border-top: 1px solid var(--border-color);

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

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
        Tomorrow
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  setup() {
    const navData = [
      {
        to: { name: 'home' },
        text: `Today`,
      },
      {
        to: { name: 'tomorrow' },
        text: 'Tomorrow',
      },
    ];

    return {
      navData,
    };
  },

}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  width: 100%;
  border-top: 1px solid gray;

  .nav-item {
    display: block;
    padding: 7px;
    text-align: center;
    font-size: 0.8rem;
    width: 50%;
    outline: none;
    color: black;
    text-decoration: none;

    &:first-child {
      border-right: 1px solid gray;
    }
  }

  .router-link-exact-active {
    color: var(--accent-color);
    font-weight: bold;
  }
}
</style>

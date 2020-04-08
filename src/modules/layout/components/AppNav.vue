<template>
  <nav class="app-nav">
    <router-link
      v-for="(navItem, navItemIndex) of navData"
      :key="navItemIndex"
      class="nav-item"
      #default="{ isExactActive, navigate }"
      :to="navItem.to"
    >
      <TmButton :text="!isExactActive" @click="navigate">
        {{ navItem.text }}
      </TmButton>
    </router-link>
  </nav>
</template>

<script>
import { format } from 'date-fns';
import { TmButton } from '@/modules/ui-kit';

export default {
  components: {
    TmButton,
  },

  setup() {
    const todayText = format(new Date(), 'd MMMM, EEEE');

    const navData = [
      {
        to: { name: 'home' },
        text: `Today, ${todayText}`,
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

  .nav-item {
    margin-left: 25px;

    &:first-child {
      margin-left: 40px;
    }
  }
}
</style>

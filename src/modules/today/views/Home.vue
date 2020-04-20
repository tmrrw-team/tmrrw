<template>
  <!-- v-touch:swipe.left="handleSwipeLeft" -->
  <div class="home">
    <TodayTasks />
    <div class="powered-by" @click="seedTasks">
      <AppLogo class="logo" />
    </div>
  </div>
</template>

<script>
import TodayTasks from '../components/TodayTasks'
import AppLogo from '../components/AppLogo'

export default {
  name: 'Home',
  components: {
    AppLogo,
    TodayTasks
  },
  setup(props, { root }) {
    const handleSwipeLeft = () => {
      root.$router.push({ name: 'tomorrow' })
    }

    return {
      handleSwipeLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 25px;
  width: 100%;
}

.powered-by {
  display: flex;
  align-items: baseline;
  color: var(--additional-text-color);
  font-size: 0.8rem;
  padding: 15px 25px;
}

.logo {
  position: relative;
  top: 1px;
  left: 4px;
}
</style>

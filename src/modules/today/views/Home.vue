<template>
  <!-- v-touch:swipe.left="handleSwipeLeft" -->
  <div class="home">
    <TodayTasks />
    <div class="powered-by" @click="seedTasks">
      Powered by <AppLogo class="logo" />
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
</style>

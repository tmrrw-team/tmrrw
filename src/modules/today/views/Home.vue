<template>
  <!-- v-touch:swipe.left="handleSwipeLeft" -->
  <div class="home"
  >
    <TodayTasks />
  </div>
</template>

<script>
import TodayTasks from '../components/TodayTasks';

export default {
  name: 'Home',
  components: {
    TodayTasks,  
  },
  setup(props, { root }) {
    const handleSwipeLeft = () => {
      root.$router.push({ name: 'tomorrow' })
    }

    return {
      handleSwipeLeft,
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
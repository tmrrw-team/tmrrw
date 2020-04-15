<template>
  <div class="home" v-touch:swipe="swipeHandler">
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
  setup(props, vm) {
    const swipeHandler = (swipe) => {
      if (swipe === 'left') {
        vm.root.$options.router.push({name: 'tomorrow'})
      }
    }

    return {
      swipeHandler
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
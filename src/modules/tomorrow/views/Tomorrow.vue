<template>
  <div class="tomorrow" v-touch:swipe="swipeHandler">
    <TomorrowTasks />
  </div>
</template>

<script>
import TomorrowTasks from '../components/TomorrowTasks';

export default {
  components: {
    TomorrowTasks,  
  },
  setup(props, vm) {
    const swipeHandler = (swipe) => {
      if (swipe === 'right') {
        vm.root.$options.router.push({name: 'home'})
      }
    }

    return {
      swipeHandler
    }
  }
}
</script>

<style lang="scss" scoped>
.tomorrow {
  padding: 10px 25px;
  flex: 1;
  display: flex;
  width: 100%;
}
</style>
<template>
  <!-- v-touch:swipe.right="handleSwipeRight" -->
  <div class="tomorrow"
  >
    <TomorrowTasks />
  </div>
</template>

<script>
import TomorrowTasks from '../components/TomorrowTasks';

export default {
  components: {
    TomorrowTasks  
  },
  setup(props, { root }) {
    const handleSwipeRight = () => {
      root.$router.push({ name: 'home' });
    };

    return {
      handleSwipeRight
    };
  }
};
</script>

<style lang="scss" scoped>
.tomorrow {
  padding: 10px 25px;
  flex: 1;
  display: flex;
  width: 100%;
}
</style>
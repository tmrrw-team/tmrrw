<template>
  <div class="home">
    <TodayTasks />
  </div>
</template>

<script>
import TodayTasks from '../components/TodayTasks';

export default {
  name: 'Home',
  components: {
    TodayTasks,  
  }

}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 25px;
}
</style>
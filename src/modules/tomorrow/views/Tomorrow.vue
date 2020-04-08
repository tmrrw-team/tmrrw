<template>
  <div class="tomorrow">
    <TomorrowTasks />
  </div>
</template>

<script>
import TomorrowTasks from '../components/TomorrowTasks';

export default {
  components: {
    TomorrowTasks,  
  },

}
</script>

<style lang="scss" scoped>
.tomorrow {
  padding: 10px 25px;
}
</style>
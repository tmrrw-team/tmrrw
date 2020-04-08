<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    
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

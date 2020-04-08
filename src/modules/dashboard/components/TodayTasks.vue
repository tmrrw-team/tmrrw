<template>
  <div class="today-tasks">
    <TaskList :data="listData" />
  </div>
</template>

<script>
import { TaskList } from '@/modules/common';

export default {
  components: {
    TaskList,
  },

  setup() {
    const listData = [
      {
        title: 'First task',
        done: false,
      },
      {
        title: 'Second task',
        done: false,
      },
    ];

    return {
      listData,
    }
  }

}
</script>

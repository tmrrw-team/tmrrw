<template>
  <div class="today-tasks">
    <CheckableTaskList :data="todayTasks" />
  </div>
</template>

<script>
import { CheckableTaskList } from '@/modules/common';
import { useTasks } from '@/modules/tasks';

export default {
  components: {
    CheckableTaskList,
  },

  setup() {
    const { todayTasks } = useTasks();

    return {
      todayTasks,
    }
  }

}
</script>

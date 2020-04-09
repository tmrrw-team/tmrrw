<template>
  <div class="tomorrow-tasks">
    <EditableTaskList :data="tomorrowTasks" />
  </div>
</template>

<script>
import { EditableTaskList } from '@/modules/common';
import { useTasks } from '@/modules/tasks';

export default {
  components: {
    EditableTaskList,
  },

  setup() {
    const { tomorrowTasks } = useTasks();

    return {
      tomorrowTasks,
    }
  }
  
}
</script>
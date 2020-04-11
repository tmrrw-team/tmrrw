<template>
  <div class="tomorrow-tasks">
    <EditableTaskList
      :data="tomorrowTasks"
      @add-task="handleAddTask"
    />
  </div>
</template>

<script>
import { EditableTaskList } from '@/modules/common';
import { useTasks, newTask } from '@/modules/tasks';

export default {
  components: {
    EditableTaskList,
  },

  setup() {
    const { tomorrowTasks, addTask } = useTasks();

    const handleAddTask = (title) => {
      const task = newTask(title);
      addTask(task);
    }

    return {
      tomorrowTasks,
      handleAddTask,
    }
  }
  
}
</script>

<style lang="scss" scoped>
.tomorrow-tasks {
  flex: 1;
  display: flex;
}
</style>
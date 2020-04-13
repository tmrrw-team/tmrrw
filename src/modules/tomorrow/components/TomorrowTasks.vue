<template>
  <div class="tomorrow-tasks">
    <EditableTaskList
      :data="tomorrowTasks"
      @add-task="handleAddTask"
      @edit-task="handleEditTask"
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
    const { tomorrowTasks, addTask, updateTask } = useTasks();

    const handleAddTask = (title) => {
      const task = newTask(title);
      addTask(task);
    }

    const handleEditTask = (task) => {
      updateTask(task);
    }

    return {
      tomorrowTasks,
      handleAddTask,
      handleEditTask,
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
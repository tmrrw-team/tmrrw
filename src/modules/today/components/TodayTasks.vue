<template>
  <div class="today-tasks">
    <CheckableTaskList
      :data="todayTasks"
      @toggle-check="toggleCheck"
    />
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
    const { todayTasks, updateTask } = useTasks();

    const toggleCheck = (task) => {
      updateTask({
        ...task,
        done: !task.done,
      })
    } 

    return {
      todayTasks,
      toggleCheck,
    }
  }

}
</script>

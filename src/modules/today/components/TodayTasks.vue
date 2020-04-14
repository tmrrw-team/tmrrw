<template>
  <div class="today-tasks">
    <CheckableTaskList
      :data="todayTasks"
      @toggle-check="toggleCheck"
    />
    <div class="resume">
      You've done {{todayTasks.filter((task) => task.done === true).length}} tasks of {{todayTasks.length}}
    </div>
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
      toggleCheck
    }
  }

}
</script>

<style lang="scss" scoped>
.resume {
  color: var(--additional-text-color);
  font-size: 0.8rem;
}
</style>
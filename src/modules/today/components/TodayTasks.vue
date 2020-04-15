<template>
  <div class="today-tasks">
    <CheckableTaskList
      :data="todayTasks"
      @toggle-check="toggleCheck"
    />
    <div class="resume">
      You've done {{ todayDoneTasks.length }} tasks of {{ todayTasks.length }}
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
    const { todayTasks, todayDoneTasks, updateTask } = useTasks();

    const toggleCheck = (task) => {
      updateTask({
        ...task,
        done: !task.done,
      })
    }

    return {
      todayTasks,
      todayDoneTasks,
      toggleCheck,
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
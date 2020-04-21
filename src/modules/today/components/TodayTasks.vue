<template>
  <div class="today-tasks">
    <CheckableTaskList :data="todayTasks" @toggle-check="toggleCheck" />

    <div class="resume">
      You've done {{ todayDoneTasks.length }} tasks of {{ todayTasks.length }}
    </div>

    <div v-if="pastTasks.length" class="past-tasks">
      <h2>Past tasks</h2>

      <CheckableTaskList :data="pastTasks" @toggle-check="toggleCheck" />
    </div>
  </div>
</template>

<script>
import { CheckableTaskList } from '@/modules/common';
import { useTasks } from '@/modules/tasks';

export default {
  components: {
    CheckableTaskList
  },

  setup() {
    const { todayTasks, todayDoneTasks, pastTasks, updateTask } = useTasks();

    const toggleCheck = task => {
      updateTask({
        ...task,
        done: !task.done
      });
    };

    return {
      todayTasks,
      pastTasks,
      todayDoneTasks,
      toggleCheck
    };
  }
};
</script>

<style lang="scss" scoped>
.resume {
  color: var(--additional-text-color);
  font-size: 0.8rem;
  padding-left: 25px;
}

.past-tasks {
  h2 {
    font-size: 1rem;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 0 25px;
  }
}
</style>

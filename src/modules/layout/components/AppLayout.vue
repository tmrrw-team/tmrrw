<template>
  <div id="app" class="app-layout">
    <main>
      <slot />
    </main>

    <footer>
      <div class="powered-by" @click="seedTasks">
        Powered by
        <img src="../assets/tmrrw.svg" alt="tmrrw" width="38" height="8">
      </div>

      <AppNav />
    </footer>
  </div>
</template>

<script>
import { startOfToday, startOfYesterday } from 'date-fns';
import AppNav from './AppNav';
import { newTask, useTasks } from '@/modules/tasks';

export default {
  components: {
    AppNav,
  },

  setup() {
    const seedTasks = () => {
      const { setTasks } = useTasks();

      const pastTasks = [
        newTask('Task from the past 1', startOfYesterday()),
        newTask('Task from the past 2', startOfYesterday()),
      ]

      const todayTasks = [
        newTask('First task', startOfToday()),
        newTask('Second task', startOfToday()),
        newTask(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit veritatis quasi minus non dignissimos ipsum vel tempore libero sint necessitatibus vero voluptatem ea nemo, esse deserunt! Quasi maxime tempora blanditiis officiis nisi a dolor perferendis distinctio asperiores nulla? Distinctio perferendis odit repellat quae aut architecto fugit nobis sapiente nesciunt.',
           startOfToday(),
        ),
        newTask('Another task', startOfToday()),
      ]

      const tomorrowTasks = [
        newTask('Task from the future 1'),
        newTask('Task from the future 2'),
      ]

      const tasks = [
        ...pastTasks,
        ...todayTasks,
        ...tomorrowTasks,
      ]

      setTasks(tasks)

      location.reload();
    }

    return {
      seedTasks,
    }
  }

}
</script>

<style lang="scss" scoped>
.app-layout {
  background: var(--background-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  padding-bottom: 102px;
}

.powered-by {
  color: var(--additional-text-color);
  font-size: 0.8rem;
  padding: 15px 25px;
  background: linear-gradient(transparent 10%, white 30%);
}

footer {
  position: fixed;
  bottom: 0;
  width: 600px;
  max-width: 100%;
}
</style>

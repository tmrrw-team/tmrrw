<template>
  <div id="app" class="app-layout">
    <header>
      <AppNav />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <img src="../assets/tmrrw.svg" alt="tmrrw" width="76" height="16" @dblclick="seedTasks">
    </footer>
  </div>
</template>

<script>
import { startOfToday } from 'date-fns';
import AppNav from './AppNav';
import { newTask, useTasks } from '@/modules/tasks';

export default {
  components: {
    AppNav,
  },

  setup() {
    const seedTasks = () => {
      const { setTasks } = useTasks();

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
  background: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header {
  padding: 18px 48px;
  display: flex;
  align-items: center;
}

.logo {
  position: relative;
  bottom: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
}

main {
  flex: 1;
  display: flex;
}
</style>

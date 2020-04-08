<template>
  <div class="today-tasks">
    <TaskList :data="listData" />
  </div>
</template>

<script>
import { TaskList } from '@/modules/common';

export default {
  components: {
    TaskList,
  },

  setup() {
    const listData = [
      {
        title: 'First task',
        done: false,
      },
      {
        title: 'Second task',
        done: false,
      },
      {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit veritatis quasi minus non dignissimos ipsum vel tempore libero sint necessitatibus vero voluptatem ea nemo, esse deserunt! Quasi maxime tempora blanditiis officiis nisi a dolor perferendis distinctio asperiores nulla? Distinctio perferendis odit repellat quae aut architecto fugit nobis sapiente nesciunt.',
        done: false,
      },
      {
        title: 'Another task',
        done: false,
      },
    ];

    return {
      listData,
    }
  }

}
</script>

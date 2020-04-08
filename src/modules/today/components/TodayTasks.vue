<template>
  <div class="today-tasks">
    <CheckableTaskList :data="listData" />
  </div>
</template>

<script>
import { CheckableTaskList } from '@/modules/common';
import { newTask } from '@/modules/tasks';

export default {
  components: {
    CheckableTaskList,
  },

  setup() {
    const listData = [
      newTask('First task'),
      newTask('Second task'),
      newTask('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit veritatis quasi minus non dignissimos ipsum vel tempore libero sint necessitatibus vero voluptatem ea nemo, esse deserunt! Quasi maxime tempora blanditiis officiis nisi a dolor perferendis distinctio asperiores nulla? Distinctio perferendis odit repellat quae aut architecto fugit nobis sapiente nesciunt.'),
      newTask('Another task'),
    ];

    return {
      listData,
    }
  }

}
</script>

<template>
  <div class="tomorrow-tasks">
    <EditableTaskList :data="listData" />
  </div>
</template>

<script>
import { EditableTaskList } from '@/modules/common';
import { newTask } from '@/modules/tasks';

export default {
  components: {
    EditableTaskList,
  },

  setup() {
    const listData = [
      newTask('Task from the future 1'),
      newTask('Task from the future 2'),
    ];

    return {
      listData,
    };
  },
  
}
</script>
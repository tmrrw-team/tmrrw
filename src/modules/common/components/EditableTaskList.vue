<template>
  <div class="editable-task-list">
    <ul>
      <li v-for="(item, index) of data" :key="index">
        {{ item.title }}
      </li>
    </ul>

    <form @submit.prevent="tryAddTask">
      <input type="text" v-model="newTaskTitle">
      <button class="add-task">Add task</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
  },

  setup(props, { emit }) {
    const newTaskTitle = ref('');

    const tryAddTask = () => {
      if (!newTaskTitle.value) {
        return;
      }

      emit('add-task', newTaskTitle.value);

      newTaskTitle.value = '';
    }

    return {
      newTaskTitle,
      tryAddTask,
    };
  }

}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 5px 0;
}

.add-task {
  color: #B2B2B2;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
}
</style>
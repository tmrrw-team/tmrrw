<template>
  <div class="editable-task-list">
    <ul>
      <li v-for="(item, index) of data" :key="index">
        {{ item.title }}
      </li>
    </ul>

    <button class="add-task" @click="addTask">Add task</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
  },

  setup() {
    const addTask = () => {
      console.log('TODO: add task')
    }

    return {
      addTask,
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
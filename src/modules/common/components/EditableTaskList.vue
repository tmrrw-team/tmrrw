<template>
  <div class="editable-task-list">
    <ul>
      <li v-for="(item, index) of data" :key="index">
        <EditableTaskItem
          :value="item.title"
          @update="$emit('edit-task', { ...item, title: $event })"  
        />
      </li>
    </ul>

    <TmButtonInputForm @submit="$emit('add-task', $event)">
      <PlusIcon />Add task
    </TmButtonInputForm>
  </div>
</template>

<script>
import { TmButtonInputForm, PlusIcon } from '@/modules/ui-kit';
import EditableTaskItem from './EditableTaskItem';

export default {
  components: {
    TmButtonInputForm,
    PlusIcon,
    EditableTaskItem,
  },

  props: {
    data: {
      type: Array,
      required: true
    },
  },

}
</script>

<style lang="scss" scoped>
.editable-task-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
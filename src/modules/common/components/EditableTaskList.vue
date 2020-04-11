<template>
  <div class="editable-task-list">
    <ul>
      <li v-for="(item, index) of data" :key="index">
        <TmTextInputForm>
          {{ item.title }}
        </TmTextInputForm>
      </li>
    </ul>

    <TmButtonInputForm
      class="add-task-form"
      action-text="Add task"
      @submit="$emit('add-task', $event)"
    />
  </div>
</template>

<script>
import { TmButtonInputForm } from '@/modules/ui-kit';
import { TmTextInputForm } from '@/modules/ui-kit';

export default {
  components: {
    TmButtonInputForm,
    TmTextInputForm,
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
  padding-left: 23px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
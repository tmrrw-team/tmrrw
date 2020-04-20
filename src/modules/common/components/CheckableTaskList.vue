<template>
  <div class="checkable-task-list">
    <ul v-if="data && data.length">
      <li v-for="(item, index) of data" :key="index">
        <TmCheckbox :checked="item.done" @change="$emit('toggle-check', item)">
          {{ item.title }}
        </TmCheckbox>
      </li>
    </ul>

    <p v-else class="no-tasks">No tasks</p>
  </div>
</template>

<script>
import { TmCheckbox } from '@/modules/ui-kit'

export default {
  components: {
    TmCheckbox
  },

  props: {
    data: {
      type: Array,
      required: true
    }
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
  margin: 10px 0;
}

.no-tasks {
  margin: 0;
}
</style>

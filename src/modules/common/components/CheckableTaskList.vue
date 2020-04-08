<template>
  <div class="checkable-task-list">
    <ul>
      <li v-for="(item, index) of data" :key="index">
        <TmCheckbox value="item.done">
          {{ item.title }}
        </TmCheckbox>
      </li>
    </ul>
  </div>
</template>

<script>
import { TmCheckbox } from '@/modules/ui-kit'

export default {
  components: {
    TmCheckbox,
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>

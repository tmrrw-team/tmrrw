<template>
  <ul class="task-list">
    <li v-for="(item, index) of data" :key="index">
      <TmCheckbox value="item.done">
        {{ item.title }}
      </TmCheckbox>
    </li>
  </ul>
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
    }
  }

}
</script>

<style lang="scss" scoped>
.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>

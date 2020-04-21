<template>
  <IconContainer class="sort-icon">
    <img src="../assets/sorticon.svg" alt="Sort Icon" />
  </IconContainer>
</template>

<script>
import IconContainer from './IconContainer';

export default {
  components: {
    IconContainer
  }

};
</script>

<style lang="scss" scoped>
.sort-icon {
  cursor: move;
}
</style>
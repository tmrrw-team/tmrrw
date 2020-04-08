<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    
    <ul class="today-tasks">
      <li>
        <TmCheckbox>Первая задача</TmCheckbox>
      </li>

      <li>
        <TmCheckbox>Вторая задача</TmCheckbox>
      </li>

    </ul>

  </div>
</template>

<script>
import { TmCheckbox } from '@/modules/ui-kit'

export default {
  name: 'Home',
  components: {
    TmCheckbox
  }
}
</script>

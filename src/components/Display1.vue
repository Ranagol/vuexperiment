<template>
  <div>
    <p>Display1</p>
    <p>Number: {{ getterNumber }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Display1',
  computed: {
    ...mapGetters([
      'getterNumber',
    ])
  }
}
</script>
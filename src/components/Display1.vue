<template>
  <div>
    <p>Display1: <strong>{{ getterNumber }}</strong></p>
    <p>(connected to central state)</p>
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
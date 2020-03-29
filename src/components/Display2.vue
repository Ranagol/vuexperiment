<template>
  <div>
    <hr>
    <p>Display2: <strong>{{ getterNumber }}</strong> </p>
    <p>(connected to central state)</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Display2',
  computed: {
    ...mapGetters([
      'getterNumber',
    ])
  }
}
</script>
<template>
  <div>
    <hr>
    <button @click="asyncIncrement">async Butt</button>
    <p>(will add after 2 sec)</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Button2',
  methods: {
    ...mapActions([
      'asyncIncrement'
    ])
  }
}
</script>
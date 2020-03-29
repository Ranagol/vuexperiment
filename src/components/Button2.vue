<template>
  <div>
    <button @click="asyncIncrement" class="btn btn-info">async Butt</button>
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
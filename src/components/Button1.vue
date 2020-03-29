<template>
  <div>
    <button @click="mutationsIncrement">Button 1</button>
    <p>(will add immediatelly)</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Button1',
  methods: {
    ...mapMutations([
      'mutationsIncrement',
    ])
  }
}
</script>
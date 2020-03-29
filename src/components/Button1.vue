<template>
  <div>
    <button @click="mutationsIncrement" class="btn btn-success">Button 1</button>
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
<template>
<div>Dialog 示例</div>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import {
  ref,
  h
} from 'vue'
export default {
  components: {
    Demo,
    Dialog1Demo,
    Dialog2Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

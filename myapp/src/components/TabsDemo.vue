<template>
<h1>Tabs 示例</h1>
<Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import {
  ref
} from 'vue'

export default {
  components: {
    Demo,
    Tabs1Demo
  },
  setup() {
    return {
      Tabs1Demo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

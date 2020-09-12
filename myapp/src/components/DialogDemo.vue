<template>
<div>Dialog 示例</div>
<Button @click="toggle">Toggle </Button>
<Dialog :visible="x" />
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return {
      x,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

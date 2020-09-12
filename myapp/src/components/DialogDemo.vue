<template>
<div>Dialog 示例</div>
<Button @click="toggle">Toggle </Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :confirm="confirm" />
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
    const confirm = () => {
      console.log(1)
      return true 
    }
    return {
      x,
      toggle,
      confirm
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

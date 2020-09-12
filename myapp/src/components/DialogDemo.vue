<template>
<div>Dialog 示例</div>
<Button @click="toggle">Toggle </Button>
<Dialog title="title" v-model:visible="x" :closeOnClickOverlay="false" :confirm="confirm" :cancel="cancel">
  <template v-slot:content>
    <h1>我是内容具名插槽</h1>
  </template>
</Dialog>
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
    const cancel = () => {

    }
    return {
      x,
      toggle,
      confirm,
      cancel
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

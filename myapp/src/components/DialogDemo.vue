<template>
<div>Dialog 示例</div>
<Button @click="toggle">Toggle </Button>
<Dialog title="title" v-model:visible="x" :closeOnClickOverlay="false" :confirm="confirm" :cancel="cancel">
  <template v-slot:content>
    <h1>我是内容具名插槽</h1>
  </template>
</Dialog>
<Button @click="showDialog">openDialog </Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  openDialog
} from '../lib/openDialog.ts'
import {
  ref,
  h
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
      return false
    }
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        confirm() {
          console.log('confirm')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      x,
      toggle,
      confirm,
      cancel,
      showDialog
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

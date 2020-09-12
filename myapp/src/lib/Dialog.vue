<template>
<div>
  <div class="dialog-wrapper">
    <header>header</header>
    <main>main</main>
    <footer>
      <Button>ok</Button>
      <Button>cancel</Button>
    </footer>
  </div>
  <div class="dialog-overlay"></div>
</div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  component: {
    Button
  }
};
</script>

<style lang="scss" scoped>
</style>

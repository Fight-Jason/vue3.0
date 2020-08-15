<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
  export default {
    name: 'app',
    setup() {
      const wrapperWidth = document.documentElement.clientWidth;
      const asideVisble = ref( wrapperWidth <= 500 ? false : true );
      provide('xxxx', asideVisble)
    }
  }
</script>


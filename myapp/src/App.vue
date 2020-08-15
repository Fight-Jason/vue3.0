<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import { router } from './router'
  export default {
    name: 'app',
    setup() {
      const wrapperWidth = document.documentElement.clientWidth;
      const asideVisble = ref( wrapperWidth <= 500 ? false : true );
      provide('xxxx', asideVisble)

      router.afterEach(() => {
        if(wrapperWidth <= 500) {
          asideVisble.value = false;
        }
      })
    }
  }
</script>


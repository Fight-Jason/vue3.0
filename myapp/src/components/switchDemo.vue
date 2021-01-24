<template>
<div>
  <h1>Switch 组件示例 </h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <br />
</div>
</template>

<script lang="ts">
import SwitchDemo1 from './Switch1.demo.vue';
import SwitchDemo2 from './Switch2.demo.vue';
import Demo from './Demo.vue';
import {
  ref
} from 'vue'
export default {
  components: {
    Demo,
    SwitchDemo1,
    SwitchDemo2
  },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    }
  }
}
</script>

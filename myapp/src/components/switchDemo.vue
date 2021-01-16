<template>
<div>
  <h1>Switch 组件示例 </h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <br />
</div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
import Demo from './Demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
    Button,
    Demo,
    SwitchDemo1,
    SwitchDemo2
  },
  setup() {
    const bool = ref(false);
    console.log(Prism)
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
      Prism
    }
  }
}
</script>

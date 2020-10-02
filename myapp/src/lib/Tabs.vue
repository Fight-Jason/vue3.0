<template>
<div>
  tabs
  <div v-for="(t,index) in titles" :key="index">{{t}} </div>
  <component v-for="(c,index) in defaults" :is="c" :key="index" />
</div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map(tag => tag.props.title)
    return {
      defaults,
      titles
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

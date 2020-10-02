<template>
<div>
  tabs
  <component :is="defaults[0]" />
  <component :is="defaults[1]" />
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
    console.log({
      ...context.slots.default()
    })
    console.log(defaults[0].type)
    return {
      defaults
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

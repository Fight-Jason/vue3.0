<template>
    <div>
        <Switch :value="value"  @update:show="value = $event" />
    </div>
</template>

<script lang="ts">
import Switch from "../lib/switch.vue"
import { ref } from 'vue';
export default {
    name: 'switchDemo',
    setup() {
        const value = ref(false)
        const bool = ref(false)
        return { value, bool }
    },
    components: {
        Switch
    }
};
</script>

<style lang="scss" scoped>

</style>
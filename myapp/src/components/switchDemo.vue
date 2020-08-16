<template>
    <div>
        <Switch :value="value" @input="value = $event" />
    </div>
</template>

<script lang="ts">
import Switch from "../lib/switch.vue"
import { ref } from 'vue';
export default {
    name: 'switchDemo',
    setup() {
        const value = ref(false)
        return {value}
    },
    components: {
        Switch
    }
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <Button 
            theme="button"
        >123 
        </Button>
        <Button 
            theme="link"
        >123 
        </Button>

    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    name: 'ButtonDemo',
    components: {
        Button
    },
    methods: {
        handleClick() {
            console.log("handleClick")
        },
        handleMouseover() {
            console.log("handleMouseover")
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
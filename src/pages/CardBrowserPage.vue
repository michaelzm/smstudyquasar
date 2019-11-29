<template>
    <div class="cardbrowser">
        <Body></Body>
    </div>
</template>
<script>
import Body from '../layouts/CardBrowser/Body.vue'
export default {
    components: {
        Body
    }
}
</script>

<style lang="scss" scoped>
.cardbrowser{
    background-color: green;
    height: 100%;
    width: 100%;
}
</style>
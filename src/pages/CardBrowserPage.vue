<template>
    <div class="cardBrowserPage-entry">
        <Body></Body>
    </div>
</template>
<script>
import Body from './CardBrowserPage/Body.vue'
export default {
    components: {
        Body
    }
}
</script>

<style lang="scss" scoped>
.cardBrowserPage-entry{
    background-color: green;
    height: 100%;
    width: 100%;
}
</style>
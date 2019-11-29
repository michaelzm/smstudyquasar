<template>
<div class="overviewpage-entry">
  <Body></Body>
</div>

</template>

<script>
import Body from './OverviewPage/OverviewPageBody'
export default {
  name: 'overviewPage',
  components: {
    Body
  }
};
</script>

<style lang="scss" scoped>

.overviewpage-entry {
  height: 95vh;
  width: 100vw;
  background-color: lightblue
  }
</style>

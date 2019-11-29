<template>
  <div class="createCardPage-entry">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./CreatePage/Header.vue";
import Body from "./CreatePage/Body.vue";
import Footer from "./CreatePage/Footer.vue";

export default {
  name: "createPage",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style>
.createCardPage-entry {
  display: grid;
  grid-template-rows: 3vh 92vh;
  grid-template-columns: 50% 50%;
  grid-template-areas: "header header" "body body";
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

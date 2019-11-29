<template>
  <div class="createCard">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "../layouts/Create/Header.vue";
import Body from "../layouts/Create/Body.vue";
import Footer from "../layouts/Create/Footer.vue";

export default {
  name: "createpage",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style>
.createCard {
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

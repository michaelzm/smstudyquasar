<template>
  <div class="body">
    <TextInput @add-card="addCard"></TextInput>
  </div>
</template>

<script>
import TextInput from "../../components/Create/Input";
import axios from "axios";
export default {
  components: {
    TextInput
  },
  methods: {
    addCard(newCard) {
      console.log("adding new card");
      var date = new Date().getTime();
      console.log(date);
      /* eslint-disable no-console */
      console.log(newCard);
      axios.post("http://localhost:3000/collection", {
        question: newCard.textquestion,
        answer: newCard.textanswer,
        calculation_last_reviewed_date: date
      });
    }
  }
};
</script>

<style scoped>
.body {
  background-color: blue;
  grid-area: body;
}
</style>

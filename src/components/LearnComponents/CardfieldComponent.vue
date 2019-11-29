<template>
  <div class="card-to-learn">
    <div class="textfield" v-text="computedText"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentText: "Test"
    };
  },
  computed: {
    computedText: function() {
      if (this.answerVisible) {
        this.showAnswer();
      } else {
        this.showQuestion();
      }
      return this.currentText;
    }
  },
  methods: {
    showQuestion() {
      this.currentText = this.card.question;
    },
    showAnswer() {
      this.currentText = this.card.answer;
    },
    showText() {}
  },
  props: ["card", "answerVisible"],
  /*   watch:{
      answeVisible: this.showText()
  } */
  created() {
    this.showQuestion();
  },
  updated() {}
};
</script>
<style scoped>
.card-to-learn {
  height: 80%;
  display: flex;
  justify-content: center;
}
.textfield {
  align-self: flex-start;
  height: 90%;
  width: 90vw;
  background-color: yellow;
}
</style>
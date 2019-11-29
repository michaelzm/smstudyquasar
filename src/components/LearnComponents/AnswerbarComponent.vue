<template>
  <div class="answerbar">
    <div class="showAnswer" v-if="!answer_is_visible" @click="showAnswer">Antwort zeigen</div>
    <div class="numeric-answer-buttons" v-if="answer_is_visible">
      <div class="answerbutton answer-0" data-value="0.0" @click="evaluateAnswer($event)">😖</div>
      <div class="answerbutton answer-1" data-value="0.2" @click="evaluateAnswer($event)">😞</div>
      <div class="answerbutton answer-2" data-value="0.4" @click="evaluateAnswer($event)">😐</div>
      <div class="answerbutton answer-3" data-value="0.6" @click="evaluateAnswer($event)">🙂</div>
      <div class="answerbutton answer-4" data-value="0.8" @click="evaluateAnswer($event)">😁</div>
      <div class="answerbutton answer-5" data-value="1.0" @click="evaluateAnswer($event)">🔥</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      answer_sent: false
    };
  },
  props: ["answer_is_visible"],
  methods: {
    showAnswer() {
      this.answer_visible = true;
      this.$emit("show-answer");
    },
    evaluateAnswer(e) {
      console.log(e.target.dataset.value + " sent");
      this.$emit("evaluate-answer", e.target.dataset.value);
      this.answer_sent = true;
    }
  }
};
</script>
<style>
.numeric-answer-buttons {
  justify-content: flex-end;
  bottom: 0px;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.showAnswer {
  color: white;
  width: 80vw;
  height: 10vh;
  background-color: red;
}
.answerbutton {
  margin-left: 3vw;
  margin-right: 3vw;
  height: 5vh;
  width: 10vw;
  background-color: greenyellow;
}
.answerbar {
  display: flex;
  justify-content: center;
}
</style>
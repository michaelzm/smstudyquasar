<template>
  <div class="textField">
    <div class="informations">
      <textarea
        ref="textareaQuestion"
        v-model="textquestion"
        placeholder="Frage"
        name="textQuestion"
        id="tq"
      />
      <textarea
        v-model="textanswer"
        placeholder="Antwort"
        name="textQuestion"
        id="ta"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendData"
        @keydown.enter.shift.exact
      />
    </div>
    <div class="sendButton" @click="sendData">Absenden</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textquestion: "",
      textanswer: ""
    };
  },

  methods: {
    sendData() {
      const textcard = {
        textquestion: this.textquestion,
        textanswer: this.textanswer
      };
      /* eslint-disable no-console */
      console.log("working");
      this.$emit("add-card", textcard);
      this.clearData();
      this.resetFocus();
    },
    clearData() {
      this.textquestion = "";
      this.textanswer = "";
    },
    resetFocus() {
      this.$refs.textareaQuestion.focus();
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 300px) and (max-width: 1200px) {
  .informations {
    grid-template-columns: 98vw;
    grid-template-rows: 50% 50%;
    grid-template-areas: "tq" "ta";
  }
}
@media only screen and (min-width: 1200px) {
  .informations {
    grid-template-columns: 48vw 48vw;
    grid-template-rows: 100%;
    grid-template-areas: "tq ta";
  }
}
.informations {
  height: 100%;
  display: grid;
}
.sendButton {
  color: red;
  background-color: lime;
  width: fit-content;
  height: fit-content;
}
.textField {
  background-color: darkgrey;
  height: 90%;
}
#tq {
  grid-area: tq;

  height: 90%;
  width: 100%;
  overflow-x: hidden;
  resize: none;
  background-color: lime;
}
#ta {
  grid-area: ta;
  background-color: antiquewhite;

  height: 90%;
  width: 100%;
  overflow-x: hidden;
  resize: none;
}
</style>

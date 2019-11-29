<template>
  <div class="body-learn">
    <Cardinfo></Cardinfo>
    <Cardfield
      v-if="finishedLoading"
      v-bind:answerVisible="answerVisible"
      v-bind:card="cardInReview"
    ></Cardfield>
    <div class="empty" v-if="!finishedLoading">Keine Karten vorhanden.</div>
    <Answerbar
      v-bind:answer_is_visible="answerVisible"
      v-if="finishedLoading"
      @show-answer="setAnswerVisible"
      @evaluate-answer="updateCard"
    ></Answerbar>
  </div>
</template>

<script>
import axios from "axios";
import Cardfield from "../../components/LearnComponents/CardfieldComponent";
import Cardinfo from "../../components/LearnComponents/CardinfoComponent";
import Answerbar from "../../components/LearnComponents/AnswerbarComponent";
export default {
  data() {
    return {
      cards: [],
      finishedLoading: false,
      answerVisible: false,
      cardInReview: "",
      reviewCounter: 0,
      percentOverdue: 0,
      difficulty: 0,
      difficultyWeight: 0,
      daysBetweenReviews: 0,
      performanceRating: 0 //between 0.0 and 1.0
    };
  },
  components: {
    Cardfield,
    Cardinfo,
    Answerbar
  },
  methods: {
    getTodayCards() {
      var self = this;
      /* eslint-disable no-console */
      axios
        .get("http://localhost:3000/today")
        .then(function(response) {
          // handle success
          console.log(response.data);
          self.cards = response.data;
          if (response.data.length > 0) {
            self.finishedLoading = true;
            self.setCardInReview();
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          console.log("fetching done");
          // always executed
        });
    },
    setCardInReview() {
      if (this.cards[this.reviewCounter]) {
        this.cardInReview = this.cards[this.reviewCounter];
      } else {
        this.finishedLoading = false;
      }
      /* var count = this.cards.length;
      this.cardInReview = this.cards[count - 1]; */
    },
    setAnswerVisible() {
      console.log("Setting answer visible");
      this.answerVisible = true;
    },
    saveCard() {
      var newDate =
        Date.now() + this.daysBetweenReviews * (24 * 60 * 60 * 1000); //unix ms
      axios
        .patch(
          "http://localhost:3000/collection/card/" + this.cardInReview._id,
          {
            next_review_date: newDate,
            reviewCount: this.cards[0].reviewCount + 1,
            calculation_difficulty: this.difficulty,
            calculation_days_between_reviews: this.daysBetweenReviews,
            calculation_last_reviewed_date: new Date().getTime()
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err.response.data));
      this.reviewCounter++;
      this.answerVisible = false;
      this.setCardInReview();
    },
    updateCard(performance) {
      console.log("finished review with performance " + performance);
      this.performanceRating = performance;
      this.calculatePercentOverdue();
      this.calculateDifficulty();
      this.calculateDifficultyWeight();
      this.calculateDaysBetweenReviews();
      this.saveCard();
    },
    //input is value of answer bar
    //0.0 0.2 0.4 are incorrect
    //0.6 0.8 1.0 are correct
    calculatePercentOverdue() {
      console.log("calculating percentOverdue");
      if (this.performanceRating >= 0.6) {
        var date = new Date().getTime();
        console.log(date);
        var percentOverdueUpper =
          date - this.cardInReview.calculation_last_reviewed_date;
        console.log(this.cardInReview.calculation_last_reviewed_date);
        console.log(date);
        console.log(percentOverdueUpper);
        //ms to days = 1000 ms 60 s 60 m 24 h
        var dayMulti = 1000 * 60 * 60 * 24;
        var percentOverdueUpper = percentOverdueUpper / dayMulti;
        this.percentOverdue =
          percentOverdueUpper /
          this.cardInReview.calculation_days_between_reviews;
        console.log(this.percentOverdue);
        if (this.percentOverdue > 2) {
          this.percentOverdue = 2;
        }
      } else {
        this.percentOverdue = 1;
      }
      console.log("percentOverdue now " + this.percentOverdue);
    },
    //between 0 and 1
    calculateDifficulty() {
      console.log("calculating difficulty");
      this.difficulty = this.cardInReview.calculation_difficulty;
      var addToDifficulty =
        this.percentOverdue * (1 / 17) * (8 - 9 * this.performanceRating);
      this.difficulty = this.difficulty + addToDifficulty;
      console.log(this.difficulty);
    },
    calculateDifficultyWeight() {
      console.log("caluclating diff weight");
      this.difficultyWeight = 3 - 1.7 * this.difficulty;
      console.log(this.difficultyWeight);
    },
    calculateDaysBetweenReviews() {
      this.daysBetweenReviews = this.cardInReview.calculation_days_between_reviews;
      console.log("calculating daysbetweenReviews");
      var multiplyTo;
      if (this.performanceRating >= 0.6) {
        multiplyTo = 1 + (this.difficultyWeight - 1) * this.percentOverdue;
      } else {
        //results in minimum of 1 if incorrect
        multiplyTo = 1 / (this.difficultyWeight * this.difficultyWeight);
      }
      console.log("mutliplyTo");
      console.log(multiplyTo);
      this.daysBetweenReviews = this.daysBetweenReviews * multiplyTo;
      console.log("days until next review");
      console.log(this.daysBetweenReviews);
    }
  },
  created() {
    this.getTodayCards();
  }
};
</script>

<style scoped>
.body-learn {
  background-color: blue;
  height: 95vh;
  grid-area: body;
}
</style>

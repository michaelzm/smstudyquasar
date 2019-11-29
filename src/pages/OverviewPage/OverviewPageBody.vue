<template>
  <div class="overview">
    <div class="subject-selection">
      <SubjectSelectionComponent v-bind:subjectList="subjectList" @subject-chosen="loadSubjectInformation"/>
    </div>
    <div class="progress-chart" v-if="subjectLoaded">
        Anzeige des Erfolgs
    </div>
    <div class="card-status" v-if="subjectLoaded">
        Informationen zu fälligen Karten
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SubjectSelectionComponent from "../../components/OverviewComponents/SubjectSelectionComponent";
export default {
  data() {
    return {
      selectedSubject: undefined,
      subjectList: undefined,
      subjectLoaded: false,
    };
  },
  components: {
    SubjectSelectionComponent
  },
  methods: {
    getSubjects() {
      const self = this;
      axios
        .get("http://localhost:3000/subject")
        .then(function(response) {
          // handle success
          console.log(response.data);
          self.subjectList = response.data;
          if (response.data.length > 0) {
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
    createSubject() {
      //axios post
    },
    renameSubject() {
      //axios patch
    },
    loadSubjectInformation(subject) {
        this.selectedSubject = subject
        this.subjectLoaded = true;
    }
  },
  created() {
      this.getSubjects();
  },
};
</script>
<style lang="scss" scoped>
.subject-selection {
  background-color: red;
  height: 15vh;
}
.progress-chart {
  background-color: yellow;
  height: 15vh;
}

.card-status {
  background-color: white;
  height: 10vh;
}
</style>
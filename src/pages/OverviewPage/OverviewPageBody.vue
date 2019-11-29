<template>
  <div class="overview">
    <div class="subject-selection">
      <SubjectSelectionComponent v-bind:subjectList="subjectList"/>
    </div>
    <div class="progress-chart">Anzeige des Erfolgs</div>
    <div class="card-status">Informationen zu fälligen Karten</div>
  </div>
</template>
<script>
import axios from "axios";
import SubjectSelectionComponent from "../../components/OverviewComponents/SubjectSelectionComponent";
export default {
  data() {
    return {
      selectedSubject: undefined,
      subjectList: undefined
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
}
.progress-chart {
  background-color: yellow;
}

.card-status {
  background-color: white;
}
</style>
<template>
    <div class = "subject-selection-component" >
        <div class="info-text" @click="setDisplaySubjectListTo(true)">
            Fach: 
            {{this.currentSubject}}
        </div> 
        <div class="subject-selection-container" v-show="displaySubjectList">
            <ul id = "subject-list">
                <li v-for="(item, index) in subjectList">
                    <div class="subject-entry" @click="chooseSubject(index)">
                        {{item.subjectName}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subjects: [],
            subject_chosen: false,
            subjectSelectionHTML: undefined,
            currentSubject: undefined,
            displaySubjectList: false,
        }
    },
    props: ["subjectList"],
    methods: {
        chooseSubject(index) {
            console.log(index)
            const selection = this.subjectList[index];
            this.$emit("subject-chosen", selection);
            this.setDisplaySubjectListTo(false);
            this.subject_chosen = true;
            this.currentSubject = selection.subjectName;
 
        },
        setHTMLElements() {
            const selectionElement = document.querySelector(".subject-selection-container");
            console.log(selectionElement)
            this.subjectSelectionHTML = selectionElement
        },
        setDisplaySubjectListTo(newBoolean) {
          this.displaySubjectList = newBoolean;  
        },
    },
    mounted() {
        // get element to toggle classlist class
        this.setHTMLElements(); 
    }
}
</script>
<style lang="scss" scoped>

.subject-selection-component {
    height: 100%;
}
.subject-selection-container {
    position: absolute;
    top: 10vh;
    left: 10vw;
}

#subject-list {
    list-style: none;
}


.hidden {
    display: none;
}

.subject-entry {
    font-size: 1.5rem;
    height: auto;
    border: 5px solid black;
    background-color: lightgreen;
}
.info-text {
    font-size: 2rem;
    height: 100%;
}
</style>
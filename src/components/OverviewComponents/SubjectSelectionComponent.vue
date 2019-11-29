<template>
    <div class = "subjectSelection">
        <div class="info-text" @click="toggleSubjectList()">
            Fach: {{this.currentSubject}}
        </div> 
        <div class="subject-selection-container hidden">
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
        }
    },
    props: ["subjectList"],
    methods: {
        chooseSubject(index) {
            console.log(index)
            const selection = this.subjectList[index];
            this.$emit("subject-chosen", selection);
            this.subject_chosen = true;
            this.currentSubject = selection.subjectName;
            this.toggleSubjectList();
        },
        toggleSubjectList() {
            //remove .hidden class
            this.subjectSelectionHTML.classList.toggle('hidden')
        },
        setHTMLElements() {
            const selectionElement = document.querySelector(".subject-selection-container");
            console.log(selectionElement)
            this.subjectSelectionHTML = selectionElement
        },
    },
    mounted() {
        // get element to toggle classlist class
        this.setHTMLElements(); 
    }
}
</script>
<style lang="scss" scoped>
.subject-selection {
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
    height: 5vh;
    border: 5px solid black;
    background-color: blue;
}

</style>
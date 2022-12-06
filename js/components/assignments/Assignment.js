import Title from "./AssignmentTitle.js";
import Section from "./AssignmentSection.js";
import List from "./AssignmentList.js";
import ListItem from "./AssignmentItem.js";
import Form from "./AssignmentForm.js";
import Tag from "./AssignmentTag.js";
import Panel from "./Panel.js";
export default {
  name: "Assignment",
  components: {
    "ass-title": Title,
    "ass-section": Section,
    "ass-list": List,
    "ass-list-item": ListItem,
    "ass-form": Form,
    "ass-tag": Tag,
    "ass-panel": Panel,
  },
  template: `
      <div class="flex gap-8 flex-column  md:flex-row ">  
      <ass-section :show="filters.inProgress.length ? true :false">
        <ass-title>in Progress <span>({{filters.inProgress.length}})</span></ass-title>
        <ass-tag :initialTag="filters.inProgress.map((e)=>e.tag)" v-model:currentTag="currentTag"></ass-tag>
        <ass-list>
          <ass-list-item  v-for="assignment in filteredTagAssignment(filters.inProgress)" :key="assignment.id" :assignment="assignment"></ass-list-item>
        </ass-list>
         <ass-form @addAssignment="add"/>
      </ass-section>
     
      <ass-section :show="show && filters.completed.length ? true :false">
       <ass-title canHide @hideSection="show = $event">in Completed <span>({{filters.completed.length}})</span></ass-title>
         <ass-list>
         <ass-tag :initialTag="filters.completed.map((e)=>e.tag)" v-model:currentTag="currentTag"></ass-tag>
           <ass-list-item  v-for="assignment in filteredTagAssignment(filters.completed)" :key="assignment.id" :assignment="assignment"></ass-list-item>
          </ass-list>
      </ass-section></div>
      <ass-panel>
      <template v-slot:heading>
         Hi there!
       </template>
      <template v-slot:default>
        Hello there you are the default implementation
       </template>

      </ass-panel>
      `,
  data() {
    return {
      assignments: [],
      currentTag: "all",
      show: true,
    };
  },
  created() {
    fetch("http://localhost:3001/assignments")
      .then((data) => data.json())
      .then((assignments) => (this.assignments = assignments))
      .catch((_) => {
        alert("error occurred while fetching assignments");
      });
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
  methods: {
    filteredTagAssignment(assignments) {
      if (this.currentTag === "all") return assignments;
      return assignments.filter((a) => a.tag === this.currentTag);
    },
    add(name) {
      this.assignments.push({
        name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};

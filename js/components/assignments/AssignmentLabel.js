import CheckBox from "./AssignmentInput.js";

export default {
  name: "AssLabel",
  components: {
    checkbox: CheckBox,
  },
  template: `
      <label class="flex justify-between items-center">
        <span>{{assignment.name}}</span>
            <checkbox :assignment="assignment"></checkbox>
        </label>
    `,
  methods: {},
  props: {
    assignment: {
      type: Object,
    },
  },
};

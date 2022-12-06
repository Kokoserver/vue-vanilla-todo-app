import Label from "./AssignmentLabel.js";

export default {
  name: "AssItem",
  components: {
    "ass-label": Label,
  },
  template: `
    <li>
        <ass-label :assignment="assignment"></ass-label>
    </li>
    `,
  props: {
    assignment: {
      type: Object,
    },
  },
};

export default {
  name: "AssInput",
  template: `
     <input type="checkbox" v-model="assignment.complete" />`,
  props: {
    assignment: {
      type: Object,
    },
  },
};

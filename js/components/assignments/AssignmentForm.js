export default {
  name: "AssCreate",
  template: `
     <form @submit.prevent="add"  class="w-full">
          <div class="flex justify-between items-center text-gray-800 divide-x shadow-xl" >
           <input type="text"  v-model="newAssignment" placeholder="New assignment" class="py-2 w-full px-3 rounded-l outline-none"/>
           <button type="submit" class="bg-red-500 text-white py-2 px-3 border-r border-r-gray-800 outline-none rounded-r" >add</button>
          </div>
      </form>
    `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add() {
      if (!this.newAssignment) {
        alert("Please add a new assignment");
        return;
      }
      this.$emit("addAssignment", this.newAssignment);
      this.newAssignment = "";
    },
  },
};

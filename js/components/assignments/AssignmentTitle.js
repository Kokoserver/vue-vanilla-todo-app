export default {
  name: "AssTitle",
  template: `
   <div class="flex justify-between items-center py-4">
    <h1 class="font-bold mb-2 capitalize text-red-500 flex justify-between items-center"><slot/></h1>
    <button class="text-2xl" v-show="canHide" @click="$emit('hideSection', showSection)">&times</button>
   </div>
    `,
  data() {
    return {
      showSection: false,
    };
  },

  props: {
    canHide: { type: Boolean, default: false },
  },
};

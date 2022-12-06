export default {
  template: `
  <button v-for="tag in tags" 
  v-show="tag !== undefined" 
  :class="{'bg-red-500 text-white':tag === currentTag}" 
  class="border border-red-500 p-1 text-xs mb-5 mr-2" 
  @click="$emit('update:currentTag', tag)" >{{tag}}</button>
    `,

  props: {
    initialTag: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTag)];
    },
  },
};

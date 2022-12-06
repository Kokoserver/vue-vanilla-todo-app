export default {
  name: "Button",
  template: `
          <button :class="{
          'py-3 px-6 disabled:cursor-not-allowed':true,
          'bg-gray-600 text-white hover:text-grey-50 hover:bg-gray-900':type==='primary',
          'bg-purple-600 text-white hover:text-grey-50 hover:bg-purple-900':type==='secondary',
          'bg-red-600 text-white hover:text-grey-50 hover:bg-red-900':type==='danger',
          'bg-gray-600 text-white hover:text-grey-50 hover:bg-gray-900' : type==='muted',
          'is-loading':processing
        }"
           :disabled="processing" type="button" 
           ><slot/></button>
         `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};

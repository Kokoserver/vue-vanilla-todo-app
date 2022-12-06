export default {
  name: "AssSection",
  template: `
    <section v-show="show" :class="{'border border-gray-600 p-4 mb-4':show}" class="w-80 space-y-4">
    <slot/>
    </section>
    `,
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};

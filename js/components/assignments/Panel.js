export default {
  name: "AssPanel",
  template: `
    <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h1 class="font-bold border-b border-b-gray-700"v-if="$slots.heading">
       <slot name="heading"></slot>
      </h1>
      <slot name="body">Default of the website body</slot>
      <footer v-if="$slots.footer">
      <slot name="footer"></slot>
      </footer>
    </div>

    `,
};

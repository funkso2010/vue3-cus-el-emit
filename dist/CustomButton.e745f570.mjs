import { defineComponent as c, openBlock as r, createElementBlock as l } from "vue";
import { _ as m } from "./library.45a20e35.mjs";
const u = /* @__PURE__ */ c({
  __name: "CustomButton",
  emits: ["custom-click"],
  setup(p, { emit: e }) {
    const n = (t) => {
      e("custom-click", t);
    };
    return (t, o) => (r(), l("button", {
      type: "button",
      onClick: o[0] || (o[0] = (s) => n(s))
    }, "Click Me!"));
  }
}), _ = `button[data-v-14184499]{color:red;border:1px solid red}
`, d = /* @__PURE__ */ m(u, [["styles", [_]], ["__scopeId", "data-v-14184499"]]);
export {
  d as default
};

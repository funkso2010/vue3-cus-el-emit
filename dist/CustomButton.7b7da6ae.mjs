import { defineComponent as r, openBlock as l, createElementBlock as u } from "vue";
const _ = /* @__PURE__ */ r({
  __name: "CustomButton",
  emits: ["custom-click"],
  setup(n, { emit: c }) {
    const t = (o) => {
      c("custom-click", o);
    };
    return (o, e) => (l(), u("button", {
      type: "button",
      onClick: e[0] || (e[0] = (s) => t(s))
    }, "Click Me!"));
  }
}), p = `button[data-v-14184499]{color:red;border:1px solid red}
`, m = (n, c) => {
  const t = n.__vccOpts || n;
  for (const [o, e] of c)
    t[o] = e;
  return t;
}, i = /* @__PURE__ */ m(_, [["styles", [p]], ["__scopeId", "data-v-14184499"]]);
export {
  i as default
};

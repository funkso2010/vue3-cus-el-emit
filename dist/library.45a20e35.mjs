import { defineComponent as u, openBlock as r, createElementBlock as l, defineAsyncComponent as p, defineCustomElement as c } from "vue";
const i = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of s)
    t[o] = n;
  return t;
}, _ = /* @__PURE__ */ u({
  __name: "CustomButtonImport",
  emits: ["custom-click"],
  setup(e, { emit: s }) {
    const t = (o) => {
      s("custom-click", o);
    };
    return (o, n) => (r(), l("button", {
      type: "button",
      onClick: n[0] || (n[0] = (m) => t(m))
    }, "Click Me!"));
  }
}), d = `button[data-v-8038b085]{color:red;border:1px solid black}
`, C = /* @__PURE__ */ i(_, [["styles", [d]], ["__scopeId", "data-v-8038b085"]]), a = p(
  () => import("./CustomButton.e745f570.mjs")
), b = c(a), f = c(C);
customElements.define("custom-button", b);
customElements.define("custom-button-import", f);
export {
  i as _
};

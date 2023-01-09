import { defineComponent as c, openBlock as d, createElementBlock as p, normalizeStyle as i, toDisplayString as u } from "vue";
import { _ as a } from "./library.a754ec05.mjs";
const m = /* @__PURE__ */ c({
  __name: "CustomButton",
  props: {
    text: { default: "button" },
    bgColorRed: { type: Boolean, default: !0 }
  },
  emits: ["custom-click"],
  setup(n, { emit: r }) {
    const o = n, l = (t) => {
      r("custom-click", t);
    };
    return (t, e) => (d(), p("button", {
      type: "button",
      style: i(o.bgColorRed ? "background-color: red;" : void 0),
      onClick: e[0] || (e[0] = (s) => l(s))
    }, u(o.text), 5));
  }
}), b = `button[data-v-d1e0241e]{display:inline-block;color:#fff;background-color:#000;border-radius:16px;border:1px solid white;padding:8px 16px}
`, k = /* @__PURE__ */ a(m, [["styles", [b]], ["__scopeId", "data-v-d1e0241e"]]);
export {
  k as default
};

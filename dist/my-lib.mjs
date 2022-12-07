import { defineAsyncComponent as t, defineCustomElement as e } from "vue";
const o = t(() => new Promise((m, s) => {
  import("./CustomButton.7b7da6ae.mjs");
})), n = e(o);
customElements.define("custom-button", n);

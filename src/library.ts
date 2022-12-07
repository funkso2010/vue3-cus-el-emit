import { defineCustomElement, defineAsyncComponent } from "vue";

const CustomButton = defineAsyncComponent(() =>
  import('./components/CustomButton.vue')
);
import { CustomButtonImport } from "./components/index";

const CustomButtonElement = defineCustomElement(CustomButton);
const CustomButtonImportElement = defineCustomElement(CustomButtonImport);

customElements.define("custom-button", CustomButtonElement);
customElements.define("custom-button-import", CustomButtonImportElement);

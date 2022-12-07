import { defineCustomElement, defineAsyncComponent } from "vue";

const CustomButton = defineAsyncComponent(() =>
  import('./components/CustomButton.vue')
);

const CustomButtonElement = defineCustomElement(CustomButton);
customElements.define("custom-button", CustomButtonElement);

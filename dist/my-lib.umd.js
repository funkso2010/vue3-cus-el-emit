(function(t,s){typeof exports=="object"&&typeof module<"u"?s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(t=typeof globalThis<"u"?globalThis:t||self,s(t.Vue))})(this,function(t){"use strict";const s=t.defineComponent({__name:"CustomButton",emits:["custom-click"],setup(u,{emit:c}){const n=o=>{c("custom-click",o)};return(o,e)=>(t.openBlock(),t.createElementBlock("button",{type:"button",onClick:e[0]||(e[0]=m=>n(m))},"Click Me!"))}}),i=`button[data-v-14184499]{color:red;border:1px solid red}
`,l=(u,c)=>{const n=u.__vccOpts||u;for(const[o,e]of c)n[o]=e;return n},r=Object.freeze(Object.defineProperty({__proto__:null,default:l(s,[["styles",[i]],["__scopeId","data-v-14184499"]])},Symbol.toStringTag,{value:"Module"})),d=l(t.defineComponent({__name:"CustomButtonImport",emits:["custom-click"],setup(u,{emit:c}){const n=o=>{c("custom-click",o)};return(o,e)=>(t.openBlock(),t.createElementBlock("button",{type:"button",onClick:e[0]||(e[0]=m=>n(m))},"Click Me!"))}}),[["styles",[`button[data-v-8038b085]{color:red;border:1px solid black}
`]],["__scopeId","data-v-8038b085"]]),_=t.defineAsyncComponent(()=>Promise.resolve().then(()=>r)),p=t.defineCustomElement(_),f=t.defineCustomElement(d);customElements.define("custom-button",p),customElements.define("custom-button-import",f)});

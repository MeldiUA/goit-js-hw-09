import"./assets/modulepreload-polyfill-ec808ebb.js";const o=document.querySelector(".feedback-form"),s=document.querySelector("input[name=email]"),l=document.querySelector("textarea[name=message]"),r="feedback-form-state";let e={email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(r);try{t&&(e=JSON.parse(t),s.value=e.email,l.value=e.message)}catch(a){console.log(a.message)}});o.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim();try{localStorage.setItem(r,JSON.stringify(e))}catch(a){console.log(a.message)}});o.addEventListener("submit",t=>{t.preventDefault(),e.email&&e.message?(console.log(e),e.email="",e.message="",o.reset(),localStorage.removeItem(r)):alert("ERROR, set a fields")});
//# sourceMappingURL=commonHelpers2.js.map
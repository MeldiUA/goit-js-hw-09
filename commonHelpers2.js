import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),s=document.querySelector("input[name=email]"),m=document.querySelector("textarea[name=message]"),r="feedback-form-state";let e={email:"",message:""};try{e=JSON.parse(localStorage.getItem(r)),s.value=e.email,m.value=e.message}catch(t){console.log(t.message)}a.addEventListener("input",t=>{t.target===s?e.email=t.target.value.trim():e.message=t.target.value.trim()});a.addEventListener("submit",t=>{t.preventDefault(),e.email&&e.message?(localStorage.setItem(r,JSON.stringify(e)),a.reset()):alert("ERROR, set a fields")});
//# sourceMappingURL=commonHelpers2.js.map

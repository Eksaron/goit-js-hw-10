import{i as n}from"./vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const o=parseInt(i.delay.value),s=i.state.value;r(o,s).then(e=>{n.success({title:"Success",message:e,position:"topRight"}),console.log(`😊 ${e}`)}).catch(e=>{n.error({title:"Error",message:e,position:"topRight"}),console.log(`😡 ${e}`)})});function r(t,o){return new Promise((s,e)=>{setTimeout(()=>{o==="fulfilled"?s(`Fulfilled promise in ${t}ms`):e(`Rejected promise in ${t}ms`)},t)})}
//# sourceMappingURL=2-snackbar-de13cfa7.js.map

import{_ as u,p as m,G as p,r as b,W as f,a3 as h,o as v,a as g,i as _,w as x,b as e,m as y,x as S,d as T,T as B}from"./index-Gbyk3iuC.js";import{L as w}from"./localeText-ClrYsr6Z.js";const C={class:"fixed-bottom w-100 bottom-0 z-2",style:{"z-index":"1"}},P={class:"container-fluid"},k={class:"row g-0"},L={class:"col-md-9 col-lg-10 d-flex justify-content-center py-2"},V={class:"rounded-3 p-2 border shadow searchPeersContainer bg-body-tertiary"},z={class:"d-flex gap-1 align-items-center px-2"},D=["placeholder"],G={__name:"peerSearchBar",emits:["close"],setup(M,{emit:n}){const i=m(()=>p("Search Peers..."));let t;const o=b(""),r=f(),l=()=>{t?(clearTimeout(t),t=setTimeout(()=>{r.searchString=o.value},300)):t=setTimeout(()=>{r.searchString=o.value},300)},d=n,c=h("searchBar");return v(()=>{c.value.focus()}),(N,s)=>(g(),_(B,{name:"slideUp",appear:"",type:"animation",style:{"animation-delay":"1s"}},{default:x(()=>[e("div",C,[e("div",P,[e("div",k,[s[5]||(s[5]=e("div",{class:"col-md-3 col-lg-2"},null,-1)),e("div",L,[e("div",V,[e("div",z,[s[4]||(s[4]=e("h6",{class:"mb-0 me-2"},[e("label",{for:"searchPeers"},[e("i",{class:"bi bi-search"})])],-1)),y(e("input",{ref:"searchBar",class:"form-control rounded-3 bg-secondary-subtle border-1 border-secondary-subtle",placeholder:i.value,id:"searchPeers",onKeyup:s[0]||(s[0]=a=>l()),"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a)},null,40,D),[[S,o.value]]),e("button",{onClick:s[2]||(s[2]=a=>d("close")),class:"btn bg-secondary-subtle text-secondary-emphasis border-secondary-subtle rounded-3 d-flex align-items-center"},[s[3]||(s[3]=e("i",{class:"bi bi-x-circle-fill me-2"},null,-1)),T(w,{t:"Done"})])])])])])])])]),_:1}))}},$=u(G,[["__scopeId","data-v-21d93f94"]]);export{$ as default};

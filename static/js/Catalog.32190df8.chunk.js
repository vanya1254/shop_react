"use strict";(self.webpackChunkshop_react=self.webpackChunkshop_react||[]).push([[400],{320:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(43),r=s(154),c=s(756),i=s(579);const n=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(1),[l,o]=(0,a.useState)(1),[u,d]=(0,a.useState)([]),[h,m]=(0,a.useState)([]),p=["XS","S","M","L","XL"],f=async()=>{try{const{data:e}=await r.A.get("https://b24940cdae2d60eb.mokky.dev/items?page=".concat(s,"&limit=4"));t(e.items),o(e.meta.total_pages);const a=p.map((t=>{if(e.items.filter((e=>e.size===t)).length)return t})).filter((e=>e));d(a)}catch(e){console.error("Error fetching:",e.message)}};return(0,a.useEffect)((()=>{(async()=>{h.length?(await f(),(()=>{let s=[];s=s.concat.apply(s,h.map((t=>e.filter((e=>{if(e.size===t)return e})).filter((e=>e))))),t(s)})()):await f()})(),window.scrollTo(0,0)}),[s,h]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Y9,{}),(0,i.jsx)("div",{className:"center bg",children:(0,i.jsx)(c.se,{})}),(0,i.jsx)(c.Dq,{sizes:u,setCurSizes:m}),(0,i.jsxs)("div",{className:"products center",children:[(0,i.jsx)(c.tN,{items:e}),(0,i.jsx)(c.dK,{curPage:s,setCurPage:n,totalPages:l})]}),(0,i.jsx)(c.O5,{}),(0,i.jsx)(c.Jz,{}),(0,i.jsx)(c.wi,{})]})}}}]);
//# sourceMappingURL=Catalog.32190df8.chunk.js.map
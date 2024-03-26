"use strict";(self.webpackChunkshop_react=self.webpackChunkshop_react||[]).push([[965],{495:(s,e,t)=>{t.r(e),t.d(e,{default:()=>i});var a=t(43),c=t(756),r=t(880),l=t(579);const i=()=>{const{cartItems:s,setCartItems:e}=(0,a.useContext)(r.A),[t,i]=(0,a.useState)(0);return(0,a.useEffect)((()=>{window.scrollTo(0,0),i(s.reduce(((s,e)=>s+Number(e.price)*e.quantity),0))}),[s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Y9,{}),(0,l.jsx)("div",{className:"center bg",children:(0,l.jsx)("section",{className:"top-head no-crumbs-p",children:(0,l.jsx)("h2",{className:"top-head-title",children:"Shopping Cart"})})}),(0,l.jsxs)("div",{className:"center cart",style:s.length?{}:{height:"50vh"},children:[(0,l.jsxs)("div",{className:"cart-container",children:[(0,l.jsx)("div",{className:"cart-items",children:s.map((t=>(0,l.jsxs)("div",{className:"cart-item",children:[(0,l.jsx)("img",{src:t.imgUrl,alt:t.imgAlt,className:"cart-item-img"}),(0,l.jsxs)("div",{className:"cart-item-content",children:[(0,l.jsx)("h2",{className:"cart-item-title"}),(0,l.jsxs)("ul",{className:"cart-item-species",children:[(0,l.jsxs)("li",{children:["Price: ",(0,l.jsxs)("span",{className:"mark",children:["$",t.price]})]}),(0,l.jsxs)("li",{children:["Color: ",(0,l.jsx)("span",{className:"color",children:t.color})]}),(0,l.jsxs)("li",{children:["Size: ",(0,l.jsx)("span",{className:"size",children:t.size})]}),(0,l.jsxs)("li",{children:["Quantity:",(0,l.jsx)("input",{value:t.quantity,onChange:a=>((t,a)=>{const c=s.map((s=>(s.id===a&&(s.quantity=Number(t)||s.quantity),s)));e(c)})(a.target.value,t.id),type:"number",className:"cart-item-quantity quantity"})]})]}),(0,l.jsx)("button",{onClick:()=>{return s=t.id,void e((e=>[...e.filter((e=>e.id!==s))]));var s},className:"cart-item-after"})]})]},t.id)))}),s.length?(0,l.jsxs)("div",{className:"cart-btns",children:[(0,l.jsx)("button",{onClick:()=>{e([])},className:"cart-btn",children:"Clear Shopping Cart"}),(0,l.jsx)("button",{className:"cart-btn",children:"Continue Shopping"})]}):"CART EMPTY"]}),s.length?(0,l.jsxs)("aside",{className:"cart-order",children:[(0,l.jsxs)("form",{className:"cart-order-form",children:[(0,l.jsx)("label",{children:"Shipping Address"}),(0,l.jsx)("input",{type:"text",placeholder:"Bangladesh"}),(0,l.jsx)("input",{type:"text",placeholder:"State"}),(0,l.jsx)("input",{type:"text",placeholder:"Postcode / Zip"}),(0,l.jsx)("button",{className:"cart-btn",children:"Get A\xa0Quote"})]}),(0,l.jsxs)("div",{className:"cart-order-total",children:[(0,l.jsxs)("h4",{className:"sub",children:["Sub Total ",(0,l.jsxs)("span",{className:"ml-33",children:["$",t]})]}),(0,l.jsxs)("h3",{className:"grand",children:["Grand Total ",(0,l.jsxs)("span",{className:"mark ml-20",children:["$",t]})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("button",{className:"checkout-btn",children:"Proceed To\xa0Checkout"})]})]}):""]}),(0,l.jsx)(c.Jz,{}),(0,l.jsx)(c.wi,{})]})}}}]);
//# sourceMappingURL=Cart.5ca8cd1f.chunk.js.map
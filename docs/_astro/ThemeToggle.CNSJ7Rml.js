import{c as s,j as t,B as c}from"./button.CqHxb4Fq.js";import{r as n}from"./index.u1LLWZlj.js";/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],r=s("moon",d);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],m=s("sun",i);function l(){const[e,a]=n.useState(()=>typeof document<"u"?document.documentElement.classList.contains("dark"):!1);return n.useEffect(()=>{a(document.documentElement.classList.contains("dark"))},[]),t.jsxs(c,{type:"button",variant:"ghost",size:"icon","aria-label":e?"Switch to light theme":"Switch to dark theme","aria-pressed":e,onClick:h=>{const o=document.documentElement.classList.toggle("dark");a(o)},children:[t.jsx(m,{className:"hidden dark:block","aria-hidden":"true"}),t.jsx(r,{className:"block dark:hidden","aria-hidden":"true"})]})}export{l as ThemeToggle};

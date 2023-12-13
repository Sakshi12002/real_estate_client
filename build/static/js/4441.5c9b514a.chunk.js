"use strict";(self.webpackChunkreal_estate=self.webpackChunkreal_estate||[]).push([[4441],{3712:(e,l,t)=>{t.d(l,{Z:()=>a});var i=t(1938),n=t(8735),d=t(184);const a=function(e){const{variant:l,children:t,...a}=e,o=(0,i.mq)("Card",{variant:l});return(0,d.jsx)(n.Box,{__css:o,height:"100%",...a,children:t})}},4220:(e,l,t)=>{t.d(l,{Z:()=>n});var i=t(184);const n=()=>(0,i.jsx)("div",{className:"loader"})},4441:(e,l,t)=>{t.r(l),t.d(l,{default:()=>p});var i=t(5223),n=t(8735),d=t(2504),a=t(3712),o=t(3486),s=t(4220),r=t(2426),c=t.n(r),x=t(2791),h=t(4373),m=t(7689),u=t(1087),j=t(1526),v=t(184);const p=()=>{const e=(0,m.UO)(),[l,t]=(0,x.useState)(),{isOpen:r,onOpen:p,onClose:b}=(0,i.qY)(),[f,S]=(0,x.useState)(!1),[g,T]=(0,x.useState)(!1),G=JSON.parse(localStorage.getItem("user")),[I,k]=(0,x.useState)(!1);return(0,x.useEffect)((()=>{(async()=>{k(!0);let l=await(0,j.ac)("api/email/view/",e.id);t(null===l||void 0===l?void 0:l.data),k(!1)})()}),[]),(0,v.jsx)(v.Fragment,{children:I?(0,v.jsx)(n.Flex,{justifyContent:"center",alignItems:"center",width:"100%",children:(0,v.jsx)(s.Z,{})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n.Grid,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,v.jsx)(n.GridItem,{colStart:6,children:(0,v.jsx)(n.Flex,{justifyContent:"right",children:(0,v.jsx)(u.rU,{to:"/email",children:(0,v.jsx)(d.Button,{leftIcon:(0,v.jsx)(h.u1R,{}),variant:"brand",children:"Back"})})})})}),(0,v.jsx)(n.Grid,{templateColumns:"repeat(4, 1fr)",gap:3,children:(0,v.jsx)(n.GridItem,{colSpan:{base:4},children:(0,v.jsx)(a.Z,{children:(0,v.jsxs)(n.Grid,{templateColumns:{base:"1fr"},gap:4,children:[(0,v.jsx)(n.GridItem,{colSpan:2,children:(0,v.jsxs)(n.Box,{children:[(0,v.jsx)(n.Heading,{size:"md",mb:3,children:"Email View page"}),(0,v.jsx)(o.q,{})]})}),(0,v.jsxs)(n.Grid,{templateColumns:"repeat(2, 1fr)",gap:4,children:[(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Sender "}),(0,v.jsx)(n.Text,{children:null!==l&&void 0!==l&&l.senderEmail?null===l||void 0===l?void 0:l.senderEmail:" - "})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Recipient "}),(0,v.jsx)(n.Text,{children:null!==l&&void 0!==l&&l.recipient?null===l||void 0===l?void 0:l.recipient:" - "})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Create From "}),(0,v.jsx)(u.rU,{to:null!==l&&void 0!==l&&l.createBy?"admin"!==(null===G||void 0===G?void 0:G.role)?"/contactView/".concat(null===l||void 0===l?void 0:l.createBy):"/admin/contactView/".concat(null===l||void 0===l?void 0:l.createBy):"admin"!==(null===G||void 0===G?void 0:G.role)?"/leadView/".concat(null===l||void 0===l?void 0:l.createByLead):"/admin/leadView/".concat(null===l||void 0===l?void 0:l.createByLead),children:(0,v.jsx)(n.Text,{color:"green.400",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},children:null!==l&&void 0!==l&&l.createByName?null===l||void 0===l?void 0:l.createByName:" - "})})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Realeted To "}),(0,v.jsx)(n.Text,{children:null!==l&&void 0!==l&&l.createBy?"contact":(null===l||void 0===l?void 0:l.createByLead)&&"lead"})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Start Date "}),(0,v.jsxs)(n.Text,{children:[" ",null!==l&&void 0!==l&&l.startDate?c()(null===l||void 0===l?void 0:l.startDate).format("lll "):" - "," "]})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:"End Date "}),(0,v.jsxs)(n.Text,{children:[" ",null!==l&&void 0!==l&&l.endDate?c()(null===l||void 0===l?void 0:l.endDate).format("lll "):" - "," "]})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2,md:1},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Time stamp "}),(0,v.jsxs)(n.Text,{children:[" ",null!==l&&void 0!==l&&l.timestamp?c()(null===l||void 0===l?void 0:l.timestamp).format("lll "):" - "," [",null!==l&&void 0!==l&&l.timestamp?c()(null===l||void 0===l?void 0:l.timestamp).toNow():" - ","]"]})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Subject "}),(0,v.jsx)(n.Text,{children:null!==l&&void 0!==l&&l.subject?null===l||void 0===l?void 0:l.subject:" - "})]}),(0,v.jsxs)(n.GridItem,{colSpan:{base:2},children:[(0,v.jsx)(n.Text,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Message "}),(0,v.jsx)(n.Text,{children:null!==l&&void 0!==l&&l.message?null===l||void 0===l?void 0:l.message:" - "})]})]})]})})})})]})})}}}]);
//# sourceMappingURL=4441.5c9b514a.chunk.js.map
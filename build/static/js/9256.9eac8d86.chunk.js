"use strict";(self.webpackChunkreal_estate=self.webpackChunkreal_estate||[]).push([[9256],{3712:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(1938),l=a(8735),s=a(184);const o=function(e){const{variant:t,children:a,...o}=e,i=(0,n.mq)("Card",{variant:t});return(0,s.jsx)(l.Box,{__css:i,height:"100%",...o,children:a})}},7880:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(5272),l=a(8735),s=a(1070),o=a(2504),i=a(5154),r=a(7640),d=a(2791),c=a(184);const u=e=>{const{gotoPage:t,gopageValue:a,setGopageValue:u,pageCount:x,canPreviousPage:h,previousPage:g,canNextPage:p,pageOptions:m,setPageSize:v,nextPage:j,pageSize:f,pageIndex:b}=e;return(0,d.useEffect)((()=>{u(1)}),[]),(0,c.jsxs)(l.Flex,{justifyContent:"space-between",mt:2,alignItems:"center",children:[1!==(null===m||void 0===m?void 0:m.length)&&(0,c.jsxs)(l.Flex,{children:[(0,c.jsx)(s.u,{label:"First Page",children:(0,c.jsx)(o.IconButton,{onClick:()=>{t(0),u(1)},isDisabled:!h,icon:(0,c.jsx)(n.ArrowLeftIcon,{h:3,w:3}),mr:4})}),(0,c.jsx)(s.u,{label:"Previous Page",children:(0,c.jsx)(o.IconButton,{onClick:()=>{g(),u((e=>e-1))},isDisabled:!h,icon:(0,c.jsx)(n.ChevronLeftIcon,{h:6,w:6})})})]}),(0,c.jsxs)(l.Flex,{alignItems:"center",children:[1!==(null===m||void 0===m?void 0:m.length)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.Text,{flexShrink:"0",mr:8,children:["Page"," ",(0,c.jsx)(l.Text,{fontWeight:"bold",as:"span",children:b+1})," ","of"," ",(0,c.jsx)(l.Text,{fontWeight:"bold",as:"span",children:null===m||void 0===m?void 0:m.length})]}),(0,c.jsx)(l.Text,{flexShrink:"0",children:"Go to page:"})," ",(0,c.jsxs)(i.Y2,{ml:2,mr:8,w:28,min:1,max:null===m||void 0===m?void 0:m.length,value:a,onChange:e=>{t(e?e-1:0),u(e)},defaultValue:b+1,children:[(0,c.jsx)(i.zu,{}),(0,c.jsxs)(i.Fi,{children:[(0,c.jsx)(i.WQ,{}),(0,c.jsx)(i.Y_,{})]})]})]}),(0,c.jsx)(r.Ph,{w:32,value:f,onChange:e=>{v(Number(e.target.value))},children:[5,10,20,30,40,50].map((e=>(0,c.jsxs)("option",{value:e,children:["Show ",e]},e)))})]}),1!==(null===m||void 0===m?void 0:m.length)&&(0,c.jsxs)(l.Flex,{children:[(0,c.jsx)(s.u,{label:"Next Page",children:(0,c.jsx)(o.IconButton,{onClick:()=>{j(),u((e=>e+1))},isDisabled:!p,icon:(0,c.jsx)(n.ChevronRightIcon,{h:6,w:6})})}),(0,c.jsx)(s.u,{label:"Last Page",children:(0,c.jsx)(o.IconButton,{onClick:()=>{t(x-1),u(x)},isDisabled:!p,icon:(0,c.jsx)(n.ArrowRightIcon,{h:3,w:3}),ml:4})})]})]})}},4220:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(184);const l=()=>(0,n.jsx)("div",{className:"loader"})},5335:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7917),l=a(2504),s=a(4220),o=a(2791),i=a(7689),r=a(1526),d=a(184);const c=e=>{const[t,a]=(0,o.useState)(!1),c=(0,i.s0)();return(0,d.jsx)("div",{children:(0,d.jsxs)(n.u_,{onClose:e.onClose,isOpen:e.isOpen,isCentered:!0,children:[(0,d.jsx)(n.ZA,{}),(0,d.jsxs)(n.hz,{children:[(0,d.jsxs)(n.xB,{children:["Delete Contact","one"===e.method?"":"s"]}),(0,d.jsx)(n.ol,{}),(0,d.jsxs)(n.fe,{children:["Are You Sure To Delete selated Contact","one"===e.method?"":"s"," ?"]}),(0,d.jsxs)(n.mz,{children:[(0,d.jsx)(l.Button,{colorScheme:"red",mr:2,onClick:async()=>{if("one"===e.method)try{a(!0);200===(await(0,r.ef)(e.url,e.id)).status&&c("/contacts")}catch(t){console.log(t)}finally{a(!1)}else if("many"===e.method)try{a(!0),200===(await(0,r.$f)(e.url,e.data)).status&&(e.setSelectedValues([]),e.onClose(!1))}catch(t){console.log(t)}finally{a(!1)}},disabled:!!t,children:t?(0,d.jsx)(s.Z,{}):"Yes"}),(0,d.jsx)(l.Button,{variant:"outline",onClick:()=>{e.onClose(!1)},children:"No"})]})]})]})})}},5277:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(8735),l=a(7640),s=a(3445),o=a(3712),i=a(2426),r=a.n(i),d=a(2791),c=a(3496),u=a(9513),x=a.n(u),h=(a(8639),a(1526)),g=a(184);const p=e=>{const{dashboard:t}=e,[a,i]=(0,d.useState)({}),[u,p]=(0,d.useState)(new Date(new Date-12096e5)),[m,v]=(0,d.useState)(new Date),[j,f]=(0,d.useState)("all"),[b,S]=(0,d.useState)("day"),C=JSON.parse(localStorage.getItem("user")),y=Object.keys(a).map((e=>{const t=a[e][0];let n=[];return null!==t&&void 0!==t&&t.Emails&&(n=n.concat(t.Emails.map((e=>({x:e.date,y:e.Emailcount}))))),null!==t&&void 0!==t&&t.Calls&&(n=n.concat(t.Calls.map((e=>({x:e.date,y:e.Callcount}))))),null!==t&&void 0!==t&&t.TextMsges&&(n=n.concat(t.TextMsges.map((e=>({x:e.date,y:e.TextSentCount}))))),{name:e,data:n}}));(0,d.useEffect)((()=>{(async()=>{const e={startDate:r()(u).format("YYYY-MM-DD"),endDate:r()(m).format("YYYY-MM-DD"),filter:b};let t=await(0,h.Fv)("admin"===C.role?"api/reporting/index":"api/reporting/index?sender=".concat(C._id),e);t&&200===t.status&&i(null===t||void 0===t?void 0:t.data)})()}),[u,m,b]);const w="all"===j?y:y.filter((e=>e.name===j));return(0,g.jsxs)(o.Z,{children:[!t&&(0,g.jsxs)(n.Box,{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",mb:4,children:[(0,g.jsxs)(l.Ph,{value:j,onChange:e=>f(e.target.value),width:{base:"100%",md:"15%"},mb:{base:3,md:"auto"},children:[(0,g.jsx)("option",{value:"EmailDetails",children:"Email"}),(0,g.jsx)("option",{value:"outboundcall",children:"Call"}),(0,g.jsx)("option",{value:"all",children:"all"})]}),(0,g.jsxs)(n.Box,{width:{base:"100%",md:"auto"},flexWrap:"wrap",justifyContent:"left",mb:{base:3,md:"auto"},display:"flex",children:[(0,g.jsx)(x(),{selected:u,onChange:e=>p(e)}),(0,g.jsx)(x(),{selected:m,onChange:e=>v(e)})]}),(0,g.jsx)(n.Box,{width:{base:"100%",md:"auto"},display:"flex",justifyContent:"right",mb:{base:3,md:"auto"},children:(0,g.jsx)(s.Ee,{onChange:e=>S(e),value:b,children:(0,g.jsxs)(n.Stack,{direction:"row",children:[(0,g.jsx)(s.Y8,{value:"day",children:"Daily"}),(0,g.jsx)(s.Y8,{value:"week",children:"Weekly"})]})})})]}),(0,g.jsx)("div",{id:"chart",children:(0,g.jsx)("div",{id:"chart-timeline",children:w&&(0,g.jsx)(c.Z,{options:{chart:{id:"line-chart"},xaxis:{type:"datetime"},yaxis:{title:{text:"Count"}},dataLabels:{enabled:!0}},series:w,type:"area",height:350})})})]})}},9256:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(3712),l=a(2791),s=(a(8639),a(1526)),o=a(8227),i=a(8735),r=a(7005),d=a(1358),c=a(5272),u=a(7880),x=a(6355),h=a(5335),g=a(184);function p(e){const{columnsData:t,barData:a}=e,s=(0,o.ff)("secondaryGray.900","white"),p=(0,o.ff)("gray.200","whiteAlpha.100"),m=(0,l.useMemo)((()=>t),[t]),[v,j]=(0,l.useState)([]),[f,b]=(0,l.useState)(!1),S=(0,l.useMemo)((()=>a),[a]),[C,y]=(0,l.useState)(),w=(0,d.useTable)({columns:m,data:S,initialState:{pageIndex:0}},d.useGlobalFilter,d.useSortBy,d.usePagination),{getTableProps:P,getTableBodyProps:D,headerGroups:T,prepareRow:k,page:I,canPreviousPage:E,canNextPage:z,pageOptions:H,pageCount:B,gotoPage:F,nextPage:Y,previousPage:Z,setPageSize:N,state:{pageIndex:O,pageSize:W}}=w;return H.length<C&&y(H.length),(0,g.jsxs)(n.Z,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"scroll"},children:[(0,g.jsxs)(i.Flex,{px:"25px",justify:"space-between",mb:"20px",align:"center",children:[(0,g.jsxs)(i.Text,{color:s,fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Reports (",S.length,")"]}),v.length>0&&(0,g.jsx)(c.DeleteIcon,{onClick:()=>b(!0),color:"red"})]}),(0,g.jsx)(h.Z,{isOpen:f,onClose:b,setSelectedValues:j,url:"api/contact/deleteMany",data:v,method:"many"}),(0,g.jsxs)(r.iA,{...P(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,g.jsx)(r.hr,{children:null===T||void 0===T?void 0:T.map(((e,t)=>{var a;return(0,l.createElement)(r.Tr,{...e.getHeaderGroupProps(),key:t},null===(a=e.headers)||void 0===a?void 0:a.map(((e,t)=>(0,l.createElement)(r.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:t,borderColor:p},(0,g.jsxs)(i.Flex,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,g.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,g.jsx)(x.sF,{}):(0,g.jsx)(x.h3_,{}):(0,g.jsx)(x.roE,{})})]})))))}))}),(0,g.jsxs)(r.p3,{...D(),children:[0===S.length&&(0,g.jsx)(r.Tr,{children:(0,g.jsx)(r.Td,{colSpan:m.length,children:(0,g.jsx)(i.Text,{textAlign:"center",width:"100%",color:s,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}),null===I||void 0===I?void 0:I.map(((e,t)=>{var a;return k(e),(0,l.createElement)(r.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:t},null===e||void 0===e||null===(a=e.cells)||void 0===a?void 0:a.map(((e,t)=>{let a="";var n;"#"===(null===e||void 0===e?void 0:e.column.Header)?a=(0,g.jsx)(i.Flex,{align:"center",children:(0,g.jsx)(i.Text,{color:s,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(n=e.row)||void 0===n?void 0:n.index)+1})}):("Name"===(null===e||void 0===e?void 0:e.column.Header)||"Email Sent"===(null===e||void 0===e?void 0:e.column.Header)||"Text Sent"===(null===e||void 0===e?void 0:e.column.Header)||"Outbound Calls"===(null===e||void 0===e?void 0:e.column.Header)||"Email Received"===(null===e||void 0===e?void 0:e.column.Header)||"Text Received"===(null===e||void 0===e?void 0:e.column.Header))&&(a=(0,g.jsx)(i.Text,{me:"10px",color:s,fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value}));return(0,l.createElement)(r.Td,{...null===e||void 0===e?void 0:e.getCellProps(),key:t,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},a)})))}))]})]}),(null===S||void 0===S?void 0:S.length)>5&&(0,g.jsx)(u.Z,{gotoPage:F,gopageValue:C,setGopageValue:y,pageCount:B,canPreviousPage:E,previousPage:Z,canNextPage:z,pageOptions:H,setPageSize:N,nextPage:Y,pageSize:W,pageIndex:O})]})}var m=a(5277);const v=()=>{const[e,t]=(0,l.useState)([]),a=JSON.parse(localStorage.getItem("user")),o=[{Header:"Email Sent",accessor:"emailsent"},{Header:"Outbound Calls",accessor:"outboundcall"}];"admin"===a.role&&o.unshift({Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"Name",accessor:"firstName"});return(0,l.useEffect)((()=>{(async()=>{let e=await(0,s.ac)("admin"===a.role?"api/reporting":"api/reporting?_id=".concat(a._id));e&&200===e.status&&t(null===e||void 0===e?void 0:e.data)})()}),[]),(0,g.jsxs)("div",{children:[(0,g.jsx)(m.Z,{}),(0,g.jsx)(n.Z,{mt:4,children:(0,g.jsx)(p,{columnsData:o,barData:e})})]})}}}]);
//# sourceMappingURL=9256.9eac8d86.chunk.js.map
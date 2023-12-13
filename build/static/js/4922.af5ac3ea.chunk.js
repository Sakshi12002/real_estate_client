"use strict";(self.webpackChunkreal_estate=self.webpackChunkreal_estate||[]).push([[4922],{4466:(e,r,o)=>{o.d(r,{Z:()=>f});var n=o(5272),s=o(7917),i=o(2504),t=o(8735),l=o(3393),a=o(5798),m=o(6123),d=o(7640),p=o(3486),c=o(4220),x=o(2506),h=o(2791),u=o(2630),g=o(1526),b=o(184);const f=e=>{const[r,o]=(0,h.useState)(!1),f={propertyType:"",propertyAddress:"",listingPrice:"",squareFootage:"",numberofBedrooms:"",numberofBathrooms:"",yearBuilt:"",propertyDescription:"",lotSize:"",parkingAvailability:"",appliancesIncluded:"",heatingAndCoolingSystems:"",flooringType:"",exteriorFeatures:"",communityAmenities:"",propertyPhotos:"",virtualToursOrVideos:"",floorPlans:"",propertyDocuments:"",listingStatus:"",listingAgentOrTeam:"",listingDate:"",marketingDescription:"",multipleListingService:"",previousOwners:"",purchaseHistory:"",propertyTaxes:"",homeownersAssociation:"",mortgageInformation:"",sellers:"",buyers:"",propertyManagers:"",contractorsOrServiceProviders:"",internalNotesOrComments:"",createBy:JSON.parse(localStorage.getItem("user"))._id},y=(0,x.TA)({initialValues:f,validationSchema:u.GI,onSubmit:(e,r)=>{let{resetForm:o}=r;A()}}),{errors:j,touched:S,values:C,handleBlur:v,handleChange:I,handleSubmit:z,setFieldValue:T}=y,A=async()=>{try{o(!0),200===(await(0,g.Fv)("api/property/add",C)).status&&(e.onClose(),y.resetForm())}catch(r){console.log(r)}finally{o(!1)}};return(0,b.jsx)("div",{children:(0,b.jsxs)(s.dy,{isOpen:e.isOpen,size:e.size,children:[(0,b.jsx)(s.P1,{}),(0,b.jsxs)(s.sc,{children:[(0,b.jsxs)(s.OX,{justifyContent:"space-between",display:"flex",children:["Add Property",(0,b.jsx)(i.IconButton,{onClick:e.onClose,icon:(0,b.jsx)(n.CloseIcon,{})})]}),(0,b.jsx)(s.Ng,{children:(0,b.jsxs)(t.Grid,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,b.jsx)(t.GridItem,{colSpan:{base:12},children:(0,b.jsx)(t.Heading,{as:"h1",size:"md",children:"1. Basic Property Information"})}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Property Type",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.propertyType,name:"propertyType",placeholder:"Enter Property Type",fontWeight:"500",borderColor:j.propertyType&&S.propertyType?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.propertyType&&S.propertyType&&j.propertyType]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Year Built",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.yearBuilt,name:"yearBuilt",type:"number",min:1e3,max:(new Date).getFullYear(),placeholder:"Enter Year",fontWeight:"500",borderColor:j.yearBuilt&&S.yearBuilt?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.yearBuilt&&S.yearBuilt&&j.yearBuilt})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Property Address",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.propertyAddress,name:"propertyAddress",placeholder:"Enter Property Address",fontWeight:"500",borderColor:j.propertyAddress&&S.propertyAddress?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.propertyAddress&&S.propertyAddress&&j.propertyAddress})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Listing Price",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.listingPrice,name:"listingPrice",placeholder:"Enter Listing Price",fontWeight:"500",borderColor:j.listingPrice&&S.listingPrice?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.listingPrice&&S.listingPrice&&j.listingPrice})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Square Footage",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.squareFootage,name:"squareFootage",placeholder:"Enter Square Footage",fontWeight:"500",borderColor:j.squareFootage&&S.squareFootage?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.squareFootage&&S.squareFootage&&j.squareFootage})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Number of Bedrooms",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.numberofBedrooms,type:"number",min:0,name:"numberofBedrooms",placeholder:"Enter Number of Bedrooms",fontWeight:"500",borderColor:j.numberofBedrooms&&S.numberofBedrooms?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.numberofBedrooms&&S.numberofBedrooms&&j.numberofBedrooms})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Number of Bathrooms",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.numberofBathrooms,name:"numberofBathrooms",type:"number",min:0,placeholder:"Enter Number of Bathrooms",fontWeight:"500",borderColor:j.numberofBathrooms&&S.numberofBathrooms?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.numberofBathrooms&&S.numberofBathrooms&&j.numberofBathrooms})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsxs)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Property Description",(0,b.jsx)(t.Text,{color:"red",children:"*"})]}),(0,b.jsx)(m.g,{fontSize:"sm",onChange:I,onBlur:v,resize:"none",value:C.propertyDescription,name:"propertyDescription",placeholder:"Enter Property Description",fontWeight:"500",borderColor:j.propertyDescription&&S.propertyDescription?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.propertyDescription&&S.propertyDescription&&j.propertyDescription})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"2. Property Features and Amenities"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lot Size"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.lotSize,name:"lotSize",placeholder:"Enter Lot Size",fontWeight:"500",borderColor:j.lotSize&&S.lotSize?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.lotSize&&S.lotSize&&j.lotSize})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"appliances Included"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.appliancesIncluded,name:"appliancesIncluded",placeholder:"Enter appliances Included",fontWeight:"500",borderColor:j.appliancesIncluded&&S.appliancesIncluded?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.appliancesIncluded&&S.appliancesIncluded&&j.appliancesIncluded})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Heating And Cooling Systems"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.heatingAndCoolingSystems,name:"heatingAndCoolingSystems",placeholder:"Enter Heating And Cooling Systems",fontWeight:"500",borderColor:j.heatingAndCoolingSystems&&S.heatingAndCoolingSystems?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.heatingAndCoolingSystems&&S.heatingAndCoolingSystems&&j.heatingAndCoolingSystems})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Flooring Type"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.flooringType,name:"flooringType",placeholder:"Enter Flooring Type",fontWeight:"500",borderColor:j.flooringType&&S.flooringType?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.flooringType&&S.flooringType&&j.flooringType})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Exterior Features"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.exteriorFeatures,name:"exteriorFeatures",placeholder:"Enter Exterior Features",fontWeight:"500",borderColor:j.exteriorFeatures&&S.exteriorFeatures?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.exteriorFeatures&&S.exteriorFeatures&&j.exteriorFeatures})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Community Amenities"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.communityAmenities,name:"communityAmenities",placeholder:"Enter Community Amenities",fontWeight:"500",borderColor:j.communityAmenities&&S.communityAmenities?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.communityAmenities&&S.communityAmenities&&j.communityAmenities})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Parking Availability"}),(0,b.jsxs)(d.Ph,{value:C.parkingAvailability,name:"parkingAvailability",onChange:I,fontWeight:"500",placeholder:"Select Parking Availability",borderColor:j.parkingAvailability&&S.parkingAvailability?"red.300":null,children:[(0,b.jsx)("option",{value:"yes",children:"Yes"}),(0,b.jsx)("option",{value:"no",children:"No"})]}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.parkingAvailability&&S.parkingAvailability&&j.parkingAvailability})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"3. Listing and Marketing Details"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Listing Status"}),(0,b.jsxs)(d.Ph,{value:C.listingStatus,name:"listingStatus",onChange:I,fontWeight:"500",placeholder:"Select Listing Status",borderColor:j.listingStatus&&S.listingStatus?"red.300":null,children:[(0,b.jsx)("option",{value:"active",children:"active"}),(0,b.jsx)("option",{value:"pending",children:"pending"}),(0,b.jsx)("option",{value:"sold",children:"sold"})]}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.listingStatus&&S.listingStatus&&j.listingStatus})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Listing Agent Or Team"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.listingAgentOrTeam,name:"listingAgentOrTeam",placeholder:"Enter Listing Agent Or Team",fontWeight:"500",borderColor:j.listingAgentOrTeam&&S.listingAgentOrTeam?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.listingAgentOrTeam&&S.listingAgentOrTeam&&j.listingAgentOrTeam})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Listing Date"}),(0,b.jsx)(a.Input,{type:"date",fontSize:"sm",onChange:I,onBlur:v,value:C.listingDate,name:"listingDate",fontWeight:"500",borderColor:j.listingDate&&S.listingDate?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.listingDate&&S.listingDate&&j.listingDate]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Marketing Description"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.marketingDescription,name:"marketingDescription",placeholder:"Enter Marketing Description",fontWeight:"500",borderColor:j.marketingDescription&&S.marketingDescription?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.marketingDescription&&S.marketingDescription&&j.marketingDescription})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Multiple Listing Service"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.multipleListingService,name:"multipleListingService",placeholder:"Enter Multiple Listing Service",fontWeight:"500",borderColor:j.multipleListingService&&S.multipleListingService?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.multipleListingService&&S.multipleListingService&&j.multipleListingService})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"4. Property History"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Previous Owners"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.previousOwners,name:"previousOwners",type:"number",min:0,placeholder:"Enter Previous Owners",fontWeight:"500",borderColor:j.previousOwners&&S.previousOwners?"red.300":null}),(0,b.jsx)(t.Text,{mb:"10px",color:"red",children:j.previousOwners&&S.previousOwners&&j.previousOwners})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"5. Financial Information"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Property Taxes"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.propertyTaxes,name:"propertyTaxes",placeholder:" Property Taxes",fontWeight:"500",borderColor:j.propertyTaxes&&S.propertyTaxes?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.propertyTaxes&&S.propertyTaxes&&j.propertyTaxes]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Homeowners Association"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.homeownersAssociation,name:"homeownersAssociation",placeholder:"Homeowners Association",fontWeight:"500",borderColor:j.homeownersAssociation&&S.homeownersAssociation?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.homeownersAssociation&&S.homeownersAssociation&&j.homeownersAssociation]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Mortgage Information"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.mortgageInformation,name:"mortgageInformation",placeholder:"Mortgage Information",fontWeight:"500",borderColor:j.mortgageInformation&&S.mortgageInformation?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.mortgageInformation&&S.mortgageInformation&&j.mortgageInformation]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"6. Contacts Associated with Property"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Sellers"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.sellers,name:"sellers",placeholder:"Sellers",fontWeight:"500",borderColor:j.sellers&&S.sellers?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.sellers&&S.sellers&&j.sellers]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Buyers"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.buyers,name:"buyers",placeholder:"Buyers",fontWeight:"500",borderColor:j.buyers&&S.buyers?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.buyers&&S.buyers&&j.buyers]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Property Managers"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.propertyManagers,name:"propertyManagers",placeholder:"Property Managers",fontWeight:"500",borderColor:j.propertyManagers&&S.propertyManagers?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.propertyManagers&&S.propertyManagers&&j.propertyManagers]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12,sm:6},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Contractors Or Service Providers"}),(0,b.jsx)(a.Input,{fontSize:"sm",onChange:I,onBlur:v,value:C.contractorsOrServiceProviders,name:"contractorsOrServiceProviders",placeholder:"Contractors Or Service Providers",fontWeight:"500",borderColor:j.contractorsOrServiceProviders&&S.contractorsOrServiceProviders?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.contractorsOrServiceProviders&&S.contractorsOrServiceProviders&&j.contractorsOrServiceProviders]})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(p.q,{}),(0,b.jsx)(t.Heading,{mt:2,as:"h1",size:"md",children:"7. Property Notes and Comments"})]}),(0,b.jsxs)(t.GridItem,{colSpan:{base:12},children:[(0,b.jsx)(l.FormLabel,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Internal Notes Or Comments"}),(0,b.jsx)(m.g,{fontSize:"sm",onChange:I,onBlur:v,resize:"none",value:C.internalNotesOrComments,name:"internalNotesOrComments",placeholder:"Internal Notes Or Comments",fontWeight:"500",borderColor:j.internalNotesOrComments&&S.internalNotesOrComments?"red.300":null}),(0,b.jsxs)(t.Text,{mb:"10px",color:"red",children:[" ",j.internalNotesOrComments&&S.internalNotesOrComments&&j.internalNotesOrComments]})]})]})}),(0,b.jsxs)(s.ze,{children:[(0,b.jsx)(i.Button,{sx:{textTransform:"capitalize"},disabled:!!r,variant:"brand",type:"submit",onClick:z,children:r?(0,b.jsx)(c.Z,{}):"Add Data"}),(0,b.jsx)(i.Button,{variant:"outline",colorScheme:"red",sx:{marginLeft:2,textTransform:"capitalize"},onClick:e.onClose,children:"Cancel"})]})]})]})})}},1346:(e,r,o)=>{o.d(r,{Z:()=>d});var n=o(7917),s=o(2504),i=o(4220),t=o(2791),l=o(7689),a=o(1526),m=o(184);const d=e=>{const[r,o]=(0,t.useState)(!1),d=(0,l.s0)();return(0,m.jsx)("div",{children:(0,m.jsxs)(n.u_,{onClose:e.onClose,isOpen:e.isOpen,isCentered:!0,children:[(0,m.jsx)(n.ZA,{}),(0,m.jsxs)(n.hz,{children:[(0,m.jsxs)(n.xB,{children:["Delete ","one"===e.method?"Property":"properties"]}),(0,m.jsx)(n.ol,{}),(0,m.jsxs)(n.fe,{children:["Are You Sure To Delete selated ","one"===e.method?"Property":"properties"," ?"]}),(0,m.jsxs)(n.mz,{children:[(0,m.jsx)(s.Button,{colorScheme:"red",mr:2,onClick:async()=>{if("one"===e.method)try{o(!0);200===(await(0,a.ef)(e.url,e.id)).status&&d("/properties")}catch(r){console.log(r)}finally{o(!1)}else if("many"===e.method)try{o(!0),200===(await(0,a.$f)(e.url,e.data)).status&&(e.setSelectedValues([]),e.onClose(!1))}catch(r){console.log(r)}finally{o(!1)}},disabled:!!r,children:r?(0,m.jsx)(i.Z,{}):"Yes"}),(0,m.jsx)(s.Button,{variant:"outline",onClick:()=>{e.onClose(!1)},children:"No"})]})]})]})})}}}]);
//# sourceMappingURL=4922.af5ac3ea.chunk.js.map
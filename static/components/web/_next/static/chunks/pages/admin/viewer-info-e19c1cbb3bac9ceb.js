(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6109],{92794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/viewer-info",function(){return r(28603)}])},54615:function(e,t,r){"use strict";r.d(t,{k:function(){return u}});var n=r(85893),a=r(58091),s=r(67294),l=r(30744),i=r(23148),o=r(26495),d=r(65400);function c(e){let t={};return e.forEach(e=>{let r=new Date(e.time),n=(0,a.Z)(r,"H:mma");t[n]=e.value}),t}i.kL.register(i.uw,i.WV,i.f$,i.od,i.jn,i.Dx,i.u,i.De);let u=e=>{let{data:t,title:r,color:a,unit:i,dataCollections:u,yFlipped:f,yLogarithmic:h,minYValue:x,yStepSize:m=0}=e,p=[],j=(0,s.useRef)(null);return t&&t.length>0&&p.push({id:r,label:r,backgroundColor:a,borderColor:a,borderWidth:3,data:c(t)}),u.forEach(e=>{p.push({id:e.name,label:e.name,data:c(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,n.jsxs)("div",{className:"line-chart-container",children:[(0,n.jsx)(o.x1,{ref:j,data:{datasets:p},options:{responsive:!0,clip:!1,scales:{y:{type:h?"logarithmic":"linear",reverse:f,min:x,ticks:{stepSize:m},title:{display:!0,text:i}}}},height:"70vh"}),(0,n.jsx)(d.default,{size:"small",onClick:()=>{if(j.current){let e=document.createElement("a");e.download="chart.png",e.href=j.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,n.jsx)(l.default,{}),className:"download-btn"})]})};u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},15014:function(e,t,r){"use strict";r.d(t,{m:function(){return h}});var n=r(85893),a=r(53740),s=r(26289),l=r(70302),i=r(74806);let{Text:o}=a.default,d={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},c=e=>{let{prefix:t,value:r,suffix:a,title:s}=e;return(0,n.jsxs)("div",{children:[t,(0,n.jsx)("div",{children:(0,n.jsx)(o,{type:"secondary",children:s})}),(0,n.jsx)("div",{children:(0,n.jsxs)(o,{type:"secondary",children:[r,a||"%"]})})]})},u=e=>{let{title:t,value:r,prefix:a,suffix:s,color:l}=e,o=(0,n.jsx)(c,{prefix:a,value:r,suffix:s,title:t});return(0,n.jsx)(i.default,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":l,"90%":r>90?"red":l},format:()=>o})};u.defaultProps=d;let f=e=>{let{title:t,value:r,prefix:a,formatter:l}=e;return(0,n.jsx)(s.Z,{title:t,value:r,prefix:a,formatter:l})};f.defaultProps=d;let h=e=>{let{progress:t,centered:r}=e,a=t?u:f;return(0,n.jsx)(l.default,{type:"inner",children:(0,n.jsx)("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,n.jsx)(a,{...e})})})};h.defaultProps=d},28603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(85893),a=r(67294),s=r(55673),l=r(5789),i=r(53740),o=r(12386),d=r(82891),c=r(89552),u=r(4863),f=r(28401),h=r(46038),x=r(5152),m=r.n(x),p=r(54615),j=r(15014),g=r(2307),w=r(45938),y=r(37135);let v=e=>{let{data:t}=e,r=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,y.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:e=>(0,w.Z)(new Date(e)),sorter:(e,t)=>new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime(),sortDirections:["descend","ascend"]}];return(0,n.jsx)(g.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:t,size:"small",rowKey:"id"})};var b=r(38631),k=r(81453),S=r(34261);let C=m()(()=>Promise.resolve().then(r.t.bind(r,5085,23)),{loadableGenerated:{webpack:()=>[5085]},ssr:!1}),D=m()(()=>r.e(5412).then(r.t.bind(r,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1});function Z(){let e;let t=(0,a.useContext)(b.a),{online:r,broadcaster:x,viewerCount:m,overallPeakViewerCount:g,sessionPeakViewerCount:w}=t||{};x&&x.time&&(e=new Date(x.time));let y=[{title:"Current stream",start:e},{title:"Last 12 hours",start:(0,h.Z)(new Date,{hours:12})},{title:"Last 24 hours",start:(0,h.Z)(new Date,{hours:24})},{title:"Last 7 days",start:(0,h.Z)(new Date,{days:7})},{title:"Last 30 days",start:(0,h.Z)(new Date,{days:30})},{title:"Last 3 months",start:(0,h.Z)(new Date,{months:3})},{title:"Last 6 months",start:(0,h.Z)(new Date,{months:6})}],[S,Z]=(0,a.useState)(!0),[_,L]=(0,a.useState)([]),[E,N]=(0,a.useState)([]),[I,P]=(0,a.useState)(y[1]),T=async()=>{try{let e="".concat(k.iV,"?windowStart=").concat((0,f.Z)(I.start)),t=await (0,k.rQ)(e);L(t),Z(!1)}catch(e){console.log("==== error",e)}try{let e=await (0,k.rQ)(k.a_);N(e)}catch(e){console.log("==== error",e)}};(0,a.useEffect)(()=>{let e=null;return(T(),r)?(e=setInterval(T,6e4),()=>{clearInterval(e)}):()=>[]},[r,I]);let A=e=>{let{key:t}=e;P(y[t])},V=(0,n.jsxs)(o.default,{children:[r&&e&&(0,n.jsx)(o.default.Item,{onClick:A,children:y[0].title},"0"),y.slice(1).map((e,t)=>(0,n.jsx)(o.default.Item,{onClick:A,children:e.title},t+1))]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default.Title,{children:"Viewer Info"}),(0,n.jsx)("br",{}),(0,n.jsxs)(s.Z,{gutter:[16,16],justify:"space-around",children:[r&&(0,n.jsx)(l.Z,{span:8,md:8,children:(0,n.jsx)(j.m,{title:"Current viewers",value:m.toString(),prefix:(0,n.jsx)(D,{})})}),(0,n.jsx)(l.Z,{md:r?8:12,children:(0,n.jsx)(j.m,{title:r?"Max viewers this stream":"Max viewers last stream",value:w.toString(),prefix:(0,n.jsx)(D,{})})}),(0,n.jsx)(l.Z,{md:r?8:12,children:(0,n.jsx)(j.m,{title:"All-time max viewers",value:g.toString(),prefix:(0,n.jsx)(D,{})})})]}),!_.length&&(0,n.jsx)(u.default,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,n.jsxs)(c.default,{spinning:!_.length||S,children:[(0,n.jsx)(d.default,{overlay:V,trigger:["click"],children:(0,n.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[I.title," ",(0,n.jsx)(C,{})]})}),_.length>0&&(0,n.jsx)(p.k,{title:"Viewers",data:_,color:"#2087E2",unit:"viewers",minYValue:0,yStepSize:1}),(0,n.jsx)(v,{data:E})]})]})}Z.getLayout=function(e){return(0,n.jsx)(S.l,{page:e})}}},function(e){e.O(0,[2196,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,7752,5891,2891,4749,6627,8966,3068,8091,6300,8531,5283,1822,4261,9774,2888,179],function(){return e(e.s=92794)}),_N_E=e.O()}]);
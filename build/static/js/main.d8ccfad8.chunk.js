(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[1],{214:function(e,t,a){"use strict";t.a=a.p+"static/media/1.34eedf58.jpg"},215:function(e,t,a){"use strict";t.a=a.p+"static/media/2.0c06e43d.jpg"},216:function(e,t,a){"use strict";t.a=a.p+"static/media/3.07e357f5.jpg"},217:function(e,t,a){"use strict";t.a=a.p+"static/media/4.3ddf28ab.jpg"},218:function(e,t,a){"use strict";t.a=a.p+"static/media/5.3e55ee5f.jpg"},219:function(e,t,a){"use strict";t.a=a.p+"static/media/6.edefb235.jpg"},233:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(16),i=a(77),o=a(129),d=a(417),l=a(418),r=a(419),u=a(420),j=a(421),b=a(422),h=a(423),m=a(424),p=a(425),g=a(426),x=a(427),O=a(428),v=a(429),_=a(430),f=a(431),C=a(432),N=a(433),y=a(434),S=a(214),k=a(215),w=a(216),R=a(217),F=a(218),P=a(219),A=a(130),T=a.n(A),L=a(56),B=a(3);const E=e=>Object(B.jsx)(i.d,{style:{height:"300px",marginTop:"40px"},data:{labels:e.label,datasets:[{label:"My First dataset",backgroundColor:Object(L.hexToRgba)(Object(L.getStyle)("--cui-info"),10),borderColor:Object(L.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(L.getStyle)("--cui-info"),borderWidth:2,data:e.data,fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}});var G=a(228),I=a.n(G);const z={data:[{_id:"61bafa7258f70f5bac158158",diseaseName:"Heart Attack",value:1,date:"2021-12-16T08:35:25.038Z",__v:0},{_id:"61bb042358f70f5bac15815b",diseaseName:"Diabetes",value:2,date:"2021-12-16T08:35:25.038Z",__v:0},{_id:"61bb043158f70f5bac15815d",diseaseName:"Depression",value:3,date:"2021-12-16T08:35:25.038Z",__v:0},{_id:"61bb043d58f70f5bac15815f",diseaseName:"Cancer",value:4,date:"2021-12-16T08:35:25.038Z",__v:0}]},D={success:!0,data:{stateGraph:[{_id:"Assam",count:1},{_id:"Maharashtra",count:3},{_id:"Manipur",count:1},{_id:"Meghalaya",count:2},{_id:"Sikkim",count:2},{_id:"Kerala",count:1},{_id:"Telangana",count:3},{_id:"Uttar Pradesh",count:1},{_id:"Arunachal Pradesh",count:1},{_id:"Tamil Nadu",count:2},{_id:"Gujarat",count:1},{_id:"Jharkhand",count:1},{_id:"Nagaland",count:1},{_id:"Haryana",count:3},{_id:"Karnataka",count:2},{_id:"West Bengal",count:4},{_id:"Odisha",count:2},{_id:"Madhya Pradesh",count:2},{_id:"Uttarakhand",count:2}],totalCases:35,ageGraph:[{_id:18,count:1},{_id:26,count:2},{_id:36,count:2},{_id:30,count:1},{_id:91,count:1},{_id:32,count:1},{_id:45,count:1},{_id:39,count:1},{_id:51,count:1},{_id:28,count:2},{_id:20,count:1},{_id:21,count:2},{_id:19,count:3},{_id:80,count:1},{_id:47,count:1},{_id:23,count:1},{_id:27,count:2},{_id:22,count:1},{_id:52,count:1},{_id:29,count:1},{_id:72,count:1},{_id:68,count:1},{_id:25,count:4},{_id:34,count:1},{_id:66,count:1}],activeCases:9,deathCases:9,recoveredCases:17,malePercentage:"88.57",femalePercentage:"11.43"}},M=Object(s.lazy)((()=>a.e(19).then(a.bind(null,505))));t.default=()=>{const[e,t]=c.a.useState([]),[a,s]=c.a.useState([]),[A,L]=c.a.useState([]),[G,W]=c.a.useState([]),[H,U]=c.a.useState([]),[Z,q]=c.a.useState([]),[J,K]=c.a.useState(),[Y,$]=c.a.useState(""),[Q,V]=c.a.useState(!1);c.a.useEffect((async()=>{await X(),await ee({_id:"61bafa7258f70f5bac158158",diseaseName:"Heart Attack"})}),[]),c.a.useEffect((()=>{}),[Y]);const X=()=>{const e=z;console.log(e),T.a.get("http://localhost:4000/getDisease").then((e=>{console.log(e.data),t(e.data)})).catch((e=>{console.log("err",e.response)}))},ee=e=>{var t,a;$(e.diseaseName);const c=D;console.log("disease1=>",c),V(!0),console.log("=>",c.data),K(c.data);const n=[],i=[];V(!1),null===(t=c.data.stateGraph)||void 0===t||t.map((e=>{n.push(e._id),i.push(e.count)}));const o=[],d=[];null===(a=c.data.ageGraph)||void 0===a||a.map((e=>{o.push(e._id),d.push(e.count)})),L(n),W(i),U(o),q(d),s(c.data)},te=(e,t)=>parseFloat(e/t*100).toFixed(2),ae=[{title:"Recovery Rate",value:null===J||void 0===J?void 0:J.recoveredCases,percent:te(null===J||void 0===J?void 0:J.recoveredCases,null===J||void 0===J?void 0:J.totalCases),color:"success"},{title:"Death Rate",value:null===J||void 0===J?void 0:J.deathCases,percent:te(null===J||void 0===J?void 0:J.deathCases,null===J||void 0===J?void 0:J.totalCases),color:"info"},{title:"Active Cases",value:null===J||void 0===J?void 0:J.activeCases,percent:te(null===J||void 0===J?void 0:J.activeCases,null===J||void 0===J?void 0:J.totalCases),color:"warning"}],se=[{title:"Male",icon:d.a,percent:null===J||void 0===J?void 0:J.malePercentage},{title:"Female",icon:l.a,percent:null===J||void 0===J?void 0:J.femalePercentage}];r.a,u.a,j.a,b.a,S.a,h.a,m.a,k.a,p.a,g.a,w.a,x.a,O.a,R.a,v.a,_.a,F.a,f.a,C.a,P.a,N.a,y.a;return Q?Object(B.jsxs)(B.Fragment,{children:["    ",Object(B.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(B.jsx)(I.a,{type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3})})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(M,{diseaseName:e,handleClick:e=>{ee(e),console.log("data",e)}}),Object(B.jsxs)(n.p,{className:"mb-4",children:[Object(B.jsx)(n.q,{children:Object(B.jsxs)(n.tb,{children:[Object(B.jsx)(n.C,{sm:5,children:Object(B.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:Y})}),Object(B.jsx)(E,{label:A,data:G})]})}),Object(B.jsx)(n.r,{children:Object(B.jsx)(n.tb,{xs:{cols:1},md:{cols:3},className:"text-center",children:ae.map(((e,t)=>Object(B.jsxs)(n.C,{className:"mb-sm-2 mb-0",children:[Object(B.jsx)("div",{className:"text-medium-emphasis",children:e.title}),Object(B.jsxs)("strong",{children:[e.value," (",e.percent,"%)"]}),Object(B.jsx)(n.rb,{thin:!0,className:"mt-2",color:e.color,value:e.percent})]},t)))})})]}),Object(B.jsx)(n.tb,{children:Object(B.jsx)(n.C,{xs:!0,children:Object(B.jsx)(n.p,{className:"mb-4",children:Object(B.jsxs)(n.q,{children:[Object(B.jsxs)(n.tb,{children:[Object(B.jsx)(n.C,{xs:12,md:6,xl:6,children:Object(B.jsxs)(n.p,{className:"mb-4",children:[Object(B.jsx)(n.t,{children:"Age Wise Report"}),Object(B.jsx)(n.q,{children:Object(B.jsx)(i.e,{data:{labels:H,datasets:[{data:Z,backgroundColor:["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}})})]})}),Object(B.jsx)(n.C,{xs:12,md:6,xl:6,children:Object(B.jsxs)(n.p,{className:"mb-4",children:[Object(B.jsx)(n.t,{}),Object(B.jsx)(n.q,{children:se.map(((e,t)=>Object(B.jsxs)("div",{className:"progress-group",children:[Object(B.jsxs)("div",{className:"progress-group-header",children:[Object(B.jsx)(o.a,{className:"me-2",icon:e.icon,size:"lg"}),Object(B.jsx)("span",{children:e.title}),Object(B.jsxs)("span",{className:"ms-auto fw-semibold",children:[e.value," ",Object(B.jsxs)("span",{className:"text-medium-emphasis small",children:["(",e.percent,"%)"]})]})]}),Object(B.jsx)("div",{className:"progress-group-bars",children:Object(B.jsx)(n.rb,{thin:!0,color:"success",value:e.percent})})]},t)))})]})})]}),Object(B.jsx)("br",{})]})})})})]})}},234:function(e,t,a){"use strict";t.a=new class{constructor(){this.authenticated=!1}login(e){this.authenticated=!0,e()}logout(e){this.authenticated=!1,e()}isAuthenticated(){return this.authenticated}}},370:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);a(134),a(142),a(143),a(145),a(79),a(131),a(151),a(152),a(153),a(156),a(157),a(158),a(162),a(163),a(164),a(165),a(168),a(169),a(170),a(176),a(102),a(180),a(132),a(184),a(185),a(186),a(187),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(254),a(260),a(261),a(262),a(268),a(269),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(303),a(304),a(305),a(307),a(308),a(310),a(312),a(313),a(314),a(315),a(316),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(345),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(355),a(356),a(133),a(208),a(209),a(210),a(212),a(126),a(364);var s=a(0),c=a.n(s),n=a(26),i=a.n(n),o=a(101),d=a(21),l=(a(370),a(65)),r=(a(234),a(3));const u=e=>{let{component:t,...a}=e;const{isLoggedIn:s}=Object(l.d)((e=>e.loginReducer));return Object(r.jsx)(d.b,{...a,render:e=>s?(console.log("Yes"),Object(r.jsx)(t,{...e,render:a.render})):(console.log("No"),Object(r.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}}))})};var j=a(233);const b=Object(r.jsx)("div",{className:"pt-3 text-center",children:Object(r.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),h=c.a.lazy((()=>Promise.all([a.e(4),a.e(5)]).then(a.bind(null,456)))),m=c.a.lazy((()=>a.e(8).then(a.bind(null,462)))),p=c.a.lazy((()=>a.e(16).then(a.bind(null,464)))),g=c.a.lazy((()=>a.e(17).then(a.bind(null,465))));class x extends s.Component{render(){return Object(r.jsx)(o.a,{children:Object(r.jsx)(c.a.Suspense,{fallback:b,children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/",name:"Login Page",render:e=>Object(r.jsx)(m,{...e})}),Object(r.jsx)(d.b,{exact:!0,path:"/dashboard",name:"Register Page",render:e=>Object(r.jsx)(j.default,{...e})}),Object(r.jsx)(d.b,{exact:!0,path:"/404",name:"Page 404",render:e=>Object(r.jsx)(p,{...e})}),Object(r.jsx)(d.b,{exact:!0,path:"/500",name:"Page 500",render:e=>Object(r.jsx)(g,{...e})}),Object(r.jsx)(u,{path:"/dashboard",name:"Home",component:h})]})})})}}var O=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(75);const _={isLoggedIn:!1,loginData:[]},f={sidebarShow:!0};var C=a(231),N=a.n(C),y=a(232);const S=Object(v.c)(Object(v.b)({loginReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action",t),t.type){case"LOGIN_SUCCESS":return{...e,loginData:t.data,isLoggedIn:!0};case"LOGIN_ERROR":return{...e};case"LOGOUT_SUCCESS":return{...e,loginData:t.data,isLoggedIn:!1};default:return e}},changeState:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,{type:t,...a}=arguments.length>1?arguments[1]:void 0;return"set"===t?{...e,...a}:e}}),Object(v.a)(y.a,N.a));i.a.render(Object(r.jsx)(l.a,{store:S,children:Object(r.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[415,2,3]]]);
//# sourceMappingURL=main.d8ccfad8.chunk.js.map
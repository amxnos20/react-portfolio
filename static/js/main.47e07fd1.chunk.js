(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(16),i=s.n(a),o=(s(24),s(9),s(19)),l=s(7),r=(s(25),s(0)),j=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"nav-container",children:[Object(r.jsx)(l.c,{exact:!0,to:"/",className:"nav-logo",activeClassName:"active",children:"< Dev-Aman />"}),Object(r.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(l.c,{exact:!0,to:"/",className:"nav-links",activeClassName:"active",children:[Object(r.jsx)("i",{className:"fas fa-home",style:{marginRight:"0.5rem",fontSize:"1.2rem"}}),"Home"]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(l.c,{exact:!0,to:"/about",className:"nav-links",activeClassName:"active",children:[Object(r.jsx)("i",{className:"far fa-user",style:{marginRight:"0.5rem",fontSize:"1.2rem"}}),"About"]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(l.c,{exact:!0,to:"/portfolio",className:"nav-links",activeClassName:"active",children:[Object(r.jsx)("i",{className:"fab fa-codepen",style:{marginRight:"0.5rem",fontSize:"1.2rem"}}),"Portfolio"]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(l.c,{exact:!0,to:"/contact",className:"nav-links",activeClassName:"active",children:[Object(r.jsx)("i",{className:"fas fa-envelope",style:{marginRight:"0.5rem",fontSize:"1.2rem"}}),"Contact"]})})]}),Object(r.jsx)("div",{className:"nav-icon",onClick:function(){n(!s)},children:Object(r.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})})]})})},m=s(2),d=(s(32),s(33),["btn--primary","btn--outline","btn--outline-b"]),b=["btn--medium","btn--large"],h=function(e){var t=e.children,s=e.type,c=e.onClick,n=e.buttonStyle,a=e.buttonSize,i=e.pathProps,o=d.includes(n)?n:d[0],j=b.includes(a)?a:b[0];return Object(r.jsx)(l.b,{to:"".concat(i),children:Object(r.jsx)("button",{className:"btn ".concat(o," ").concat(j),onClick:c,type:s,children:t})})},p=s(18),x=s.n(p),u=s.p+"static/media/web.9b6172a3.jpg",O=function(){return Object(r.jsxs)("div",{className:"hero-container",style:{height:"100vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",objectFit:"contain",justifyContent:"center",position:"relative",background:"url(".concat(u,") center center/cover")},children:[Object(r.jsx)("h1",{children:"Hi, I'm Aman\ud83d\udc4b"}),Object(r.jsx)(x.a,{strings:["From France","Engineer","Developer","Analyst","Fast Learner","Open-source Lover"],typeSpeed:40,loop:!0,className:"typed-anim"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(h,{pathProps:"/about",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"About"}),Object(r.jsx)(h,{pathProps:"/contact",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Contact"})]})]})},v=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(O,{})})};var f=function(e){return Object(r.jsxs)("div",{className:"card",onClick:e.onClick,children:[Object(r.jsx)("img",{src:e.src,alt:""}),Object(r.jsxs)("div",{className:"card__info",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("h4",{children:e.description}),Object(r.jsx)("p",{style:{borderBottom:"solid #001c55",width:"35%"},children:"View Project"})]})]})},g=(s(34),s(35),function(e){var t=e.title,s=e.borderBottomColor,c=void 0===s?"#001c55":s,n=e.color,a=void 0===n?"#000":n;return Object(r.jsx)("div",{className:"section-title-container",children:Object(r.jsx)("h1",{style:{borderBottomColor:c,color:a,padding:"30px"},children:t})})}),N=s.p+"static/media/uber-clone.d4ccb4d7.jpg",y=s.p+"static/media/amazon-next.47a41089.PNG",C=s.p+"static/media/covid-tracker.4c931ac3.PNG",k=function(){function e(e){window.open(e,"_blank").focus()}return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)(g,{title:"Portfolio"}),Object(r.jsx)("p",{style:{textAlign:"center",marginBottom:"2rem"},children:"Some cool personal examples of projects that I have done, this is a non-exhaustive list (not all projects are presented)."}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(f,{src:C,title:"Covid Tracker Web App",description:"\ud83d\udc49 Covid App built with real data, map, chart, table... functionality. Tech: React, Custom API, Material-UI, Map Leaflet",onClick:function(){return e("https://covid-tracker-5d6f2.web.app/")}}),Object(r.jsx)(f,{src:y,title:"Amazon Clone Web App",description:"\ud83d\udc49 Amazon App with full user authentification, basket functionality, database and stripe payment system. Tech: React, NextJS, Redux, Tailwind CSS, Custom API, Webhook, Stripe, Firebase",onClick:function(){return e("https://amazon-2-0-delta.vercel.app/")}}),Object(r.jsx)(f,{src:N,title:"Uber Clone Mobile App (not published but working locally)",description:"\r \ud83d\udc49 Tech: React Native, Tailwind CSS with RN, Google Distance Matrix API to calculate Travel time and Distance (+ Cost), Directions Google API for real navigation, Google places API for real navigations, Apple & google maps for iOS & Android, React Native Navigation"})]})]})},A=function(){return Object(r.jsx)("div",{style:{marginTop:"7rem"},children:Object(r.jsx)(k,{})})},w=(s(36),s.p+"static/media/manOnTable.ec71d7cb.svg"),S=function(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)(g,{title:"About me"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-6",children:Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h2",{children:"Let me introduce myself \ud83d\ude80"}),Object(r.jsxs)("p",{children:["A passionate Engineer \ud83d\ude4d\u200d\u2642\ufe0f, who love web development, data and digital projects. I keep learning and improving every day because technology never stops \ud83d\udcc8.",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{})," The knowledge that I acquired during my experiences, my motivation and also my dynamism constitute essential assets that I wish to put at your disposal. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})]})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("div",{className:"about__img",children:Object(r.jsx)("img",{src:w,alt:""})})})]})})]})},F=(s(37),s.p+"static/media/developerActivity.64ee6450.svg"),P=function(){return Object(r.jsxs)("div",{className:"skill",children:[Object(r.jsx)(g,{title:"What I do"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("div",{className:"skill__img",children:Object(r.jsx)("img",{src:F,alt:""})})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsxs)("div",{className:"skill-text",children:[Object(r.jsx)("h2",{children:"A passionate engineer who wants to explore every tech stack"}),Object(r.jsxs)("p",{style:{marginBottom:"2rem"},children:["\u26a1 Develop highly interactive and responsive web and mobile applications using React, HTML, CSS, Bootstrap...",Object(r.jsx)("br",{})," \u26a1 Building back end applications and integration of third party services such as Firebase, MERN Stack...",Object(r.jsx)("br",{})," \u26a1 Analyzing data using Python, PowerBI..."]}),Object(r.jsx)("ul",{className:"skill-items",children:[{skillName:"HTML5",fontAwesomeClassname:"simple-icons:html5",style:{color:"#E34F26"}},{skillName:"CSS3",fontAwesomeClassname:"fa-css3",style:{color:"#1572B6"}},{skillName:"JavaScript",fontAwesomeClassname:"simple-icons:javascript",style:{backgroundColor:"#000000",color:"#F7DF1E"}},{skillName:"ReactJS",fontAwesomeClassname:"simple-icons:react",style:{color:"#61DAFB"}},{skillName:"NodeJS",fontAwesomeClassname:"simple-icons:node-dot-js",style:{color:"#339933"}},{skillName:"Python",fontAwesomeClassname:"ion-logo-python",style:{backgroundColor:"transparent",color:"#3776AB"}},{skillName:"Firebase",fontAwesomeClassname:"simple-icons:firebase",style:{color:"#FFCA28"}},{skillName:"MongoDB",fontAwesomeClassname:"simple-icons:mongodb",style:{color:"#47A248"}},{skillName:"Sql",fontAwesomeClassname:"ant-design:console-sql-outlined",style:{color:"#1572B6"}},{skillName:"PowerBI",fontAwesomeClassname:"simple-icons:powerbi",style:{color:"#000"}},{skillName:"Office",fontAwesomeClassname:"mdi:microsoft-office",style:{color:"#E43A03"}},{skillName:"Java",fontAwesomeClassname:"logos:java",style:{color:"#E43A03"}}].map((function(e){return Object(r.jsxs)("li",{className:"skill-item",children:[Object(r.jsx)("span",{style:{fontSize:"2.6rem",color:"".concat(e.style.color),backgroundColor:"".concat(e.style.backgroundColor)},className:"iconify","data-icon":e.fontAwesomeClassname}),Object(r.jsx)("p",{style:{fontSize:"11px",fontWeight:"500"},children:e.skillName})]},e.skillName)}))})]})})]})})]})},B=function(){return Object(r.jsxs)("div",{style:{marginTop:"7rem",marginBottom:"10rem"},children:[Object(r.jsx)(S,{}),Object(r.jsx)(P,{})]})},I=(s(38),function(){return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)(g,{title:"Contact"}),Object(r.jsx)("p",{children:"Feel free to connect with me \u260e\ufe0f"}),Object(r.jsxs)("strong",{children:[Object(r.jsx)("p",{children:"+33634280430"}),Object(r.jsx)("p",{children:"amansaini.pro@gmail.com"}),Object(r.jsx)("p",{children:"Paris, France"})]})]})}),T=function(){return Object(r.jsx)("div",{style:{marginTop:"7rem"},children:Object(r.jsx)(I,{})})},z=(s(39),function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("h4",{children:"Made with \u2764\ufe0f by Aman Singh 2020-2021 "})})});var R=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/contact",component:T}),Object(r.jsx)(m.a,{path:"/about",component:B}),Object(r.jsx)(m.a,{path:"/portfolio",component:A}),Object(r.jsx)(m.a,{exact:!0,path:"/",component:v})]}),Object(r.jsx)(z,{})]})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),D()}],[[40,1,2]]]);
//# sourceMappingURL=main.47e07fd1.chunk.js.map
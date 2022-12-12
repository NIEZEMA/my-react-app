(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),i=n.n(a),j=n(17),s=n(4),r=n(11),l=n(2),b=n(0),o=function(e){var t=e.name,n=e.onChange,c=e.contacts;return Object(b.jsxs)("select",{name:t,onChange:n,children:[Object(b.jsx)("option",{value:"",selected:"selected",children:"No Contact Selected"},-1),c.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})},u=function(e){var t=e.contacts,n=e.title,c=e.setTitle,a=e.contact,i=e.setContact,j=e.date,r=e.setDate,l=e.time,u=e.setTime,O=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"text",name:"title",value:n,onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Appointment Title"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)(o,{name:"contact",value:a,contacts:t.map((function(e){return e.name})),onChange:function(e){return i(e.target.value)},placeholder:"Appointment With"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"date",name:"date",min:function(){var e=(new Date).toLocaleDateString("en-US").split("/"),t=Object(s.a)(e,3),n=t[0],c=t[1],a=t[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),value:j,onChange:function(e){return r(e.target.value)},required:!0})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"time",name:"time",value:l,onChange:function(e){return u(e.target.value)},required:!0})}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Add Appointment"})]})},O=function(e){var t=e.tile;return Object(b.jsx)("div",{className:"tile-container",children:Object.values(t).map((function(e,t){return Object(b.jsx)("p",{className:"".concat(0===t?"tile-title":""," tile"),children:e},t)}))})},d=function(e){var t=e.tiles;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(O,{tile:e},t)}))})},h=function(e){var t=e.appointments,n=e.addAppointment,a=e.contacts,i=Object(c.useState)(""),j=Object(s.a)(i,2),r=j[0],l=j[1],o=Object(c.useState)(a.length>0?a[0].name:""),O=Object(s.a)(o,2),h=O[0],m=O[1],p=Object(c.useState)(""),x=Object(s.a)(p,2),v=x[0],f=x[1],g=Object(c.useState)(""),C=Object(s.a)(g,2),S=C[0],A=C[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Add Appointment"}),Object(b.jsx)(u,{contacts:a,title:r,setTitle:l,contact:h,setContact:m,date:v,setDate:f,time:S,setTime:A,handleSubmit:function(e){e.preventDefault(),n(r,h,v,S),l(""),m(""),f(""),A("")}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Appointments"}),Object(b.jsx)(d,{tiles:t})]})]})},m=function(e){var t=e.name,n=e.setName,c=e.phone,a=e.setPhone,i=e.email,j=e.setEmail,s=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"text",name:"name",value:t,onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Contact Name"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"tel",name:"phone",value:c,onChange:function(e){return a(e.target.value)},required:!0,placeholder:"Enter Phone"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"email",name:"email",value:i,onChange:function(e){return j(e.target.value)},required:!0,placeholder:"Contact Email"})}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Add Contact"})]})},p=function(e){var t=e.contacts,n=e.addContact,a=Object(c.useState)(""),i=Object(s.a)(a,2),j=i[0],r=i[1],l=Object(c.useState)(""),o=Object(s.a)(l,2),u=o[0],O=o[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),x=p[0],v=p[1],f=Object(c.useState)(!1),g=Object(s.a)(f,2),C=g[0],S=g[1];return Object(c.useEffect)((function(){void 0!==t.find((function(e){return e.name===j}))?S(!0):S(!1)}),[j,t,C]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{children:[Object(b.jsxs)("h2",{children:["Add Contact",C?" - Name Already Exists":""]}),Object(b.jsx)(m,{name:j,setName:r,phone:u,setPhone:O,email:x,setEmail:v,handleSubmit:function(e){e.preventDefault(),C||(n(j,u,x),r(""),O(""),v(""))}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(d,{tiles:t})]})]})};var x=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),o=Object(s.a)(i,2),u=o[0],O=o[1],d="/contacts",m="/appointments";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)(r.b,{to:d,activeClassName:"active",children:"Contacts"}),Object(b.jsx)(r.b,{to:m,activeClassName:"active",children:"Appointments"})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",children:Object(b.jsx)(l.a,{to:d})}),Object(b.jsx)(l.b,{path:d,children:Object(b.jsx)(p,{contacts:u,addContact:function(e,t,n){O([].concat(Object(j.a)(u),[{name:e,phone:t,email:n}]))}})}),Object(b.jsx)(l.b,{path:m,children:Object(b.jsx)(h,{appointments:n,addAppointment:function(e,t,c,i){a([].concat(Object(j.a)(n),[{title:e,contact:t,date:c,time:i}]))},contacts:u})})]})})]})};i.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.081423a4.chunk.js.map
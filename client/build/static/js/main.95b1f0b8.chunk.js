(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(26),i=c.n(s),r=(c(34),c(5)),o=c(3),j=(c(35),c(0));function l(){var e=JSON.parse(localStorage.getItem("token")),t=function(){localStorage.removeItem("token"),window.location.href="/"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(j.jsx)("h2",{children:"CLASSROOM"})})}),Object(j.jsx)("div",{children:e?e.isTeacher?Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-info dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})}),Object(j.jsxs)("ul",{className:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/",children:Object(j.jsx)("h6",{children:"Dashboard"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/dashboard/assigment",children:Object(j.jsx)("h6",{children:"Assigment"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/dashboard/test",children:Object(j.jsx)("h6",{children:"Test"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/create/class",children:Object(j.jsx)("h6",{children:"Create Class"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/create/test",children:Object(j.jsx)("h6",{children:"Create Test"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/create/assigment",children:Object(j.jsx)("h6",{children:"Create Assigment"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{className:"dropdown-item",children:Object(j.jsx)("h6",{className:"btn btn-danger",onClick:t,children:"Logout"})})})]})]}):Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-info dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})}),Object(j.jsxs)("ul",{className:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/",children:Object(j.jsx)("h6",{children:"Dashboard"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/dashboard/assigment",children:Object(j.jsx)("h6",{children:"Assigment"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/dashboard/test",children:Object(j.jsx)("h6",{children:"Test"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"dropdown-item",to:"/joinclass",children:Object(j.jsx)("h6",{children:"Join Class"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{className:"dropdown-item",children:Object(j.jsx)("h6",{className:"btn btn-danger",onClick:t,children:"Logout"})})})]})]}):Object(j.jsx)(r.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:"Login"})})]})}var d=c(2),b=c(4),h=c.n(b);function u(e){return Object(j.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[e.msg,Object(j.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}function O(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),l=o[0],b=o[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),m=x[0],p=x[1];return Object(j.jsxs)("div",{children:[m&&Object(j.jsx)(u,{msg:m}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("h2",{children:["Login ",e.heading]}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Email"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"password",name:"",required:"",value:l,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Password"})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("input",{type:"submit",name:"",value:"Login",onClick:function(t){t.preventDefault(),h.a.post(e.endpoint,{email:a,password:l}).then((function(e){var t=e.data,c=e.data.isTeacher;localStorage.setItem("isTeacher",JSON.stringify(c)),localStorage.setItem("token",JSON.stringify(t)),window.location.href="/"})).catch((function(e){p(e)}))}}),Object(j.jsx)(r.b,{to:e.link,children:Object(j.jsx)("input",{type:"submit",name:"",value:"Register",style:{}})})]})]})]})]})}function x(){return Object(j.jsx)(O,{heading:"Student",endpoint:"/api/student/login",link:"/student/register"})}function m(){return Object(j.jsx)(O,{heading:"Teacher",endpoint:"/api/teacher/login",link:"/teacher/register"})}function p(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1],b=Object(n.useState)(""),O=Object(d.a)(b,2),x=O[0],m=O[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),f=g[0],v=g[1],N=Object(n.useState)(""),S=Object(d.a)(N,2),w=S[0],k=S[1];return Object(j.jsxs)("div",{children:[w&&Object(j.jsx)(u,{msg:w}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("h2",{children:["Register ",e.heading]}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"email",name:"",required:"",value:x,onChange:function(e){return m(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Email"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"password",name:"",required:"",value:o,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Password"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:f,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Institute Name"})]}),Object(j.jsx)("input",{type:"submit",name:"",value:"Register",onClick:function(t){t.preventDefault(),h.a.post(e.endpoint,{name:a,password:o,email:x,institute:f}).then((function(t){window.location.href=e.redirect})).catch((function(e){k(e)}))}})]})]})]})}function g(){return Object(j.jsx)(p,{heading:"Student",endpoint:"/api/student/register",redirect:"/student/login"})}function f(){return Object(j.jsx)(p,{heading:"Teacher",endpoint:"/api/teacher/register",redirect:"/teacher/login"})}function v(){return Object(j.jsxs)("div",{className:"login-container",children:[Object(j.jsxs)(r.b,{to:"/student/login",style:{textDecoration:"none",color:"black",backgroundColor:"white",marginTop:"4rem"},children:[Object(j.jsx)("h2",{children:"As Student"}),Object(j.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AlL-wqCyJJYOXlUNiHhpJQHaHa%26pid%3DApi&f=1",alt:""})]}),Object(j.jsxs)(r.b,{to:"/teacher/login",style:{textDecoration:"none",color:"black",backgroundColor:"white",marginTop:"4rem"},children:[Object(j.jsx)("h2",{children:"As Teacher"}),Object(j.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JswZOq7vdMSDgmbwytZonQHaHa%26pid%3DApi&f=1",alt:"#"})]})]})}function N(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(""),b=Object(d.a)(l,2),u=b[0],O=b[1],x=Object(n.useState)(""),m=Object(d.a)(x,2),p=m[0],g=m[1],f=JSON.parse(localStorage.getItem("token"));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Test Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Subject Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"date",name:"",required:"",value:u,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Date"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:p,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Link"})]}),Object(j.jsx)("input",{type:"submit",value:"Create",onClick:function(e){h.a.post("/api/teacher/create/test",{subjectName:r,name:c,token:f.token}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}})]})})})}var S=c(7);function w(){var e,t,c,a=Object(n.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),b=l[0],O=l[1],x=Object(n.useState)(""),m=Object(d.a)(x,2),p=m[0],g=m[1],f=Object(n.useState)(""),v=Object(d.a)(f,2),N=v[0],w=v[1],k=JSON.parse(localStorage.getItem("token"));return Object(j.jsxs)(j.Fragment,{children:[N&&Object(j.jsx)(u,{msg:N}),Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",(e={type:"text",name:"",required:""},Object(S.a)(e,"type",i),Object(S.a)(e,"onChange",(function(e){r(e.target.value)})),e)),Object(j.jsx)("label",{for:"",children:"Subject Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",(t={type:"text",name:"",required:""},Object(S.a)(t,"type",b),Object(S.a)(t,"onChange",(function(e){O(e.target.value)})),t)),Object(j.jsx)("label",{for:"",children:"Time"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",(c={type:"text",name:"",required:""},Object(S.a)(c,"type",p),Object(S.a)(c,"onChange",(function(e){g(e.target.value)})),c)),Object(j.jsx)("label",{for:"",children:"Code"})]}),Object(j.jsx)("input",{type:"submit",value:"Create",onClick:function(e){h.a.post("/api/teacher/create/classroom",{subjectName:i,code:p,time:b,token:k.token}).then((function(e){w(e.data)})).catch((function(e){w(e)}))}})]})})]})}function k(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),r=i[0],o=i[1],l=JSON.parse(localStorage.getItem("token"));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",{type:"text",name:"",required:"",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{for:"",children:"Subject Name"})]}),Object(j.jsx)("input",{type:"submit",value:"Create",onClick:function(e){h.a.post("/api/teacher/create/assigment",{subjectName:r,name:c,token:l.token}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}})]})})})}function y(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=(t[0],t[1],JSON.parse(localStorage.getItem("token")));return Object(n.useEffect)((function(){c.isTeacher?h.a.get("/api/teacher/assigment",{headers:{token:c.token}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})):h.a.get("/api/student/assigment",{headers:{token:c.token}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("center",{children:Object(j.jsx)("h2",{children:"Assigment's"})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"test-card shadow",children:[Object(j.jsxs)("div",{className:"test-card-head",children:[Object(j.jsx)("h3",{children:"Assigment Name"}),Object(j.jsx)("h4",{children:"Subject Name"})]}),Object(j.jsx)("div",{className:"test-card-bottom",children:Object(j.jsx)("h5",{style:{color:"gray"},children:"Institute Name"})})]})})]})}function C(){var e=JSON.parse(localStorage.getItem("token")),t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){e.isTeacher?h.a.get("/api/teacher/classes",{headers:{token:e.token}}).then((function(e){s(e.data.classes)})):h.a.get("/api/student/enrollclass",{headers:{token:e.token}}).then((function(e){s(e.data.class)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("center",{children:Object(j.jsx)("h2",{children:"Classes"})}),Object(j.jsx)("div",{className:"container",children:a.map((function(e){return Object(j.jsxs)("div",{className:"card shadow",children:[Object(j.jsxs)("div",{className:"card-head",children:[Object(j.jsx)("h3",{children:e.subjectName}),Object(j.jsx)("h5",{style:{color:"gray"},children:e.time})]}),Object(j.jsxs)("div",{className:"card-bottom",children:[Object(j.jsxs)("h5",{style:{color:"gray"},children:["code: ",e.code]}),Object(j.jsx)("button",{className:"btn btn-info",children:"Start Now"})]})]})}))})]})}function B(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=(t[0],t[1],JSON.parse(localStorage.getItem("token")));return Object(n.useEffect)((function(){c.isTeacher?h.a.get("/api/teacher/test",{headers:{token:c.token}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})):h.a.get("/api/student/test",{headers:{token:c.token}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("center",{children:Object(j.jsx)("h2",{children:"Test's"})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"test-card shadow",children:[Object(j.jsxs)("div",{className:"test-card-head",children:[Object(j.jsx)("h3",{children:"Test Name"}),Object(j.jsx)("h4",{children:"Subject Name"})]}),Object(j.jsx)("div",{className:"test-card-bottom",children:Object(j.jsx)("h5",{style:{color:"gray"},children:"Institute"})})]})})]})}var T=c(29);function q(e){return function(t){return localStorage.getItem("token")||(window.location.href="/login"),Object(j.jsx)(e,Object(T.a)({},t))}}function F(){var e,t,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(""),o=Object(d.a)(r,2),l=o[0],b=o[1],u=JSON.parse(localStorage.getItem("token"));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",(e={type:"text",name:"",required:""},Object(S.a)(e,"type",s),Object(S.a)(e,"onChange",(function(e){i(e.target.value)})),e)),Object(j.jsx)("label",{for:"",children:"Subject Name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("input",(t={type:"text",name:"",required:""},Object(S.a)(t,"type",l),Object(S.a)(t,"onChange",(function(e){b(e.target.value)})),t)),Object(j.jsx)("label",{for:"",children:"Code"})]}),Object(j.jsx)("input",{type:"submit",value:"Enroll Class",onClick:function(e){e.preventDefault(),h.a.post("/api/student/enrollclass",{token:u.token,subjectName:s,code:l}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}})]})})})}var I=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{component:v,path:"/login"}),Object(j.jsx)(o.a,{component:x,path:"/student/login"}),Object(j.jsx)(o.a,{component:m,path:"/teacher/login"}),Object(j.jsx)(o.a,{component:g,path:"/student/register"}),Object(j.jsx)(o.a,{component:f,path:"/teacher/register"}),Object(j.jsx)(o.a,{component:q(N),path:"/create/test"}),Object(j.jsx)(o.a,{component:q(k),path:"/create/assigment"}),Object(j.jsx)(o.a,{component:q(w),path:"/create/class"}),Object(j.jsx)(o.a,{exact:!0,component:q(C),path:"/"}),Object(j.jsx)(o.a,{component:q(y),path:"/dashboard/assigment"}),Object(j.jsx)(o.a,{component:q(B),path:"/dashboard/test"}),Object(j.jsx)(o.a,{component:q(F),path:"/joinclass"})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),A()}},[[60,1,2]]]);
//# sourceMappingURL=main.95b1f0b8.chunk.js.map
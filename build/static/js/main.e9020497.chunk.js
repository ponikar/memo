(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{105:function(e,t,a){e.exports=a(141)},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=a(18),i=a(29),s=a(79),u=a(95),m=a(12),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:p}),f=a(183),g=a(43),v=a(13),b=a(26),h=a(189),E=a(182),x=a(11),y=a.n(x),j=a(20),O=a(80),w=a.n(O).a.create({baseURL:"https://damp-falls-64323.herokuapp.com/"});w.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var C=function(e){return w.patch("/posts/".concat(e,"/likePost"))},k=function(e,t){return w.patch("/posts/".concat(e),t)},S=function(e){return w.delete("/posts/".concat(e))},N=function(e){return w.post("/user/signin",e)},I=function(e){return w.post("/user/signup",e)},T=function(e){return function(){var t=Object(j.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,w.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e,t){return function(){var a=Object(j.a)(y.a.mark((function a(n){var r,l;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},D=a(181),A=a(175),F=a(176),_=a(143),B=a(177),P=a(178),U=a(179),z=a(85),W=a.n(z),H=a(87),J=a.n(H),M=a(86),R=a.n(M),G=a(61),V=a.n(G),q=a(81),K=a.n(q),Y=a(171),Z=Object(Y.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Q=function(e){var t,a,n,l,o=e.post,i=e.setCurrentId,s=Object(c.b)(),u=Z(),m=JSON.parse(localStorage.getItem("profile")),p=function(){return o.likes.length>0?o.likes.find((function(e){var t,a;return e===((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{fontSize:"small"}),"\xa0",o.likes.length>2?"You and ".concat(o.likes.length-1," others"):"".concat(o.likes.length," like").concat(o.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{fontSize:"small"}),"\xa0",o.likes.length," ",1===o.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(A.a,{className:u.card},r.a.createElement(F.a,{className:u.media,image:o.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:o.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(_.a,{variant:"h6"},o.name),r.a.createElement(_.a,{variant:"body2"},K()(o.createdAt).fromNow())),((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id)===(null===o||void 0===o?void 0:o.creator))&&r.a.createElement("div",{className:u.overlay2},r.a.createElement(B.a,{onClick:function(){return i(o._id)},style:{color:"white"},size:"small"},r.a.createElement(R.a,{fontSize:"default"}))),r.a.createElement("div",{className:u.details},r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"h2"},o.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(_.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},o.title),r.a.createElement(P.a,null,r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},o.message)),r.a.createElement(U.a,{className:u.cardActions},r.a.createElement(B.a,{size:"small",color:"primary",disabled:!(null===m||void 0===m?void 0:m.result),onClick:function(){return s((e=o._id,function(){var t=Object(j.a)(y.a.mark((function t(a){var n,r,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,C(e,null===n||void 0===n||n.token);case 4:r=t.sent,l=r.data,a({type:"LIKE",payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(p,null)),((null===m||void 0===m||null===(n=m.result)||void 0===n?void 0:n.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===m||void 0===m||null===(l=m.result)||void 0===l?void 0:l._id)===(null===o||void 0===o?void 0:o.creator))&&r.a.createElement(B.a,{size:"small",color:"secondary",onClick:function(){return s((e=o._id,function(){var t=Object(j.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(J.a,{fontSize:"small"})," Delete")))},X=a(37),$=a(180),ee=Object(Y.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText($.a[500]),backgroundColor:$.a[500]}},Object(X.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(X.a)(t,"actionDiv",{textAlign:"center"}),t})),te=function(e){var t=e.setCurrentId,a=Object(c.c)((function(e){return e.posts})),n=ee();return a.length?r.a.createElement(E.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(E.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(Q,{post:e,setCurrentId:t}))}))):r.a.createElement(D.a,null)},ae=a(97),ne=a(188),re=a(88),le=a.n(re),oe=Object(Y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t,a=e.currentId,l=e.setCurrentId,o=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(o,2),s=i[0],u=i[1],p=Object(c.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),d=Object(c.b)(),f=oe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){p&&u(p)}),[p]);var v=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(j.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(d(T(Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),v()):(d(L(a,Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(ae.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:h},r.a.createElement(_.a,{variant:"h6"},a?'Editing "'.concat(p.title,'"'):"Creating a Memory"),r.a.createElement(ne.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ne.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(ne.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(le.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(B.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(B.a,{variant:"contained",color:"secondary",size:"small",onClick:v,fullWidth:!0},"Clear"))):r.a.createElement(ae.a,{className:f.paper},r.a.createElement(_.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."))},ie=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(c.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(j.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(h.a,{in:!0},r.a.createElement(f.a,null,r.a.createElement(E.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(E.a,{item:!0,xs:12,sm:7},r.a.createElement(te,{setCurrentId:l})),r.a.createElement(E.a,{item:!0,xs:12,sm:4},r.a.createElement(ce,{currentId:a,setCurrentId:l})))))},se=a(184),ue=a(185),me=a(190),pe=a(89),de=a(90),fe=a.n(de),ge=Object(Y.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText($.a[500]),backgroundColor:$.a[500]}}})),ve=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(c.b)(),i=Object(v.g)(),s=Object(v.f)(),u=ge(),m=function(){o({type:"LOGOUT"}),s.push("/auth"),l(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(pe.a)(e).exp<(new Date).getTime()&&m());l(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(se.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(_.a,{component:g.b,to:"/",className:u.heading,variant:"h2",align:"center"},"Memories"),r.a.createElement("img",{className:u.image,src:fe.a,alt:"icon",height:"60"})),r.a.createElement(ue.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(me.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(_.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(B.a,{variant:"contained",className:u.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(B.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},be=a(91),he=a(94),Ee=a.n(he),xe=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},ye=Object(Y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),je=a(186),Oe=a(187),we=a(92),Ce=a.n(we),ke=a(93),Se=a.n(ke),Ne=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,o=e.autoFocus,c=e.type,i=e.handleShowPassword;return r.a.createElement(E.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(ne.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:c,InputProps:"password"===t?{endAdornment:r.a.createElement(je.a,{position:"end"},r.a.createElement(Oe.a,{onClick:i},"password"===c?r.a.createElement(Ce.a,null):r.a.createElement(Se.a,null)))}:null}))},Ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Te=function(){var e=Object(n.useState)(Ie),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],p=Object(c.b)(),d=Object(v.f)(),g=ye(),h=Object(n.useState)(!1),x=Object(b.a)(h,2),O=x[0],w=x[1],C=function(){var e=Object(j.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{p({type:"AUTH",data:{result:a,token:n}}),d.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return l(Object(m.a)(Object(m.a)({},a),{},Object(X.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(ae.a,{className:g.paper,elevation:3},r.a.createElement(me.a,{className:g.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(_.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),p(s?(t=a,n=d,function(){var e=Object(j.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t);case 3:r=e.sent,l=r.data,a({type:"AUTH",data:l}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(j.a)(y.a.mark((function a(n){var r,l;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(E.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(Ne,{name:"lastName",label:"Last Name",handleChange:k,half:!0})),r.a.createElement(Ne,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(Ne,{name:"password",label:"Password",handleChange:k,type:O?"text":"password",handleShowPassword:function(){return w(!O)}}),s&&r.a.createElement(Ne,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})),r.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(be.GoogleLogin,{clientId:"104922631820-77rtu2v12nb2a25j0d3e1ul20t3l1t50.apps.googleusercontent.com",render:function(e){return r.a.createElement(B.a,{className:g.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(xe,null),variant:"contained"},"Google Sign In")},onSuccess:C,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{item:!0},r.a.createElement(B.a,{onClick:function(){l(Ie),u((function(e){return!e})),w(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Le=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"lg"},r.a.createElement(ve,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:ie}),r.a.createElement(v.a,{path:"/auth",exact:!0,component:Te}))))},De=(a(140),Object(i.e)(d,Object(i.d)(Object(i.a)(s.a))));o.a.render(r.a.createElement(c.a,{store:De},r.a.createElement(Le,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a.p+"static/media/memories.5c0c63fb.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.e9020497.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},119:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(15),c=a.n(r),i=(a(119),a(83),a(27)),o=a(22),l=a(16),j=a(67);a(120),a(159);j.a.initializeApp({apiKey:"AIzaSyBvpsnlTvYWK4NmAp-OaNacNo41ZUuKQMM",authDomain:"movies-app-5828.firebaseapp.com",projectId:"movies-app-5828",storageBucket:"movies-app-5828.appspot.com",messagingSenderId:"825007569291",appId:"1:825007569291:web:0f708ee18492bda785d78e"});j.a.auth();var u=j.a.firestore(),d=j.a,h=a(1),b=n.a.createContext();function p(){return Object(s.useContext)(b)}var O=function(e){var t=e.children,a=Object(s.useState)(null),n=Object(l.a)(a,2),r=n[0],c=n[1],i=Object(s.useState)(!0),o=Object(l.a)(i,2),j=o[0],u=o[1];Object(s.useEffect)((function(){return d.auth().onAuthStateChanged((function(e){c(e),u(!1)}))}),[]);var p={user:r,signUp:function(e,t){return d.auth().createUserWithEmailAndPassword(e,t)},logIn:function(e,t){return d.auth().signInWithEmailAndPassword(e,t)},logOut:function(){return d.auth().signOut()},resetPassword:function(e){return d.auth().sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(h.jsx)(b.Provider,{value:p,children:!j&&t})},x=a(193),m=a(29),v=a.n(m),f=[],g=function(){var e=p(),t=e.user,a=e.logOut,r=Object(s.useState)(""),c=Object(l.a)(r,2),j=(c[0],c[1]),u=Object(o.e)(),d=n.a.forwardRef((function(e,t){var a=e.children,s=e.onClick;return Object(h.jsxs)("a",{href:"",ref:t,onClick:function(e){e.preventDefault(),s(e)},children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",className:"bi bi-person-circle",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(h.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]}),a]})}));return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav mr-auto col-3",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/aboutuspage",children:"About Us"})})]}),Object(h.jsxs)("form",{className:"form-inline my-2 my-lg-0 col-6",children:[Object(h.jsx)("label",{htmlFor:"searchValue"}),Object(h.jsx)("input",{className:"form-control mr-sm-2 col-8",type:"search",placeholder:"Search Movies/TV Shows","aria-label":"Search",id:"searchValue"}),Object(h.jsx)("button",{className:"btn btn-outline-primary my-2 my-sm-0",type:"submit",onClick:function(e){e.preventDefault();var t=document.getElementById("searchValue").value;u.push("/search",{data:t})},children:"Search"}),Object(h.jsx)("ul",{children:f})]}),Object(h.jsx)("ul",{className:"navbar-nav mr-auto",children:null!=t?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(x.a.Toggle,{as:d,id:"dropdown-custom-components"}),Object(h.jsxs)(x.a.Menu,{children:[Object(h.jsx)(x.a.Item,{eventKey:"1",children:Object(h.jsx)(i.b,{to:"/profile",children:"Profile"})}),Object(h.jsx)(x.a.Item,{eventKey:"2",children:Object(h.jsx)(i.b,{to:"/account",children:"Account"})}),Object(h.jsx)(x.a.Item,{eventKey:"3",onClick:function(e){j("");try{a(),u.push("/")}catch(t){j("Failed to sign out.")}},children:"Sign Out"})]})]})})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/login",children:"Log In"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/signup",children:"Sign Up"})})]})})]})})})},y=a(30),w=a(24),k=a(34),C=a(33),S=function(e){return Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsx)("li",{className:"list-group-item",children:e.person.firstName}),Object(h.jsx)("li",{className:"list-group-item",children:e.person.lastName}),Object(h.jsx)("li",{className:"list-group-item",children:e.person.email})]})},D=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this,e)).state={aboutusall:[]},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.collection("aboutus").get().then((function(t){var a=[];t.forEach((function(e){a.push(e.data())})),e.setState({aboutusall:a})})).catch((function(e){return console.log(e)}))}},{key:"aboutusList",value:function(){return this.state.aboutusall.map((function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("li",{className:"list-group-item col-4",children:Object(h.jsx)(S,{person:e},e._id)})})}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("ul",{className:"list-group",children:this.aboutusList()})})}}]),a}(s.Component),N=a(14),P=a.n(N),A=a(25),M=a(197),L=a(199),R=a(194),I=a(102),F=function(e){var t=e.children;return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t})},T=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useRef)(),n=p().signUp,r=Object(s.useState)(""),c=Object(l.a)(r,2),j=c[0],u=c[1],d=Object(s.useState)(!1),b=Object(l.a)(d,2),O=b[0],x=b[1],m=Object(o.e)();function v(){return(v=Object(A.a)(P.a.mark((function s(r){return P.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){s.next=3;break}return s.abrupt("return",u("Passwords do not match."));case 3:return s.prev=3,u(""),x(!0),s.next=8,n(e.current.value,t.current.value);case 8:m.push("/pref"),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(3),u("Failed to create an account.");case 14:x(!1);case 15:case"end":return s.stop()}}),s,null,[[3,11]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{children:Object(h.jsx)(M.a,{style:{minWidth:600},children:Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Sign Up"}),j&&Object(h.jsx)(L.a,{variant:"danger",children:j}),Object(h.jsxs)(R.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email Address"}),Object(h.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",ref:e,required:!0})]}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})]}),Object(h.jsxs)(R.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(R.a.Label,{children:"Confirm Password"}),Object(h.jsx)(R.a.Control,{type:"password",placeholder:"Password",ref:a,required:!0})]}),Object(h.jsx)(I.a,{disabled:O,className:"w-100",as:"input",type:"submit",value:"Submit"})]})]})})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(h.jsx)(i.b,{to:"/login",children:"Log In"})]})]})},E=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=p(),n=a.logIn,r=(a.user,Object(s.useState)("")),c=Object(l.a)(r,2),j=c[0],u=c[1],d=Object(s.useState)(!1),b=Object(l.a)(d,2),O=b[0],x=b[1],m=Object(o.e)();function v(){return(v=Object(A.a)(P.a.mark((function a(s){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,u(""),x(!0),a.next=6,n(e.current.value,t.current.value);case 6:m.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),u("Failed to sign in.");case 12:x(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{children:Object(h.jsx)(M.a,{style:{minWidth:600},children:Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Log In"}),j&&Object(h.jsx)(L.a,{variant:"danger",children:j}),Object(h.jsxs)(R.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email Address"}),Object(h.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",ref:e,required:!0})]}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})]}),Object(h.jsx)(I.a,{disabled:O,className:"w-100",as:"input",type:"submit",value:"Submit"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-4",children:Object(h.jsx)(i.b,{to:"/forgot-password",children:"Forgot Password"})})]})})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(h.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},G=function(){var e=Object(s.useRef)(),t=p().resetPassword,a=Object(s.useState)(""),n=Object(l.a)(a,2),r=n[0],c=n[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),u=j[0],d=j[1],b=Object(s.useState)(!1),O=Object(l.a)(b,2),x=O[0],m=O[1];function v(){return(v=Object(A.a)(P.a.mark((function a(s){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,d(""),c(""),m(!0),a.next=7,t(e.current.value);case 7:d("Check your email to reset password"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),c("Failed to reset password.");case 13:m(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{children:Object(h.jsx)(M.a,{style:{minWidth:600},children:Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Reset Password"}),r&&Object(h.jsx)(L.a,{variant:"danger",children:r}),u&&Object(h.jsx)(L.a,{variant:"success",children:u}),Object(h.jsxs)(R.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email Address"}),Object(h.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",ref:e,required:!0})]}),Object(h.jsx)(I.a,{disabled:x,className:"w-100",as:"input",type:"submit",value:"Submit"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-4",children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})})]})})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(h.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},B=function(){return Object(h.jsx)("div",{})},_=function(){var e=p().user;return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:Object(h.jsx)(M.a,{style:{minWidth:600},children:Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Account Information"}),Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)("strong",{children:"Email: "}),Object(h.jsx)("span",{children:e.email})]}),Object(h.jsx)(i.b,{to:"/update-account",children:Object(h.jsx)("div",{className:"text-center mt-4",children:Object(h.jsx)(I.a,{className:"w-50 center",as:"input",type:"submit",value:"Update Account Information"})})})]})})})},W=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],j=c[1],u=Object(s.useState)(!1),d=Object(l.a)(u,2),b=d[0],O=d[1],x=Object(s.useRef)(),m=Object(s.useRef)(),v=Object(s.useRef)(),f=p(),g=f.user,y=f.updatePassword,w=f.updateEmail;function k(){return(k=Object(A.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n(""),j(""),m.current.value===v.current.value){e.next=5;break}return e.abrupt("return",n("Passwords do not match."));case 5:O(!0),a=[],x.current.value!==g.email&&a.push(w(x.current.value)),m.current.value&&v.current.value&&a.push(y(m.current.value)),Promise.all(a).then((function(){j("Account successfully updated.")})).catch((function(){n("Failed to update account information.")})).finally((function(){O(!1)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{children:Object(h.jsx)(M.a,{style:{minWidth:600},children:Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Update Account"}),a&&Object(h.jsx)(L.a,{variant:"danger",children:a}),o&&Object(h.jsx)(L.a,{variant:"success",children:o}),Object(h.jsxs)(R.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email Address"}),Object(h.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",ref:x,required:!0,defaultValue:g.email})]}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{type:"password",ref:m,placeholder:"Leave empty to not change"})]}),Object(h.jsxs)(R.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(R.a.Label,{children:"Confirm Password"}),Object(h.jsx)(R.a.Control,{type:"password",placeholder:"Leave empty to not change",ref:v})]}),Object(h.jsx)(I.a,{disabled:b,className:"w-100",as:"input",type:"submit",value:"Update Account"})]})]})})}),Object(h.jsx)("div",{className:"w-100 text-center mt-2",children:Object(h.jsx)(i.b,{to:"/account",children:"Go Back"})})]})},U=a(103);function V(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useRef)(),n=Object(o.e)(),r=Object(s.useState)(""),c=Object(l.a)(r,2),i=c[0],j=c[1],d=[],b=[],O=[],x={},m=p().user,v=function(s){s.preventDefault(),d=(d=e.current.value.split(",")).map((function(e){return e.trim()})),b=(b=t.current.value.split(",")).map((function(e){return e.trim()})),O=(O=a.current.value.split(",")).map((function(e){return e.trim()}));var r=x.map((function(e){return e.name}));u.collection("preferences").doc(m.uid).set({actorSelections:d,directorSelections:b,genreSelections:r,movieSelections:O}),setTimeout((function(){n.push("/")}),5e3),j("Preferences successfully set. Redirecting back to home page in 5 seconds.")};return Object(h.jsxs)(M.a,{children:[Object(h.jsx)("h3",{className:"ml-4 mt-4",children:"Set your account preferences"}),Object(h.jsxs)(M.a.Body,{children:[i&&Object(h.jsx)(L.a,{variant:"success",children:i}),Object(h.jsxs)(R.a,{onSubmit:v,children:[Object(h.jsxs)(R.a.Group,{id:"actors",children:[Object(h.jsx)(R.a.Label,{children:"Write some of your favorite actors (separate using commas or leave blank)"}),Object(h.jsx)(R.a.Control,{as:"textarea",rows:3,ref:e})]}),Object(h.jsxs)(R.a.Group,{id:"directors",children:[Object(h.jsx)(R.a.Label,{children:"Write some of your favorite directors (separate using commas or leave blank)"}),Object(h.jsx)(R.a.Control,{as:"textarea",rows:3,ref:t})]}),Object(h.jsxs)(R.a.Group,{id:"genres",children:[Object(h.jsx)(R.a.Label,{children:"Select your favorite genres"}),Object(h.jsx)(U.Multiselect,{options:[{name:"Action"},{name:"Adventure"},{name:"Animation"},{name:"Comedy"},{name:"Documentary"},{name:"Drama"},{name:"Family"},{name:"Fantasy"},{name:"Horror"},{name:"Mystery"},{name:"Romance"},{name:"Science Fiction"},{name:"Thriller"},{name:"Western"}],displayValue:"name",onSelect:function(e,t){x=e}})]}),Object(h.jsxs)(R.a.Group,{id:"movies",children:[Object(h.jsx)(R.a.Label,{children:"Write some of your favorite movies (separate using commas or leave blank)"}),Object(h.jsx)(R.a.Control,{as:"textarea",rows:3,ref:a})]})]}),Object(h.jsx)(I.a,{onClick:v,children:"Save"})," ",Object(h.jsx)(I.a,{onClick:function(){d=[],O=[],b=[];u.collection("preferences").doc(m.uid).set({actorSelections:d,directorSelections:b,genreSelections:[],movieSelections:O}),setTimeout((function(){n.push("/")}),5e3),j("Preferences successfully skipped. Redirecting back to home page in 5 seconds.")},variant:"link",children:"Skip"})," "]})]})}var z=a(196),q=a(198),H=a(187),K=a(188),J=a(195),Q={height:"40rem",overflow:"auto"},Y=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this)).state={showID:e.id,detailsData:e.data.detailsData,genres:e.data.genres,productionCompanies:e.data.productionCompanies,cast:e.data.cast,crew:e.data.crew,reviews:e.data.reviews,videos:e.data.videos,providers:e.data.providers,summary:e.data.summary},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){}},{key:"castPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:Q,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.cast.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"crewPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:Q,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group",children:this.state.crew.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"reviewsPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:Q,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.reviews.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"videosPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:Q,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.videos.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:e[0],children:e[1]})})}))})})})}},{key:"popover",value:function(){return Object(h.jsxs)(q.a,{id:"popover-basic",style:Q,children:[Object(h.jsx)(q.a.Title,{as:"h3",children:this.state.detailsData.title}),Object(h.jsxs)(q.a.Content,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Summary"}),Object(h.jsx)("br",{}),this.state.summary]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Genres"}),Object(h.jsx)("br",{}),this.state.genres.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Production Companies"}),Object(h.jsx)("br",{}),this.state.productionCompanies.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Providers [Buyers]"}),Object(h.jsx)("br",{}),this.state.providers.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(H.a,{children:[Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.castPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Cast Details"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.crewPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Crew Details"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.reviewsPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Reviews"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.videosPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Related Videos"})})})]})]})]})}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(M.a,{style:{width:"15em",marginLeft:10,marginTop:10},border:"success",children:[Object(h.jsx)(M.a.Img,{style:{height:"12em"},variant:"top",src:"http://image.tmdb.org/t/p/w185"+this.state.detailsData.poster_path}),Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)(M.a.Title,{children:this.state.detailsData.title}),Object(h.jsxs)(M.a.Text,{children:["Rating: ",this.state.detailsData.vote_average," out of 10"]}),Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.popover(),children:Object(h.jsx)(I.a,{variant:"info",children:"More Details"})})]})]})})}}]),a}(s.Component),Z=a(200),X=a(192),$=a(201),ee=(a(100),a(46)),te=a.n(ee),ae=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this,e)).handleChange=function(){var e=Object(A.a)(P.a.mark((function e(t){var a,n,r,c,i,o,l,j;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,window.sessionStorage.setItem("genre",a),n="https://movies-tmdb-api.herokuapp.com/movies/","https://movies-tmdb-api.herokuapp.com/genres/",r=v.a.get("https://movies-tmdb-api.herokuapp.com/genres/"+a),e.next=7,r.then((function(e){return e.data.genreList}));case 7:c=e.sent,i=c.map((function(e){return n+e})),o=[],l=0;case 11:if(!(l<i.length)){e.next=19;break}return e.next=14,v.a.get(i[l]);case 14:j=e.sent,o.push(j.data);case 16:l++,e.next=11;break;case 19:console.log(o),s.setState({latestMoviesData:o}),s.props.history.go(0);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={latestMoviesData:[],loading:!0},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,a,s,n,r,c,i,o,l,j,u,d,h,b,p,O,x=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(setTimeout((function(){x.setState({loading:!1})}),6e3),!window.sessionStorage.getItem("genre")){e.next=24;break}return t=window.sessionStorage.getItem("genre"),a="https://movies-tmdb-api.herokuapp.com/movies/","https://movies-tmdb-api.herokuapp.com/genres/",s=v.a.get("https://movies-tmdb-api.herokuapp.com/genres/"+t),e.next=8,s.then((function(e){return e.data.genreList}));case 8:n=e.sent,r=n.map((function(e){return a+e})),c=[],i=0;case 12:if(!(i<r.length)){e.next=20;break}return e.next=15,v.a.get(r[i]);case 15:o=e.sent,c.push(o.data);case 17:i++,e.next=12;break;case 20:console.log(c),this.setState({latestMoviesData:c}),e.next=45;break;case 24:return l=this.props.location.state.data,j="https://movies-tmdb-api.herokuapp.com/movies/","https://movies-tmdb-api.herokuapp.com/genres/",u=v.a.get("https://movies-tmdb-api.herokuapp.com/genres/"+l),e.next=30,u.then((function(e){return e.data.genreList}));case 30:d=e.sent,h=d.map((function(e){return j+e})),b=[],p=0;case 34:if(!(p<h.length)){e.next=44;break}if(!(p>8)){e.next=37;break}return e.abrupt("break",44);case 37:return e.next=39,v.a.get(h[p]);case 39:O=e.sent,b.push(O.data);case 41:p++,e.next=34;break;case 44:this.setState({latestMoviesData:b});case 45:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showFilteredMovies",value:function(){var e=0,t=[];for(console.log(this.state.latestMoviesData);e<this.state.latestMoviesData.length;e++){var a=this.state.latestMoviesData[e],s=this.state.latestMoviesData[e];t.splice(0,0,Object(h.jsx)("div",{style:{display:"inline-block"},children:Object(h.jsx)(Y,{id:a.id,data:s})}))}return t}},{key:"render",value:function(){var e=this;return this.state.loading?Object(h.jsx)("div",{className:"App1",children:Object(h.jsx)(te.a,{size:30,color:"#000000",loading:this.state.loading})}):Object(h.jsxs)("div",{children:[Object(h.jsx)(z.a,{variant:"contained",color:"primary",style:{marginLeft:20},onClick:function(){e.props.history.push("/today")},children:"GET TV Shows Airing Today"}),Object(h.jsxs)(Z.a,{style:{marginLeft:600},children:[Object(h.jsx)($.a,{htmlFor:"age-native-simple",children:"Genre"}),Object(h.jsxs)(X.a,{native:!0,value:this.state.age,onChange:this.handleChange,inputProps:{name:"age",id:"age-native-simple"},children:[Object(h.jsx)("option",{"aria-label":"None",value:""}),Object(h.jsx)("option",{value:28,children:"Action"}),Object(h.jsx)("option",{value:12,children:"Adventure"}),Object(h.jsx)("option",{value:16,children:"Animation"}),Object(h.jsx)("option",{value:35,children:"Comedy"}),Object(h.jsx)("option",{value:80,children:"Crime"}),Object(h.jsx)("option",{value:99,children:"Documentary"}),Object(h.jsx)("option",{value:18,children:"Drama"}),Object(h.jsx)("option",{value:10751,children:"Family"}),Object(h.jsx)("option",{value:14,children:"Fantasy"}),Object(h.jsx)("option",{value:36,children:"History"}),Object(h.jsx)("option",{value:27,children:"Horror"}),Object(h.jsx)("option",{value:10402,children:"Music"}),Object(h.jsx)("option",{value:9648,children:"Mystery"}),Object(h.jsx)("option",{value:10749,children:"Romance"}),Object(h.jsx)("option",{value:878,children:"Science Fiction"}),Object(h.jsx)("option",{value:53,children:"Thriller"}),Object(h.jsx)("option",{value:10752,children:"War"})]})]}),Object(h.jsx)("ul",{children:this.showFilteredMovies()})]})}}]),a}(n.a.Component),se=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this,e)).handleChange=function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.props.history.push("/filter",{data:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={latestMovies:[],latestMoviesData:[],filter:!1,filterValue:"",filteredMovies:[],filteredMoviesData:[],genreList:[],loading:!0},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,a,s,n,r,c,i,o=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){o.setState({loading:!1})}),6e3),t="https://movies-tmdb-api.herokuapp.com/movies/","https://movies-tmdb-api.herokuapp.com/nowplaying/",a=v.a.get("https://movies-tmdb-api.herokuapp.com/nowplaying/"),e.next=6,a.then((function(e){return e.data.movieList}));case 6:s=e.sent,n=s.map((function(e){return t+e})),r=[],c=0;case 10:if(!(c<n.length)){e.next=18;break}return e.next=13,v.a.get(n[c]);case 13:i=e.sent,r.push(i.data);case 15:c++,e.next=10;break;case 18:console.log(r),this.setState({latestMoviesData:r});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showMovies",value:function(){for(var e=[],t=0;t<this.state.latestMoviesData.length;t++){var a=this.state.latestMoviesData[t],s=this.state.latestMoviesData[t];"B"===a.detailsData.original_title[0]&&"o"===a.detailsData.original_title[1]||"en"===a.detailsData.original_language&&e.splice(0,0,Object(h.jsx)("div",{style:{display:"inline-block"},children:Object(h.jsx)(Y,{id:a.showID,data:s})}))}return e}},{key:"render",value:function(){var e=this;return this.state.loading?Object(h.jsx)("div",{className:"App1",children:Object(h.jsx)(te.a,{size:30,color:"#000000",loading:this.state.loading})}):Object(h.jsxs)("div",{children:[Object(h.jsx)(z.a,{variant:"contained",color:"primary",style:{marginLeft:20},onClick:function(){e.props.history.push("/today")},children:"GET TV Shows Airing Today"}),Object(h.jsxs)(Z.a,{style:{marginLeft:600},children:[Object(h.jsx)($.a,{htmlFor:"age-native-simple",children:"Genre"}),Object(h.jsxs)(X.a,{native:!0,value:"Select a Genre",onChange:this.handleChange,inputProps:{name:"age",id:"age-native-simple"},children:[Object(h.jsx)("option",{"aria-label":"None",value:""}),Object(h.jsx)("option",{value:28,children:"Action"}),Object(h.jsx)("option",{value:12,children:"Adventure"}),Object(h.jsx)("option",{value:16,children:"Animation"}),Object(h.jsx)("option",{value:35,children:"Comedy"}),Object(h.jsx)("option",{value:80,children:"Crime"}),Object(h.jsx)("option",{value:99,children:"Documentary"}),Object(h.jsx)("option",{value:18,children:"Drama"}),Object(h.jsx)("option",{value:10751,children:"Family"}),Object(h.jsx)("option",{value:14,children:"Fantasy"}),Object(h.jsx)("option",{value:36,children:"History"}),Object(h.jsx)("option",{value:27,children:"Horror"}),Object(h.jsx)("option",{value:10402,children:"Music"}),Object(h.jsx)("option",{value:9648,children:"Mystery"}),Object(h.jsx)("option",{value:10749,children:"Romance"}),Object(h.jsx)("option",{value:878,children:"Science Fiction"}),Object(h.jsx)("option",{value:53,children:"Thriller"}),Object(h.jsx)("option",{value:10752,children:"War"})]})]}),Object(h.jsx)("ul",{children:this.showMovies()})]})}}]),a}(n.a.Component),ne="http://image.tmdb.org/t/p/w300",re=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this,e)).state={searchResults:[],loading:!0},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,a,s,n,r,c,i,o,l=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){l.setState({loading:!1})}),6e3),t=this.props.location.state.data,a="https://movies-tmdb-api.herokuapp.com/movies/","https://movies-tmdb-api.herokuapp.com/movieList/",s=v.a.get("https://movies-tmdb-api.herokuapp.com/movieList/"+t),console.log("latest movies are",s),e.next=8,s.then((function(e){return e.data.movieList}));case 8:n=e.sent,r=n.map((function(e){return a+e})),console.log(r),c=[],i=0;case 13:if(!(i<r.length)){e.next=22;break}return e.next=16,v.a.get(r[i]);case 16:o=e.sent,console.log(o),c.push(o.data);case 19:i++,e.next=13;break;case 22:console.log(c),this.setState({searchResults:c});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showSearchResults",value:function(){var e=0,t=[];for(console.log(this.state.searchResults);e<this.state.searchResults.length;e++){var a=this.state.searchResults[e];console.log(a),a.backdrop_path?ne+a.detailsData.backdrop_path:ne+a.detailsData.poster_path,(a.detailsData.backdrop_path||a.detailsData.poster_path)&&("en"===a.detailsData.original_language&&t.push(Object(h.jsx)("div",{style:{display:"inline-block"},children:Object(h.jsx)(Y,{id:a.id,data:a})})))}return t}},{key:"render",value:function(){return this.state.loading?Object(h.jsx)("div",{className:"App1",children:Object(h.jsx)(te.a,{size:30,color:"#000000",loading:this.state.loading})}):Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:this.showSearchResults()})})}}]),a}(n.a.Component),ce="http://image.tmdb.org/t/p/w185",ie={height:"40rem",overflow:"auto"},oe=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this)).state={showID:e.id,detailsData:e.data.detailsData,genres:e.data.genres,productionCompanies:e.data.productionCompanies,cast:e.data.cast,crew:e.data.crew,reviews:e.data.reviews,videos:e.data.videos,providers:e.data.providers,seasons:e.data.seasons},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"castPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:ie,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.cast.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"crewPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:ie,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group",children:this.state.crew.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"reviewsPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:ie,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.reviews.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:e})}))})})})}},{key:"videosPopover",value:function(){return Object(h.jsx)(q.a,{id:"popover-basic",style:ie,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.videos.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:e[0],children:e[1]})})}))})})})}},{key:"seasonItemPopover",value:function(e){return Object(h.jsxs)(q.a,{id:"popover-basic",style:ie,children:[Object(h.jsx)(q.a.Title,{children:e[2]}),Object(h.jsxs)(q.a.Content,{children:[Object(h.jsx)("img",{src:ce+e[4],alt:e[2]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Summary"}),Object(h.jsx)("br",{}),e[3]]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Last Air Date"}),Object(h.jsx)("br",{}),e[0]]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Episodes in Season"}),Object(h.jsx)("br",{}),e[1]]}),Object(h.jsx)("hr",{})]})]})}},{key:"seasonsPopover",value:function(){var e=this;return Object(h.jsx)(q.a,{id:"popover-basic",style:ie,children:Object(h.jsx)(q.a.Content,{children:Object(h.jsx)("ul",{className:"list-group flush",children:this.state.seasons.map((function(t){return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:e.seasonItemPopover(t),children:Object(h.jsx)(I.a,{variant:"link",children:t[2]})})})}))})})})}},{key:"popover",value:function(){return Object(h.jsxs)(q.a,{id:"popover-basic",style:ie,children:[Object(h.jsx)(q.a.Title,{as:"h3",children:this.state.detailsData.name}),Object(h.jsxs)(q.a.Content,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Genres"}),Object(h.jsx)("br",{}),this.state.genres.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Production Companies"}),Object(h.jsx)("br",{}),this.state.productionCompanies.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Providers [Buyers]"}),Object(h.jsx)("br",{}),this.state.providers.join()]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(H.a,{children:[Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.seasonsPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Season Details"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.castPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Cast Details"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.crewPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Crew Details"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.reviewsPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Reviews"})})}),Object(h.jsx)(K.a,{children:Object(h.jsx)(J.a,{trigger:"click",rootClose:!0,placement:"auto",overlay:this.videosPopover(),children:Object(h.jsx)(I.a,{variant:"link",children:"Related Videos"})})})]})]})]})}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(M.a,{style:{width:"18em"},border:"success",children:[Object(h.jsx)(M.a.Img,{style:{height:"12em"},variant:"top",src:ce+this.state.detailsData.poster_path}),Object(h.jsxs)(M.a.Body,{children:[Object(h.jsx)(M.a.Title,{children:this.state.detailsData.name}),Object(h.jsxs)(M.a.Text,{children:["Rating: ",this.state.detailsData.vote_average," out of 10"]}),Object(h.jsx)(J.a,{trigger:"click",placement:"auto",overlay:this.popover(),children:Object(h.jsx)(I.a,{variant:"info",children:"More Details"})})]})]})})}}]),a}(s.Component),le=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){var s;return Object(y.a)(this,a),(s=t.call(this,e)).state={tvShows:[],tvShowsData:[],loading:!0},s}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,a,s,n,r,c,i,o=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){o.setState({loading:!1})}),6e3),t="https://movies-tmdb-api.herokuapp.com/tvshows/","https://movies-tmdb-api.herokuapp.com/nowplaying/",a=v.a.get("https://movies-tmdb-api.herokuapp.com/nowplaying/"),e.next=6,a.then((function(e){return e.data.tvshowList}));case 6:s=e.sent,n=s.map((function(e){return t+e})),console.log("latest tv ursl",n),r=[],c=0;case 11:if(!(c<n.length)){e.next=19;break}return e.next=14,v.a.get(n[c]);case 14:i=e.sent,r.push(i.data);case 16:c++,e.next=11;break;case 19:console.log("temp array is ",r),this.setState({tvShowsData:r});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showtvShows",value:function(){var e=[],t=0;for(console.log("after data os",this.state.tvShowsData);t<this.state.tvShowsData.length;t++){var a=this.state.tvShowsData[t],s=this.state.tvShowsData[t];e.splice(0,0,Object(h.jsx)("div",{style:{display:"inline-block"},children:Object(h.jsx)(oe,{id:a.showID,data:s})}))}return console.log("res is ",e),e}},{key:"render",value:function(){return this.state.loading?Object(h.jsx)("div",{className:"App1",children:Object(h.jsx)(te.a,{size:30,color:"#000000",loading:this.state.loading})}):Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:this.showtvShows()})})}}]),a}(n.a.Component);var je=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{children:Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(g,{}),Object(h.jsx)("br",{}),Object(h.jsx)(o.a,{path:"/aboutuspage",exact:!0,component:D}),Object(h.jsx)(o.a,{path:"/signup",exact:!0,component:T}),Object(h.jsx)(o.a,{path:"/login",exact:!0,component:E}),Object(h.jsx)(o.a,{path:"/forgot-password",exact:!0,component:G}),Object(h.jsx)(o.a,{path:"/profile",exact:!0,component:B}),Object(h.jsx)(o.a,{path:"/account",exact:!0,component:_}),Object(h.jsx)(o.a,{path:"/update-account",exact:!0,component:W}),Object(h.jsx)(o.a,{path:"/pref",exact:!0,component:V}),Object(h.jsx)(o.a,{path:"/",exact:!0,component:se}),Object(h.jsx)(o.a,{path:"/search",exact:!0,component:re}),Object(h.jsx)(o.a,{path:"/today",exact:!0,component:le}),Object(h.jsx)(o.a,{path:"/filter",exact:!0,component:ae})]})})})})},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,203)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(je,{})}),document.getElementById("root")),ue()},83:function(e,t,a){}},[[157,1,2]]]);
//# sourceMappingURL=main.59942920.chunk.js.map
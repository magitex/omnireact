_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"6gHY":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/login",function(){return a("B7x/")}])},"B7x/":function(e,t,a){"use strict";a.r(t);var s=a("nKUr"),n=a("q1tI"),c=a("24c+"),i=a("H+61"),r=a("UlJF"),l=a("+Css"),o=a("7LId"),u=a("VIvw"),d=a("iHvq"),j=a("cpVT"),b=a("YFqc"),h=a.n(b),m=a("20a2"),p=a.n(m),O=a("W80I"),f=a("TeRw"),g=a("Vl3Y"),x=a("5rEg"),N=a("/MKj"),v=a("yTuJ");a("EMJx");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(d.a)(e);if(t){var n=Object(d.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(u.a)(this,a)}}var w=function(e){Object(o.a)(a,e);var t=y(a);function a(e){var s;return Object(i.a)(this,a),s=t.call(this,e),Object(j.a)(Object(l.a)(s),"handleChange",(function(e){s.setState(Object(j.a)({},e.target.name,e.target.value))})),Object(j.a)(Object(l.a)(s),"modalSuccess",(function(e){f.a[e]({message:"Success",description:"OTP generated successfully!",duration:10})})),Object(j.a)(Object(l.a)(s),"modalWarning",(function(e){f.a[e]({message:"Good bye!",description:"OTP is not valid"})})),Object(j.a)(Object(l.a)(s),"handleLoginSubmit",(function(e){var t;console.log("test");v.a.getToken();var a=(t=v.a.generateOTP(s.state))&&t.data.data.data;console.log("responseData",a),s.setState({otp:a.data,visible:!0}),console.log("otp",a.data.data),s.modalSuccess("success")})),Object(j.a)(Object(l.a)(s),"handleotpSubmit",(function(e){if(s.state.otp!=s.state.otpsend)modalWarning("warning");else{var t;v.a.getToken();t=v.a.validateOTP(s.state),console.log("data",t),sessionStorage.setItem("fullName",t.data.fullName),sessionStorage.setItem("userID",t.data.userID),sessionStorage.setItem("mobileNo",t.data.mobileNo),sessionStorage.setItem("email",t.data.email),sessionStorage.setItem("profilePic",t.data.profilePic),s.modalSuccess("success"),s.props.dispatch(Object(O.d)()),p.a.push("/")}})),s.state={username:"",phonenumber:"",otp:"",otpsend:"",visible:!1},s}return Object(r.a)(a,[{key:"handleFeatureWillUpdate",value:function(e){e.preventDefault(),f.a.open({message:"Opp! Something went wrong.",description:"This feature has been updated later!",duration:500})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"ps-my-account",children:Object(s.jsx)("div",{className:"container",children:0==this.state.visible?Object(s.jsxs)(g.a,{className:"ps-form--account",onFinish:this.handleLoginSubmit.bind(this),children:[Object(s.jsxs)("ul",{className:"ps-tab-list",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsx)(h.a,{href:"/account/login",children:Object(s.jsx)("a",{children:"Login"})})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{href:"/account/register",children:Object(s.jsx)("a",{children:"Register"})})})]}),Object(s.jsxs)("div",{className:"ps-tab active",id:"sign-in",children:[Object(s.jsxs)("div",{className:"ps-form__content",children:[Object(s.jsx)("h5",{children:"Log In Your Account"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(g.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(x.a,{className:"form-control",type:"text",name:"username",placeholder:"username",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group form-forgot",children:Object(s.jsx)(g.a.Item,{name:"phonenumber",rules:[{required:!0,message:"Please input your phonenumber!"}],children:Object(s.jsx)(x.a,{className:"form-control",type:"number",name:"phonenumber",placeholder:"Phone number...",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group submit",children:Object(s.jsx)("button",{type:"submit",className:"ps-btn ps-btn--fullwidth",children:"Login"})})]}),Object(s.jsxs)("div",{className:"ps-form__footer",children:[Object(s.jsx)("p",{children:"Connect with:"}),Object(s.jsxs)("ul",{className:"ps-list--social",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"facebook",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-facebook"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"google",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-google-plus"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"twitter",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-twitter"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"instagram",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-instagram"})})})]})]})]})]}):Object(s.jsxs)(g.a,{className:"ps-form--account",onFinish:this.handleotpSubmit.bind(this),children:[Object(s.jsxs)("ul",{className:"ps-tab-list",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsx)(h.a,{href:"/account/login",children:Object(s.jsx)("a",{children:"Login"})})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{href:"/account/register",children:Object(s.jsx)("a",{children:"Register"})})})]}),Object(s.jsx)("div",{className:"ps-tab active",id:"sign-in",children:Object(s.jsxs)("div",{className:"ps-form__content",children:[Object(s.jsx)("h5",{children:"Validate OTP"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(g.a.Item,{name:"otpsend",rules:[{required:!0,message:"Please input your otp!"}],children:Object(s.jsx)(x.a,{className:"form-control",type:"number",name:"otpsend",placeholder:"OTP",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group submit",children:Object(s.jsx)("button",{type:"submit",className:"ps-btn ps-btn--fullwidth",children:"Validate"})})]})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return!0===e.isLoggedIn&&p.a.push("/"),!1}}]),a}(n.Component),S=Object(N.b)((function(e){return e.auth}))(w),_=a("u+A/");t.default=function(){return Object(s.jsx)(_.a,{title:"Login",boxed:!0,children:Object(s.jsxs)("div",{className:"ps-page--my-account",children:[Object(s.jsx)(c.a,{breacrumb:[{text:"Home",url:"/"},{text:"Login"}]}),Object(s.jsx)(S,{})]})})}}},[["6gHY",1,2,0,3,4,5,6,7,25]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"6gHY":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/login",function(){return a("B7x/")}])},"B7x/":function(e,t,a){"use strict";a.r(t);var s=a("nKUr"),n=a("q1tI"),c=a("24c+"),r=a("vJKn"),i=a.n(r),l=a("rg98"),o=a("H+61"),u=a("UlJF"),d=a("+Css"),h=a("7LId"),j=a("VIvw"),b=a("iHvq"),m=a("cpVT"),p=a("YFqc"),f=a.n(p),O=a("20a2"),g=a.n(O),x=a("W80I"),v=a("TeRw"),N=a("Vl3Y"),y=a("5rEg"),w=a("/MKj"),k=a("yTuJ");a("EMJx");function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(b.a)(e);if(t){var n=Object(b.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(j.a)(this,a)}}var S=function(e){Object(h.a)(a,e);var t=I(a);function a(e){var s;return Object(o.a)(this,a),s=t.call(this,e),Object(m.a)(Object(d.a)(s),"handleChange",(function(e){s.setState(Object(m.a)({},e.target.name,e.target.value))})),Object(m.a)(Object(d.a)(s),"modalSuccess",(function(e){v.a[e]({message:"Success",description:"OTP generated successfully!",duration:10})})),Object(m.a)(Object(d.a)(s),"modalWarning",(function(e){v.a[e]({message:"Good bye!",description:"OTP is not valid"})})),s.state={username:"",phonenumber:"",otp:"",otpsend:"",visible:!1},s}return Object(u.a)(a,[{key:"handleFeatureWillUpdate",value:function(e){e.preventDefault(),v.a.open({message:"Opp! Something went wrong.",description:"This feature has been updated later!",duration:500})}},{key:"handleLoginSubmit",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("test"),e.next=3,k.a.getToken();case 3:return e.sent,e.next=6,k.a.generateOTP(this.state);case 6:a=e.sent,s=a,console.log("responseData",s),this.setState({otp:s.data.data,visible:!0}),console.log("otp",s.data.data),this.modalSuccess("success");case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleotpSubmit",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.otp==this.state.otpsend){e.next=4;break}this.modalWarning("warning"),e.next=21;break;case 4:return e.next=6,k.a.getToken();case 6:return e.sent,e.next=9,k.a.validateOTP(this.state);case 9:a=e.sent,s=a,console.log("responseData",s),localStorage.setItem("fullName",s.data.data.fullName),localStorage.setItem("userID",s.data.data.userID),localStorage.setItem("mobileNo",s.data.data.mobileNo),localStorage.setItem("email",s.data.data.email),localStorage.setItem("profilePic",s.data.data.profilePic),console.log("userID",localStorage.getItem("userID")),this.modalSuccess("success"),this.props.dispatch(Object(x.d)()),g.a.push("/");case 21:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"ps-my-account",children:Object(s.jsx)("div",{className:"container",children:0==this.state.visible?Object(s.jsxs)(N.a,{className:"ps-form--account",onFinish:this.handleLoginSubmit.bind(this),children:[Object(s.jsxs)("ul",{className:"ps-tab-list",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsx)(f.a,{href:"/account/login",children:Object(s.jsx)("a",{children:"Login"})})}),Object(s.jsx)("li",{children:Object(s.jsx)(f.a,{href:"/account/register",children:Object(s.jsx)("a",{children:"Register"})})})]}),Object(s.jsxs)("div",{className:"ps-tab active",id:"sign-in",children:[Object(s.jsxs)("div",{className:"ps-form__content",children:[Object(s.jsx)("h5",{children:"Log In Your Account"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(N.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(y.a,{className:"form-control",type:"text",name:"username",placeholder:"username",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group form-forgot",children:Object(s.jsx)(N.a.Item,{name:"phonenumber",rules:[{required:!0,message:"Please input your phonenumber!"}],children:Object(s.jsx)(y.a,{className:"form-control",type:"number",name:"phonenumber",placeholder:"Phone number...",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group submit",children:Object(s.jsx)("button",{type:"submit",className:"ps-btn ps-btn--fullwidth",children:"Login"})})]}),Object(s.jsxs)("div",{className:"ps-form__footer",children:[Object(s.jsx)("p",{children:"Connect with:"}),Object(s.jsxs)("ul",{className:"ps-list--social",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"facebook",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-facebook"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"google",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-google-plus"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"twitter",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-twitter"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"instagram",href:"#",onClick:function(t){return e.handleFeatureWillUpdate(t)},children:Object(s.jsx)("i",{className:"fa fa-instagram"})})})]})]})]})]}):Object(s.jsxs)(N.a,{className:"ps-form--account",onFinish:this.handleotpSubmit.bind(this),children:[Object(s.jsxs)("ul",{className:"ps-tab-list",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsx)(f.a,{href:"/account/login",children:Object(s.jsx)("a",{children:"Login"})})}),Object(s.jsx)("li",{children:Object(s.jsx)(f.a,{href:"/account/register",children:Object(s.jsx)("a",{children:"Register"})})})]}),Object(s.jsx)("div",{className:"ps-tab active",id:"sign-in",children:Object(s.jsxs)("div",{className:"ps-form__content",children:[Object(s.jsx)("h5",{children:"Validate OTP"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(N.a.Item,{name:"otpsend",rules:[{required:!0,message:"Please input your otp!"}],children:Object(s.jsx)(y.a,{className:"form-control",type:"number",name:"otpsend",placeholder:"OTP",onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"form-group submit",children:Object(s.jsx)("button",{type:"submit",className:"ps-btn ps-btn--fullwidth",children:"Validate"})})]})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return!0===e.isLoggedIn&&g.a.push("/"),!1}}]),a}(n.Component),_=Object(w.b)((function(e){return e.auth}))(S),P=a("u+A/");t.default=function(){return Object(s.jsx)(P.a,{title:"Login",boxed:!0,children:Object(s.jsxs)("div",{className:"ps-page--my-account",children:[Object(s.jsx)(c.a,{breacrumb:[{text:"Home",url:"/"},{text:"Login"}]}),Object(s.jsx)(_,{})]})})}}},[["6gHY",1,2,0,3,4,5,6,7,25]]]);
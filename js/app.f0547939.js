(function(t){function s(s){for(var e,l,c=s[0],n=s[1],r=s[2],u=0,f=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(s);while(f.length)f.shift()();return o.push.apply(o,r||[]),a()}function a(){for(var t,s=0;s<o.length;s++){for(var a=o[s],e=!0,c=1;c<a.length;c++){var n=a[c];0!==i[n]&&(e=!1)}e&&(o.splice(s--,1),t=l(l.s=a[0]))}return t}var e={},i={app:0},o=[];function l(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=e,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)l.d(a,e,function(s){return t[s]}.bind(null,e));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var d=n;o.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0367":function(t,s,a){},"14f7":function(t,s,a){"use strict";var e=a("a512"),i=a.n(e);i.a},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("Home"),a("about"),a("Resume"),a("contact")],1)},o=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"NavBar"},[a("div",{staticClass:"container-fluid d-flex justify-content-between px-5 pt-4 align-items-center"},[t._m(0),a("div",[a("div",{staticClass:"Navigation-List"},[a("ul",{staticClass:" d-flex justify-start"},[a("li",{staticStyle:{cursor:"pointer"},attrs:{"data-name":".About"},on:{click:function(s){return t.Open(".About")}}},[t._v("About")]),a("li",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.Open(".Resume")}}},[t._v("Resume")]),a("li",{},[t._v("Portfolio")]),a("li",{},[t._v("Blog")]),a("li",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.Open(".Contact")}}},[t._v("Contact")])])]),a("div",{staticClass:"Mobile-Menu",attrs:{id:"Menu-Button"}},[a("i",{staticClass:"fas fa-stream",staticStyle:{"font-size":"30px"},on:{click:t.NavToogle}})]),a("div",{staticClass:"Mobile-Nav mt-2"},[a("ul",[a("li",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.Open(".About")}}},[t._v("About")]),a("li",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.Open(".Resume")}}},[t._v("Resume")]),a("li",{},[t._v("Portfolio")]),a("li",{},[t._v("Blog")]),a("li",{staticStyle:{"margin-bottom":"0px"},on:{click:function(s){return t.Open(".Contact")}}},[t._v("Contact")])])])])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Logo-Box d-flex align-items-center"},[a("i",{staticClass:"fab fa-y-combinator"}),a("span",{staticClass:"ml-3 "},[t._v("Yazeed Nazzal")])])}],n=a("1157"),r=a.n(n),d={created:function(){r()(window).resize((function(){r()(".Mobile-Nav").css("display","none")}))},methods:{Open:function(t){r()(t).css("opacity","1"),r()(t).css("z-index","99999")},NavToogle:function(){r()(".Mobile-Nav").slideToggle("fast")}},props:{}},u=d,f=(a("14f7"),a("2877")),p=Object(f["a"])(u,l,c,!1,null,null,null),v=p.exports,m=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"Home"},[a("div",{staticClass:"Opacity-box"},[a("div",{staticClass:"container text-center h-100"},[a("div",{staticClass:"row h-100 d-flex align-items-center justify-content-center"},[a("div",{staticClass:"col Navi text-center"},[a("h1",{staticClass:"mb-4"},[t._v("yazeed nazzal")]),a("h4",{staticClass:"Web"},[t._v("Web developer")]),a("h4",{staticClass:"AniH"},[a("span",{staticClass:"Animated-span"},[a("span",{staticClass:"Visable front"},[t._v("FrontEnd")]),a("span",{staticClass:"notVisable back"},[t._v("BackEnd")])])])])])]),a("div",{staticClass:"Icon-List-Box"},[a("div",{staticClass:"Social-media"},[a("ul",[a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://www.facebook.com/yazeed.nazal",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-square"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://twitter.com/yazeed67981083",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter-square"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://github.com/Yazeed-Nazzal"}},[a("i",{staticClass:"fab fa-github-square"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://www.linkedin.com/in/yazeed-nazzal-55264a1b8/"}},[a("i",{staticClass:"fab fa-linkedin"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://wa.me/0798289659"}},[a("i",{staticClass:"fab fa-whatsapp"})])])])])])])])}],b={methods:{},mounted:function(){setInterval((function(){r()(".Animated-span").animate({width:"0px"},1250,(function(){r()(".front").toggleClass("Visable").toggleClass("notVisable"),r()(".back").toggleClass("Visable").toggleClass("notVisable"),r()(".Animated-span").animate({width:"140px"},1250)}))}),2500)},props:{}},g=b,h=(a("8b71"),Object(f["a"])(g,m,C,!1,null,null,null)),_=h.exports,y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"About"},[a("div",{staticClass:"container  "},[a("div",{staticClass:"row About-Header mb-5"},[a("div",{staticClass:"Exit",staticStyle:{cursor:"pointer"},on:{click:t.Exit}},[a("i",{staticClass:"fas fa-times"})]),t._m(0)]),t._m(1)]),t._m(2)])},x=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col text-center"},[a("p",{staticClass:"P1"},[t._v("Get to know me")]),a("h1",{staticClass:"About-me"},[t._v("About Me")]),a("p",{staticClass:"Loader"},[a("span")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row",staticStyle:{"margin-bottom":"100px","margin-top":"100px"}},[a("div",{staticClass:"col-lg-4 My-Img"}),a("div",{staticClass:"col-lg-8",staticStyle:{"padding-left":"60px"}},[a("h4",{staticClass:"My-Info-h4"},[t._v("Who am i?")]),a("p",{staticClass:"My-Info-P"},[t._v(" I'm yazeed nazal, a full-stake Web Developer ")]),a("p",{staticClass:"My-Info-P2"},[t._v(" I am a freelancer based in Jordan and i have been building noteworthy Web Developer for years, which comply with the latest programming techniques. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver fast ")]),a("p",{staticClass:"h-r"}),a("div",{staticClass:"row Personal-info "},[a("div",{staticClass:"col-12 col-md-6"},[t._v(" Name:"),a("span",{staticClass:"data"},[t._v("Yazeed Nazal")])]),a("div",{staticClass:"col-12 col-md-6"},[t._v(" Eamil:"),a("span",{staticClass:"data email"},[t._v("Yazeed_nazal@hotmail.com")])]),a("div",{staticClass:"col-12 col-md-6"},[t._v("Age:"),a("span",{staticClass:"data"},[t._v("21")])]),a("div",{staticClass:"col-12 col-md-6"},[t._v(" From:"),a("span",{staticClass:"data"},[t._v("Jordan amman")])])]),a("div",{staticClass:"My-Info-End d-block d-sm-flex mt-3"},[a("button",{staticClass:"d-inline-block Download-CV"},[a("a",{staticStyle:{color:"white"},attrs:{href:"https://drive.google.com/file/d/1N-9zjYHOBiuvumZmotsfdQlGbxhpdjfw/view?usp=sharing",target:"_blank"}},[t._v("Download CV")])]),a("ul",{staticClass:"d-flex Social-list "},[a("li",{staticClass:"p-md-2 ml-4"},[a("a",{attrs:{href:"https://www.facebook.com/yazeed.nazal",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-square"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://twitter.com/yazeed67981083",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://github.com/Yazeed-Nazzal",target:"_blank"}},[a("i",{staticClass:"fab fa-github-square"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://www.linkedin.com/in/yazeed-nazzal-55264a1b8/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])]),a("li",{staticClass:"p-md-2"},[a("a",{attrs:{href:"https://wa.me/0798289659",target:"_blank"}},[a("i",{staticClass:"fab fa-whatsapp"})])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"MY-Services",staticStyle:{"margin-bottom":"100px"}},[a("div",{staticClass:"container"},[a("p",{staticStyle:{"font-size":"15px",color:"#9f9f9f"}},[t._v(" Services i offer to my clients ")]),a("h1",{staticClass:"mb-4",staticStyle:{"font-size":"38px","font-weight":"700",color:"#f0f0f0"}},[t._v(" My Services ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 shadow-S ",staticStyle:{padding:"10px"}},[a("div",{staticClass:"Services-Box"},[a("p",{staticClass:"Services-Icon"},[a("i",{staticClass:"fab fa-laravel"})]),a("h2",[t._v("Web Development")]),a("p",{staticStyle:{"font-size":"14px",color:"#9f9f9f"}},[t._v(" Building personal web pages or for your own business and building comprehensive web applications with the latest technologies. ")])])]),a("div",{staticClass:"col-12 col-md-4 shadow-S",staticStyle:{padding:"10px"}},[a("div",{staticClass:"Services-Box"},[a("p",{staticClass:"Services-Icon"},[a("i",{staticClass:"fas fa-arrows-alt"})]),a("h2",[t._v("Fully Responsive")]),a("p",{staticStyle:{"font-size":"14px",color:"#9f9f9f"}},[t._v(" Building web pages and applications so that they respond and work on all screens of different sizes and dimensions. ")])])]),a("div",{staticClass:"col-12 col-md-4 shadow-S ",staticStyle:{padding:"10px"}},[a("div",{staticClass:"Services-Box"},[a("p",{staticClass:"Services-Icon"},[a("i",{staticClass:"fas fa-hands-helping"})]),a("h2",[t._v("Customer Support")]),a("p",{staticStyle:{"font-size":"14px",color:"#9f9f9f"}},[t._v(" Helping customers to host their sites after construction and providing after-sales services. ")])])])])])])}],w={props:{},methods:{Exit:function(){r()(".About").css("opacity","0"),r()(".About").css("z-index","-9999"),r()(".Home").css("z-index","9999")}}},S=w,k=(a("b8ab"),Object(f["a"])(S,y,x,!1,null,null,null)),z=k.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Resume"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row My-Resume-Header mb-5"},[a("div",{staticClass:"Exit",staticStyle:{cursor:"pointer"},on:{click:t.Exit}},[a("i",{staticClass:"fas fa-times"})]),t._m(0)]),t._m(1),t._m(2)])])},E=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 text-center"},[a("p",{staticClass:"P1"},[t._v("Check out my Resume")]),a("h1",{staticStyle:{"font-size":"45px","font-weight":"700"}},[t._v("Resume")]),a("p",{staticClass:"Loader"},[a("span")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row My-Resume-Box",staticStyle:{"margin-top":"70px"}},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"Education-Box "},[a("h3",{staticStyle:{"font-size":"26px","margin-bottom":"20px",color:"#f0f0f0"}},[t._v("Education")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" BA of Computer Science")]),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("world islamic sciences and education university 2017 - 2021")]),a("p",{staticClass:"card-text"},[t._v("GPA : 3.47")])]),a("i",{staticClass:"fas fa-arrow-right Card-icon"})])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"Experience-Box "},[a("h3",{staticStyle:{"font-size":"26px","margin-bottom":"20px",color:"#f0f0f0"}},[t._v("Experience")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Web Development")]),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Freelancer 2018 ")]),a("p",{staticClass:"card-text"},[t._v("Learning to build web applications starting from 2017")])]),a("i",{staticClass:"fas fa-arrow-right Card-icon"})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row My-Skills mb-5"},[a("div",{staticClass:"col-12",staticStyle:{"margin-bottom":"50px"}},[a("p",{staticStyle:{"font-size":"14px",color:"#9f9f9f"}},[t._v("My level of knowledge in some tools")]),a("h1",{staticStyle:{"font-size":"38px","font-weight":"700"}},[t._v("My Skills")])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("html/css")]),a("span",[t._v("95%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"95%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("JavaScript")]),a("span",[t._v("75%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"75%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("php")]),a("span",[t._v("80%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"80%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("Vue.js")]),a("span",[t._v("80%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"80%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("Laravel")]),a("span",[t._v("70%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"70%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("div",{staticClass:"col-12 col-md-6",staticStyle:{"margin-bottom":"40px"}},[a("div",{staticClass:"Progress-Info d-flex justify-content-between"},[a("span",[t._v("BootStrap")]),a("span",[t._v("90%")])]),a("div",{staticClass:"progress",staticStyle:{"background-color":"#2f2f2f",height:"9px"}},[a("div",{staticClass:"progress-bar ",staticStyle:{width:"90%","background-color":"#009e66"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])}],M={props:{},methods:{Exit:function(){r()(".Resume").css("opacity","0"),r()(".Resume").css("z-index","-9999"),r()(".Home").css("z-index","9999")}}},N=M,O=(a("b8ec"),Object(f["a"])(N,j,E,!1,null,null,null)),P=O.exports,A=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Contact"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row",staticStyle:{"padding-top":"70px"}},[a("div",{staticClass:"Exit",staticStyle:{cursor:"pointer"},on:{click:t.Exit}},[a("i",{staticClass:"fas fa-times"})]),t._m(0)]),a("div",{staticClass:"row",staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"col-lg-7"},[a("div",[a("h4",{staticStyle:{"margin-bottom":"22px",color:"#f0f0f0"}},[t._v("Message Me")]),a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sender,expression:"sender"}],staticClass:"form-control ",attrs:{type:"text",id:"sender",placeholder:"Name",autocomplete:"off"},domProps:{value:t.sender},on:{input:function(s){s.target.composing||(t.sender=s.target.value)}}})])]),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control ",attrs:{type:"text",id:"Email",placeholder:"Email",autocomplete:"off"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})])]),a("div",{staticClass:"col-12 mb-3"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",attrs:{type:"test",id:"subject",autocomplete:"off",placeholder:"Subject"},domProps:{value:t.subject},on:{input:function(s){s.target.composing||(t.subject=s.target.value)}}})])]),a("div",{staticClass:"col-12 mb-3"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",staticStyle:{height:"auto"},attrs:{id:"Message",rows:"5",placeholder:"Message"},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}})])]),a("div",{staticClass:"col-12 mb-3"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"d-inline-block Download-CV",staticStyle:{height:"50px",padding:"10px 26px"},on:{click:t.sendEmail}},[t._v(" Send Message ")])])])])])])]),t._m(1)])])])},I=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 text-center "},[a("p",{staticClass:"P1"},[t._v("Feel free to contact me anytimes")]),a("h1",{staticClass:"mb-4",staticStyle:{"font-size":"45px","font-weight":"700"}},[t._v(" Get in Touch ")]),a("p",{staticClass:"Loader"},[a("span")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-lg-5"},[a("h4",{staticStyle:{color:"#f0f0f0","line-height":"1.5","margin-bottom":"15px","font-weight":"500"}},[t._v(" Contact Info ")]),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"28px",color:"#9f9f9f"}},[t._v(" Always available for freelance work if the right project comes along, Feel free to contact me! ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2",staticStyle:{"border-right":"solid 2px rgba(255,255,255,.15)"}},[a("ul",[a("li",{staticClass:"Contact-Icon mb-3 "},[a("i",{staticClass:"fas fa-address-card"})]),a("li",{staticClass:"Contact-Icon mb-4 "},[a("i",{staticClass:"fas fa-map-marked-alt"})]),a("li",{staticClass:"Contact-Icon mb-3 "},[a("i",{staticClass:"fas fa-phone-alt"})]),a("li",{staticClass:"Contact-Icon mb-3 "},[a("i",{staticClass:"fas fa-envelope"})])])]),a("div",{staticClass:"col-10"},[a("ul",{staticClass:"mb-4"},[a("li",{staticClass:"First-li"},[t._v("Name")]),a("li",{staticClass:"Secund-Li"},[t._v("Yazeed Nazzal")])]),a("ul",[a("li",{staticClass:"First-li"},[t._v("Location")]),a("li",{staticClass:"Secund-Li"},[t._v("Ammman / Jordan")])]),a("ul",[a("li",{staticClass:"First-li"},[t._v("Call Me")]),a("li",{staticClass:"Secund-Li"},[t._v("+962798289659")])]),a("ul",[a("li",{staticClass:"First-li"},[t._v("Mail Me")]),a("li",{staticClass:"Secund-Li"},[t._v("Yazeed_Nazal@hotmail.com")])])])])])}],B=a("0f91"),$=a.n(B),R={data:function(){return{sender:"",subject:"",message:"",email:""}},methods:{Exit:function(){r()(".Contact").css("opacity","0"),r()(".Contact").css("z-index","-9999"),r()(".Home").css("z-index","9999")},sendEmail:function(){""!=this.message&&""!=this.subject&&""!=this.sender&&($.a.send("service_g392gsb","template_3un34hn",{from_name:this.sender,subject:this.subject,message:this.message,email:this.email},"user_76zNDx2Vpl1Gy8lvZzIWr"),this.sender="",this.subject="",this.message="",this.email="")}},props:{}},L=R,F=(a("610c"),Object(f["a"])(L,A,I,!1,null,null,null)),H=F.exports,V={name:"App",components:{Contact:H,Resume:P,About:z,Home:_,NavBar:v}},Y=V,D=(a("5c0b"),Object(f["a"])(Y,i,o,!1,null,null,null)),W=D.exports,q=a("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var T=a("2f62");e["a"].use(T["a"]);var J=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4989"),a("ab8b"),a("15f5");e["a"].use($.a),e["a"].config.productionTip=!1,new e["a"]({store:J,render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var e=a("9c0c"),i=a.n(e);i.a},"610c":function(t,s,a){"use strict";var e=a("0367"),i=a.n(e);i.a},"88d7":function(t,s,a){},"8b71":function(t,s,a){"use strict";var e=a("88d7"),i=a.n(e);i.a},"98e0":function(t,s,a){},"9c0c":function(t,s,a){},a512:function(t,s,a){},b1ee:function(t,s,a){},b8ab:function(t,s,a){"use strict";var e=a("98e0"),i=a.n(e);i.a},b8ec:function(t,s,a){"use strict";var e=a("b1ee"),i=a.n(e);i.a}});
//# sourceMappingURL=app.f0547939.js.map

(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],f=0,_=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&_.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(_.length)_.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,l=1;l<s.length;l++){var c=s[l];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://samchencode.github.io/v1/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},1216:function(t,e,s){"use strict";var n=s("4b18"),a=s.n(n);a.a},4901:function(t,e,s){},"4b18":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Hero",{attrs:{badges:t.badges}}),s("SociaList",{attrs:{scrollY:t.scrollY}}),s("main",{staticClass:"content"},[s("NavBar"),s("section",{staticStyle:{height:"200vh"}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("h3",{staticClass:"hero__subtitle"},[t._v("Hi, I'm")]),s("h1",{staticClass:"hero__title"},[t._v("Sam Chen.")]),s("Sash",{attrs:{badges:t.badges}}),s("h3",{staticClass:"hero__subtitle"},[t._v("are what I do.")]),s("Button",{staticClass:"hero__button",attrs:{href:"#",title:"My Projects"}})],1)},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"sash"},t._l(t.badges,(function(t){return s("Label",{key:t,attrs:{title:t}})})),1)},o=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"label"},[t._v(t._s(t.title))])},f=[],_={name:"Label",props:{title:String}},h=_,p=(s("bbab"),s("2877")),v=Object(p["a"])(h,u,f,!1,null,null,null),b=v.exports,d={name:"Sash",components:{Label:b},props:{badges:Array}},m=d,g=(s("5f95"),Object(p["a"])(m,c,o,!1,null,null,null)),C=g.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button",attrs:{href:t.href}},[t._v(t._s(t.title))])},w=[],S={name:"Button",props:{href:String,title:String}},j=S,O=(s("8274"),Object(p["a"])(j,y,w,!1,null,null,null)),k=O.exports,x={name:"Hero",components:{Sash:C,Button:k},props:{badges:Array}},E=x,Y=(s("d2b5"),Object(p["a"])(E,r,l,!1,null,"0719dfcf",null)),$=Y.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["socialist",t.modifierClassNames]},[t._m(0),t._m(1),t._m(2),t._m(3)])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"socialist__link",attrs:{href:"#"}},[s("i",{staticClass:"socialist__icon fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"socialist__link",attrs:{href:"#"}},[s("i",{staticClass:"socialist__icon fab fa-github"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"socialist__link",attrs:{href:"#"}},[s("i",{staticClass:"socialist__icon fab fa-codepen"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"socialist__link",attrs:{href:"#"}},[s("i",{staticClass:"socialist__icon fab fa-linkedin"})])}],B=(s("a9e3"),{name:"SociaList",props:{scrollY:Number},computed:{modifierClassNames:function(){var t=window.innerHeight,e=[];return 0!==this.scrollY&&this.scrollY<.9*t&&e.push("socialist--no-tail"),this.scrollY>.3*t&&this.scrollY<.7*t&&e.push("socialist--invisible"),this.scrollY>.6*t&&e.push("socialist--bottom"),e}}}),M=B,N=(s("d7da"),Object(p["a"])(M,P,L,!1,null,"8a0b36fc",null)),H=N.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"sitenav"},[s("h2",{staticClass:"sitenav__logo"},[t._v("Sam Chen")]),s("input",{staticClass:"sitenav__toggle",attrs:{type:"checkbox",id:"sitenav__toggle"}}),s("ul",{staticClass:"sitenav__list"},[s("li",{staticClass:"sitenav__item"},[s("a",{staticClass:"sitenav__link",attrs:{href:"#"}},[t._v("Projects")])]),s("li",{staticClass:"sitenav__item"},[s("a",{staticClass:"sitenav__link",attrs:{href:"#"}},[t._v("Proficiencies")])]),s("li",{staticClass:"sitenav__item"},[s("a",{staticClass:"sitenav__link",attrs:{href:"#"}},[t._v("Contact")])])]),s("label",{staticClass:"sitenav__toggle-label",attrs:{for:"sitenav__toggle"}},[s("div",{staticClass:"sitenav__hamburger"})])])}],I={name:"NavBar"},J=I,D=(s("1216"),Object(p["a"])(J,A,T,!1,null,"98eabe1a",null)),F=D.exports,W=(s("db43"),{name:"App",components:{Hero:$,SociaList:H,NavBar:F},data:function(){return{badges:["Full Stack Web Development","Machine Learning"],scrollY:null}},mounted:function(){this.scrollY=window.scrollY,window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY}}}),q=W,z=(s("034f"),Object(p["a"])(q,a,i,!1,null,null,null)),G=z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")},"5f95":function(t,e,s){"use strict";var n=s("e163"),a=s.n(n);a.a},"7e05":function(t,e,s){},8274:function(t,e,s){"use strict";var n=s("d277"),a=s.n(n);a.a},"85ec":function(t,e,s){},bbab:function(t,e,s){"use strict";var n=s("4901"),a=s.n(n);a.a},c7dc:function(t,e,s){},d277:function(t,e,s){},d2b5:function(t,e,s){"use strict";var n=s("7e05"),a=s.n(n);a.a},d7da:function(t,e,s){"use strict";var n=s("c7dc"),a=s.n(n);a.a},db43:function(t,e,s){},e163:function(t,e,s){}});
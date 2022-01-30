(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),c=n.n(a),o=n(645),d=n.n(o),i=n(667),r=n.n(i),s=new URL(n(228),n.b),m=d()(c()),l=r()(s);m.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: #000;\n  background-color: #DE6B48;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background-color: #000;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.logo {\n  color: #fff;\n  font-size: 1.25rem;\n}\n\n.navbar__items {\n  display: flex;\n  list-style-type: none;\n}\n\n.navbar__item {\n  margin-right: 2rem;\n}\n\n.navbar__link {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.125rem;\n}\n\n/* Hero */\n.hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: url("+l+") no-repeat center center/cover;\n  color: #fff;\n}\n\n.hero__title {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.hero__text {\n  font-size: 1.25rem;\n}\n\n/* Menu & Contact */\n.menu,\n.contact {\n  padding-top: 5rem;\n  text-align: center;\n}\n\n.menu__header-title,\n.contact__header-title {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n}\n\n.menu__item-title,\n.menu__item-description {\n  margin-bottom: .5rem;\n}\n\n.menu__item-title,\n.contact__info-title {\n  font-size: 2rem;\n}\n\n.menu__item-description,\n.contact__info-text {\n  font-size: 1.125rem;\n}\n\n.menu__item-price {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n\n.contact__info {\n  flex-basis: 15%;\n  margin-bottom: 3rem;\n}\n\n.contact__info-title {\n  margin-bottom: 1rem;\n}\n\n.contact__info-text {\n  margin-bottom: .7rem;\n}\n\n/* Media Queries */\n@media (max-width: 600px) {\n  .header {\n    flex-direction: column;\n  }\n\n  .logo {\n    margin-bottom: .5rem;\n  }\n\n  .hero__title {\n    font-size: 3rem;\n  }\n\n  .menu,\n  .contact {\n    padding-top: 8rem;\n  }\n\n  .menu__header-title,\n  .contact__header-title {\n    font-size: 2.5rem;\n  }\n\n  .menu__item-title,\n  .contact__info-title {\n    font-size: 1.5rem;\n  }\n}\n\n@media (max-width: 420px) {\n  .hero__title {\n    font-size: 2rem;\n  }\n}",""]);const u=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,c,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(d[r]=!0)}for(var s=0;s<e.length;s++){var m=[].concat(e[s]);a&&d[m[0]]||(void 0!==o&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=o),n&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=n):m[2]=n),c&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=c):m[4]="".concat(c)),t.push(m))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},d=[],i=0;i<e.length;i++){var r=e[i],s=a.base?r[0]+a.base:r[0],m=o[s]||0,l="".concat(s," ").concat(m);o[s]=m+1;var u=n(l),p={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var _=c(p,a);a.byIndex=i,t.splice(i,0,{identifier:l,updater:_,references:1})}d.push(l)}return d}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var o=a(e=e||[],c=c||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var i=n(o[d]);t[i].references--}for(var r=a(e,c),s=0;s<o.length;s++){var m=n(o[s]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}o=r}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,c&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},228:(e,t,n)=>{e.exports=n.p+"d80414ba2949c884cec6.jpg"}},t={};function n(a){var c=t[a];if(void 0!==c)return c.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),a=n(795),c=n.n(a),o=n(569),d=n.n(o),i=n(565),r=n.n(i),s=n(216),m=n.n(s),l=n(589),u=n.n(l),p=n(28),_={};function f(){const e=document.createElement("section"),t=document.createElement("h1");e.classList.add("hero"),t.classList.add("hero__title");const n=document.createTextNode("Lorem ipsum dolor");return t.appendChild(n),e.append(t),e}_.styleTagTransform=u(),_.setAttributes=r(),_.insert=d().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=m(),t()(p.Z,_),p.Z&&p.Z.locals&&p.Z.locals;const h=document.querySelector("#content");h.append(function(){const e=document.createElement("header"),t=document.createElement("h3"),n=document.createElement("nav"),a=document.createElement("ul"),c=document.createElement("li"),o=document.createElement("li"),d=document.createElement("li"),i=document.createElement("a"),r=document.createElement("a"),s=document.createElement("a");i.setAttribute("href","#"),r.setAttribute("href","#"),s.setAttribute("href","#");const m=document.createTextNode("Pizza Palace"),l=document.createTextNode("Home"),u=document.createTextNode("Menu"),p=document.createTextNode("Contact");return e.classList.add("header"),t.classList.add("logo"),n.classList.add("navbar"),a.classList.add("navbar__items"),c.classList.add("navbar__item"),o.classList.add("navbar__item"),d.classList.add("navbar__item"),i.classList.add("navbar__link"),r.classList.add("navbar__link"),s.classList.add("navbar__link"),t.appendChild(m),a.append(c,o,d),n.appendChild(a),e.append(t,n),c.appendChild(i),o.appendChild(r),d.appendChild(s),i.appendChild(l),r.appendChild(u),s.appendChild(p),e}(),f());const v=document.querySelectorAll(".navbar__item")[0],x=document.querySelectorAll(".navbar__item")[1],g=document.querySelectorAll(".navbar__item")[2];function L(){h.removeChild(h.children[1])}v.addEventListener("click",(()=>{L(),h.append(f())})),x.addEventListener("click",(()=>{L(),h.append(function(){const e=document.createElement("section"),t=document.createElement("header"),n=document.createElement("h2"),a=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("h3"),m=document.createElement("h3"),l=document.createElement("h3"),u=document.createElement("p"),p=document.createElement("p"),_=document.createElement("p"),f=document.createElement("p"),h=document.createElement("p"),v=document.createElement("p"),x=document.createElement("p"),g=document.createElement("p");e.classList.add("menu"),t.classList.add("menu__header"),n.classList.add("menu__header-title"),a.classList.add("menu__items"),c.classList.add("menu__item"),o.classList.add("menu__item"),d.classList.add("menu__item"),i.classList.add("menu__item"),r.classList.add("menu__item-title"),s.classList.add("menu__item-title"),m.classList.add("menu__item-title"),l.classList.add("menu__item-title"),u.classList.add("menu__item-description"),p.classList.add("menu__item-description"),_.classList.add("menu__item-description"),f.classList.add("menu__item-description"),h.classList.add("menu__item-price"),v.classList.add("menu__item-price"),x.classList.add("menu__item-price"),g.classList.add("menu__item-price");const L=document.createTextNode("Menu"),E=document.createTextNode("Pepperoni Pizza"),b=document.createTextNode("Sausage Pizza"),y=document.createTextNode("BBQ Chicken Pizza"),C=document.createTextNode("Cheese Pizza"),T=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet."),N=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet."),w=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet."),z=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet."),S=document.createTextNode("$20"),M=document.createTextNode("$20"),k=document.createTextNode("$20"),q=document.createTextNode("$20");return n.appendChild(L),t.appendChild(n),r.appendChild(E),s.appendChild(b),m.appendChild(y),l.appendChild(C),u.appendChild(T),p.appendChild(N),_.appendChild(w),f.appendChild(z),h.append(S),v.append(M),x.append(k),g.append(q),c.append(r,u,h),o.append(s,p,v),d.append(m,_,x),i.append(l,f,g),e.append(t,c,o,d,i),e}())})),g.addEventListener("click",(()=>{L(),h.append(function(){const e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("header"),a=document.createElement("h2"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),i=document.createElement("h3"),r=document.createElement("h3"),s=document.createElement("h3"),m=document.createElement("p"),l=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),_=document.createElement("p"),f=document.createElement("p"),h=document.createElement("p");e.classList.add("contact"),t.classList.add("contact__wrapper"),n.classList.add("contact__header"),a.classList.add("contact__header-title"),c.classList.add("contact__info"),o.classList.add("contact__info"),d.classList.add("contact__info"),i.classList.add("contact__info-title"),r.classList.add("contact__info-title"),s.classList.add("contact__info-title"),m.classList.add("contact__info-text"),l.classList.add("contact__info-text"),u.classList.add("contact__info-text"),p.classList.add("contact__info-text"),_.classList.add("contact__info-text"),f.classList.add("contact__info-text"),h.classList.add("contact__info-text");const v=document.createTextNode("Contact Us"),x=document.createTextNode("Location"),g=document.createTextNode("Hours"),L=document.createTextNode("Contact"),E=document.createTextNode("654 Geneva Street"),b=document.createTextNode("New York, NY"),y=document.createTextNode("Monday: Closed"),C=document.createTextNode("Tuesday - Friday: 11:00 am - 10:00 pm"),T=document.createTextNode("Saturday: 12:00 pm - 10:00 pm"),N=document.createTextNode("Sunday: 4:00 pm - 10:00 pm"),w=document.createTextNode("917-463-0785");return a.appendChild(v),n.appendChild(a),i.appendChild(x),r.appendChild(g),s.appendChild(L),m.appendChild(E),l.appendChild(b),u.appendChild(y),p.appendChild(C),_.appendChild(T),f.appendChild(N),h.appendChild(w),c.append(i,m,l),o.append(r,u,p,_,f),d.append(s,h),t.append(c,o,d),e.append(a,t),e}())}))})()})();
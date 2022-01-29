(()=>{"use strict";var e,n,t,r,a,o,c,i,s,d,l,u,p,f,m={28:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),c=t.n(o),i=t(667),s=t.n(i),d=new URL(t(228),t.b),l=c()(a()),u=s()(d);l.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: #000;\n  background-color: #DE6B48;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background-color: #000;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.logo {\n  color: #fff;\n  font-size: 1.25rem;\n}\n\n.navbar__items {\n  display: flex;\n  list-style-type: none;\n}\n\n.navbar__item {\n  margin-right: 2rem;\n}\n\n.navbar__link {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.125rem;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* Hero */\n.hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: url("+u+") no-repeat center center/cover;\n  color: #fff;\n}\n\n.hero__title {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.hero__text {\n  font-size: 1.25rem;\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},228:(e,n,t)=>{e.exports=t.p+"d80414ba2949c884cec6.jpg"}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.m=m,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,e=v(379),n=v.n(e),t=v(795),r=v.n(t),a=v(569),o=v.n(a),c=v(565),i=v.n(c),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(28),(f={}).styleTagTransform=u(),f.setAttributes=i(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector("#content").append(function(){const e=document.createElement("header"),n=document.createElement("h3"),t=document.createTextNode("Pizza Palace");n.classList.add("logo"),n.append(t),e.classList.add("header"),e.append(n);const r=document.createElement("nav");r.classList.add("navbar");const a=document.createElement("ul");a.classList.add("navbar__items");const o=document.createElement("li"),c=document.createTextNode("Home"),i=document.createElement("a");i.setAttribute("href","#"),i.classList.add("navbar__link"),i.appendChild(c),o.classList.add("navbar__item"),o.appendChild(i);const s=document.createElement("li"),d=document.createTextNode("Menu"),l=document.createElement("a");l.setAttribute("href","#"),l.classList.add("navbar__link"),l.appendChild(d),s.classList.add("navbar__item"),s.appendChild(l);const u=document.createElement("li"),p=document.createTextNode("Contact"),f=document.createElement("a");return f.setAttribute("href","#"),f.classList.add("navbar__link"),f.appendChild(p),u.classList.add("navbar__item"),u.appendChild(f),a.append(o,s,u),r.appendChild(a),e.appendChild(r),e}(),function(){const e=document.createElement("section");e.classList.add("hero");const n=document.createElement("h1"),t=document.createTextNode("Lorem ipsum dolor");return n.appendChild(t),n.classList.add("hero__title"),e.append(n),e}())})();
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o extends HTMLElement{constructor(e,t){super(),e||(console.log("no text"),e=this.getAttribute("text"),t=this.getAttribute("username")),console.log(e),console.log(t);let n=document.createElement("p");n.innerHTML=e+"<br> <small>"+t+"</small>",this.attachShadow({mode:"open"}).appendChild(n)}}function r(){console.log("occurring every three minutes");let e=localStorage.bitts,t=null,n=null;e&&(t=(n=JSON.parse(e))[0].id),fetch("/get-all-bitts?lastid="+t).then(function(e){return e.text()}).then(function(e){console.log(e),JSON.parse(e).synced?console.log("Synced!"):(localStorage.bitts=e,n=JSON.parse(e));let t=document.getElementById("bittsContainer");t.innerHTML="";for(let e of n){let n=new o(e.text,e.username);t.appendChild(n)}}).catch(function(e){console.log("Request failed",e)})}customElements.define("bitt-element",o),console.log("main.js starting"),r(),setInterval(r,18e4),document.getElementById("bittSubmit").addEventListener("click",function(){let e=document.getElementById("usernameBittInput").value,t=document.getElementById("textBittArea").value,n=JSON.stringify({username:e,text:t});fetch("/create-bitt",{method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:n}).then(e=>e.json()).then(function(e){let t=document.getElementById("bittsContainer"),n=new o(e.text,e.username);t.prepend(n);let r=JSON.parse(localStorage.bitts);r.unshift(e),localStorage.bitts=JSON.stringify(r),document.getElementById("createBittModal").click()}).catch(function(e){console.log("Request failed",e)})})}]);

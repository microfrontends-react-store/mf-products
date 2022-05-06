/*! For license information please see meli-store-mf-products.js.LICENSE.txt */
System.register(["react","react-dom","@meli-store/api"],(function(e,t){var n={},r={},o={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default},function(e){o.addProductToCar=e.addProductToCar,o.getProductById=e.getProductById,o.getProducts=e.getProducts}],execute:function(){e((()=>{var e={669:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(15),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".poduct-card {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.poduct-card__image {\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.poduct-card__image>img {\r\n    max-height: 200px;\r\n    padding: 1rem;\r\n}","",{version:3,sources:["webpack://./src/components/ProductCard/ProductCard.css"],names:[],mappings:"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB",sourcesContent:[".poduct-card {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.poduct-card__image {\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.poduct-card__image>img {\r\n    max-height: 200px;\r\n    padding: 1rem;\r\n}"],sourceRoot:""}]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},251:(e,t,n)=>{"use strict";n(418);var r=n(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},893:(e,t,n)=>{"use strict";e.exports=n(251)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},668:e=>{"use strict";e.exports=o},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},a={};function i(t){var n=a[t];if(void 0!==n)return n.exports;var r=a[t]={id:t,exports:{}};return e[t](r,r.exports,i),r.exports}i.y=t,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var c={};return(0,i(722).s)(1),(()=>{"use strict";i.r(c),i.d(c,{bootstrap:()=>je,mount:()=>Ce,unmount:()=>Oe});var e=i(954),t=i(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(s(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(s(e)));return e}}var l=null;try{l=require("react").createContext()}catch(n){}var p,d={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function m(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=v(e,t,(function(){n(this)})),a=u(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function h(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function y(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=v(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=u(e,t)();e.ReactDOM.render(r,a)}}))}function v(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=l?e.React.createElement(l.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(p||(p={}));var b="beforeunload";function x(e){e.preventDefault(),e.returnValue=""}function j(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function C(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,o=void 0===r?"":r,a=e.hash,i=void 0===a?"":a;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function O(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const w=(0,e.createContext)(null),E=(0,e.createContext)(null),S=(0,e.createContext)({outlet:null,matches:[]});function R(e,t){if(!e)throw new Error(t)}function P(e,t,n){void 0===n&&(n="/");let r=M(("string"==typeof t?O(t):t).pathname||"/",n);if(null==r)return null;let o=A(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=_(o[e],r);return a}function A(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,o)=>{let a={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(a.relativePath.startsWith(r)||R(!1),a.relativePath=a.relativePath.slice(r.length));let i=D([r,a.relativePath]),c=n.concat(a);e.children&&e.children.length>0&&(!0===e.index&&R(!1),A(e.children,t,c,i)),(null!=e.path||e.index)&&t.push({path:i,score:N(i,e.index),routesMeta:c})})),t}const B=/^:\w+$/,I=e=>"*"===e;function N(e,t){let n=e.split("/"),r=n.length;return n.some(I)&&(r+=-2),t&&(r+=2),n.filter((e=>!I(e))).reduce(((e,t)=>e+(B.test(t)?3:""===t?1:10)),r)}function _(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let e=0;e<n.length;++e){let i=n[e],c=e===n.length-1,s="/"===o?t:t.slice(o.length)||"/",u=T({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},s);if(!u)return null;Object.assign(r,u.params);let l=i.route;a.push({params:r,pathname:D([o,u.pathname]),pathnameBase:L(D([o,u.pathnameBase])),route:l}),"/"!==u.pathnameBase&&(o=D([o,u.pathnameBase]))}return a}function T(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));return e.endsWith("*")?(r.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=c[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(c[n]||""),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function k(e,t,n){let r,o="string"==typeof e?O(e):e,a=""===e||""===o.pathname?"/":o.pathname;if(null==a)r=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}r=e>=0?t[e]:"/"}let i=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?O(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:$(r),hash:W(o)}}(o,r);return a&&"/"!==a&&a.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function M(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const D=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function U(){return null!=(0,e.useContext)(E)}function F(){return U()||R(!1),(0,e.useContext)(E).location}function H(t){let{matches:n}=(0,e.useContext)(S),{pathname:r}=F(),o=JSON.stringify(n.map((e=>e.pathnameBase)));return(0,e.useMemo)((()=>k(t,JSON.parse(o),r)),[t,o,r])}function J(e){R(!1)}function G(t){let{basename:n="/",children:r=null,location:o,navigationType:a=p.Pop,navigator:i,static:c=!1}=t;U()&&R(!1);let s=L(n),u=(0,e.useMemo)((()=>({basename:s,navigator:i,static:c})),[s,i,c]);"string"==typeof o&&(o=O(o));let{pathname:l="/",search:d="",hash:f="",state:m=null,key:h="default"}=o,y=(0,e.useMemo)((()=>{let e=M(l,s);return null==e?null:{pathname:e,search:d,hash:f,state:m,key:h}}),[s,l,d,f,m,h]);return null==y?null:(0,e.createElement)(w.Provider,{value:u},(0,e.createElement)(E.Provider,{children:r,value:{location:y,navigationType:a}}))}function q(t){let{children:n,location:r}=t;return function(t,n){U()||R(!1);let{matches:r}=(0,e.useContext)(S),o=r[r.length-1],a=o?o.params:{},i=(o&&o.pathname,o?o.pathnameBase:"/");o&&o.route;let c,s=F();if(n){var u;let e="string"==typeof n?O(n):n;"/"===i||(null==(u=e.pathname)?void 0:u.startsWith(i))||R(!1),c=e}else c=s;let l=c.pathname||"/",p=P(t,{pathname:"/"===i?l:l.slice(i.length)||"/"});return function(t,n){return void 0===n&&(n=[]),null==t?null:t.reduceRight(((r,o,a)=>(0,e.createElement)(S.Provider,{children:void 0!==o.route.element?o.route.element:r,value:{outlet:r,matches:n.concat(t.slice(0,a+1))}})),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:D([i,e.pathname]),pathnameBase:"/"===e.pathnameBase?i:D([i,e.pathnameBase])}))),r)}(Z(n),r)}function Z(t){let n=[];return e.Children.forEach(t,(t=>{if(!(0,e.isValidElement)(t))return;if(t.type===e.Fragment)return void n.push.apply(n,Z(t.props.children));t.type!==J&&R(!1);let r={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(r.children=Z(t.props.children)),n.push(r)})),n}function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}const V=["onClick","reloadDocument","replace","state","target","to"];function Y(t){let{basename:n,children:r,window:o}=t,a=(0,e.useRef)();null==a.current&&(a.current=function(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function o(){var e=n.location,t=e.pathname,o=e.search,a=e.hash,i=r.state||{};return[i.idx,{pathname:t,search:o,hash:a,state:i.usr||null,key:i.key||"default"}]}var a=null;n.addEventListener("popstate",(function(){if(a)d.call(a),a=null;else{var e=p.Pop,t=o(),n=t[0],r=t[1];if(d.length){if(null!=n){var i=s-n;i&&(a={action:e,location:r,retry:function(){w(-1*i)}},w(i))}}else v(e)}}));var i=p.Pop,c=o(),s=c[0],u=c[1],l=j(),d=j();function f(e){return"string"==typeof e?e:C(e)}function m(e,t){return void 0===t&&(t=null),g({pathname:u.pathname,hash:"",search:""},"string"==typeof e?O(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function h(e,t){return[{usr:e.state,key:e.key,idx:t},f(e)]}function y(e,t,n){return!d.length||(d.call({action:e,location:t,retry:n}),!1)}function v(e){i=e;var t=o();s=t[0],u=t[1],l.call({action:i,location:u})}function w(e){r.go(e)}null==s&&(s=0,r.replaceState(g({},r.state,{idx:s}),""));var E={get action(){return i},get location(){return u},createHref:f,push:function e(t,o){var a=p.Push,i=m(t,o);if(y(a,i,(function(){e(t,o)}))){var c=h(i,s+1),u=c[0],l=c[1];try{r.pushState(u,"",l)}catch(e){n.location.assign(l)}v(a)}},replace:function e(t,n){var o=p.Replace,a=m(t,n);if(y(o,a,(function(){e(t,n)}))){var i=h(a,s),c=i[0],u=i[1];r.replaceState(c,"",u),v(o)}},go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(e){return l.push(e)},block:function(e){var t=d.push(e);return 1===d.length&&n.addEventListener(b,x),function(){t(),d.length||n.removeEventListener(b,x)}}};return E}({window:o}));let i=a.current,[c,s]=(0,e.useState)({action:i.action,location:i.location});return(0,e.useLayoutEffect)((()=>i.listen(s)),[i]),(0,e.createElement)(G,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:i})}const z=(0,e.forwardRef)((function(t,n){let{onClick:r,reloadDocument:o,replace:a=!1,state:i,target:c,to:s}=t,u=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,V),l=function(t){U()||R(!1);let{basename:n,navigator:r}=(0,e.useContext)(w),{hash:o,pathname:a,search:i}=H(t),c=a;if("/"!==n){let e=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?O(e).pathname:e.pathname}(t),r=null!=e&&e.endsWith("/");c="/"===a?n+(r?"/":""):D([n,a])}return r.createHref({pathname:c,search:i,hash:o})}(s),p=function(t,n){let{target:r,replace:o,state:a}=void 0===n?{}:n,i=function(){U()||R(!1);let{basename:t,navigator:n}=(0,e.useContext)(w),{matches:r}=(0,e.useContext)(S),{pathname:o}=F(),a=JSON.stringify(r.map((e=>e.pathnameBase))),i=(0,e.useRef)(!1);(0,e.useEffect)((()=>{i.current=!0}));let c=(0,e.useCallback)((function(e,r){if(void 0===r&&(r={}),!i.current)return;if("number"==typeof e)return void n.go(e);let c=k(e,JSON.parse(a),o);"/"!==t&&(c.pathname=D([t,c.pathname])),(r.replace?n.replace:n.push)(c,r.state)}),[t,n,a,o]);return c}(),c=F(),s=H(t);return(0,e.useCallback)((e=>{if(!(0!==e.button||r&&"_self"!==r||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))){e.preventDefault();let n=!!o||C(c)===C(s);i(t,{replace:n,state:a})}}),[c,i,s,o,a,r,t])}(s,{replace:a,state:i,target:c});return(0,e.createElement)("a",K({},u,{href:l,onClick:function(e){r&&r(e),e.defaultPrevented||o||p(e)},ref:n,target:c}))}));function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ee=i(668),te=i(893),ne=function(){var t=X((0,e.useState)({}),2),n=t[0],r=t[1],o=function(){let{matches:t}=(0,e.useContext)(S),n=t[t.length-1];return n?n.params:{}}().productId;(0,e.useEffect)((function(){(0,ee.getProductById)(o).then((function(e){e.price=i(e.price),r(e),a(e)}))}),[o]);var a=function(e){var t=window.localStorage.getItem("productsHistory");if(t){var n=JSON.parse(t);n.unshift(e),window.localStorage.setItem("productsHistory",JSON.stringify(n))}else window.localStorage.setItem("productsHistory",JSON.stringify([e]))},i=function(e){return"$"+e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")};return(0,te.jsx)("div",{className:"container mt-5",children:(0,te.jsxs)("div",{className:"row",children:[(0,te.jsx)("h1",{className:"display-3",children:n.title}),(0,te.jsx)("h2",{className:"display-5 mt-3",children:n.price}),(0,te.jsx)("img",{style:{maxWidth:"800px"},className:"rounded img-fluid mt-5 mx-auto",src:n.pictures&&n.pictures[0].url,alt:n.pictures&&n.pictures[0].id}),(0,te.jsx)("button",{onClick:function(){(0,ee.addProductToCar)(n)},type:"button",class:"btn btn-dark",children:"Agregar al carrito"})]})})},re=i(379),oe=i.n(re),ae=i(795),ie=i.n(ae),ce=i(569),se=i.n(ce),ue=i(565),le=i.n(ue),pe=i(216),de=i.n(pe),fe=i(589),me=i.n(fe),he=i(669),ye={};ye.styleTagTransform=me(),ye.setAttributes=le(),ye.insert=se().bind(null,"head"),ye.domAPI=ie(),ye.insertStyleElement=de(),oe()(he.Z,ye),he.Z&&he.Z.locals&&he.Z.locals;var ve=function(e){var t=e.product;return(0,te.jsx)(z,{to:"/producto/"+t.id,children:(0,te.jsxs)("div",{className:"poduct-card card",style:{width:"250px"},children:[(0,te.jsx)("figure",{className:"poduct-card__image",children:(0,te.jsx)("img",{src:t.thumbnail,className:"card-img-top",alt:t.title})}),(0,te.jsx)("div",{className:"card-body",children:(0,te.jsx)("h5",{className:"card-title",children:t.title})})]})})},ge=function(){var t=X((0,e.useState)([]),2),n=t[0],r=t[1];return(0,e.useEffect)((function(){(0,ee.getProducts)().subscribe((function(e){r(e)}))}),[]),(0,te.jsxs)("section",{className:"container",children:[(0,te.jsx)("h1",{className:"display-3",children:"Listado de productos"}),(0,te.jsx)("div",{className:"row row-cols-auto",children:n.map((function(e){return(0,te.jsx)("div",{className:"col",children:(0,te.jsx)(ve,{product:e})},e.id)}))})]})},be=function(){return(0,te.jsxs)(q,{children:[(0,te.jsx)(J,{path:"/",element:(0,te.jsx)(ge,{})}),(0,te.jsx)(J,{path:"/producto/:productId",element:(0,te.jsx)(ne,{})})]})},xe=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},d),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&t.React.createContext&&(l=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:f.bind(null,t),mount:m.bind(null,t),unmount:h.bind(null,t)};return t.parcelCanUpdate&&(n.update=y.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,te.jsx)(Y,{children:(0,te.jsx)(be,{})})},errorBoundary:function(e,t,n){return null}}),je=xe.bootstrap,Ce=xe.mount,Oe=xe.unmount})(),c})())}}}));
//# sourceMappingURL=meli-store-mf-products.js.map
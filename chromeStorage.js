/*! For license information please see chromeStorage.js.LICENSE.txt */
(()=>{var t,e,r,n,o={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),u=new k(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y={};function v(){}function d(){}function m(){}var g={};f(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&i.call(w,c)&&(g=w);var x=m.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=m,a(x,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},_(S.prototype),f(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),f(x,l,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),y}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},861:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:()=>o})},942:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(142);function o(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},152:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:()=>o})},142:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(2);function o(t){var e=function(t,e){if("object"!==(0,n.Z)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===(0,n.Z)(e)?e:String(e)}},2:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:()=>n})},164:(t,e,r)=>{"use strict";r.a(t,(async(t,e)=>{try{var n=r(942),o=r(152),i=r(861),a=r(687),u=r(550);await s();var c=await chrome.storage.sync.get();function s(){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)(a.mark((function t(){var e,r,i,c,s,l,f,h,p,y;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,chrome.storage.sync.get();case 2:e=t.sent,r=0,i=Object.entries(u._);case 4:if(!(r<i.length)){t.next=12;break}if(c=(0,o.Z)(i[r],2),s=c[0],l=c[1],void 0!==e[s]){t.next=9;break}return t.next=9,chrome.storage.sync.set((0,n.Z)({},s,l));case 9:r++,t.next=4;break;case 12:f=0,h=Object.entries(e);case 13:if(!(f<h.length)){t.next=21;break}if(p=(0,o.Z)(h[f],2),y=p[0],p[1],void 0!==u._[y]){t.next=18;break}return t.next=18,chrome.storage.sync.remove(y);case 18:f++,t.next=13;break;case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}chrome.storage.onChanged.addListener(function(){var t=(0,i.Z)(a.mark((function t(e,r){var n,i,u,s,l;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("sync"===r){t.next=2;break}return t.abrupt("return");case 2:for(n=0,i=Object.entries(e);n<i.length;n++)u=(0,o.Z)(i[n],2),s=u[0],l=u[1],c[s]=l.newValue;case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),e()}catch(f){e(f)}}),1)},550:(t,e,r)=>{"use strict";r.d(e,{_:()=>n});var n={useCustomApiKeyOption:!1,customYoutubeApiKey:null,databaseSharingEnabledOption:!0,shuffleOpenInNewTabOption:!0,shuffleReUseNewTabOption:!0,shuffleIgnoreShortsOption:1,shuffleOpenAsPlaylistOption:!0,shuffleNumVideosInPlaylist:10,shuffleTabId:null,channelSettings:{},currentChannelId:null,currentChannelName:null,numShuffledVideosTotal:0,userQuotaRemainingToday:200,userQuotaResetTime:new Date((new Date).setHours(24,0,0,0)).getTime(),nextAPIKeysCheckTime:new Date((new Date).setHours(168,0,0,0)).getTime(),lastViewedChangelogVersion:"0",wasLastRickRolledInYear:"1970",previousVersion:null,reviewMessageShown:!1,donationMessageShown:!1}}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return o[t](r,r.exports,a),r.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},a.a=(o,i,a)=>{var u;a&&((u=[]).d=1);var c,s,l,f=new Set,h=o.exports,p=new Promise(((t,e)=>{l=e,s=t}));p[e]=h,p[t]=t=>(u&&t(u),f.forEach(t),p.catch((t=>{}))),o.exports=p,i((o=>{var i;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var i=[];i.d=0,o.then((t=>{a[e]=t,n(i)}),(t=>{a[r]=t,n(i)}));var a={};return a[t]=t=>t(i),a}}var u={};return u[t]=t=>{},u[e]=o,u})))(o);var a=()=>c.map((t=>{if(t[r])throw t[r];return t[e]})),s=new Promise((e=>{(i=()=>e(a)).r=0;var r=t=>t!==u&&!f.has(t)&&(f.add(t),t&&!t.d&&(i.r++,t.push(i)));c.map((e=>e[t](r)))}));return i.r?s:a()}),(t=>(t?l(p[r]=t):s(h),n(u)))),u&&(u.d=0)},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(164)})();
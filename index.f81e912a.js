!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.f81e912a.js","dCwtF":"alternative-book.ed914283.png","ee16w":"sprite.4fd37ecc.svg","kNold":"amazon.626c9508.png","37PkM":"amazon@2x.104a65be.png","5yj2h":"apple.652b354e.png","gAf7a":"apple@2x.15632d7d.png","3rtvf":"bookShop.920db583.png","5UbS1":"index.43dcd89d.css","5NIPz":"shopping-list.634da4a8.js","kYAaf":"shopping-list.eeec10be.js"}')),i("tmdHj"),i("dgWtE");var a={};function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))}};var s={},l=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new H(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function b(){}var y={};s(y,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(N([])));_&&_!==n&&r.call(_,i)&&(y=_);var k=b.prototype=g.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function H(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=b,s(k,"constructor",b),s(b,"constructor",m),m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(s);try{regeneratorRuntime=l}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var d={};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,n){e&&f(t.prototype,e);n&&f(t,n);return t};var h="https://books-backend.p.goit.global/",p=function(){"use strict";function t(){e(u)(this,t)}return e(d)(t,[{key:"getCategoriesList",value:function(){return fetch("".concat(h,"books/category-list")).then((function(t){return t.json()}))}},{key:"getCategoriesTop",value:function(){return fetch("".concat(h,"books/top-books")).then((function(t){return t.json()}))}},{key:"getSelectedCategories",value:function(t){return fetch("".concat(h,"books/category?category=").concat(t)).then((function(t){return t.json()}))}},{key:"getBookId",value:function(t){return fetch("".concat(h,"books/").concat(t)).then((function(t){return t.json()}))}}]),t}(),v={};v=function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,(function(t){return o(e[a][1][t]||t)}),u,u.exports,t,e,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1);var g;g=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dCwtF");var m;m=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ee16w");var b;b=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("kNold");var y;y=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("37PkM");var w;w=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("5yj2h");var _;_=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("gAf7a");var k;function L(t){return E.apply(this,arguments)}function E(){return(E=e(a)(e(s).mark((function t(n){var r,o,i,a,c,l,u,d,f,h,p,L,E;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=function(t){"Escape"===t.code&&c.close()},u=function(t){t.target.closest(".modal-info")||c.close()},d=function(){c.close()},p=function(){var t=JSON.parse(localStorage.getItem("SHOPPING-BOOKS-LIST"));t&&(t.find((function(t){return t._id===n._id}))&&(f.classList.add("visually-hidden"),h.classList.remove("visually-hidden")))},L=function(){S(n),f.classList.add("visually-hidden"),h.classList.remove("visually-hidden")},E=function(){x(n),h.classList.add("visually-hidden"),f.classList.remove("visually-hidden")},r=n.book_image,o=n.title,i=n.author,a=n.buy_links,n.description||(n.description="Unfortunately, there is no description for this book at the moment."),n.book_image||(n.book_image=e(g)),(c=v.create('\n    <div class="modal-info">\n    <button type="button" class="modal__close-btn">\n    <svg class="modal__close-icon" width="8" height="8">\n      <use href="'.concat(e(m),'#icon-close"></use>\n    </svg>\n  </button>\n    <div class="modal-pop__container">\n    <img class="modal__img" src="').concat(r,'" alt="').concat(o,'" />\n      <div class="modal-info__box">\n        <h2 class="modal-info__title">').concat(o,'</h2>\n        <p class="modal-info__author">').concat(i,'</p>\n        <p class="modal-info__text">').concat(n.description,'</p>\n        <ul class="modal-info__shops">\n          <li>\n            <a class="modal-info__link" href="').concat(a[0].url,'" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n              <img src="').concat(e(b),'"\n                srcset="').concat(e(y),' 2x" alt="Amazon shop" width="62" height="19" />\n            </a>\n          </li>\n          <li>\n            <a class="modal-info__link" href="').concat(a[1].url,'" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n              <img src="').concat(e(w),'"\n                srcset="').concat(e(_),' 2x" alt="Apple shop" width="33" height="32" />\n            </a>\n          </li>\n          <li>\n            <a class="modal-info__link" href="').concat(a[4].url,'" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n              <img src="').concat(e(k),'"\n                srcset="').concat(e(k),' 2x" alt="Book shop" width="38" height="36" />\n            </a>\n          </li>\n        </ul>\n      </div>\n</div>\n    <button class="modal__add-btn modal__add-btn-js">\n    add to shopping list\n</button>\n<div class="modal__remove-btn-wrapper visually-hidden">\n    <button class="modal__remove-btn">\n        remove from the shopping list\n    </button>\n    <p class="modal__remove-btn-message">\n        Сongratulations! You have added the book to the shopping list. To\n    delete, press the button “Remove from the shopping list”.\n    </p>\n    </div>\n</div>'),{onShow:function(){document.addEventListener("keydown",l),document.addEventListener("click",u)},onClose:function(){document.removeEventListener("click",u),document.removeEventListener("keydown",l)},closable:!1})).show(),document.querySelector(".modal__close-btn").addEventListener("click",d),f=document.querySelector(".modal__add-btn"),h=document.querySelector(".modal__remove-btn-wrapper"),p(),f.addEventListener("click",L),h.addEventListener("click",E);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){var e=JSON.parse(localStorage.getItem("SHOPPING-BOOKS-LIST"));e?e.find((function(e){return e._id===t._id}))||(e.push(t),localStorage.setItem("SHOPPING-BOOKS-LIST",JSON.stringify(e))):localStorage.setItem("SHOPPING-BOOKS-LIST",JSON.stringify([t]))}function x(t){var e=JSON.parse(localStorage.getItem("SHOPPING-BOOKS-LIST")).filter((function(e){return e._id!==t._id}));0===e.length?localStorage.removeItem("SHOPPING-BOOKS-LIST"):localStorage.setItem("SHOPPING-BOOKS-LIST",JSON.stringify(e))}k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3rtvf");var O=document.getElementById("loader-wrapper"),H=window.innerWidth,N=5;H<1440&&H>=768?N=3:H<768&&(N=1);var j,T=new p,P=document.querySelector(".books-list"),I=(j=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.classList.remove("visually-hidden"),t.next=3,T.getCategoriesTop();case 3:n=t.sent,O.classList.add("visually-hidden"),P.innerHTML="",n.forEach((function(t){var e=t.books.slice(0,N).map((function(t){return'  \n        <div class="book-card" data-book-id="'.concat(t._id,'">\n          <div class="book-card-hover">\n            <img loading="lazy" src="').concat(t.book_image,'" alt="').concat(t.title,'" class="book-image">\n            <p>quick view</p>\n          </div>\n          <div class="book-info">\n            <h3 class="book-title">').concat(t.title,'</h3>\n            <p class="book-autor">').concat(t.author,"</p>\n          </div>\n        </div>\n      ")})).join(""),n='\n    <section class="category-section">\n      <h3 class="all-categories-title">'.concat(t.list_name,'</h3>\n      <div class="books-container">\n        ').concat(e,'\n      </div>\n      <button type=button data-category-books="').concat(t.list_name,'" class="category-books-button">SEE MORE</button>\n    </section>');P.insertAdjacentHTML("beforeend",n)})),P.insertAdjacentHTML("afterbegin",'<h2 class="books-list-title">Best Sellers <span class="span-books-list-title">Books</span></h2>'),P.addEventListener("click",function(){var t=e(a)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n.target.closest(".book-card"))){t.next=7;break}return o=r.dataset.bookId,t.next=5,T.getBookId(o);case 5:L(t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),P.addEventListener("click",function(){var t=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.target.classList.contains("category-books-button")&&(r=n.target.dataset.categoryBooks,A(r),F(r));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 11:case"end":return t.stop()}}),t)}))),function(){return j.apply(this,arguments)});I();var C,A=(C=e(a)(e(s).mark((function t(n){var r,o,i,a,c,l;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.classList.remove("visually-hidden"),t.next=3,T.getSelectedCategories(n);case 3:r=t.sent,O.classList.add("visually-hidden"),P.innerHTML="",o=n.split(" "),i=o.pop(),a=o.join(" "),c=r.map((function(t){return'\n    <div class="book-card book-card-wrapper" data-book-id="'.concat(t._id,'">\n        <img loading="lazy" src="').concat(t.book_image,'" alt="').concat(t.title,'" class="book-image">\n        <div class="book-card-hover"><p>quick view</p></div>\n        <div class="book-info">\n          <h3 class="book-title">').concat(t.title,'</h3>\n          <p class="book-autor">').concat(t.author,"</p>\n        </div>\n    </div>\n    ")})).join(""),l='\n    <section class="category-section">\n      <h2  class="books-list-title">'.concat(a,' <span class="span-books-list-title">').concat(i,'</span></h2>\n      <div class="books-container">\n        ').concat(c,"\n      </div>\n    </section>\n  "),P.insertAdjacentHTML("beforeend",l),window.scrollTo(0,0);case 13:case"end":return t.stop()}}),t)}))),function(t){return C.apply(this,arguments)}),B=new p,R=document.querySelector(".categories-list"),q=function(){var t=e(a)(e(s).mark((function t(){var n,r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(t){if("LI"===t.target.nodeName&&t.target.dataset.categoryBooks){var e=t.target.dataset.categoryBooks;A(e)}},t.next=3,B.getCategoriesList();case 3:n=t.sent,r=n.map((function(t){return'<li class="categories-item" data-category-books="'.concat(t.list_name,'">').concat(t.list_name,"</li>")})).join(""),R.insertAdjacentHTML("beforeend",r),document.querySelector(".categories-list").firstElementChild.addEventListener("click",I),R.addEventListener("click",o);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function F(t){document.querySelector(".current-category").classList.remove("current-category");var e=document.querySelector('[data-category-books="'.concat(t,'"]'));e.classList.add("current-category"),R.scrollTo(0,e.offsetTop-10)}q(),R.addEventListener("click",(function(t){if("LI"!==t.target.nodeName)return;document.querySelector(".current-category").classList.remove("current-category"),t.target.classList.add("current-category")}));var M=document.getElementById("scrollUpBtn");window.addEventListener("scroll",(function(){var t=window.pageYOffset;M.style.display=t>1e3?"block":"none"})),M.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.f81e912a.js.map
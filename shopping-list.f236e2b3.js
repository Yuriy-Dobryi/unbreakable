function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},t.parcelRequired7c6=s),s.register("kyEFX",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},o=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.f236e2b3.js","lp5u4":"sprite.4fd37ecc.svg","3244h":"empty-logo.4abada78.png","jCYVU":"amazon.626c9508.png","dm81U":"amazon@2x.104a65be.png","h2fYN":"apple.652b354e.png","4EHhF":"apple@2x.15632d7d.png","kptGM":"bookShop.920db583.png","dEH5X":"bookShop@2x.64833714.png"}'));var a;a=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();new URL(s("kyEFX").resolve("3244h"),import.meta.url).toString();var i;i=new URL(s("kyEFX").resolve("jCYVU"),import.meta.url).toString();var l;l=new URL(s("kyEFX").resolve("dm81U"),import.meta.url).toString();var c;c=new URL(s("kyEFX").resolve("h2fYN"),import.meta.url).toString();var p;p=new URL(s("kyEFX").resolve("4EHhF"),import.meta.url).toString();var u;u=new URL(s("kyEFX").resolve("kptGM"),import.meta.url).toString();var g;g=new URL(s("kyEFX").resolve("dEH5X"),import.meta.url).toString();const d=document.querySelector(".shopping-books-list"),f=document.querySelector(".pagination");function m(e,t=1){const r=3*(t-1),o=r+3;return function(e){return e.map((({_id:e,book_image:t,buy_links:r,title:o,book_image_width:s,book_image_height:d,list_name:f,description:m,author:v})=>`\n      <li class="galleryitem">\n        <img class="galleryimage"\n          src="${t}"\n          width="${s}"\n          height="${d}"\n          alt="${o}" />\n        <div class="div_card">\n          <h2 class="title_card">${o}</h2>\n          <p class="category-book">${f}</p>\n          <p class="card_text">${m}</p>\n          <p class="card_avter">${v}</p>\n        </div>\n          <div class="list-shops">\n            <a class="shop-link" href="${r[0].url}"\n              target="_blank" crossorigin="anonymous"\n              rel="noopener noreferrer" >\n                <img class="img-amazon"\n                  src="${n(i)}"\n                  srcset="${n(l)} 2x"\n                  alt="Amazon shop" />\n            </a>\n            <a class="shop-link" href="${r[1].url}"\n              target="_blank" crossorigin="anonymous" rel="noopener noreferrer" >\n                <img class="img-apple"\n                  src="${n(c)}"\n                  srcset="${n(p)} 2x"\n                  alt="Apple shop" />\n            </a>\n            <a class="shop-link" href="${r[4].url}"\n              target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">\n                <img class="img-bookshop"\n                  src="${n(u)}"\n                  srcset="${n(g)} 2x"\n                  alt="Book shop" />\n            </a>\n          </div>\n          \n          <button class="btn-card_close" data-book-id="${e}">\n            <svg class="btn-svg-close">\n              <use href="${n(a)}#icon-trash"></use>\n            </svg>\n          </button>\n      </li>\n      `)).join("")}(e.slice(r,o))}function v(e){if(e){d.innerHTML=m(e),f.innerHTML=function(e){const n=Math.ceil(e.length/3);let t="";for(let e=1;e<=n;e+=1)t+=`<button class="page-btn">${e}</button>`;return t}(e);document.querySelector(".page-btn").classList.add("active-page")}else d.classList.add("empty")}function h(){return JSON.parse(localStorage.getItem("SHOPPING-BOOKS-LIST"))}!function(){const e=document.querySelector(".support");window.innerWidth<1440&&e.classList.add("is-hide")}(),v(h()),d.addEventListener("click",(({target:e})=>{const n=e.closest(".btn-card_close");if(n){!function(e){const n=h().filter((n=>n._id!==e));0===n.length?localStorage.removeItem("SHOPPING-BOOKS-LIST"):localStorage.setItem("SHOPPING-BOOKS-LIST",JSON.stringify(n))}(n.dataset.bookId),v(h())}})),f.addEventListener("click",(({target:e})=>{if(e.closest(".page-btn")){const r=f.querySelector(".active-page");r&&r.classList.remove("active-page"),e.classList.add("active-page"),n=h(),t=e.textContent,d.innerHTML=m(n,t)}var n,t}));
//# sourceMappingURL=shopping-list.f236e2b3.js.map

function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form");function u(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function s({position:n,delay:t}){e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t} ms`)}function d({position:n,delay:t}){e(r).Notify.failure(`❌ Rejected promise ${n} in ${t} ms`)}l.addEventListener("submit",(function(e){e.preventDefault();let n=Number(l.elements.delay.value);const t=Number(l.elements.amount.value);!function(e,n,t){for(;e<=t;)u(e,n).then(s).catch(d),n+=Number(l.elements.step.value),e+=1}(1,n,t)}));
//# sourceMappingURL=03-promises.64e66024.js.map
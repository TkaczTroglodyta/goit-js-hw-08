function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var i,r,o,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,u=setTimeout(h,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function h(){var e=v();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function w(e){return u=void 0,g&&i?y(e):(i=r=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector("feedback-form");y.addEventListener("input",e(t)(O,500)),y.addEventListener("submit",x);let T=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const{email:j,message:h}=y.elements;w();const w=()=>{T&&(j.value=T.email||"",h.value=T.message||"")},O=e=>{const{email:t,message:n}=e.currentTarget.elements;T={email:t.value,message:n.value},localStorage.setItem("feedback-form-state",JSON.stringify(T))},x=e=>{e.preventDefault();const{email:t,message:n}=e.currentTarget.elements};
//# sourceMappingURL=03-feedback.2cb255d8.js.map

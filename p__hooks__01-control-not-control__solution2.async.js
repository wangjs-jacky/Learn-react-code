(self.webpackChunk=self.webpackChunk||[]).push([[459],{63007:function(h,f,e){"use strict";var n=e(92935),a=e.n(n),c=e(57213),_=e.n(c),s=e(93236),i=e(90378),u=e(62086),l,v=function(E){return function(p){return React.memo(function(P){return _jsxs("div",{style:{border:"1px solid #000"},children:[_jsx("span",{children:E}),_jsx(p,_objectSpread({},P))]})})}},r=i.styled.div(l||(l=a()([`
  border: 1px solid #000;
  padding: 10px 20px;
  margin: 10px;
`]))),o=function(E){var p=E.title,P=E.component;return(0,u.jsxs)(r,{children:[(0,u.jsx)("h2",{children:p}),(0,u.jsx)("div",{children:P})]})};f.Z=o},18660:function(h,f,e){"use strict";e.r(f);var n=e(54306),a=e.n(n),c=e(12342),_=e.n(c),s=e(63007),i=e(5353),u=e(93236),l=e(62086),v=["value","defaultValue","onChange"],r=u.memo(function(d){var E=d.value,p=d.defaultValue,P=d.onChange,m=_()(d,v),D=(0,i.C8)("defaultValue",{value:E,onChange:P,defaultValue:p}),g=a()(D,2),y=g[0],M=g[1],A=function(O){M(O.target.value)};return(0,l.jsx)("input",{value:y,onChange:A})}),o=function(){var E=(0,u.useState)("2"),p=a()(E,2),P=p[0],m=p[1],D=function(y){m(y)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{title:"\u975E\u53D7\u63A7\u6A21\u5F0F\uFF1A\u53EA\u4F20\u5165 defaultValue",component:(0,l.jsx)(r,{onChange:function(y){console.log("\u975E\u53D7\u63A7\u5185\u90E8\u72B6\u6001",y)},defaultValue:"hello world"})}),(0,l.jsx)(s.Z,{title:"\u53D7\u63A7\u6A21\u5F0F\uFF1A\u53EA\u4F20\u5165 value",component:(0,l.jsx)(r,{onChange:D,value:P})}),(0,l.jsx)(s.Z,{title:"\u53D7\u63A7\u6A21\u5F0F\uFF1A\u540C\u65F6\u4F20\u5165 value \u548C defaultValue",component:(0,l.jsx)(r,{value:P,onChange:D,defaultValue:"hello world"})})]})};f.default=o},71780:function(h,f,e){"use strict";e.d(f,{Z:function(){return a}});var n=e(93236);function a(c){var _=n.useRef();_.current=c;var s=n.useCallback(function(){for(var i,u=arguments.length,l=new Array(u),v=0;v<u;v++)l[v]=arguments[v];return(i=_.current)===null||i===void 0?void 0:i.call.apply(i,[_].concat(l))},[]);return s}},12334:function(h,f,e){"use strict";e.d(f,{o:function(){return s}});var n=e(93236),a=e(46594),c=(0,a.Z)()?n.useLayoutEffect:n.useEffect,_=function(u,l){var v=n.useRef(!0);c(function(){return u(v.current)},l),c(function(){return v.current=!1,function(){v.current=!0}},[])},s=function(u,l){_(function(v){if(!v)return u()},l)};f.Z=_},85444:function(h,f,e){"use strict";e.d(f,{Z:function(){return a}});var n=e(93236);function a(c,_,s){var i=n.useRef({});return(!("value"in i.current)||s(i.current.condition,_))&&(i.current.value=c(),i.current.condition=_),i.current.value}},16376:function(h,f,e){"use strict";e.d(f,{Z:function(){return i}});var n=e(41171),a=e(71780),c=e(12334),_=e(16670);function s(u){return u!==void 0}function i(u,l){var v=l||{},r=v.defaultValue,o=v.value,d=v.onChange,E=v.postState,p=(0,_.Z)(function(){return s(o)?o:s(r)?typeof r=="function"?r():r:typeof u=="function"?u():u}),P=(0,n.Z)(p,2),m=P[0],D=P[1],g=o!==void 0?o:m,y=E?E(g):g,M=(0,a.Z)(d),A=(0,_.Z)([g]),t=(0,n.Z)(A,2),O=t[0],C=t[1];(0,c.o)(function(){var j=O[0];m!==j&&M(m,j)},[O]),(0,c.o)(function(){s(o)||D(o)},[o]);var b=(0,a.Z)(function(j,L){D(j,L),C([g],L)});return[y,b]}},16670:function(h,f,e){"use strict";e.d(f,{Z:function(){return c}});var n=e(41171),a=e(93236);function c(_){var s=a.useRef(!1),i=a.useState(_),u=(0,n.Z)(i,2),l=u[0],v=u[1];a.useEffect(function(){return s.current=!1,function(){s.current=!0}},[]);function r(o,d){d&&s.current||v(o)}return[l,r]}},5353:function(h,f,e){"use strict";e.d(f,{C8:function(){return a.Z},t4:function(){return c.t4},x1:function(){return c.x1},zX:function(){return n.Z}});var n=e(71780),a=e(16376),c=e(93355),_=e(16998),s=e(11253)},93355:function(h,f,e){"use strict";e.d(f,{Yr:function(){return l},mH:function(){return s},sQ:function(){return i},t4:function(){return v},x1:function(){return u}});var n=e(69947),a=e(93236),c=e(56237),_=e(85444);function s(r,o){typeof r=="function"?r(o):(0,n.Z)(r)==="object"&&r&&"current"in r&&(r.current=o)}function i(){for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];var E=o.filter(function(p){return p});return E.length<=1?E[0]:function(p){o.forEach(function(P){s(P,p)})}}function u(){for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];return(0,_.Z)(function(){return i.apply(void 0,o)},o,function(E,p){return E.length!==p.length||E.every(function(P,m){return P!==p[m]})})}function l(r){var o,d,E=(0,c.isMemo)(r)?r.type.type:r.type;return!(typeof E=="function"&&!((o=E.prototype)!==null&&o!==void 0&&o.render)||typeof r=="function"&&!((d=r.prototype)!==null&&d!==void 0&&d.render))}function v(r){return!(0,a.isValidElement)(r)||(0,c.isFragment)(r)?!1:l(r)}},71580:function(h,f,e){"use strict";e.d(f,{Z:function(){return n}});function n(a,c){for(var _=a,s=0;s<c.length;s+=1){if(_==null)return;_=_[c[s]]}return _}},16998:function(h,f,e){"use strict";e.d(f,{Z:function(){return o},T:function(){return P}});var n=e(69947),a=e(2595),c=e(94718),_=e(84867),s=e(50769),i=e(27596),u=e(22420);function l(m){return(0,_.Z)(m)||(0,s.Z)(m)||(0,i.Z)(m)||(0,u.Z)()}var v=e(71580);function r(m,D,g,y){if(!D.length)return g;var M=l(D),A=M[0],t=M.slice(1),O;return!m&&typeof A=="number"?O=[]:Array.isArray(m)?O=(0,c.Z)(m):O=(0,a.Z)({},m),y&&g===void 0&&t.length===1?delete O[A][t[0]]:O[A]=r(O[A],t,g,y),O}function o(m,D,g){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return D.length&&y&&g===void 0&&!(0,v.Z)(m,D.slice(0,-1))?m:r(m,D,g,y)}function d(m){return(0,n.Z)(m)==="object"&&m!==null&&Object.getPrototypeOf(m)===Object.prototype}function E(m){return Array.isArray(m)?[]:{}}var p=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function P(){for(var m=arguments.length,D=new Array(m),g=0;g<m;g++)D[g]=arguments[g];var y=E(D[0]);return D.forEach(function(M){function A(t,O){var C=new Set(O),b=(0,v.Z)(M,t),j=Array.isArray(b);if(j||d(b)){if(!C.has(b)){C.add(b);var L=(0,v.Z)(y,t);j?y=o(y,t,[]):(!L||(0,n.Z)(L)!=="object")&&(y=o(y,t,E(b))),p(b).forEach(function(R){A([].concat((0,c.Z)(t),[R]),C)})}}else y=o(y,t,b)}A([])}),y}},60198:function(h,f){"use strict";var e;var n=typeof Symbol=="function"&&Symbol.for,a=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,_=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,v=n?Symbol.for("react.async_mode"):60111,r=n?Symbol.for("react.concurrent_mode"):60111,o=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,E=n?Symbol.for("react.suspense_list"):60120,p=n?Symbol.for("react.memo"):60115,P=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,D=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function M(t){if(typeof t=="object"&&t!==null){var O=t.$$typeof;switch(O){case a:switch(t=t.type,t){case v:case r:case _:case i:case s:case d:return t;default:switch(t=t&&t.$$typeof,t){case l:case o:case P:case p:case u:return t;default:return O}}case c:return O}}}function A(t){return M(t)===r}e=v,e=r,e=l,e=u,e=a,e=o,e=_,e=P,e=p,e=c,e=i,e=s,e=d,e=function(t){return A(t)||M(t)===v},e=A,e=function(t){return M(t)===l},e=function(t){return M(t)===u},e=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===a},e=function(t){return M(t)===o},f.isFragment=function(t){return M(t)===_},e=function(t){return M(t)===P},f.isMemo=function(t){return M(t)===p},e=function(t){return M(t)===c},e=function(t){return M(t)===i},e=function(t){return M(t)===s},e=function(t){return M(t)===d},e=function(t){return typeof t=="string"||typeof t=="function"||t===_||t===r||t===i||t===s||t===d||t===E||typeof t=="object"&&t!==null&&(t.$$typeof===P||t.$$typeof===p||t.$$typeof===u||t.$$typeof===l||t.$$typeof===o||t.$$typeof===D||t.$$typeof===g||t.$$typeof===y||t.$$typeof===m)},e=M},56237:function(h,f,e){"use strict";h.exports=e(60198)},92935:function(h){function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}h.exports=f,h.exports.__esModule=!0,h.exports.default=h.exports},50769:function(h,f,e){"use strict";e.d(f,{Z:function(){return n}});function n(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}},94718:function(h,f,e){"use strict";e.d(f,{Z:function(){return i}});var n=e(97980);function a(u){if(Array.isArray(u))return(0,n.Z)(u)}var c=e(50769),_=e(27596);function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u){return a(u)||(0,c.Z)(u)||(0,_.Z)(u)||s()}}}]);
var P=typeof global=="object"&&global&&global.Object===Object&&global;const x=P;var C=typeof self=="object"&&self&&self.Object===Object&&self,F=x||C||Function("return this")();const T=F;var E=T.Symbol;const u=E;var d=Object.prototype,z=d.hasOwnProperty,K=d.toString,a=u?u.toStringTag:void 0;function R(t){var n=z.call(t,a),r=t[a];try{t[a]=void 0;var o=!0}catch{}var e=K.call(t);return o&&(n?t[a]=r:delete t[a]),e}var k=Object.prototype,w=k.toString;function M(t){return w.call(t)}var N="[object Null]",U="[object Undefined]",l=u?u.toStringTag:void 0;function b(t){return t==null?t===void 0?U:N:l&&l in Object(t)?R(t):M(t)}function $(t){return t!=null&&typeof t=="object"}var B="[object Symbol]";function G(t){return typeof t=="symbol"||$(t)&&b(t)==B}function L(t,n){for(var r=-1,o=t==null?0:t.length,e=Array(o);++r<o;)e[r]=n(t[r],r,t);return e}var W=Array.isArray;const q=W;var D=1/0,v=u?u.prototype:void 0,g=v?v.toString:void 0;function s(t){if(typeof t=="string")return t;if(q(t))return L(t,s)+"";if(G(t))return g?g.call(t):"";var n=t+"";return n=="0"&&1/t==-D?"-0":n}function H(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var I="[object AsyncFunction]",J="[object Function]",Q="[object GeneratorFunction]",V="[object Proxy]";function X(t){if(!H(t))return!1;var n=b(t);return n==J||n==Q||n==I||n==V}var Y=9007199254740991,Z=/^(?:0|[1-9]\d*)$/;function Et(t,n){var r=typeof t;return n=n??Y,!!n&&(r=="number"||r!="symbol"&&Z.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n){return t===n||t!==t&&n!==n}var _=9007199254740991;function tt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_}function Kt(t){return t!=null&&tt(t.length)&&!X(t)}function p(t){return t==null?"":s(t)}function nt(t,n,r){var o=-1,e=t.length;n<0&&(n=-n>e?0:e+n),r=r>e?e:r,r<0&&(r+=e),e=n>r?0:r-n>>>0,n>>>=0;for(var c=Array(e);++o<e;)c[o]=t[o+n];return c}function rt(t,n,r){var o=t.length;return r=r===void 0?o:r,!n&&r>=o?t:nt(t,n,r)}var et="\\ud800-\\udfff",ot="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",ft=ot+ut+at,it="\\ufe0e\\ufe0f",ct="\\u200d",lt=RegExp("["+ct+et+ft+it+"]");function y(t){return lt.test(t)}function vt(t){return t.split("")}var j="\\ud800-\\udfff",gt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",bt="\\u20d0-\\u20ff",st=gt+dt+bt,pt="\\ufe0e\\ufe0f",yt="["+j+"]",f="["+st+"]",i="\\ud83c[\\udffb-\\udfff]",jt="(?:"+f+"|"+i+")",h="[^"+j+"]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",O=jt+"?",A="["+pt+"]?",St="(?:"+ht+"(?:"+[h,S,m].join("|")+")"+A+O+")*",mt=A+O+St,Ot="(?:"+[h+f+"?",f,S,m,yt].join("|")+")",At=RegExp(i+"(?="+i+")|"+Ot+mt,"g");function Pt(t){return t.match(At)||[]}function xt(t){return y(t)?Pt(t):vt(t)}function Ct(t){return function(n){n=p(n);var r=y(n)?xt(n):void 0,o=r?r[0]:n.charAt(0),e=r?rt(r,1).join(""):n.slice(1);return o[t]()+e}}var Ft=Ct("toUpperCase");const Tt=Ft;function Rt(t){return Tt(p(t).toLowerCase())}const kt={toolsBar:!0,Table:{minWidthConfig:[4,12,110,10]},Pagination:{paginationAlign:"right",paginationCurrentPageKey:"pageNum",paginationPageSizeKey:"pageSize",paginationTotalKey:"total",paginationCurrentPage:1,paginationPageSize:30}};export{X as B,x as C,kt as E,q as J,G as L,zt as M,T as P,$ as U,H as V,b as d,u as i,Kt as k,tt as r,Et as v,Rt as x};

import{a$ as Ye,d as Ze,N as en,h as J,G as nn,a0 as Q,a3 as tn,ah as an,j as ln,A as rn,y as on,z as un,D as ve,aG as sn,o as k,c as N,k as L,n as be,m as F,r as E,I as ge,e as X,aj as dn,b as Y,w as fn,F as cn,J as pn,E as vn,M as ye,O as bn,aL as gn,aM as yn,ay as Z,P as hn,ab as mn}from"./framework.URa763XA.js";import{N as wn,P as he,E as me}from"../app.QMUbpOuY.js";import{h as we,q as Sn,y as ae,R as M,e as Se,K as Ce,G as Cn,H as $n,F as z,o as _n,c as le,n as ze,U as re,l as On,V as An,$ as $e,j as q,a as jn,L as _e,O as Oe,r as xn,b as Pn,m as Bn,W as Ae,B as je}from"./default-config-vCTUsqVJ.xfmBKe9X.js";import{aQ as Tn}from"./kliep-tools.es.LP6p9N8X.js";import"./theme.cz4nT2hu.js";import"./index.UfSCTmkv.js";var Kn=/\s/;function kn(e){for(var n=e.length;n--&&Kn.test(e.charAt(n)););return n}var Fn=/^\s+/;function Mn(e){return e&&e.slice(0,kn(e)+1).replace(Fn,"")}var xe=NaN,zn=/^[-+]0x[0-9a-f]+$/i,Dn=/^0b[01]+$/i,Rn=/^0o[0-7]+$/i,Nn=parseInt;function Ln(e){if(typeof e=="number")return e;if(re(e))return xe;if(z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Mn(e);var t=Dn.test(e);return t||Rn.test(e)?Nn(e.slice(2),t?2:8):zn.test(e)?xe:+e}var Pe=1/0,En=17976931348623157e292;function ee(e){if(!e)return e===0?e:0;if(e=Ln(e),e===Pe||e===-Pe){var n=e<0?-1:1;return n*En}return e===e?e:0}function In(e){return e}function qn(e,n,t){if(!z(t))return!1;var l=typeof n;return(l=="number"?_n(t)&&le(n,t.length):l=="string"&&n in t)?ze(t[n],e):!1}var Hn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wn=/^\w*$/;function oe(e,n){if(M(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||re(e)?!0:Wn.test(e)||!Hn.test(e)||n!=null&&e in Object(n)}var Un="Expected a function";function ie(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Un);var t=function(){var l=arguments,o=n?n.apply(this,l):l[0],r=t.cache;if(r.has(o))return r.get(o);var d=e.apply(this,l);return t.cache=r.set(o,d)||r,d};return t.cache=new(ie.Cache||ae),t}ie.Cache=ae;var Vn=500;function Gn(e){var n=ie(e,function(l){return t.size===Vn&&t.clear(),l}),t=n.cache;return n}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qn=/\\(\\)?/g,Xn=Gn(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Jn,function(t,l,o,r){n.push(o?r.replace(Qn,"$1"):l||t)}),n});const Yn=Xn;function W(e,n){return M(e)?e:oe(e,n)?[e]:Yn(On(e))}var Zn=1/0;function D(e){if(typeof e=="string"||re(e))return e;var n=e+"";return n=="0"&&1/e==-Zn?"-0":n}function ue(e,n){n=W(n,e);for(var t=0,l=n.length;e!=null&&t<l;)e=e[D(n[t++])];return t&&t==l?e:void 0}function et(e,n,t){var l=e==null?void 0:ue(e,n);return l===void 0?t:l}var nt="__lodash_hash_undefined__";function tt(e){return this.__data__.set(e,nt),this}function at(e){return this.__data__.has(e)}function H(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new ae;++n<t;)this.add(e[n])}H.prototype.add=H.prototype.push=tt;H.prototype.has=at;function lt(e,n){for(var t=-1,l=e==null?0:e.length;++t<l;)if(n(e[t],t,e))return!0;return!1}function rt(e,n){return e.has(n)}var ot=1,it=2;function De(e,n,t,l,o,r){var d=t&ot,f=e.length,v=n.length;if(f!=v&&!(d&&v>f))return!1;var g=r.get(e),p=r.get(n);if(g&&p)return g==n&&p==e;var u=-1,i=!0,O=t&it?new H:void 0;for(r.set(e,n),r.set(n,e);++u<f;){var C=e[u],m=n[u];if(l)var j=d?l(m,C,u,n,e,r):l(C,m,u,e,n,r);if(j!==void 0){if(j)continue;i=!1;break}if(O){if(!lt(n,function(B,x){if(!rt(O,x)&&(C===B||o(C,B,t,l,r)))return O.push(x)})){i=!1;break}}else if(!(C===m||o(C,m,t,l,r))){i=!1;break}}return r.delete(e),r.delete(n),i}function ut(e){var n=-1,t=Array(e.size);return e.forEach(function(l,o){t[++n]=[o,l]}),t}function st(e){var n=-1,t=Array(e.size);return e.forEach(function(l){t[++n]=l}),t}var dt=1,ft=2,ct="[object Boolean]",pt="[object Date]",vt="[object Error]",bt="[object Map]",gt="[object Number]",yt="[object RegExp]",ht="[object Set]",mt="[object String]",wt="[object Symbol]",St="[object ArrayBuffer]",Ct="[object DataView]",Be=we?we.prototype:void 0,ne=Be?Be.valueOf:void 0;function $t(e,n,t,l,o,r,d){switch(t){case Ct:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case St:return!(e.byteLength!=n.byteLength||!r(new Ae(e),new Ae(n)));case ct:case pt:case gt:return ze(+e,+n);case vt:return e.name==n.name&&e.message==n.message;case yt:case mt:return e==n+"";case bt:var f=ut;case ht:var v=l&dt;if(f||(f=st),e.size!=n.size&&!v)return!1;var g=d.get(e);if(g)return g==n;l|=ft,d.set(e,n);var p=De(f(e),f(n),l,o,r,d);return d.delete(e),p;case wt:if(ne)return ne.call(e)==ne.call(n)}return!1}var _t=1,Ot=Object.prototype,At=Ot.hasOwnProperty;function jt(e,n,t,l,o,r){var d=t&_t,f=je(e),v=f.length,g=je(n),p=g.length;if(v!=p&&!d)return!1;for(var u=v;u--;){var i=f[u];if(!(d?i in n:At.call(n,i)))return!1}var O=r.get(e),C=r.get(n);if(O&&C)return O==n&&C==e;var m=!0;r.set(e,n),r.set(n,e);for(var j=d;++u<v;){i=f[u];var B=e[i],x=n[i];if(l)var A=d?l(x,B,i,n,e,r):l(B,x,i,e,n,r);if(!(A===void 0?B===x||o(B,x,t,l,r):A)){m=!1;break}j||(j=i=="constructor")}if(m&&!j){var T=e.constructor,P=n.constructor;T!=P&&"constructor"in e&&"constructor"in n&&!(typeof T=="function"&&T instanceof T&&typeof P=="function"&&P instanceof P)&&(m=!1)}return r.delete(e),r.delete(n),m}var xt=1,Te="[object Arguments]",Ke="[object Array]",I="[object Object]",Pt=Object.prototype,ke=Pt.hasOwnProperty;function Bt(e,n,t,l,o,r){var d=M(e),f=M(n),v=d?Ke:_e(e),g=f?Ke:_e(n);v=v==Te?I:v,g=g==Te?I:g;var p=v==I,u=g==I,i=v==g;if(i&&Oe(e)){if(!Oe(n))return!1;d=!0,p=!1}if(i&&!p)return r||(r=new q),d||xn(e)?De(e,n,t,l,o,r):$t(e,n,v,t,l,o,r);if(!(t&xt)){var O=p&&ke.call(e,"__wrapped__"),C=u&&ke.call(n,"__wrapped__");if(O||C){var m=O?e.value():e,j=C?n.value():n;return r||(r=new q),o(m,j,t,l,r)}}return i?(r||(r=new q),jt(e,n,t,l,o,r)):!1}function se(e,n,t,l,o){return e===n?!0:e==null||n==null||!$e(e)&&!$e(n)?e!==e&&n!==n:Bt(e,n,t,l,se,o)}var Tt=1,Kt=2;function kt(e,n,t,l){var o=t.length,r=o,d=!l;if(e==null)return!r;for(e=Object(e);o--;){var f=t[o];if(d&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++o<r;){f=t[o];var v=f[0],g=e[v],p=f[1];if(d&&f[2]){if(g===void 0&&!(v in e))return!1}else{var u=new q;if(l)var i=l(g,p,v,e,n,u);if(!(i===void 0?se(p,g,Tt|Kt,l,u):i))return!1}}return!0}function Re(e){return e===e&&!z(e)}function Ft(e){for(var n=jn(e),t=n.length;t--;){var l=n[t],o=e[l];n[t]=[l,o,Re(o)]}return n}function Ne(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function Mt(e){var n=Ft(e);return n.length==1&&n[0][2]?Ne(n[0][0],n[0][1]):function(t){return t===e||kt(t,e,n)}}function zt(e,n){return e!=null&&n in Object(e)}function Dt(e,n,t){n=W(n,e);for(var l=-1,o=n.length,r=!1;++l<o;){var d=D(n[l]);if(!(r=e!=null&&t(e,d)))break;e=e[d]}return r||++l!=o?r:(o=e==null?0:e.length,!!o&&Pn(o)&&le(d,o)&&(M(e)||Bn(e)))}function Rt(e,n){return e!=null&&Dt(e,n,zt)}var Nt=1,Lt=2;function Et(e,n){return oe(e)&&Re(n)?Ne(D(e),n):function(t){var l=et(t,e);return l===void 0&&l===n?Rt(t,e):se(n,l,Nt|Lt)}}function It(e){return function(n){return n==null?void 0:n[e]}}function qt(e){return function(n){return ue(n,e)}}function Ht(e){return oe(e)?It(D(e)):qt(e)}function Wt(e){return typeof e=="function"?e:e==null?In:typeof e=="object"?M(e)?Et(e[0],e[1]):Mt(e):Ht(e)}function Fe(e){return e===null}function te(e){return e===void 0}function Ut(e,n,t,l){if(!z(e))return e;n=W(n,e);for(var o=-1,r=n.length,d=r-1,f=e;f!=null&&++o<r;){var v=D(n[o]),g=t;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(o!=d){var p=f[v];g=l?l(p,v,f):void 0,g===void 0&&(g=z(p)?p:le(n[o+1])?[]:{})}An(f,v,g),f=f[v]}return e}function Vt(e,n,t){for(var l=-1,o=n.length,r={};++l<o;){var d=n[l],f=ue(e,d);t(f,d)&&Ut(r,W(d,e),f)}return r}function Gt(e,n){if(e==null)return{};var t=Cn($n(e),function(l){return[l]});return n=Wt(n),Vt(e,t,function(l,o){return n(l,o[0])})}var Jt=Math.ceil,Qt=Math.max;function Xt(e,n,t,l){for(var o=-1,r=Qt(Jt((n-e)/(t||1)),0),d=Array(r);r--;)d[l?r:++o]=e,e+=t;return d}function Yt(e){return function(n,t,l){return l&&typeof l!="number"&&qn(n,t,l)&&(t=l=void 0),n=ee(n),t===void 0?(t=n,n=0):t=ee(t),l=l===void 0?n<t?1:-1:ee(l),Xt(n,t,l,e)}}var Zt=Yt();const ea=Zt,na=Object.prototype.hasOwnProperty,Me=(e,n)=>na.call(e,n),Le=e=>e!==null&&typeof e=="object",Ee="__epPropKey",ta=e=>Le(e)&&!!e[Ee],aa=(e,n)=>{if(!Le(e)||ta(e))return e;const{values:t,required:l,default:o,type:r,validator:d}=e,f={type:r,required:!!l,validator:t||d?v=>{let g=!1,p=[];if(t&&(p=Array.from(t),Me(e,"default")&&p.push(o),g||(g=p.includes(v))),d&&(g||(g=d(v))),!g&&p.length>0){const u=[...new Set(p)].map(i=>JSON.stringify(i)).join(", ");Ye(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${u}], got value ${JSON.stringify(v)}.`)}return g}:void 0,[Ee]:!0};return Me(e,"default")&&(f.default=o),f},la=["","default","small","large"],ra=aa({type:String,values:la,required:!1});var oa={data:{type:Array,default:()=>[]},size:ra,width:[String,Number],height:[String,Number],maxHeight:[String,Number],fit:{type:Boolean,default:!0},stripe:Boolean,border:Boolean,rowKey:[String,Function],showHeader:{type:Boolean,default:!0},showSummary:Boolean,sumText:String,summaryMethod:Function,rowClassName:[String,Function],rowStyle:[Object,Function],cellClassName:[String,Function],cellStyle:[Object,Function],headerRowClassName:[String,Function],headerRowStyle:[Object,Function],headerCellClassName:[String,Function],headerCellStyle:[Object,Function],highlightCurrentRow:Boolean,currentRowKey:[String,Number],emptyText:String,expandRowKeys:Array,defaultExpandAll:Boolean,defaultSort:Object,tooltipEffect:String,tooltipOptions:Object,spanMethod:Function,selectOnIndeterminate:{type:Boolean,default:!0},indent:{type:Number,default:16},treeProps:{type:Object,default:()=>({hasChildren:"hasChildren",children:"children"})},lazy:Boolean,load:Function,style:{type:Object,default:()=>({})},className:{type:String,default:""},tableLayout:{type:String,default:"fixed"},scrollbarAlwaysOn:{type:Boolean,default:!1},flexible:Boolean,showOverflowTooltip:[Boolean,Object]};const ia={class:"table mt10 mb10"},ua={class:"table-main"},sa={class:"table-main-header__slot"},da={key:0,class:"table-main-header__tools ml12"},fa=Ze({name:"kd-table",__name:"Table",props:{...oa,height:{type:String,default:"100%"},rowKey:{type:String,default:"id"},emptyText:{type:String,default:"暂无数据"},tableFrontend:{type:Boolean,default:!1},tableAutoRowIndexSort:{type:Boolean,default:!0},tableEnableTools:{type:Boolean},tableSelectionNoAll:{type:Boolean,default:!1},tableDataRenderAgain:{type:Boolean,default:!1},tableData:{type:Array,default:()=>[]},tableColumns:{type:Array,default:()=>[]},tableRequestMethod:Function,tableFilterMethod:Function,tablePagination:{type:Object},tableKey:{type:String,default:""},tableStyle:String,tableAlignWhole:{type:String},tableHeaderAlign:{type:String},tableShowOverflowTooltip:{type:Boolean},tableCommonColumnsIndex:{type:Number}},emits:["tableDataLoaded","tableDataRefreshed","tableDataRenderAgain","tableBeforeMount","tableMounted","tableUnmouted"],setup(e,{expose:n,emit:t}){var l,o,r,d,f,v;const g=gn(()=>yn(()=>import("./ToolsBar-BEp2Y6-P.PdhEMvgJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),p=Tn({},Sn,en("kd-filter-table",()=>{})),u=e,i={...p.Pagination,paginationPosition:"",paginationhidden:!1,paginationMt:10,paginationMb:!1,background:!0,small:!0,layout:"total, sizes, prev, pager, next, jumper",...u.tablePagination},O=J(!1),C=J(u.tableData?[...u.tableData.slice(0,i.paginationPageSize)]:[]),m=nn([]),j=J(),B=(a,s)=>{M(a)&&a.map(c=>{var h,y;((h=c==null?void 0:c.type)==null?void 0:h.name)=="ElTableColumn"&&s.push(c),(y=c==null?void 0:c.children)!=null&&y.length&&B(c==null?void 0:c.children,s)})},x=u.tableColumns.length;if(x)m.value=u.tableColumns;else{const a=[];B(Q().tableColumns(),a),m.value=a}const A=tn({[i.paginationCurrentPageKey]:i.paginationCurrentPage,[i.paginationPageSizeKey]:i.paginationPageSize,[i.paginationTotalKey]:((l=u.tableData)==null?void 0:l.length)||0});an(()=>{K("tableBeforeMount"),he.on("filterSendQuery2Table",He)}),ln(()=>K("tableMounted")),rn(()=>{K("tableUnmouted"),he.off("filterSendQuery2Table")});const T=a=>{var s,c,h;return`${(a==null?void 0:a.label)||((s=a==null?void 0:a.props)==null?void 0:s.label)}_${(a==null?void 0:a.prop)||(a==null?void 0:a.property)||((c=a==null?void 0:a.props)==null?void 0:c.prop)||((h=a==null?void 0:a.props)==null?void 0:h.property)}`},{minWidthConfig:P}=p.Table,de={};P!=null&&P.length&&((o=ea(P[0],P[1]))==null||o.reduce((a,s)=>(de[s.toString()]=a,a+P[3]),P[2]));const Ie=a=>{var s,c,h,y,w,S,b,$,_;const{showOverflowTooltip:Je,align:Qe,headerAlign:Xe}=p.TableColumn;return{showOverflowTooltip:te(((s=a==null?void 0:a.props)==null?void 0:s.showOverflowTooltip)??((c=a==null?void 0:a.props)==null?void 0:c["show-overflow-tooltip"])??(a==null?void 0:a.showOverflowTooltip))?u.tableShowOverflowTooltip||Je:((h=a==null?void 0:a.props)==null?void 0:h.showOverflowTooltip)??(a==null?void 0:a.showOverflowTooltip),align:((y=a==null?void 0:a.props)==null?void 0:y.align)||(a==null?void 0:a.align)||u.tableAlignWhole||Qe,headerAlign:((w=a==null?void 0:a.props)==null?void 0:w.headerAlign)||((S=a==null?void 0:a.props)==null?void 0:S["header-align"])||(a==null?void 0:a.headerAlign)||u.tableHeaderAlign||Xe,minWidth:((b=a==null?void 0:a.props)==null?void 0:b.minWidth)||(($=a==null?void 0:a.props)==null?void 0:$["min-width"])||(a==null?void 0:a.minWidth)||de[(((_=a==null?void 0:a.props)==null?void 0:_.label)||(a==null?void 0:a.label)||"").length]}},fe=(a,s,c)=>Z(me,{...s,key:T(a),...Ie(a)},{...c}),U=a=>a.map(s=>{const{slot:c,headerSlot:h,cellRenderer:y,headerRenderer:w,children:S,...b}=s;let $={};return(c||h)&&(c&&($.default=_=>E(Q(),`tableColumn${Ce((b==null?void 0:b.prop)||(b==null?void 0:b.property))}`,{row:_.row,column:_.column,$index:_.$index})),h&&($.header=_=>E(Q(),`tableColumnHeader${Ce((b==null?void 0:b.prop)||(b==null?void 0:b.property))}`,{column:_.column,$index:_.$index}))),(y&&Se(y)||w&&Se(w))&&(y&&($.default=_=>y(Z,_)),w&&($.header=_=>w(Z,_))),S!=null&&S.length&&($.default=()=>U(S)),fe(s,b,$)}),qe=a=>{const s=a==null?void 0:a.filter(c=>!(c!=null&&c.hide));return x?U(s):s.map(c=>{const{props:h,children:y}=c;let w={};return y!=null&&y.default&&(w.default=S=>y==null?void 0:y.default({row:S.row,column:S.column,$index:S.$index})),y!=null&&y.header&&(w.header=S=>y==null?void 0:y.header({column:S.column,$index:S.$index})),fe(c,h,w)})};if(!(Fe(u.tableCommonColumnsIndex)||te(u.tableCommonColumnsIndex))&&((d=(r=p.Table)==null?void 0:r.commonColumns)!=null&&d.length))if(x)m.value.splice(u.tableCommonColumnsIndex,0,...(f=p.Table)==null?void 0:f.commonColumns);else{const a=(v=p.Table)==null?void 0:v.commonColumns;m.value.splice(u.tableCommonColumnsIndex,0,...U(a))}const He=a=>j.value={...a},We=a=>Gt({...a},s=>!Fe(s)&&!te(s)&&s!==""),ce=async(a="normal")=>{O.value=!0;let s={[i.paginationCurrentPageKey]:A[i.paginationCurrentPageKey],[i.paginationPageSizeKey]:A[i.paginationPageSizeKey]};a=="normal"&&(s={...s,...We(j.value)});try{const{tableList:c=[],total:h=0}=await(u.tableRequestMethod&&u.tableRequestMethod({...s}));u.tableDataRenderAgain?K("tableDataRenderAgain",{tableList:c,total:h},(y=[],w=0)=>R(y,w)):R(c,h)}finally{O.value=!1}},Ue=async(a,s,c,h)=>{O.value=!0;try{let y=c;u.tableFilterMethod&&(y=u.tableFilterMethod(c,h));const w=(y==null?void 0:y.length)||0,S=i.paginationhidden?y==null?void 0:y.slice(0):(y==null?void 0:y.slice((a-1)*s,a*s))||[];u.tableDataRenderAgain?K("tableDataRenderAgain",{tableList:S,total:w},(b=[],$=0)=>R(b,$)):R(S,w)}finally{O.value=!1}},R=async(a,s=0)=>{C.value=a,A[i.paginationTotalKey]=s,await hn(),K("tableDataLoaded",a)},Ve=a=>{m.value=a.map(s=>{var c;return{...(c=m.value.filter(h=>T(h)==(s==null?void 0:s.key)))==null?void 0:c[0],hide:s==null?void 0:s.hide}}).slice(0)},Ge=async(a="backend")=>{a=="backend"&&ce(),a=="frontend"&&K("tableDataRefreshed",C.value)},K=t,pe=mn();n({tableRef:()=>{var a;return(a=pe==null?void 0:pe.proxy)==null?void 0:a.$refs[`tableRef${u.tableKey}`]},doRefresh:Ge});let V,G;return u.tableFrontend?G=on([()=>A[i.paginationCurrentPageKey],()=>A[i.paginationPageSizeKey],()=>u.tableData,j],([a,s,c,h])=>{Ue(a,s,c,h)},{deep:!0}):V=un(async()=>{ce()},{flush:"post"}),u.tableFrontend&&V&&V(),!u.tableFrontend&&G&&G(),(a,s)=>{var c,h;const y=ve("el-table"),w=ve("el-pagination"),S=sn("loading");return k(),N("div",ia,[L("div",ua,[L("div",{class:be(["table-main-header",a.$slots.tableHeader||u.tableEnableTools||F(p).toolsBar?"mb5":""])},[L("div",sa,[E(a.$slots,"tableHeader",{},void 0,!0)]),u.tableEnableTools||F(p).toolsBar?(k(),N("div",da,[ge(F(g),{"bar-setting-check-list":m.value.map(b=>{var $,_;return{label:`${(b==null?void 0:b.label)||(($=b==null?void 0:b.props)==null?void 0:$.label)}`,fixed:(b==null?void 0:b.fixed)||((_=b==null?void 0:b.props)==null?void 0:_.fixed),key:T(b)}}),onDynamicListUpdate:Ve},null,8,["bar-setting-check-list"])])):X("",!0)],2),dn((k(),Y(y,ye({ref:`tableRef${u.tableKey}`},{...u,...a.$attrs,...F(p).Table},{style:u.tableStyle||((c=F(p).Table)==null?void 0:c.style),class:u.tableSelectionNoAll?"table-selection__no--all":"",data:C.value}),{default:fn(()=>[u.tableAutoRowIndexSort?(k(),Y(F(me),{key:0,label:"序号",type:"index",width:"60",align:"center",index:b=>(A[i.paginationCurrentPageKey]-1)*A[i.paginationPageSizeKey]+b+1},null,8,["index"])):X("",!0),(k(!0),N(cn,null,vn(qe(m.value),(b,$)=>(k(),Y(pn(b),{key:`${String(b.key)}_${$}`}))),128))]),_:1},16,["style","class","data"])),[[S,O.value]]),E(a.$slots,"tableFooter",{},void 0,!0),i.paginationhidden?X("",!0):(k(),N("div",{key:0,style:bn(`text-align: ${i.paginationPosition||((h=F(p).Pagination)==null?void 0:h.paginationAlign)};${i.paginationStyle}`),class:be(["table-main-pagination",i.paginationMt?`mt${i.paginationMt}`:"",i.paginationMb?`mb${i.paginationMb}`:"",i.paginationClass?i.paginationClass:""])},[L("span",null,[ge(w,ye({...i,...a.$attrs},{"current-page":A[i.paginationCurrentPageKey],"onUpdate:currentPage":s[0]||(s[0]=b=>A[i.paginationCurrentPageKey]=b),"page-size":A[i.paginationPageSizeKey],"onUpdate:pageSize":s[1]||(s[1]=b=>A[i.paginationPageSizeKey]=b),total:A[i.paginationTotalKey]}),null,16,["current-page","page-size","total"])])],6))])])}}}),ha=wn(fa,[["__scopeId","data-v-3390565b"]]);export{ha as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/ToolsBar-BEp2Y6-P.PdhEMvgJ.js","assets/chunks/kliep-tools.es.LP6p9N8X.js","assets/chunks/framework.URa763XA.js","assets/chunks/index.UfSCTmkv.js","assets/app.QMUbpOuY.js","assets/chunks/theme.cz4nT2hu.js","assets/chunks/isBoolean-FTy8Y3r3.lwWwqs-V.js","assets/chunks/default-config-vCTUsqVJ.xfmBKe9X.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
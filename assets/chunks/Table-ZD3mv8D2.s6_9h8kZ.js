import{a$ as Ge,d as Je,N as Qe,h as J,G as Xe,a0 as Q,a1 as Ye,af as Ze,j as et,A as tt,y as nt,z as at,D as ce,aG as lt,o as M,c as E,k as L,n as pe,m as k,r as I,I as ve,e as X,ah as rt,b as Y,w as ot,F as it,J as ut,E as st,M as be,O as dt,aL as ft,aM as ct,P as pt,a9 as vt,ax as Z}from"./framework.0_9lIZ6q.js";import{P as bt,x as ge,E as ye}from"../app.QESPpGH-.js";import{h as he,q as gt,y as ae,e as me,G as yt,H as ht,K as we,F as R,o as mt,c as le,n as ke,R as z,U as re,l as wt,V as St,$ as Se,j as H,a as $t,L as $e,O as Ce,r as Ct,b as _t,m as At,W as _e,B as Ae}from"./default-config-vCTUsqVJ.xfmBKe9X.js";import{aI as xt}from"./kliep-tools.es.k-JZv38T.js";import"./theme.SbXruKJR.js";import"./index.MjdE9xpz.js";var jt=/\s/;function Ot(e){for(var t=e.length;t--&&jt.test(e.charAt(t)););return t}var Pt=/^\s+/;function Bt(e){return e&&e.slice(0,Ot(e)+1).replace(Pt,"")}var xe=NaN,Tt=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,kt=parseInt;function Rt(e){if(typeof e=="number")return e;if(re(e))return xe;if(R(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=R(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Bt(e);var n=Kt.test(e);return n||Mt.test(e)?kt(e.slice(2),n?2:8):Tt.test(e)?xe:+e}var je=1/0,zt=17976931348623157e292;function ee(e){if(!e)return e===0?e:0;if(e=Rt(e),e===je||e===-je){var t=e<0?-1:1;return t*zt}return e===e?e:0}function Dt(e){return e}function Ft(e,t,n){if(!R(n))return!1;var a=typeof t;return(a=="number"?mt(n)&&le(t,n.length):a=="string"&&t in n)?ke(n[t],e):!1}var Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Et=/^\w*$/;function oe(e,t){if(z(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||re(e)?!0:Et.test(e)||!Nt.test(e)||t!=null&&e in Object(t)}var Lt="Expected a function";function ie(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Lt);var n=function(){var a=arguments,u=t?t.apply(this,a):a[0],r=n.cache;if(r.has(u))return r.get(u);var f=e.apply(this,a);return n.cache=r.set(u,f)||r,f};return n.cache=new(ie.Cache||ae),n}ie.Cache=ae;var It=500;function qt(e){var t=ie(e,function(a){return n.size===It&&n.clear(),a}),n=t.cache;return t}var Ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wt=/\\(\\)?/g,Ut=qt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ht,function(n,a,u,r){t.push(u?r.replace(Wt,"$1"):a||n)}),t});const Vt=Ut;function U(e,t){return z(e)?e:oe(e,t)?[e]:Vt(wt(e))}var Gt=1/0;function D(e){if(typeof e=="string"||re(e))return e;var t=e+"";return t=="0"&&1/e==-Gt?"-0":t}function ue(e,t){t=U(t,e);for(var n=0,a=t.length;e!=null&&n<a;)e=e[D(t[n++])];return n&&n==a?e:void 0}function Jt(e,t,n){var a=e==null?void 0:ue(e,t);return a===void 0?n:a}var Qt="__lodash_hash_undefined__";function Xt(e){return this.__data__.set(e,Qt),this}function Yt(e){return this.__data__.has(e)}function W(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new ae;++t<n;)this.add(e[t])}W.prototype.add=W.prototype.push=Xt;W.prototype.has=Yt;function Zt(e,t){for(var n=-1,a=e==null?0:e.length;++n<a;)if(t(e[n],n,e))return!0;return!1}function en(e,t){return e.has(t)}var tn=1,nn=2;function Re(e,t,n,a,u,r){var f=n&tn,s=e.length,o=t.length;if(s!=o&&!(f&&o>s))return!1;var i=r.get(e),p=r.get(t);if(i&&p)return i==t&&p==e;var w=-1,v=!0,x=n&nn?new W:void 0;for(r.set(e,t),r.set(t,e);++w<s;){var _=e[w],y=t[w];if(a)var j=f?a(y,_,w,t,e,r):a(_,y,w,e,t,r);if(j!==void 0){if(j)continue;v=!1;break}if(x){if(!Zt(t,function(A,O){if(!en(x,O)&&(_===A||u(_,A,n,a,r)))return x.push(O)})){v=!1;break}}else if(!(_===y||u(_,y,n,a,r))){v=!1;break}}return r.delete(e),r.delete(t),v}function an(e){var t=-1,n=Array(e.size);return e.forEach(function(a,u){n[++t]=[u,a]}),n}function ln(e){var t=-1,n=Array(e.size);return e.forEach(function(a){n[++t]=a}),n}var rn=1,on=2,un="[object Boolean]",sn="[object Date]",dn="[object Error]",fn="[object Map]",cn="[object Number]",pn="[object RegExp]",vn="[object Set]",bn="[object String]",gn="[object Symbol]",yn="[object ArrayBuffer]",hn="[object DataView]",Oe=he?he.prototype:void 0,te=Oe?Oe.valueOf:void 0;function mn(e,t,n,a,u,r,f){switch(n){case hn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case yn:return!(e.byteLength!=t.byteLength||!r(new _e(e),new _e(t)));case un:case sn:case cn:return ke(+e,+t);case dn:return e.name==t.name&&e.message==t.message;case pn:case bn:return e==t+"";case fn:var s=an;case vn:var o=a&rn;if(s||(s=ln),e.size!=t.size&&!o)return!1;var i=f.get(e);if(i)return i==t;a|=on,f.set(e,t);var p=Re(s(e),s(t),a,u,r,f);return f.delete(e),p;case gn:if(te)return te.call(e)==te.call(t)}return!1}var wn=1,Sn=Object.prototype,$n=Sn.hasOwnProperty;function Cn(e,t,n,a,u,r){var f=n&wn,s=Ae(e),o=s.length,i=Ae(t),p=i.length;if(o!=p&&!f)return!1;for(var w=o;w--;){var v=s[w];if(!(f?v in t:$n.call(t,v)))return!1}var x=r.get(e),_=r.get(t);if(x&&_)return x==t&&_==e;var y=!0;r.set(e,t),r.set(t,e);for(var j=f;++w<o;){v=s[w];var A=e[v],O=t[v];if(a)var F=f?a(O,A,v,t,e,r):a(A,O,v,e,t,r);if(!(F===void 0?A===O||u(A,O,n,a,r):F)){y=!1;break}j||(j=v=="constructor")}if(y&&!j){var T=e.constructor,P=t.constructor;T!=P&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof P=="function"&&P instanceof P)&&(y=!1)}return r.delete(e),r.delete(t),y}var _n=1,Pe="[object Arguments]",Be="[object Array]",q="[object Object]",An=Object.prototype,Te=An.hasOwnProperty;function xn(e,t,n,a,u,r){var f=z(e),s=z(t),o=f?Be:$e(e),i=s?Be:$e(t);o=o==Pe?q:o,i=i==Pe?q:i;var p=o==q,w=i==q,v=o==i;if(v&&Ce(e)){if(!Ce(t))return!1;f=!0,p=!1}if(v&&!p)return r||(r=new H),f||Ct(e)?Re(e,t,n,a,u,r):mn(e,t,o,n,a,u,r);if(!(n&_n)){var x=p&&Te.call(e,"__wrapped__"),_=w&&Te.call(t,"__wrapped__");if(x||_){var y=x?e.value():e,j=_?t.value():t;return r||(r=new H),u(y,j,n,a,r)}}return v?(r||(r=new H),Cn(e,t,n,a,u,r)):!1}function se(e,t,n,a,u){return e===t?!0:e==null||t==null||!Se(e)&&!Se(t)?e!==e&&t!==t:xn(e,t,n,a,se,u)}var jn=1,On=2;function Pn(e,t,n,a){var u=n.length,r=u,f=!a;if(e==null)return!r;for(e=Object(e);u--;){var s=n[u];if(f&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++u<r;){s=n[u];var o=s[0],i=e[o],p=s[1];if(f&&s[2]){if(i===void 0&&!(o in e))return!1}else{var w=new H;if(a)var v=a(i,p,o,e,t,w);if(!(v===void 0?se(p,i,jn|On,a,w):v))return!1}}return!0}function ze(e){return e===e&&!R(e)}function Bn(e){for(var t=$t(e),n=t.length;n--;){var a=t[n],u=e[a];t[n]=[a,u,ze(u)]}return t}function De(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Tn(e){var t=Bn(e);return t.length==1&&t[0][2]?De(t[0][0],t[0][1]):function(n){return n===e||Pn(n,e,t)}}function Kn(e,t){return e!=null&&t in Object(e)}function Mn(e,t,n){t=U(t,e);for(var a=-1,u=t.length,r=!1;++a<u;){var f=D(t[a]);if(!(r=e!=null&&n(e,f)))break;e=e[f]}return r||++a!=u?r:(u=e==null?0:e.length,!!u&&_t(u)&&le(f,u)&&(z(e)||At(e)))}function kn(e,t){return e!=null&&Mn(e,t,Kn)}var Rn=1,zn=2;function Dn(e,t){return oe(e)&&ze(t)?De(D(e),t):function(n){var a=Jt(n,e);return a===void 0&&a===t?kn(n,e):se(t,a,Rn|zn)}}function Fn(e){return function(t){return t==null?void 0:t[e]}}function Nn(e){return function(t){return ue(t,e)}}function En(e){return oe(e)?Fn(D(e)):Nn(e)}function Ln(e){return typeof e=="function"?e:e==null?Dt:typeof e=="object"?z(e)?Dn(e[0],e[1]):Tn(e):En(e)}function Ke(e){return e===null}function ne(e){return e===void 0}function In(e,t,n,a){if(!R(e))return e;t=U(t,e);for(var u=-1,r=t.length,f=r-1,s=e;s!=null&&++u<r;){var o=D(t[u]),i=n;if(o==="__proto__"||o==="constructor"||o==="prototype")return e;if(u!=f){var p=s[o];i=a?a(p,o,s):void 0,i===void 0&&(i=R(p)?p:le(t[u+1])?[]:{})}St(s,o,i),s=s[o]}return e}function qn(e,t,n){for(var a=-1,u=t.length,r={};++a<u;){var f=t[a],s=ue(e,f);n(s,f)&&In(r,U(f,e),s)}return r}function Hn(e,t){if(e==null)return{};var n=yt(ht(e),function(a){return[a]});return t=Ln(t),qn(e,n,function(a,u){return t(a,u[0])})}var Wn=Math.ceil,Un=Math.max;function Vn(e,t,n,a){for(var u=-1,r=Un(Wn((t-e)/(n||1)),0),f=Array(r);r--;)f[a?r:++u]=e,e+=n;return f}function Gn(e){return function(t,n,a){return a&&typeof a!="number"&&Ft(t,n,a)&&(n=a=void 0),t=ee(t),n===void 0?(n=t,t=0):n=ee(n),a=a===void 0?t<n?1:-1:ee(a),Vn(t,n,a,e)}}var Jn=Gn();const Qn=Jn,Xn=Object.prototype.hasOwnProperty,Me=(e,t)=>Xn.call(e,t),Fe=e=>e!==null&&typeof e=="object",Ne="__epPropKey",Yn=e=>Fe(e)&&!!e[Ne],Zn=(e,t)=>{if(!Fe(e)||Yn(e))return e;const{values:n,required:a,default:u,type:r,validator:f}=e,s={type:r,required:!!a,validator:n||f?o=>{let i=!1,p=[];if(n&&(p=Array.from(n),Me(e,"default")&&p.push(u),i||(i=p.includes(o))),f&&(i||(i=f(o))),!i&&p.length>0){const w=[...new Set(p)].map(v=>JSON.stringify(v)).join(", ");Ge(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${w}], got value ${JSON.stringify(o)}.`)}return i}:void 0,[Ne]:!0};return Me(e,"default")&&(s.default=u),s},ea=["","default","small","large"],ta=Zn({type:String,values:ea,required:!1});var na={data:{type:Array,default:()=>[]},size:ta,width:[String,Number],height:[String,Number],maxHeight:[String,Number],fit:{type:Boolean,default:!0},stripe:Boolean,border:Boolean,rowKey:[String,Function],showHeader:{type:Boolean,default:!0},showSummary:Boolean,sumText:String,summaryMethod:Function,rowClassName:[String,Function],rowStyle:[Object,Function],cellClassName:[String,Function],cellStyle:[Object,Function],headerRowClassName:[String,Function],headerRowStyle:[Object,Function],headerCellClassName:[String,Function],headerCellStyle:[Object,Function],highlightCurrentRow:Boolean,currentRowKey:[String,Number],emptyText:String,expandRowKeys:Array,defaultExpandAll:Boolean,defaultSort:Object,tooltipEffect:String,tooltipOptions:Object,spanMethod:Function,selectOnIndeterminate:{type:Boolean,default:!0},indent:{type:Number,default:16},treeProps:{type:Object,default:()=>({hasChildren:"hasChildren",children:"children"})},lazy:Boolean,load:Function,style:{type:Object,default:()=>({})},className:{type:String,default:""},tableLayout:{type:String,default:"fixed"},scrollbarAlwaysOn:{type:Boolean,default:!1},flexible:Boolean,showOverflowTooltip:[Boolean,Object]};const aa={class:"table mt10 mb10"},la={class:"table-main"},ra={class:"table-main-header__slot"},oa={key:0,class:"table-main-header__tools"},ia=Je({name:"kd-table",__name:"Table",props:{...na,height:{type:String,default:"100%"},rowKey:{type:String,default:"id"},emptyText:{type:String,default:"暂无数据"},tablePaginationByFrontend:{type:Boolean,default:!1},tableAutoRowIndexSort:{type:Boolean,default:!0},tableEnableTools:{type:Boolean},tableSelectionNoAll:{type:Boolean,default:!1},tableDataRenderAgain:{type:Boolean,default:!1},tableData:{type:Array,default:()=>[]},tableColumns:{type:Array,default:()=>[]},tableRequestMethod:Function,tableFilterMethod:Function,tablePagination:{type:Object},tableKey:{type:String,default:""},tableStyle:String,tableAlignWhole:{type:String},tableHeaderAlign:{type:String},tableShowOverflowTooltip:{type:Boolean},tableCommonColumnsIndex:{type:Number}},emits:["tableDataLoaded","tableDataRefreshed","tableDataRenderAgain","tableBeforeMount","tableMounted","tableUnmouted"],setup(e,{expose:t,emit:n}){var a,u,r;const f=ft(()=>ct(()=>import("./ToolsBar-Y9gYMWdW.wvSVxMyp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),s=xt({},gt,Qe("kd-filter-table")),o=e,i={...s.Pagination,paginationPosition:"",paginationhidden:!1,paginationMt:10,paginationMb:!1,background:!0,small:!0,layout:"total, sizes, prev, pager, next, jumper",...o.tablePagination},p=J(!1),w=J(o.tableData?[...o.tableData.slice(0,i.paginationPageSize)]:[]),v=Xe([]),x=J(),_=o.tableColumns.length;_?v.value=o.tableColumns:v.value=(a=Q().tableColumns()[0].children)==null?void 0:a.filter(l=>{var d;return((d=l==null?void 0:l.type)==null?void 0:d.name)=="ElTableColumn"});const y=Ye({[i.paginationCurrentPageKey]:i.paginationCurrentPage,[i.paginationPageSizeKey]:i.paginationPageSize,[i.paginationTotalKey]:((u=o.tableData)==null?void 0:u.length)||0});Ze(()=>{K("tableBeforeMount"),ge.on("filterSendQuery2Table",Le)}),et(()=>K("tableMounted")),tt(()=>{K("tableUnmouted"),ge.off("filterSendQuery2Table")});const j=l=>{var d,b,m;return`${(l==null?void 0:l.label)||((d=l==null?void 0:l.props)==null?void 0:d.label)}_${(l==null?void 0:l.prop)||(l==null?void 0:l.property)||((b=l==null?void 0:l.props)==null?void 0:b.prop)||((m=l==null?void 0:l.props)==null?void 0:m.property)}`},{minWidthConfig:A}=s.Table,O={};A!=null&&A.length&&((r=Qn(A[0],A[1]))==null||r.reduce((l,d)=>(O[d.toString()]=l,l+A[3]),A[2]));const F=l=>{var d,b,m,h,$,C,c,g,S;const{showOverflowTooltip:B,align:Ue,headerAlign:Ve}=s.TableColumn;return{showOverflowTooltip:ne(((d=l==null?void 0:l.props)==null?void 0:d.showOverflowTooltip)??((b=l==null?void 0:l.props)==null?void 0:b["show-overflow-tooltip"])??(l==null?void 0:l.showOverflowTooltip))?o.tableShowOverflowTooltip||B:((m=l==null?void 0:l.props)==null?void 0:m.showOverflowTooltip)??(l==null?void 0:l.showOverflowTooltip),align:((h=l==null?void 0:l.props)==null?void 0:h.align)||(l==null?void 0:l.align)||o.tableAlignWhole||Ue,headerAlign:(($=l==null?void 0:l.props)==null?void 0:$.headerAlign)||((C=l==null?void 0:l.props)==null?void 0:C["header-align"])||(l==null?void 0:l.headerAlign)||o.tableHeaderAlign||Ve,minWidth:((c=l==null?void 0:l.props)==null?void 0:c.minWidth)||((g=l==null?void 0:l.props)==null?void 0:g["min-width"])||(l==null?void 0:l.minWidth)||O[(((S=l==null?void 0:l.props)==null?void 0:S.label)||(l==null?void 0:l.label)||"").length]}},T=(l,d,b)=>Z(ye,{...d,key:j(l),...F(l)},{...b}),P=l=>l.map(d=>{const{slot:b,headerSlot:m,cellRenderer:h,headerRenderer:$,children:C,...c}=d;let g={};return(b||m)&&(b&&(g.default=S=>I(Q(),`tableColumn${we((c==null?void 0:c.prop)||(c==null?void 0:c.property))}`,{row:S.row,column:S.column,$index:S.$index})),m&&(g.header=S=>I(Q(),`tableColumnHeader${we((c==null?void 0:c.prop)||(c==null?void 0:c.property))}`,{column:S.column,$index:S.$index}))),(h&&me(h)||$&&me($))&&(h&&(g.default=S=>h(Z,S)),$&&(g.header=S=>$(Z,S))),C!=null&&C.length&&(g.default=()=>P(C)),T(d,c,g)}),Ee=l=>{var d,b,m;let h=[];const $=l==null?void 0:l.filter(C=>!(C!=null&&C.hide));return _?h=P($):h=$.map(C=>{const{props:c,children:g}=C;let S={};return g!=null&&g.default&&(S.default=B=>g==null?void 0:g.default({row:B.row,column:B.column,$index:B.$index})),g!=null&&g.header&&(S.header=B=>g==null?void 0:g.header({column:B.column,$index:B.$index})),T(C,c,S)}),!(Ke(o.tableCommonColumnsIndex)&&ne(o.tableCommonColumnsIndex))&&(b=(d=s.Table)==null?void 0:d.commonColumns)!=null&&b.length&&h.splice(o.tableCommonColumnsIndex,0,...P((m=s.Table)==null?void 0:m.commonColumns)),h},Le=l=>x.value={...l},Ie=l=>Hn({...l},d=>!Ke(d)&&!ne(d)&&d!==""),de=async(l="normal")=>{p.value=!0;let d={[i.paginationCurrentPageKey]:y[i.paginationCurrentPageKey],[i.paginationPageSizeKey]:y[i.paginationPageSizeKey]};l=="normal"&&(d={...d,...Ie(x.value)});try{const{tableList:b=[],total:m=0}=await(o.tableRequestMethod&&o.tableRequestMethod({...d}));o.tableDataRenderAgain?K("tableDataRenderAgain",{tableList:b,total:m},(h=[],$=0)=>N(h,$)):N(b,m)}finally{p.value=!1}},qe=async(l,d,b,m)=>{p.value=!0;try{let h=b;o.tableFilterMethod&&(h=o.tableFilterMethod(b,m));const $=(h==null?void 0:h.length)||0,C=i.paginationhidden?h==null?void 0:h.slice(0):(h==null?void 0:h.slice((l-1)*d,l*d))||[];o.tableDataRenderAgain?K("tableDataRenderAgain",{tableList:C,total:$},(c=[],g=0)=>N(c,g)):N(C,$)}finally{p.value=!1}},N=async(l,d=0)=>{w.value=l,y[i.paginationTotalKey]=d,await pt(),K("tableDataLoaded",l)},He=l=>{v.value=l.map(d=>{var b;return{...(b=v.value.filter(m=>j(m)==(d==null?void 0:d.key)))==null?void 0:b[0],hide:d==null?void 0:d.hide}}).slice(0)},We=async(l="backend")=>{l=="backend"&&de(),l=="frontend"&&K("tableDataRefreshed",w.value)},K=n,fe=vt();t({tableRef:()=>{var l;return(l=fe==null?void 0:fe.proxy)==null?void 0:l.$refs[`tableRef${o.tableKey}`]},doRefresh:We});let V,G;return o.tablePaginationByFrontend?G=nt([()=>y[i.paginationCurrentPageKey],()=>y[i.paginationPageSizeKey],()=>o.tableData,x],([l,d,b,m])=>{qe(l,d,b,m)},{deep:!0}):V=at(async()=>{de()},{flush:"post"}),o.tablePaginationByFrontend&&V&&V(),!o.tablePaginationByFrontend&&G&&G(),(l,d)=>{var b,m;const h=ce("el-table"),$=ce("el-pagination"),C=lt("loading");return M(),E("div",aa,[L("div",la,[L("div",{class:pe(["table-main-header",l.$slots.tableHeader||o.tableEnableTools||k(s).toolsBar?"mb5":""])},[L("div",ra,[I(l.$slots,"tableHeader",{},void 0,!0)]),o.tableEnableTools||k(s).toolsBar?(M(),E("div",oa,[ve(k(f),{"bar-setting-check-list":v.value.map(c=>{var g,S;return{label:`${(c==null?void 0:c.label)||((g=c==null?void 0:c.props)==null?void 0:g.label)}`,fixed:(c==null?void 0:c.fixed)||((S=c==null?void 0:c.props)==null?void 0:S.fixed),key:j(c)}}),onDynamicListUpdate:He},null,8,["bar-setting-check-list"])])):X("",!0)],2),rt((M(),Y(h,be({ref:`tableRef${o.tableKey}`},{...o,...l.$attrs,...k(s).Table},{style:o.tableStyle||((b=k(s).Table)==null?void 0:b.style),class:o.tableSelectionNoAll?"table-selection__no--all":"",data:w.value}),{default:ot(()=>[o.tableAutoRowIndexSort?(M(),Y(k(ye),{key:0,label:"序号",type:"index",width:"60",align:"center",index:c=>(y[i.paginationCurrentPageKey]-1)*y[i.paginationPageSizeKey]+c+1},null,8,["index"])):X("",!0),(M(!0),E(it,null,st(Ee(v.value),(c,g)=>(M(),Y(ut(c),{key:`${String(c.key)}_${g}`}))),128))]),_:1},16,["style","class","data"])),[[C,p.value]]),I(l.$slots,"tableFooter",{},void 0,!0),i.paginationhidden?X("",!0):(M(),E("div",{key:0,style:dt(`text-align: ${i.paginationPosition||((m=k(s).Pagination)==null?void 0:m.paginationAlign)};${i.paginationStyle}`),class:pe(["table-main-pagination",i.paginationMt?`mt${i.paginationMt}`:"",i.paginationMb?`mb${i.paginationMb}`:"",i.paginationClass?i.paginationClass:""])},[L("span",null,[ve($,be({...i,...l.$attrs},{"current-page":y[i.paginationCurrentPageKey],"onUpdate:currentPage":d[0]||(d[0]=c=>y[i.paginationCurrentPageKey]=c),"page-size":y[i.paginationPageSizeKey],"onUpdate:pageSize":d[1]||(d[1]=c=>y[i.paginationPageSizeKey]=c),total:y[i.paginationTotalKey]}),null,16,["current-page","page-size","total"])])],6))])])}}}),va=bt(ia,[["__scopeId","data-v-4478b622"]]);export{va as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/ToolsBar-Y9gYMWdW.wvSVxMyp.js","assets/chunks/kliep-tools.es.k-JZv38T.js","assets/chunks/framework.0_9lIZ6q.js","assets/chunks/index.MjdE9xpz.js","assets/app.QESPpGH-.js","assets/chunks/theme.SbXruKJR.js","assets/chunks/isBoolean-FTy8Y3r3.lwWwqs-V.js","assets/chunks/default-config-vCTUsqVJ.xfmBKe9X.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
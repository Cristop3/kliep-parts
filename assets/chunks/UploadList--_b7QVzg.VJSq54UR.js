import{aM as Q}from"./kliep-tools.es.Wv7uMm5Z.js";import{P as R,X,Q as q}from"../app.yeyzCMeM.js";import{d as G,N as H,al as J,g as k,V as K,y as v,D as n,o as t,c,I as s,w as r,m as e,t as y,a as O,r as S,b as w,e as V,M as W,F as Y,E as Z,k as u}from"./framework.0_9lIZ6q.js";import"./index.MjdE9xpz.js";import"./theme.SbXruKJR.js";const ee={class:"upload-list"},oe=["onClick"],le={class:"file-right"},ae=G({__name:"UploadList",props:{limitSize:{default:200},screenFullLoading:{type:Boolean,default:!1},loadingType:{default:"progress"},btnLabel:{default:"选择文件"},showDownload:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},link:{type:Boolean},onSuccessCb:{},onErrorCb:{},onProgressCb:{},onChangeCb:{},onBeforeUploadCb:{},modelValueString:{},modelValueFiles:{}},emits:["update:modelValueString","update:modelValueFiles","fileChange"],setup(B,{emit:F}){const o=B,g=H("kd-upload"),{accept:m}=J(),f=k(()=>o.loadingType==="loading"),_=k(()=>o.link?"上传":o.btnLabel),L=l=>{const p=[...d.value];p.splice(l,1),d.value=p},i=F,{uploading:C,fileList:d,nativeFileList:D,uploadProgress:P,onSuccess:U,onError:$,onProgress:E,onChange:z,onBeforeUpload:N,funcDownloadFile:x,funcUpload2String:T}=Q({accept:m||"*",screenFullLoading:o.screenFullLoading,limitSize:o.limitSize,modelValueString:K(()=>o.modelValueString),onSuccessCb:o.onSuccessCb,onErrorCb:o.onErrorCb,onProgressCb:o.onProgressCb,onChangeCb:o.onChangeCb,onBeforeUploadCb:o.onBeforeUploadCb,...g});return v(d,l=>{i("update:modelValueString",T(l)),i("fileChange")}),v(D,l=>{i("update:modelValueFiles",l),i("fileChange")}),(l,p)=>{const b=n("el-button"),j=n("el-progress"),A=n("el-upload"),I=n("el-icon"),M=n("el-tooltip");return t(),c("div",ee,[s(A,W({multiple:"",accept:e(m),action:e(g).uploadUrl,"show-file-list":!1,"on-success":e(U),"on-error":e($),"on-progress":e(E),"on-change":e(z),"before-upload":e(N)},{...l.$attrs}),{default:r(()=>[S(l.$slots,"default",{},()=>[s(b,{type:"primary",link:o.link,loading:f.value?e(C):!1},{default:r(()=>[O(y(_.value),1)]),_:1},8,["link","loading"])],!0)]),tip:r(()=>[S(l.$slots,"tip",{},void 0,!0),!f.value&&e(C)?(t(),w(j,{key:0,percentage:e(P),"stroke-width":4,striped:"","striped-flow":"",duration:10},null,8,["percentage"])):V("",!0)]),_:3},16,["accept","action","on-success","on-error","on-progress","on-change","before-upload"]),(t(!0),c(Y,null,Z(e(d),(a,h)=>(t(),c("div",{class:"upload-list--file mt10",key:`${a.url}_${h}`},[u("div",{class:"file-left",onClick:()=>o.showDownload&&e(x)(a)},[s(I,{style:{"margin-right":"6px"},size:16},{default:r(()=>[s(e(X))]),_:1}),u("span",null,y(a==null?void 0:a.name),1)],8,oe),u("div",le,[a!=null&&a.url&&l.$props.showDelete?(t(),w(M,{key:0,content:`删除【${a==null?void 0:a.name}】`,placement:"top-end"},{default:r(()=>[s(b,{icon:e(q),circle:"",type:"danger",size:"small",onClick:ne=>L(h)},null,8,["icon","onClick"])]),_:2},1032,["content"])):V("",!0)])]))),128))])}}}),pe=R(ae,[["__scopeId","data-v-1153032c"]]);export{pe as default};

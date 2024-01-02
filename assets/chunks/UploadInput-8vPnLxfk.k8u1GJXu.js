import{aS as j}from"./kliep-tools.es.b9z_Dmbz.js";import{U as A,C as H,$ as M}from"../app.jvF5GiqA.js";import{d as q,N as G,an as J,g as p,V as K,y,D as t,o as c,c as O,I as n,w as a,m as e,b as V,e as _,k as Q,t as W,a as X,r as Y,M as Z}from"./framework.URa763XA.js";import"./index.UfSCTmkv.js";import"./theme.cz4nT2hu.js";const ee={class:"upload-input"},oe={class:"upload-input-main"},ae=q({__name:"UploadInput",props:{limitSize:{default:200},screenFullLoading:{type:Boolean,default:!1},loadingType:{default:"progress"},btnLabel:{default:"选择文件"},showDownload:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},link:{type:Boolean},onSuccessCb:{},onErrorCb:{},onProgressCb:{},onChangeCb:{},onBeforeUploadCb:{},modelValueString:{},modelValueFiles:{}},emits:["update:modelValueString","update:modelValueFiles","fileChange"],setup(B,{emit:w}){const o=B,g=G("kd-upload",()=>{}),{accept:f=".pdf"}=J(),m=p(()=>o.loadingType==="loading"),C=p(()=>o.link?"上传":o.btnLabel),b=p(()=>!!(d.value||i.value)),F=()=>{u.value=[],r.value="",i.value=""},s=w,{uploading:d,name:r,url:i,fileList:u,nativeFileList:U,uploadProgress:D,onSuccess:L,onError:$,onProgress:P,onChange:x,onBeforeUpload:z,funcDownloadFile:E,funcUpload2String:N}=j({accept:f,screenFullLoading:o.screenFullLoading,limitSize:o.limitSize,modelValueString:K(()=>o.modelValueString),onSuccessCb:o.onSuccessCb,onErrorCb:o.onErrorCb,onProgressCb:o.onProgressCb,onChangeCb:o.onChangeCb,onBeforeUploadCb:o.onBeforeUploadCb,...g});return y(u,l=>{s("update:modelValueString",N(l)),s("fileChange")}),y(U,l=>{s("update:modelValueFiles",l),s("fileChange")}),(l,v)=>{const I=t("el-icon"),h=t("el-tooltip"),S=t("el-button"),T=t("el-input"),R=t("el-upload");return c(),O("div",ee,[n(T,{class:"upload-input-input",readonly:"",value:e(r)},{prefix:a(()=>[e(i)&&o.showDownload?(c(),V(h,{key:0,content:`下载【${e(r)}】`,placement:"top-end"},{default:a(()=>[n(I,{class:"el-input__icon",size:14,onClick:v[0]||(v[0]=le=>{var k;return e(E)((k=e(u))==null?void 0:k[0])})},{default:a(()=>[n(e(H))]),_:1})]),_:1},8,["content"])):_("",!0)]),suffix:a(()=>[e(i)&&o.showDelete?(c(),V(h,{key:0,content:`删除【${e(r)}】`,placement:"top-end"},{default:a(()=>[n(S,{icon:e(M),circle:"",type:"danger",size:"small",onClick:F},null,8,["icon"])]),_:1},8,["content"])):_("",!0)]),_:1},8,["value"]),Q("span",oe,[n(R,Z({ref:"uploadRef",accept:e(f),action:e(g).uploadUrl,limit:1,"show-file-list":!1,"on-success":e(L),"on-error":e($),"on-progress":e(P),"on-change":e(x),"before-upload":e(z),disabled:b.value},{...l.$attrs}),{trigger:a(()=>[n(S,{type:"primary",link:o.link,loading:m.value?e(d):!1,disabled:b.value},{default:a(()=>[X(W(m.value?C.value:e(d)?`${e(D)}%`:C.value),1)]),_:1},8,["link","loading","disabled"])]),tip:a(()=>[Y(l.$slots,"tip",{},void 0,!0)]),_:3},16,["accept","action","on-success","on-error","on-progress","on-change","before-upload","disabled"])])])}}}),de=A(ae,[["__scopeId","data-v-4ee5ace6"]]);export{de as default};

import{f as t,w as o,s as n}from"./chunks/index.UfSCTmkv.js";import{d as P,D as r,o as a,b as D,w as c,I as s,c as i,E as f,F as u,t as p,k as l,e as N,a as m}from"./chunks/framework.URa763XA.js";const T={key:0,style:{"text-align":"right"}},B=P({__name:"index",setup(F){const d=[{title:"【发布】0.2.3版本",timestamp:"2023-12-29",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table组件",author:"Caristop3",content:["【fix】取消length判断因为可能tableColumns初始化为空其实也是走的props"],timestamp:"2023-12-29",color:"#FF0000",icon:o},{title:"【发布】0.2.2版本",timestamp:"2023-12-28",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table组件",author:"Caristop3",content:["【fix】修复针对datePicker的filter控件 初始化时值未返回并优化成 真实字段一起包装","【fix】修复filter table之间初始化数据通信方式"],timestamp:"2023-12-28",color:"#FF0000",icon:o},{title:"【发布】0.2.1版本",timestamp:"2023-12-25",color:"#0000FF",icon:t},{title:"【修复】kd-sub-module组件",author:"Caristop3",content:["【fix】解决kd-sub-module头部样式问题","【fix】解决有默认值时报inject警告，采用带默认值"],timestamp:"2023-12-25",color:"#FF0000",icon:o},{title:"【发布】0.2.0版本",timestamp:"2023-12-22",color:"#0000FF",icon:t},{title:"【增加】kd-rich-text、kd-sub-module、kd-curd-table组件",author:"Caristop3",content:["【fix】文档kd-filter-table 顶层插槽缺失","【feat】需要增加curd Table组件","【feat】需要增加kd-page model模式得teleport-key得全局配置","【feat】需要增加select options得简写方式","【feat】需要需要增加wangeditor5组件","【feat】需要需要增加详情页副标题组件","【fix】公共字段 未在操作按钮中显示","【fix】解决child-page模式下 usePadding也可能为true 改限定只通过usePadding标识","【fix】解决kd-page只有在modal-page下teleportKey才生效","【fix】template模式递归获取ElTableColumn 这样兼容slot上再slot"],timestamp:"2023-12-22",color:"#00FF00",icon:n},{title:"【发布】0.1.7版本",timestamp:"2023-12-20",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table",author:"Caristop3",content:["1.【fix】table功能按钮需要增加ml12","2.【fix】修复公共字段判断问题"],timestamp:"2023-12-20",color:"#FF0000",icon:o},{title:"【发布】0.1.6版本",timestamp:"2023-12-19",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table",author:"Caristop3",content:["1. 【fix】解决非非驼峰的showOverflowTooltip和header-align等处理"],timestamp:"2023-12-19",color:"#FF0000",icon:o},{title:"【发布】0.1.5版本",timestamp:"2023-12-19",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table & kliep-tools",author:"Caristop3",content:["1. 【feat】增加table内部主动根据label字数设置min-width，不再繁琐的从外面设置，但不支持嵌套层级","2. 【feat】增加常见的枚举值 比如： 是&否 已启用&已停用 停用&启用","3. 【feat】增加方法：funcDeepAssignObject"],timestamp:"2023-12-19",color:"#FF0000",icon:o},{title:"【发布】0.1.4版本",timestamp:"2023-12-18",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table",author:"Caristop3",content:["1. 【fix】表格字段过长 工具bar超出显示范围 增加滚动","2. 【feat】增加全局配置table属性"],timestamp:"2023-12-18",color:"#FF0000",icon:o},{title:"【发布】0.1.3版本",timestamp:"2023-12-15",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table",author:"Caristop3",content:["1. 修复二次赋值filterList后 并未更新视图","2. 【fix】更新最新filterList 老版本是computed v-for 现在是变量"],timestamp:"2023-12-15",color:"#FF0000",icon:o},{title:"【发布】0.1.2版本",timestamp:"2023-12-15",color:"#0000FF",icon:t},{title:"【修复】kd-filter-table模板模式下获取不到scope",author:"Caristop3",content:["1. 【fix】重构关于props和template模式逻辑","2. 【feat】完全支持嵌套表格字段","3.【feat】 增加cellRender h函数渲染"],timestamp:"2023-12-15",color:"#FF0000",icon:o},{title:"【发布】0.1.1版本",content:["1. 【feat】增加外层npmrc配置私域"],timestamp:"2023-12-12",color:"#0000FF",icon:t},{title:"【增加】kd-upload、kd-el-col组件",author:"Caristop3",content:["1. 【feat】增加kd-upload","2. 【feat】增加kd-el-col"],timestamp:"2023-12-12",color:"#00FF00",icon:n},{title:"【增加】kd-page、kd-filter-table、kd-page组件",author:"Caristop3",content:["1. 【feat】增加kd-page","2. 【feat】增加kd-filter-table","3. 【feat】增加kd-page"],timestamp:"2023-12-04",color:"#00FF00",icon:n},{title:"【初始化】公共库UIToolsDocs",author:"Caristop3",content:["采用pnpm包管理方式，启动kliep-parts工程，子工程包含docs、package、examples等等"],timestamp:"2023-12-01",color:"#00FF00",icon:n}];return(_,E)=>{const h=r("el-card"),k=r("el-timeline-item"),b=r("el-timeline"),x=r("el-scrollbar");return a(),D(x,{"max-height":480},{default:c(()=>[s(b,null,{default:c(()=>[(a(),i(u,null,f(d,(e,g)=>s(k,{key:g,icon:e.icon,color:e.color,size:"large",timestamp:e.timestamp,placement:"top",center:""},{default:c(()=>[s(h,{header:"",shadow:"hover"},{default:c(()=>[l("h4",null,p(e.title),1),(a(!0),i(u,null,f(e==null?void 0:e.content,(C,w)=>(a(),i("div",{key:w},p(C),1))),128)),e.author?(a(),i("p",T,p(e.author)+" 提交 ",1)):N("",!0)]),_:2},1024)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1})]),_:1})}}}),O=l("h4",{id:"版本变更明细",tabindex:"-1"},[m("版本变更明细 "),l("a",{class:"header-anchor",href:"#版本变更明细","aria-label":'Permalink to "版本变更明细"'},"​")],-1),V=l("ul",null,[l("li",null,[l("code",null,"绿星星"),m("：新增功能 "),l("code",null,"红警告"),m("：修改bug "),l("code",null,"蓝旗子"),m("：版本")])],-1),S=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md","lastUpdated":1703488983000}'),j={name:"components/index.md"},U=Object.assign(j,{setup(F){return(d,_)=>(a(),i("div",null,[O,V,s(B)]))}});export{S as __pageData,U as default};

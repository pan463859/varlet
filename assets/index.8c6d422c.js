import{R}from"./index.c27786bc.js";import{L as j}from"./index.30274ac5.js";import{d as _,c as $,f}from"./components.964f072b.js";import{a as B}from"./elements.86ad7447.js";import{d as D,_ as E,ag as C,D as k,f as y,h as w,N as b,R as L,ac as I,q as a,S as n,al as t,F as M,P as p,Q as u,az as c,M as l,am as V,an as A}from"./vue-router.esm-bundler.53acc020.js";import{R as F}from"./index.f8c3436b.js";import{u as T,a as U,_ as P,b as q,c as Q}from"./index.69d6b515.js";import"./index.73b62ccf.js";/* empty css               */import"./shared.36d94af5.js";function G(e){return["fill","contain","cover","none","scale-down"].includes(e)}const H={src:{type:String},fit:{type:String,validator:G,default:"fill"},alt:{type:String},title:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:_(),onLoad:_(),onError:_()},{n:J,classes:K}=$("image"),O=D({name:"VarImage",directives:{Lazy:j,Ripple:R},props:H,setup(e){return{n:J,classes:K,toSizeUnit:B,handleLoad:r=>{const d=r.currentTarget,{lazy:h,onLoad:v,onError:z}=e;h?(d._lazy.state==="success"&&f(v,r),d._lazy.state==="error"&&f(z,r)):f(v,r)},handleError:r=>{const{lazy:d,onError:h}=e;!d&&f(h,r)}}}});const W=["alt","title","lazy-error","lazy-loading"],X=["alt","title","src"];function Y(e,i,S,r,d,h){const v=C("lazy"),z=C("ripple");return k((y(),w("div",{class:b(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:L({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?k((y(),w("img",{key:0,class:b(e.n("image")),alt:e.alt,title:e.title,"lazy-error":e.error,"lazy-loading":e.loading,style:L({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,46,W)),[[v,e.src]]):(y(),w("img",{key:1,class:b(e.n("image")),alt:e.alt,title:e.title,style:L({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,46,X))],6)),[[z,{disabled:!e.ripple}]])}const s=E(O,[["render",Y]]);s.install=function(e){e.component(s.name,s)};const Z={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},x={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"},{add:N,use:ee,pack:m,packs:Le,merge:Se}=T(),te=e=>{Q(e),ee(e)};U("zh-CN",P);U("en-US",q);N("zh-CN",Z);N("en-US",x);const g=e=>(V("data-v-b6cd487f"),e=e(),A(),e),ae={class:"image-example-fit-item"},ie=g(()=>l("div",{class:"image-example-margin-bottom"},"fill",-1)),se={class:"image-example-fit-item"},oe=g(()=>l("div",{class:"image-example-margin-bottom"},"cover",-1)),le={class:"image-example-fit-item"},re=g(()=>l("div",{class:"image-example-margin-bottom"},"contain",-1)),ne={class:"image-example-fit-item"},de=g(()=>l("div",{class:"image-example-margin-bottom"},"none",-1)),pe={class:"image-example-fit-item"},ue=g(()=>l("div",{class:"image-example-margin-bottom"},"scale-down",-1)),ce={setup(e){return I(te),(i,S)=>(y(),w(M,null,[a(t(c),null,{default:n(()=>[p(u(t(m).basicUsage),1)]),_:1}),a(t(s),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).fitMode),1)]),_:1}),a(t(F),null,{default:n(()=>[l("div",ae,[a(t(s),{width:"22.666vw",height:"22.666vw",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",le,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),re]),l("div",ne,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),de]),l("div",pe,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ue])]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).setRadius),1)]),_:1}),a(t(F),null,{default:n(()=>[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",class:"image-example-fit-item"}),a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).useRipple),1)]),_:1}),a(t(s),{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).useLazyLoad),1)]),_:1}),a(t(s),{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64))}},Ce=E(ce,[["__scopeId","data-v-b6cd487f"]]);export{Ce as default};

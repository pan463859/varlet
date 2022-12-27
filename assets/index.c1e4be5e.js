import{L as O}from"./index.07a49f37.js";import{R as j}from"./index.c27786bc.js";import{g as q,t as X}from"./elements.86ad7447.js";import{d as E,c as Z,f as $}from"./components.964f072b.js";import{d as G,a as z,o as J,u as K,X as W,n as Y,_ as ee,p as te,ag as ae,f as m,h as y,O as B,j as S,M as F,N as v,Q as l,q as n,D as ie,P as c,r as oe,aH as se,ac as ne,ay as le,S as o,al as t,aI as k,F as x,ai as w,i as A}from"./vue-router.esm-bundler.53acc020.js";import{d as re}from"./shared.36d94af5.js";import{p as de,u as ue,a as V,_ as fe,b as me,c as pe}from"./index.69d6b515.js";import{C as D}from"./index.b8df1981.js";import{T as I,a as ge}from"./index.296ac749.js";import{T as ce}from"./index.02d8b4e7.js";import{T as R}from"./index.ac2f1738.js";import{d as he}from"./index.e436054e.js";import"./index.73b62ccf.js";/* empty css               */import"./index.8c5877ed.js";import"./index.fc1c271f.js";import"./index.193f34c5.js";import"./provide.def155c2.js";import"./provide.5383b5a6.js";import"./index.a7d0ee16.js";const Te={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:E(),"onUpdate:loading":E(),"onUpdate:error":E()},{n:ve,classes:ke}=Z("list"),ye=G({name:"VarList",directives:{Ripple:j},components:{VarLoading:O},props:Te,setup(e){const a=z(null),C=z(null);let p;const U=()=>{$(e["onUpdate:error"],!1),$(e["onUpdate:loading"],!0),$(e.onLoad)},h=()=>{const d=p===window?window.innerHeight:p.getBoundingClientRect().bottom,{bottom:g}=C.value.getBoundingClientRect();return Math.floor(g)-X(e.offset)<=d},r=async()=>{await Y();const{loading:d,finished:g,error:N}=e;!d&&!g&&!N&&h()&&U()};return J(()=>{p=q(a.value),e.immediateCheck&&r(),p.addEventListener("scroll",r)}),K(()=>{p.removeEventListener("scroll",r)}),{pack:de,listEl:a,detectorEl:C,dt:re,isNumber:W,load:U,check:r,n:ve,classes:ke}}});function Le(e,a,C,p,U,h){const r=te("var-loading"),d=ae("ripple");return m(),y("div",{class:v(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[B(e.$slots,"default"),e.loading?B(e.$slots,"loading",{key:0},()=>[F("div",{class:v(e.n("loading"))},[F("div",{class:v(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),n(r,{size:"mini",radius:10})],2)]):S("",!0),e.finished?B(e.$slots,"finished",{key:1},()=>[F("div",{class:v(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):S("",!0),e.error?B(e.$slots,"error",{key:2},()=>[ie((m(),y("div",{class:v(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):S("",!0),F("div",{class:v(e.n("detector")),ref:"detectorEl"},null,2)],2)}const L=ee(ye,[["render",Le]]);L.install=function(e){e.component(L.name,L)};const Ce={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},Ue={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:M,use:Be,pack:f,packs:qe,merge:Xe}=ue(),Fe=e=>{pe(e),Be(e)};V("zh-CN",fe);V("en-US",me);M("zh-CN",Ce);M("en-US",Ue);const Ze={setup(e){const a=oe({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:C,list2:p,list3:U,loading:h,loading2:r,loading3:d,finished:g,finished2:N,finished3:P,error:b,current:T}=se(a),_=()=>{if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)},Q=()=>{if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let u=0;u<20;u++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)},H=()=>{if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)};return ne(Fe),le(he),(u,s)=>(m(),y(x,null,[n(t(ge),{active:t(T),"onUpdate:active":s[0]||(s[0]=i=>k(T)?T.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[n(t(I),null,{default:o(()=>[c(l(t(f).basicUsage),1)]),_:1}),n(t(I),null,{default:o(()=>[c(l(t(f).loadFail),1)]),_:1}),n(t(I),null,{default:o(()=>[c(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),n(t(ce),{active:t(T),"onUpdate:active":s[5]||(s[5]=i=>k(T)?T.value=i:null)},{default:o(()=>[n(t(R),null,{default:o(()=>[n(t(L),{finished:t(g),loading:t(h),"onUpdate:loading":s[1]||(s[1]=i=>k(h)?h.value=i:null),onLoad:_},{default:o(()=>[(m(!0),y(x,null,w(t(C),i=>(m(),A(t(D),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),n(t(R),null,{default:o(()=>[n(t(L),{finished:t(N),error:t(b),"onUpdate:error":s[2]||(s[2]=i=>k(b)?b.value=i:null),loading:t(r),"onUpdate:loading":s[3]||(s[3]=i=>k(r)?r.value=i:null),onLoad:Q},{default:o(()=>[(m(!0),y(x,null,w(t(p),i=>(m(),A(t(D),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),n(t(R),null,{default:o(()=>[n(t(L),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(P),loading:t(d),"onUpdate:loading":s[4]||(s[4]=i=>k(d)?d.value=i:null),onLoad:H},{default:o(()=>[(m(!0),y(x,null,w(t(U),i=>(m(),A(t(D),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Ze as default};

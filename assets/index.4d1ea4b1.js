import{I as P}from"./index.c26bcc8d.js";import{a3 as j,_ as b,Q as L,n as y}from"./elevation.6f2b205f.js";import{d as M,r as u,b as h,y as x,x as C,e as g,o as _,c as T,a as A,i as F,p as V,n as O,G as U,X as z,l as N,j as R,k as X,m as Y,t as G,F as Q}from"./vendor.8243c41e.js";import{C as q}from"./index.953e9717.js";import{d as H}from"./index.77fe3760.js";import{a as J}from"./utils.43b02c52.js";const K={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const v=100,f=-50;let w;const W=M({name:"VarPullRefresh",components:{VarIcon:P},props:K,setup(e){const a=u(null),c=u(0),o=u(f),l=u("arrow-down"),n=u("default"),r=u(!1),t=h(()=>n.value!=="loading"&&n.value!=="success"&&!e.disabled),i=h(()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":n.value==="loading"})),m=h(()=>({transform:`translate3d(0px, ${o.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),E=h(()=>n.value==="success"),k=s=>{!t.value||(n.value="pulling",c.value=s.touches[0].clientY)},I=s=>{const d=L(w);if(d>0||!t.value)return;d===0&&o.value>f&&s.cancelable&&s.preventDefault();const S=(s.touches[0].clientY-c.value)/2+f;o.value=S>=v?v:S,l.value=o.value>=v*.2?"refresh":"arrow-down"},B=()=>{var s,d;!t.value||(r.value=!0,o.value>=v*.2?(n.value="loading",o.value=v*.3,(s=e["onUpdate:modelValue"])==null||s.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(n.value="loosing",l.value="arrow-down",o.value=f,setTimeout(()=>{r.value=!1},y(e.animationDuration))))},$=()=>{setTimeout(()=>{n.value="default",l.value="arrow-down",r.value=!1},y(e.animationDuration))};return x(()=>e.modelValue,s=>{s===!1&&(r.value=!0,n.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{o.value=f,$()},y(e.successDuration)))}),C(()=>{w=j(a.value)}),{freshNode:a,touchStart:k,touchMove:I,touchEnd:B,iconName:l,iconClass:i,controlStyle:m,isSuccess:E}}});function Z(e,a,c,o,l,n){const r=g("var-icon");return _(),T("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:a[0]||(a[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchmove:a[1]||(a[1]=(...t)=>e.touchMove&&e.touchMove(...t)),onTouchend:a[2]||(a[2]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:a[3]||(a[3]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[A("div",{class:V(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:O(e.controlStyle)},[F(r,{name:e.iconName,transition:200,class:V(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),U(e.$slots,"default")],544)}var p=b(W,[["render",Z]]);p.install=function(e){e.component(p.name,p)};const D=Array(10).fill("List Item"),ee=Array(10).fill("This is new List Item"),ae={name:"PullRefreshExample",components:{VarPullRefresh:p,VarCell:q},setup(){const e=u(!1),a=u(D),c=()=>{setTimeout(()=>{a.value=a.value[0]==="List Item"?ee:D,e.value=!1},2e3)},o=l=>{l.preventDefault()};return C(()=>{document.body.addEventListener("touchmove",o,{passive:!1})}),z(()=>{document.body.removeEventListener("touchmove",o)}),J(H),{refresh:c,isRefresh:e,data:a}}};function oe(e,a,c,o,l,n){const r=g("var-cell"),t=g("var-pull-refresh");return _(),N(t,{onRefresh:o.refresh,modelValue:o.isRefresh,"onUpdate:modelValue":a[0]||(a[0]=i=>o.isRefresh=i),"success-duration":"2000"},{default:R(()=>[(_(!0),T(Q,null,X(o.data,(i,m)=>(_(),N(r,{key:m,border:""},{default:R(()=>[Y(G(i+" "+(m+1)),1)]),_:2},1024))),128))]),_:1},8,["onRefresh","modelValue"])}var ce=b(ae,[["render",oe],["__scopeId","data-v-5ca1ba7a"]]);export{ce as default};

import{R as c}from"./index.c27786bc.js";import{p as t,L as b}from"./index.07a49f37.js";import{p as d,d as p,c as v,f}from"./components.964f072b.js";import{d as $,a as h,at as k,_ as B,p as C,ag as z,D as S,f as g,h as T,i as L,N as r,j as V,M as N,O as R,R as D}from"./vue-router.esm-bundler.53acc020.js";function P(e){return["default","primary","info","success","warning","danger"].includes(e)}function w(e){return["normal","mini","small","large"].includes(e)}const A={type:{type:String,default:"default",validator:P},size:{type:String,default:"normal",validator:w},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String]},loadingType:d(t,"type"),loadingSize:d(t,"size"),loadingColor:{...d(t,"color"),default:"currentColor"},onClick:p(),onTouchstart:p()},{n:j,classes:E}=v("button"),M=$({name:"VarButton",components:{VarLoading:b},directives:{Ripple:c},props:A,setup(e){const a=h(!1),i=o=>{e.autoLoading&&(a.value=!0,o=k(o)?o:[o],Promise.all(o).then(()=>{a.value=!1}).catch(()=>{a.value=!1}))};return{n:j,classes:E,pending:a,handleClick:o=>{const{loading:l,disabled:s,onClick:n}=e;!n||l||s||a.value||i(f(n,o))},handleTouchstart:o=>{const{loading:l,disabled:s,onTouchstart:n}=e;!n||l||s||a.value||i(f(n,o))}}}});const O=["disabled"];function q(e,a,i,m,y,o){const l=C("var-loading"),s=z("ripple");return S((g(),T("button",{class:r(e.classes(e.n(),e.n("$--box"),e.n(`--${e.size}`),[e.block,`${e.n("$--flex")} ${e.n("--block")}`,e.n("$--inline-flex")],[e.disabled,e.n("--disabled")],[e.text,`${e.n(`--text-${e.type}`)} ${e.n("--text")}`,`${e.n(`--${e.type}`)} ${e.n("$-elevation--2")}`],[e.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.outline,e.n("--outline")])),style:D({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:a[0]||(a[0]=(...n)=>e.handleClick&&e.handleClick(...n)),onTouchstart:a[1]||(a[1]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n))},[e.loading||e.pending?(g(),L(l,{key:0,class:r(e.n("loading")),"var-button-cover":"",color:e.loadingColor,type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","color","type","size","radius"])):V("",!0),N("div",{class:r(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[R(e.$slots,"default")],2)],46,O)),[[s,{disabled:e.disabled||!e.ripple}]])}const u=B(M,[["render",q]]);u.install=function(e){e.component(u.name,u)};export{u as B};

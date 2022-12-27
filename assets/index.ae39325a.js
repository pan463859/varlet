import{I as me}from"./index.8c5877ed.js";import{M as pe}from"./index.760ef82a.js";import{C as be}from"./index.ed9a1a41.js";import{F as he,u as ye}from"./provide.f71ec15b.js";import{d as Ce,a as f,b as T,w as O,aO as S,n as ge,at as Ve,_ as ke,p as B,f as u,h as m,M as t,N as n,O as D,q as P,S as U,R as V,F as we,ai as Fe,i as K,P as Me,Q as $,ah as Se,j as X}from"./vue-router.esm-bundler.53acc020.js";import{d as p,i as Be,f as d,c as De}from"./components.964f072b.js";import{u as $e}from"./index.98e480f1.js";import{t as Z}from"./elements.86ad7447.js";function Ee(e){return["left","right","center"].includes(e)}const Ne={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Ee},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:p(),onBlur:p(),onClick:p(),onClear:p(),onClose:p(),onChange:p(),"onUpdate:modelValue":p()},{n:W,classes:Ae}=De("select"),Te=Ce({name:"VarSelect",components:{VarIcon:me,VarMenu:pe,VarChip:be,VarFormDetails:he},props:Ne,setup(e){const i=f(null),c=f(!1),Y=T(()=>e.multiple),z=T(()=>e.focusColor),k=f(""),w=f([]),b=f("0px"),C=f(0),{bindForm:E,form:l}=ye(),{length:_,options:h,bindOptions:x}=$e(),{errorMessage:ee,validateWithTrigger:le,validate:ae,resetValidation:N}=Be(),se=f(null),oe=()=>{const{multiple:s,modelValue:a}=e;if(s){const o=a;w.value=o.map(I)}!s&&!S(a)&&(k.value=I(a)),!s&&S(a)&&(k.value="")},y=s=>{ge(()=>{const{validateTrigger:a,rules:o,modelValue:r}=e;le(a,s,o,r)})},F=({value:s,label:a})=>s.value!=null?s.value:a.value,I=s=>{var o;let a=h.find(({value:r})=>r.value===s);return a||(a=h.find(({label:r})=>r.value===s)),(o=a==null?void 0:a.label.value)!=null?o:""},ne=()=>{const{hint:s,modelValue:a}=e;if(!s&&!S(a))return W("--placeholder-hidden");if(s&&(!S(a)||c.value))return W("--placeholder-hint")},R=()=>i.value&&window.getComputedStyle(i.value).width||"0px",re=()=>{const{disabled:s,readonly:a,onFocus:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||(b.value=R(),C.value=Z(e.offsetY),c.value=!0,d(o),y("onFocus"))},ie=()=>{const{disabled:s,readonly:a,onBlur:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||(d(o),y("onBlur"))},de=s=>{const{disabled:a,readonly:o,multiple:r,onChange:g}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||o)return;const v=r?h.filter(({selected:M})=>M.value).map(F):F(s);d(e["onUpdate:modelValue"],v),d(g,v),y("onChange"),!r&&(c.value=!1)},ue=()=>{const{disabled:s,readonly:a,multiple:o,clearable:r,onClear:g}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||!r)return;const v=o?[]:void 0;d(e["onUpdate:modelValue"],v),d(g,v),y("onClear")},te=s=>{const{disabled:a,onClick:o}=e;(l==null?void 0:l.disabled.value)||a||(d(o,s),y("onClick"))},ce=s=>{const{disabled:a,readonly:o,modelValue:r,onClose:g}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||o)return;const v=r,M=h.find(({label:A})=>A.value===s),H=v.filter(A=>{var J;return A!==((J=M.value.value)!=null?J:M.label.value)});d(e["onUpdate:modelValue"],H),d(g,H),y("onClose")},j=()=>{const{multiple:s,modelValue:a}=e;if(s){const o=a;h.forEach(r=>r.sync(o.includes(F(r))))}else h.forEach(o=>o.sync(a===F(o)));oe()},ve=()=>{b.value=R(),C.value=Z(e.offsetY),c.value=!0},fe=()=>{c.value=!1},q=()=>ae(e.rules,e.modelValue),Q=()=>{d(e["onUpdate:modelValue"],e.multiple?[]:void 0),N()};O(()=>e.multiple,()=>{const{multiple:s,modelValue:a}=e;if(s&&!Ve(a))throw Error("The modelValue must be an array when multiple is true")}),O(()=>e.modelValue,j,{deep:!0}),O(()=>_.value,j);const G={wrapWidth:T(()=>b.value),multiple:Y,focusColor:z,onSelect:de,reset:Q,validate:q,resetValidation:N};return x(G),d(E,G),{wrapEl:i,offsetY:C,isFocus:c,errorMessage:ee,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,label:k,labels:w,menuEl:se,n:W,classes:Ae,computePlaceholderState:ne,handleFocus:re,handleBlur:ie,handleClear:ue,handleClick:te,handleClose:ce,reset:Q,validate:q,resetValidation:N,focus:ve,blur:fe}}});const Oe={key:0},Pe={key:1};function Ue(e,i,c,Y,z,k){const w=B("var-chip"),b=B("var-icon"),C=B("var-menu"),E=B("var-form-details");return u(),m("div",{class:n(e.classes(e.n(),e.n("$--box"),[e.formDisabled||e.disabled,e.n("--disabled")])),onClick:i[3]||(i[3]=(...l)=>e.handleClick&&e.handleClick(...l))},[t("div",{class:n(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:V({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[t("div",{class:n(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[D(e.$slots,"prepend-icon")],2),t("div",{class:n(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")])),ref:"wrapEl",onClick:i[2]||(i[2]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[P(C,{"var-select-cover":"",class:n(e.classes(e.n("menu"))),"offset-y":e.offsetY,disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled,"default-style":!1,show:e.isFocus,"onUpdate:show":i[1]||(i[1]=l=>e.isFocus=l),onClose:e.handleBlur},{menu:U(()=>[t("div",{ref:"menuEl",class:n(e.classes(e.n("scroller"),e.n("$-elevation--3")))},[D(e.$slots,"default")],2)]),default:U(()=>[t("div",{class:n(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:V({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(u(),m("div",Oe,[e.chip?(u(),m("div",{key:0,class:n(e.n("chips"))},[(u(!0),m(we,null,Fe(e.labels,l=>(u(),K(w,{class:n(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:l,onClick:i[0]||(i[0]=Se(()=>{},["stop"])),onClose:()=>e.handleClose(l)},{default:U(()=>[Me($(l),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(u(),m("div",{key:1,class:n(e.n("values"))},$(e.labels.join(e.separator)),3))])):(u(),m("span",Pe,$(e.label),1)),D(e.$slots,"arrow-icon",{focus:e.isFocus},()=>[P(b,{class:n(e.classes(e.n("arrow"),[e.isFocus,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])])],6),t("label",{class:n(e.classes(e.n("placeholder"),e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:V({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},$(e.placeholder),7)]),_:3},8,["class","offset-y","disabled","show","onClose"])],2),t("div",{class:n(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[D(e.$slots,"append-icon",{},()=>[e.clearable?(u(),K(b,{key:0,class:n(e.n("clear-icon")),name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):X("",!0)])],2)],6),e.line?(u(),m("div",{key:0,class:n(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:V({background:e.errorMessage?void 0:e.blurColor})},[t("div",{class:n(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:V({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):X("",!0),P(E,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const L=ke(Te,[["render",Ue]]);L.install=function(e){e.component(L.name,L)};export{L as S};
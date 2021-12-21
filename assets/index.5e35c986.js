import{F as M,u as T}from"./provide.2e9c45db.js";import{a as z}from"./components.d08fc2fc.js";import{u as S}from"./index.f0dec567.js";import{_ as B,S as x}from"./elevation.6f2b205f.js";import{d as E,b as s,y as b,e as N,o as w,c as D,a as W,G as q,p as P,i as H,z as I}from"./vendor.8243c41e.js";function J(e){return["horizontal","vertical"].includes(e)}const K={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:J},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const L=E({name:"VarCheckboxGroup",components:{VarFormDetails:M},props:K,setup(e){const d=s(()=>e.max),u=s(()=>e.modelValue.length),{length:m,checkboxes:l,bindCheckboxes:h}=S(),{bindForm:c}=T(),{errorMessage:v,validateWithTrigger:C,validate:y,resetValidation:r}=z(),G=s(()=>v.value),U=a=>{I(()=>{const{validateTrigger:t,rules:o,modelValue:n}=e;C(t,a,o,n)})},f=a=>{var t,o;(t=e["onUpdate:modelValue"])==null||t.call(e,a),(o=e.onChange)==null||o.call(e,a),U("onChange")},$=a=>{const{modelValue:t}=e;t.includes(a)||f([...t,a])},j=a=>{const{modelValue:t}=e;!t.includes(a)||f(t.filter(o=>o!==a))},g=()=>l.forEach(({sync:a})=>a(e.modelValue)),A=()=>{var o;const a=l.map(({checkedValue:n})=>n.value),t=x(a);return(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},F=()=>{var o;const a=l.filter(({checked:n})=>!n.value).map(({checkedValue:n})=>n.value),t=x(a);return(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},k=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,[]),r()},V=()=>y(e.rules,e.modelValue);b(()=>e.modelValue,g,{deep:!0}),b(()=>m.value,g);const _={max:d,checkedCount:u,onChecked:$,onUnchecked:j,validate:V,resetValidation:r,reset:k,errorMessage:G};return h(_),c==null||c(_),{errorMessage:v,checkAll:A,inverseAll:F,reset:k,validate:V,resetValidation:r}}}),O={class:"var-checkbox-group__wrap"};function Q(e,d,u,m,l,h){const c=N("var-form-details");return w(),D("div",O,[W("div",{class:P(["var-checkbox-group",[`var-checkbox-group--${e.direction}`]])},[q(e.$slots,"default")],2),H(c,{"error-message":e.errorMessage},null,8,["error-message"])])}var i=B(L,[["render",Q]]);i.install=function(e){e.component(i.name,i)};export{i as C};

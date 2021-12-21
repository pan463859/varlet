import{M as X}from"./index.0e231cdd.js";import{R as Y}from"./index.b947dc5d.js";import{I as Z}from"./index.c26bcc8d.js";import{C as _}from"./index.953e9717.js";import{I as x}from"./index.91cab0b8.js";import{d as ee,r as g,b as N,y as D,e as C,f as ae,o as m,c as b,w as S,a as z,G as J,p as k,i as V,U as K,t as v,F as L,k as O,m as E,j as w,l as ie,h as H}from"./vendor.8243c41e.js";import{n as p,_ as le,o as U}from"./elevation.6f2b205f.js";import{p as ne}from"./en-US.fd4fd1d9.js";const se={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function}};const te=ee({name:"VarPagination",components:{VarMenu:X,VarIcon:Z,VarCell:_,VarInput:x},directives:{Ripple:Y},props:se,setup(e){const l=g(!1),B=g(""),y=g("1"),h=g(!1),P=g(!1),n=g(p(e.current)||1),u=g(p(e.size)||10),$=g([]),M=N(()=>Math.ceil(e.maxPagerCount/2)),o=N(()=>Math.ceil(p(e.total)/p(u.value))),i=N(()=>{const a=u.value*(n.value-1)+1,s=Math.min(u.value*n.value,p(e.total));return[a,s]}),f=N(()=>e.showTotal?e.showTotal(p(e.total),i.value):""),j=(a,s)=>U(a)?!1:s===1?h.value:P.value,Q=(a,s)=>U(a)?"basic":s===1?"head":"tail",R=(a,s)=>{a===n.value||e.disabled||(U(a)?n.value=a:a==="prev"?n.value>1&&(n.value-=1):a==="next"?n.value<o.value&&(n.value+=1):a==="..."&&(s===1?n.value=Math.max(n.value-e.maxPagerCount,1):n.value=Math.min(n.value+e.maxPagerCount,o.value)))},A=()=>{e.disabled||(l.value=!0)},G=a=>{u.value=a,l.value=!1},q=a=>/^[1-9][0-9]*$/.test(a),W=(a,s,I)=>{if(I.target.blur(),q(s)){let c=p(s);c>o.value&&(c=o.value,y.value=`${c}`),c!==n.value&&(n.value=c)}a==="quick"&&(B.value=""),a==="simple"&&!q(s)&&(y.value=`${n.value}`)};return D([()=>e.current,()=>e.size],([a,s])=>{n.value=p(a)||1,u.value=p(s||10)}),D([n,o],([a,s],[I,c])=>{var F;if(a>s){n.value=s;return}let r=[];const{maxPagerCount:d}=e,T=s-(d-M.value)-1;if(y.value=`${a}`,s-2>d){if(I===void 0||s!==c)for(let t=2;t<d+2;t++)r.push(t);if(a<=d&&a<T){r=[];for(let t=1;t<d+1;t++)r.push(t+1);h.value=!0,P.value=!1}if(a>d&&a<T){r=[];for(let t=1;t<d+1;t++)r.push(a+t-M.value);h.value=a===2&&d===1,P.value=!1}if(a>=T){r=[];for(let t=1;t<d+1;t++)r.push(s-(d-t)-1);h.value=!1,P.value=!0}r=[1,"...",...r,"...",s]}else for(let t=1;t<=s;t++)r.push(t);$.value=r,I!==void 0&&((F=e.onChange)==null||F.call(e,a,u.value))},{immediate:!0}),{pack:ne,current:n,menuVisible:l,size:u,pageCount:o,pageList:$,inputValue:B,simpleValue:y,totalText:f,getMode:Q,isHideEllipsis:j,clickItem:R,showMenu:A,clickSize:G,setPage:W,toNumber:p}}}),oe={class:"var-pagination"},re=["item-mode","onClick"],ue={key:4,class:"var-pagination__total"};function de(e,l,B,y,h,P){const n=C("var-icon"),u=C("var-input"),$=C("var-cell"),M=C("var-menu"),o=ae("ripple");return m(),b("ul",oe,[S(z("li",{class:k(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[0]||(l[0]=i=>e.clickItem("prev"))},[J(e.$slots,"prev",{},()=>[V(n,{name:"chevron-left"})])],2),[[o,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),b("li",{key:0,class:k(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[V(u,{modelValue:e.simpleValue,"onUpdate:modelValue":l[1]||(l[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[2]||(l[2]=i=>e.setPage("simple",e.simpleValue,i)),onKeydown:l[3]||(l[3]=K(i=>e.setPage("simple",e.simpleValue,i),["enter"]))},null,8,["modelValue","disabled"]),z("span",null,"/ "+v(e.pageCount),1)],2)):(m(!0),b(L,{key:1},O(e.pageList,(i,f)=>S((m(),b("li",{key:e.toNumber(i)+f,"item-mode":e.getMode(i,f),class:k(["var-pagination__item var-elevation--2",{"var-pagination__item-active":i===e.current&&!e.disabled,"var-pagination__item-hide":e.isHideEllipsis(i,f),"var-pagination__item-disabled":e.disabled,"var-pagination__item-disabled-active":i===e.current&&e.disabled}]),onClick:j=>e.clickItem(i,f)},[E(v(i),1)],10,re)),[[o,{disabled:e.disabled}]])),128)),S(z("li",{class:k(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[4]||(l[4]=i=>e.clickItem("next"))},[J(e.$slots,"next",{},()=>[V(n,{name:"chevron-right"})])],2),[[o,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),b("li",{key:2,class:k(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[V(M,{show:e.menuVisible,"onUpdate:show":l[6]||(l[6]=i=>e.menuVisible=i),"offset-x":-4},{menu:w(()=>[(m(!0),b(L,null,O(e.sizeOption,(i,f)=>S((m(),ie($,{class:k(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:f,onClick:j=>e.clickSize(i)},{default:w(()=>[E(v(i)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[o]])),128))]),default:w(()=>[z("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:l[5]||(l[5]=(...i)=>e.showMenu&&e.showMenu(...i))},[z("span",null,v(e.size)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1),V(n,{class:"var-pagination__size-open-icon","var-pagination-cover":"",name:"menu-down"})])]),_:1},8,["show"])],2)):H("v-if",!0),e.showQuickJumper&&!e.simple?(m(),b("li",{key:3,class:k(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[E(v(e.pack.paginationJump)+" ",1),V(u,{modelValue:e.inputValue,"onUpdate:modelValue":l[7]||(l[7]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[8]||(l[8]=i=>e.setPage("quick",e.inputValue,i)),onKeydown:l[9]||(l[9]=K(i=>e.setPage("quick",e.inputValue,i),["enter"]))},null,8,["modelValue","disabled"])],2)):H("v-if",!0),e.totalText?(m(),b("li",ue,v(e.totalText),1)):H("v-if",!0)])}var Ve=le(te,[["render",de]]);export{Ve as P};

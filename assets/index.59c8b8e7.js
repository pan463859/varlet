import{I as c}from"./index.8c5877ed.js";import{R as C}from"./index.c27786bc.js";import{S as _}from"./index.145529ed.js";import{_ as S,r as F,a as k,o as z,ac as B,ay as I,f as d,h as f,q as o,S as t,al as e,M as g,F as x,ai as E,P as l,Q as a,az as s,D as N,R as A}from"./vue-router.esm-bundler.53acc020.js";import{C as L}from"./clipboard.cdcaa811.js";import{d as D}from"./index.e436054e.js";import{u as U,a as b,_ as $,b as T,c as M}from"./index.69d6b515.js";import"./components.964f072b.js";import"./elements.86ad7447.js";import"./shared.36d94af5.js";import"./index.73b62ccf.js";/* empty css               */import"./index.07a49f37.js";import"./zIndex.2875f9fe.js";import"./lock.470bbe1d.js";const R=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json"],V={iconSize:"\u56FE\u6807\u5C3A\u5BF8",iconColor:"\u56FE\u6807\u989C\u8272",useImage:"\u4F7F\u7528\u56FE\u7247",events:"\u6CE8\u518C\u4E8B\u4EF6",iconAnimation:"\u56FE\u6807\u5207\u6362\u52A8\u753B (\u70B9\u51FB\u5207\u6362)",toggle:"\u5207\u6362",iconList:"\u56FE\u6807\u5217\u8868 (\u70B9\u51FB\u590D\u5236)",copySuccess:"\u590D\u5236\u6210\u529F",clickSuccess:"\u70B9\u51FB\u6210\u529F"},j={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"},{add:v,use:q,pack:n,packs:re,merge:ue}=U(),P=u=>{M(u),q(u)};b("zh-CN",$);b("en-US",T);v("zh-CN",V);v("en-US",j);const Q={class:"icon-example__icons"},G=["data-clipboard-text"],H={class:"icon-example__icon-name"},J={setup(u){const y=F(R),m=k("information"),h=k("#fff"),w=()=>{m.value=m.value==="information"?"checkbox-marked-circle":"information"};return z(()=>{new L(".icon-example__icon",{text:i=>`<var-icon name="${i.getAttribute("data-clipboard-text")}" />`}).on("success",i=>{_.success(`${i.text}${n.value.copySuccess}!`)})}),B(P),I(D,p=>{h.value=p==="darkTheme"?"#303030":"#fff"}),(p,i)=>(d(),f(x,null,[o(e(s),null,{default:t(()=>[l(a(e(n).iconSize),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(s),null,{default:t(()=>[l(a(e(n).iconColor),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",size:26}),o(e(s),null,{default:t(()=>[l(a(e(n).useImage),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(e(s),null,{default:t(()=>[l(a(e(n).events),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",onClick:i[0]||(i[0]=()=>e(_).success(e(n).clickSuccess))}),o(e(s),null,{default:t(()=>[l(a(e(n).iconAnimation),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",color:"#2979ff",size:30,transition:300,name:m.value,onClick:w},null,8,["name"]),o(e(s),null,{default:t(()=>[l(a(e(n).iconList),1)]),_:1}),g("div",Q,[(d(!0),f(x,null,E(e(y),r=>N((d(),f("div",{class:"icon-example__icon var-elevation--2",style:A({background:h.value}),"data-clipboard-text":r,key:r},[o(e(c),{name:r},null,8,["name"]),g("div",H,a(r),1)],12,G)),[[e(C)]])),128))])],64))}},me=S(J,[["__scopeId","data-v-8a4ef1cf"]]);export{me as default};

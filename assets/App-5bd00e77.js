var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,s=(e,a)=>{for(var o in a||(a={}))l.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))n.call(a,o)&&r(e,o,a[o]);return e},i=(e,t)=>a(e,o(t)),c=(e,a)=>{var o={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&t)for(var r of t(e))a.indexOf(r)<0&&n.call(e,r)&&(o[r]=e[r]);return o};import{n as d,ah as _,R as m,ad as p,l as u,c as f,q as h,a7 as g,Z as v,ai as b,aj as C,ak as R,al as x,ab as y,am as S,an as w,ao as k,a8 as N,a0 as P,v as O,S as I,_ as E,a as D,u as j,ap as W,aq as q,o as M,ag as Y,ar as L,G as T,a9 as A,as as B,at as F,au as V,av as $,aw as z,b as K,a3 as G}from"./index-716dd2fc.js";import{A as H}from"./AppRoot-74b19fd6.js";import{P as X}from"./Panel-eb4ddde2.js";import{p as Z,y as J,h as Q,g as U,G as ee,ab as ae,ac as oe,ad as te,ae as le,af as ne,ag as re,ah as se,ai as ie,q as ce,M as de,aj as _e,ak as me,al as pe,am as ue,an as fe}from"./@vkontakte/icons-d137ec12.js";import{R as he}from"./Removable-220224ab.js";import"./IconButton-634e1b68.js";const ge="_PopoutRoot_1dpsr_1",ve="_PopoutRoot__popout_1dpsr_7",be="_PopoutRoot__modal_1dpsr_16",Ce=e=>J("div",s({className:ve},e)),Re=e=>J("div",s({className:be},e)),xe=e=>{var a=e,{popout:o,modal:t,children:l}=a,n=c(a,["popout","modal","children"]);const{document:r}=d();return Z((()=>{o&&_(r)}),[r,o]),J(m,i(s({},n),{baseClassName:ge}),l,J(p,null,!!o&&J(Ce,null,o),!!t&&J(Re,null,t)))},ye="_SplitLayout_v2fan_1",Se="_SplitLayout__inner_v2fan_7",we="_SplitLayout__inner--header_v2fan_17",ke="_SplitLayout--ios_v2fan_25",Ne=e=>{var a=e,{popout:o,modal:t,header:l,children:n,getRootRef:r,getRef:d,className:_}=a,m=c(a,["popout","modal","header","children","getRootRef","getRef","className"]);const p=u();return J(xe,{className:f(ye,p===h.IOS&&ke),popout:o,modal:t,getRootRef:r},l,J("div",i(s({},m),{ref:d,className:f(Se,!!l&&we,_)}),n))},Pe="_SplitCol_1qmo4_1",Oe="_SplitCol--spaced_1qmo4_9",Ie="_SplitCol--viewWidth-smallTabletPlus_1qmo4_13",Ee="_SplitCol--spaced-none_1qmo4_13",De="_SplitCol--spaced-auto_1qmo4_13",je="_SplitCol--viewWidth-tabletMinus_1qmo4_23",We="_SplitCol--stretched-on-mobile_1qmo4_23",qe="_SplitCol--fixed_1qmo4_39",Me="_SplitCol__fixedInner_1qmo4_46",Ye={none:f("_SplitCol--viewWidth-none_1qmo4_18","vkuiInternalSplitCol--viewWidth-none"),tabletMinus:je,smallTabletPlus:Ie,tabletPlus:"vkuiInternalSplitCol--viewWidth-tabletPlus"};const Le=e=>{const a=e,{children:o,width:t,maxWidth:l,minWidth:n,spaced:r,animate:d,fixed:_,style:p,autoSpaced:u,stretchedOnMobile:h,getRootRef:k}=a,N=c(a,["children","width","maxWidth","minWidth","spaced","animate","fixed","style","autoSpaced","stretchedOnMobile","getRootRef"]),P=g(k),{viewWidth:O}=v(),I=function(e){const{viewWidth:a}=v(),[o,t]=Q(Boolean(e)),l=x();return Z((()=>{if(void 0!==e)return void t(e);if(void 0!==a)return void t(a<y.TABLET);const o=()=>t(!l.smallTabletPlus.matches);return o(),S(l.smallTabletPlus,o),()=>{w(l.smallTabletPlus,o)}}),[e,a,l]),o}(d),E=b({colRef:P,animate:I});return J(m,i(s({},N),{style:i(s({},p),{width:t,maxWidth:l,minWidth:n}),getRootRef:P,baseClassName:f(Pe,R(Ye,O),r&&f(Oe,"vkuiInternalSplitCol--spaced"),void 0===r&&f(Ee,"vkuiInternalSplitCol--spaced-none"),u&&f(De,"vkuiInternalSplitCol--spaced-auto"),_&&qe,h&&We)}),J(C.Provider,{value:E},_?J("div",{className:Me},o):o))},Te=({IconCompact:e,IconRegular:a})=>{const{sizeY:o}=k();return J(U,null,o.compact&&J(e,{className:o.compact.className}),o.regular&&J(a,{className:o.regular.className}))},Ae=ee({toggleDrag:N}),Be="_CellCheckbox_fjdxx_1",Fe="_CellCheckbox__icon_fjdxx_7",Ve="_CellCheckbox__icon--on_fjdxx_12",$e="_CellCheckbox__input_fjdxx_16",ze="_CellCheckbox__icon--off_fjdxx_16",Ke=()=>J(Te,{IconCompact:te,IconRegular:le}),Ge=()=>J(Te,{IconCompact:ne,IconRegular:re});const He=e=>{var a=e,{getRootRef:o,getRef:t,className:l,style:n,type:r="auto"}=a,d=c(a,["getRootRef","getRef","className","style","type"]);const _=function(e){const a=u();return"auto"!==e?e:a===h.IOS||a===h.VKCOM?"circle":"square"}(r),m="circle"===_?ae:Ge,p="circle"===_?oe:Ke;return J("span",{className:f(Be,l),style:n,ref:o},J(P,i(s({},d),{Component:"input",type:"checkbox",className:$e,getRootRef:t})),J("span",{className:f(Fe,ze),"aria-hidden":!0},J(m,null)),J("span",{className:f(Fe,Ve),"aria-hidden":!0},J(p,null)))},Xe="_CellDragger_bme97_1",Ze=e=>{var a=e,{onDragStart:o,onDragMove:t,onDragEnd:l,onClick:n,className:r}=a,i=c(a,["onDragStart","onDragMove","onDragEnd","onClick","className"]);const d=u();return J(O,s({className:f(Xe,r),onStart:o,onMoveY:t,onEnd:l,onClick:e=>{e.preventDefault(),n&&n(e)}},i),d===h.IOS?J(se,null):J(ie,null))},Je="_Cell_l5x8w_1",Qe="_Cell--dragging_l5x8w_10",Ue="_Cell--selectable_l5x8w_21",ea="_Cell--disabled_l5x8w_21",aa="_Cell__checkbox_l5x8w_25",oa="_Cell__dragger_l5x8w_26",ta="_Cell__content_l5x8w_32",la="_Cell--removable_l5x8w_37",na="_Cell--ios_l5x8w_59",ra=e=>{var a=e,{mode:o,onRemove:t=N,removePlaceholder:l="Удалить",onDragFinish:n,before:r,after:d,disabled:_,draggable:m,Component:p,onChange:v,name:b,value:C,checked:R,defaultChecked:x,getRootRef:y,draggerLabel:S="Перенести ячейку",className:w,style:k}=a,P=c(a,["mode","onRemove","removePlaceholder","onDragFinish","before","after","disabled","draggable","Component","onChange","name","value","checked","defaultChecked","getRootRef","draggerLabel","className","style"]);const O="selectable"===o,E="removable"===o,D=O?"label":p,j=u(),W=g(y),q=(({rootElRef:e,onDragFinish:a})=>{const[o,t]=Q(!1),[l,n]=Q([]),[r,s]=Q(0),[i,c]=Q(0),[d,_]=Q(0),[m,p]=Q(void 0);return{onDragStart:a=>{var o;const l=e.current;if(!l)return;a.originalEvent.stopPropagation(),a.originalEvent.preventDefault(),t(!0);let r=[];(null==(o=l.parentElement)?void 0:o.childNodes)&&(r=Array.from(l.parentElement.children));const i=r.indexOf(l);s(i),c(i),n(r),_(0)},onDragMove:a=>{a.originalEvent.stopPropagation(),a.originalEvent.preventDefault();const o=e.current;if(o){o.style.transform=`translateY(${a.shiftY}px)`;const e=o.getBoundingClientRect();p(d-a.shiftY<0?"down":"up"),_(a.shiftY),c(r),l.forEach(((a,o)=>{const t=a.getBoundingClientRect(),l=t.height/2,n=e.bottom>t.top+l,s=e.top<t.bottom-l;r<o?(n&&("down"===m&&(a.style.transform="translateY(-100%)"),c((e=>e+1))),s&&"up"===m&&(a.style.transform="translateY(0)")):r>o&&(s&&("up"===m&&(a.style.transform="translateY(100%)"),c((e=>e-1))),n&&"down"===m&&(a.style.transform="translateY(0)"))}))}},onDragEnd:e=>{e.originalEvent.stopPropagation(),e.originalEvent.preventDefault();const[o,d]=[r,i];l.forEach((e=>{e.style.transform=""})),n([]),c(0),s(0),p(void 0),_(0),t(!1),a&&a({from:o,to:d})},dragging:o}})({rootElRef:W,onDragFinish:n}),{dragging:M}=q,Y=c(q,["dragging"]),{toggleDrag:L}=ce(Ae);let T,A;if(Z((()=>{if(M)return L(!0),()=>L(!1)}),[M,L]),m&&(T=J(Ze,s({className:oa,"aria-label":S},Y))),O){A=J(He,s({className:aa},{name:b,value:C,onChange:v,defaultChecked:x,checked:R,disabled:_}))}const B=m&&!O||E&&!P.onClick||_,F=!B&&!M,V=f(Je,j===h.IOS&&na,M&&Qe,E&&la,"label"===D&&Ue,_&&ea),$=i(s({hasActive:F,hasHover:F&&!E},P),{className:ta,disabled:B,Component:D,before:J(U,null,m&&j!==h.IOS&&T,O&&A,r),after:J(U,null,m&&j===h.IOS&&T,d)});return E?J(he,{className:f(V,w),style:k,getRootRef:W,removePlaceholder:l,onRemove:e=>t(e,W.current)},j===h.IOS?({isRemoving:e})=>J(I,i(s({},$),{disabled:$.disabled||e})):J(I,$)):J("div",{className:f(V,w),style:k,ref:W},J(I,$))};ra.Checkbox=He;const sa=de((()=>E((()=>import("./index-716dd2fc.js").then((e=>e.aX))),["assets/index-716dd2fc.js","assets/@vkontakte/icons-d137ec12.js","assets/index-349a8e69.css"]))),ia=de((()=>E((()=>import("./Epic-d67b4ff6.js")),["assets/Epic-d67b4ff6.js","assets/@vkontakte/icons-d137ec12.js","assets/index-716dd2fc.js","assets/index-349a8e69.css","assets/View-23bfed7f.js","assets/Panel-eb4ddde2.js","assets/Panel-22b68c82.css","assets/View-53ffbc3d.css","assets/Epic-baec5caf.css"]))),ca=()=>{const[e,a]=Q(!1),o=D(),{view:t,panel:l}=j(),{viewWidth:n}=k(),r=u(),s=W(),i=q()||void 0,c=r===h.VKCOM,d=localStorage.getItem("cookie");Z((()=>{d?d&&l===L&&(o.replace(`/${A}`),a(!1)):(o.replace("/"),a(!1))}),[t,window.location]);const _=async e=>{if(d)try{return void await o.push(`/${e}`)}catch(e){}await o.replace("/")},m=M(sa,{});return M(H,{safeAreaInsets:i,children:M(Ne,{popout:s,modal:m,header:!c&&M(Y,{separator:!1}),style:{justifyContent:"center"},children:[n.tabletPlus&&l!==L&&M(Le,{className:n.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:M(X,{children:[!c&&M(Y,{}),M(T,{children:[M(ra,{onClick:()=>_(A),hovered:l===A,before:M(_e,{}),children:"Главная"}),M(ra,{onClick:()=>_(B),hovered:l===B,before:M(me,{}),children:"Успеваемость"}),M(ra,{onClick:()=>_(F),hovered:l===F,before:M(pe,{}),children:"Аттестация"}),M(ra,{onClick:()=>_(V),hovered:l===V,before:M(ue,{}),children:"Объявления"}),M(ra,{onClick:()=>_($),hovered:l===$,before:M(pe,{}),children:"Помощь"}),M(ra,{onClick:()=>_(z),hovered:l===z,before:M(fe,{}),children:"Настройки"})]})]})}),M(K,{id:"Epic",children:[e&&M(G,{size:"large"}),M(Le,{width:"100%",maxWidth:"700px",stretchedOnMobile:!0,autoSpaced:!0,children:M(ia,{onStoryChange:_})})]})]})})};export{ca as default};
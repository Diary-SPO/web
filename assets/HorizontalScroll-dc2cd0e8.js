var r=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,o,e)=>o in t?r(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,a=(r,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(r,o,t[o]);if(e)for(var o of e(t))l.call(t,o)&&i(r,o,t[o]);return r},c=(r,t)=>{var o={};for(var i in r)n.call(r,i)&&t.indexOf(i)<0&&(o[i]=r[i]);if(null!=r&&e)for(var i of e(r))t.indexOf(i)<0&&l.call(r,i)&&(o[i]=r[i]);return o};import{y as s,a3 as d,t as u,b as f,h as _,T as h,p as m}from"./@vkontakte/icons-d137ec12.js";import{c as w,R as S,n as g,s as v,a7 as b,aG as p,aH as y,a8 as A}from"./index-716dd2fc.js";const z="_ScrollArrow_adbtg_1",O="_ScrollArrow__icon_adbtg_28",M="_ScrollArrow__defaultIcon_adbtg_70",H={m:"_ScrollArrow--size-m_adbtg_38",l:"_ScrollArrow--size-l_adbtg_44"},W={up:"_ScrollArrow--direction-up_adbtg_22",right:"_ScrollArrow--direction-right_adbtg_17",down:"_ScrollArrow--direction-down_adbtg_23",left:"_ScrollArrow--direction-left_adbtg_16"},D=({size:r})=>{let t=d;return"m"===r&&(t=u),s(t,{className:M})},E=r=>{var t=r,{size:o="l",offsetY:e,direction:n,children:l=s(D,{size:o})}=t,i=c(t,["size","offsetY","direction","children"]);return s(S,a({Component:"button",type:"button",baseClassName:w(z,H[o],W[n])},i),s("span",{className:O,style:e?{top:e}:void 0},l))};const j="_HorizontalScroll_14yio_1",C="_HorizontalScroll__in_14yio_12",N="_HorizontalScroll__in-wrapper_14yio_27",P="_HorizontalScroll__arrow_14yio_31",x="_HorizontalScroll--withConstArrows_14yio_42",Y="_HorizontalScroll__arrowLeft_14yio_48",L="_HorizontalScroll__arrowRight_14yio_52";function R(){return performance&&performance.now?performance.now():Date.now()}function T(r){return r>0?Math.ceil(r):Math.floor(r)}const k=r=>T(r.scrollLeft),I=250;function B({scrollElement:r,getScrollPosition:t,animationQueue:o,onScrollToEndBorder:e,onScrollEnd:n,onScrollStart:l,initialScrollWidth:i,scrollAnimationDuration:a=I,textDirection:c}){if(!r||!t)return;const s=("ltr"===c?1:-1)*(i-r.offsetWidth);let d=k(r),u=t(d);l(),d*u<0&&(u=0),Math.abs(u)>=Math.abs(s)&&(e(),u=s);const f=R();!function t(){if(!r)return void n();const e=R(),l=Math.min((e-f)/a,1),i=(s=l,.5*(1-Math.cos(Math.PI*s)));var s;const _=d+(u-d)*i;r.scrollLeft=T(_);const h="ltr"===c?Math.max(0,u):Math.min(0,u);k(r)===h||1===l?(n(),o.shift(),o.length>0&&o[0]()):requestAnimationFrame(t)}()}const Q=r=>{var e=r,{children:n,getScrollToLeft:l,getScrollToRight:i,showArrows:d=!0,arrowSize:u="l",arrowOffsetY:z,scrollAnimationDuration:O=I,getRef:M,scrollOnAnyWheel:H=!1}=e,W=c(e,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","scrollOnAnyWheel"]);const[D,R]=_(!1),[T,Q]=_(!1),[q,F="ltr"]=function(){const r=f(null),[t,o]=_(void 0),[e,n]=_(void 0),{window:l}=g();return v((()=>{if(!l||!r.current)return;const t=l.getComputedStyle(r.current);o(t.direction),n(t.writingMode)}),[l]),[r,t,e]}(),G="ltr"===F?R:Q,X="ltr"===F?Q:R,J=f(!1),K=b(M,q),U=f([]),V=p(),Z=h((r=>{const t=K.current;U.current.push((()=>{var o;return B({scrollElement:t,getScrollPosition:r,animationQueue:U.current,onScrollToEndBorder:()=>X(!1),onScrollEnd:()=>J.current=!1,onScrollStart:()=>J.current=!0,initialScrollWidth:(null==(o=null==t?void 0:t.firstElementChild)?void 0:o.scrollWidth)||0,scrollAnimationDuration:O,textDirection:F})})),1===U.current.length&&U.current[0]()}),[K,O,F,X]),$=h((()=>{Z(null!=l?l:r=>r-K.current.offsetWidth)}),[l,Z,K]),rr=h((()=>{Z(null!=i?i:r=>r+K.current.offsetWidth)}),[i,Z,K]),tr=h((()=>{if(d&&V&&K.current&&!J.current){const r=K.current;G(0!==r.scrollLeft),X(Math.abs(k(r))+r.offsetWidth<r.scrollWidth)}}),[d,V,K,G,X]),or=y("scroll",tr);m((function(){return K.current?(or.add(K.current),or.remove):A}),[or,K]),m(tr,[tr,n]);const er=h((r=>{K.current.scrollBy({left:r.deltaX+r.deltaY,behavior:"auto"}),r.preventDefault()}),[K]),nr=y("wheel",er);return m((function(){return K.current&&H?(nr.add(K.current),nr.remove):A}),[nr,K,H]),s(S,(lr=a({},W),ir={baseClassName:w(j,"vkuiInternalHorizontalScroll","always"===d&&x),onMouseEnter:tr},t(lr,o(ir))),d&&(V||void 0===V)&&D&&s(E,{"data-testid":void 0,size:u,offsetY:z,direction:"left","aria-hidden":!0,className:w(P,Y),onClick:$}),d&&(V||void 0===V)&&T&&s(E,{"data-testid":void 0,size:u,offsetY:z,direction:"right","aria-hidden":!0,className:w(P,L),onClick:rr}),s("div",{className:C,ref:K},s("div",{className:N},n)));var lr,ir};export{Q as H};

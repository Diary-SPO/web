import{y as r,a5 as t,v as o,b as n,h as e,T as l,p as i}from"./@vkontakte/icons-ec9bb119.js";import{c as a,R as c,q as s,v as d,a9 as _,aJ as u,aK as f,aa as h}from"./index-12fcb1ba.js";const m="_ScrollArrow_adbtg_1",S="_ScrollArrow__icon_adbtg_28",w="_ScrollArrow__defaultIcon_adbtg_70",g={m:"_ScrollArrow--size-m_adbtg_38",l:"_ScrollArrow--size-l_adbtg_44"},v={up:"_ScrollArrow--direction-up_adbtg_22",right:"_ScrollArrow--direction-right_adbtg_17",down:"_ScrollArrow--direction-down_adbtg_23",left:"_ScrollArrow--direction-left_adbtg_16"},b=({size:n})=>{let e=t;return"m"===n&&(e=o),r(e,{className:w})},p=({size:t="l",offsetY:o,direction:n,children:e=r(b,{size:t}),...l})=>r(c,{Component:"button",type:"button",baseClassName:a(m,g[t],v[n]),...l},r("span",{className:S,style:o?{top:o}:void 0},e));const z="_HorizontalScroll_14yio_1",A="_HorizontalScroll__in_14yio_12",y="_HorizontalScroll__in-wrapper_14yio_27",M="_HorizontalScroll__arrow_14yio_31",H="_HorizontalScroll--withConstArrows_14yio_42",W="_HorizontalScroll__arrowLeft_14yio_48",C="_HorizontalScroll__arrowRight_14yio_52";function E(){return performance&&performance.now?performance.now():Date.now()}function N(r){return r>0?Math.ceil(r):Math.floor(r)}const D=r=>N(r.scrollLeft);function k({scrollElement:r,getScrollPosition:t,animationQueue:o,onScrollToEndBorder:n,onScrollEnd:e,onScrollStart:l,initialScrollWidth:i,scrollAnimationDuration:a=250,textDirection:c}){if(!r||!t)return;const s=("ltr"===c?1:-1)*(i-r.offsetWidth);let d=D(r),_=t(d);l(),d*_<0&&(_=0),Math.abs(_)>=Math.abs(s)&&(n(),_=s);const u=E();!function t(){if(!r)return void e();const n=E(),l=Math.min((n-u)/a,1),i=(s=l,.5*(1-Math.cos(Math.PI*s)));var s;const f=d+(_-d)*i;r.scrollLeft=N(f);const h="ltr"===c?Math.max(0,_):Math.min(0,_);D(r)===h||1===l?(e(),o.shift(),o.length>0&&o[0]()):requestAnimationFrame(t)}()}const x=({children:t,getScrollToLeft:o,getScrollToRight:m,showArrows:S=!0,arrowSize:w="l",arrowOffsetY:g,scrollAnimationDuration:v=250,getRef:b,scrollOnAnyWheel:E=!1,...N})=>{const[x,L]=e(!1),[Y,R]=e(!1),[T,B="ltr"]=function(){const r=n(null),[t,o]=e(void 0),[l,i]=e(void 0),{window:a}=s();return d((()=>{if(!a||!r.current)return;const t=a.getComputedStyle(r.current);o(t.direction),i(t.writingMode)}),[a]),[r,t,l]}(),I="ltr"===B?L:R,P="ltr"===B?R:L,j=n(!1),q=_(b,T),O=n([]),Q=u(),F=l((r=>{const t=q.current;O.current.push((()=>k({scrollElement:t,getScrollPosition:r,animationQueue:O.current,onScrollToEndBorder:()=>P(!1),onScrollEnd:()=>j.current=!1,onScrollStart:()=>j.current=!0,initialScrollWidth:t?.firstElementChild?.scrollWidth||0,scrollAnimationDuration:v,textDirection:B}))),1===O.current.length&&O.current[0]()}),[q,v,B,P]),J=l((()=>{F(o??(r=>r-q.current.offsetWidth))}),[o,F,q]),K=l((()=>{F(m??(r=>r+q.current.offsetWidth))}),[m,F,q]),X=l((()=>{if(S&&Q&&q.current&&!j.current){const r=q.current;I(0!==r.scrollLeft),P(Math.abs(D(r))+r.offsetWidth<r.scrollWidth)}}),[S,Q,q,I,P]),G=f("scroll",X);i((function(){return q.current?(G.add(q.current),G.remove):h}),[G,q]),i(X,[X,t]);const U=l((r=>{q.current.scrollBy({left:r.deltaX+r.deltaY,behavior:"auto"}),r.preventDefault()}),[q]),V=f("wheel",U);return i((function(){return q.current&&E?(V.add(q.current),V.remove):h}),[V,q,E]),r(c,{...N,baseClassName:a(z,"vkuiInternalHorizontalScroll","always"===S&&H),onMouseEnter:X},S&&(Q||void 0===Q)&&x&&r(p,{"data-testid":void 0,size:w,offsetY:g,direction:"left","aria-hidden":!0,className:a(M,W),onClick:J}),S&&(Q||void 0===Q)&&Y&&r(p,{"data-testid":void 0,size:w,offsetY:g,direction:"right","aria-hidden":!0,className:a(M,C),onClick:K}),r("div",{className:A,ref:q},r("div",{className:y},t)))};export{x as H};
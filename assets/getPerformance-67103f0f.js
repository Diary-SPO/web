import{y as e,F as r,h as s,b as t,T as a}from"./@vkontakte/icons-ec9bb119.js";import{k as o,c as n,R as i,n as l,p as c,q as p,r as u,s as h,t as _,v as f,w as m,x as d,y as v,z as g,B as P,I as x}from"./index-12fcb1ba.js";import{m as I}from"./makeRequest-ee026c1c.js";const b="_PullToRefresh_1lr1i_1",S="_PullToRefresh--refreshing_1lr1i_5",T="_PullToRefresh__controls_1lr1i_10",k="_PullToRefresh--ios_1lr1i_15",O="_PullToRefresh__spinner_1lr1i_19",R="_PullToRefresh--watching_1lr1i_42",y="_PullToRefresh__spinner-self_1lr1i_46",w="_PullToRefresh__spinner-path_1lr1i_54",M="_PullToRefresh__spinner--on_1lr1i_65",N="_PullToRefresh__content_1lr1i_69";const W=({on:r=!0,size:s=24,strokeWidth:t=2.5,progress:a=0,"aria-label":o="Пожалуйста, подождите...",...l})=>{const c=.5*s-.5*t,p=2*Math.PI*c,u=.5*s,h=function(e,r){const s=e/100;return 2*Math.PI*r*(1-s)}(r?80:a,c);return e(i,{baseClassName:n(O,r&&M),"aria-label":r?o:void 0,...l},e("svg",{role:"presentation",className:y,style:{width:s,height:s},viewBox:`0 0 ${s} ${s}`,xmlns:"http://www.w3.org/2000/svg"},e("g",{style:{width:s,height:s,transformOrigin:`${u}px ${u}px`}},e("circle",{className:w,fill:"none",strokeDasharray:p,strokeDashoffset:h,strokeWidth:t,strokeLinecap:"round",cx:u,cy:u,r:c}))))};function $(e){if(!e)return!1;for(;e.originalEvent;)e=e.originalEvent;return e.preventDefault&&e.cancelable&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1}const D={cancelable:!0,passive:!1},E=({children:i,isFetching:I,onRefresh:O,className:y,...w})=>{const M=l(),E=c(),{document:Y}=p(),j=u(I),L=r((()=>({start:M===h.IOS?-10:-45,max:M===h.IOS?50:80,maxY:M===h.IOS?400:80,refreshing:M===h.IOS?36:50,positionMultiplier:M===h.IOS?.21:1})),[M]),[q,z]=s(L.start),[A,B]=s(!1),[K,V]=s(!1),[C,F]=s(!1),[G,H]=s(!1),J=u(G),Q=t(0),[U,X]=s(0),[Z,ee]=s(0),re=a((()=>{B(!1),F(!1),V(!1),z(L.start),ee(0),X(0)}),[L]),se=a((()=>{G||re()}),[G,re]),{set:te,clear:ae}=_(se,1e3);f((()=>{void 0!==j&&j&&!I&&se()}),[j,I,se]),f((()=>{void 0!==j&&!j&&I&&ae()}),[I,j,ae]);const oe=a((()=>{if(!K&&O){te(),V(!0),z((e=>M===h.IOS?e:L.refreshing));O()||(e="light",o.supports("VKWebAppTapticImpactOccurred")&&o.send("VKWebAppTapticImpactOccurred",{style:e}).catch((()=>{})))}var e}),[K,O,te,M,L.refreshing]);f((()=>{void 0!==J&&J&&!G&&(!K&&C?oe():K&&!I?re():(z(K?L.refreshing:L.start),ee(0),X(0)))}),[L,j,I,se,J,G,K,C,oe]);const ne=t(0);m(Y,"touchmove",(e=>{(e=>{if(A||K)return!0;const r=x(e)-ne.current,s=E?.getScroll().y;return 0===s&&r>0&&G})(e)&&(e.preventDefault(),e.stopPropagation())}),D);const ie=`translate3d(0, ${q}px, 0)`;let le="";return M===h.IOS&&K&&!G?le="translate3d(0, 100px, 0)":M===h.IOS&&(U||K)&&(le=`translate3d(0, ${U}px, 0)`),e(g.Provider,{value:!0},e(d,{...w,onStart:e=>{K&&$(e),H(!0),ne.current=e.startY,Y&&Y.documentElement.classList.add("vkui--disable-overscroll-behavior")},onMove:e=>{const{isY:r,shiftY:s}=e,{start:t,max:a}=L,o=E?.getScroll().y;if(A&&G){$(e);const{positionMultiplier:r,maxY:o}=L,n=Math.max(0,s-Q.current),i=P(t+n*r,t,o),l=i>-10?80*Math.abs((i+10)/a):0;z(i),ee(P(l,0,80)),F(l>80),X(2.3*(i+10)),l>85&&!K&&M===h.IOS&&oe()}else r&&0===o&&s>0&&!K&&G&&($(e),Q.current=s,B(!0),z(t),ee(0))},onEnd:()=>{B(!1),H(!1),Y&&Y.documentElement.classList.remove("vkui--disable-overscroll-behavior")},className:n(b,M===h.IOS&&k,A&&R,K&&S,y)},e(v,{className:T,useParentWidth:!0},e(W,{style:{transform:ie,WebkitTransform:ie,opacity:A||K||C?1:0},on:K,progress:K?void 0:Z})),e("div",{className:N,style:{transform:le,WebkitTransform:le}},i)))},Y=async()=>{const e=localStorage.getItem("id");return e?I(`/performance.current/${e}`):418};export{E as P,Y as g};
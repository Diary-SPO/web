var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,r,i)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,s=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&n(e,r,a[r]);if(i)for(var r of i(a))o.call(a,r)&&n(e,r,a[r]);return e},l=(e,i)=>a(e,r(i)),c=(e,a)=>{var r={};for(var n in e)t.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))a.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r};import{y as d,G as u,h as _,b as g,p as h,i as v,q as m,ao as b,ap as f}from"./@vkontakte/icons-d137ec12.js";import{R as p,$ as w,c as y,a1 as k,a2 as B,aC as z,aG as C,B as I,a7 as O}from"./index-716dd2fc.js";const N="_Clickable__host_19wgw_1",A=e=>{var a=e,{href:r,onClick:i,onClickCapture:t}=a,o=c(a,["href","onClick","onClickCapture"]);return d(p,o)},M=e=>{var a=e,{baseClassName:r,children:i,focusVisibleMode:t="inside"}=a,o=c(a,["baseClassName","children","focusVisibleMode"]);const{focusVisible:n,onBlur:l,onFocus:u}=w();return d(p,s({baseClassName:y(r,N),onBlur:k(l,o.onBlur),onFocus:k(u,o.onFocus)},o),i,d(B,{visible:n,mode:t}))};const P=e=>{var a=e,{focusVisibleMode:r="inside"}=a,i=c(a,["focusVisibleMode"]);const t=function({Component:e,onClick:a,onClickCapture:r,href:i,disabled:t}){return void 0!==e?{Component:e}:void 0!==i?{Component:"a",role:"link","aria-disabled":t}:void 0!==a||void 0!==r?{Component:"div",role:"button",tabIndex:t?void 0:0,"aria-disabled":t}:{}}(i);var o;return(void 0!==(o=i).href||void 0!==o.onClick||void 0!==o.onClickCapture)&&!o.disabled?d(M,s(s({focusVisibleMode:r},t),i)):d(A,s(s({},t),i))},j=u({size:0});function E(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:E.MAX_SIZE}E.MAX_SIZE=24;const S="_ImageBaseBadge_zz8ge_1",V={stroke:"_ImageBaseBadge--background-stroke_zz8ge_13",shadow:"_ImageBaseBadge--background-shadow_zz8ge_18"},x="_ImageBaseOverlay_2ndeg_1",F="_ImageBaseOverlay--visible_2ndeg_19",L="_ImageBaseOverlay--focus-visible_2ndeg_23",R="_ImageBaseOverlay--theme-light_2ndeg_28",X="_ImageBaseOverlay--theme-dark_2ndeg_33",Z="_ImageBase_ptm2o_1",D="_ImageBase__border_ptm2o_14",G="_ImageBase__img_ptm2o_28",H="_ImageBase--loaded_ptm2o_41",W="_ImageBase__fallback_ptm2o_45",$=e=>{var a=e,{alt:r,crossOrigin:i,decoding:t,loading:o,referrerPolicy:n,sizes:u,src:m,srcSet:b,useMap:f,getRef:p,size:w=24,width:k,height:B,style:z,withBorder:C=!0,fallbackIcon:I,children:N,onLoad:A,onError:M}=a,E=c(a,["alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","getRef","size","width","height","style","withBorder","fallbackIcon","children","onLoad","onError"]);const[S,V]=_(!1),[x,F]=_(!1),L=m||b,R=(x||!L)&&v(I)?I:null,X=O(p),$=g(!1);return h((function(){if(!$.current&&($.current=!0,X.current&&X.current.complete&&!S)){const e=new Event("load");X.current.dispatchEvent(e)}}),[X,S]),d(j.Provider,{value:{size:w}},d(P,s({style:l(s({},z),{width:w,height:w}),baseClassName:y(Z,S&&H)},E),L&&d("img",{ref:X,alt:r,className:G,crossOrigin:i,decoding:t,loading:o,referrerPolicy:n,sizes:u,src:m,srcSet:b,useMap:f,width:k,height:B,onLoad:e=>{S||(V(!0),F(!1),null==A||A(e))},onError:e=>{V(!1),F(!0),null==M||M(e)}}),R&&d("div",{className:W},R),N,C&&d("div",{"aria-hidden":!0,className:D})))};$.Badge=e=>{var a=e,{background:r="shadow"}=a,i=c(a,["background"]);return d(p,l(s({},i),{baseClassName:y(S,V[r])}))},$.Overlay=e=>{var a=e,{className:r,theme:i,visibility:t,children:o,onClick:n}=a,u=c(a,["className","theme","visibility","children","onClick"]);const _=z(),g=C(),h=null!=i?i:_,v=null!=t?t:g?"on-hover":"always";return d(I,l(s({},u),{type:"button",Component:"button",className:y(x,"always"===v&&F,"light"===h&&R,"dark"===h&&X,r),hasHover:"on-hover"===v,hoverMode:"on-hover"===v?F:void 0,focusVisibleMode:L,hasActive:!1,onClick:n}),o)};const q="_AvatarBadge_3cliu_1",J="_AvatarBadge--shifted_3cliu_6",K="_AvatarBadge--preset-online_3cliu_11",Q="_AvatarBadge--preset-onlineMobile_3cliu_12",T=e=>{var a=e,{width:r=12,height:i=12}=a,t=c(a,["width","height"]);return d(b,l(s({},t),{width:r>=24?15:12,height:i>=24?15:12}))},U=e=>{var a=e,{width:r=8,height:i=12}=a,t=c(a,["width","height"]);return d(f,l(s({},t),{width:r>=24?9:8,height:i>=24?15:12}))};function Y(e){if(e<=16)return 5;if(e<=24)return 8;if(e<=32)return 10;if(e<=36)return 13;if(e<=44)return 14;if(e<=48)return 17;if(e<56)return 18;if(e<=64)return 21;if(e<=88)return 26;if(e<=96)return 30;const a=Math.ceil(.3125*e);return a+a%2}const ee="_Avatar_zutwh_1",ae="_Avatar--has-gradient_zutwh_5",re="_Avatar__initials_zutwh_49",ie=48,te={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},oe={red:"_Avatar--gradient-red_zutwh_9",orange:"_Avatar--gradient-orange_zutwh_19",yellow:"_Avatar--gradient-yellow_zutwh_24",green:"_Avatar--gradient-green_zutwh_29",blue:"_Avatar--gradient-blue_zutwh_39","l-blue":"_Avatar--gradient-l-blue_zutwh_34",violet:"_Avatar--gradient-violet_zutwh_44"},ne=e=>{var a=e,{size:r=ie,className:i,gradientColor:t,initials:o,fallbackIcon:n,children:u}=a,_=c(a,["size","className","gradientColor","initials","fallbackIcon","children"]);const g="number"==typeof t?te[t]:t,h=g&&"custom"!==g,v=o?void 0:n;return d($,l(s({},_),{size:r,fallbackIcon:v,className:y(ee,g&&ae,h&&oe[g],i)}),o&&d("div",{className:re,style:{fontSize:Y(r)}},o),u)};ne.Badge=e=>{var a=e,{className:r}=a,i=c(a,["className"]);const{size:t}=m(j);return d($.Badge,l(s({},i),{className:y(q,t<96&&J,r)}))},ne.BadgeWithPreset=e=>{var a=e,{preset:r="online",className:i}=a,t=c(a,["preset","className"]);const{size:o}=m(j),n=E(o),l="online"===r,u=l?T:U;return d($.Badge,s({background:"stroke",className:y(q,l?K:Q,i)},t),d(u,{width:n,height:n}))},ne.Overlay=$.Overlay;export{ne as A};
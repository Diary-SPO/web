var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,o,r)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r;import{y as i,n as s,b as c,h as v}from"./@vkontakte/icons-d137ec12.js";import{l as _,ax as m,q as d,c as b,R as p,a8 as u,n as f,t as g,B as R}from"./index-716dd2fc.js";import{I as h}from"./IconButton-634e1b68.js";const O="_Removable__content_1gv90_1",y="_Removable__action_1gv90_8",P="_Removable--align-start_1gv90_16",k="_Removable--ios_1gv90_24",I="_Removable__remove_1gv90_28",N="_Removable__remove-in_1gv90_42",j="_Removable__toggle_1gv90_56",w="_Removable__toggle-in_1gv90_64",x="_Removable--indent_1gv90_97",S="_Removable__offset_1gv90_114",C=({onRemove:e,removePlaceholder:a,removePlaceholderString:o,children:r})=>{const{window:n}=f(),t=c(null),l=c(!0),[s,_]=v(0);g(n,"click",(()=>{s>0&&_(0)}),{capture:!0});return i("div",{className:b(O,"vkuiInternalRemovable__content"),style:{transform:`translateX(-${null!=s?s:0}px)`},onTransitionEnd:()=>{var e;s>0?null==(e=null==t?void 0:t.current)||e.focus():l.current=!0}},i(h,{hasActive:!1,hasHover:!1,"aria-label":o,className:b(y,j,"vkuiInternalRemovable__action"),onClick:e=>{if(e.stopPropagation(),!t.current)return;const{offsetWidth:a}=t.current;l.current=!1,_(a)},disabled:s>0},i("i",{className:w,role:"presentation"})),"function"==typeof r?r({isRemoving:s>0}):r,i("span",{className:S,"aria-hidden":!0}),i(R,{Component:"button",hasActive:!1,hasHover:!1,disabled:l.current,getRootRef:t,className:I,onClick:e},i("span",{className:N},a)))},A=e=>{var c=e,{children:v,onRemove:f=u,removePlaceholder:g="Удалить",align:R="center",indent:I=!1}=c,N=((e,a)=>{var o={};for(var l in e)n.call(e,l)&&a.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&r)for(var l of r(e))a.indexOf(l)<0&&t.call(e,l)&&(o[l]=e[l]);return o})(c,["children","onRemove","removePlaceholder","align","indent"]);const j=_(),w=e=>{e.preventDefault(),f(e)},A=m(g);return i(p,(B=((e,a)=>{for(var o in a||(a={}))n.call(a,o)&&l(e,o,a[o]);if(r)for(var o of r(a))t.call(a,o)&&l(e,o,a[o]);return e})({},N),D={baseClassName:b(j===d.IOS&&k,"start"===R&&P,I&&x)},a(B,o(D))),j!==d.IOS&&i("div",{className:b(O,"vkuiInternalRemovable__content")},v,i(h,{activeMode:"opacity",hoverMode:"opacity",className:b(y,"vkuiInternalRemovable__action"),onClick:w,"aria-label":A},i(s,{role:"presentation"})),i("span",{className:S,"aria-hidden":!0})),j===d.IOS&&i(C,{onRemove:w,removePlaceholder:g,removePlaceholderString:A},v));var B,D};export{A as R};

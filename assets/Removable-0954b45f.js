import{y as e,r as a,b as o,h as n}from"./@vkontakte/icons-ec9bb119.js";import{n as t,aA as r,s,c as l,R as i,aa as _,q as c,w as v,J as m}from"./index-12fcb1ba.js";import{I as d}from"./IconButton-76d8afa6.js";const R="_Removable__content_1gv90_1",b="_Removable__action_1gv90_8",g="_Removable--align-start_1gv90_16",u="_Removable--ios_1gv90_24",p="_Removable__remove_1gv90_28",h="_Removable__remove-in_1gv90_42",f="_Removable__toggle_1gv90_56",k="_Removable__toggle-in_1gv90_64",N="_Removable--indent_1gv90_97",I="_Removable__offset_1gv90_114",P=({onRemove:a,removePlaceholder:t,removePlaceholderString:r,children:s})=>{const{window:i}=c(),_=o(null),g=o(!0),[u,N]=n(0);v(i,"click",(()=>{u>0&&N(0)}),{capture:!0});return e("div",{className:l(R,"vkuiInternalRemovable__content"),style:{transform:`translateX(-${u??0}px)`},onTransitionEnd:()=>{u>0?_?.current?.focus():g.current=!0}},e(d,{hasActive:!1,hasHover:!1,"aria-label":r,className:l(b,f,"vkuiInternalRemovable__action"),onClick:e=>{if(e.stopPropagation(),!_.current)return;const{offsetWidth:a}=_.current;g.current=!1,N(a)},disabled:u>0},e("i",{className:k,role:"presentation"})),"function"==typeof s?s({isRemoving:u>0}):s,e("span",{className:I,"aria-hidden":!0}),e(m,{Component:"button",hasActive:!1,hasHover:!1,disabled:g.current,getRootRef:_,className:p,onClick:a},e("span",{className:h},t)))},C=({children:o,onRemove:n=_,removePlaceholder:c="Удалить",align:v="center",indent:m=!1,...p})=>{const h=t(),f=e=>{e.preventDefault(),n(e)},k=r(c);return e(i,{...p,baseClassName:l(h===s.IOS&&u,"start"===v&&g,m&&N)},h!==s.IOS&&e("div",{className:l(R,"vkuiInternalRemovable__content")},o,e(d,{activeMode:"opacity",hoverMode:"opacity",className:l(b,"vkuiInternalRemovable__action"),onClick:f,"aria-label":k},e(a,{role:"presentation"})),e("span",{className:I,"aria-hidden":!0})),h===s.IOS&&e(P,{onRemove:f,removePlaceholder:c,removePlaceholderString:k},o))};export{C as R};
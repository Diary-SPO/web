import{c as e,F as a,S as t,R as r,o as i,D as s,T as o,G as l,H as n,C as c,L as d}from"./index-12fcb1ba.js";import{P as m}from"./Panel-b4539d2d.js";import{y as f,j as h,J as _,K as p,h as u,L as y,N as b}from"./@vkontakte/icons-ec9bb119.js";import{A as g}from"./Avatar-de2956ae.js";import{P as k}from"./PanelHeaderWithBack-57ddcc92.js";import{w as j}from"./winx48-9f855ac5.js";const v="_Footer_v6qjz_1",x=({children:t,className:r,...i})=>f(a,{Component:"footer",...i,className:e(v,r)},t),N="_AccordionSummary_mfeg2_2",A="_AccordionSummary__icon_mfeg2_5",C="_Accordion_mfeg2_2",S="_AccordionSummary__icon--collapse_mfeg2_9",I="_AccordionSummary__icon--expand_mfeg2_13",P=e=>f(r,{Component:"details",baseClassName:C,...e});P.Summary=({className:a,after:r,before:i,ExpandIcon:s=_,CollapseIcon:o=p,iconPosition:l="after",children:n,...c})=>{const d=f("span",{className:"vkuiIcon"},f(s,{className:e(A,I)}),f(o,{className:e(A,S)}));return f(t,{className:e(N,a),Component:"summary",before:f(h,null,"before"===l&&d,i),after:f(h,null,r,"after"===l&&d),...c},n)};const w={color:"var(--vkui--color_text_subhead)"},R=({id:e,title:a,detail:t})=>{const[r,l]=u(null);return i(P,{open:r===e,onToggle:a=>a.target.open&&l(e),children:[i(P.Summary,{children:a}),i(s,{style:w,children:i(o,{children:t})})]},e)},z=[{id:1,title:"Часто приходится удалять сервис",detail:"Как правило, эта проблема появляется на телефонах. Одно из возможных решений — не заходить по прямой ссылке в сервис, а через страницу Сервисы -> Для вас -> Дневник СПО."},{id:2,title:"В сервисе стоит оценка, которой нет в журнале Сетевого города",detail:"Иногда в журнале может появиться отметка, которой нет в оригинальном дневнике (Сетевой город). Обычно это 'Д' (Долг), но если вы уверены, что долга у вас нет, то напишите нам."},{id:3,title:"На странице Успеваемость нет данных обо мне",detail:"Если на странице Успеваемость нет данных о вас, то перезайдите в сервис (Настройки - Выйти), но если они неправильные, то сообщите нам. Все данные, кроме аватарки, мы берём из Сетевого города."},{id:4,title:"Везде ошибка загрузки данных",detail:"Если вы при заходе на любую страницу получаете ошибку загрузки данных с сервера, то тут может быть несколько проблем: 1. Сервер сетевого города или наш упал(и) — обычно мы сообщаем об этом в группе. 2. Ваша cookie устарела и вам надо получить новую — перезайдите в аккаунт или обновите её в настройках."}],F=({id:e})=>i(m,{nav:e,children:[i(k,{title:"Помощь"}),i(s,{children:[i(l,{header:i(n,{mode:"tertiary",children:"FAQ"}),children:i(c,{mode:"shadow",children:z.map((({detail:e,title:a,id:t})=>i(R,{id:t,detail:e,title:a},t)))})}),i(l,{header:i(n,{mode:"tertiary",children:"Контакты"}),children:[i(t,{before:i(g,{size:48,fallbackIcon:i(y,{}),src:"/assets/ava-080a4a3b.jpg"}),subtitle:"Разработчик | Любые вопросы",style:{borderRadius:"5px !important"},children:i(d,{target:"_blank",href:"https://vk.com/scffs",children:"Семён Окулов"})}),i(t,{before:i(g,{size:48,fallbackIcon:i(y,{}),src:j}),subtitle:"Наша группа | Любые вопросы",style:{borderRadius:"5px !important"},children:i(d,{target:"_blank",href:"https://vk.com/diary_spo",children:"Дневник СПО"})})]}),i(x,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[i(a,{style:{marginRight:5},children:"made with"}),i(b,{})]})]})]});export{F as default};
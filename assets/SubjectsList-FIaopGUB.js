import{u as e,H as s,k as a,G as r,C as d,h as i,a2 as t,a1 as n,aP as c,g as m}from"./index--wYC2PF4.js";import{D as h}from"./Div-8NhnMoi4.js";import{f as l}from"./@vkontakte/icons-HJ4wZ9QE.js";const o=()=>l((()=>e(r,{header:e(s,{mode:"tertiary",children:"Загрузка..."}),children:e(h,{children:e(a,{})})})),[]),y=({subject:s})=>e(m,{size:"l",children:e(d,{mode:"shadow",children:e(h,{children:[e(i,{level:"3",children:s.name}),e(t,{header:"Тип аттестации",children:e(n,{children:c[s.examinationType]})}),e(t,{header:"Оценки",children:e(n,{children:s.marks[s.id]&&Object.keys(s.marks[s.id]).length>0?Object.keys(s.marks[s.id]).map((a=>e("span",{children:s.marks[s.id][a]},a))):"Оценок нет"})})]})})},s.id),j=({semesterKey:a,subjects:d,studentName:i,year:t})=>e(r,{header:e(s,{style:{alignItems:"center"},mode:"tertiary",aside:`${i}, ${t}`,children:a}),children:d.map((s=>e(y,{subject:s},s.id)))},a),k=({semesters:s,studentName:a,year:r,isDataLoading:d})=>e("div",{children:[d&&e(o,{}),Object.keys(s).map((d=>e(j,{semesterKey:d,subjects:s[d],studentName:a,year:r},d)))]});export{k as default};

import{h as a,b as t,p as e,y as n}from"./@vkontakte/icons-ec9bb119.js";import{n as r,O as c,ad as o,Q as s,s as _,t as l,R as i,c as u,x as h,ae as m,a6 as k,af as b,ag as d}from"./index-12fcb1ba.js";import{B as f}from"./Button-a58ba127.js";const S="_Snackbar_1o4ch_1",v="_Snackbar__in_1o4ch_27",p="_Snackbar__body_1o4ch_28",y="_Snackbar--closing_1o4ch_37",N="_Snackbar--mode-dark_1o4ch_52",A="_Snackbar__before_1o4ch_56",g="_Snackbar__after_1o4ch_60",x="_Snackbar__content_1o4ch_64",z="_Snackbar__content-text_1o4ch_76",C="_Snackbar__content-subtitle_1o4ch_86",F="_Snackbar__action_1o4ch_95",O="_Snackbar--ios_1o4ch_111",j="_Snackbar--desktop_1o4ch_120",B="_Snackbar--touched_1o4ch_139",E={vertical:"_Snackbar--layout-vertical_1o4ch_71",horizontal:"_Snackbar--layout-horizontal_1o4ch_95"},I=({children:I,layout:L="horizontal",action:R,before:T,after:q,duration:w=4e3,onActionClick:M,onClose:W,mode:X="default",subtitle:D,offsetY:Q,style:Y,...$})=>{const G=r(),{viewWidth:H}=c(),J=H>=o.SMALL_TABLET,{waitTransitionFinish:K}=s(),[P,U]=a(!1),[V,Z]=a(!1),aa=t(0),ta=t(0),ea=t(null),na=t(null),ra=t(null),ca=G===_.IOS?320:400,oa=()=>{U(!0),K(na.current,(()=>{W()}),ca)},sa=l(oa,w),_a=a=>{null!==ra.current&&cancelAnimationFrame(ra.current),ra.current=requestAnimationFrame((()=>{ea.current&&(ea.current.style.transform=`translate3d(${a}%, 0, 0)`)}))},la=sa.clear;e((()=>sa.set()),[sa]);const ia=q||J||D?"vertical":L;return n(b,null,n(i,{...$,baseClassName:u(S,G===_.IOS&&O,E[ia],"dark"===X&&N,P&&y,V&&B,J&&j),style:Q?{...Y,bottom:Q}:Y},n(h,{className:v,getRootRef:na,onStart:la,onMoveX:a=>{const{shiftX:t,originalEvent:e}=a;e.preventDefault(),V||Z(!0),aa.current=t/(ea.current?.offsetWidth??0)*100,ta.current=d(aa.current,72,1.2,G!==_.IOS),_a(ta.current)},onEnd:a=>{let t;if(V){let e=ta.current;e+=e/a.duration*240*.6,J&&e<=-50?(sa.clear(),K(ea.current,(()=>{W()}),ca),_a(-120)):!J&&e>=50?(sa.clear(),K(ea.current,(()=>{W()}),ca),_a(120)):t=()=>{sa.set(),_a(0)}}else sa.set();Z(!1),t&&requestAnimationFrame(t)}},n("div",{className:p,ref:ea},T&&n("div",{className:A},T),n("div",{className:x},n(m,{className:z},I),D&&!R&&n(k,{className:C},D),R&&!D&&n(f,{align:"left",mode:"link",appearance:"dark"===X?"overlay":"accent",size:"s",className:F,onClick:a=>{oa(),R&&"function"==typeof M&&M(a)}},R)),q&&n("div",{className:g},q)))))};export{I as S};
var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(n,t,r)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,s=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&i(e,t,n[t]);if(r)for(var t of r(n))a.call(n,t)&&i(e,t,n[t]);return e},l=(e,r)=>n(e,t(r)),c=(e,n)=>{var t={};for(var i in e)o.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&r)for(var i of r(e))n.indexOf(i)<0&&a.call(e,i)&&(t[i]=e[i]);return t};import{m as u,Q as h,T as f,B as m,q as d,c as _,R as B,h as C,a3 as D,a1 as F,a4 as A,W as p,X as g,F as w,a5 as b,o as v,s as E,t as y,Z as I,b as k,u as x,G as S,a6 as R}from"./index--wYC2PF4.js";import{B as N}from"./Button-YcANNQ5j.js";import{P as j}from"./Panel-fPJSZPud.js";import{y as z,A as P,l as O,a3 as T,r as M,a4 as L,a5 as U,h as Y,p as H,a6 as q,W as G}from"./@vkontakte/icons-HJ4wZ9QE.js";import{R as W}from"./Removable-J7hXPf4Q.js";import{I as $}from"./IconButton-H1XV_e6Q.js";import{P as J}from"./PanelHeaderWithBack-EZo8V8Fv.js";import{c as K,g as V}from"./_commonjsHelpers-uzQt2zA1.js";import{u as Z}from"./useSnackbar-1tYziyFU.js";import{m as Q}from"./makeRequest-NP7h63fm.js";import"./Snackbar-HLSVggkW.js";const X="_Banner_1reba_1",ee="_Banner--withPadding_1reba_8",ne="_Banner__in_1reba_13",te="_Banner__before_1reba_39",re="_Banner__content_1reba_45",oe="_Banner__subheader_1reba_55",ae="_Banner__text_1reba_56",ie="_Banner__bg_1reba_60",se="_Banner__aside_1reba_75",le="_Banner__dismiss_1reba_85",ce="_Banner__actions_1reba_98",ue="_Banner--mode-image_1reba_111",he="_Banner--inverted_1reba_115",fe="_Banner__expand_1reba_116",me="_Banner--size-m_1reba_130",de="_Banner--ios_1reba_139",_e=e=>{var n=e,{mode:t="tint",imageTheme:r="dark",size:o="s",before:a,asideMode:i,header:A,subheader:p,text:g,children:w,background:b,actions:v,onDismiss:E,dismissLabel:y="Скрыть",noPadding:I}=n,k=c(n,["mode","imageTheme","size","before","asideMode","header","subheader","text","children","background","actions","onDismiss","dismissLabel","noPadding"]);const x=u(),S="m"===o?C:D,R="m"===o?f:F,N="image"===t?L:U,j=z(O,null,"image"===t&&b&&z("div",{"aria-hidden":!0,className:ie},b),a&&z("div",{className:te},a),z("div",{className:re},h(A)&&z(S,{Component:"p",weight:"2",level:"m"===o?"2":"1"},A),h(p)&&z(R,{Component:"p",className:oe},p),h(g)&&z(f,{Component:"p",className:ae},g),h(v)&&P.count(v)>0&&z("div",{className:ce},v)));return z(B,l(s({Component:"section"},k),{baseClassName:_(X,!I&&ee,x===d.IOS&&de,"image"===t&&ue,"m"===o&&me,"image"===t&&"dark"===r&&he)}),"expand"===i?z(m,{className:ne,activeMode:x===d.IOS?"opacity":"background",role:"button"},j,z("div",{className:se},z(T,{className:fe}))):z("div",{className:ne},j,"dismiss"===i&&z("div",{className:se},z($,{"aria-label":y,className:le,onClick:E,hoverMode:"opacity",hasActive:!1},x===d.IOS?z(N,null):z(M,null)))))},Be="_FormLayout_u49vf_1",Ce="_FormLayout__submit_u49vf_5",De=e=>e.preventDefault(),Fe=e=>{var n=e,{children:t,Component:r="form",getRef:o,getRootRef:a,onSubmit:i=De,className:u}=n,h=c(n,["children","Component","getRef","getRootRef","onSubmit","className"]);const f=A(o,a);return z(r,l(s({},h),{className:_(Be,u),onSubmit:i,ref:f}),t,"form"===r&&z("input",{type:"submit",className:Ce,value:""}))},Ae="_FormItem_1klrz_1",pe="_FormItem--withPadding_1klrz_5",ge="_FormItem--removable_1klrz_10",we="_FormItem__removable_1klrz_15",be="_FormItem__top_1klrz_25",ve="_FormItem__bottom_1klrz_34",Ee="_FormItem--status-error_1klrz_39",ye="_FormItem--status-valid_1klrz_43",Ie="_FormItem--sizeY-compact_1klrz_52",ke="_FormItem--withTop_1klrz_108",xe={none:_("_FormItem--sizeY-none_1klrz_61","vkuiInternalFormItem--sizeY-none"),[p.COMPACT]:_(Ie,"vkuiInternalFormItem--sizeY-compact")},Se={error:_(Ee,"vkuiInternalFormItem--status-error"),valid:_(ye,"vkuiInternalFormItem--status-valid")},Re=e=>{var n=e,{children:t,top:r,bottom:o,status:a="default",removable:i,onRemove:u=b,removePlaceholder:f="Удалить",getRootRef:m,htmlFor:d,bottomId:C,noPadding:D}=n,v=c(n,["children","top","bottom","status","removable","onRemove","removePlaceholder","getRootRef","htmlFor","bottomId","noPadding"]);const E=A(m),{sizeY:y="none"}=g(),I=z(O,null,h(r)&&z(F,{className:be,Component:d?"label":"h5",htmlFor:d},r),t,h(o)&&z(w,{className:ve,id:C,role:"error"===a?"alert":void 0},o));return z(B,l(s({},v),{getRootRef:E,baseClassName:_(Ae,!D&&pe,"vkuiInternalFormItem","default"!==a&&Se[a],y!==p.REGULAR&&xe[y],h(r)&&_(ke,"vkuiInternalFormItem--withTop"),i&&_(ge,"vkuiInternalFormItem--removable"))}),i?z(W,{align:"start",onRemove:e=>{(null==E?void 0:E.current)&&u(e,E.current)},removePlaceholder:f,indent:"indent"===i},z("div",{className:_(we,"vkuiInternalFormItem__removable")},I)):I)};const Ne="_FormField_9cx6c_1",je="_FormField--sizeY-compact_9cx6c_13",ze="_FormField__before_9cx6c_30",Pe="_FormField__after_9cx6c_31",Oe="_FormField__border_9cx6c_66",Te="_FormField--mode-default_9cx6c_80",Me="_FormField--status-error_9cx6c_95",Le="_FormField--status-valid_9cx6c_106",Ue="_FormField--disabled_9cx6c_113",Ye="_FormField--hover_9cx6c_119",He="_FormField--focus-visible_9cx6c_219",qe={none:"_FormField--sizeY-none_9cx6c_18",[p.COMPACT]:je},Ge={error:Me,valid:Le},We=e=>{var n=e,{Component:t="span",status:r="default",children:o,getRootRef:a,before:i,after:u,disabled:h,mode:f="default",className:m}=n,d=c(n,["Component","status","children","getRootRef","before","after","disabled","mode","className"]);const B=A(a),{sizeY:C="none"}=g(),[D,F]=Y(!1),w=function(e){const{document:n}=v(),t=()=>!(!e.current||!n)&&e.current.contains(n.activeElement),[r,o]=Y(t),a=()=>{const e=t();e!==r&&o(e)};return E(a,[]),y(n,"focus",a,{capture:!0}),y(n,"blur",a,{capture:!0}),r}(B),b=I({focusVisible:w,mode:He});return z(t,l(s({},d),{ref:B,onMouseEnter:e=>{e.stopPropagation(),F(!0)},onMouseLeave:e=>{e.stopPropagation(),F(!1)},className:_(Ne,"default"===f&&Te,"default"!==r&&Ge[r],C!==p.REGULAR&&qe[C],h&&Ue,!h&&D&&Ye,b,m)}),i&&z("span",{className:ze},i),o,u&&z("span",{className:_(Pe,"vkuiInternalFormField__after")},u),z("span",{"aria-hidden":!0,className:Oe}))},$e="_FormStatus--mode-error_18np8_1",Je=e=>{var n=e,{mode:t,children:r,className:o}=n,a=c(n,["mode","children","className"]);return z(_e,l(s({},a),{subheader:r,className:_("vkuiInternalFormStatus","error"===t&&_($e,"vkuiInternalFormStatus--mode-error"),o)}))},Ke="_Input_emakj_1",Ve="_Input--align-center_emakj_7",Ze="_Input__el_emakj_7",Qe="_Input--align-right_emakj_11",Xe="_Input--sizeY-compact_emakj_48",en="_Input--hasBefore_emakj_58",nn="_Input--hasAfter_emakj_62",tn={none:"_Input--sizeY-none_emakj_53",[p.COMPACT]:Xe},rn=e=>{var n=e,{type:t="text",align:r="left",getRef:o,className:a,getRootRef:i,style:u,before:h,after:m,status:d,mode:B}=n,C=c(n,["type","align","getRef","className","getRootRef","style","before","after","status","mode"]);const{sizeY:D="none"}=g();return z(We,{style:u,className:_(Ke,"right"===r&&Qe,"center"===r&&Ve,D!==p.REGULAR&&tn[D],h&&en,m&&nn,a),getRootRef:i,before:h,after:m,disabled:C.disabled,mode:B,status:d},z(f,l(s({},C),{Component:"input",normalize:!1,type:t,className:Ze,getRootRef:o})))};var on,an,sn={exports:{}};on=sn,an=sn.exports,function(){var e,n,t;function r(e){var n,t,r,o="",a=-1;if(e&&e.length)for(r=e.length;(a+=1)<r;)n=e.charCodeAt(a),t=a+1<r?e.charCodeAt(a+1):0,55296<=n&&n<=56319&&56320<=t&&t<=57343&&(n=65536+((1023&n)<<10)+(1023&t),a+=1),n<=127?o+=String.fromCharCode(n):n<=2047?o+=String.fromCharCode(192|n>>>6&31,128|63&n):n<=65535?o+=String.fromCharCode(224|n>>>12&15,128|n>>>6&63,128|63&n):n<=2097151&&(o+=String.fromCharCode(240|n>>>18&7,128|n>>>12&63,128|n>>>6&63,128|63&n));return o}function o(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function a(e,n){return e<<n|e>>>32-n}function i(e,n){for(var t,r=n?"0123456789ABCDEF":"0123456789abcdef",o="",a=0,i=e.length;a<i;a+=1)t=e.charCodeAt(a),o+=r.charAt(t>>>4&15)+r.charAt(15&t);return o}function s(e){var n,t=32*e.length,r="";for(n=0;n<t;n+=8)r+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return r}function l(e){var n,t=32*e.length,r="";for(n=0;n<t;n+=8)r+=String.fromCharCode(e[n>>5]>>>n%32&255);return r}function c(e){var n,t=8*e.length,r=Array(e.length>>2),o=r.length;for(n=0;n<o;n+=1)r[n]=0;for(n=0;n<t;n+=8)r[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return r}function u(e){var n,t=8*e.length,r=Array(e.length>>2),o=r.length;for(n=0;n<o;n+=1)r[n]=0;for(n=0;n<t;n+=8)r[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return r}function h(e,n){var t,r,o,a,i,s,l,c,u=n.length,h=Array();for(a=(s=Array(Math.ceil(e.length/2))).length,t=0;t<a;t+=1)s[t]=e.charCodeAt(2*t)<<8|e.charCodeAt(2*t+1);for(;s.length>0;){for(i=Array(),o=0,t=0;t<s.length;t+=1)o=(o<<16)+s[t],o-=(r=Math.floor(o/u))*u,(i.length>0||r>0)&&(i[i.length]=r);h[h.length]=o,s=i}for(l="",t=h.length-1;t>=0;t--)l+=n.charAt(h[t]);for(c=Math.ceil(8*e.length/(Math.log(n.length)/Math.log(2))),t=l.length;t<c;t+=1)l=n[0]+l;return l}function f(e,n){var t,r,o,a="",i=e.length;for(n=n||"=",t=0;t<i;t+=3)for(o=e.charCodeAt(t)<<16|(t+1<i?e.charCodeAt(t+1)<<8:0)|(t+2<i?e.charCodeAt(t+2):0),r=0;r<4;r+=1)8*t+6*r>8*e.length?a+=n:a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>>6*(3-r)&63);return a}e={VERSION:"1.0.6",Base64:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="=",t=!0;this.encode=function(o){var a,i,s,l="",c=o.length;for(n=n||"=",o=t?r(o):o,a=0;a<c;a+=3)for(s=o.charCodeAt(a)<<16|(a+1<c?o.charCodeAt(a+1)<<8:0)|(a+2<c?o.charCodeAt(a+2):0),i=0;i<4;i+=1)l+=8*a+6*i>8*c?n:e.charAt(s>>>6*(3-i)&63);return l},this.decode=function(r){var o,a,i,s,l,c,u,h,f="",m=[];if(!r)return r;o=h=0,r=r.replace(new RegExp("\\"+n,"gi"),"");do{a=(u=e.indexOf(r.charAt(o+=1))<<18|e.indexOf(r.charAt(o+=1))<<12|(l=e.indexOf(r.charAt(o+=1)))<<6|(c=e.indexOf(r.charAt(o+=1))))>>16&255,i=u>>8&255,s=255&u,m[h+=1]=64===l?String.fromCharCode(a):64===c?String.fromCharCode(a,i):String.fromCharCode(a,i,s)}while(o<r.length);return f=m.join(""),f=t?function(e){var n,t,r,o,a,i,s=[];if(n=t=r=o=a=0,e&&e.length)for(i=e.length,e+="";n<i;)t+=1,(r=e.charCodeAt(n))<128?(s[t]=String.fromCharCode(r),n+=1):r>191&&r<224?(o=e.charCodeAt(n+1),s[t]=String.fromCharCode((31&r)<<6|63&o),n+=2):(o=e.charCodeAt(n+1),a=e.charCodeAt(n+2),s[t]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&a),n+=3);return s.join("")}(f):f,f},this.setPad=function(e){return n=e||n,this},this.setTab=function(n){return e=n||e,this},this.setUTF8=function(e){return"boolean"==typeof e&&(t=e),this}},CRC32:function(e){var n,t,o,a=0,i=0;for(e=r(e),n=["00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ","79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ","84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ","63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ","A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ","51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ","B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ","06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ","E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ","12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ","D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ","33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ","CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ","9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ","7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ","806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ","60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ","AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ","5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ","B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ","05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ","F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ","11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ","D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ","30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ","C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"].join(""),a^=-1,t=0,o=e.length;t<o;t+=1)i=255&(a^e.charCodeAt(t)),a=a>>>8^"0x"+n.substr(9*i,8);return(-1^a)>>>0},MD5:function(e){var n=!(!e||"boolean"!=typeof e.uppercase)&&e.uppercase,t=e&&"string"==typeof e.pad?e.pad:"=",s=!e||"boolean"!=typeof e.utf8||e.utf8;function u(e){return l(d(c(e=s?r(e):e),8*e.length))}function m(e,n){var t,o,a,i,u;for(e=s?r(e):e,n=s?r(n):n,(t=c(e)).length>16&&(t=d(t,8*e.length)),o=Array(16),a=Array(16),u=0;u<16;u+=1)o[u]=909522486^t[u],a[u]=1549556828^t[u];return i=d(o.concat(c(n)),512+8*n.length),l(d(a.concat(i),640))}function d(e,n){var t,r,a,i,s,l=1732584193,c=-271733879,u=-1732584194,h=271733878;for(e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n,t=0;t<e.length;t+=16)r=l,a=c,i=u,s=h,l=B(l,c,u,h,e[t+0],7,-680876936),h=B(h,l,c,u,e[t+1],12,-389564586),u=B(u,h,l,c,e[t+2],17,606105819),c=B(c,u,h,l,e[t+3],22,-1044525330),l=B(l,c,u,h,e[t+4],7,-176418897),h=B(h,l,c,u,e[t+5],12,1200080426),u=B(u,h,l,c,e[t+6],17,-1473231341),c=B(c,u,h,l,e[t+7],22,-45705983),l=B(l,c,u,h,e[t+8],7,1770035416),h=B(h,l,c,u,e[t+9],12,-1958414417),u=B(u,h,l,c,e[t+10],17,-42063),c=B(c,u,h,l,e[t+11],22,-1990404162),l=B(l,c,u,h,e[t+12],7,1804603682),h=B(h,l,c,u,e[t+13],12,-40341101),u=B(u,h,l,c,e[t+14],17,-1502002290),l=C(l,c=B(c,u,h,l,e[t+15],22,1236535329),u,h,e[t+1],5,-165796510),h=C(h,l,c,u,e[t+6],9,-1069501632),u=C(u,h,l,c,e[t+11],14,643717713),c=C(c,u,h,l,e[t+0],20,-373897302),l=C(l,c,u,h,e[t+5],5,-701558691),h=C(h,l,c,u,e[t+10],9,38016083),u=C(u,h,l,c,e[t+15],14,-660478335),c=C(c,u,h,l,e[t+4],20,-405537848),l=C(l,c,u,h,e[t+9],5,568446438),h=C(h,l,c,u,e[t+14],9,-1019803690),u=C(u,h,l,c,e[t+3],14,-187363961),c=C(c,u,h,l,e[t+8],20,1163531501),l=C(l,c,u,h,e[t+13],5,-1444681467),h=C(h,l,c,u,e[t+2],9,-51403784),u=C(u,h,l,c,e[t+7],14,1735328473),l=D(l,c=C(c,u,h,l,e[t+12],20,-1926607734),u,h,e[t+5],4,-378558),h=D(h,l,c,u,e[t+8],11,-2022574463),u=D(u,h,l,c,e[t+11],16,1839030562),c=D(c,u,h,l,e[t+14],23,-35309556),l=D(l,c,u,h,e[t+1],4,-1530992060),h=D(h,l,c,u,e[t+4],11,1272893353),u=D(u,h,l,c,e[t+7],16,-155497632),c=D(c,u,h,l,e[t+10],23,-1094730640),l=D(l,c,u,h,e[t+13],4,681279174),h=D(h,l,c,u,e[t+0],11,-358537222),u=D(u,h,l,c,e[t+3],16,-722521979),c=D(c,u,h,l,e[t+6],23,76029189),l=D(l,c,u,h,e[t+9],4,-640364487),h=D(h,l,c,u,e[t+12],11,-421815835),u=D(u,h,l,c,e[t+15],16,530742520),l=F(l,c=D(c,u,h,l,e[t+2],23,-995338651),u,h,e[t+0],6,-198630844),h=F(h,l,c,u,e[t+7],10,1126891415),u=F(u,h,l,c,e[t+14],15,-1416354905),c=F(c,u,h,l,e[t+5],21,-57434055),l=F(l,c,u,h,e[t+12],6,1700485571),h=F(h,l,c,u,e[t+3],10,-1894986606),u=F(u,h,l,c,e[t+10],15,-1051523),c=F(c,u,h,l,e[t+1],21,-2054922799),l=F(l,c,u,h,e[t+8],6,1873313359),h=F(h,l,c,u,e[t+15],10,-30611744),u=F(u,h,l,c,e[t+6],15,-1560198380),c=F(c,u,h,l,e[t+13],21,1309151649),l=F(l,c,u,h,e[t+4],6,-145523070),h=F(h,l,c,u,e[t+11],10,-1120210379),u=F(u,h,l,c,e[t+2],15,718787259),c=F(c,u,h,l,e[t+9],21,-343485551),l=o(l,r),c=o(c,a),u=o(u,i),h=o(h,s);return Array(l,c,u,h)}function _(e,n,t,r,i,s){return o(a(o(o(n,e),o(r,s)),i),t)}function B(e,n,t,r,o,a,i){return _(n&t|~n&r,e,n,o,a,i)}function C(e,n,t,r,o,a,i){return _(n&r|t&~r,e,n,o,a,i)}function D(e,n,t,r,o,a,i){return _(n^t^r,e,n,o,a,i)}function F(e,n,t,r,o,a,i){return _(t^(n|~r),e,n,o,a,i)}this.hex=function(e){return i(u(e),n)},this.b64=function(e){return f(u(e),t)},this.any=function(e,n){return h(u(e),n)},this.raw=function(e){return u(e)},this.hex_hmac=function(e,t){return i(m(e,t),n)},this.b64_hmac=function(e,n){return f(m(e,n),t)},this.any_hmac=function(e,n,t){return h(m(e,n),t)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(e){return"boolean"==typeof e&&(n=e),this},this.setPad=function(e){return t=e||t,this},this.setUTF8=function(e){return"boolean"==typeof e&&(s=e),this}},SHA1:function(e){var n=!(!e||"boolean"!=typeof e.uppercase)&&e.uppercase,t=e&&"string"==typeof e.pad?e.pad:"=",l=!e||"boolean"!=typeof e.utf8||e.utf8;function c(e){return s(d(u(e=l?r(e):e),8*e.length))}function m(e,n){var t,o,a,i,c;for(e=l?r(e):e,n=l?r(n):n,(t=u(e)).length>16&&(t=d(t,8*e.length)),o=Array(16),a=Array(16),i=0;i<16;i+=1)o[i]=909522486^t[i],a[i]=1549556828^t[i];return c=d(o.concat(u(n)),512+8*n.length),s(d(a.concat(c),672))}function d(e,n){var t,r,i,s,l,c,u,h,f=Array(80),m=1732584193,d=-271733879,C=-1732584194,D=271733878,F=-1009589776;for(e[n>>5]|=128<<24-n%32,e[15+(n+64>>9<<4)]=n,t=0;t<e.length;t+=16){for(s=m,l=d,c=C,u=D,h=F,r=0;r<80;r+=1)f[r]=r<16?e[t+r]:a(f[r-3]^f[r-8]^f[r-14]^f[r-16],1),i=o(o(a(m,5),_(r,d,C,D)),o(o(F,f[r]),B(r))),F=D,D=C,C=a(d,30),d=m,m=i;m=o(m,s),d=o(d,l),C=o(C,c),D=o(D,u),F=o(F,h)}return Array(m,d,C,D,F)}function _(e,n,t,r){return e<20?n&t|~n&r:e<40?n^t^r:e<60?n&t|n&r|t&r:n^t^r}function B(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}this.hex=function(e){return i(c(e),n)},this.b64=function(e){return f(c(e),t)},this.any=function(e,n){return h(c(e),n)},this.raw=function(e){return c(e)},this.hex_hmac=function(e,n){return i(m(e,n))},this.b64_hmac=function(e,n){return f(m(e,n),t)},this.any_hmac=function(e,n,t){return h(m(e,n),t)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(e){return"boolean"==typeof e&&(n=e),this},this.setPad=function(e){return t=e||t,this},this.setUTF8=function(e){return"boolean"==typeof e&&(l=e),this}},SHA256:function(e){e&&"boolean"==typeof e.uppercase&&e.uppercase;var n,t=e&&"string"==typeof e.pad?e.pad:"=",a=!e||"boolean"!=typeof e.utf8||e.utf8;function l(e,n){return s(A(u(e=n?r(e):e),8*e.length))}function c(e,n){e=a?r(e):e,n=a?r(n):n;var t,o=0,i=u(e),l=Array(16),c=Array(16);for(i.length>16&&(i=A(i,8*e.length));o<16;o+=1)l[o]=909522486^i[o],c[o]=1549556828^i[o];return t=A(l.concat(u(n)),512+8*n.length),s(A(c.concat(t),768))}function m(e,n){return e>>>n|e<<32-n}function d(e,n){return e>>>n}function _(e,n,t){return e&n^~e&t}function B(e,n,t){return e&n^e&t^n&t}function C(e){return m(e,2)^m(e,13)^m(e,22)}function D(e){return m(e,6)^m(e,11)^m(e,25)}function F(e){return m(e,7)^m(e,18)^d(e,3)}function A(e,t){var r,a,i,s,l,c,u,h,f,A,p,g,w,b=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],v=new Array(64);for(e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t,f=0;f<e.length;f+=16){for(r=b[0],a=b[1],i=b[2],s=b[3],l=b[4],c=b[5],u=b[6],h=b[7],A=0;A<64;A+=1)v[A]=A<16?e[A+f]:o(o(o(m(w=v[A-2],17)^m(w,19)^d(w,10),v[A-7]),F(v[A-15])),v[A-16]),p=o(o(o(o(h,D(l)),_(l,c,u)),n[A]),v[A]),g=o(C(r),B(r,a,i)),h=u,u=c,c=l,l=o(s,p),s=i,i=a,a=r,r=o(p,g);b[0]=o(r,b[0]),b[1]=o(a,b[1]),b[2]=o(i,b[2]),b[3]=o(s,b[3]),b[4]=o(l,b[4]),b[5]=o(c,b[5]),b[6]=o(u,b[6]),b[7]=o(h,b[7])}return b}this.hex=function(e){return i(l(e,a))},this.b64=function(e){return f(l(e,a),t)},this.any=function(e,n){return h(l(e,a),n)},this.raw=function(e){return l(e,a)},this.hex_hmac=function(e,n){return i(c(e,n))},this.b64_hmac=function(e,n){return f(c(e,n),t)},this.any_hmac=function(e,n,t){return h(c(e,n),t)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(e){return this},this.setPad=function(e){return t=e||t,this},this.setUTF8=function(e){return"boolean"==typeof e&&(a=e),this},n=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998]},SHA512:function(e){e&&"boolean"==typeof e.uppercase&&e.uppercase;var n,t=e&&"string"==typeof e.pad?e.pad:"=",o=!e||"boolean"!=typeof e.utf8||e.utf8;function a(e){return s(c(u(e=o?r(e):e),8*e.length))}function l(e,n){e=o?r(e):e,n=o?r(n):n;var t,a=0,i=u(e),l=Array(32),h=Array(32);for(i.length>32&&(i=c(i,8*e.length));a<32;a+=1)l[a]=909522486^i[a],h[a]=1549556828^i[a];return t=c(l.concat(u(n)),1024+8*n.length),s(c(h.concat(t),1536))}function c(e,t){var r,o,a,i=new Array(80),s=new Array(16),l=[new m(1779033703,-205731576),new m(-1150833019,-2067093701),new m(1013904242,-23791573),new m(-1521486534,1595750129),new m(1359893119,-1377402159),new m(-1694144372,725511199),new m(528734635,-79577749),new m(1541459225,327033209)],c=new m(0,0),u=new m(0,0),h=new m(0,0),f=new m(0,0),p=new m(0,0),g=new m(0,0),w=new m(0,0),b=new m(0,0),v=new m(0,0),E=new m(0,0),y=new m(0,0),I=new m(0,0),k=new m(0,0),x=new m(0,0),S=new m(0,0),R=new m(0,0),N=new m(0,0);for(void 0===n&&(n=[new m(1116352408,-685199838),new m(1899447441,602891725),new m(-1245643825,-330482897),new m(-373957723,-2121671748),new m(961987163,-213338824),new m(1508970993,-1241133031),new m(-1841331548,-1357295717),new m(-1424204075,-630357736),new m(-670586216,-1560083902),new m(310598401,1164996542),new m(607225278,1323610764),new m(1426881987,-704662302),new m(1925078388,-226784913),new m(-2132889090,991336113),new m(-1680079193,633803317),new m(-1046744716,-815192428),new m(-459576895,-1628353838),new m(-272742522,944711139),new m(264347078,-1953704523),new m(604807628,2007800933),new m(770255983,1495990901),new m(1249150122,1856431235),new m(1555081692,-1119749164),new m(1996064986,-2096016459),new m(-1740746414,-295247957),new m(-1473132947,766784016),new m(-1341970488,-1728372417),new m(-1084653625,-1091629340),new m(-958395405,1034457026),new m(-710438585,-1828018395),new m(113926993,-536640913),new m(338241895,168717936),new m(666307205,1188179964),new m(773529912,1546045734),new m(1294757372,1522805485),new m(1396182291,-1651133473),new m(1695183700,-1951439906),new m(1986661051,1014477480),new m(-2117940946,1206759142),new m(-1838011259,344077627),new m(-1564481375,1290863460),new m(-1474664885,-1136513023),new m(-1035236496,-789014639),new m(-949202525,106217008),new m(-778901479,-688958952),new m(-694614492,1432725776),new m(-200395387,1467031594),new m(275423344,851169720),new m(430227734,-1194143544),new m(506948616,1363258195),new m(659060556,-544281703),new m(883997877,-509917016),new m(958139571,-976659869),new m(1322822218,-482243893),new m(1537002063,2003034995),new m(1747873779,-692930397),new m(1955562222,1575990012),new m(2024104815,1125592928),new m(-2067236844,-1578062990),new m(-1933114872,442776044),new m(-1866530822,593698344),new m(-1538233109,-561857047),new m(-1090935817,-1295615723),new m(-965641998,-479046869),new m(-903397682,-366583396),new m(-779700025,566280711),new m(-354779690,-840897762),new m(-176337025,-294727304),new m(116418474,1914138554),new m(174292421,-1563912026),new m(289380356,-1090974290),new m(460393269,320620315),new m(685471733,587496836),new m(852142971,1086792851),new m(1017036298,365543100),new m(1126000580,-1676669620),new m(1288033470,-885112138),new m(1501505948,-60457430),new m(1607167915,987167468),new m(1816402316,1246189591)]),o=0;o<80;o+=1)i[o]=new m(0,0);for(e[t>>5]|=128<<24-(31&t),e[31+(t+128>>10<<5)]=t,a=e.length,o=0;o<a;o+=32){for(d(h,l[0]),d(f,l[1]),d(p,l[2]),d(g,l[3]),d(w,l[4]),d(b,l[5]),d(v,l[6]),d(E,l[7]),r=0;r<16;r+=1)i[r].h=e[o+2*r],i[r].l=e[o+2*r+1];for(r=16;r<80;r+=1)_(S,i[r-2],19),B(R,i[r-2],29),C(N,i[r-2],6),I.l=S.l^R.l^N.l,I.h=S.h^R.h^N.h,_(S,i[r-15],1),_(R,i[r-15],8),C(N,i[r-15],7),y.l=S.l^R.l^N.l,y.h=S.h^R.h^N.h,F(i[r],I,i[r-7],y,i[r-16]);for(r=0;r<80;r+=1)k.l=w.l&b.l^~w.l&v.l,k.h=w.h&b.h^~w.h&v.h,_(S,w,14),_(R,w,18),B(N,w,9),I.l=S.l^R.l^N.l,I.h=S.h^R.h^N.h,_(S,h,28),B(R,h,2),B(N,h,7),y.l=S.l^R.l^N.l,y.h=S.h^R.h^N.h,x.l=h.l&f.l^h.l&p.l^f.l&p.l,x.h=h.h&f.h^h.h&p.h^f.h&p.h,A(c,E,I,k,n[r],i[r]),D(u,y,x),d(E,v),d(v,b),d(b,w),D(w,g,c),d(g,p),d(p,f),d(f,h),D(h,c,u);D(l[0],l[0],h),D(l[1],l[1],f),D(l[2],l[2],p),D(l[3],l[3],g),D(l[4],l[4],w),D(l[5],l[5],b),D(l[6],l[6],v),D(l[7],l[7],E)}for(o=0;o<8;o+=1)s[2*o]=l[o].h,s[2*o+1]=l[o].l;return s}function m(e,n){this.h=e,this.l=n}function d(e,n){e.h=n.h,e.l=n.l}function _(e,n,t){e.l=n.l>>>t|n.h<<32-t,e.h=n.h>>>t|n.l<<32-t}function B(e,n,t){e.l=n.h>>>t|n.l<<32-t,e.h=n.l>>>t|n.h<<32-t}function C(e,n,t){e.l=n.l>>>t|n.h<<32-t,e.h=n.h>>>t}function D(e,n,t){var r=(65535&n.l)+(65535&t.l),o=(n.l>>>16)+(t.l>>>16)+(r>>>16),a=(65535&n.h)+(65535&t.h)+(o>>>16),i=(n.h>>>16)+(t.h>>>16)+(a>>>16);e.l=65535&r|o<<16,e.h=65535&a|i<<16}function F(e,n,t,r,o){var a=(65535&n.l)+(65535&t.l)+(65535&r.l)+(65535&o.l),i=(n.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(a>>>16),s=(65535&n.h)+(65535&t.h)+(65535&r.h)+(65535&o.h)+(i>>>16),l=(n.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(s>>>16);e.l=65535&a|i<<16,e.h=65535&s|l<<16}function A(e,n,t,r,o,a){var i=(65535&n.l)+(65535&t.l)+(65535&r.l)+(65535&o.l)+(65535&a.l),s=(n.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(a.l>>>16)+(i>>>16),l=(65535&n.h)+(65535&t.h)+(65535&r.h)+(65535&o.h)+(65535&a.h)+(s>>>16),c=(n.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(a.h>>>16)+(l>>>16);e.l=65535&i|s<<16,e.h=65535&l|c<<16}this.hex=function(e){return i(a(e))},this.b64=function(e){return f(a(e),t)},this.any=function(e,n){return h(a(e),n)},this.raw=function(e){return a(e)},this.hex_hmac=function(e,n){return i(l(e,n))},this.b64_hmac=function(e,n){return f(l(e,n),t)},this.any_hmac=function(e,n,t){return h(l(e,n),t)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(e){return this},this.setPad=function(e){return t=e||t,this},this.setUTF8=function(e){return"boolean"==typeof e&&(o=e),this}},RMD160:function(e){e&&"boolean"==typeof e.uppercase&&e.uppercase;var n=e&&"string"==typeof e.pad?e.pa:"=",t=!e||"boolean"!=typeof e.utf8||e.utf8,s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],l=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],u=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],m=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];function d(e){return B(C(c(e=t?r(e):e),8*e.length))}function _(e,n){e=t?r(e):e,n=t?r(n):n;var o,a,i=c(e),s=Array(16),l=Array(16);for(i.length>16&&(i=C(i,8*e.length)),o=0;o<16;o+=1)s[o]=909522486^i[o],l[o]=1549556828^i[o];return a=C(s.concat(c(n)),512+8*n.length),B(C(l.concat(a),672))}function B(e){var n,t="",r=32*e.length;for(n=0;n<r;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function C(e,n){var t,r,i,c,h,f,d,_,B,C,p,g,w,b,v=1732584193,E=4023233417,y=2562383102,I=271733878,k=3285377520;for(e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n,c=e.length,i=0;i<c;i+=16){for(h=C=v,f=p=E,d=g=y,_=w=I,B=b=k,r=0;r<=79;r+=1)t=o(h,D(r,f,d,_)),t=o(t,e[i+s[r]]),t=o(t,F(r)),t=o(a(t,u[r]),B),h=B,B=_,_=a(d,10),d=f,f=t,t=o(C,D(79-r,p,g,w)),t=o(t,e[i+l[r]]),t=o(t,A(r)),t=o(a(t,m[r]),b),C=b,b=w,w=a(g,10),g=p,p=t;t=o(E,o(d,w)),E=o(y,o(_,b)),y=o(I,o(B,C)),I=o(k,o(h,p)),k=o(v,o(f,g)),v=t}return[v,E,y,I,k]}function D(e,n,t,r){return 0<=e&&e<=15?n^t^r:16<=e&&e<=31?n&t|~n&r:32<=e&&e<=47?(n|~t)^r:48<=e&&e<=63?n&r|t&~r:64<=e&&e<=79?n^(t|~r):"rmd160_f: j out of range"}function F(e){return 0<=e&&e<=15?0:16<=e&&e<=31?1518500249:32<=e&&e<=47?1859775393:48<=e&&e<=63?2400959708:64<=e&&e<=79?2840853838:"rmd160_K1: j out of range"}function A(e){return 0<=e&&e<=15?1352829926:16<=e&&e<=31?1548603684:32<=e&&e<=47?1836072691:48<=e&&e<=63?2053994217:64<=e&&e<=79?0:"rmd160_K2: j out of range"}this.hex=function(e){return i(d(e))},this.b64=function(e){return f(d(e),n)},this.any=function(e,n){return h(d(e),n)},this.raw=function(e){return d(e)},this.hex_hmac=function(e,n){return i(_(e,n))},this.b64_hmac=function(e,t){return f(_(e,t),n)},this.any_hmac=function(e,n,t){return h(_(e,n),t)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(e){return this},this.setPad=function(e){return void 0!==e&&(n=e),this},this.setUTF8=function(e){return"boolean"==typeof e&&(t=e),this}}},n=this,t=!1,t=an,an&&"object"==typeof K&&K&&K===K.global&&(n=K),t?on&&on.exports===t?on.exports=e:t.Hashes=e:n.Hashes=e}();const ln=V(sn.exports),cn=/^[a-zA-Z0-9а-яА-ЯёЁ-]+$/,un=({id:e})=>{const n=k(),[t,r]=Y(""),[o,a]=Y(""),[i,s]=Y(!1),[l,c]=Y(!1),[u,h]=Z();H((()=>{const e=localStorage.getItem("token");c(!0);(async()=>{e||(await n.replace("/"),c(!1),h({icon:x(G,{fill:"var(--vkui--color_icon_negative)"}),subtitle:"Заполни форму и войди в дневник",title:"О вас нет данных, ты кто такой?"}))})()}),[]);const f=e=>{const{name:n,value:t}=e.currentTarget,o={login:r,password:a}[n];s(!1),null==o||o(t)},m=async()=>{if(!cn.test(t))return void s(!0);const e=(new ln.SHA256).b64(o),r=await Q("/login/","POST",JSON.stringify({login:t,password:e,isHash:!0}));try{if(c(!0),401===r)throw c(!1),s(!0),new Error("401");if("number"==typeof r)throw h({icon:x(G,{fill:"var(--vkui--color_icon_negative)"}),title:"Ошибка при попытке сделать запрос",subtitle:"Попробуйте обновить страницу или обновите куки в настройках"}),new Error("500");const e=r;String(e.token)||h({icon:x(G,{fill:"var(--vkui--color_icon_negative)"}),subtitle:"Попробуйте заного или сообщите об ошибке",title:"Ошибка при попытке авторизации"}),hn(e),h({title:"Вхожу",subtitle:"Подождите немного"}),await n.replace(`/${R}`)}catch(e){c(!1)}finally{c(!1)}},d=""===t,_=""===o,B=o&&!_,C=d?"Логин":cn.test(t)?"Логин введён":"Введите корректный логин",D=""===o?"Пароль":B?"Пароль введён":"Введите корректный пароль";return x(j,{nav:e,children:[x(J,{title:"Авторизация"}),x(S,{children:[i&&x(Je,{header:"Некорректные данные",mode:"error",children:"Проверьте правильность логина и пароля"}),x(Fe,{children:[x(Re,{required:!0,htmlFor:"userLogin",top:"Логин",status:d?"default":cn.test(t)?"valid":"error",bottom:d||C,bottomId:"login-type",children:x(rn,{required:!0,"aria-labelledby":"login-type",id:"userLogin",type:"text",name:"login",placeholder:"Введите логин",value:t,onChange:f})}),x(Re,{top:"Пароль",htmlFor:"pass",status:_?"default":B?"valid":"error",bottom:_||D,children:x(rn,{name:"password",id:"pass",type:"password",placeholder:"Введите пароль",onChange:f})}),x(Re,{children:x(N,{size:"l",stretched:!0,onClick:()=>m(),disabled:!o||!t||!cn.test(t)||l,before:x(q,{}),children:l?"Пытаюсь войти...":"Войти"})})]}),u]})]})},hn=e=>{var n,t;const r=String(e.id),o=e.token,a=`${String(e.lastName)} ${String(e.firstName)} ${String(e.middleName)}`,i=String(null==(n=e.organization)?void 0:n.abbreviation),s=String(null==(t=e.organization)?void 0:t.addressSettlement),l=String(null==e?void 0:e.groupName);localStorage.setItem("id",r),localStorage.setItem("token",o);const c={name:a,org:i,city:s,group:l};localStorage.setItem("data",JSON.stringify(c))};export{un as default};

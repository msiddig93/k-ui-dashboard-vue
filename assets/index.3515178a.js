import{o as e,c as t,a,w as r,r as s,b as l,d as o,u as n,e as i,f as d,v as c,g as u,h as m,i as h,j as f,k as p,l as b,m as g,n as x,T as v,F as k,M as w,p as y,q as _,s as S,t as L,x as C,y as M,z as j,A as D,B as O,D as B,C as K,E as W,G as z,H as T,I as R,J as I,K as U,L as H}from"./vendor.a8a953a1.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){l(new Error(`Failed to import: ${e}`)),s(i)},onload(){a(self[t].moduleMap[o]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/k-ui-dashboard-vue/assets/");const E={},P={class:"flex flex-col items-center justify-center h-screen space-y-6 font-sans"},$=a("h1",{class:"text-5xl font-medium"},"In Progress",-1),A=l(" See what has been done ");E.render=function(l,o){const n=s("router-link");return e(),t("main",P,[$,a(n,{to:"/dashboard/pages/blank",class:"font-medium text-light-text-highlight hover:underline"},{default:r((()=>[A])),_:1})])};const q=o(window.localStorage.getItem("dark")?JSON.parse(window.localStorage.getItem("dark")):!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),F=()=>{var e;q.value=!q.value,e=q.value,window.localStorage.setItem("dark",e)},G=o(!1),J=o(!(window.innerWidth<=1280)),N=()=>{J.value=!J.value},V=o(!1);function Y(){return{isDark:q,toggleTheme:F,isRTL:G,isSidebarOpen:J,toggleSidebar:N,isSearchModalOpen:V}}const Q={"aria-label":"Panels buttons",class:"flex flex-col items-center justify-between flex-shrink-0 w-16 border-r bg-light-bg border-light-border dark:bg-dark-elevation-2 dark:border-dark-border rtl:border-r-0 rtl:border-l"},X={class:"flex items-center justify-center flex-shrink-0 w-full h-full max-h-14"},Z=a("span",{class:"sr-only"},"Toggle sidebar",-1),ee={class:"flex flex-col items-center space-y-2 rounded-md bg-gray-50 dark:bg-dark-bg"},te=a("span",{class:"sr-only"},"Toggle dark mode",-1),ae=a("span",{class:"sr-only"},"Change direction",-1),re={class:"icon-btn"},se=a("span",{class:"sr-only"},"Open settings panel",-1),le={class:"icon-btn"},oe=a("span",{class:"sr-only"},"Open notifications panel",-1),ne={class:"icon-btn"},ie=a("span",{class:"sr-only"},"Open recent activity panel",-1),de={class:"py-4"},ce=a("span",{class:"sr-only"},"Close mini sidebar",-1),ue={expose:[],setup(r){const{isSidebarOpen:s,toggleSidebar:l,isDark:o,toggleTheme:x,isRTL:v}=Y();return(r,l)=>(e(),t("nav",Q,[a("div",X,[a("button",{onClick:l[1]||(l[1]=e=>s.value=!n(s)),class:"hidden sm:block icon-btn"},[Z,a(n(i),{"aria-hidden":"true",class:["w-6 h-6 transition-transform transform",n(s)?"rtl:-rotate-180":"-rotate-180 rtl:rotate-0"]},null,8,["class"])])]),a("div",ee,[a("button",{class:"icon-btn",onClick:l[2]||(l[2]=e=>n(x)())},[te,d(a(n(u),{"aria-hidden":"true",class:"w-6 h-6"},null,512),[[c,!n(o)]]),d(a(n(m),{"aria-hidden":"true",class:"w-6 h-6"},null,512),[[c,n(o)]])]),a("button",{class:"icon-btn",onClick:l[3]||(l[3]=e=>v.value=!n(v))},[ae,a(n(h),{"aria-hidden":"true",class:"w-6 h-6"})]),a("button",re,[se,a(n(f),{"aria-hidden":"true",class:"w-6 h-6"})]),a("button",le,[oe,a(n(p),{"aria-hidden":"true",class:"w-6 h-6"})]),a("button",ne,[ie,a(n(b),{"aria-hidden":"true",class:"w-6 h-6"})])]),a("div",de,[a("button",{onClick:l[4]||(l[4]=e=>s.value=!1),class:"icon-btn sm:hidden"},[ce,a(n(g),{"aria-hidden":"true",class:"w-6 h-6"})])])]))}},me={},he=a("span",{class:"text-2xl font-semibold text-primary"},"K-UI",-1);me.render=function(a,l){const o=s("router-link");return e(),t(o,{to:"/"},{default:r((()=>[he])),_:1})};const fe={expose:[],props:{show:{type:Boolean,required:!0}},emits:["close"],setup(s){const{emit:l}=x(),o=()=>{l("close")};return(l,n)=>(e(),t(v,{"enter-active-class":"transition-opacity","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r((()=>[d(a("div",{onClick:o,"aria-hidden":"true",class:"fixed inset-0 z-10 bg-black bg-opacity-50 dark:bg-opacity-75"},null,512),[[c,s.show]])])),_:1}))}},pe={"aria-label":"Main",class:"flex flex-col flex-shrink-0 w-64 h-full transition-transform transform border-r bg-light-bg border-light-border dark:bg-dark-elevation-2 dark:border-dark-border rtl:border-r-0 rtl:border-l"},be={class:"flex items-center justify-center flex-shrink-0 pt-4"},ge=a("div",{class:"flex-1 px-4 mt-6 overflow-hidden hover:overflow-auto"},null,-1),xe=a("div",{class:"flex-shrink-0 p-4"},[a("button",{class:"w-full btn btn-md btn-primary"},"Upgrade to pro")],-1),ve={expose:[],setup(r){const{isSidebarOpen:s}=Y();return(r,l)=>(e(),t(k,null,[a(fe,{show:n(s),onClose:l[1]||(l[1]=e=>s.value=!1),class:"xl:hidden"},null,8,["show"]),a("div",{class:["fixed inset-y-0 z-10 flex flex-row-reverse flex-shrink-0 h-screen transition-transform transform",{"-translate-x-full sm:-translate-x-64 rtl:translate-x-full sm:rtl:translate-x-64":!n(s),"translate-x-0 shadow-lg xl:shadow-none dark:shadow-dark-lg dark:xl:shadow-none":n(s)}]},[a(ue),a("nav",pe,[a("div",be,[a(me)]),ge,xe])],2)],64))}},ke={class:"sticky top-0 z-[5] flex items-center flex-shrink-0 h-full px-2 bg-light-bg border-b border-light-border sm:px-4 max-h-14 dark:bg-dark-elevation-2 dark:border-dark-border"},we=a("span",{class:"sr-only"},"Open scecondary menu",-1),ye=a("span",{class:"mr-1 rtl:mr-0 rtl:ml-1"},"Author",-1),_e=a("a",{href:"https://twitter.com/ak_kamona",target:"_blank",class:"flex items-center text-sm"},[a("span",null,"Twitter"),a("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})])],-1),Se=a("a",{href:"https://github.com/Kamona-WD",target:"_blank",class:"flex items-center text-sm"},[a("span",null,"Github"),a("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})])],-1),Le=a("span",{class:"mr-1 rtl:mr-0 rtl:ml-1"},"Projects",-1),Ce=a("a",{href:"https://github.com/Kamona-WD/kwd-dashboard",target:"_blank",class:"flex items-center text-sm"},[a("span",null,"K-WD Dashboard"),a("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})])],-1),Me=a("a",{href:"https://github.com/Kamona-WD/starter-dashboard-layout",target:"_blank",class:"flex items-center text-sm"},[a("span",null,"Starter Dashboard Layout"),a("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})])],-1),je=a("a",{href:"https://github.com/Kamona-WD/starter-dashboard-layout-vue",target:"_blank",class:"flex items-center text-sm"},[a("span",null,"Starter Dashboard Layout (Vue)"),a("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})])],-1),De={"aria-label":"Secondary",class:"items-center hidden ml-8 sm:flex rtl:ml-0 rtl:mr-8"},Oe=a("span",{class:"mr-1 rtl:mr-0 rtl:ml-1"},"Author",-1),Be=a("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),Ke=a("span",null,"Twitter",-1),We=a("span",null,"Github",-1),ze=a("span",{class:"mr-1 rtl:mr-0 rtl:ml-1"},"Projects",-1),Te=a("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),Re=a("span",null,"K-WD Dashboard",-1),Ie=a("span",null,"Starter Dashboard Layout",-1),Ue=a("span",null,"Starter Dashboard Layout (VueJS)",-1),He={class:"flex items-center ml-auto rtl:ml-0 rtl:mr-auto"},Ee=a("span",{class:"sr-only"},"Open search modal",-1),Pe=a("span",{class:"sr-only"},"User menu",-1),$e=a("img",{class:"w-10 h-10 rounded-lg",src:"https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4",alt:"Ahmed Kamel"},null,-1),Ae={expose:[],setup(s){const{isSearchModalOpen:l}=Y();return(s,o)=>(e(),t("header",ke,[a(me,{class:"hidden sm:block"}),a(n(L),{as:"div",class:"relative sm:hidden"},{default:r((()=>[a(n(w),{class:"icon-btn"},{default:r((()=>[we,a(n(y),{"aria-hidden":"true",class:"w-6 h-6"})])),_:1}),a(v,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r((()=>[a(n(_),{class:"fixed z-10 flex flex-col p-4 space-y-4 origin-top-left border rounded-md shadow-lg rtl:origin-top-right bg-light-bg border-light-border top-2 left-2 right-2 dark:bg-dark-elevation-5 dark:border-dark-border dark:shadow-dark-lg"},{default:r((()=>[a(n(S),null,{default:r((()=>[a(n(L),{as:"div"},{default:r((({open:e})=>[a(n(w),{class:"flex items-center text-body-small text-contrast-high"},{default:r((()=>[ye,a(n(C),{"aria-hidden":"true",class:["w-4 h-4 transition-transform transform",e?"":"rotate-180"]},null,8,["class"])])),_:2},1024),a(n(_),{class:"mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4"},{default:r((()=>[a(n(S),null,{default:r((()=>[_e])),_:1}),a(n(S),null,{default:r((()=>[Se])),_:1})])),_:1})])),_:1})])),_:1}),a(n(S),null,{default:r((()=>[a(n(L),{as:"div"},{default:r((({open:e})=>[a(n(w),{class:"flex items-center text-body-small text-contrast-high"},{default:r((()=>[Le,a(n(C),{"aria-hidden":"true",class:["w-4 h-4 transition-transform transform",e?"":"rotate-180"]},null,8,["class"])])),_:2},1024),a(n(_),{class:"mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4"},{default:r((()=>[a(n(S),null,{default:r((()=>[Ce])),_:1}),a(n(S),null,{default:r((()=>[Me])),_:1}),a(n(S),null,{default:r((()=>[je])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),a("nav",De,[a(n(L),{as:"div",class:"relative"},{default:r((({open:s})=>[a(n(w),{class:"flex items-center text-sm font-medium transition-colors text-light-text-contrast-medium hover:text-light-text-contrast-high dark:text-dark-text-contrast-medium dark:hover:text-dark-text-contrast-high"},{default:r((()=>[Oe,(e(),t("svg",{"aria-hidden":"true",class:["w-4 h-4 text-gray-500 transition-transform transform",s?"rotate-180":""],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[Be],2))])),_:2},1024),a(v,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r((()=>[a(n(_),{class:"absolute left-0 w-56 py-1 mt-2 origin-top-left rounded-md shadow-lg rtl:right-0 rtl:origin-top-right bg-light-bg dark:bg-dark-elevation-5 dark:shadow-dark-lg focus:outline-none"},{default:r((()=>[a(n(S),null,{default:r((({active:e})=>[a("a",{href:"https://twitter.com/ak_kamona",target:"_blank",class:["flex items-center px-4 py-2 text-body-small text-contrast-high",e?"bg-gray-100  dark:bg-dark-elevation-1":""]},[Ke,a(n(M),{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"})],2)])),_:1}),a(n(S),null,{default:r((({active:e})=>[a("a",{href:"https://github.com/Kamona-WD",target:"_blank",class:["flex items-center px-4 py-2 text-body-small text-contrast-high",e?"bg-gray-100  dark:bg-dark-elevation-1":""]},[We,a(n(M),{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"})],2)])),_:1})])),_:1})])),_:1})])),_:1}),a(n(L),{as:"div",class:"relative ml-4 rtl:ml-0 rtl:mr-4"},{default:r((({open:s})=>[a(n(w),{class:"flex items-center text-sm font-medium transition-colors text-light-text-contrast-medium hover:text-light-text-contrast-high dark:text-dark-text-contrast-medium dark:hover:text-dark-text-contrast-high"},{default:r((()=>[ze,(e(),t("svg",{"aria-hidden":"true",class:["w-4 h-4 text-gray-500 transition-transform transform",s?"rotate-180":""],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[Te],2))])),_:2},1024),a(v,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r((()=>[a(n(_),{class:"absolute left-0 w-full py-1 mt-2 origin-top-left rounded-md shadow-lg rtl:right-0 bg-light-bg min-w-max dark:bg-dark-elevation-5 dark:shadow-dark-lg focus:outline-none"},{default:r((()=>[a(n(S),null,{default:r((({active:e})=>[a("a",{href:"https://github.com/Kamona-WD/kwd-dashboard",target:"_blank",class:["flex items-center px-4 py-2 text-body-small text-contrast-high",e?"bg-gray-100  dark:bg-dark-elevation-1":""]},[Re,a(n(M),{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"})],2)])),_:1}),a(n(S),null,{default:r((({active:e})=>[a("a",{href:"https://github.com/Kamona-WD/starter-dashboard-layout",target:"_blank",class:["flex items-center px-4 py-2 text-body-small text-contrast-high",e?"bg-gray-100  dark:bg-dark-elevation-1":""]},[Ie,a(n(M),{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"})],2)])),_:1}),a(n(S),null,{default:r((({active:e})=>[a("a",{href:"https://github.com/Kamona-WD/starter-dashboard-layout-vue",target:"_blank",class:["flex items-center px-4 py-2 text-body-small text-contrast-high",e?"bg-gray-100  dark:bg-dark-elevation-1":""]},[Ue,a(n(M),{"aria-hidden":"true",class:"w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"})],2)])),_:1})])),_:1})])),_:1})])),_:1})]),a("div",He,[a("button",{onClick:o[1]||(o[1]=e=>l.value=!0),class:"hidden mr-4 sm:block icon-btn rtl:mr-0 rtl:ml-4"},[Ee,a(n(j),{"aria-hidden":"true",class:"w-6 h-6"})]),a(n(L),{as:"div",class:"relative flex items-center flex-shrink-0 p-2 sm:p-0"},{default:r((()=>[a(n(w),{class:"flex items-center rounded-lg focus:outline-none focus:ring focus:ring-primary focus:ring-offset-white focus:ring-offset-2 dark:focus:ring-offset-dark-elevation-2"},{default:r((()=>[Pe,$e])),_:1}),a(v,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r((()=>[a(n(_),{class:"absolute top-0 right-0 w-48 py-1 origin-top-right rounded-md shadow-lg bg-light-bg mt-14 focus:outline-none dark:bg-dark-elevation-5 dark:shadow-dark-lg"},{default:r((()=>[a(n(S),null,{default:r((({active:e})=>[a("a",{href:"#",class:["block px-4 py-2 text-sm text-contrast-high",e?"bg-gray-100 dark:bg-dark-elevation-1":""]}," Your Profile ",2)])),_:1}),a(n(S),null,{default:r((({active:e})=>[a("a",{href:"#",class:["block px-4 py-2 text-sm text-contrast-high",e?"bg-gray-100 dark:bg-dark-elevation-1":""]}," Settings ",2)])),_:1}),a(n(S),null,{default:r((({active:e})=>[a("a",{href:"#",class:["block px-4 py-2 text-sm text-contrast-high",e?"bg-gray-100 dark:bg-dark-elevation-1":""]}," Sign out ",2)])),_:1})])),_:1})])),_:1})])),_:1})])]))}},qe={class:"fixed inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-2 border-t border-light-border bg-light-bg sm:hidden dark:bg-dark-elevation-2 dark:border-dark-border"},Fe=a("span",{class:"sr-only"},"Open search modal",-1),Ge=a("span",{class:"sr-only"},"Open sidebar",-1),Je={expose:[],setup(r){const{isSidebarOpen:s,isSearchModalOpen:l}=Y();return(r,o)=>(e(),t("div",qe,[a("button",{onClick:o[1]||(o[1]=e=>l.value=!0),class:"icon-btn"},[Fe,a(n(j),{"aria-hidden":"true",class:"w-6 h-6"})]),a(me),a("button",{class:"icon-btn",onClick:o[2]||(o[2]=e=>s.value=!n(s))},[Ge,a(n(D),{"aria-hidden":"true",class:"w-6 h-6"})])]))}},Ne={expose:[],props:{show:{type:Boolean,required:!0}},emits:["close"],setup(s){const l=s,{isDark:i,isRTL:d}=Y(),{emit:c}=x(),u=()=>{c("close")};return o(l.show),(l,o)=>(e(),t(n(z),{appear:"",show:s.show},{default:r((()=>[a(n(W),{static:"",open:s.show,onClose:u,class:["fixed inset-0 z-50 flex items-start justify-center p-4 lg:items-center",{dark:n(i)}],dir:n(d)?"rtl":"ltr"},{default:r((()=>[a(n(O),{enter:"transition ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r((()=>[a(n(B),{class:"fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-75"})])),_:1}),a(n(O),{enter:"transition-transform ease-in-out","enter-from":"-translate-y-full opacity-0","enter-to":"translate-y-0 opacity-100",leave:"transition-transform ease-in-out","leave-from":"translate-y-0 opacity-100","leave-to":"-translate-y-full opacity-0"},{default:r((()=>[K(l.$slots,"default")])),_:3})])),_:1},8,["open","class","dir"])])),_:1},8,["show"]))}},Ve={class:"z-50 flex flex-col w-full min-h-0 transform border rounded-md shadow-lg bg-light-bg border-light-border sm:max-w-sm md:max-w-md dark:bg-dark-elevation-6 dark:border-dark-border dark:shadow-dark-lg"},Ye={class:"flex items-center justify-between flex-shrink-0 p-4 border-b border-light-border dark:border-dark-border"},Qe={action:"#",role:"search",class:"flex-1"},Xe={class:"relative"},Ze={id:"searchLabel",for:"searchInput",class:"absolute inset-y-0 flex items-center justify-center"},et=a("span",{class:"sr-only"}," Search ",-1),tt=a("input",{type:"text",id:"searchInput","aria-labelledby":"searchLabel",name:"search","x-ref":"searchInput",class:"py-2 pl-10 pr-4 rtl:pl-4 rtl:pr-10 focus:outline-none bg-light-bg dark:bg-dark-elevation-6 dark:text-dark-text-contrast-high",placeholder:"Search..."},null,-1),at=l(" Esc "),rt=a("span",{class:"sr-only"},"Close search modal",-1),st=a("div",{class:"flex-1 p-4 overflow-y-auto max-h-96"},[a("h2",{class:"text-light-text-contrast-medium dark:text-dark-text-contrast-medium"}," No recent searches "),a("div")],-1),lt={expose:[],props:{show:{type:Boolean,required:!0}},emits:["close"],setup(s){const{emit:l}=x(),o=()=>{l("close")};return(l,i)=>(e(),t(Ne,{show:s.show,onClose:o},{default:r((()=>[a("div",Ve,[a("div",Ye,[a("form",Qe,[a("div",Xe,[a("label",Ze,[et,a(n(j),{"aria-hidden":"true",class:"w-6 h-6 text-gray-400"})]),tt])]),a("button",{onClick:o,class:"flex-shrink-0 ml-2 icon-btn rtl:ml-0 rtl:mr-2"},[at,rt])]),st])])),_:1},8,["show"]))}},ot={class:"flex min-h-screen font-sans antialiased bg-light-bg text-contrast-hight dark:bg-dark-bg"},nt={class:"flex-1 px-4 pt-4"},it={expose:[],setup(r){const{isSidebarOpen:s,toggleSidebar:l,isDark:o,isRTL:i,isSearchModalOpen:d}=Y(),c=()=>{window.innerWidth<=1280&&(s.value=!1),window.innerWidth>=1280&&(s.value=!0)};return T((()=>{window.addEventListener("resize",c)})),R((()=>{window.removeEventListener("resize",c)})),(r,l)=>(e(),t("div",{class:{dark:n(o)},dir:n(i)?"rtl":"ltr"},[a("div",ot,[a(Je),a(ve),a("div",{class:["flex flex-col flex-1 pb-20 sm:pb-8 sm:pl-16 sm:rtl:pl-0 sm:rtl:pr-16",{"xl:pl-80 xl:rtl:pl-0 xl:rtl:pr-80":n(s)}]},[a(Ae),a("div",nt,[K(r.$slots,"default")])],2)]),a(lt,{show:n(d),onClose:l[1]||(l[1]=e=>d.value=!1)},null,8,["show"])],10,["dir"]))}},dt=a("div",{class:"flex items-center justify-center h-full"},[a("h1",{class:"title-1 text-contrast-high"},"Soon!")],-1);var ct=[{name:"Home",path:"/",component:E},...[{path:"/dashboard/pages/blank",name:"Blank",component:{expose:[],setup:a=>(a,s)=>(e(),t(it,null,{default:r((()=>[dt])),_:1}))},meta:{layout:"AppLayout"}}]];const ut=I({history:U(),routes:ct}),mt={};mt.render=function(a,r){const l=s("router-view");return e(),t(l)};const ht=H(mt);ht.use(ut),ht.mount("#app");
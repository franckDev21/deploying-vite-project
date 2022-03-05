var S=Object.defineProperty,k=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,y=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&g(e,s,t[s]);if(v)for(var s of v(t))w.call(t,s)&&g(e,s,t[s]);return e},$=(e,t)=>k(e,A(t));import{r as p,o as d,c as _,a as r,b as i,w as m,F as C,d as u,m as b,e as T,t as f,f as E,v as H,g as L,n as M,p as N,h as x,i as O,j as V,k as j,l as q}from"./vendor.8d666129.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};B();var l=(e,t)=>{const s=e.__vccOpts||e;for(const[c,o]of t)s[c]=o;return s};const D={},R=u("Home"),W=u(" | "),P=u("About");function z(e,t){const s=p("router-link"),c=p("router-view");return d(),_(C,null,[r("header",null,[i(s,{to:{name:"home"}},{default:m(()=>[R]),_:1}),W,i(s,{to:{name:"about"}},{default:m(()=>[P]),_:1})]),i(c)],64)}var G=l(D,[["render",z]]);const K={name:"Home",data(){return{loading:!1,firstname:""}},mounted(){this.firstname=this.user.firstname},computed:b(["user"]),methods:$(y({},T(["setFirstname"])),{async changeName(){this.loading=!0,setTimeout(()=>{this.setFirstname(this.firstname),this.loading=!1},3e3)}})},U={class:"home"},J=u("Welcome "),Q={class:"name"};function X(e,t,s,c,o,n){return d(),_("div",U,[r("h5",null,[J,r("span",Q,f(e.user.firstname),1)]),r("form",null,[E(r("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.firstname=a),type:"text",placeholder:" your firstname..."},null,512),[[H,o.firstname]]),r("button",{onClick:t[1]||(t[1]=L((...a)=>n.changeName&&n.changeName(...a),["prevent"])),class:M(o.loading?"load":"")},f(o.loading?"loading...":"change your firstname"),3)])])}var Y=l(K,[["render",X],["__scopeId","data-v-33f61eaf"]]),Z="/deploying-vite-project/assets/profil.0d52a840.jpg";const ee={name:"Card",props:{firstname:{type:String,required:!0}}},h=e=>(N("data-v-41c9dae2"),e=e(),x(),e),te={class:"card"},oe={class:"container"},se=h(()=>r("div",{class:"card__img"},[r("img",{src:Z,alt:"profil"})],-1)),ne={class:"card__content"},re=h(()=>r("div",{class:"card__sub-title"},"Whritten by",-1)),ae={class:"card__name"},ce=h(()=>r("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid excepturi porro voluptatibus. ",-1));function ie(e,t,s,c,o,n){return d(),_("div",te,[r("div",oe,[se,r("div",ne,[re,r("h2",ae,f(s.firstname),1),ce])])])}var de=l(ee,[["render",ie],["__scopeId","data-v-41c9dae2"]]);const _e={name:"About",components:{Card:de},computed:b(["user"])},ue={class:"about"};function le(e,t,s,c,o,n){const a=p("Card");return d(),_("div",ue,[i(a,{firstname:e.user.firstname},null,8,["firstname"])])}var pe=l(_e,[["render",le]]);const me={name:"NotFound"},F=e=>(N("data-v-17ccdc2b"),e=e(),x(),e),fe={class:"not-found"},he=F(()=>r("h5",{class:"title"},"Not Fount",-1)),ve=F(()=>r("div",{class:"code"},"404",-1)),ge=u("back to home page");function ye(e,t,s,c,o,n){const a=p("router-link");return d(),_("div",fe,[he,ve,i(a,{to:"/"},{default:m(()=>[ge]),_:1})])}var $e=l(me,[["render",ye],["__scopeId","data-v-17ccdc2b"]]);const be=[{name:"home",component:Y,path:"/"},{name:"about",component:pe,path:"/about"},{name:"NotFound",path:"/:pathMatch(.*)",component:$e}],Ne=O({routes:be,history:V()}),xe=j({state:{user:{id:1,firstname:"@franckDev"}},getters:{user:e=>e.user},mutations:{SET_FIRSTNAME:(e,t)=>e.user.firstname=t},actions:{setFirstname:({commit:e},t)=>e("SET_FIRSTNAME",t)},modules:{}});q(G).use(Ne).use(xe).mount("#app");

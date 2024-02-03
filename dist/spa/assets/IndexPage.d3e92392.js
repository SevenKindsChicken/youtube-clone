import{u as pe,d as Ae,Q as $,e as E,T as V,s as J,f as k,h as te,i as K,j as B,k as ae}from"./QDrawer.e45cea70.js";import{Q as Se}from"./QBtn.4f07206e.js";import{Q as ge}from"./QScrollObserver.fb10b871.js";import{c as ye,a as _e,Q as ze}from"./use-router-link.b1c36349.js";import{r as c,c as r,O as we,w as qe,F as Ce,Q as Me,x as Qe,h,t as Y,g as Ee,_ as x,k as v,R as y,q as s,n as u,S as T,T as z,U as g,m as I,V as O,W as j,j as H,X}from"./index.1e4e1be4.js";import{Q as Te,a as Ie,b as De,M as ke,c as Be}from"./MenuTab.7a55d83b.js";const Z=["vertical","horizontal"],P={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},W={prevent:!0,mouse:!0,mouseAllDir:!0},ee=l=>l>=250?50:Math.ceil(l/5);var He=ye({name:"QScrollArea",props:{...pe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:w,emit:q}){const b=c(!1),n=c(!1),f=c(!1),o={vertical:c(0),horizontal:c(0)},e={vertical:{ref:c(null),position:c(0),size:c(0)},horizontal:{ref:c(null),position:c(0),size:c(0)}},{proxy:m}=Ee(),_=Ae(l,m.$q);let d=null,D;const p=c(null),le=r(()=>"q-scrollarea"+(_.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=r(()=>{const t=e.vertical.size.value-o.vertical.value;if(t<=0)return 0;const a=E(e.vertical.position.value/t,0,1);return Math.round(a*1e4)/1e4}),e.vertical.thumbHidden=r(()=>(l.visible===null?f.value:l.visible)!==!0&&b.value===!1&&n.value===!1||e.vertical.size.value<=o.vertical.value+1),e.vertical.thumbStart=r(()=>e.vertical.percentage.value*(o.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=r(()=>Math.round(E(o.vertical.value*o.vertical.value/e.vertical.size.value,ee(o.vertical.value),o.vertical.value))),e.vertical.style=r(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=r(()=>{const t=e.horizontal.size.value-o.horizontal.value;if(t<=0)return 0;const a=E(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(a*1e4)/1e4}),e.horizontal.thumbHidden=r(()=>(l.visible===null?f.value:l.visible)!==!0&&b.value===!1&&n.value===!1||e.horizontal.size.value<=o.horizontal.value+1),e.horizontal.thumbStart=r(()=>e.horizontal.percentage.value*(o.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=r(()=>Math.round(E(o.horizontal.value*o.horizontal.value/e.horizontal.size.value,ee(o.horizontal.value),o.horizontal.value))),e.horizontal.style=r(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const oe=r(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),ie=[[V,t=>{R(t,"vertical")},void 0,{vertical:!0,...W}]],ne=[[V,t=>{R(t,"horizontal")},void 0,{horizontal:!0,...W}]];function L(){const t={};return Z.forEach(a=>{const i=e[a];t[a+"Position"]=i.position.value,t[a+"Percentage"]=i.percentage.value,t[a+"Size"]=i.size.value,t[a+"ContainerSize"]=o[a].value}),t}const F=we(()=>{const t=L();t.ref=m,q("scroll",t)},0);function N(t,a,i){if(Z.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?J:k)(p.value,a,i)}function re({height:t,width:a}){let i=!1;o.vertical.value!==t&&(o.vertical.value=t,i=!0),o.horizontal.value!==a&&(o.horizontal.value=a,i=!0),i===!0&&C()}function se({position:t}){let a=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,a=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,a=!0),a===!0&&C()}function ue({height:t,width:a}){e.horizontal.size.value!==a&&(e.horizontal.size.value=a,C()),e.vertical.size.value!==t&&(e.vertical.size.value=t,C())}function R(t,a){const i=e[a];if(t.isFirst===!0){if(i.thumbHidden.value===!0)return;D=i.position.value,n.value=!0}else if(n.value!==!0)return;t.isFinal===!0&&(n.value=!1);const S=P[a],Q=o[a].value,de=(i.size.value-Q)/(Q-i.thumbSize.value),fe=t.distance[S.dist],be=D+(t.direction===S.dir?1:-1)*fe*de;G(be,a)}function U(t,a){const i=e[a];if(i.thumbHidden.value!==!0){const S=t[P[a].offset];if(S<i.thumbStart.value||S>i.thumbStart.value+i.thumbSize.value){const Q=S-i.thumbSize.value/2;G(Q/o[a].value*i.size.value,a)}i.ref.value!==null&&i.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function ce(t){U(t,"vertical")}function ve(t){U(t,"horizontal")}function C(){b.value=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,b.value=!1},l.delay),l.onScroll!==void 0&&F()}function G(t,a){p.value[P[a].scroll]=t}let A=null;function he(){A!==null&&clearTimeout(A),A=setTimeout(()=>{A=null,f.value=!0},m.$q.platform.is.ios?50:0)}function me(){A!==null&&(clearTimeout(A),A=null),f.value=!1}let M=null;return qe(()=>m.$q.lang.rtl,t=>{p.value!==null&&k(p.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),Ce(()=>{M={top:e.vertical.position.value,left:e.horizontal.position.value}}),Me(()=>{if(M===null)return;const t=p.value;t!==null&&(k(t,M.left),J(t,M.top))}),Qe(F.cancel),Object.assign(m,{getScrollTarget:()=>p.value,getScroll:L,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:N,setScrollPercentage(t,a,i){N(t,a*(e[t].size.value-o[t].value)*(t==="horizontal"&&m.$q.lang.rtl===!0?-1:1),i)}}),()=>h("div",{class:le.value,onMouseenter:he,onMouseleave:me},[h("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[h("div",{class:"q-scrollarea__content absolute",style:oe.value},_e(w.default,[h($,{debounce:0,onResize:ue})])),h(ge,{axis:"both",onScroll:se})]),h($,{debounce:0,onResize:re}),h("div",{class:e.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:ce}),h("div",{class:e.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:ve}),Y(h("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),ie),Y(h("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),ne)])}});const Pe={data(){return{videoData:this.videoInfo}},props:{videoInfo:Object},async mounted(){console.log("videoInfo",this.videoInfo)}},Oe={class:"q-pa-md"},je=g("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1);function xe(l,w,q,b,n,f){return v(),y("div",Oe,[s(Te,{src:n.videoData.thumbnail,ratio:16/9},null,8,["src"]),s(De,{class:"my-card",flat:""},{default:u(()=>[s(te,null,{default:u(()=>[s(K,{avatar:""},{default:u(()=>[s(Ie,{size:"lg"},{default:u(()=>[je]),_:1})]),_:1}),s(K,null,{default:u(()=>[s(B,null,{default:u(()=>[T(z(n.videoData.title),1)]),_:1}),s(B,{caption:""},{default:u(()=>[T(z(n.videoData.channel),1)]),_:1}),s(B,{caption:""},{default:u(()=>[T(z(n.videoData.views),1)]),_:1})]),_:1})]),_:1})]),_:1})])}var Le=x(Pe,[["render",xe]]);const Fe={data(){return{main:[{name:"Home",icon:"home"},{name:"Stories",icon:"shortcut"},{name:"Subscription",icon:"subscriptions"},{name:"You",icon:"play_circle_outline"}]}}},Ne={class:"q-pt-sm",style:{"font-size":"11px"}};function Re(l,w,q,b,n,f){return v(),I(ae,null,{default:u(()=>[(v(!0),y(j,null,O(n.main,(o,e)=>(v(),y("div",{class:"text-center q-py-sm",key:e,clickable:""},[s(ze,{color:"blue-grey-10",size:"sm",name:o.icon},null,8,["name"]),g("div",Ne,z(o.name),1)]))),128))]),_:1})}var Ue=x(Fe,[["render",Re]]);const Ge={name:"IndexPage",components:{HomeThumbnail:Le,MenuTab:ke,SideMenu:Ue},async mounted(){},data(){return{darkMode:!1,leftDrawerOpen:!1,hideSideMenu:!1,isMobile:this.$q.platform.is.mobile,tabsInfo:{main:[{name:"Home",icon:"home"},{name:"Stories",icon:"shortcut"},{name:"Subscription",icon:"subscriptions"},{name:"You",icon:"play_circle_outline"}]},tags:["All","Film criticism","Speed painting","Music","Live","Mixes","Gaming","Podcasts","Movie trailer","Comedy","Watched","Zombies","Recently uploaded","Anime","New to you"],videos:[{title:"THE RESIDENT EVIL MOVIES - Theyre So Bad I Cant Help But Love Them",channel:"Elvis The Alien",icon:"person",views:"8.4M views  2 years ago",thumbnail:"https://i.ytimg.com/vi/Sk5cUoSRaPE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAIgGcvSHDxlxm40JBJdlZC8D4jag",url:"https://www.youtube.com/embed/Sk5cUoSRaPE?si=lLSifSgCY2F0O1Js"},{title:"when they introduce a new celebrity",channel:"Daniel Thrasher",icon:"person",views:"527K views . 1 month ago",thumbnail:"https://i.ytimg.com/vi/GBiVXdxRoQY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDBV6s-3-9n1TSGSgrvRuptT_mApw",url:"https://www.youtube.com/embed/GBiVXdxRoQY?si=VizweQTljjOId-_E"},{title:"Disturbing Posts I Found on Social Media",channel:"LazyMasquerade",icon:"person",views:"705K views . 7 months ago",thumbnail:"https://i.ytimg.com/vi/sYXZmxNyHIk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGGHlvUgBYqUgAdx-b2yQmIcaTNw",url:"https://www.youtube.com/embed/sYXZmxNyHIk?si=QIGR0U_SX-w9Vim1"},{title:"Carnaval Del Barrio - In The Heights Motion Picture Soundtrack (Official Audio)",channel:"Atlantic Records",icon:"person",views:"3.1M views . 2 years ago",thumbnail:"https://i.ytimg.com/vi/Tmb6taDh1sQ/hqdefault.jpg?sqp=-oaymwE8CKgBEF5IWvKriqkDLwgBFQAAAAAYASUAAMhCPQCAokN4AfABAfgB1AaAAuADigIMCAAQARhyIE4oNDAP&rs=AOn4CLD98sEuGDwucOWYCMuCBIgHJt1r8A",url:"https://www.youtube.com/embed/J7hAaak0QBs?si=XqZv_0rdrLBCU67C"},{title:"final fantasy \u2077 ~ lofi hip hop mix",channel:"Cozy",icon:"person",views:"993K views . 4 years ago",thumbnail:"https://i.ytimg.com/vi/EQwOKQKv4Pg/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZSBVKD8wDw==&rs=AOn4CLBL6AEh4wKiAjC4EAm5d1SaaG9XmQ"},{title:"Memory - Elaine Paige | Cats The Musical",channel:"The Shows Must Go On!",icon:"person",views:"7.5M views . 3 years ago ",thumbnail:"https://i.ytimg.com/vi/mdBVJbzkoqo/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAyHnjAknhvomUMHi_AGUkZ6qfwBA",url:"https://www.youtube.com/embed/mdBVJbzkoqo?si=xZKdCW24G3NpNxS6"},{title:"When He Sees Me",channel:"Kimiko Glenn",views:"10M views . 6 years ago",thumbnail:"https://i.ytimg.com/vi/JeQZY9_451w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAwK0PshcVJmWKoTA0H4sNaPh3ZNQ",url:"https://www.youtube.com/embed/J7hAaak0QBs?si=XqZv_0rdrLBCU67C"},{title:"3 Scary TRUE Valentines Day Horror Stories",channel:"Mr. Nightmare",views:"73,076 views . 4 hours ago",thumbnail:"https://i.ytimg.com/vi/MzC9uqtHfxU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDJ62xL0SBaBrc1swG7T4J5s87YqA",url:"https://www.youtube.com/embed/MzC9uqtHfxU?si=WLTfAAovLnFjs__N"}]}},methods:{hideSide(l){console.log("menutab: ",l),this.hideSideMenu=l}}},$e={class:"row q-pt-lg full-width"},Ve={class:"col",style:{}},Je={class:"row no-wrap q-mx-lg q-pb-sm"},Ke={class:"q-px-xs"},Ye={class:"q-pa-md row"};function Xe(l,w,q,b,n,f){const o=H("MenuTab"),e=H("SideMenu"),m=H("HomeThumbnail");return v(),I(Be,{class:"flex container"},{default:u(()=>[s(o,{onToggleDrawer:f.hideSide},null,8,["onToggleDrawer"]),g("div",$e,[n.isMobile?X("",!0):(v(),I(ae,{key:0},{default:u(()=>[n.hideSideMenu?X("",!0):(v(),I(te,{key:0,class:"col-1 justice-left q-pt-sm"},{default:u(()=>[s(e)]),_:1}))]),_:1})),g("div",Ve,[g("div",Je,[(v(!0),y(j,null,O(n.tags,(_,d)=>(v(),y("span",{key:d},[s(Se,{unelevated:"",size:"sm",rounded:"",class:"q-pa-sm",color:"grey-3","text-color":"black"},{default:u(()=>[g("div",Ke,z(_),1)]),_:2},1024),T(" \xA0 ")]))),128))]),s(He,{style:{height:"90%"}},{default:u(()=>[g("div",Ye,[(v(!0),y(j,null,O(n.videos,(_,d)=>(v(),y("div",{class:"col-12 col-md-4",key:d},[s(m,{videoInfo:_,onClick:D=>l.$router.push({path:"/watch/"+d})},null,8,["videoInfo","onClick"])]))),128))])]),_:1})])])]),_:1})}var ot=x(Ge,[["render",Xe]]);export{ot as default};

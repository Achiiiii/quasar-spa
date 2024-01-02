import{r as _,E as X,o as E,l as w,D as M,n as k,h as x,g as P,x as D,c as B,$ as Y,a0 as j,v as m,a1 as F,V as h,a2 as y,_ as O,X as g,Y as z,W as b,y as N}from"./index.8f5c9d50.js";import{c as $,j as H,k as U}from"./QBtn.8b173f5c.js";function V(){const i=_(!X.value);return i.value===!1&&E(()=>{i.value=!0}),i}const S=typeof ResizeObserver!="undefined",R=S===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Z=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(i,{emit:n}){let r=null,a,e={width:-1,height:-1};function t(u){u===!0||i.debounce===0||i.debounce==="0"?s():r===null&&(r=setTimeout(s,i.debounce))}function s(){if(r!==null&&(clearTimeout(r),r=null),a){const{offsetWidth:u,offsetHeight:o}=a;(u!==e.width||o!==e.height)&&(e={width:u,height:o},n("resize",e))}}const{proxy:l}=P();if(S===!0){let u;const o=d=>{a=l.$el.parentNode,a?(u=new ResizeObserver(t),u.observe(a),s()):d!==!0&&k(()=>{o(!0)})};return E(()=>{o()}),w(()=>{r!==null&&clearTimeout(r),u!==void 0&&(u.disconnect!==void 0?u.disconnect():a&&u.unobserve(a))}),M}else{let d=function(){r!==null&&(clearTimeout(r),r=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",t,D.passive),o=void 0)},c=function(){d(),a&&a.contentDocument&&(o=a.contentDocument.defaultView,o.addEventListener("resize",t,D.passive),s())};const u=V();let o;return E(()=>{k(()=>{a=l.$el,a&&c()})}),w(d),l.trigger=t,()=>{if(u.value===!0)return x("object",{style:R.style,tabindex:-1,type:"text/html",data:R.url,"aria-hidden":"true",onLoad:c})}}}});const ee={dark:{type:Boolean,default:null}};function te(i,n){return B(()=>i.dark===null?n.dark.isActive:i.dark)}function ne(){let i=null;const n=P();function r(){i!==null&&(clearTimeout(i),i=null)}return Y(r),w(r),{removeTimeout:r,registerTimeout(a,e){r(),H(n)===!1&&(i=setTimeout(a,e))}}}const T={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},I=Object.keys(T);T.all=!0;function A(i){const n={};for(const r of I)i[r]===!0&&(n[r]=!0);return Object.keys(n).length===0?T:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Q=["INPUT","TEXTAREA"];function L(i,n){return n.event===void 0&&i.target!==void 0&&i.target.draggable!==!0&&typeof n.handler=="function"&&Q.includes(i.target.nodeName.toUpperCase())===!1&&(i.qClonedBy===void 0||i.qClonedBy.indexOf(n.uid)===-1)}function K(){if(window.getSelection!==void 0){const i=window.getSelection();i.empty!==void 0?i.empty():i.removeAllRanges!==void 0&&(i.removeAllRanges(),j.is.mobile!==!0&&i.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function C(i,n,r){const a=z(i);let e,t=a.left-n.event.x,s=a.top-n.event.y,l=Math.abs(t),u=Math.abs(s);const o=n.direction;o.horizontal===!0&&o.vertical!==!0?e=t<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?e=s<0?"up":"down":o.up===!0&&s<0?(e="up",l>u&&(o.left===!0&&t<0?e="left":o.right===!0&&t>0&&(e="right"))):o.down===!0&&s>0?(e="down",l>u&&(o.left===!0&&t<0?e="left":o.right===!0&&t>0&&(e="right"))):o.left===!0&&t<0?(e="left",l<u&&(o.up===!0&&s<0?e="up":o.down===!0&&s>0&&(e="down"))):o.right===!0&&t>0&&(e="right",l<u&&(o.up===!0&&s<0?e="up":o.down===!0&&s>0&&(e="down")));let d=!1;if(e===void 0&&r===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,d=!0,e==="left"||e==="right"?(a.left-=t,l=0,t=0):(a.top-=s,u=0,s=0)}return{synthetic:d,payload:{evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:a,direction:e,isFirst:n.event.isFirst,isFinal:r===!0,duration:Date.now()-n.event.time,distance:{x:l,y:u},offset:{x:t,y:s},delta:{x:a.left-n.event.lastX,y:a.top-n.event.lastY}}}}let W=0;var ie=U({name:"touch-pan",beforeMount(i,{value:n,modifiers:r}){if(r.mouse!==!0&&m.has.touch!==!0)return;function a(t,s){r.mouse===!0&&s===!0?N(t):(r.stop===!0&&g(t),r.prevent===!0&&O(t))}const e={uid:"qvtp_"+W++,handler:n,modifiers:r,direction:A(r),noop:M,mouseStart(t){L(t,e)&&F(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(L(t,e)){const s=t.target;h(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,s){if(m.is.firefox===!0&&y(i,!0),e.lastEvt=t,s===!0||r.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const o=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&O(o),t.cancelBubble===!0&&g(o),Object.assign(o,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:o}}g(t)}const{left:l,top:u}=z(t);e.event={x:l,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:u}},move(t){if(e.event===void 0)return;const s=z(t),l=s.left-e.event.x,u=s.top-e.event.y;if(l===0&&u===0)return;e.lastEvt=t;const o=e.event.mouse===!0,d=()=>{a(t,o);let f;r.preserveCursor!==!0&&r.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),K(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),o===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{q(),p()},50):q()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&a(t,e.event.mouse);const{payload:f,synthetic:p}=C(t,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&d(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=p===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||o===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){d(),e.event.detected=!0,e.move(t);return}const c=Math.abs(l),v=Math.abs(u);c!==v&&(e.direction.horizontal===!0&&c>v||e.direction.vertical===!0&&c<v||e.direction.up===!0&&c<v&&u<0||e.direction.down===!0&&c<v&&u>0||e.direction.left===!0&&c>v&&l<0||e.direction.right===!0&&c>v&&l>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,s){if(e.event!==void 0){if(b(e,"temp"),m.is.firefox===!0&&y(i,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(C(t===void 0?e.lastEvt:t,e).payload);const{payload:l}=C(t===void 0?e.lastEvt:t,e,!0),u=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(i.__qtouchpan=e,r.mouse===!0){const t=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";h(e,"main",[[i,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[i,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[i,"touchmove","noop","notPassiveCapture"]])},updated(i,n){const r=i.__qtouchpan;r!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&r.end(),r.handler=n.value),r.direction=A(n.modifiers))},beforeUnmount(i){const n=i.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),b(n,"main"),b(n,"temp"),m.is.firefox===!0&&y(i,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete i.__qtouchpan)}});function re(i,n,r){return r<=n?n:Math.min(r,Math.max(n,i))}export{Z as Q,ie as T,te as a,ne as b,re as c,K as d,A as g,L as s,ee as u};
import{c as s,F as m}from"./hoisted.CrT1aVKQ.js";function h(r,i=3e3){let l;return function(...n){l&&clearTimeout(l),l=setTimeout(()=>r(...n),i)}}function f(r,i,l={leading:!0,trailing:!0}){let n=0,a=null,d=null;const{leading:u=!0,trailing:t=!0}=l;return function(...c){const o=Date.now();!n&&!u&&(n=o);const e=i-(o-n);e<=0?(a&&(clearTimeout(a),a=null),n=o,r(...c)):t&&(a&&clearTimeout(a),a=setTimeout(()=>{n=u?Date.now():0,a=null,t&&d&&(r(...d),d=null)},e)),d=c}}async function g(r){return await new Promise(i=>{setTimeout(()=>{i()},r)})}const y=r=>{const i=document.querySelector(r);if(!i)return;let l=[];const n=f(()=>{let t=l.length-1;for(t;t>=0&&!(l[t].getBoundingClientRect().top<=80);t-=1);const c=l[t];Array.from(i.querySelector(".outlines")?.children??[]).forEach(o=>{o.getAttribute("data-anchor-id")===c?.id?o.classList.add("!opacity-100"):o.classList.remove("!opacity-100")})},200);document.addEventListener("scroll",n,{passive:!0});const d=(()=>{const t=()=>{const e=o.querySelector(".outlines");e&&(e?.style.display==="none"?e.style.removeProperty("display"):e.style.display="none")},c=s("div",{class:"outlines flex flex-col text-sm gap-1 py-2 max-h-[60vh] overflow-y-auto <md:hidden break-words"}),o=s("div",{class:"fixed top-[84px] right-[4px] bg-modal p-2 rounded shadow-lg md:shadow-none md:sticky md:top-[88px] <md:[&:focus-within_.outlines]:flex flex flex-col <md:w-auto w-[240px]"},s("div",{class:"flex <md:justify-end",tabIndex:-1},s("button",{onClick:t,title:"toggle outline",class:"<md:hidden"},s("div",{class:"i-ri:menu-fold-4-fill"})),s("button",{title:"toggle outline",class:"md:hidden"},s("div",{class:"i-ri:menu-fold-4-fill"}))),c);return i.replaceChildren(o),c})(),u=()=>{const t=document.querySelector(".ud-root");if(!t)return;const o=["h1","h2","h3","h4","h5","h6"].map(e=>`${e}`).join(", ");l=Array.from(t?.querySelectorAll(o)??[]),d?.replaceChildren(s(m,null,l.map(e=>s("a",{tabIndex:-1,href:`#${e.id}`,"data-anchor-id":e.id,"data-anchor-tag":e.tagName,class:"opacity-50 hover:opacity-80 min-w-[180px]"},e.textContent))))};return u(),n(),u};export{h as d,y as m,g as s,f as t};

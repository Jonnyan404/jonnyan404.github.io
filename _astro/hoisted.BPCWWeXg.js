import{g as u,c as e}from"./hoisted.CrT1aVKQ.js";import{m as g}from"./index.B4dHDQgf.js";import"./auth.vwv6Ax4x.js";const p=async(c,d)=>{const t=document.querySelector(c);if(!t)return;const f=t?.getAttribute(d),a=new URL(location.href).searchParams.get("fromTag");if(!a)return;const o=decodeURIComponent(a),r=(await u()).filter(s=>s.tags.includes(o)),l=r.findIndex(s=>s.id===f),n=r[l+1],i=r[l-1];t?.replaceChildren(...[n?e("a",{href:`/post/${n.id}?fromTag=${o}`,class:"flex items-center gap-1 text-blue cursor-pointer flex-[45%]"},e("div",{class:"i-ri:arrow-left-double-line w-5 h-5 flex-shrink-0"}),e("div",null,n.title)):e("div",null),i?e("a",{href:`/post/${i.id}?fromTag=${o}`,class:"flex items-center justify-end gap-1 text-blue cursor-pointer flex-[45%]"},e("div",null,i.title),e("div",{class:"i-ri:arrow-right-double-line w-5 h-5 flex-shrink-0"})):e("div",null)].filter(Boolean))};p(".navigator","data-page-id");g(".outline-wrapper");

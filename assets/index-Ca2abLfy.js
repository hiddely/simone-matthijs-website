(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="https://script.google.com/macros/s/AKfycbwA87gywIIEZsksXZerXpMIKtNc6VUwUWcPlswCuK9mPOpY989ITjTVLRkK5VyqDY3MHw/exec",i=document.querySelector("#signup-form"),l=i.parentElement,c=i.querySelector('button[type="submit"]');function d(o,r,s){const n=o==="success"?"♥":"✕",e=o==="success"?"text-amber-700/40":"text-red-700";l.innerHTML=`
    <div class="text-center py-12 fade-in">
      <div class="${e} text-6xl mb-6">${n}</div>
      <h2 class="text-2xl font-serif text-amber-900 mb-3">${r}</h2>
      ${s?`<p class="text-amber-700/70 font-serif mb-6">${s}</p>`:""}
      ${o==="error"?`
        <button
          id="retry-button"
          class="mt-4 bg-gradient-to-b from-amber-700 to-amber-800 text-[#fffffe] px-8 py-3 font-serif tracking-widest uppercase text-sm hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg border border-amber-900/20"
          style="border-radius: 0;"
        >
          Opnieuw proberen
        </button>
      `:""}
    </div>
  `,o==="error"&&document.querySelector("#retry-button")?.addEventListener("click",()=>{location.reload()})}i.addEventListener("submit",async o=>{o.preventDefault(),c.disabled=!0,c.textContent="Bezig met versturen...";try{const r=new FormData(i),s={name:r.get("name"),email:r.get("email"),address:r.get("address")};await fetch(u,{method:"POST",mode:"no-cors",body:new URLSearchParams(s),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),d("success","Bedankt!","Meer informatie volgt binnenkort.")}catch(r){console.error("Error submitting form:",r),d("error","Er is iets misgegaan","Probeer het later opnieuw of neem contact met ons op."),c.disabled=!1,c.textContent="Versturen"}});

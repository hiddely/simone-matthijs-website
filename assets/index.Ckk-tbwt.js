(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function b(){return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Simone & Matthijs//Bruiloft//NL","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT","DTSTART;VALUE=DATE:20260821","DTEND;VALUE=DATE:20260824","SUMMARY:Simone & Matthijs Gaan Trouwen!","DESCRIPTION:Save the Date - Bruiloft van Simone en Matthijs","LOCATION:Château Soulac, Frankrijk","STATUS:CONFIRMED","SEQUENCE:0",`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").split(".")[0]}Z`,`UID:${Date.now()}@simonematthijsgaantrouwen.nl`,"END:VEVENT","END:VCALENDAR"].join(`\r
`)}function f(){const o=b(),e=new Blob([o],{type:"text/calendar;charset=utf-8"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="simone-matthijs-wedding.ics",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(r.href)}const u=document.querySelector("#date-clickable");u&&u.addEventListener("click",f);const p="https://script.google.com/macros/s/AKfycbwA87gywIIEZsksXZerXpMIKtNc6VUwUWcPlswCuK9mPOpY989ITjTVLRkK5VyqDY3MHw/exec",s=document.querySelector("#signup-form"),h=s.parentElement,a=s.querySelector('button[type="submit"]');function l(){const o=s.querySelector("#name"),e=s.querySelector("#email"),r=s.querySelector("#address"),c=o.value.trim()!==""&&e.value.trim()!==""&&r.value.trim()!=="";a.disabled=!c,c?a.classList.remove("opacity-50","cursor-not-allowed"):a.classList.add("opacity-50","cursor-not-allowed")}a.disabled=!0;a.classList.add("opacity-50","cursor-not-allowed");const w=s.querySelector("#name"),g=s.querySelector("#email"),v=s.querySelector("#address");w.addEventListener("input",l);g.addEventListener("input",l);v.addEventListener("input",l);function d(o,e,r){const c=o==="success"?"♥":"✕",t=o==="success"?"text-amber-700/40":"text-red-700";h.innerHTML=`
    <div class="text-center py-12 fade-in">
      <div class="${t} text-6xl mb-6">${c}</div>
      <h2 class="text-2xl font-serif text-amber-900 mb-3">${e}</h2>
      ${r?`<p class="text-amber-700/70 font-serif mb-6">${r}</p>`:""}
      ${o==="success"?`
        <button
          id="add-to-calendar-success"
          class="mt-6 inline-flex items-center gap-2 bg-gradient-to-b from-amber-700 to-amber-800 text-[#fffffe] px-8 py-3 font-serif tracking-widest uppercase text-sm hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg border border-amber-900/20"
          style="border-radius: 0;"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Voeg toe aan kalender</span>
        </button>
        <br>
        <button
          id="back-button"
          class="mt-4 bg-gradient-to-b from-amber-600 to-amber-700 text-[#fffffe] px-8 py-3 font-serif tracking-widest uppercase text-sm hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg border border-amber-900/20"
          style="border-radius: 0;"
        >
          Nog een adres opsturen
        </button>
      `:""}
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
  `,o==="success"&&(document.querySelector("#add-to-calendar-success")?.addEventListener("click",f),document.querySelector("#back-button")?.addEventListener("click",()=>{history.pushState(null,"",window.location.pathname),m()})),o==="error"&&document.querySelector("#retry-button")?.addEventListener("click",()=>{history.pushState(null,"",window.location.pathname),m()})}function m(){location.reload()}function y(){const e=new URLSearchParams(window.location.search).get("state");e==="success"?d("success","Bedankt!","Meer informatie volgt binnenkort."):e==="error"?d("error","Er is iets misgegaan","Probeer het later opnieuw of neem contact met ons op."):s.parentElement||location.reload()}window.addEventListener("popstate",()=>{location.reload()});y();s.addEventListener("submit",async o=>{o.preventDefault(),a.disabled=!0,a.textContent="Bezig met versturen...";try{const e=new FormData(s),r={name:e.get("name"),email:e.get("email"),address:e.get("address")};await fetch(p,{method:"POST",mode:"no-cors",body:new URLSearchParams(r),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),history.pushState({state:"success"},"","?state=success"),d("success","Bedankt!","Meer informatie volgt binnenkort.")}catch(e){console.error("Error submitting form:",e),history.pushState({state:"error"},"","?state=error"),d("error","Er is iets misgegaan","Probeer het later opnieuw of neem contact met ons op."),a.disabled=!1,a.textContent="Versturen"}});

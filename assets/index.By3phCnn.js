(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(){return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Simone & Matthijs//Bruiloft//NL","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT","DTSTART;VALUE=DATE:20260821","DTEND;VALUE=DATE:20260824","SUMMARY:Simone & Matthijs Gaan Trouwen!","DESCRIPTION:Save the Date - Bruiloft van Simone en Matthijs","LOCATION:Locatie geheim","STATUS:CONFIRMED","SEQUENCE:0",`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").split(".")[0]}Z`,`UID:${Date.now()}@simonematthijsgaantrouwen.nl`,"END:VEVENT","END:VCALENDAR"].join(`\r
`)}function u(){const n=m(),t=new Blob([n],{type:"text/calendar;charset=utf-8"}),r=document.createElement("a");r.href=URL.createObjectURL(t),r.download="simone-matthijs-wedding.ics",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(r.href)}const d=document.querySelector("#date-clickable");d&&d.addEventListener("click",u);const f="https://script.google.com/macros/s/AKfycbwA87gywIIEZsksXZerXpMIKtNc6VUwUWcPlswCuK9mPOpY989ITjTVLRkK5VyqDY3MHw/exec",c=document.querySelector("#signup-form"),b=c.parentElement,a=c.querySelector('button[type="submit"]');function l(n,t,r){const s=n==="success"?"♥":"✕",e=n==="success"?"text-amber-700/40":"text-red-700";b.innerHTML=`
    <div class="text-center py-12 fade-in">
      <div class="${e} text-6xl mb-6">${s}</div>
      <h2 class="text-2xl font-serif text-amber-900 mb-3">${t}</h2>
      ${r?`<p class="text-amber-700/70 font-serif mb-6">${r}</p>`:""}
      ${n==="success"?`
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
      `:""}
      ${n==="error"?`
        <button
          id="retry-button"
          class="mt-4 bg-gradient-to-b from-amber-700 to-amber-800 text-[#fffffe] px-8 py-3 font-serif tracking-widest uppercase text-sm hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg border border-amber-900/20"
          style="border-radius: 0;"
        >
          Opnieuw proberen
        </button>
      `:""}
    </div>
  `,n==="success"&&document.querySelector("#add-to-calendar-success")?.addEventListener("click",u),n==="error"&&document.querySelector("#retry-button")?.addEventListener("click",()=>{location.reload()})}c.addEventListener("submit",async n=>{n.preventDefault(),a.disabled=!0,a.textContent="Bezig met versturen...";try{const t=new FormData(c),r={name:t.get("name"),email:t.get("email"),address:t.get("address")};await fetch(f,{method:"POST",mode:"no-cors",body:new URLSearchParams(r),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),l("success","Bedankt!","Meer informatie volgt binnenkort.")}catch(t){console.error("Error submitting form:",t),l("error","Er is iets misgegaan","Probeer het later opnieuw of neem contact met ons op."),a.disabled=!1,a.textContent="Versturen"}});

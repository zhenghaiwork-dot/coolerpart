import{n as e,o as t,r as n}from"./inquiry-basket.fqQO7Ogv.js";function r(){let r=n(),i=document.getElementById(`sidebar-basket-items`),o=document.getElementById(`sidebar-basket-count`),s=document.getElementById(`sidebar-basket-footer`),c=document.getElementById(`inquiry_basket_hidden`),l=document.getElementById(`product_name`),u=document.getElementById(`category`),d=document.getElementById(`specifications`);if(o&&(o.textContent=String(r.length)),!i)return;if(r.length===0){i.innerHTML=`
          <div class="flex flex-col items-center justify-center py-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mb-3 h-10 w-10 text-gray-300 dark:text-slate-600" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z"/><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" fill="none"/><rect x="9" y="3" width="6" height="4" rx="2" stroke="currentColor" fill="none"/>
            </svg>
            <p class="text-sm text-muted">Your inquiry list is empty</p>
            <p class="mt-1 text-xs text-muted">Browse products and add them to your list</p>
            <a href="/water-system" class="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="10" cy="10" r="7" stroke="currentColor" fill="none"/><path d="M21 21l-6-6" stroke="currentColor" fill="none"/></svg>
              Browse Products
            </a>
          </div>
        `,s&&s.classList.add(`hidden`),c&&(c.value=``);return}i.innerHTML=r.map(e=>`
        <div class="flex items-start gap-3 px-5 py-3">
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z"/><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" fill="none"/><rect x="9" y="3" width="6" height="4" rx="2" stroke="currentColor" fill="none"/>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 dark:text-white truncate">${e.name}</p>
            <p class="text-xs text-muted truncate">${e.category}</p>
            <div class="mt-1 flex items-center gap-2 text-xs text-muted">
              <span>${e.moq}</span>
              ${e.priceRange?`<span>·</span><span>${e.priceRange}</span>`:``}
            </div>
          </div>
          <button
            class="remove-item-btn flex-shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
            data-slug="${e.slug}"
            data-name="${e.name}"
            title="Remove"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z"/><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" fill="none"/>
            </svg>
          </button>
        </div>
      `).join(``),s&&s.classList.remove(`hidden`),i.querySelectorAll(`.remove-item-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.slug,r=e.dataset.name;t(n),a(`${r} removed from inquiry list`)})});let f=document.getElementById(`clear-basket-btn`);if(f&&(f.onclick=()=>{r.length>0&&confirm(`Remove all items from your inquiry list?`)&&(e(),a(`All items removed`))}),l&&!l.dataset.userEdited&&(r.length===1?l.value=r[0].name:l.value=r.map(e=>e.name).join(`, `)),u&&r.length===1){let e={"Water Pump & Power":`water-system`,"Filtration & Anti-clogging":`water-system`,"Valves & Water Control":`water-system`,"Water Distribution & Level Protection":`water-system`,"Piping & Connections":`water-system`,"Tank, Sump & Drainage":`water-system`,"Cooling Media":`evaporation-system`,"Water Feed & Distribution":`evaporation-system`,"Anti-clogging & Debris Management":`evaporation-system`,"Overflow, Splash & Drain Guidance":`evaporation-system`,"Fans & Blower Components":`air-system`,"Centrifugal Fan System":`air-system`,"Air Outlet & Grilles":`air-system`,"Motors & Drive":`electrical-controls`,"Control Board & Protection":`electrical-controls`,"Sensors & Water Level Detection":`electrical-controls`,"Wiring & Connectors":`electrical-controls`}[r[0].category];e&&(u.value=e)}d&&!d.value&&(d.value=`Products from inquiry list:\n${r.map(e=>`• ${e.name} — MOQ: ${e.moq}${e.priceRange?`, Price: ${e.priceRange}`:``}`).join(`
`)}\n\nAdditional requirements:\n`),c&&(c.value=r.map(e=>`${e.name} (${e.category}) — MOQ: ${e.moq}${e.priceRange?`, Price: ${e.priceRange}`:``}`).join(`
`))}var i=null;function a(e){let t=document.getElementById(`inquiry-toast`),n=document.getElementById(`inquiry-toast-msg`);!t||!n||(i&&clearTimeout(i),n.textContent=e,t.classList.remove(`hidden`),i=setTimeout(()=>t.classList.add(`hidden`),3e3))}document.addEventListener(`astro:page-load`,r),window.addEventListener(`inquiry-basket:update`,r),window.addEventListener(`pageshow`,e=>{e.persisted&&r()}),document.addEventListener(`astro:page-load`,()=>{let e=document.getElementById(`product_name`);e&&e.addEventListener(`input`,()=>{e.dataset.userEdited=`true`})}),r();
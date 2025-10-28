
// Hover grow/shrink on desktop
const split = document.getElementById('split');
const panels = document.querySelectorAll('.panel');

function enterPanel(e){
  split.classList.add('hovering');
  e.currentTarget.classList.add('is-hover');
}
function leavePanel(e){
  e.currentTarget.classList.remove('is-hover');
  if(!document.querySelector('.panel.is-hover')){
    split.classList.remove('hovering');
  }
}
panels.forEach(p=>{
  p.addEventListener('mouseenter', enterPanel);
  p.addEventListener('mouseleave', leavePanel);
  p.addEventListener('focusin', enterPanel);
  p.addEventListener('focusout', leavePanel);
});

// Adjust split height to account for banner + header
function updateHeaderOffset(){
  const banner = document.querySelector('.announcement-banner');
  const siteHeader = document.querySelector('header.bg-custom-green');
  const h = (banner ? banner.offsetHeight : 0) + (siteHeader ? siteHeader.offsetHeight : 0);
  if (h > 0) {
    document.documentElement.style.setProperty('--header-offset', h + 'px');
  }
}
updateHeaderOffset();
window.addEventListener('resize', updateHeaderOffset);

// Mobile menu (only if custom landing header exists)
const hamburger = document.getElementById('hamburger');
const sheet = document.getElementById('mobile-sheet');
const backdrop = document.getElementById('backdrop');

function openSheet(){
  if (!sheet || !backdrop || !hamburger) return;
  sheet.hidden = false;
  backdrop.hidden = false;
  hamburger.setAttribute('aria-expanded','true');
}
function closeSheet(){
  if (!sheet || !backdrop || !hamburger) return;
  sheet.hidden = true;
  backdrop.hidden = true;
  hamburger.setAttribute('aria-expanded','false');
}
if (hamburger && sheet && backdrop) {
  hamburger.addEventListener('click', ()=> sheet.hidden ? openSheet() : closeSheet());
  backdrop.addEventListener('click', closeSheet);
  window.addEventListener('resize', ()=>{
    if(window.matchMedia('(min-width:768px)').matches) closeSheet();
  });
}
window.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ if (sheet) closeSheet(); if (zipModal && !zipModal.hidden) closeZip(); } });

// ZIP modal
const zipOpen = document.getElementById('zip-open');
const zipModal = document.getElementById('zip-modal');
const zipForm = document.getElementById('zip-form');
const zipInput = document.getElementById('zip');
const zipError = document.getElementById('zip-error');
const zipCancel = document.getElementById('zip-cancel');

function openZip(){
  zipModal.hidden = false;
  zipInput.focus();
}
function closeZip(){
  zipModal.hidden = true;
  zipError.hidden = true;
  zipError.textContent = '';
  zipForm.reset();
}

if (zipOpen && zipModal && zipForm && zipInput && zipCancel && zipError) {
  zipOpen.addEventListener('click', openZip);
  zipCancel.addEventListener('click', closeZip);
  zipModal.addEventListener('click', (e)=>{ if(e.target === zipModal) closeZip(); });

  zipForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const zip = zipInput.value.trim();
    const ok = /^\d{5}$/.test(zip);
    if(!ok){
      zipError.textContent = 'Enter a 5-digit ZIP code.';
      zipError.hidden = false;
      return;
    }
    const list = (window.DELIVERY_ZIPS || []);
    if(!list.includes(zip)){
      zipError.textContent = "Sorry, we don't deliver there yet. Try pickup or contact us.";
      zipError.hidden = false;
      return;
    }
    window.location.href = `/order?method=delivery&zip=${zip}`;
  });
}

// Improve keyboard reachability
document.querySelectorAll('.panel').forEach(p=>{
  p.setAttribute('tabindex','0');
});

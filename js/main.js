// Burger menu & year stamp
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav){
  burger.addEventListener('click', ()=>{
    const visible = getComputedStyle(nav).display !== 'none';
    nav.style.display = visible ? 'none' : 'flex';
  });
}

const yearSpan = document.getElementById('year');
if (yearSpan){ yearSpan.textContent = new Date().getFullYear(); }

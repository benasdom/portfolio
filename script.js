const cur=document.getElementById('cur'),ring=document.getElementById('cur-r');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
  setTimeout(()=>{ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';},90);
});
const btn=document.getElementById('tb'),html=document.documentElement;
let dark=true;
btn.addEventListener('click',()=>{dark=!dark;html.setAttribute('data-theme',dark?'dark':'light');btn.textContent=dark?'☀':'🌙';});
const secs=document.querySelectorAll('section[id]'),links=document.querySelectorAll('nav a');
secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){links.forEach(l=>l.classList.remove('active'));const a=document.querySelector(`nav a[href="#${e.target.id}"]`);if(a)a.classList.add('active');}
}),{threshold:.35}).observe(s));
document.querySelectorAll('.r,.rl,.rr,.ru').forEach(el=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');}}),{threshold:.1}).observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});}));
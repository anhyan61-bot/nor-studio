function L(i,b){
  document.body.classList.toggle('ru',i===1);
  document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  document.documentElement.lang=i?'ru':'hy';
  const sel=document.getElementById('s');
  if(sel){
    const hy=['Բնական շպոն','Ինժեներական շպոն','ՄԴՖ, ֆաներա, փայտ','Շպոնապատման ծառայություն','Սարքավորում'];
    const ru=['Натуральный шпон','Инженерный шпон','МДФ, фанера, древесина','Услуга шпонирования','Оборудование'];
    [...sel.options].forEach((o,k)=>o.textContent=i?ru[k]:hy[k]);
  }
}
function S(f){document.getElementById('done').style.display='block';f.querySelector('button').disabled=true;return false}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rev').forEach(e=>io.observe(e));
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));

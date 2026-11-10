function L(i,b){document.body.classList.toggle('ru',i===1);document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.documentElement.lang=i?'ru':'hy';
  const ru=i===1, o=document.querySelectorAll('#s option');
  const hy=['Պատուհաններ և դռներ','Ապակե միջնապատ / ցուցափեղկ','Վիտրաժ, ապակեփաթեթ','Կահույք պատվերով'];
  const rr=['Окна и двери','Стеклянная перегородка / витрина','Витраж, стеклопакет','Мебель на заказ'];
  o.forEach((x,k)=>x.textContent=ru?rr[k]:hy[k]);}
function S(f){document.getElementById('done').style.display='block';f.querySelector('button').disabled=true;return false}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rev').forEach(e=>io.observe(e));
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));

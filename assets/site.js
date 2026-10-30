(function(){
  var btn=document.querySelector('.menu-btn');
  var nav=document.getElementById('mobile-nav');
  function setMenu(open){
    if(!btn||!nav) return;
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open?'true':'false');
    btn.setAttribute('aria-label', open?'메뉴 닫기':'메뉴 열기');
    btn.querySelector('.i-open').style.display=open?'none':'';
    btn.querySelector('.i-close').style.display=open?'':'none';
  }
  if(btn){ btn.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); }); }
  if(nav){ nav.addEventListener('click', function(e){ if(e.target.closest('a')) setMenu(false); }); }
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') setMenu(false); });
  window.addEventListener('resize', function(){ if(window.innerWidth>900) setMenu(false); });
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
})();

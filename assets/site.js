(function(){
  var nav=document.getElementById('mobile-nav');
  var btn=document.querySelector('.menu-btn');
  var toggles=document.querySelectorAll('.menu-toggle');
  function setMenu(open){
    if(!nav) return;
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggles.forEach(function(b){ b.setAttribute('aria-expanded', open?'true':'false'); });
    if(btn){
      btn.setAttribute('aria-label', open?btn.getAttribute('data-close'):btn.getAttribute('data-open'));
      btn.querySelector('.i-open').style.display=open?'none':'';
      btn.querySelector('.i-close').style.display=open?'':'none';
    }
  }
  toggles.forEach(function(b){ b.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); }); });
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

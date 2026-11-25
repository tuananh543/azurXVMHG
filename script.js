(function(){
  var $=function(id){return document.getElementById(id)};
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag,cls,text){
    var e=document.createElement(tag);
    if(cls)e.className=cls;
    if(text!==undefined)e.textContent=text;
    return e;
  }
  function initials(name){
    var w=name.trim().split(/\s+/);
    if(w.length===1)return w[0].charAt(0).toUpperCase();
    return (w[0].charAt(0)+w[w.length-1].charAt(0)).toUpperCase();
  }

  // ---- Đổ nội dung từ config.js ----
  document.title=CONFIG.name;
  $('coverImg').src=CONFIG.cover;
  $('avatarImg').src=CONFIG.avatar;
  $('coopLogo').src=CONFIG.logo;
  $('partnerIcon').src=CONFIG.partnerIcon;
  $('name').textContent=CONFIG.name;
  $('role').textContent=CONFIG.role;
  $('bio').textContent=CONFIG.bio;
  $('teamTitle').textContent=CONFIG.teamTitle;

  var links=$('links');
  if(CONFIG.contact){
    var c=el('a','btn',CONFIG.contact.label);c.href=CONFIG.contact.href;links.appendChild(c);
  }
  (CONFIG.links||[]).forEach(function(l){
    var a=el('a','chip',l.label);a.href=l.href;
    if(/^https?:/.test(l.href)){a.target='_blank';a.rel='noopener'}
    links.appendChild(a);
  });

  (CONFIG.stats||[]).forEach(function(s){
    var d=el('div','stat');d.appendChild(el('b',null,s.value));d.appendChild(el('span',null,s.label));
    $('stats').appendChild(d);
  });

  // ---- Các trang riêng: thông tin + trang phục (tạo từ config.js) ----
  var main=document.querySelector('.wrap');
  var views={home:$('view-home')};
  var pages=[{id:'home',nav:'Trang chủ',icon:'home'}];

  function makeView(id,title){
    var v=el('section','view page');v.id='view-'+id;v.hidden=true;
    v.appendChild(el('h2','page-title',title));
    main.appendChild(v);views[id]=v;return v;
  }
  function infoList(items){
    var dl=el('dl','info-list');
    (items||[]).forEach(function(it){
      var row=el('div','info-row');
      row.appendChild(el('dt',null,it.label));
      row.appendChild(el('dd',null,it.value));
      dl.appendChild(row);
    });
    return dl;
  }

  (CONFIG.infoBlocks||[]).forEach(function(b,i){
    var id=b.id||('muc-'+(i+1));
    var bv=makeView(id,b.title);
    if(b.desc)bv.appendChild(el('p','page-desc',b.desc));
    else bv.appendChild(infoList(b.items));
    pages.push({id:id,nav:b.nav||b.title,icon:b.icon||'doc'});
  });

  var U=CONFIG.uniforms;
  if(U&&U.items&&U.items.length){
    var uid=U.id||'trang-phuc';
    var uv=makeView(uid,U.title||'Trang phục');
    if(U.intro)uv.appendChild(el('p','u-intro',U.intro));
    var grid=el('div','u-grid');
    U.items.forEach(function(u){
      var cell=el('article','u-cell');
      var box=el('div','u-img');
      function placeholder(){
        box.textContent='';box.classList.add('empty');
        box.appendChild(el('span',null,'Chưa có ảnh'));
      }
      if(u.photo){
        var im=el('img');im.alt=u.name;im.onerror=placeholder;im.src=u.photo;
        box.appendChild(im);
      }else placeholder();
      cell.appendChild(box);
      cell.appendChild(el('h3','u-name',u.name));
      if(u.desc)cell.appendChild(el('p','u-desc',u.desc));
      grid.appendChild(cell);
    });
    uv.appendChild(grid);
    pages.push({id:uid,nav:U.nav||U.title||'Trang phục',icon:U.icon||'shirt'});
  }

  // ---- Thanh menu góc trên bên trái: rê chuột vào để mở ----
  var ICON={
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    home:'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    person:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    shirt:'<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
    doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>'
  };
  function svg(name){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICON[name]||ICON.doc)+'</svg>';
  }
  var side=el('nav','side');side.setAttribute('aria-label','Menu chính');
  var toggle=el('button','side-toggle');toggle.type='button';
  toggle.setAttribute('aria-label','Mở menu');toggle.setAttribute('aria-expanded','false');
  toggle.innerHTML=svg('menu');
  side.appendChild(toggle);
  var ul=el('ul'),links=[];
  pages.forEach(function(p){
    var li=el('li'),a=el('a');
    a.href='#'+p.id;a.dataset.id=p.id;a.title=p.nav;
    a.innerHTML=svg(p.icon);
    a.appendChild(el('span',null,p.nav));
    li.appendChild(a);ul.appendChild(li);links.push(a);
  });
  side.appendChild(ul);
  document.body.appendChild(side);

  function setOpen(o){side.classList.toggle('open',o);toggle.setAttribute('aria-expanded',o?'true':'false')}
  toggle.addEventListener('click',function(){setOpen(!side.classList.contains('open'))});
  ul.addEventListener('click',function(e){
    if(e.target.closest('a')){setOpen(false);if(document.activeElement)document.activeElement.blur()}
  });
  document.addEventListener('click',function(e){if(!side.contains(e.target))setOpen(false)});

  // ---- Chuyển trang theo #tên-trang ----
  function show(id){
    if(!views[id])id='home';
    document.body.classList.toggle('is-home', id!=='home');
    Object.keys(views).forEach(function(k){views[k].hidden=(k!==id)});
    links.forEach(function(a){
      if(a.dataset.id===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    window.scrollTo(0,0);
  }
  function route(){
    var id='home';
    try{id=decodeURIComponent(location.hash.replace(/^#\/?/,''))||'home'}catch(e){}
    show(id);
  }
  window.addEventListener('hashchange',route);
  route();

  (CONFIG.members||[]).forEach(function(m){
    var card=el('div','m-card');
    var ava=el('div','m-ava');
    if(m.photo){var im=el('img');im.src=m.photo;im.alt=m.name;ava.appendChild(im)}
    else ava.textContent=initials(m.name);
    card.appendChild(ava);
    card.appendChild(el('div','m-name',m.name));
    card.appendChild(el('div','m-role',m.role));
    $('members').appendChild(card);
  });

  // Nền hạt sáng phản ứng theo chuột
  var fx=$('fx'), ctx=fx.getContext('2d'), W=0,H=0,pts=[], mouse={x:-999,y:-999};
  function resize(){
    var dpr=Math.min(window.devicePixelRatio||1,2);
    W=window.innerWidth;H=window.innerHeight;
    fx.width=W*dpr;fx.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    var n=Math.round(Math.min(90,W*H/14000));pts=[];
    for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,s:Math.random()*1.6+.9,c:i%3,ph:Math.random()*6.28});
  }
  function isDark(){var t=document.documentElement.getAttribute('data-theme');return t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches}
  function draw(){
    ctx.clearRect(0,0,W,H);
    var now=performance.now();
    var cols=isDark()?['242,176,30','255,255,255','90,160,245']:['179,22,27','37,99,176','210,150,10'];
    var g=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,220);
    g.addColorStop(0,'rgba('+cols[0]+',.16)');g.addColorStop(1,'rgba('+cols[0]+',0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){
      var p=pts[i];
      if(!reduce){
        var dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<140&&d>0){p.vx+=dx/d*.05;p.vy+=dy/d*.05}
        p.vx*=.99;p.vy*=.99;
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      }
      for(var j=i+1;j<pts.length;j++){
        var q=pts[j],ex=p.x-q.x,ey=p.y-q.y,e=Math.sqrt(ex*ex+ey*ey);
        if(e<110){ctx.strokeStyle='rgba('+cols[0]+','+(.22*(1-e/110))+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}
      }
      var mx=p.x-mouse.x,my=p.y-mouse.y,m=Math.sqrt(mx*mx+my*my);
      if(m<170){ctx.strokeStyle='rgba('+cols[2]+','+(.5*(1-m/170))+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke()}
      ctx.fillStyle='rgba('+cols[p.c]+','+(.55+.35*Math.sin(now*.0015+p.ph))+')';ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,6.2832);ctx.fill();
    }
    if(!reduce)requestAnimationFrame(draw);
  }
  resize();draw();
  window.addEventListener('resize',function(){resize();if(reduce)draw()});
  window.addEventListener('pointermove',function(e){mouse.x=e.clientX;mouse.y=e.clientY});
  document.addEventListener('pointerleave',function(){mouse.x=-999;mouse.y=-999});

  // Thẻ thành viên nghiêng và phát sáng theo chuột
  document.querySelectorAll('.m-card').forEach(function(c){
    c.addEventListener('pointermove',function(e){
      var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.setProperty('--gx',(x*100)+'%');c.style.setProperty('--gy',(y*100)+'%');
      if(!reduce)c.style.transform='perspective(600px) rotateX('+((.5-y)*10)+'deg) rotateY('+((x-.5)*12)+'deg) translateY(-3px)';
    });
    c.addEventListener('pointerleave',function(){c.style.transform=''});
  });


  $('theme').onclick=function(){
    var root=document.documentElement;
    var dark=root.getAttribute('data-theme')==='dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme',dark?'light':'dark');
    if(reduce)draw();
  };
})();

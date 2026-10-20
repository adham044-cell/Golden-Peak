const projects = [
  { n:'01', title:'Attendance Management System', type:'EDUCATION · WEB APPLICATION', intro:'A practical attendance workflow shaped around the people who use it: teachers, sessions, and student records.', detail:'An Arabic, right-to-left interface brings daily classroom work into a focused space. The application uses a repository approach across local data and Supabase-backed storage.', tags:['React','TypeScript','Vite','Supabase','React Router'], live:'https://attendance-management-system-ochre-seven.vercel.app/', repo:'https://github.com/adham044-cell/attendance-management-system', art:'attendance' },
  { n:'02', title:'Green Egypt', type:'ENVIRONMENT · INTERACTIVE MAP', intro:'A public-facing project that makes waste categories and recycling information easier to explore in an Egyptian context.', detail:'Leaflet and OpenStreetMap support location exploration, while a clear category guide gives the project a useful starting point. Location details may need verification.', tags:['HTML','CSS','JavaScript','Leaflet','OpenStreetMap'], live:'https://green-egypt.vercel.app/', repo:'https://github.com/adham044-cell/Green-Egypt', art:'green' },
  { n:'03', title:"SQS: Students' Questions Site", type:'EDUCATION · PROJECT PROTOTYPE', intro:'An educational concept for organizing questions by school grade and subject for students and teachers.', detail:'A lightweight browser experience built with familiar web fundamentals and local storage. Recognized with second place in a Beheira Governorate-level competition.', tags:['HTML','CSS','JavaScript','Local Storage'], live:'https://sqs-opal.vercel.app/', art:'sqs' },
  { n:'04', title:'The Sniper', type:'LEARNING · IN-DEVELOPMENT', intro:'An evolving educational platform concept created for English teacher Ahmed Fadel.', detail:'A React and TypeScript prototype exploring an online learning experience. The project is still in development.', tags:['React','TypeScript','Vite','Local Storage'], live:'https://the-sniper.vercel.app/', art:'sniper' }
]
const art = p => `<div class="project-art art-${p.art}" aria-hidden="true"><div class="art-noise"></div><span class="art-index">VISUAL STUDY / ${p.n}</span><div class="art-scene">${p.art==='attendance'?`<div class="art-sheet"><small>CLASS / 03</small><div class="sheet-title">Attendance<br>overview</div><div class="sheet-rule"></div><div class="sheet-row"><i></i> Session 01 <b>08:10</b></div><div class="sheet-row"><i></i> Session 02 <b>09:30</b></div><div class="sheet-row"><i></i> Student record <b>↗</b></div></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div>`:p.art==='green'?`<div class="map-grid"></div><svg class="map-lines" viewBox="0 0 600 380"><path d="M50 312C170 282 82 217 205 193S326 242 400 163 512 117 570 48"/><path d="M8 99C121 132 118 34 216 80s91 143 213 124 101 23 166 75"/><path d="M20 260C138 218 186 350 305 283s99-162 253-171"/></svg><span class="map-pin pin-one">♻<small>01</small></span><span class="map-pin pin-two">♻<small>02</small></span><span class="map-label">WASTE / RECYCLING / EGYPT</span>`:p.art==='sqs'?`<div class="question-mark">?</div><div class="sqs-note"><span>SUBJECT / STUDY</span><h3>A question<br>worth asking.</h3><small>GRADE / QUESTIONS</small></div><div class="sqs-lines"></div>`:`<div class="sniper-ring r1"></div><div class="sniper-ring r2"></div><div class="sniper-cross">+</div><div class="sniper-copy"><small>LEARNING SPACE / 01</small><strong>ENGLISH<br>IN MOTION</strong></div>`}</div></div>`
const links = (p) => `<div class="project-links"><a href="${p.live}" target="_blank" rel="noopener noreferrer">VIEW LIVE <span aria-hidden="true">↗</span></a>${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener noreferrer">SOURCE REPOSITORY <span aria-hidden="true">↗</span></a>`:''}</div>`
document.querySelector('#root').innerHTML = `
<div class="ambient" aria-hidden="true"><div class="ambient-glow"></div><div class="terrain terrain-back"></div><div class="terrain terrain-front"></div><div class="grain"></div></div>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-head"><a class="brand" href="#intro" aria-label="ENG / ADHAM, home"><span class="brand-mark">GP<span>↗</span></span><span class="brand-text">ENG <i>/</i> ADHAM</span></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button><nav class="nav" aria-label="Main navigation">${[['intro','Start'],['work','Selected work'],['lab','Field lab'],['about','About'],['contact','Contact']].map(([id,l])=>`<a href="#${id}"><span>${l}</span><i></i></a>`).join('')}</nav><a class="availability" href="mailto:eng.adham220@gmail.com"><span></span> OPEN TO OPPORTUNITIES <b>↗</b></a></header>
<main id="main">
<section id="intro" data-section class="hero section-wrap"><div class="hero-meta"><span>INDEPENDENT WEB DEVELOPER</span><span>INDEPENDENT · WEB</span></div><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-line"></span> WEB / SYSTEMS / CURIOSITY</div><h1 aria-label="I build for the web"><span class="hero-line">I BUILD</span><span class="hero-line hero-line-gold">FOR THE</span><span class="hero-line">WEB<span class="period">.</span></span></h1><div class="hero-aside"><p>Interfaces with intention.<br>Systems worth understanding.</p><span class="side-rule"></span><span class="vertical-index">A STUDY IN MAKING / 01</span></div></div><div class="hero-lower"><p>I'm Adham — a front-end developer drawn to the space between <b>expressive interfaces</b> and <b>how things work underneath.</b></p><a class="explore-link" href="#work"><span>EXPLORE THE WORK</span><span class="explore-arrow">↓</span></a></div><div class="hero-coordinates"><span>DESIGN / 01</span><span>BUILD / 02</span><span class="coordinate-line"></span><span>FIELD LOG / 001</span></div></section>
<section id="manifesto" data-section class="manifesto section-wrap"><div class="section-label"><span>01 / POINT OF VIEW</span><span>THE LONG WAY UP</span></div><div class="manifesto-content"><div class="manifesto-mark">✳</div><p>The web is a place to <em>make things visible.</em><br>I care about the details people feel,<br>and the systems they never have to notice.</p><div class="manifesto-foot"><span>DESIGN WITH INTENT. BUILD WITH CURIOSITY.</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>
<section id="work" data-section class="work section-wrap"><div class="section-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> SELECTED WORK / FIELD NOTES</div><h2>Ideas, made<br><em>tangible.</em></h2></div><p>A selection of learning, experiments, and useful things built for the browser.</p></div><div class="project-list">${projects.map((p,i)=>`<article class="project project-${i+1}"><div class="project-top"><span>${p.n} <i>/</i> ${p.type}</span><span class="project-symbol">${['▤','◎','✳','⌘'][i]}</span></div>${art(p)}<div class="project-info"><div class="project-title"><span class="project-index">${p.n}</span><h3>${p.title}</h3></div><div class="project-copy"><p>${p.intro}</p><details><summary>How it works <span>+</span></summary><p>${p.detail}</p></details><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${links(p)}</div></div></article>`).join('')}</div></section>
<section id="lab" data-section class="lab-section section-wrap"><div class="section-label"><span>02 / SYSTEMS NOTEBOOK</span><span>SAFE · LOCAL · FICTIONAL</span></div><div class="lab-intro"><div><div class="eyebrow"><span class="eyebrow-line"></span> A SMALL, SAFE EXPERIMENT</div><h2>Curiosity has<br>a <em>command line.</em></h2></div><p>A tiny command-line sandbox for exploring familiar tools. Try a command, inspect its output, and follow the questions it raises.</p></div><div class="lab-grid"><div class="lab-shell"><div class="lab-top"><span>⌘ FIELD CONSOLE <i>LOCAL SIM</i></span><span class="lab-ready"><b></b> READY</span></div><div class="lab-body" aria-label="Simulated command output" aria-live="polite"><div class="term-line gold">GOLDEN PEAK FIELD CONSOLE · SIMULATION READY</div><div class="term-line dim">Type help to explore. No commands leave this page.</div></div><form class="term-form"><label for="lab-command">visitor@peak:~$</label><input id="lab-command" autocomplete="off" spellcheck="false" aria-label="Enter a simulated command"><button type="submit" aria-label="Run simulated command">→</button></form><div class="lab-bottom"><span>↑ / ↓ HISTORY</span><span>ENTER TO RUN</span><button type="button" data-clear>CLEAR OUTPUT</button></div></div><aside class="lab-aside"><div class="lab-stamp"><span>SIMULATION</span><b>◇</b></div><h3>A closed<br>little world.</h3><p>Every result is predefined and fictional. This lab runs locally in your browser: no real network requests, scanning, shell, or system access.</p><div class="quick-commands"><span>TRY THESE</span>${['help','ip addr','nmap','traceroute'].map(c=>`<button type="button" data-command="${c}">${c}<b>↗</b></button>`).join('')}</div></aside></div><div class="lab-footnote">A learning interface. Not a security tool. <span>ALL OUTPUT IS SIMULATED</span></div></section>
<section id="about" data-section class="about section-wrap"><div class="section-label"><span>03 / ORIENTATION</span><span>STILL LEARNING</span></div><div class="about-grid"><div class="about-heading"><div class="eyebrow"><span class="eyebrow-line"></span> ABOUT / ADHAM SAMIR</div><h2>Building at<br>the <em>edge of</em><br>what I know.</h2><div class="about-signature">A curious engineer, in progress <span>↗</span></div></div><div class="about-copy"><p class="about-lead">I’m interested in what happens when a thoughtful interface meets a solid understanding of the system beneath it.</p><p>My work so far lives in the browser: making tools for classrooms, exploring maps and information, and learning how small details change an experience. Away from the UI, I’m building my foundations in Linux, networking, and cybersecurity.</p><p>I’m early in that journey, and I like it that way: there is always another layer to understand.</p><div class="skill-groups"><div class="skill-group"><span>01 / BUILDING</span><p>HTML · CSS · JavaScript · TypeScript · React · Vite</p></div><div class="skill-group"><span>02 / CONNECTING</span><p>Git · GitHub · Supabase · Local Storage</p></div><div class="skill-group"><span>03 / EXPLORING</span><p>Python · Linux · Networking fundamentals · Cybersecurity</p></div></div></div></div></section>
<section id="recognition" data-section class="recognition section-wrap"><div class="section-label"><span>04 / MILESTONES</span><span>RECOGNITION</span></div><div class="recognition-head"><h2>Small signals<br><em>of progress.</em></h2><p>Projects recognized in local competitions. The competition names and years are not confirmed.</p></div><div class="awards"><div class="award"><span class="award-no">01</span><span class="award-project">GREEN EGYPT</span><strong>1<sup>ST</sup></strong><span class="award-place">Abu El Matamir Educational Administration level</span><span class="award-star">✳</span></div><div class="award"><span class="award-no">02</span><span class="award-project">GREEN EGYPT</span><strong>3<sup>RD</sup></strong><span class="award-place">Beheira Governorate level</span><span class="award-star">✳</span></div><div class="award"><span class="award-no">03</span><span class="award-project">SQS</span><strong>2<sup>ND</sup></strong><span class="award-place">Beheira Governorate level</span><span class="award-star">✳</span></div></div></section>
<section id="contact" data-section class="contact section-wrap"><div class="contact-ambient"></div><div class="section-label"><span>05 / OPEN CHANNEL</span><span>THE NEXT THING STARTS HERE</span></div><div class="contact-content"><div class="eyebrow"><span class="eyebrow-line"></span> HAVE SOMETHING IN MIND?</div><h2>Let's make<br><em>it matter.</em></h2><a class="contact-cta" href="mailto:eng.adham220@gmail.com"><span>START A CONVERSATION</span><b>↗</b></a><div class="contact-links"><a href="mailto:eng.adham220@gmail.com"><b>✉</b> EMAIL <span>eng.adham220@gmail.com</span></a><a href="https://github.com/adham044-cell" target="_blank" rel="noopener noreferrer">⌘ GITHUB ↗</a><a href="https://www.linkedin.com/in/adham-samir-6466a73b9/" target="_blank" rel="noopener noreferrer">in LINKEDIN ↗</a><a href="https://wa.me/+201272674852" target="_blank" rel="noopener noreferrer">WA WHATSAPP ↗</a><a href="https://www.facebook.com/profile.php?id=100048992388861&locale=ar_AR" target="_blank" rel="noopener noreferrer">FB FACEBOOK ↗</a></div></div><div class="contact-coordinate">OPEN / CURIOUS<br>WEB · SYSTEMS</div></section></main>
<footer class="site-footer"><a class="footer-brand" href="#intro">ENG <i>/</i> ADHAM <span>✳</span></a><span>MADE TO KEEP CLIMBING.</span><a href="#intro">BACK TO THE TOP ↑</a><span>© ADHAM SAMIR</span></footer>`

// Navigation state and compact mobile drawer.
const nav = document.querySelector('.nav'), menu = document.querySelector('.menu-toggle')
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.textContent=open?'×':'☰';nav.classList.toggle('open',open)})
nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.textContent='☰';nav.classList.remove('open')}})
const sections=document.querySelectorAll('[data-section]'), navLinks=[...nav.querySelectorAll('a')]
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('active',a.hash===`#${e.target.id}`))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>observer.observe(s))}

// Explicit local command handlers. Input is only normalized and used as a lookup key.
const responses={
 help:[['AVAILABLE COMMANDS','gold'],['help       show this command map'],['whoami     identify this environment'],['pwd        print the current path'],['ls         list the demo directory'],['ip addr    inspect fictional interfaces'],['ping       simulated packet exchange'],['traceroute simulated route overview'],['nmap       fictional lab host summary'],['curl       preview a local sample endpoint'],['clear      clear the transcript']],
 whoami:[['visitor@golden-peak','green'],['A guest in a local educational simulation.']],pwd:[['/home/visitor/field-notes','green']],ls:[['projects/   notes/   readme.txt','green']],
 'ip addr':[['SIMULATED INTERFACE SNAPSHOT','gold'],['lo      127.0.0.1/8       loopback'],['eth0    192.0.2.24/24     documentation range'],['No interface on your device was inspected.','dim']],
 ping:[['SIMULATED PING · example.test','gold'],['64 bytes from 192.0.2.10: seq=1 ttl=58 time=24.1 ms'],['64 bytes from 192.0.2.10: seq=2 ttl=58 time=23.7 ms'],['This fictional output did not contact a host.','dim']],
 traceroute:[['SIMULATED ROUTE · example.test','gold'],['1   192.0.2.1       1.2 ms   (documentation address)'],['2   198.51.100.7   12.8 ms   (documentation address)'],['3   203.0.113.9    24.0 ms   (documentation address)'],['No network traffic was sent.','dim']],
 nmap:[['SIMULATED HOST SUMMARY · lab.example','gold'],['Host: fictional training target'],['22/tcp   filtered   ssh'],['80/tcp   open       http (example only)'],['This is a fixed teaching example, not a scan.','dim']],
 curl:[['LOCAL SAMPLE RESPONSE','gold'],['{ "status": "simulated", "message": "No request was sent." }','green']]
}
const terminal=document.querySelector('.lab-body'), form=document.querySelector('.term-form'), input=document.querySelector('#lab-command'), history=[];let historyIndex=-1
function line(text,tone=''){const el=document.createElement('div');el.className=`term-line ${tone} term-new`;el.textContent=text;terminal.append(el)}
function runCommand(raw){const command=raw.trim().toLowerCase().replace(/\s+/g,' ');if(!command)return;if(command==='clear'){terminal.replaceChildren();return}line(`visitor@peak:~$ ${raw.trim()}`,'green');const result=responses[command]||[[`command not found: ${raw.trim()}`,'gold'],['Type “help” to see the available local simulations.','dim']];result.forEach(([text,tone])=>line(text,tone));terminal.scrollTop=terminal.scrollHeight;const shell=document.querySelector('.lab-shell');shell.classList.remove('command-run');requestAnimationFrame(()=>shell.classList.add('command-run'))}
form.addEventListener('submit',e=>{e.preventDefault();const v=input.value;if(v.trim()){history.unshift(v.trim());historyIndex=-1;runCommand(v)}input.value=''})
input.addEventListener('keydown',e=>{if(e.key==='ArrowUp'){e.preventDefault();historyIndex=Math.min(historyIndex+1,history.length-1);input.value=history[historyIndex]||''}if(e.key==='ArrowDown'){e.preventDefault();historyIndex--;input.value=historyIndex<0?'':history[historyIndex]||''}})
document.querySelector('[data-clear]').addEventListener('click',()=>terminal.replaceChildren())
document.querySelectorAll('[data-command]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.command;input.focus()}))

// Motion system: one rAF-driven scroll sampler feeds scene-specific CSS variables.
// This keeps scroll-linked transforms continuous without a dependency or scroll hijack.
const motionReduced = matchMedia('(prefers-reduced-motion: reduce)')
const finePointer = matchMedia('(hover: hover) and (pointer: fine)')
const hero = document.querySelector('.hero')
const ambient = document.querySelector('.ambient')
let motionFrame = 0
const motionTargets = [...document.querySelectorAll('.project')]
const projectArtTargets = [...document.querySelectorAll('.project-art')]
const revealTargets = [...document.querySelectorAll('.manifesto-content, .section-heading > div, .section-heading > p, .project-top, .project-info, .lab-intro > div, .lab-intro > p, .lab-shell, .lab-aside, .about-heading, .about-copy, .recognition-head, .award, .contact-content, .contact-coordinate')]
const lab = document.querySelector('.lab-section'), contact = document.querySelector('.contact')
const motionDebug = window.__GOLDEN_PEAK_MOTION__ = { initialized: false, initializationError: null, heroTargets: hero?.querySelectorAll('.hero-line').length || 0, revealTargets: revealTargets.length, revealedTargets: 0, projectTargets: projectArtTargets.length, labTarget: Boolean(lab), contactTarget: Boolean(contact), scrollLinkedRegistered: false, scrollEventsProcessed: 0, scrollUpdates: 0, scrollProgress: 0, lastScrollY: scrollY }
window.addEventListener('error',event=>{if(!motionDebug.initialized){motionDebug.initializationError=event.message||'Script initialization error';motionDebug.initialized=false}})
window.addEventListener('error',event=>{if(!motionDebug.initialized){motionDebug.initializationError=event.message||'Script initialization error';motionDebug.initialized=false}})
function updateScenes(){
  motionFrame = 0
  if(motionReduced.matches) return
  const vh = innerHeight || 1
  const clamp01 = n => Math.max(0, Math.min(1, n))
  const heroProgress = clamp01(-hero.getBoundingClientRect().top / (vh * .9))
  const pageProgress = clamp01(scrollY / Math.max(1, document.documentElement.scrollHeight - vh))
  const artworkFrames = motionTargets.map(item=>({item,rect:item.querySelector('.project-art').getBoundingClientRect()}))
  const sceneRects = [[lab,'lab',lab.getBoundingClientRect()],[contact,'contact',contact.getBoundingClientRect()]]
  ambient.style.setProperty('--page-progress', String(pageProgress))
  ambient.style.setProperty('--glow-x', `${-pageProgress * 3}vw`)
  ambient.style.setProperty('--glow-y', `${pageProgress * 22}vh`)
  ambient.style.setProperty('--glow-scale', String(1 + pageProgress * .3))
  ambient.style.setProperty('--back-x', `${-pageProgress * 2}vw`)
  ambient.style.setProperty('--back-y', `${pageProgress * 16}vh`)
  ambient.style.setProperty('--front-x', `${pageProgress * 3}vw`)
  ambient.style.setProperty('--front-y', `${-pageProgress * 8}vh`)
  hero.style.setProperty('--hero-progress', String(heroProgress))
  hero.style.setProperty('--hero-y', `${-heroProgress * 42}px`)
  hero.style.setProperty('--hero-scale', String(1 - heroProgress * .035))
  hero.style.setProperty('--hero-copy-y', `${-heroProgress * 22}px`)
  hero.style.setProperty('--hero-mobile-y', `${-heroProgress * 22}px`)
  hero.style.setProperty('--hero-light-opacity', String(1 - heroProgress * .78))
  hero.style.setProperty('--hero-light-scale', String(1 + heroProgress * .12))
  artworkFrames.forEach(({item,rect:r}, index) => {
    const progress = clamp01((vh - r.top) / (vh + r.height))
    item.style.setProperty('--scene-progress', String(progress))
    item.style.setProperty('--scene-index', String(index))
    item.style.setProperty('--art-y', `${56-progress*84}px`)
    item.style.setProperty('--art-clip', `${(1-progress)*8}%`)
    item.style.setProperty('--scene-y', `${(index%2 ? -1 : 1)*(48-progress*86)}px`)
    item.style.setProperty('--scene-scale', String(.9+progress*.18))
    item.style.setProperty('--art-shade', String(.55+progress*.45))
    item.style.setProperty('--info-y', `${(1-progress)*18}px`)
    item.style.setProperty('--info-opacity', String(.65+progress*.35))
    item.style.setProperty('--map-dash', String(900*(1-progress)))
  })
  for(const [scene, kind, r] of sceneRects){
    const progress = clamp01((vh - r.top) / (vh + r.height))
    scene.style.setProperty('--scene-progress', String(progress))
    if(kind==='lab'){
      scene.style.setProperty('--lab-y', `${(1-progress)*24}px`)
      scene.style.setProperty('--lab-tilt', `${(1-progress)*2}deg`)
      scene.style.setProperty('--lab-aside-x', `${(1-progress)*14}px`)
      scene.style.setProperty('--lab-aside-opacity', String(.7+progress*.3))
    }else{
      scene.style.setProperty('--contact-x', `${(1-progress)*-9}vw`)
      scene.style.setProperty('--contact-y', `${(1-progress)*10}vh`)
      scene.style.setProperty('--contact-scale', String(.8+progress*.35))
      scene.style.setProperty('--contact-opacity', String(.35+progress*.65))
      scene.style.setProperty('--contact-clip', `${(1-progress)*36}%`)
    }
  }
  if(motionDebug){
    motionDebug.scrollUpdates++
    motionDebug.lastScrollY=scrollY
    motionDebug.lastHeroProgress=heroProgress
    motionDebug.lastPageProgress=pageProgress
    motionDebug.scrollProgress=pageProgress
    motionDebug.projectProgress=motionTargets.map(item=>Number(item.style.getPropertyValue('--scene-progress')))
    motionDebug.reducedMotion=motionReduced.matches
  }
}
function requestScenes(){ if(!motionFrame) motionFrame=requestAnimationFrame(updateScenes) }
addEventListener('scroll',()=>{motionDebug.scrollEventsProcessed++;requestScenes()},{passive:true})
addEventListener('resize',requestScenes,{passive:true})
motionDebug.scrollLinkedRegistered=Boolean(hero&&motionTargets.length===4&&projectArtTargets.length===4&&lab&&contact)
if(!motionDebug.scrollLinkedRegistered)motionDebug.initializationError='One or more required animation elements were not found.'
requestAnimationFrame(()=>{motionDebug.heroAnimationInitialized=Boolean(hero?.classList.contains('hero-ready')&&getComputedStyle(hero.querySelector('.hero-line')).animationName.includes('hero-line-arrive'))})
if(!motionReduced.matches)requestScenes()
motionReduced.addEventListener?.('change',()=>{
  if(motionDebug)motionDebug.reducedMotion=motionReduced.matches
  if(motionReduced.matches){cancelAnimationFrame(motionFrame);motionFrame=0;document.documentElement.classList.remove('motion-enhanced');hero.classList.remove('hero-ready');revealTargets.forEach(el=>el.classList.add('is-revealed'));motionDebug.revealedTargets=revealTargets.length;[ambient,hero,lab,contact,...motionTargets].forEach(el=>el.removeAttribute('style'))}
  else{document.documentElement.classList.add('motion-enhanced');hero.classList.add('hero-ready');requestScenes()}
})

revealTargets.forEach(el=>el.setAttribute('data-motion-reveal',''))
if(motionReduced.matches){revealTargets.forEach(el=>el.classList.add('is-revealed'));motionDebug.revealedTargets=revealTargets.length}
else if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');motionDebug.revealedTargets=document.querySelectorAll('[data-motion-reveal].is-revealed').length;revealObserver.unobserve(entry.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.08})
  revealTargets.forEach(el=>revealObserver.observe(el))
}else{revealTargets.forEach(el=>el.classList.add('is-revealed'));motionDebug.revealedTargets=revealTargets.length}
motionDebug.initialized=motionDebug.scrollLinkedRegistered
if(!motionReduced.matches){document.documentElement.classList.add('motion-enhanced');hero.classList.add('hero-ready')}

// Restrained desktop depth follows the pointer only while it is over the hero.
if(finePointer.matches && !motionReduced.matches){
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.setProperty('--pointer-shift-x',`${x*-7}px`);hero.style.setProperty('--pointer-shift-y',`${y*-6}px`);hero.style.setProperty('--pointer-copy-y',`${y*-3}px`);hero.style.setProperty('--hero-light-x',`${58+x*7}%`);hero.style.setProperty('--hero-light-y',`${42+y*7}%`)})
  hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--pointer-shift-x','0px');hero.style.setProperty('--pointer-shift-y','0px');hero.style.setProperty('--pointer-copy-y','0px');hero.style.setProperty('--hero-light-x','58%');hero.style.setProperty('--hero-light-y','42%')})
}

// Expanding a project's native details also shifts its art into a focused state.
document.querySelectorAll('.project details').forEach(details=>details.addEventListener('toggle',()=>details.closest('.project').classList.toggle('is-exploring',details.open)))

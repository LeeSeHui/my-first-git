$(document).on('click', 'a[href="#"]', function(e){e.preventDefault();});

// 스크롤라
$(function () {
    $('.animate').scrolla({
      mobile: true,
      once: false
    });
  });

  // 스플리팅
  $(function(){
Splitting();  //대문자로쓴다!!!
});

// HEADER

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
trigger: ".hook", // 두 번째 섹션 시작 지점
start: "top center", 
end: "top top",
onEnter: () => {
    document.querySelector(".bigName").classList.add("fixed");
},
onLeaveBack: () => {
    document.querySelector(".bigName").classList.remove("fixed");
}
});

ScrollTrigger.create({
    trigger: ".hook",
    start: "top center",
    end: "top top",
    onEnter: () => {
      const title = document.querySelector(".bigName");
      
      // 👉 자연스럽게 사라짐
      title.style.opacity = "0";
  
      setTimeout(() => {
        // 👉 텍스트 교체 + 고정 스타일 적용
        title.textContent = "● S./EHUI";
        title.classList.add("fixed");
  
        // 👉 자연스럽게 다시 등장
        setTimeout(() => {
          title.style.opacity = "1";
        }, 100); // 살짝 딜레이를 줘야 전환이 부드러워져
      }, 200); // opacity 0 → 텍스트 변경까지 약간의 여유
    },
    onLeaveBack: () => {
      const title = document.querySelector(".bigName");
  
      title.style.opacity = "0";
  
      setTimeout(() => {
        title.textContent = "LEESEHUI";
        title.classList.remove("fixed");
  
        setTimeout(() => {
          title.style.opacity = "1";
        }, 100);
      }, 200);
    }
  });
  

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".hook", // 어두워지는 섹션
  start: "top center", 
  toggleClass: { targets: ".fixHeader", className: "light-mode" }
});

// MAIN

gsap.registerPlugin(ScrollTrigger);

// 🔹 배경 이미지 축소
// gsap.to(".visual img", {
//     scale: 0.3,
//     ease:"power2.out",
//     scrollTrigger:{
//         trigger: ".visual",
//         start: "top top",
//         end:"60% top",
//         scrub: 1.5,
//         // markers: true
//     }
// });


// ✅ LSH 고정 유지 (안 작아짐, 안 사라짐)
gsap.to(".bigName", {
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".visual",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    // markers: true
  }
});

// HOOK

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animate-title:nth-child(1)", {
        scrollTrigger: {
          trigger: ".hook",
          start: "top 140%",
          end: "top 0%", // ✔ 스크롤 진행 범위
          scrub: 3,       // ✔ 부드럽게 스크롤 연동
        },
        x: -1500,
        opacity: 0,
        ease: "power1.out"
      });
      
      gsap.from(".animate-title:nth-child(3)", {
        scrollTrigger: {
          trigger: ".hook",
          start: "top 140%",
          end: "top 0%",
          scrub: 3,
        },
        x: 1500,
        opacity: 0,
        ease: "power1.out"
    });

    gsap.fromTo(".hook .desc", {
        y: 400,
        opacity: 0,
    }, {
        scrollTrigger: {
        trigger: ".hook",
        start: "top 130%",
        end: "top 40%",
        scrub: 3,
        },
        y: 0,
        opacity: 1,
        ease: "power1.out"
    });


// 💥 About: 화면 고정(pin) + 카드 스텝 전환
gsap.registerPlugin(ScrollTrigger);

const titleEl = document.querySelector(".about-title");
const items = gsap.utils.toArray(".about-item");

// 1) 초기엔 숨김
gsap.set(titleEl, { autoAlpha: 0 });   // 초기 숨김

const DELAY_PX = -300; // hook이 화면 위로 사라진 뒤 몇 px 더 지나서 보여줄지

ScrollTrigger.create({
  trigger: ".hook",
  start: `bottom top+=${DELAY_PX}`, // 🔹 hook의 bottom이 viewport top을 지나 +DELAY_PX일 때
  onEnter: () => {
    titleEl.classList.add("fixed-title");
    gsap.to(titleEl, { autoAlpha: 1, duration: 1, ease: "power2.out" });
  },
  onLeaveBack: () => {
    gsap.to(titleEl, { autoAlpha: 0, duration: 0.25, onComplete: () => {
      titleEl.classList.remove("fixed-title");
    }});
  }
});

// 3) 스테이지 자체를 핀(화면 고정)
ScrollTrigger.create({
  trigger: ".about-sticky",
  start: "top top",
  end: () => "+=" + (items.length * 900), // 필요하면 900 숫자만 조절
  pin: true,
  scrub: true,
  pinSpacing: true
});

// 4) 진행도에 따라 활성 카드 전환 (겹치기 연출)
ScrollTrigger.create({
  trigger: ".about-sticky",
  start: "top top",
  end: () => "+=" + (items.length * 900),
  scrub: true,
  onUpdate: (self) => {
    const idx = Math.min(items.length - 1, Math.floor(self.progress * items.length));
    items.forEach((el, i) => {
      el.classList.toggle("active", i === idx);
      el.classList.toggle("dimmed", i < idx);
    });
  }
});

// 5) 등장 애니메이션은 sticky 대상이 아닌 '자식'에만
items.forEach((item) => {
  const innerEls = item.querySelectorAll(".about-img, .about-text");
  gsap.fromTo(innerEls, { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.05,
    scrollTrigger: { trigger: item, start: "top 90%" }
  });
});


// teamproject
// ===== Intro: 가로 스크롤 =====
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const wrap  = document.querySelector(".intro-wrap");
  if (!wrap) return;

  const track = wrap.querySelector(".intro-track");

  // 트랙 총 가로 길이 - 화면 너비 만큼 이동
  const len = () => Math.max(0, track.scrollWidth - window.innerWidth);

  // 가로 스크롤
  gsap.to(track, {
    x: () => -len(),
    ease: "none",
    scrollTrigger: {
      id: "intro-horizontal",
      trigger: wrap,
      start: "top top",
      end: () => "+=" + len(),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  window.addEventListener("resize", () => ScrollTrigger.refresh());
})();


(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* 0) 인트로 한 번만 핀 */
  const intro = document.querySelector(".tproj-intro");
  if (intro) {
    ScrollTrigger.create({
      id: "tproj-intro-pin",
      trigger: intro,
      start: "top top",
      end: "+=700",        // 인트로 멈춰있는 길이 (원하면 500~1200 조절)
      pin: true,
      scrub: true
    });
  }

  /* 1) 각 프로젝트: 헤더 살짝 보여주고 → 가로 스크롤 */
  document.querySelectorAll(".tproj-sec").forEach((sec, i) => {
    const head  = sec.querySelector(".tproj-head");
    const wrap  = sec.querySelector(".tproj-wrap");
    const track = sec.querySelector(".tproj-track");
    const slides = sec.querySelectorAll(".tproj-slide");

    // 가로 길이 계산
    const len = () => Math.max(0, track.scrollWidth - window.innerWidth);

    // 스테이지 핀
    ScrollTrigger.create({
      id: `tproj-pin-${i}`,
      trigger: wrap,
      start: "top top",
      end: () => "+=" + (len() || 1),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1
    });

// 🔒 타이틀도 같은 범위 동안 고정 (여백 추가 X)
ScrollTrigger.create({
  id: `tproj-headpin-${i}`,
  trigger: wrap,
  start: "top top",
  end: () => "+=" + len(),
  pin: head,
  pinSpacing: false,
  anticipatePin: 1,
  onEnter:     () => gsap.set(head, {autoAlpha: 1}),
  onEnterBack: () => gsap.set(head, {autoAlpha: 1}),
  onLeave:     () => gsap.set(head, {autoAlpha: 0}),  // ← 다음 섹션에선 안 보이게
  onLeaveBack: () => gsap.set(head, {autoAlpha: 0})
});
    // 트랙 이동 + 슬라이드 스냅(한 장씩 크게)
    gsap.to(track, {
      x: () => -len(),
      ease: "none",
      scrollTrigger: {
        id: `tproj-move-${i}`,
        trigger: wrap,
        start: "top top",
        end: () => "+=" + len(),
        scrub: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: (v) => {
            const steps = slides.length - 1;
            return steps>0 ? Math.round(v * steps)/steps : 0;
          },
          duration: 0.25
        }
      }
    });
  });

  window.addEventListener("resize", () => ScrollTrigger.refresh());
})();

function splitIntoLines(p){
  // 원문 가져오기 (br는 공백으로, 공백은 1칸으로)
  const raw = p.textContent.replace(/\s+/g,' ').trim();
  p.innerHTML = '';

  // 단어 span 임시 생성
  const words = raw.split(' ');
  const temp = [];
  words.forEach(w=>{
    const s = document.createElement('span');
    s.textContent = w + ' ';
    p.appendChild(s);
    temp.push(s);
  });

  // 줄 그룹핑
  let lines = [], top = null, buf = [];
  temp.forEach(s=>{
    const y = s.offsetTop;
    if(top === null) top = y;
    if(y !== top){ lines.push(buf); buf = []; top = y; }
    buf.push(s);
  });
  if(buf.length) lines.push(buf);

  // 줄 래퍼로 재구성
  p.innerHTML = '';
  lines.forEach(line=>{
    const wrap = document.createElement('span');
    wrap.className = 'hover-line';
    line.forEach(s=> wrap.appendChild(s));
    p.appendChild(wrap);
  });
}

// 실행 & 재계산(폰트 로드, 리사이즈)
function applyAll(){
  document.querySelectorAll('.line-hover').forEach(splitIntoLines);
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(applyAll);
} else {
  window.addEventListener('load', applyAll);
}

let t;
window.addEventListener('resize', ()=>{ clearTimeout(t); t = setTimeout(applyAll, 120); });

// 그리드이미지확대
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".reveal-scene",
    start: "top top",
    end: () => "+=" + window.innerHeight, // 스크롤 길이
    scrub: 1,
    pin: true,
    pinSpacing: true,   // 바로 붙게 하려면 false로 바꿔도 됨
    anticipatePin: 1,
    invalidateOnRefresh: true
  }
});

// 1) 전체 구간: 이미지 확대
tl.to(".grid-img", { scale: 2, ease: "none" }, 0);

// 2) 끝 20% 구간만: 장면 페이드아웃(자연스럽게 사라짐)
tl.to(".reveal-scene", { autoAlpha: 0, ease: "power1.out" }, 0.8);
//            ▲ 0.8은 타임라인 진행도의 80% 시점. 0.8~1.0 사이에서만 서서히 사라짐


// 클론 따라다니는 이미지
// 기존 con02 hover 스크립트 전부 지우고 아래로 교체
let activeImg = null;

gsap.utils.toArray(".con02 ul li a").forEach((link) => {
  const img = link.querySelector("img.fadeImg");
  gsap.set(img, { autoAlpha: 0 });

  link.addEventListener("mouseenter", () => {
    if (activeImg && activeImg !== img) {
      gsap.to(activeImg, { autoAlpha: 0, duration: 0.2 });
    }
    gsap.to(img, { autoAlpha: 1, duration: 0.25 });
    activeImg = img;
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(img, { autoAlpha: 0, duration: 0.25 });
    if (activeImg === img) activeImg = null;
  });
});

// click-hover
document.querySelectorAll('.tproj-slide').forEach(slide => {
  const fx = slide.querySelector('.click-fx');
  if(!fx) return; // 없으면 그냥 스킵

  slide.addEventListener('mouseenter', () => {
    fx.style.opacity = '1';
    fx.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  slide.addEventListener('mousemove', (e) => {
    const r = slide.getBoundingClientRect();
    fx.style.left = (e.clientX - r.left) + 'px';
    fx.style.top  = (e.clientY - r.top)  + 'px';
  });

  slide.addEventListener('mouseleave', () => {
    fx.style.opacity = '0';
    fx.style.transform = 'translate(-50%, -50%) scale(.9)';
  });
});

const containers = document.querySelectorAll('.c-right .img');

containers.forEach(container => {
  const clickFx = container.querySelector('.click-fx');

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    clickFx.style.left = `${x}px`;
    clickFx.style.top = `${y}px`;
    clickFx.style.opacity = 1;
  });

  container.addEventListener('mouseleave', () => {
    clickFx.style.opacity = 0;
  });
});

// qna
(function(){
  const single = true; // true=하나만 열림, false=여러 개 동시 열림
  const items = document.querySelectorAll('.acc-item');
  items.forEach((item)=>{
    const btn = item.querySelector('.acc-btn');
    const panel = item.querySelector('.acc-panel');

    // 초기 상태(aria-expanded=true면 열어둠)
    if(btn.getAttribute('aria-expanded') === 'true'){
      panel.style.height = panel.scrollHeight + 'px';
      panel.addEventListener('transitionend',()=>{ if(btn.getAttribute('aria-expanded')==='true'){ panel.style.height='auto'; }});
    }

    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if(single){
        items.forEach((other)=>{
          if(other !== item){
            const ob = other.querySelector('.acc-btn');
            const op = other.querySelector('.acc-panel');
            if(ob.getAttribute('aria-expanded') === 'true'){
              ob.setAttribute('aria-expanded','false');
              op.style.height = op.scrollHeight + 'px';
              requestAnimationFrame(()=>{ op.style.height = '0px'; });
            }
          }
        });
      }

      if(expanded){
        btn.setAttribute('aria-expanded','false');
        panel.style.height = panel.scrollHeight + 'px';
        requestAnimationFrame(()=>{ panel.style.height = '0px'; });
      }else{
        btn.setAttribute('aria-expanded','true');
        panel.style.height = panel.scrollHeight + 'px';
        panel.addEventListener('transitionend', function onEnd(e){
          if(e.propertyName!=='height') return;
          panel.style.height = 'auto';
          panel.removeEventListener('transitionend', onEnd);
        });
      }
    });
  });
})();

// 마우스커서
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // 0.1 → 따라오는 속도 (값을 올리면 빨라지고, 줄이면 더 느려짐)
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animate);
}

animate();

// gnb관련
  // ===== 부드러운 스크롤 (헤더 높이 고려) =====
  const headerEl = document.querySelector('header'); // 없으면 null
  const headerH = headerEl ? headerEl.offsetHeight : 0;

  const navLinks = document.querySelectorAll('.gnb a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      const y = target.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ===== 현재 섹션에 맞춰 메뉴 활성화 =====
  // 관찰할 섹션: gnb에 연결된 id만 자동으로 수집
  const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').slice(1));
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const linkById = {};
  navLinks.forEach(a => { linkById[a.getAttribute('href').slice(1)] = a; });

  // 헤더 높이를 고려해서 활성화 시점을 자연스럽게 조정
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        // active 토글
        navLinks.forEach(a => a.classList.remove('active'));
        const active = linkById[id];
        if (active) active.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.35,                          // 섹션의 35%가 보이면 활성화
    rootMargin: `-${headerH}px 0px -40% 0px`  // 헤더/하단 여백 감안
  });

  sections.forEach(sec => observer.observe(sec));

  // 헤더고정
  // ==== 스크롤 방향에 따라 헤더 숨김/노출(위로 올리면 바로 보이기) ====
(function(){
  const header = document.querySelector('.fixHeader');
  if(!header) return;

  // 처음엔 보이게 시작 (메인에서 바로 보이도록)
  header.classList.add('show');

  let lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
  const THRESHOLD = 5; // 5px만 위로 올려도 나타남
  let ticking = false;

  function onScroll(){
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    const delta = y - lastY;

    // 최상단 근처에서는 항상 보임
    if (y < 10){
      header.classList.add('show');
      lastY = y;
      return;
    }

    // 스크롤 방향 판정
    if (delta < -THRESHOLD){        // 위로 스크롤
      header.classList.add('show'); // 즉시 나타남
    } else if (delta > THRESHOLD){  // 아래로 스크롤
      header.classList.remove('show'); // 숨김
    }

    lastY = y;
  }

  window.addEventListener('scroll', () => {
    if (!ticking){
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
})();

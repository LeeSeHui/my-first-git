$(document).on('click', 'a[href="#"]', function(e){e.preventDefault();});

// 스크롤라
$(function () {
    $('.animate').scrolla({
      mobile: true,
      once: false
    });
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
gsap.to(".visual img", {
    scale: 0.3,
    ease:"power2.out",
    scrollTrigger:{
        trigger: ".visual",
        start: "top top",
        end:"60% top",
        scrub: 1.5,
        // markers: true
    }
});


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


// 💥 About Me 타이틀 굵어지고 고정
ScrollTrigger.create({
  trigger: ".about-sticky",
  start: "top top",
  end: "50% top",
  scrub: true,
  onUpdate: (self) => {
    const wght = 100 + Math.round(self.progress * 800); // 점점 굵어짐
    document.querySelector(".about-title").style.fontVariationSettings = `"wght" ${wght}`;
  },
  onLeave: () => {
    document.querySelector(".about-title").classList.add("fixed-title");
  },
  onLeaveBack: () => {
    document.querySelector(".about-title").classList.remove("fixed-title");
  }
});


// 💥 카드 순차 등장 & 이전 카드 덮기
gsap.registerPlugin(ScrollTrigger);

const items = document.querySelectorAll(".about-item");

items.forEach((item, index) => {
  ScrollTrigger.create({
    trigger: ".about-sticky",
    start: `${10 + index * 35}% top`,
    end: `${10 + (index + 1) * 100}% top`,
    scrub: true,
    onUpdate: (self) => {
      items.forEach((el, i) => {
        el.classList.remove("active", "dimmed");

        if (i < index) {
          el.classList.add("dimmed");
        } else if (i === index) {
          el.classList.add("active");
        }
        // 👉 이후 카드들은 비활성
      });
    }
  });
});

ScrollTrigger.create({
  trigger: ".about-sticky",
  start: "top top",
  end: "bottom+=2000 top", // 필요한 만큼 길게
  pin: ".about-sticky",
  scrub: true,
});
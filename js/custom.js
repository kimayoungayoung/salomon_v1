document.addEventListener("DOMContentLoaded", function () {
    // luxy.init(); // luxy.js 실행
  });

  const ani01 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section01",
      start: "80% center",
      end: "bottom center",
      markers: true, // 디버깅을 위한 마커 표시
      pin: ".section01",
      scrub: 2,
    },
  });
  

  
  const videoTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".video-container",
        start: "top top", // 트리거 시작 위치
        pin:true,
        end: "bottom bottom", // 트리거 종료 위치
        markers:true,
        scrub: 1.5, // 스크롤 중에 부드럽게 애니메이션 적용
        duration: 3
    },
});

// 비디오 컨테이너의 너비 및 높이를 조절하는 애니메이션
videoTimeline.to(".home-video", {
    width: "100vw", // 가로로 화면 가득 채우도록 설정
    height: "100vh", // 세로로도 화면 가득 채우도록 설정
    // ease: "power1.out", // 이징 함수 설정 (선택 사항)
    duration: 3,
});

//   ani01.form(".section01_container", {
//     // opacity: 0,
//     // duration: 1, // 애니메이션 기간
//   });
// section02 시작
const ani04 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section04",
    start: "top top",
    end: "bottom 50%",
    // markers: true, // 섹션의 상단이 뷰포트 중앙에 닿을 때 애니메이션 시작
    pin: ".section04",
    scrub: 2,
  },
});

// section02_line 애니메이션
ani04.from(".line", {
  //opacity: 0,
  y: "-100%", // 초기 y 위치 (위에서 아래로)
  duration: 1, // 애니메이션 기간
  stagger: 1,
});

ani04.from(".mountain", {
  y: "100%", // 초기 y 위치 (아래에서 위로)
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  stagger: 2,
});

// shoes 애니메이션
ani04.from(".shoes", {
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  stagger: 3,
});

ani04.from(".logo", {
  x: "0%",
  opacity: 0,
  duration: 5.5, // 애니메이션 기간
  stagger: 4,
});

ani04.from(".sport", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

ani04.from(".style", {
  y: "50", // 초기 y 위치 (아래에서 위로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 6,
});

ani04.from(".slide", {
  x: "100%",
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 7,
});


ani04.to(".point", {
  opacity: 1, // 최종 투명도
  scale: 1.2, // 최종 크기
  duration: 0.5, // 애니메이션 기간
  delay: 1, // 시작 전 딜레이
  ease: "power1.inOut", // 이징 함수 (원하는 이징 함수로 변경)
});

ani04.from(".detail", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
});

ani04.from(".main_text", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  y: "-50", // 초기 y 위치 (위에서 아래로)
});

ani04.from(".sub_text", {
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  y: "-50",
});

// section02_p_02 애니메이션
ani04.to(".point2", {
  opacity: 1, // 최종 투명도
  scale: 1.2, // 최종 크기
  duration: 0.5, // 애니메이션 기간
  delay: 1, // 시작 전 딜레이
  ease: "power1.inOut", // 이징 함수 (원하는 이징 함수로 변경)
});

ani04.from(".detail2", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
});

ani04.from(".main_text2", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  y: "-50", // 초기 y 위치 (위에서 아래로)
});

ani04.from(".sub_text2", {
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  y: "-50",
});


const ani05 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section05",
    start: "top top",
    end: "bottom 10%",
    //   markers: true, // 섹션의 상단이 뷰포트 중앙에 닿을 때 애니메이션 시작
    pin: ".section05",
    scrub: 1,
  },
});

ani05.from(".slide2", {
  x: "-100%",
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 1,
});

// shoes 애니메이션
ani05.from(".shoes2", {
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  stagger: 2,
});

// section03_p 애니메이션
ani05.to(".point3", {
  opacity: 1, // 최종 투명도
  scale: 1.2, // 최종 크기
  duration: 0.5, // 애니메이션 기간
  delay: 1, // 시작 전 딜레이
  ease: "power1.inOut", // 이징 함수 (원하는 이징 함수로 변경)
});

ani05.from(".detail3", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
});

ani05.from(".main_text3", {
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  y: "-50", // 초기 y 위치 (위에서 아래로)
});

ani05.from(".sub_text3", {
  opacity: 0, // 초기 투명도
  duration: 3, // 애니메이션 기간
  y: "-50",
});

// "section03_letsinvent" 애니메이션
ani05.from(".letsinvent", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

// "오른쪽 큰 텍스트" 애니메이션
ani05.from(".text_01", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

ani05.from(".text_02", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

ani05.from(".text_03", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

ani05.from(".the", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});

ani05.from(".future", {
  y: "-50", // 초기 y 위치 (위에서 아래로)
  opacity: 0, // 초기 투명도
  duration: 1, // 애니메이션 기간
  stagger: 5,
});




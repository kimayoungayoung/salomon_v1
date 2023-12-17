document.addEventListener("DOMContentLoaded", function () {
    luxy.init(); // luxy.js 실행
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
        start: "top center", // 트리거 시작 위치
        end: "bottom center", // 트리거 종료 위치
        scrub: true, // 스크롤 중에 부드럽게 애니메이션 적용
    },
});

// 비디오 컨테이너의 너비 및 높이를 조절하는 애니메이션
videoTimeline.to(".home-video", {
    width: "100vw", // 가로로 화면 가득 채우도록 설정
    height: "100vh", // 세로로도 화면 가득 채우도록 설정
    ease: "power1.out", // 이징 함수 설정 (선택 사항)
});

//   ani01.form(".section01_container", {
//     // opacity: 0,
//     // duration: 1, // 애니메이션 기간
//   });


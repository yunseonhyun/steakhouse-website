$(function () {
  let 현재페이지 = 0;
  const width = 300;
  const 이미지총갯수 = $(".first-slide").length;
}

  /* 
       left: -width * 현재페이지,
       첫 번째 이미지 (현재페이지0)
       left: -300px * 0 = 0
       슬라이드 위치가 0 원래 위치에 존재

       두 번째 이미지 (현재페이지 = 1)
       left: -300px * 1 = -300px
       슬라이드 래퍼가 왼쪽으로 -300px 이동
       
       세 번째 이미지 (현재페이지 = 2)
       left: -300px * 2 = -600px
       슬라이드 래퍼가 왼쪽으로 -600px 이동
  
  
  */
  $("#first-next").click(function () {
    // 1. 현재 페이지가 이미지 총 갯수보다 적을 떄
    if (현재페이지 < 이미지총갯수 - 1) {
      console.log("현재페이지", 현재페이지);
      console.log("이미지총갯수", 이미지총갯수);
      현재페이지++;
      $(".first-wrap").animate(
        {
          // 이미지 교체 왼쪽으로 이미지 교체 0.5초 동안 교체할 것
          left: -width * 현재페이지,
        },
        500
      );
    }
  });
  $("#first-prev").click(function () {
    // 2. 이전 페이지가 0보다 클 때
    if (현재페이지 > 0) {
      현재페이지--;
      $(".first-wrap").animate(
        {
          left: -width * 현재페이지,
        },
        500
      );
    }
  });
});

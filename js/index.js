$(function () {
  let 현재페이지 = 0;
  const width = $(".first-slide").outerWidth();
  const 이미지총갯수 = $(".first-slide").length;

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
      현재페이지++;
    } else {
      현재페이지 = 0;
    }
    $(".first-wrap").animate(
      {
        // 이미지 교체 왼쪽으로 이미지 교체 0.5초 동안 교체할 것
        left: -width * 현재페이지,
      },
      500
    );
  });

  $("#first-prev").click(function () {
    // 2. 이전 페이지가 0보다 클 때
    if (현재페이지 > 0) {
      현재페이지--;
    } else {
      현재페이지 = 3;
    }
    $(".first-wrap").animate(
      {
        left: -width * 현재페이지,
      },
      500
    );
  });
});

$("#first-next").hover(
  function () {
    $("#first-nextBtn").attr(
      "src",
      "https://www.outback.co.kr/asset/images/util/btn_main_visual_next_on.png"
    );
  },
  function () {
    // 마우스 나갔을 때
    $("#first-nextBtn").attr(
      "src",
      "https://www.outback.co.kr/asset/images/util/btn_main_visual_next_off.png"
    );
  }
);

$("#first-prev").hover(
  function () {
    $("#first-prevBtn").attr(
      "src",
      "https://www.outback.co.kr/asset/images/util/btn_main_visual_prev_on.png"
    );
  },
  function () {
    $("#first-prevBtn").attr(
      "src",
      "https://www.outback.co.kr/asset/images/util/btn_main_visual_prev_off.png"
    );
  }
);

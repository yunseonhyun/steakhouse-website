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

document.getElementById("loginBtn").addEventListener("click", function () {
  window.open(
    "../steakhouse-website/pages/login.html",
    "_blank",
    "width=720,height=1000"
  );
});

document.getElementById("registerBtn").addEventListener("click", function () {
  window.open(
    "../steakhouse-website/pages/register.html",
    "_blank",
    "width=720,height=1000"
  );
});

document.getElementById("reserve").addEventListener("click", function () {
  window.open(
    "https://m.place.naver.com/place/list?query=%EC%95%84%EC%9B%83%EB%B0%B1%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&x=126.9783880&y=37.5666100"
  );
});

document.getElementById("savePoint").addEventListener("click", function () {
  const result = confirm(
    "로그인이 필요한 서비스 입니다. \n로그인 페이지로 이동하시겠습니까?"
  );

  if (result) {
    window.open("login.html", "_blank", "width=720,height=1000");
  }
});

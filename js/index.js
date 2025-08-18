$(function () {
  let 현재페이지 = 0;
  const width = $(".first-slide").outerWidth(); // 초기값 고정 (디자인 기준 너비)
  const 이미지총갯수 = $(".first-slide").length;
  let firstAutoSlideTimeout;

  function moveSlide(index) {
    $(".first-wrap")
      .stop(true, true)
      .animate(
        {
          left: -width * index,
        },
        500
      );
  }

  function resetFirstAutoSlide() {
    clearTimeout(firstAutoSlideTimeout);
    firstAutoSlideTimeout = setTimeout(() => {
      현재페이지 = (현재페이지 + 1) % 이미지총갯수;
      moveSlide(현재페이지);
      resetFirstAutoSlide();
    }, 13000);
  }

  $("#first-next").click(function () {
    현재페이지 = (현재페이지 + 1) % 이미지총갯수;
    moveSlide(현재페이지);
    resetFirstAutoSlide(); // 타이머 리셋
  });

  $("#first-prev").click(function () {
    현재페이지 = 현재페이지 > 0 ? 현재페이지 - 1 : 이미지총갯수 - 1;
    moveSlide(현재페이지);
    resetFirstAutoSlide(); // 타이머 리셋
  });

  resetFirstAutoSlide();
});

$("#first-next").hover(
  function () {
    $("#first-nextBtn").attr(
      "src",
      "https://www.outback.co.kr/asset/images/util/btn_main_visual_next_on.png"
    );
  },
  function () {
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
  window.open("pages/login.html", "_blank", "width=720,height=1000");
});

document.getElementById("registerBtn").addEventListener("click", function () {
  window.open("pages/register.html", "_blank", "width=720,height=1000");
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
    window.open(
      "../steakhouse-website/pages/login.html",
      "_blank",
      "width=720,height=1000"
    );
  }
});

let slides = [];
let currentIndex = 0;
let autoSlideTimeout;

function updateSlide(index) {
  const leftImg = document.getElementById("left-img");
  const rightImg = document.getElementById("right-img");
  const textLarge = document.getElementById("text-large");
  const textMedium = document.getElementById("text-medium");
  const textSmall = document.getElementById("text-small");

  const prevIndex = index === 0 ? slides.length - 1 : index - 1;

  leftImg.src = slides[prevIndex].image;
  leftImg.alt = slides[prevIndex].texts.large + " 이전 사진";

  rightImg.src = slides[index].image;
  rightImg.alt = slides[index].texts.large + " 현재 사진";

  textLarge.innerHTML = slides[index].texts.large.replace(/\n/g, "<br>");
  textMedium.textContent = slides[index].texts.medium;
  textSmall.innerHTML = slides[index].texts.small.replace(/\n/g, "<br>");
}

function resetAutoSlide() {
  if (autoSlideTimeout) clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
    resetAutoSlide();
  }, 3000);
}

function fetchSlides() {
  fetch("json/index.json")
    .then((response) => {
      if (!response.ok) throw new Error("JSON 불러오기 실패");
      return response.json();
    })
    .then((data) => {
      slides = data;
      updateSlide(currentIndex);
      resetAutoSlide();
    })
    .catch((error) => {
      console.error("슬라이드 데이터를 불러오지 못했습니다:", error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  fetchSlides();

  document.getElementById("second-next").addEventListener("click", () => {
    if (slides.length === 0) return;
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
    resetAutoSlide(); // 리셋
  });

  document.getElementById("second-prev").addEventListener("click", () => {
    if (slides.length === 0) return;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
    resetAutoSlide(); // 리셋
  });
});

document.getElementById("bliClick").addEventListener("click", function () {
  event.preventDefault(); // 링크 기본 동작 막기
  window.location.href = "pages/menu.html";
});

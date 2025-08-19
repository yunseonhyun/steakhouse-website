document.getElementById("loginBtn").addEventListener("click", function () {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
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

document.getElementById("registerBtn").addEventListener("click", function () {
  event.preventDefault();
  window.open("register.html", "_blank", "width=720,height=1000");
});

/* 클릭시 이동 */
document
  .getElementById("OUTBACKSTORY")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "brand.html?submenu=OUTBACK%20STORY";
  });

document
  .getElementById("BEEFSTORY")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "brand.html?submenu=BEEF%20STORY";
  });

document
  .getElementById("STEAKACADEMY")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "brand.html?submenu=STEAK%20ACADEMY";
  });

document
  .getElementById("BEVERAGES")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "menu.html?submenu=BEVERAGES%20%26%20ALCOHOL";
  });

document
  .getElementById("APPETIZERS")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "menu.html?submenu=APPETIZERS%20%26%20SALADS";
  });

document
  .getElementById("BLACKLABEL")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "menu.html?submenu=BLACK%20LABEL%20CHEF%20EDITION";
  });

document.getElementById("CREDIT").addEventListener("click", function (event) {
  event.preventDefault(); // 링크 기본 동작 막기
  window.location.href = "benefit.html";
});

document
  .getElementById("고객의소리")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    window.location.href = "customer-service.html";
  });

document.querySelector(".mainmenu").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue && selectedValue !== "#") {
    // '#'은 이동 안 하게 처리
    window.location.href = selectedValue + ".html";
  }
});

document.getElementById("homeBtn").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document.getElementById("siteMapBtn").addEventListener("click", function () {
  window.location.href = "../sitemap.html";
});

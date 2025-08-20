// 로그인 버튼 클릭
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
});

// 회원가입 버튼 클릭
document
  .getElementById("registerBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("register.html", "_blank", "width=720,height=1000");
  });

// 예약 버튼 클릭
document.getElementById("reserve").addEventListener("click", function () {
  window.open(
    "https://m.place.naver.com/place/list?query=%EC%95%84%EC%9B%83%EB%B0%B1%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&x=126.9783880&y=37.5666100"
  );
});

// 적립금 버튼 클릭
document.getElementById("savePoint").addEventListener("click", function () {
  const result = confirm(
    "로그인이 필요한 서비스 입니다. \n로그인 페이지로 이동하시겠습니까?"
  );
  if (result) {
    window.open("login.html", "_blank", "width=720,height=1000");
  }
});

// mainmenu 변경 시 페이지 이동 및 brand-location 텍스트 변경
document.querySelector(".mainmenu").addEventListener("change", function () {
  const selectedValue = this.value;
  const selectedText = this.options[this.selectedIndex].text.trim();

  // 페이지 이동 (value가 "#"일 경우 이동하지 않음)
  if (selectedValue && selectedValue !== "#") {
    window.location.href = selectedValue + ".html";
  }

  // brand-location 텍스트 업데이트
  document.getElementById(
    "brand-location"
  ).textContent = `Home > ${selectedText} > ${selectedText}`;

  // submenu 기본값 초기화
  const submenu = document.querySelector(".submenu");
  if (submenu) {
    submenu.selectedIndex = 0;
  }
});

// submenu 변경 시 brand-location 텍스트 변경
document.querySelector(".submenu").addEventListener("change", function () {
  const mainmenu = document.querySelector(".mainmenu");
  const mainText = mainmenu.options[mainmenu.selectedIndex].text.trim();
  const subText = this.options[this.selectedIndex].text.trim();

  document.getElementById(
    "brand-location"
  ).textContent = `Home > ${mainText} > ${subText}`;
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

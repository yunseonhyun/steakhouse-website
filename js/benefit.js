// 카드 버튼들 선택
const cardButtons = document.querySelectorAll(".cardBtn button");

// 로그인 버튼
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
});

// 회원가입 버튼
document
  .getElementById("registerBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("register.html", "_blank", "width=720,height=1000");
  });

// 포인트 저장 버튼
document.getElementById("savePoint").addEventListener("click", function () {
  const result = confirm(
    "로그인이 필요한 서비스 입니다. \n로그인 페이지로 이동하시겠습니까?"
  );
  if (result) {
    window.open("login.html", "_blank", "width=720,height=1000");
  }
});

// 예약 버튼
document.getElementById("reserve").addEventListener("click", function () {
  window.open(
    "https://m.place.naver.com/place/list?query=%EC%95%84%EC%9B%83%EB%B0%B1%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&x=126.9783880&y=37.5666100"
  );
});

// 카드 버튼 active 처리
cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cardButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// 첫 번째 카드 버튼에 기본 active 설정
if (cardButtons.length > 0) {
  cardButtons[0].classList.add("active");
}

// ✅ 브랜드 위치 경로 동적 변경
const mainMenu = document.querySelector(".mainmenu");
const subMenu = document.querySelector(".submenu");
const brandLocation = document.getElementById("brand-location");

// 초기 값 설정
brandLocation.textContent = "Home > BENEFIT > BENEFIT";

// 이전 선택 추적 변수
let previousMainIndex = mainMenu.selectedIndex;

// 경로 업데이트 함수
function updateBrandLocation(forceDefault = false) {
  const mainText = mainMenu.options[mainMenu.selectedIndex].textContent.trim();
  const subText = subMenu.options[subMenu.selectedIndex]?.textContent.trim();

  // 강제로 기본값으로 설정하는 경우 또는 BENEFIT 선택 & 서브 선택 안함
  if (
    forceDefault ||
    (mainText === "BENEFIT" &&
      (subMenu.selectedIndex === 0 || subMenu.selectedIndex === -1))
  ) {
    brandLocation.textContent = "Home > BENEFIT > BENEFIT";
  } else if (mainText === subText || !subText || subText === "") {
    brandLocation.textContent = `Home > ${mainText}`;
  } else {
    brandLocation.textContent = `Home > ${mainText} > ${subText}`;
  }
}

// 메인 메뉴 클릭 시에도 같은 항목을 다시 선택한 경우 처리
mainMenu.addEventListener("click", () => {
  const currentIndex = mainMenu.selectedIndex;
  const currentText = mainMenu.options[currentIndex].textContent.trim();

  if (currentText === "BENEFIT" && currentIndex === previousMainIndex) {
    // 같은 BENEFIT을 다시 클릭한 경우 초기화
    subMenu.selectedIndex = 0; // 서브메뉴도 초기화
    updateBrandLocation(true);
  }

  previousMainIndex = currentIndex;
});

// 셀렉트 변경 시에도 업데이트
mainMenu.addEventListener("change", () => {
  updateBrandLocation();
});
subMenu.addEventListener("change", () => {
  updateBrandLocation();
});

document.querySelector(".mainmenu").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue && selectedValue !== "#") {
    // '#'은 이동 안 하게 처리
    window.location.href = selectedValue + ".html";
  }
});

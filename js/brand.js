document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
});

document
  .getElementById("registerBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("register.html", "_blank", "width=720,height=1000");
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

document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.querySelector(".mainmenu");
  const subMenu = document.querySelector(".submenu");
  const brandLocation = document.getElementById("brand-location");
  const container = document.getElementById("midImage");

  // 기본 위치 텍스트 초기 설정
  brandLocation.textContent = "Home > BRAND > BRAND";

  let previousMainIndex = mainMenu.selectedIndex;

  // 브랜드 이미지 및 유튜브 업데이트 함수 (기존 fetch brand.json 코드)
  fetch("../json/brand.json")
    .then((res) => res.json())
    .then((data) => {
      function updateImages() {
        const selected = subMenu.value.trim();
        container.innerHTML = "";

        if (data[selected]) {
          const items = data[selected];
          items.forEach((item) => {
            if (item.url) {
              const img = document.createElement("img");
              img.src = item.url;
              img.alt = `${selected} 이미지`;
              img.classList.add("brand-image");
              if (selected === "STEAK ACADEMY") {
                img.classList.add("steak-academy-image");
              }
              container.appendChild(img);
            }
            if (item.youtube) {
              const iframe = document.createElement("iframe");
              iframe.src = item.youtube;
              iframe.width = "60%";
              iframe.height = "570";
              iframe.frameBorder = "0";
              iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
              iframe.allowFullscreen = true;
              iframe.classList.add("youtube-frame");
              container.appendChild(iframe);
            }
          });
        } else {
          container.innerHTML = "<p>해당 이미지가 없습니다.</p>";
        }
      }

      // 브랜드 위치 업데이트 함수
      function updateBrandLocation(forceDefault = false) {
        const mainText =
          mainMenu.options[mainMenu.selectedIndex].textContent.trim();
        const subText =
          subMenu.options[subMenu.selectedIndex]?.textContent.trim();

        if (
          forceDefault ||
          (mainText === "BENEFIT" &&
            (subMenu.selectedIndex === 0 || subMenu.selectedIndex === -1)) ||
          (mainText === "BRAND" &&
            (subMenu.selectedIndex === 0 || subMenu.selectedIndex === -1))
        ) {
          brandLocation.textContent = `Home > ${mainText} > ${mainText}`;
        } else if (mainText === subText || !subText || subText === "") {
          brandLocation.textContent = `Home > ${mainText}`;
        } else {
          brandLocation.textContent = `Home > ${mainText} > ${subText}`;
        }
      }

      // 🔥 [추가된 부분] URL 파라미터로 submenu 선택값 설정
      const urlParams = new URLSearchParams(window.location.search);
      const submenuParam = urlParams.get("submenu");

      if (submenuParam) {
        for (let i = 0; i < subMenu.options.length; i++) {
          if (subMenu.options[i].value === submenuParam) {
            subMenu.selectedIndex = i;
            break;
          }
        }
      }

      // 초기 이미지 로딩
      updateImages();
      updateBrandLocation();

      subMenu.addEventListener("change", function () {
        updateImages();
        updateBrandLocation();
      });

      // mainMenu 클릭 시 다시 같은 메뉴 누르면 기본 경로로 초기화
      mainMenu.addEventListener("click", () => {
        const currentIndex = mainMenu.selectedIndex;
        const currentText = mainMenu.options[currentIndex].textContent.trim();

        if (
          (currentText === "BENEFIT" || currentText === "BRAND") &&
          currentIndex === previousMainIndex
        ) {
          subMenu.selectedIndex = 0;
          updateBrandLocation(true);
          updateImages();
        }

        previousMainIndex = currentIndex;
      });

      mainMenu.addEventListener("change", () => {
        updateBrandLocation();
        const selectedValue = mainMenu.value;
        if (selectedValue && selectedValue !== "#") {
          if (selectedValue === "benefit" || selectedValue === "brand") {
            subMenu.selectedIndex = 0;
            updateBrandLocation(true);
            updateImages();
          } else {
            window.location.href = selectedValue + ".html";
          }
        }
      });
    })
    .catch((err) => {
      console.error("JSON 불러오기 실패:", err);
    });
});

document.getElementById("homeBtn").addEventListener("click", function () {
  window.location.href = "../index.html";
});

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
  const submenu = document.querySelector(".submenu");
  const container = document.getElementById("midImage");

  fetch("../json/brand.json")
    .then((res) => res.json())
    .then((data) => {
      function updateImages() {
        const selected = submenu.value.trim();
        container.innerHTML = "";

        if (data[selected]) {
          const items = data[selected];
          items.forEach((item) => {
            // 이미지 처리
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

            // 유튜브 영상 처리
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

      updateImages();
      submenu.addEventListener("change", updateImages);
    })
    .catch((err) => {
      console.error("JSON 불러오기 실패:", err);
    });
});

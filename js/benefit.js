// 카드 버튼들 선택
const cardButtons = document.querySelectorAll(".cardBtn button");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 모든 버튼에서 active 클래스 제거
    cardButtons.forEach((btn) => btn.classList.remove("active"));

    // 클릭한 버튼에 active 클래스 추가
    button.classList.add("active");
  });
});

document.getElementById("reserve").addEventListener("click", function () {
  window.open(
    "https://m.place.naver.com/place/list?query=%EC%95%84%EC%9B%83%EB%B0%B1%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&x=126.9783880&y=37.5666100"
  );
});

document.getElementById("savePoint").addEventListener("click", function () {
  confirm("로그인이 필요한 서비스 입니다. \n로그인 페이지로 이동하시겠습니까?");

  if (confirm) {
    window.open("login.html", "_blank", "width=720,height=1000");
  }
});

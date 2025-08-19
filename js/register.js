$(function () {
  $("a").click(signUp);
});

function signUp(e) {
  e.preventDefault(); //기본 링크 동작 방지
  // 제출하기 일시 정지 상태로
  // 아래 정규식, 데이터 저장 여부 등 과 같은 규정을
  // 모두 확인한 후 result.html 이동할 수 있도록 설정

  // 입력값 가져오기
  const username = $("#username").val();
  const userpw = $("#userpw").val();

  let userList = JSON.parse(localStorage.getItem("userList") || "[]"); // 문자열 -> 배열 , 리스트 형태 변환

  // 새 회원 정보를 담을 json 형태의 배열 생성
  const newUser = {
    username: username,
    password: userpw,
  };

  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList)); // localStorage 저장할 때는 배열, 리스트 -> 문자열 형태로 변환

  // result.html 에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수이름 저장형태
  localStorage.setItem("username", username);
  localStorage.setItem("userpw", userpw);

  window.location.href = "login.html";
}

document.getElementById("close").addEventListener("click", function () {
  event.preventDefault();
  window.close();
});

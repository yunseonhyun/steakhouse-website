document.getElementById("loginBtn").addEventListener("click", function () {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
});

document.getElementById("로그인하기").addEventListener("click", function () {
  event.preventDefault();
  window.open("login.html", "_blank", "width=720,height=1000");
});

document.getElementById("registerBtn").addEventListener("click", function () {
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

document
  .getElementById("비회원문의하기")
  .addEventListener("click", function () {
    event.preventDefault();
    document.getElementById("문의하기").innerHTML = `
      <div class="문의form">
      <div class="작성form">
        <table>
          <tbody>
            <!-- 13행 -->
            <!-- 반복문처럼 표시 -->
            <tr>
              <td id="c1">문의 유형 선택</td>
              <td id="c2">
                <select class="문의유형옵션">
                  <option class="option">매장 서비스</option>
                  <option class="option">딜리버리 서비스</option>
                  <option class="option">부메랑 클럽</option>
                  <option class="option">홈페이지 및 APP</option>
                  <option class="option">이벤트</option>
                  <option class="option">제휴 서비스</option>
                  <option class="option">지류상품권</option>
                  <option class="option">기프트카드/모바일상품권</option>
                  <option class="option">아카데미</option>
                  <option class="option">채용문의</option>
                  <option class="option">기타</option>
                </select>
              </td>
            </tr>
            <tr>
              <td id="a1">이름</td>
              <td id="a2"><input type="text" id="username" /></td>
            </tr>
            <tr>
              <td id="a1">연락처</td>
              <td id="a2">
                <select class="전번앞자리">
                  <option class="number" selected>010</option>
                  <option class="number">011</option>
                  <option class="number">016</option>
                  <option class="number">017</option>
                  <option class="number">018</option>
                  <option class="number">019</option>
                </select>
                -
                <input type="number" id="중간번호" />
                -
                <input type="number" id="끝번호" />
              </td>
            </tr>
            <tr>
              <td id="a1">이메일</td>
              <td id="a2">
                <input type="text" id="prevEmail" /> @
                <input type="text" id="nextEmail" placeholder="직접입력" />
                <select class="이메일뒷부분">
                  <option class="email" selected>직접입력</option>
                  <option class="email">outback.co.kr</option>
                  <option class="email">empal.com</option>
                  <option class="email">naver.com</option>
                  <option class="email">google.com</option>
                  <option class="email">hanmail.net</option>
                  <option class="email">korea.com</option>
                  <option class="email">nate.com</option>
                </select>
              </td>
            </tr>
            <tr>
              <td id="a1">방문매장</td>
              <td id="a2">
                <select class="방문매장">
                  <option class="number" selected>
                    방문하셨던 매장을 선택해주세요
                  </option>
                  <option class="number">가산점</option>
                  <option class="number">강남점</option>
                  <option class="number">거제점</option>
                  <option class="number">공항점</option>
                  <option class="number">고양스타필드점</option>
                  <option class="number">김포점</option>
                </select>
              </td>
            </tr>
            <tr>
              <td id="a1">방문 일자</td>
              <td id="a2"><input type="date" id="date" name="date" /></td>
            </tr>
            <tr>
              <td id="a1">방문 매장 만족도</td>
              <td id="a2">
                <label><input type="radio" name="만족도" /> 만족</label>&nbsp;&nbsp;
                <label><input type="radio" name="만족도" /> 불만족</label>
              </td>
            </tr>
            <tr>
              <td id="a1">동반 고객</td>
              <td id="a2">
                <label><input type="radio" name="동반고객" /> 가족 </label>&nbsp;&nbsp;
                <label><input type="radio" name="동반고객" /> 연인</label>&nbsp;&nbsp;
                <label><input type="radio" name="동반고객" /> 직장동료</label>&nbsp;&nbsp;
                <label><input type="radio" name="동반고객" /> 친구</label>&nbsp;&nbsp;
                <label><input type="radio" name="동반고객" /> 기타</label>
              </td>
            </tr>
            <tr>
              <td id="a1">메뉴 선택</td>
              <td id="a2">
                <label
                  ><input type="radio" name="메뉴선택" /> 담당직원의 추천으로
                </label>
                <label
                  ><input type="radio" name="메뉴선택" /> 메뉴를 보고
                  직접</label
                >
              </td>
            </tr>
            <tr>
              <td id="a1">제목</td>
              <td id="a2"><input type="text" id="title" /></td>
            </tr>
            <tr>
              <td id="a1">내용</td>
              <td id="a2">
                <textarea rows="5" cols="40" style="resize: none"></textarea>
                <span>
                  <br />※ 아웃백에 관한 고객님의 의견을 적어주세요 (최대 국문
                  4,000자/ 영문 8,000자 입력 가능)
                </span>
              </td>
            </tr>
            <tr>
              <td id="b1">첨부파일</td>
              <td id="b2">
                <form
                  action="/upload"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <label for="file"></label>
                  <input type="file" id="file" name="file" />
                </form>
              </td>
            </tr>
          </tbody>
        </table>

       
      </div>
    </div>`;
  });

document
  .getElementById("비회원문의하기")
  .addEventListener("click", function () {
    event.preventDefault();
    document.getElementById("비회원btn").innerHTML = `<div class="btns">
          <button id="문의버튼">문의하기</button>
          <button id="취소버튼">취소하기</button>
        </div>`;
  });

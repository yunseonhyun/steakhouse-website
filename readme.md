# 🥩 아웃백 스테이크하우스 웹사이트

한국 아웃백 스테이크하우스 공식 웹사이트의 클론 프로젝트입니다. 반응형 디자인과 동적 메뉴 시스템을 구현하여 실제 웹사이트와 유사한 사용자 경험을 제공합니다.

## 라이브 데모

<div align="center">

### **[배포된 웹사이트 보기](https://steakhouse-website-eight.vercel.app/)**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://steakhouse-website-eight.vercel.app/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://steakhouse-website-eight.vercel.app/)

**별도 설치 없이 바로 체험 가능**

</div>

## 프로젝트 개요

이 프로젝트는 실전 웹 개발 연습을 목적으로, 실제 운영 중인 패밀리 레스토랑 웹사이트를 그대로 구현한 클론 프로젝트입니다. UI 구성, 페이지 흐름, 기능 구현 방식 등을 직접 분석하고 재현함으로써, 개발 전반에 대한 이해도를 높이고자 했습니다.

### 주요 특징

- **반응형 웹 디자인**: 데스크톱, 태블릿, 모바일 최적화
- **동적 메뉴 시스템**: JSON 데이터 기반 실시간 메뉴 렌더링
- **인터랙티브 UI**: 자동 슬라이드 전환, 모달, 호버 효과

## 기술 스택

### Frontend

- **HTML5**: 페이지 구조 및 콘텐츠 마크업
- **CSS3**: Flexbox, Media Queries, Positioning, Object-fit, 애니메이션
- **JavaScript (ES6+)**: 비동기 데이터 처리 (fetch API), 이벤트 기반 인터랙션, DOM 직접 조작(document.getElementById)
- **jQuery 3.7.1**: AJAX 및 JSON 데이터 처리, CSS 스타일 및 클래스 동적 조작

### 디자인 & UI/UX

- **반응형 웹 디자인**: 윈도우 리사이즈 시 슬라이드 위치 자동 조정
- **자동 및 수동 슬라이드 전환**: 13초 및 3초 간격 자동 슬라이드, 버튼 클릭으로 즉시 전환
- **버튼 호버 이미지 변경 효과**: next/prev 버튼에 마우스 오버 시 이미지 변경
- **모달 팝업**: 로그인 및 회원가입 버튼 클릭 시 별도 창 오픈
- **CSS 미디어 쿼리**: 3단계 브레이크포인트 적용 (480px, 768px, 1024px)
- **실시간 메뉴 렌더링**: JSON 데이터를 활용한 동적 메뉴 생성 및 카테고리별 필터링

### 데이터 관리

- **JSON**: 메뉴 등 콘텐츠 정보를 구조화된 포맷으로 관리
- **AJAX**: JSON 파일을 비동기적으로 로드하여 페이지 새로고침 없이 콘텐츠 업데이트
- **동적 렌더링**: JSON 데이터를 기반으로 JavaScript/jQuery로 메뉴 DOM 요소 실시간 생성 및 삽입

## 프로젝트 구조

```
steakhouse-website/
│
├── 📄 index.html                 # 메인 홈페이지
├── 📝 readme.md                  # 프로젝트 문서
│
├── 🎨 css/                       # 스타일시트
│   ├── styles.css               # 전역 스타일 & 헤더/푸터
│   ├── index.css                # 홈페이지 전용
│   ├── menu.css                 # 메뉴 페이지 전용
│   ├── brand.css                # 브랜드 페이지 전용
│   ├── benefit.css              # 혜택 페이지 전용
│   ├── customer-service.css     # 고객서비스 페이지 전용
│   ├── login.css                # 로그인 모달 전용
│   ├── register.css             # 회원가입 모달 전용
│   └── sitemap.css              # 사이트맵 페이지 전용
│
├── 🖼️ images/                    # 이미지 리소스
│   ├── banners/                 # 배너 이미지
│   │   ├── brand10.png
│   │   ├── brand11.png
│   │   ├── brandMainImage.png
│   │   └── brand2.png
│   └── icones/                  # 아이콘 이미지
│       ├── brandCompany.png
│       ├── delivery.png
│       ├── indexBenefit.png
│       ├── indexBoomerang.png
│       ├── registerError.png
│       ├── reserve.png
│       └── savepoint.png
│
├── ⚙️ js/                        # JavaScript 파일
│   ├── index.js                 # 홈페이지 슬라이더 & 인터랙션
│   ├── menu.js                  # 메뉴 페이지 네비게이션
│   ├── brand.js                 # 브랜드 페이지 동적 콘텐츠
│   ├── benefit.js               # 혜택 페이지 카드 시스템
│   ├── customer-service.js      # 고객서비스 문의 폼
│   ├── login.js                 # 로그인 모달
│   ├── register.js              # 회원가입 모달
│   └── sitemap.js               # 사이트맵 네비게이션
│
├── 📊 json/                      # 데이터 파일
│   ├── brand.json               # 브랜드 이미지/동영상 데이터
│   └── index.json               # 홈페이지 슬라이더 데이터
│
└── 📃 pages/                     # 서브 페이지
    ├── menu.html                # 정적 메뉴 페이지
    ├── brand.html               # 브랜드 스토리
    ├── benefit.html             # 카드 혜택 정보
    ├── customer-service.html    # 고객 서비스
    ├── login.html               # 로그인 모달
    ├── register.html            # 회원가입 모달
    ├── sitemap.html             # 사이트맵
    ├── steak.json               # 전체 메뉴 데이터 (1,700줄)
    └── js/
        └── menus.js             # 동적 메뉴 시스템 (핵심 기능)
```

## 실행 방법

### 온라인에서 바로 체험

**가장 쉬운 방법** 별도 설치 없이 바로 사용 가능합니다.

👉 **[https://steakhouse-website-eight.vercel.app/](https://steakhouse-website-eight.vercel.app/)**

### 로컬 환경에서 실행

#### 요구 사항

- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹 서버 (개발 환경용)

#### 설치 및 실행 방법

1. **저장소 클론**

```bash
git clone https://github.com/your-username/steakhouse-website.git
cd steakhouse-website
```

2. **로컬 서버 실행**
   **VS Code Live Server 사용:**

- VS Code에서 프로젝트 열기
- Live Server 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server"

3. **브라우저에서 접속**

```
http://localhost:5500
```

## 핵심 기술 구현

### 동적 메뉴 시스템 (menus.js)

```javascript
// JSON 기반 동적 메뉴 생성
$.getJSON("steak.json", function (menuData) {
  const categories = Object.keys(menuData);

  // 카테고리별 버튼 동적 생성
  const menuButtons = categories.map((category) => {
    return $("<button></button>")
      .text(category)
      .on("click", function () {
        displayMenu(menuData, category);
      });
  });
});
```

### 슬라이더 시스템 (index.js)

```javascript
// 자동 슬라이더 (13초 간격)
function resetFirstAutoSlide() {
  clearTimeout(firstAutoSlideTimeout);
  firstAutoSlideTimeout = setTimeout(() => {
    현재페이지 = (현재페이지 + 1) % 이미지총갯수;
    moveSlide(현재페이지);
    resetFirstAutoSlide();
  }, 13000);
}
```

### 반응형 네비게이션

```css
@media (max-width: 768px) {
  .midBar {
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .midBar > .submenu {
    width: 280px;
    text-align: center;
    background-image: url("data:image/svg+xml...");
  }
}
```

## 주요 기능 하이라이트

### 1. 스마트 가격 포맷팅

- 3자리 수 콤마 자동 삽입
- 세트 메뉴 가격 분할 표시
- 와인 글라스/보틀 가격 구분

### 2. URL 기반 직접 접근

```javascript
// URL 파라미터로 메뉴 직접 접근
const urlParams = new URLSearchParams(window.location.search);
const submenuParam = urlParams.get("submenu");
if (submenuParam && categories.includes(submenuParam)) {
  displayMenu(menuData, submenuParam);
}
```

### 3. 모달 시스템

- 팝업 창 형태의 로그인/회원가입
- 중앙 정렬 및 반응형 크기 조절
- ESC 키 및 배경 클릭으로 닫기

### 4. 외부 서비스 연동

- 네이버 지도 (매장 찾기)
- YouTube 동영상 임베드
- 카드사 공식 사이트 링크

## 브라우저 호환성

### 지원 브라우저

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### 주요 기능 호환성

- ✅ CSS Grid & Flexbox
- ✅ ES6+ JavaScript
- ✅ jQuery 3.7.1
- ✅ CSS 미디어 쿼리
- ✅ JSON 파싱

## 📱 모바일에서 체험하기

모바일 기기에서 다음 URL을 입력하여 반응형 디자인을 직접 체험해보세요:

**🔗 https://steakhouse-website-eight.vercel.app/**

> 💡 **팁**: 크롬 개발자 도구에서 다양한 디바이스 크기로 테스트할 수 있습니다!

# Parallax Scroll Effects

패럴랙스 스크롤 효과를 구현한 웹 프로젝트입니다. 가로 및 세로 스크롤 효과를 통해 동적인 웹 경험을 제공합니다.

## 📁 프로젝트 구조

```
parallax-scroll/
├── css/
│   ├── parallax.css      # 패럴랙스 효과 스타일
│   └── reset.css         # CSS 리셋 스타일
├── horizontal-parallax-scrolling.html  # 가로 스크롤 효과
├── vertical-parallax-scrolling.html    # 세로 스크롤 효과
└── README.md
```

## 🚀 기능

### 가로 스크롤 효과 (`horizontal-parallax-scrolling.html`)

- 스크롤 시 가로 방향으로 콘텐츠가 이동하는 패럴랙스 효과
- 3개의 구역으로 나뉜 가로 스크롤 섹션
- 스냅 효과로 부드러운 전환
- GSAP 애니메이션 라이브러리 활용

### 세로 스크롤 효과 (`vertical-parallax-scrolling.html`)

- 스크롤 시 세로 방향으로 콘텐츠가 이동하는 패럴랙스 효과
- 3개의 구역으로 나뉜 세로 스크롤 섹션
- 스냅 효과로 부드러운 전환
- GSAP 애니메이션 라이브러리 활용

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: ES6+ 문법
- **GSAP**: GreenSock Animation Platform
- **CDN**: Cloudflare CDN을 통한 라이브러리 로드

## 📋 주요 특징

### 스크롤 기반 애니메이션

- `requestAnimationFrame`을 사용한 성능 최적화
- 스크롤 위치에 따른 동적 애니메이션
- 부드러운 전환 효과

### 반응형 디자인

- 뷰포트 단위(vw, vh) 사용
- 다양한 화면 크기에 대응
- 모바일 친화적 디자인

### 애니메이션 속도 조정

JavaScript에서 `duration` 값을 변경하여 애니메이션 속도를 조정할 수 있습니다:

```javascript
gsap.to(".sec4", { top: translateY + "vh", ease: "power2.out", duration: 0.5 });
```

### 스냅 임계값 조정

`snapThreshold` 값을 변경하여 스냅 효과의 민감도를 조정할 수 있습니다:

```javascript
let snapThreshold = 0.3; // 0.1 ~ 0.9 사이 값
```

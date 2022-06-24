## 최종 결과물 미리보기
---
![175326839-61ea5a70-43d9-4259-8e76-faca81dc9cc8](https://user-images.githubusercontent.com/61589338/175327556-2352e07a-d628-468d-baa5-fb0314e47ee5.gif)

## 프로젝트 설치 및 실행
---
```
npm install
npm start
```

## 기술 스택
---
* React
* Typescript
* styled-components

## 폴더 구조
---
```
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── common                       // 공용 파일들
│   │   └── FadeIn.ts                  // Fade-In 애니메이션
│   ├── components                   // 컴포넌트들
│   │   ├── AwardsInfo.tsx
│   │   ├── ContentLogo.tsx
│   │   └── MetricInfo.tsx
│   ├── hooks                        // 커스텀 훅
│   │   ├── useEaseOutNumber.ts       
│   │   └── useTimeout.ts
│   ├── images                       // 사용한 이미지
│   │   ├── badge-apple4x.png
│   │   ├── index.ts
│   │   ├── play-store2x.png
│   │   └── triple2x.png
│   ├── index.css
│   ├── index.tsx
│   ├── modules                      
│   │   └── styled-components.d.ts
│   ├── react-app-env.d.ts
│   └── style                        // 전역 스타일(reset포함)
│       └── global-style.ts
│       └── theme.ts
└── tsconfig.json
```
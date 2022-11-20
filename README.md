# Backpac UI Modules App

## 실행 방법

`yarn start`

## 사용 기술

- React(CRA)
- TypeScript
- Styled-components

## 구현 사항

### 카드 UI

![스크린샷 2022-11-09 오후 2 37 20](https://user-images.githubusercontent.com/64177590/200747708-22610ffd-d223-4eb7-89c1-461079a0ddc3.png)

#### `세로형` & `가로형` 레이아웃을 각각의 컴포넌트로 나누어 구현하였습니다.

하나의 카드 컴포넌트에 세로, 가로를 구현할 경우 컴포넌트 복잡성이 커지고, 그에 따라 컴포넌트 확장성이 어려워질 것을 고려하여
세로형을 기본 Card 컴포넌트로, 가로형을 HorizontalCard 컴포넌트로 따로 구현하게 되었습니다.

---

### 입력 폼 UI

![스크린샷 2022-11-09 오후 2 38 08](https://user-images.githubusercontent.com/64177590/200747819-8448455e-2557-41ed-a2d5-a849fabd29c7.png)

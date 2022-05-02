---------------------------------------- To Do DnD ----------------------------------------
2022-05-02

- 작업 내용

  - drag & drop 을 이용한 todo list 만들기
  - Normal Todo Task를 D&D 사용
  - https://www.npmjs.com/package/react-beautiful-dnd 이미지 참조

- 코드 챌린지

  - todo 삭제
  - todo category 추가
  - localStorage 저장
  - Board Category Drag & drop

<b>install package</b>

    - react-hook-form

---------------------------------------- To Do ----------------------------------------

2022-04-28

- 작업 내용

  - categroy enum 작업
  - todo 삭제
  - selector 이용한 카테고리별 리스트

2022-04-27

- recoil

  - selector 기능 : 저장된 atom 을 받아와서(get) 원하는 대로 커스텀이 가능
  - category 기능 : enum 을 이용하여 원하는 데이터를 원하는 곳에서 사용이 가능한 상수로 설정

- 코드 챌린지

  - todo, doing, done 카테고리 리스트
  - todo 삭제
  - localStorage 저장

2022-04-26

- react-hook-form

  - form 에 관련된 제어를 가능하게 해주는 Hook
  - form 안에 있는 input 데이터들의 관리를 도와준다.

<b>install package</b>

    - react-hook-form

---------------------------------------- CRYPTO TRACKER ----------------------------------------

2022-04-25

- recoil

  - state 관리를 위한 Package
  - useState Hook 을 이용하여 state 을 전달하는 레벨이 깊어질 수록 버그 발생율이 높기 때문에 전역적으로 state 을 사용하기 위한 Package
  - useRecoilState 로 저장된 atom 의 state 값을 가져온다.
  - useSetRecoilState 로 state 를 변경할 function 을 가져온다. useState 의 function 과 비슷.

- react-helmet-async

  - react-helmet 이 동작하지 않아 react-helmet-async 설치
  - App.js 를 HelmetProvider 로 감싸준다

<b>install package</b>

    - react-helmet-async
    - recoil

2022-04-20

- react-query

  - fetch 함수를 실행, cache 에 저장해 준다.
  - 키값을 지정해서 키값이 없을 경우에 fetch 함수 실행, 있으면 실행하지 않는다.
  - 세번째 인자에서, refresh 간격을 조정할 수 있다.

<b>install package</b>

    - apexcharts
    - helmet

2022-04-19

- typescript Interface 작성시에는 보통 I<데이터명> 형태

- react-router-dom v6 버전

> Link to 를 통하여 state 를 전달 할 수가 없다.
>
> useRouteMatch 가 useMath 로 변경
>
> Outlet Component 사용으로 하위 Route Component 랜더링

- 사용한 API

> https://api.coinpaprika.com/v1/coins
>
> https://cryptocurrencyliveprices.com/img/{coin.id}.png
>
> https://api.coinpaprika.com/v1/coins/{coinId}
>
> https://api.coinpaprika.com/v1/tickers/{coinId}

- 그 외
  - vscode 설치 extension: vscode-styled-components
  - browser console 에서 데이터를 temp 로 저장 가능

2022-04-18 < 초기 개발 설정 >

<b>install package</b>

      - react-router-dom(v6)
      - react-query
      - styled-component

resetCss

google-font

Styled-component Theme Setting

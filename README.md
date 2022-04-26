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

  install package

      - react-helmet-async
      - recoil

2022-04-20

- react-query

  - fetch 함수를 실행, cache 에 저장해 준다.
  - 키값을 지정해서 키값이 없을 경우에 fetch 함수 실행, 있으면 실행하지 않는다.
  - 세번째 인자에서, refresh 간격을 조정할 수 있다.

  install package

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

    install package

        - react-router-dom(v6)
        - react-query
        - styled-component

    resetCss

    google-font

    Styled-component Theme Setting

import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {fetchCoins} from "../api";
import { isDarkmodeAtom } from "../atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}


function Coins() {

  const {isLoading: loading, data: coins } = useQuery<ICoin[]>("COINS", fetchCoins);
  const setThemeFn = useSetRecoilState(isDarkmodeAtom);
  const onClick = () => setThemeFn(prev => !prev);

    return (
        <Container>
          <Header>
            <Title>코인</Title>
            <button onClick={onClick}>Toggle Theme Mode</button>
          </Header>
          {loading ? (
            <Loader>
              Loading...
            </Loader>
          ) : (
            <CoinsList>
              
              <Helmet>
                <title>
                  Lists
                </title>
              </Helmet>
                {
                    coins?.slice(0,20).map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname: `/${coin.id}`,
                            }}>
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))
                }
            </CoinsList>
          )}
        </Container>
    )
}

export default Coins;
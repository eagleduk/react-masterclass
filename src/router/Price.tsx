import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function valueColor(props: IValue) {
    return props.isRed ? "red" : "blue"
}

const Title = styled.div`
    display: none;
    span {
        color: ${(props: IValue) => valueColor(props)};
    }
`;

const Label = styled.label`
    display: flex;
    flex-basis: 200px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    opacity: .6;
`;

const Value = styled(Label)`
    flex-basis: 100%;
    color: ${(props: IValue) => valueColor(props)};
    font-size: 22px;
    opacity: 1;
`;

const PriceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
    height: 40px;
    vertical-align: middle;
    text-align: center;
    font-size: 25px;
`;


interface IUSD {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };

interface IValue {
    isRed: boolean;
}


function Price() {
    const [_, USD] = useOutletContext<IUSD[]>();
    return (
        <>
            <Title isRed={USD.volume_24h_change_24h > 0}>
                    {USD.price}
                    (
                        <span>
                        {USD.volume_24h_change_24h}
                        </span>
                    )
            </Title>
            <PriceContainer>
                <Label>
                    
                </Label>
                <Value isRed={USD.market_cap_change_24h > 0}>
                    {
                        USD.market_cap_change_24h
                    }
                </Value>
            </PriceContainer>
            <PriceContainer>
                <Label>
                    1 시간
                </Label>
                <Value isRed={USD.percent_change_1h > 0}>
                    {
                        USD.percent_change_1h
                    }
                </Value>
            </PriceContainer>
            <PriceContainer>
                <Label>
                    24 시간
                </Label>
                <Value isRed={USD.percent_change_24h > 0}>
                    {
                        USD.percent_change_24h
                    }
                </Value>
            </PriceContainer>
            <PriceContainer>
                <Label>
                    주간
                </Label>
                <Value isRed={USD.percent_change_7d > 0}>
                    {
                        USD.percent_change_7d
                    }
                </Value>
            </PriceContainer>
            <PriceContainer>
                <Label>
                    월간
                </Label>
                <Value isRed={USD.percent_change_30d > 0}>
                    {
                        USD.percent_change_30d
                    }
                </Value>
            </PriceContainer>
            <PriceContainer>
                <Label>
                    년간
                </Label>
                <Value isRed={USD.percent_change_1y > 0}>
                    {
                        USD.percent_change_1y
                    }
                </Value>
            </PriceContainer>
        </>
    )
}

export default Price;
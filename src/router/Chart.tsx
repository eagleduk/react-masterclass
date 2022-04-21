import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinOHLCV } from "../api";
import ApexCharts from "react-apexcharts"
import styled from "styled-components";

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface IOHLCV {
    time_open: string;
    time_close: string;
    open:number;
    high:number;
    low:number;
    close:number;
    volume:number;
    market_cap:number;
}


function Chart() {
    const [coinId] = useOutletContext<string[]>();
    const {isLoading, data} = useQuery<IOHLCV[]>(["ohlcv", coinId], () => fetchCoinOHLCV(coinId));
    return (
        <>
        {isLoading ? <Loader>Loading...</Loader> : 
            <ApexCharts 
                width={"100%"} 
                height={500} 
                type="candlestick" 
                series={[{
                    data: data?.map((price) => {
                        return {
                            x: price.time_close.slice(0,10),
                            y: [price.open, price.high, price.low, price.close]
                        }
                    }) as []
                }]} 
                options={{
                    theme: {
                        mode: "dark"
                    },
                    chart: {
                        type: "candlestick",
                        toolbar: {
                            show: false
                        },
                        background: "transparent",
                    },
                    dataLabels: {
                        style: {
                        }
                    },
                    xaxis: {
                        type: "datetime",
                        labels: {
                            style: {
                            },
                            datetimeFormatter: {
                                day: 'yyyy-MM-dd',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (val) => val.toFixed(0)
                        }
                    }
                }}
            />}
        </>
    )
}

export default Chart;
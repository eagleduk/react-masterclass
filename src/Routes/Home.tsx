import { useQuery } from "react-query";
import styled from "styled-components";
import { getPopularTVSeries, IPopularTVSeries } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
    height: 400vh;
`;

const Banner = styled.div<{image:string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0px 40px;
    background-image: url(${props => (props.image)});
    background-size: cover;
`;

const Title = styled.h2`
    font-size: 108px;
    margin-bottom: 20px;
`;

const Overview = styled.p`
    font-size: 24px;
    width: 30%;
`;

export default function Home() {
    const {data, isLoading} = useQuery<IPopularTVSeries>(["tvSseries", "popular"], getPopularTVSeries);
    
    return <Wrapper> {isLoading ? <h1>Loading...</h1> : <Banner image={makeImagePath(data?.results[0]?.backdrop_path || "")}>
        <Title>{data?.results[0]?.name}</Title>
        <Overview>{data?.results[0].overview}</Overview>
    </Banner>
}
    </Wrapper>;
}
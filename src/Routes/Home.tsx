import { useQuery } from "react-query";
import styled from "styled-components";
import { getPopularTVSeries, IPopularTVSeries } from "../api";
import { makeImagePath } from "../utils";
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    height: 200vh;
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

const Slider = styled(motion.section)`
    display: flex;
    position: absolute;
    gap: 15px;
    bottom: 10px;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    padding: 20px 0px;
    height: 200px;
    button {
        width: 80px;
        background-color: rgba(0,0,0,.0);
        border-width: 0;
        color: ${props=>props.theme.white.lighter};
        cursor: pointer;
    }
    overflow: hidden;
`;

const ItemWrapper = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
    height: 100%;
    gap: 15px;
`;

const Items = styled(motion.section)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
    position: absolute;
    height: 100%;
`;

const Item = styled(motion.section)`
    background-color: white;
    height: 100%;
`;

const sliderVariants = {
    initial: (popularReverse:boolean) => {
        return {
            // opacity: 0,
            // scaleX:0,
            // transformOrigin: popularReverse ? "right" : "left",
            x: popularReverse ? "calc(100vw - 175px)" : "calc(-100vw + 175px)"
        }
    },
    animate: {
        scaleX: 1,
        opacity: 1,
        x: 0,
    },
    exitA: (popularReverse:boolean) => {
        return {
            // opacity: 0,
            // zIndex: 100,
            // scaleX: 0,
            // transformOrigin: popularReverse ? "left" : "right",
            x: !popularReverse ? "calc(100vw - 175px)" : "calc(-100vw + 175px)"
        }
    },
}

export default function Home() {
    const [popularPage, setPopularPage] = useState(0);
    const [popularReverse, setPopularReverse] = useState(false);
    const {data, isLoading} = useQuery<IPopularTVSeries>(["tvSeries", "popular"], getPopularTVSeries);
    
    const onPrevPage = () => {
        setPopularReverse(true);
        setPopularPage(current => current - 1);
    }

    const onNextPage = () => {
        setPopularReverse(false);
        setPopularPage(current => current + 1);
    }

    return <Wrapper> 
        {
            isLoading ? <h1>Loading...</h1> : 
            <>
                <Banner image={makeImagePath(data?.results[0]?.backdrop_path || "")}>
                    <Title>{data?.results[0]?.name}</Title>
                    <Overview>{data?.results[0].overview}</Overview>
                </Banner>

                <Slider>
                    <button onClick={onPrevPage}> &lt; </button>
                    <ItemWrapper>

                        <AnimatePresence initial={false} custom={popularReverse}>
                            <Items key={popularPage + ""} 
                                variants={sliderVariants}
                                custom={popularReverse}
                                initial="initial" 
                                animate="animate" 
                                exit="exitA" 
                                transition={{
                                    type: "spring", 
                                    duration: 0, 
                                    stiffness: 80, 
                                    damping: 30 
                                }}
                            >
                                {
                                    [1,2,3,4,5,6].map(i => <Item key={String(i)} > {i} </Item>)
                                }
                            </Items>
                        </AnimatePresence>

                    </ItemWrapper>

                    <button onClick={onNextPage}> &gt; </button>
                </Slider>
            </>
        }
    </Wrapper>;
}
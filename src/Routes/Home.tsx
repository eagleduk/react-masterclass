import { useQuery } from "react-query";
import styled from "styled-components";
import { getPopularTVSeries, getTVGeners, IPopularTVSeries, ITvGenerList, ITVSeries } from "../api";
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
        z-index: 200;
    }
    overflow: hidden;
`;

const ItemWrapper = styled(motion.div)`
    width: 100%;
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

const Item = styled(motion.section)<{image:string}>`
    /* background-color: white; */
    background-image: url(${props => (props.image)});
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    span {
        opacity: 0;
        position: absolute;
        bottom: 0;
        display: flex;
        height: 50px;
        background-color: rgba(0,0,0,.8);
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        text-overflow: ellipsis;
    }
    &:hover {
        span {
            opacity: 1;
        }
    }
`;

const PopupWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background-color: rgba(0,0,0,.8);
    z-index: 300;
    &>div {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const PopupItem = styled(motion.div)`
    width: 40%;
    height: 80%;
    position: absolute;
    top: 80px;
    border-radius: 10px;
    background-color: rgba(0,0,0,1);
`;

const PopupPoster = styled(motion.div)<{image:string}>`
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,11)), url(${props => (props.image)});
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 60%;
`;

const PopupTitile = styled.span`
    display: block;
    font-size: 44px;
    margin-top: -60px;
    margin-left: 20px;                   
`;

const PopupGenres = styled.div`
    display: flex;
    margin: 5px 20px;
    gap: 10px;
    margin-bottom: 20px;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: rgba(128, 128, 128, .5);
    }
`;

const PopupOverview = styled.p`
    margin: 0 20px;
    width: 50%;
    line-height: 25px;
`;


const sliderVariants = {
    initial: (popularReverse:boolean) => {
        return {
            opacity: 0,
            // scaleX:0,
            // transformOrigin: popularReverse ? "right" : "left",
            x: !popularReverse ? "calc(100vw - 175px)" : "calc(-100vw + 175px)"
        }
    },
    animate: {
        scaleX: 1,
        opacity: 1,
        x: 0,
    },
    exitA: (popularReverse:boolean) => {
        return {
            opacity: 0,
            // zIndex: 100,
            // scaleX: 0,
            // transformOrigin: popularReverse ? "left" : "right",
            x: popularReverse ? "calc(100vw - 175px)" : "calc(-100vw + 175px)"
        }
    },
}

const PAGECOUNT = 6;

export default function Home() {
    const [popularPage, setPopularPage] = useState(0);
    const [popularReverse, setPopularReverse] = useState(false);
    const [popupView, setPopupView] = useState<ITVSeries | null>(null);
    const {data, isLoading} = useQuery<IPopularTVSeries>(["tvSeries", "popular"], getPopularTVSeries);
    
    const onPrevPage = () => {
        setPopularReverse(true);
        setPopularPage(current => current - 1);
    }

    const onNextPage = () => {
        setPopularReverse(false);
        setPopularPage(current => current + 1);
    }
    const {data: genres} = useQuery<ITvGenerList>(["tvSeries", "genre"], getTVGeners);    

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
                                    data?.results && [0,1,2,3,4,5].map(i => {
                                        const index = (PAGECOUNT * popularPage + i) % (data.results.length - 2);
                                        const result = data.results.slice(1)[Math.abs(index)];
                                        return (<Item 
                                            key={String(result.id)} 
                                            whileHover={{ scale: 1.2, zIndex: 200}}
                                            image = {makeImagePath(result.poster_path)} 
                                            onClick={() => setPopupView(result)}
                                            layoutId={String(result.id)}
                                        >                                         
                                            <span>
                                                {result.name}
                                            </span>
                                         </Item>);
                                    })
                                }
                            </Items>
                        </AnimatePresence>

                    </ItemWrapper>

                    <button onClick={onNextPage}> &gt; </button>
                </Slider>
            </>
        }
    {popupView && <AnimatePresence>
        <PopupWrapper onClick={() => setPopupView(null)}>
            <div>
                <PopupItem 
                    layoutId={String(popupView.id)}
                    onClick={(event) => event.stopPropagation()}
                >
                    <PopupPoster image={makeImagePath(popupView.backdrop_path)} />

                    <PopupTitile>
                        {popupView.name}
                    </PopupTitile>

                    <PopupGenres>
                        {
                            popupView.genre_ids.map(ids => {
                                return genres?.genres.map(genres => genres.id === ids ? <span>{genres.name}</span> : null)
                            })
                        }
                    </PopupGenres>
                    <PopupOverview>
                        {popupView.overview}
                    </PopupOverview>

                </PopupItem>
            </div>
        </PopupWrapper>
    </AnimatePresence>
    }
    </Wrapper>;
}
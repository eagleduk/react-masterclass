import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { ItemsWrapper } from "./Motion";

const SliderWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const SliderButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

const SliderCard = styled(motion.div)`
    width: 100%;
    height: 150px;
    background-color: rgba(255,255,255,1);
    color: rgba(0,0,0,1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 44px;
`;

const sliderVariant = {
    initial: (isNext:boolean) => ({
        scale:0,
        opacity: 0,
        x: isNext ? 500 : -500,
    }),
    animate: {
        scale:1,
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            delay: .3
        }
    },
    exit: (isNext:boolean) => ({
        scale:0,
        opacity: 0,
        x: isNext ? -500 : 500,
    }),
}

export default function Slider() {
    const [isNext, setIsNext] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const onNextPage = () => {
        setIsNext(true);
        setPage(current => current + 1);
    };
    const onPrevPage = () => {
        setIsNext(false);
        setPage(current => current===0 ? 0 : current - 1)
    };
    return <ItemsWrapper onClick={(event) => event.stopPropagation()}>

        <SliderButton onClick={onPrevPage} disabled={page===0 ? true: false}>prev</SliderButton>
        <SliderWrapper> 
            <AnimatePresence custom={isNext}>
                <SliderCard 
                    key={page+""}
                    custom={isNext}
                    variants={sliderVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"                    
                >
                    {page}
                </SliderCard>
            </AnimatePresence>
        </SliderWrapper>
        <SliderButton onClick={onNextPage}>next</SliderButton>

    </ItemsWrapper>
}
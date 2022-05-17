import { motion, useElementScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { ItemsWrapper } from "./Motion";

const ScrollWrapper = styled(motion.div)`
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
`;

const ScrollTarget = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(255,255,255,1);
    position: sticky;
    top: 100px;
`;

export default function Scroll() {
    const wrapper = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useElementScroll(wrapper);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    return <ItemsWrapper ref={wrapper} onClick={(event) => event.stopPropagation()}>
        <ScrollWrapper >
            <ScrollTarget style={{scale}} />
        </ScrollWrapper>
    </ItemsWrapper>
}
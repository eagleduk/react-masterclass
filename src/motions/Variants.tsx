import { motion } from "framer-motion";
import styled from "styled-components";
import { ItemsWrapper } from "./Motion";

const VarientsWrapper = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: rgba(255,255,255,.5);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const VarientsTarget = styled(motion.div)`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: rgba(255,255,255,1);
    align-self: center;
    justify-self: center;
`;

const WrapperVariant = {
    initial: {
        opacity: 1,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: .2,
            staggerChildren: .1
        }
    }
}

const TargetVariant = {
    initial: {
        opacity: 0,
        scale: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0
    }
}

export default function Variants() {
    return <ItemsWrapper onClick={(event) => event.stopPropagation()}>
        <VarientsWrapper variants={WrapperVariant} initial="initial" animate="animate">
            <VarientsTarget variants={TargetVariant} />
            <VarientsTarget variants={TargetVariant} />
            <VarientsTarget variants={TargetVariant} />
            <VarientsTarget variants={TargetVariant} />
        </VarientsWrapper>
    </ItemsWrapper>
}
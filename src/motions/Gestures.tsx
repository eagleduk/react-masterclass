import { motion } from "framer-motion";
import styled from "styled-components";
import { ItemsWrapper } from "./Motion"

const GesturesTarget = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: rgba(255,255,255,1);
`;

const GesturesVariant ={
    whileHover: {
        scale: 1.2,
        rotate: 90
    },
    whileTap: {
        scale: 1,
        borderRadius: "50%"
    }
}

export default function Gestures() {
    return <ItemsWrapper onClick={(event) => event.stopPropagation()}>
        <GesturesTarget variants={GesturesVariant} whileHover="whileHover" whileTap="whileTap"/>
    </ItemsWrapper>
}
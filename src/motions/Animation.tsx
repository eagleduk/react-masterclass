import { motion } from "framer-motion";
import styled from "styled-components"
import { ItemsWrapper } from "./Motion";

const AnimationTarget = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: rgba(255,255,255,1);
`;

const AnimationVarient = {
    initial: {
        opacity: 1,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        rotate: 180,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: .2,
            duration: .15
        }
    }
}

export default function Animation() {
    return <ItemsWrapper onClick={(event) => event.stopPropagation()}>
        <AnimationTarget
            variants={AnimationVarient}
            initial="initial"
            animate="animate"
        />
    </ItemsWrapper>
}
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ItemsWrapper } from "./Motion";

const DragWrapper = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: rgba(255,255,255,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const DragTarget = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(255,255,255,1);

`;

export default function Drag() {
    const dragContainer = useRef<HTMLDivElement>(null);
    const dragTarget = useRef<HTMLDivElement>(null);
    const [,setTime] = useState(0);
    useEffect(() => {
        setTime(Date.now());
    },[])
    return <ItemsWrapper onClick={(event) => event.stopPropagation()}>
        <DragWrapper ref={dragContainer}>
            <DragTarget 
                ref={dragTarget} 
                drag 
                dragConstraints={dragContainer} 
            />
        </DragWrapper>
    </ItemsWrapper>
}
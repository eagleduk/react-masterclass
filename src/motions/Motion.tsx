import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components"
import Animation from "./Animation";
import Drag from "./Drag";
import Gestures from "./Gestures";
import Path from "./Path";
import Scroll from "./Scroll";
import Slider from "./Slider";
import Variants from "./Variants";

const Wrapper = styled(motion.div)`
    background-color: rgba(0,0,0,.8);
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopupWrapper = styled.div`
    width: 50vw;
    border-radius: 20px;
`;

const PopupTitle = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    height: 35px;
    font-size: 22px;
    padding: 15px;
    box-sizing: border-box;
    button {
        height: 30px;
        width: 30px;
        border-radius: 25px;
        cursor: pointer;
    }

`;

const PopupContainer = styled(motion.div)`
    width: 100%;
    height: 500px;
    z-index: 3;
`;

const MotionWrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 20px;
    padding: 80px 120px;
    box-sizing: border-box;
    &>div:last-child {
        grid-column: 1/4;
    }
`;

const ItemContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

const ItemTitle = styled(motion.span)`
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 5px;
    height: 30px;
    background-color: rgba(255, 99, 71, .4);
    cursor: pointer;
    text-transform: capitalize;
`;

export const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    overflow: auto;
    background: linear-gradient(to right bottom, rgb(255, 87, 51), rgb(255, 189, 51));
    border-radius: 20px;
`;

const MODULES = ["animation", "variants", "gestures", "drag", "scroll", "path", "slider"];

function getItemModule(moduleId:string|null, isPop:boolean) {
    switch(moduleId) {
        case "animation":
            return <Animation />;
        case "variants":
            return <Variants />;
        case "gestures":
            return <Gestures />;
        case "drag":
            return <Drag />;
        case "scroll":
            return <Scroll />;
        case "path":
            return <Path />;
        case "slider":
            return <Slider />;
            default:
                return <div></div>;
    }
}

export default function Motion() {
    const [popupId, setPopupId] = useState<string | null >(null)
    const onPopup = (id:string | null) => setPopupId(id);
    return <MotionWrapper>

        <AnimatePresence>
        {popupId ? <Wrapper onClick={() => setPopupId(null)}>
            <PopupWrapper>
                <PopupTitle>
                    {popupId}
                    <button onClick={() => setPopupId(null)} style={{display: "none"}}>
                        X
                    </button>
                </PopupTitle>
                <PopupContainer layoutId={popupId}>
                    {getItemModule(popupId, true)}
                </PopupContainer>
            </PopupWrapper>
        </Wrapper> : null}
        </AnimatePresence>

        {MODULES.map(id => {
            return (
                <ItemContainer layoutId={id} key={id}>
                    <ItemTitle onClick={() => onPopup(id)}>
                        {id}
                    </ItemTitle>
                    {getItemModule(id, false)}
                </ItemContainer>
            )
        })}


{/* 

        {popupId!=="animation" ? <ItemContainer layoutId="animation">
            <ItemTitle onClick={() => onPopup("animation")}>
                Animation
            </ItemTitle>
            <Animation />
        </ItemContainer> : <ItemContainer></ItemContainer>}

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("variants")}>
                Variants
            </ItemTitle>
            <Variants />
        </ItemContainer>

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("gestures")}>
                Gestures
            </ItemTitle>
            <Gestures />
        </ItemContainer>

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("drag")}>
                Drag
            </ItemTitle>
            <Drag />
        </ItemContainer>

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("scroll")}>
                Scroll
            </ItemTitle>
            <Scroll />
        </ItemContainer>

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("path")}>
                Path
            </ItemTitle>
            <Path />
        </ItemContainer>

        <ItemContainer>
            <ItemTitle onClick={() => onPopup("slider")}>
                Slider
            </ItemTitle>
            <Slider />
        </ItemContainer>

         */}
    </MotionWrapper>
}
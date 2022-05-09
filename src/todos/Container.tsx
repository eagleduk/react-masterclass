import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ToDos } from "./atoms";
import Board from "./Board";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 300px;
    gap: 20px;
`;

export default function Container() {

    const [categories, setCategoryLists] = useRecoilState(ToDos);

    const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
        console.log(result);
        const {source, destination} = result;
        
        setCategoryLists((current) => {
            if(destination) {
                const sourceId = source.droppableId;
                const sourceIndex = source.index;
                const targetId = destination.droppableId;
                const targetIndex = destination.index;
                
                const sourceLists = [...current[sourceId]];
                const sourceTarget = sourceLists[sourceIndex];
                sourceLists.splice(sourceIndex,1);                

                if(sourceId !== targetId) {
    
                    const targetList = [...current[targetId]];
                    return {
                        ...current,
                        [sourceId]: sourceLists,
                        [targetId]: [...targetList.slice(0, targetIndex), sourceTarget, ...targetList.slice(targetIndex)]
                    }
                } else {
                    return {
                        ...current,
                        [sourceId]: [...sourceLists.slice(0, targetIndex), sourceTarget, ...sourceLists.slice(targetIndex)]
                    }
                }

            }
            return current;
        })
        
    }

    return (
        <Wrapper>
            <DragDropContext onDragEnd={onDragEnd}>
                {
                    Object.keys(categories).map((title) => {
                        return <Board title={title} key={title} />
                    })
                }
            </DragDropContext>
        </Wrapper>
    );
}
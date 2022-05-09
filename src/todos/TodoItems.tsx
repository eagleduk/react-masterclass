import { Draggable } from "react-beautiful-dnd"
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ToDos } from "./atoms";

const Items = styled.div<{isDragging: boolean}>`
    height: 30px;
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
    background-color: ${props => props.isDragging ? "aqua" : "blue"};

    button {
        background-color: transparent;
        border-width: 0px;
        cursor: pointer;
        height: 100%;

        &:hover {
            background-color: brown;
        }
    }
`;

interface ITodoItems {
    id: number,
    text: string,
    index: number,
    type: string
}

export default function TodoItems({id,text,index,type}: ITodoItems) {
    const setCategoryLists = useSetRecoilState(ToDos);
    const onDeleteButtonClick = () => {
        setCategoryLists(current => {
            const targetLists = [...current[type]]
            const targetIndex = targetLists.findIndex(lists => lists.id === id);

            return {
                ...current,
                [type]: [...targetLists.slice(0, targetIndex), ...targetLists.slice(targetIndex+1)]
            }
        })
    }

    return (

        <Draggable draggableId={String(id)} index={index} key={id}>
            {(provided, snapshot) => (
                <Items
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                <span>{text}</span>
                <button onClick={onDeleteButtonClick}>❌</button>
                </Items>
            )}
        </Draggable>
    )   

}
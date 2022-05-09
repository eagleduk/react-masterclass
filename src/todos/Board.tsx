import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ToDos } from "./atoms";
import TodoItems from "./TodoItems";

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    background-color: ${props => props.theme.BoardBgColor};
    border-color: ${props => props.theme.ContainerBorder};
    border-width: 2px;
    border-style: solid;
    border-radius: 15px;
    h1 {
        padding: 10px 0px;
    }
    input {
        margin: 0px 5px;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;

const ItemContainer = styled.div<{isDraggingOver:boolean}>`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${props => props.isDraggingOver ? "pink" : "green"};
    padding: 0px 5px;
    padding-top: 7px;
    box-sizing: border-box;
`;

interface IBoard {
    title: string;
}

function Board({title}:IBoard) {
    const {setValue,handleSubmit,register,getValues} = useForm();
    const [categories, setCategoryLists] = useRecoilState(ToDos);

    const onSubmit = () => {
        const text = getValues("text");
        setCategoryLists((current) => {
            const newList = [...current[title], {id:Date.now(), text}];
            return {
                ...current,
                [title]: newList
            }
        })
        setValue("text", "");
    }
    return (
        <BoardContainer>

            <h1>{title}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("text", {
                    required: true
                })}  />
            </form>
            <Droppable droppableId={title}>
            {(provided, snapshot) => (
                <ItemContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver = {snapshot.isDraggingOver}
                >
                    {
                        categories[title].map((items,index) => {
                            return <TodoItems 
                                key={items.id} 
                                text={items.text} 
                                id={items.id} 
                                index={index}
                                type={title}
                            />
                        })
                        
                    }

                {provided.placeholder}
                </ItemContainer>
                
            )}
            </Droppable>
        </BoardContainer>
        
    )
}

export default Board;
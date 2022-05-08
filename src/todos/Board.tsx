import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

function Board() {
    const onDragEnd = () => {
        console.log("end");
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{width: "100%", height: "50vh", display: "flex", justifyContent: "center", alignItems:"center"}}>

                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <ul
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{width: " 200px", height: "300px"}}
                    >

                        <Draggable draggableId="draggable0" index={0}>
                            {(provided, snapshot) => (
                                <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                >
                                My draggable A
                                </li>
                            )}
                        </Draggable>

                        {provided.placeholder}
                    </ul>
                    
                )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default Board;
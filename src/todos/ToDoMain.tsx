import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, Category, filteredTodo, ITodo, toDoListAtom } from "./atoms";
import CreateToDo from "./CreateToDo";
import Todo from "./Todo";


function ToDoMain() {
    const [selectedCategory, setCategory] = useRecoilState(Category);
    const todos = useRecoilValue<ITodo[]>(filteredTodo);

    const selectCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = event;
        setCategory(value as Categories);
    }

    return <>
        <h1>
            To DO List
        </h1>
        <hr />
            <select onChange={selectCategory}>
                <option value={Categories.ALL}>ALL</option>
                <option value={Categories.TODO}>To DO</option>
                <option value={Categories.DOING}>DOING</option>
                <option value={Categories.DONE}>DONE</option>
            </select>
        <hr />
            {selectedCategory !== Categories.ALL ? <><CreateToDo /> <hr /></>: null }
        

        {todos.map(todo => <Todo {...todo} key={todo.id} />)}

    </>
}
export default ToDoMain;
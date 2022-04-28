import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoListAtom } from "./atoms";

function Todo({id,text,category}:ITodo) {
    const setTodo = useSetRecoilState(toDoListAtom);
    const changeCategory = (toCategory: Categories) => {        
        setTodo(todos => {
            const index = todos.findIndex((todo) => todo.id === id);
            return [...todos.slice(0, index) , {id,text,category: toCategory} , ...todos.slice(index+1)]
        });
    }
    const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todos => {
            const index = todos.findIndex((todo) => todo.id === id);
            return [...todos.slice(0, index) , ...todos.slice(index+1)]
        })
    }
    return <div>
        <span> {text} </span>
        {category !== Categories.TODO ? <button onClick={() => changeCategory(Categories.TODO)}> To DO </button> : null}
        {category !== Categories.DOING ? <button onClick={() => changeCategory(Categories.DOING)}> DOING </button> : null}
        {category !== Categories.DONE ? <button onClick={() => changeCategory(Categories.DONE)}> DONE </button> : null}
        <button onClick={deleteTodo}> Delete </button>
    </div>;
}

export default Todo;
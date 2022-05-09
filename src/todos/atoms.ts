import { atom } from "recoil";

export interface IToDoItem {
    id: number,
    text: string
}

interface IToDo {
    [type:string]: IToDoItem[]
}


export const ToDos = atom<IToDo>({
    key: "TODOS",
    default: {
        "To Do" : [],
        Doing: [],
        Done: []
    }
});
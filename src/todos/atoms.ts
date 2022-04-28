import { atom, selector } from "recoil";

export enum Categories {
    "ALL" = "ALL",
    "TODO" = "TODO",
    "DOING" = "DOING",
    "DONE" = "DONE"
};

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export const toDoListAtom = atom<ITodo[]>({
    key: "todoList",
    default: []
})

export const Category = atom<Categories>({
    key: "category",
    default: Categories.TODO
})

export const filteredTodo = selector({
    key: "filteredList",
    get: ({get}) => {
        const list = get(toDoListAtom);
        const category = get(Category);
        return category===Categories.ALL ? list : list.filter(todo => todo.category === category);
    }
})
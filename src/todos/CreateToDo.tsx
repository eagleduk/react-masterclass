import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, Category, ITodo, toDoListAtom } from "./atoms";

function CreateToDo() {
    
    const selectedCategory = useRecoilValue<Categories>(Category) ;
    const setTodos = useSetRecoilState<ITodo[]>(toDoListAtom);
    const { register, handleSubmit, setValue, setFocus} = useForm();

    const AddToDo = (data: any) => {
        setTodos(todos => [...todos,{text: data.todo, id: Date.now(), category: selectedCategory}])
        setValue("todo", "");
        setFocus("todo");
    }
    return <div>
    <form onSubmit={handleSubmit(AddToDo)}>
        <input {...register("todo")} />
        <button>
            Add
        </button>
    </form>
    </div>;
}

export default CreateToDo;
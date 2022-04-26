import {useForm } from "react-hook-form"

interface IForm {
    username:string;
    email:string;
    name:string;
    age:number;
}

function ToDoList() {
    const {register, handleSubmit, formState: {errors}  } = useForm<IForm>();
    const onSubmit = (data: IForm) => {
    }
    console.log(errors);
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username",{
                required: "write the username",
                pattern: {
                    message: "not pattern",
                    value: /[a-z0-9_+]+@[a-z0-9_+]+.[a-z0-9_+]+/gi,
                }                
            })} placeholder="write name" />
            <span>
                {errors?.username?.message}
            </span>
            <br />
            <input {...register("email",{
                required: "write the email",
                validate: {
                    noQWER: (value) => value.includes("qwer") ? "no qwer" : true,
                    noASDF: (value) => value.includes("asdf") ? "no asdf" : true
                }
            })} placeholder="write email" />
            <span>
                {errors?.email?.message}
            </span>
            <br />

            <input {...register("name", {
                maxLength: {
                    value: 10,
                    message: "value to long"
                },
                minLength: {
                    value: 2,
                    message: "value to short"
                },
            })} 
                placeholder="write name"
            />
            <span>
                {errors?.name?.message}
            </span>
            <br />
            <input {...register("age",{
                max: {
                    value: 20,
                    message: "value must 20 under"
                },
                min: {
                    value: 2,
                    message: "value must 2 over"
                },
            })} type="number" />
            <span>
                {errors?.age?.message}
            </span>
            <br />
            <button> submit </button>
        </form>
    </>
}
export default ToDoList;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <header className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 w-[70%] text-sm sm:text-base md:text-lg lg:text-xl shadow-sm shadow-slate-400 rounded-lg px-3 sm:px-4 md:px-5 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-7">
        <div className="w-full flex flex-col justify-center items-start font-bold">
          <label
            htmlFor="Todos"
            className="text-slate-800 pb-1 sm:pb-2 md:pb-3 lg:pb-4 ">
            Todos
          </label>
          <input
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="name"
            type="text"
            placeholder="Write your todo..." 
            className="w-full pb-0.5 md:py-1 lg:py-1.5 rounded-lg outline-0 border-0 px-2 sm:px-3 md:px-4 lg:px-5 font-bold text-slate-900 placeholder:text-xs placeholder:font-normal placeholder:md:text-base"
          />
        </div>
        <div className="w-full  flex font-bold justify-center items-center pt-3 sm:pt-4 md:pt-5 lg:pt-6">
          <button
            type="submit"
            className="bg-slate-800 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 rounded-lg px-3 sm:px-5 md:px-7 lg:px-9 py-1 sm:py-2 md:py-3 ">
            Submit
          </button>
        </div>
      </form>
    </header>
  );
}

export default AddTodos;

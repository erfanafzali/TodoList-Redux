/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={`w-full h-auto flex justify-center items-center  text-base md:text-lg lg:text-xl py-1 md:py-2 px-2 md:px-4 ${
        completed && "line-through w-full bg-slate-600 rounded-lg text-white"
      }`}>
      <div className="w-full flex justify-between items-center">
        <input
          onChange={() => dispatch(toggleTodo({ id }))}
          type="checkbox"
          checked={completed}
          className="mr-1 accent-slate-900 md:mr-2 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 rounded focus:ring-slate-500 dark:focus:ring-slate-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <span className="font-semibold mb-0.5 text-black w-full">{title}</span>
      </div>
      <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
        <button
          onClick={() => dispatch(deleteTodo({ id }))}
          className="bg-red-500 text-white px-2 sm:px-4 md:px-6 lg:px-8  py-1  md:py-2  rounded-lg">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

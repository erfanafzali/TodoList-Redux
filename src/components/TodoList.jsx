import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { getAsyncTodos } from "../features/todo/todoSlice";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full flex justify-center mt-7 sm:mt-9 md:mt-11 lg:mt-13">
      <div className="bg-slate-400 w-[70%] text-sm sm:text-base md:text-lg lg:text-xl shadow-sm shadow-slate-400 rounded-lg px-3 sm:px-4 md:px-5 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-7">
        <h2 className="text-slate-800 pb-1 sm:pb-2 md:pb-3 lg:pb-4 font-bold">
          Todo List
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="w-full flex flex-col justify-center items-start">
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default TodoList;

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";
 

function App() {
  return (
    <div className="container  mx-auto flex-col flex justify-center items-center h-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-10 sm:mt-12 md:mt-14 lg:mt-16  mb-5 sm:mb-7 md:mb-9 lg:mb-11">
        Todo List
      </h1>
      <AddTodos />
      <TodoList />
    </div>
  );
}

export default App;

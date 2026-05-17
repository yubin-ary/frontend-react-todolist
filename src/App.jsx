import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInputBar from "./components/TodoInputBar";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

const DEFAULT_TODOS = [
  { id: 1, content: "은수 만나기", priority: "med", done: false },
  { id: 2, content: "영화 예매하기", priority: "low", done: false },
  { id: 3, content: "회의 준비하기", priority: "high", done: false },
];

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");

    if (!storedTodos) {
      return DEFAULT_TODOS;
    }

    try {
      return JSON.parse(storedTodos);
    } catch {
      return DEFAULT_TODOS;
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main className="app-shell">
        <TodoHeader title="Todo List" />
        <TodoInputBar todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;

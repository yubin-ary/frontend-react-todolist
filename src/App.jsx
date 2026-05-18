import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInputBar from "./components/TodoInputBar";
import TodoList from "./components/TodoList";
import Navigation from "./components/Navigation";
import ApiPage from "./pages/ApiPage";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
  const renderCountRef = useRef(0);
  const activeTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  renderCountRef.current += 1;
  console.log("[App render]", {
    renderCount: renderCountRef.current,
    todosLength: todos.length,
  });

  useEffect(() => {
    console.log("[localStorage save effect] todos changed", {
      renderCount: renderCountRef.current,
      todosLength: todos.length,
      todos,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main className="app-shell">
        <TodoHeader title="Todo List"></TodoHeader>
        <Navigation></Navigation>
        <TodoInputBar todos={todos} setTodos={setTodos} />
        <Routes>
          <Route
            path="/"
            element={<TodoList todos={todos} setTodos={setTodos}></TodoList>}
          ></Route>
          <Route
            path="/active"
            element={<TodoList todos={activeTodos}></TodoList>}
          ></Route>
          <Route
            path="/done"
            element={<TodoList todos={doneTodos}></TodoList>}
          ></Route>
          <Route path="/api" element={<ApiPage></ApiPage>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

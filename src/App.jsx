import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInputBar from "./components/TodoInputBar";
import TodoList from "./components/TodoList";
import ParticleBackground from "./components/ParticleBackground";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "은수 만나기", priority: "med", done: false },
    { id: 2, content: "영화 예매하기", priority: "low", done: false },
    { id: 3, content: "회의 준비하기", priority: "high", done: false },
  ]);

  return (
    <>
      <ParticleBackground />
      <main className="app-shell">
        <TodoHeader title="Todo List" />
        <TodoInputBar todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;

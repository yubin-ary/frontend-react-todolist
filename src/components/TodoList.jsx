import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";
import { useState } from "react";
function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const PRIORITY_ORDER = { high: 0, med: 1, low: 2 };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.done;
      if (filter === "incompleted") return !todo.done;
      return true;
    })
    .sort(
      (a, b) =>
        (PRIORITY_ORDER[a.priority] ?? 3) - (PRIORITY_ORDER[b.priority] ?? 3)
    );

  return (
    <section className="todo-panel">
      <div className="todo-panel__header">
        <FilterBar setFilter={setFilter}></FilterBar>
        <span className="todo-panel__count">{filteredTodos.length} items</span>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            priority={todo.priority}
            done={todo.done}
            onToggle={() => handleToggle(todo.id)}
          ></TodoItem>
        ))}
      </ul>
    </section>
  );
}
export default TodoList;

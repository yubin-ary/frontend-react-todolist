import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { todos } from "./data/todos";

const petals = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  style: {
    "--petal-left": `${6 + index * 8}%`,
    "--petal-size": `${18 + (index % 4) * 8}px`,
    "--petal-duration": `${10 + (index % 5) * 2}s`,
    "--petal-delay": `${(index % 6) * -1.6}s`,
    "--petal-drift": `${18 + (index % 3) * 12}px`,
  },
}));

function App() {
  return (
    <div className="spring-scene">
      <div className="petal-layer" aria-hidden="true">
        {petals.map((petal) => (
          <span key={petal.id} className="petal" style={petal.style}></span>
        ))}
      </div>
      <main className="app-shell">
        <TodoHeader title="Todo List"></TodoHeader>
        <TodoList sectionTitle="오늘 할 일" todos={todos}></TodoList>
      </main>
    </div>
  );
}

export default App;

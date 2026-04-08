import TodoItem from "./TodoItem";
function TodoList({ sectionTitle, todos }) {
  return (
    <section className="todo-panel">
      <div className="todo-panel__header">
        <h2>{sectionTitle}</h2>
        <span className="todo-panel__count">{todos.length} items</span>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            priority={todo.priority}
            createdAt={todo.createdAt}
          ></TodoItem>
        ))}
      </ul>
    </section>
  );
}
export default TodoList;

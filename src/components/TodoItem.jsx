function TodoItem({ text, priority, createdAt }) {
  const compactDate = createdAt.slice(5).replace("/", ".");

  return (
    <li className="todo-item">
      <span className="todo-item__check" aria-hidden="true"></span>
      <div className="todo-item__body">
        <span className="todo-item__text">{text}</span>
        <div className="todo-item__meta">
          <span className="todo-item__priority">{priority}</span>
          <span className="todo-item__time">{compactDate}</span>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;

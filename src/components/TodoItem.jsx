function TodoItem({ text }) {
  return (
    <li className="todo-item">
      <span className="todo-item__check" aria-hidden="true"></span>
      <span className="todo-item__text">{text}</span>
    </li>
  );
}
export default TodoItem;

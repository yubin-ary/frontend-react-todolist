function TodoHeader({ title }) {
  return (
    <header className="todo-header">
      <p className="todo-header__eyebrow">Spring planning</p>
      <h1>{title}</h1>
      <p className="todo-header__description">
        햇살처럼 가볍게, 오늘 해야 할 일을 부드럽게 정리해보세요.
      </p>
    </header>
  );
}
export default TodoHeader;

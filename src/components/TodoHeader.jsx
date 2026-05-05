function TodoHeader({ title }) {
  return (
    <header className="todo-header">
      <h1>{title}</h1>
      <p className="todo-header__description">Manage your day</p>
    </header>
  );
}
export default TodoHeader;

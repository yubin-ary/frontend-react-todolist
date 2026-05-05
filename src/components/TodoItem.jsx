const PRIORITY_STYLE = {
  high: { border: "rgba(220,60,30,0.5)",  badge: "rgba(220,60,30,0.15)",  color: "#f87171" },
  med:  { border: "rgba(220,120,30,0.4)", badge: "rgba(220,120,30,0.15)", color: "#fb923c" },
  low:  { border: "rgba(200,160,20,0.35)",badge: "rgba(200,160,20,0.12)", color: "#fbbf24" },
};

function TodoItem({ content, priority, done, onToggle }) {
  const p = PRIORITY_STYLE[priority] ?? PRIORITY_STYLE.low;

  return (
    <li
      className="todo-item"
      style={{ borderColor: p.border }}
    >
      <button
        className={`todo-checkbox${done ? " todo-checkbox--checked" : ""}`}
        onClick={onToggle}
        aria-label={done ? "미완료로 변경" : "완료로 변경"}
        style={{ borderColor: p.color, color: p.color }}
      >
        {done && "✓"}
      </button>
      <div className="todo-item__body">
        <span
          className="todo-item__text"
          style={done ? { textDecoration: "line-through", color: "rgba(200,200,230,0.35)" } : {}}
        >
          {content}
        </span>
        <div className="todo-item__meta">
          <span
            className="todo-item__priority"
            style={{ background: p.badge, color: p.color, borderColor: p.border }}
          >
            {priority}
          </span>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;

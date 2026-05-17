import { useEffect, useRef, useState } from "react";

function TodoInputBar({ todos, setTodos }) {
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAdd = () => {
    if (!content.trim() || !priority) return;
    setTodos([
      ...todos,
      { id: new Date().getTime(), content, priority, done: false },
    ]);
    setContent("");
    setPriority("");
  };

  return (
    <div className="input-bar">
      <input
        ref={inputRef}
        value={content}
        onChange={handleContentChange}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <select
        value={priority}
        onChange={handlePriorityChange}
        name="priority"
        id="priority"
      >
        <option value="">--select--</option>
        <option value="low">low</option>
        <option value="med">medium</option>
        <option value="high">high</option>
      </select>
      <button onClick={handleAdd}>생성</button>
    </div>
  );
}
export default TodoInputBar;

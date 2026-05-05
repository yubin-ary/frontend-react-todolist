function FilterBar({ setFilter }) {
  return (
    <div className="filter-bar">
      <div
        onClick={() => {
          setFilter("all");
        }}
      >
        전체
      </div>
      <div
        onClick={() => {
          setFilter("completed");
        }}
      >
        완료
      </div>
      <div
        onClick={() => {
          setFilter("incompleted");
        }}
      >
        미완료
      </div>
    </div>
  );
}
export default FilterBar;

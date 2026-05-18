import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="page-nav">
      <NavLink className={({ isActive }) => `page-nav__link${isActive ? " page-nav__link--active" : ""}`} to="/">
        전체
      </NavLink>
      <NavLink
        className={({ isActive }) => `page-nav__link${isActive ? " page-nav__link--active" : ""}`}
        to="/active"
      >
        미완료
      </NavLink>
      <NavLink
        className={({ isActive }) => `page-nav__link${isActive ? " page-nav__link--active" : ""}`}
        to="/done"
      >
        완료
      </NavLink>
      <NavLink
        className={({ isActive }) => `page-nav__link${isActive ? " page-nav__link--active" : ""}`}
        to="/api"
      >
        API
      </NavLink>
    </nav>
  );
}
export default Navigation;

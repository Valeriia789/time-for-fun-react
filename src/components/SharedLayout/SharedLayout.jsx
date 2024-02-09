import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch
        </div>
        <nav>
          <NavLink to="/" end>
            Головна
          </NavLink>
          <NavLink to="/ball">Магічна куля</NavLink>
          <NavLink to="/quotes">Натхнення</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

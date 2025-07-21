import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h3>Goal Tracker</h3>
      <div className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink 
        to="/createGoal">
          New Goal
        </NavLink> 
      </div>
    </nav>
  );
}

export default NavBar;
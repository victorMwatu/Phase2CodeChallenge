import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h3>Goal Tracker</h3>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink 
        to="/editCreate">
          New Goal
        </NavLink> 
      </div>
    </nav>
  );
}

export default NavBar;
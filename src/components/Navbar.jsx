// components/NavBar.jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 border-b">
      <h3 className="">Goal Tracker</h3>
      <div className="flex space-x-4">
        <Link to="/" className={({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
  }>
          Home
        </Link>
        <Link to="/editCreate" className={({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
  }>
          New Goal
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition";
const linkActive = "bg-gray-900 text-white";
const linkInactive = "text-gray-700 hover:bg-gray-100";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg">
          🍳 Recipe Manager
        </NavLink>

        <nav className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Add
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "rounded-2xl  bg-black/35 px-5 py-3 text-white shadow-sm transition hover:bg-black/45 font-medium"
      : "rounded-2xl px-5 py-3 text-white/90 transition hover:bg-white/10 hover:text-white font-medium";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block rounded-xl border border-white/80 bg-black/35 px-4 py-3 text-white font-medium"
      : "block rounded-xl px-4 py-3 text-white/90 transition hover:bg-white/10 hover:text-white font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#220071] via-[#5a0fc1] to-[#96359f] shadow-[0_18px_45px_rgba(42,18,108,0.18)]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-9">
        <div className="flex h-20 items-center justify-between">
          <NavLink className="flex flex-shrink-0 items-center gap-4" to="/">
            <img
              className="h-12 w-12 rounded-2xl bg-white p-2 shadow-lg shadow-black/10"
              src={Logo}
              alt="React Jobs"
            />
            <span className="text-xl font-bold text-white sm:text-2xl">
              React Jobs
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 text-base">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={linkClass}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={linkClass}>
              Add Job
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 md:hidden"
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 space-y-2 md:hidden">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/add-job"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Add Job
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

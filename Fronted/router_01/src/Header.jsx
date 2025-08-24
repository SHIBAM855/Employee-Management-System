import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-extrabold text-2xl tracking-wide">
            Employee
          </span>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                href="/login"
                className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-blue-500 transition duration-150"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="px-5 py-2 rounded-full bg-white text-green-600 font-semibold shadow hover:bg-green-500 transition duration-150"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

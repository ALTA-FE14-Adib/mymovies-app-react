import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-gray-800 text-gray-300 w-screen shadow-md z-10 sticky top-0">
      <div className="flex-1 ml-7">
        <a href="#">Mymovie App</a>
        <ul className="menu menu-horizontal p-0">
          <li className="ml-3 btn btn-ghost normal-case hover:bg-gray-900 hover:rounded-md w-20">
            <a href="#" className="hover:bg-gray-900">
              Home
            </a>
          </li>
          <li className="btn btn-ghost normal-case hover:bg-gray-900 hover:rounded-md w-20">
            <a href="#" className="hover:bg-gray-900">
              Favorite
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

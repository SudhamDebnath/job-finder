import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-10 pt-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
       
          <Link to="/" className=" normal-case text-2xl font-bold">
            Job Finder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? ' text-blue-600 font-bold ' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/jobs'
              className={({ isActive }) => (isActive ? ' text-blue-600 font-bold ' : '')}
            >
              Jobs Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/applied'
              className={({ isActive }) => (isActive ? ' text-blue-600 font-bold ' : '')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? ' text-blue-600 font-bold ' : '')}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? ' text-blue-600 font-bold ' : '')}
            >
              Statistics
            </NavLink>
          </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary border-none">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

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
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Blog</a>
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const menu = [
    <>
      <li className="mr-2 mb-2">
        <Link to="/home">Home</Link>
      </li>
      <li className="mr-2 mb-2">
        <Link to="/about">About</Link>
      </li>
      <li className="mr-2 mb-2">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="mr-2 mb-2">
        <Link to="/contact">Contact</Link>
      </li>
    </>,
  ];

  return (
    <div className="">
      <HeaderTop />

      <div className="container mx-auto px-4">
        <div className="navbar py-0 my-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text-red-700">
              Tronix
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menu}</ul>
          </div>
          <div className="navbar-end">
            {/* profile options */}
            <div className="flex-none">
              {/* wishlist section */}
              <div className="dropdown dropdown-end mr-2">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                  <FontAwesomeIcon className="h-5 w-5" icon={faHeart}/>
                    <span className="badge badge-sm indicator-item badge-secondary">10</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block my-0 py-0">
                        View Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart section */}
              <div className="dropdown dropdown-end mr-2">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item badge-secondary">10</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block my-0 py-0">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderTop = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 text-white ">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-left">11</div>
          <div className="text-right">22</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './Dashboard.css';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const menu = [
    <ul className='pl-0 m-0'>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="all-user">All User</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="profile">Profile</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="my-cart">My Cart</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="my-wishlist">My Wishlist</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="admin">Admin</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="post-blog">Post Blog</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="manage-products">Manage Products</Link>
      </li>
      <li className=" my-10">
        <Link className='dashboard-menu shadow rounded' to="post-products">Post Products</Link>
      </li>
    </ul>,
  ];

  return (
    <div className='py-6'>
      <div className='container mx-auto px-4'>
        <div className="md:flex">

          <div className="flex-auto w-20">
            <button className='my-0 py-3' onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='left'
              className='bla bla bla'
            >
              {menu}
            </Drawer>
          </div>

          <div className="flex-auto w-full">

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


export default function Sidebar({ isOpen, closeSidebar }) {
    return <>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={closeSidebar} className="text-fuchsia-200 text-2xl p-4">
        <FontAwesomeIcon icon={faCircleXmark} />
    </button>
        <ul className="p-4 space-y-4">
          <NavLink to={"/"}  className={({ isActive }) => isActive ? "text-pink-500 font-bold" : ""}>Home</NavLink>
          
        </ul>
      </div>
      </>
  }


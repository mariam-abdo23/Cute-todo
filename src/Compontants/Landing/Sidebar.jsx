import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleXmark, faCog, faHome, 
  faInfoCircle, faTasks, faUser, 
  faHeart, faBell 
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ isOpen, closeSidebar }) {
  return <>
    <div className={`fixed top-0 left-0 h-full w-64 bg-pink-200 shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={closeSidebar} className="text-pink-600 text-2xl p-4">
        <FontAwesomeIcon className='cursor-pointer' icon={faCircleXmark} />
      </button>
      <ul className="p-4 space-y-4">
        <li>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tasks"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faTasks} /> Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to={"/notifications"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faBell} /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to={"/personal-page"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faUser} /> Perfoile
          </NavLink>
        </li>
        <li>
          <NavLink to={"/About-App"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faInfoCircle} /> About App
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Setting"} className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
            <FontAwesomeIcon icon={faCog} /> Setting
          </NavLink>
        </li>
      </ul>
    </div>
    </>
}



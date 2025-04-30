import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faBell } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return <>
 <div id='top'>
<nav className= "fixed top-0 left-0 w-full bg-pink-500 p-4 shadow-lg z-50">
  <div className="container mx-auto flex items-center justify-between">
    <button onClick={() => setIsOpen(true)} className="text-2xl">
      <FontAwesomeIcon className='text-white' icon={faBarsStaggered} />
    </button>
    <NavLink to={"/notifications"} className="text-white text-2xl flex items-center gap-1">
  <FontAwesomeIcon icon={faBell} />
</NavLink>

  </div>
</nav>
</div>
      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </>
}

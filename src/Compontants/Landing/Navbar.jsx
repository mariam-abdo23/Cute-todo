import { useState } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return <>

<nav className="bg-pink-400/90 p-4 shadow-md sticky">
  <div className="container mx-auto flex items-center justify-between">
    <button onClick={() => setIsOpen(true)} className="text-2xl">
      <FontAwesomeIcon className='text-white' icon={faBarsStaggered} />
    </button>
    <h1 className="text-xl font-bold text-white">ToDo List</h1>
  </div>
</nav>
      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </>
}

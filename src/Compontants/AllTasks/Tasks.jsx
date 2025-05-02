import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';
import TheTasks from './TheTasks';
import Daily from './TaskClassifications/Daily';
import Weekly from './TaskClassifications/Weekly';
import Monthly from './TaskClassifications/Monthly';

export default function Tasks() {
  const [activeSection, setActiveSection] = useState('daily'); 
  
  const renderSection = () => {
    switch (activeSection) {
      case 'daily':
        return <Daily />;
      case 'weekly':
        return <Weekly />;
      case 'monthly':
        return <Monthly />;
      default:
        return <Daily />;
    }
  };

  return  <>
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center">My Tasks</h1>
        
        <div className="flex justify-center flex-col items-center mt-2 mb-4 group cursor-pointer">
          <div className="w-24 h-1 bg-pink-500 rounded transition-all duration-300 group-hover:w-28 group-hover:bg-pink-600"></div>
          <div className="w-16 h-1 bg-pink-300 rounded mt-1 transition-all duration-300 group-hover:w-20 group-hover:bg-pink-400"></div>
        </div>

        <h3 className="text-2xl mt-3 font-bold text-center text-pink-600">
          Stick to your tasks and don't be lazy <FontAwesomeIcon className="text-pink-400" icon={faFaceLaughWink} />
        </h3>
      </div>

   
      <TheTasks setActiveSection={setActiveSection} />

      {renderSection()}
    </>
 
}

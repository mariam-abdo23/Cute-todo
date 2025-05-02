import React, { useState, useEffect } from 'react';

const getLinkClass = (isActive) => {
  return `pb-1 border-b-2 transition-all duration-300 ${
    isActive ? 'border-pink-500 text-pink-600' : 'border-transparent hover:border-pink-400 hover:text-pink-600'
  }`;
};

export default function TheTasks({ setActiveSection }) {
  const [activeLink, setActiveLink] = useState('daily');

  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#daily-tasks') {
      setActiveLink('daily');
    } else if (hash === '#weekly-tasks') {
      setActiveLink('weekly');
    } else if (hash === '#monthly-tasks') {
      setActiveLink('monthly');
    }
  }, [window.location.hash]);  

  const handleLinkClick = (link, sectionId) => {
    setActiveLink(link);
    window.location.hash = sectionId;
    setActiveSection(link);
  };

  return <>
      {/* nav the task */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          className={activeLink === 'daily' ? getLinkClass(true) : getLinkClass(false)}
          aria-label="Daily Tasks"
          onClick={() => handleLinkClick('daily', '#daily-tasks')}
        >
          Daily Tasks
        </button>

        <button
          className={activeLink === 'weekly' ? getLinkClass(true) : getLinkClass(false)}
          aria-label="Weekly Tasks"
          onClick={() => handleLinkClick('weekly', '#weekly-tasks')}
        >
          Weekly
        </button>

        <button
          className={activeLink === 'monthly' ? getLinkClass(true) : getLinkClass(false)}
          aria-label="Monthly Tasks"
          onClick={() => handleLinkClick('monthly', '#monthly-tasks')}
        >
          Monthly
        </button>
      </div>
    </>
  
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import angelaAndStitch from '../../images/aa8940ad833c0436f74339b8591a2ec3.jpg';
import { motion } from 'framer-motion';

export default function Home() {
  return <>
    
    <div className="relative h-screen w-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${angelaAndStitch})` }}>
  <div className="absolute inset-0 bg-pink-200/90" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
      Welcome to Your Cute ToDo List{' '}
      <FontAwesomeIcon className="text-pink-600 text-4xl" icon={faHeart} />
    </h1>
    <p className="text-white text-lg mt-4 max-w-md drop-shadow-md">
      Organize your life with love, fun, and pink vibes 🎀✨
    </p>
    <NavLink
      to="/tasks"
      className="mt-6 bg-white text-pink-500 font-semibold py-2 px-6 rounded-full shadow hover:bg-pink-100 transition"
    >
      Let's Start
    </NavLink>
  </div>
</div>

   
    <div className="py-15 px-4 bg-pink-100/50">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto justify-center">
        
        <NavLink to="/Explodehere">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-100 transition cursor-pointer max-w-sm mx-auto col-span-2"
          >
            <h3 className="text-pink-500 font-bold text-lg sm:text-xl mb-3">Explode here</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">Everything you write here is for you only 💖</p>
          </motion.div>
        </NavLink>

        
        <NavLink to="/tasks">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-100 transition cursor-pointer max-w-sm mx-auto"
          >
            <h3 className="text-pink-500 font-bold text-lg sm:text-xl mb-3">Favorite tasks</h3>
            <p className="text-gray-600 text-sm sm:text-base">Browse all the tasks you like here 📝</p>
          </motion.div>
        </NavLink>

       
        <NavLink to="/motivation">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-100 transition cursor-pointer max-w-sm mx-auto"
          >
            <h3 className="text-pink-500 font-bold text-lg sm:text-xl mb-3">Motivational messages</h3>
            <p className="text-gray-600 text-sm sm:text-base">Take your dose of enthusiasm and positive energy 💖</p>
          </motion.div>
        </NavLink>

        
        <NavLink to="/profile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-100 transition cursor-pointer max-w-sm mx-auto col-span-3"
          >
            <h3 className="text-pink-500 font-bold text-lg sm:text-xl mb-3">Your personal page</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">Here you will find a summary of all your activities 💫</p>
          </motion.div>
        </NavLink>
      </div>
    </div>

   
    <div className="fixed bottom-4 right-4">
      <NavLink to="index" className="bg-pink-500 p-4 rounded-full text-white shadow-lg">
        <FontAwesomeIcon icon={faArrowUp} />
      </NavLink>
    </div>
  </>
}



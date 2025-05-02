import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return <>
<footer className="bg-pink-500 text-white py-6 mt-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
    
    <p className="text-sm">
      &copy; <span className="text-white font-semibold">Cute ToDo</span>. All rights reserved.
    </p>

    <div className="flex gap-6 text-xl">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="mailto:youremail@example.com" className="hover:text-pink-200 transition">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>

  </div>
</footer>


</>
}





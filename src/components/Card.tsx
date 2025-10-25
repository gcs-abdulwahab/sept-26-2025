import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
    <img 
      src="https://placehold.co/400x250" 
      alt="Profile photo" 
      className="w-full h-48 object-cover"
    />

    <div className="p-5">
      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Role</p>
      <h2 className="text-lg font-semibold text-gray-900">Emily Chen</h2>
      <p className="text-gray-600 text-sm mt-2">
        Project Lead with a passion for sustainable initiatives and team collaboration.
      </p>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <a href="#" className="text-indigo-600 font-medium hover:underline flex items-center">
          View Profile 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.177.577-.383 1.134-.614 1.667" />
            </svg>
            <span>1.5K</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8m-8 4h5m-5 4h10l4-4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12l4 4z" />
            </svg>
            <span>9</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
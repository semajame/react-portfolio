import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen text-center relative z-10'>
      <div className='flex items-center gap-4 bg-black'>
        <h1 className='text-4xl font-bold text-white'>404</h1>
        <p className='text-sm text-white'>This page could not be found.</p>
      </div>
    </div>
  )
}

export default NotFound

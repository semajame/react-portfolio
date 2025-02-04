import React from 'react'

const Footer = () => {
  const date = new Date()

  return (
    <>
      <footer className='mt-10'>
        <div className='flex justify-between w-full'>
          <p className='text-white text-xs sm:text-sm'>
            © {date.getFullYear()} James Anquillano.
          </p>
          <p className='text-white text-xs sm:text-sm'>All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

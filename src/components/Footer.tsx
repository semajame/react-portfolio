const Footer = () => {
  const date = new Date()

  return (
    <>
      <footer className='mt-10'>
        <div className='flex justify-between w-full'>
          <p className='text-white text-xs sm:text-sm'>
            © {date.getFullYear()} James Anquillano.
          </p>
          <p className='text-white text-xs sm:text-sm'>Made in React.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

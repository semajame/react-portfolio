import questnova from '../assets/questnova.png'

import resume from '../assets/resume.png'

const RecentProjects = () => {
  return (
    <>
      <div className='py-5 mt-10'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <span className='inline-flex items-center justify-center rounded-full border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
              <span className='text-white'> Recent Projects </span>
            </span>
            <a
              href='/projects'
              className='text-sm font-semibold text-gray-400 flex gap-2 items-center group transition hover:text-white'
            >
              View All
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='size-4 transition-transform duration-300 group-hover:translate-x-1'
              >
                <path d='M18 8L22 12L18 16'></path>
                <path d='M2 12H22'></path>
              </svg>
            </a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
            <a
              href='https://simplee-resume-builder.vercel.app/'
              className='group'
              target='_blank'
            >
              <div className='rounded-lg dark p-4 transition-all duration-300 hover:bg-primary/[0.03] border border-zinc-800 bg-black'>
                <div className='aspect-video mb-2 rounded-md overflow-hidden'>
                  <img
                    src={resume}
                    className='h-full w-full object-cover'
                    alt='Project Image'
                  />
                </div>
                <h2 className='text-white text-lg font-semibold mb-2'>
                  Resume Builder
                </h2>
                <p className='text-white text-xs'>A simple resume builder.</p>
              </div>
            </a>
            <a
              href='http://www.questnova.com/'
              className='group'
              target='_blank'
            >
              <div className='rounded-lg dark p-4 transition-all duration-300 border border-zinc-800 hover:bg-primary/[0.03] bg-black'>
                <div className='aspect-video mb-2 rounded-md overflow-hidden'>
                  <img
                    src={questnova}
                    className='h-full w-full object-cover'
                    alt='Project Image'
                  />
                </div>
                <h2 className='text-white text-lg font-semibold mb-2'>
                  Questnova Systems
                </h2>
                <p className='text-white text-xs'>
                  A software services website.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentProjects

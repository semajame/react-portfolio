import james_anq from '../assets/james_anq.webp'

const Header = () => {
  return (
    <header className='flex items-center gap-5'>
      <div>
        <div className='relative h-[5rem] w-[5rem] overflow-hidden rounded-full  backdrop-blur-3xl'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />

          <img
            src={james_anq}
            alt='Profile Picture'
            width='100'
            height='100'
            className='rounded-full p-1 ping absolute z-10'
          />
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-medium tracking-tighter text-white group'>
          Hey, I'm James
          <span className='inline-block hover:wave ml-1'> 👋 </span>
        </h1>

        <div className='flex justify-between pt-1'>
          <div className='flex items-center gap-2'>
            <div className='relative flex items-center'>
              <span className='w-2 h-2 bg-green-400 rounded-full inline-block'></span>

              <span className='absolute w-2 h-2 bg-green-400 rounded-full animate-ping'></span>
            </div>
            <p className='underline decoration-dashed underline-offset-4 decoration-zinc-700 text-sm text-gray-400'>
              Available for work
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

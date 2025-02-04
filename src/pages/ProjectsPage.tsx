import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

// Import images if inside `src/assets/`
import benedicto from '../assets/benedicto.png'
import greenery from '../assets/greenery.png'
import apple from '../assets/apple.png'
import kingdom from '../assets/kingdom.png'
import crypto from '../assets/crypto.png'
import hotel from '../assets/hotel.png'

const projects = [
  {
    img: benedicto,
    title: 'Benedicto College Scheduling',
    description:
      'Fullstack online class scheduling for Benedicto College using Angular, Bootstrap, Mysql and Nestjs.',
    link: 'https://bc-scheduling-1024.vercel.app/',
  },
  {
    img: greenery,
    title: 'The Greenery',
    description: 'Plant ecommerce website using Vue and Tailwind.',
    link: 'https://greenery-ecommerce.vercel.app/',
  },
  {
    img: apple,
    title: 'Apple Ui',
    description: 'Apple Clone using Nuxt and Tailwind.',
    link: 'https://apple-uii.vercel.app/',
  },
  {
    img: kingdom,
    title: 'Wild Kingdom',
    description: 'Real animal information using API, Nuxt and Tailwind.',
    link: 'https://wild-kingdom.vercel.app/',
  },
  {
    img: crypto,
    title: 'CryptoCurrency X',
    description: 'Real-time crypto updates using API, Vue, and Tailwind.',
    link: 'https://crypto-currency-x.vercel.app/',
  },
  {
    img: hotel,
    title: 'Grand Standard',
    description: 'Hotel Website using Vue and SCSS.',
    link: 'https://grand-standard-hotel.vercel.app/',
  },
]

const ProjectsPage = () => {
  return (
    <div className='my-10 text-white'>
      <div className='flex gap-5 justify-between'>
        <Link to='/' className='text-white hover:underline'>
          &larr; Go Back
        </Link>
        <h1 className='text-white text-xl'>All Projects</h1>
      </div>

      <div className='flex flex-col gap-12 mt-5'>
        {projects.map((project, index) => (
          <div key={index}>
            <div className='relative w-full'>
              <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
              </div>

              <div className='dark transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-gray-950 hover:to-primary/[0.01] flex h-full items-center justify-center rounded-lg border border-gray-800 bg-black'>
                <img
                  src={project.img}
                  alt='Project'
                  className='mt-7 rounded-t-md sm:w-[450px] w-[300px] h-full rounded-b-none'
                />
              </div>
            </div>
            <h1 className='text-white font-semibold mt-3'>{project.title}</h1>
            <p className='text-gray-400 text-sm'>{project.description}</p>

            <div className='my-2'>
              <div className='inline-block'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-zinc-900 bg-black py-3 rounded-lg px-5 flex gap-2 items-center hover:bg-white hover:text-black transition duration-300'
                >
                  <Icon icon='mynaui:globe' width='24' height='24' />
                  <span className='font-semibold text-sm'>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage

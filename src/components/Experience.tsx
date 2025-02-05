import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const experiences = [
  {
    title: 'BS Information Technology',
    location: 'Benedicto College',
    year: 2025,
  },
  {
    title: 'Questnova Systems Intern',
    location: 'Work from Home',
    year: 2025,
  },
  {
    title: 'Freelance Frontend Developer',
    location: 'Mandaue City',
    year: 2024,
  },

  {
    title: 'Cebu Interschool Hackathon',
    location: 'Provincial Capitol',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: 'Northwinds Hotel',
    year: 2023,
  },
]

const events = [
  {
    title: 'Tour De Tech',
    location: 'Bai Hotel',
    image: '/assets/bai-hotel.jpg',
    year: 2024,
  },
  {
    title: 'Tour De Tech: Talent Caravan',
    location: 'Bai Hotel',
    image: '/assets/bai.jpg',
    year: 2024,
  },
  {
    title: 'Cebu ICT Student Congress',
    location: 'CTU Main',
    image: '/assets/psite.jpg',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: 'Provincial Capitol',
    image: '/assets/lexmark.jpg',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: 'Northwinds Hotel',
    image: '/assets/jobtarget.jpg',
    year: 2023,
  },
]

const Experience = () => {
  return (
    <Tabs defaultValue='experience' className='w-full mt-10'>
      <TabsList className='grid w-full grid-cols-2 bg-zinc-900'>
        <TabsTrigger value='experience' className='text-gray-300'>
          Experience
        </TabsTrigger>
        <TabsTrigger value='certificate' className='text-gray-300'>
          Certificates
        </TabsTrigger>
      </TabsList>

      {/* Experience Tab Content */}
      <TabsContent value='experience'>
        <div className='relative border border-zinc-900 rounded-md px-5 dark bg-black'>
          <div className='flex sm:justify-between items-start mt-5 flex-col gap-2 sm:flex-row'>
            <h3 className='font-bold flex items-center gap-3 text-2xl text-white'>
              🏆 Experience
            </h3>
            <a
              href='https://docs.google.com/document/d/112OLJD-Xgj8ZFYq11TL0M48Pj4RzdJum/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='btn bg-gradient-to-r from-gray-900 to-gray-950 text-white px-2 py-1.5 border rounded-md text-xs flex justify-center items-center gap-1 transition-all duration-200 border-gray-800'
            >
              📄 View Resume
            </a>
          </div>

          <div className='flex flex-col items-start space-y-6 py-5 text-white my-5'>
            {experiences.map((entry, index) => (
              <div
                key={index}
                className='flex items-center space-x-4 w-full group z-10 relative'
              >
                <div className='flex-none'>
                  <div className='w-2.5 h-2.5 bg-black group-hover:bg-white transition duration-300 border border-white rounded-full'></div>
                </div>
                <div className='w-full'>
                  <p className='text-sm font-semibold'>{entry.title}</p>
                  <div className='flex justify-between items-center'>
                    <p className='text-xs text-gray-400'>{entry.location}</p>
                    <div className='border border-gray-500 px-2 py-0.5 text-xs rounded-full flex justify-center items-center gap-1 text-white'>
                      {entry.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      {/* Certificates Tab Content */}
      <TabsContent value='certificate'>
        <div className='relative border border-zinc-900 rounded-md px-5 dark bg-black'>
          <div className='flex sm:justify-between items-start mt-5 flex-col gap-2 sm:flex-row'>
            <h3 className='font-bold flex items-center gap-3 text-2xl text-white'>
              🎓 Certificates
            </h3>
            <a
              href='https://drive.google.com/drive/folders/1g35mdvLg36uXAVcHVSzVoacuqiZEz1VY?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='btn bg-gradient-to-r from-gray-900 to-gray-950 text-white px-2 py-1.5 border rounded-md text-xs flex justify-center items-center gap-1 transition-all duration-200 border-gray-800'
            >
              📜 View Certificates
            </a>
          </div>

          <div className='flex flex-col items-start space-y-6 py-5 text-white my-5'>
            {events.map((event, index) => (
              <div
                key={index}
                className='flex items-center space-x-4 w-full group z-10 relative'
              >
                <div className='flex-none'>
                  <div className='w-2.5 h-2.5 bg-black group-hover:bg-white transition duration-300 border border-white rounded-full'></div>
                </div>
                <div className='w-full'>
                  <p className='text-sm font-semibold'>{event.title}</p>
                  <div className='flex justify-between items-center'>
                    <p className='text-xs text-gray-400'>{event.location}</p>
                    <div className='border border-gray-500 px-2 py-0.5 text-xs rounded-full flex justify-center items-center gap-1 text-white'>
                      {event.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default Experience

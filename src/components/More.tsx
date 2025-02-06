import more from '../assets/more_life.jpg'
import tinashe from '../assets/tinashe.webp'
import westill from '../assets/we_still.png'
import aljames from '../assets/aljames.png'

const More = () => {
  const musicList = [
    {
      img: more,
      title: 'Passionfruit',
      artist: 'Drake',
      link: 'https://www.youtube.com/watch?v=COz9lDCFHjw',
    },
    {
      img: tinashe,
      title: '2 On',
      artist: 'Tinashe',
      link: 'https://www.youtube.com/watch?v=Fc9g2tiJmvw',
    },
    {
      img: westill,
      title: 'All to Myself',
      artist: 'Metro Boomin',
      link: 'https://www.youtube.com/watch?v=jWAXsR9_Gv8',
    },
    {
      img: aljames,
      title: 'Pa Umaga',
      artist: 'Al James',
      link: 'https://www.youtube.com/watch?v=mi9aLWGeYtk',
    },
  ]

  return (
    <>
      <div className='py-5 mt-10'>
        <span className='inline-flex items-center justify-center rounded-full border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
          <span className='text-white'> Music </span>
        </span>
      </div>
      <div>
        <p className='text-white text-md'>
          I am listening to my favorite songs as you are reading this now.
        </p>

        <div className='my-4 sm:grid-cols-2 sm:justify-evenly sm: items-center grid gap-2 '>
          {musicList.map((music, index) => (
            <div className='flex sm:justify-evenly bg-zinc-950 transition duration-200 rounded-md hover:bg-zinc-900'>
              <a
                href={music.link}
                key={index}
                target='_blank'
                className='flex items-center gap-3 '
              >
                <img
                  src={music.img}
                  width={80}
                  height={80}
                  alt={music.title}
                  className='rounded-md'
                />
                <div className='flex flex-col'>
                  <p className='text-white text-sm'>{music.title}</p>
                  <p className='text-gray-400 font-medium text-xs'>
                    {music.artist}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default More

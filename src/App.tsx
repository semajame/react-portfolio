import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import RecentProjects from './components/RecentProjects'
import Connect from './components/Connect'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='max-w-lg mx-auto relative z-10'>
      <Header />
      <Hero />
      <Experience />
      <RecentProjects />
      <Connect />
      <Footer />
    </div>
  )
}

export default App

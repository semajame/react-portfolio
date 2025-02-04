import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import RecentProjects from './components/RecentProjects'
import Connect from './components/Connect'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'

const App = () => {
  return (
    <HelmetProvider>
      {' '}
      {/* ✅ Move HelmetProvider to wrap the entire App */}
      <Router>
        <div className='max-w-lg mx-auto relative z-10'>
          <Helmet>
            <title>James - Frontend Developer</title>
            <meta
              name='description'
              content='Welcome to my personal website.'
            />
          </Helmet>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <Experience />
                  <RecentProjects />
                  <Connect />
                </>
              }
            />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

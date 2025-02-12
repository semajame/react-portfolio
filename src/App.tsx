import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import RecentProjects from './components/RecentProjects'

import Connect from './components/Connect'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

// Layout component with typed children
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className='max-w-lg mx-auto relative z-10 py-5 px-4'>
    <Header />
    {children}
    <Footer />
  </div>
)

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Hero />

            <Experience />

            <RecentProjects />

            <Connect />
          </Layout>
        }
      />
      <Route
        path='/projects'
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
)

export default App

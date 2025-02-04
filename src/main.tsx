import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.tsx'

import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen bg-black w-full relative py-5'>
      <App />

      <ShootingStars />
      <StarsBackground />
    </div>
  </StrictMode>
)

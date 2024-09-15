import './App.css'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader/Loader'

function App() {
  const HomePage = lazy(()=> import('./pages/HomePage/HomePage'))
  const CampersPage = lazy(()=> import('./pages/CampersPage/CampersPaage'))
  const CampersDetailsPage = lazy(() => import('./pages/CampersDetailsPage/CampersDetailsPage'))
  const Features = lazy(() => import('./components/Features/Features'))
  const Reviews = lazy(() => import('./components/Reviews/Reviews'))
  const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

  return (
    <>
      <Toaster/>
      <Navigation/>
      <Suspense fallback={<Loader/>}>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CampersPage/>} />
          <Route path="/campers/:id" element={<CampersDetailsPage />} >
            <Route path='/campers/:id/features' element={<Features/>}/>
            <Route path='/campers/:id/reviews' element={<Reviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </>
      
  )
}

export default App

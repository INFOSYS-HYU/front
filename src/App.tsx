import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import Gallery from '@/pages/activitiy/gallery'
import NavigationBar from '@/components/navbar/navbar'
import About from './pages/about/about'
import Organization from './pages/about/organization.tsx'
import Footer from './components/ui/footer.tsx'
function App() {
  return (<>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about'>
        <Route path='' element={<About />} />
        <Route path='organization' element={<Organization />} />
      </Route>
      <Route path='/activity'>
        <Route path='gallery' element={<Gallery />} />
      </Route>
    </Routes>
    <Footer/>
  </>
  )
}

export default App

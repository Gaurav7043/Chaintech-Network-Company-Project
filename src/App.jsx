import './App.css'
import Header from './Component/Header/header'
import HomePage from './Pages/homePage/homePage'
import JobSuccess from './Pages/JobSucess/jobSuccess'
import Nav from './Pages/Nav/nav'
import PortFolio from './Pages/PortFolio/PortFolio'
import Skills from './Pages/Skills/skills'
import Visit from './Pages/Visit/Visit'
import Working from './Pages/Working/working'

export default function App() {
  return (
    <div className='bg-black pb-[35px]'>
      <Header />
      <HomePage />
      <JobSuccess />
      <PortFolio />
      <Skills />
      <Working />
      <Visit />
      <Nav />
    </div>
  )
}
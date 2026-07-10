import './App.css'
import Header from './components/Sections/Header.tsx'
import Home from './components/Sections/Home.tsx'
import About from './components/Sections/About.tsx'
import SideProject from './components/Sections/SideProject.tsx'
import Contact from './components/Sections/Contact.tsx'
import TeamProject from './components/Sections/TeamProject.tsx'
import Stack from './components/Sections/Stack.tsx'

function App() {
  return (
    <div className="portfolio">
      <Header />

      <main>
        <Home/>
        <About/>
        <Stack/>
        <TeamProject/>
        <SideProject/>
        <Contact/>
      </main>
    </div>
  )
}

export default App

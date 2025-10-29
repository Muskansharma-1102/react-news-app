import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header for the navigation bar */}
        <header className='sticky top-0 '>
          <Navbar />
        </header>

        {/* Main content area where Outlet renders the routes */}
        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer linkedinLink={'https://www.linkedin.com/in/muskansharma1102/'} githubLink={"https://github.com/Muskansharma-1102"} />
      </div>
    </>
  )
}

export default App
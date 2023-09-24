import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

function App() {

  return (
    <main>
      <div className='content-page'>
        <Header />
        <Home />
        <Footer/>
      </div>
    </main>
  )
}

export default App

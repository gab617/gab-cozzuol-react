import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import {headerData} from './assets/dataPage.json'
import { Route } from "wouter"
import { About } from './components/About/About'

function App() {

  return (
    <main>
      <div className='content-page'>
        <Header 
          headerData = {headerData}/>

        <Route
          component={Home}
          path="/"
        />
        <Route
          component= {About}
          path= '/about'
        />

        <Footer />
      </div>
    </main>
  )
}

export default App

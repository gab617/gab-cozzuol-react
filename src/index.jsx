import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home/Home'
import {headerData} from './assets/dataPage.json'
import { Route } from "wouter"
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Products } from './components/Products'
import { Customers } from './components/Custormers'

function App() {

  return (
    <main>
      <div className='content-page'>
        <Header 
          headerData = {headerData}/>
          
        <Route
          path="/"
          component={Home}
        />
        <Route
          path= '/about/history'
          component= {About}
        />
        <Route
          path= '/about/quality'
          component= {About}
          />
        <Route
          path='/about/plants'
          component={About}
        />
        <Route
          path='/about/markets'
          component={About}
        />

        <Route
          path='/contact'
          component={Contact}
          />

          {/* RUTAS PARA PRODUCTOS */}
          <Route
            path='/products/interiors'
            component={Products}
          />

          {/* CUSTOMERS */}
          <Route
            path='/customers'
            component={Customers}
          />



        <Footer />
      </div>
    </main>
  )
}

export default App

import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home/Home'
import { headerData } from './assets/dataPage.json'
import { Route, useLocation } from "wouter"
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Products } from './components/Products'
import { Customers } from './components/Custormers'
import { FooterOptions } from './components/footerOptions'
import { useEffect, useState } from 'react'
import { Separator } from './components/Separator'

function App() {
  const locActual = useLocation()
  const [loc, setLoc] = useState(useLocation())

  useEffect(() => {
    const newLoc = locActual[0]
    setLoc(newLoc)
  }, [locActual])

  return (
    <main>
      <div className='content-page'>
        <Header
          headerData={headerData} />

        <Route
          path="/"
          component={Home}
        />

        <Route
          path='/about/history'
          component={About}
        />
        <Route
          path='/about/quality'
          component={About}
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
        <Separator></Separator>
        {
          loc !== '/' && (
            <FooterOptions/>
          )
        }
        <Footer />

      </div>
    </main>
  )
}

export default App

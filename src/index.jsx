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
import { FooterOptions } from './components/FooterOpt'
import { useEffect, useState } from 'react'
import { Separator } from './components/Separator'
import { QualityEnvironment } from './components/QualityEnvironment'
import { Development } from './components/Development'
import { ProductionCapacity } from './components/ProductionCapacity'

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

        <div className='content'>

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
          <div id='cont-election-footer'>
            <Route
              path='/quality-environment'
              component={QualityEnvironment}
            />

            <Route
              path='/development'
              component={Development}
            />

            <Route
              path='/production-capacity'
              component={ProductionCapacity}
            />
            <Separator></Separator>
          </div>
          {
            loc !== '/' && (
              <FooterOptions
              /> 
            )
          }
          <Footer />

        </div>
      </div>
    </main>
  )
}

export default App

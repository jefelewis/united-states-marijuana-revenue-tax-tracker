// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './app.css'

// Imports: Components
import ColoradoSalesData from './components/ColoradoSalesData'
import RecreationalStates from './components/RecreationalStates'
import MedicinalStates from './components/MedicinalStates'
import ColoradoTaxData from './components/ColoradoTaxData'
import MonthlyTaxData from './components/MonthlyTaxData'

// React Application
const App = () => (
  <Router>
    <div>
      <nav>
        <h1>Marijuana Facts</h1>
      </nav>

      <div className="content">
        {/* <ColoradoSalesData />
        <ColoradoTaxData />
        <RecreationalStates />
        <MedicinalStates /> */}
        <MonthlyTaxData />
      </div>

    </div>
  </Router>
)

// Exports
export default hot(module)(App)

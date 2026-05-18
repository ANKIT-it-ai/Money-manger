import { useState } from 'react'
import EmiCalculator from './components/EmiCalculator.jsx'
import InvestPage from './components/InvestPage.jsx'
import LoanCalculator from './components/LoanCalculator.jsx'
import LoginPage from './components/LoginPage.jsx'
import ManagerPage from './components/ManagerPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import './App.css'

const menuItems = [
  { label: 'Home', page: 'home' },
  { label: 'EMI', page: 'emi' },
  { label: 'Loan', page: 'loan' },
  { label: 'Invest', page: 'invest' },
  { label: 'Manager', page: 'manager' },
]

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    if (activePage === 'emi') return <EmiCalculator />
    if (activePage === 'loan') return <LoanCalculator />
    if (activePage === 'invest') return <InvestPage />
    if (activePage === 'manager') return <ManagerPage />
    if (activePage === 'login') return <LoginPage />
    if (activePage === 'signup') return <SignupPage />

    return (
      <section className="hero" id="home">
        <div className="copy">
          <p className="eye">Smart money manager</p>
          <h1>Manage expenses, loans, EMI and investments in one clean place.</h1>
          <p className="text">
            Plan monthly budgets, track important payments, compare loan choices
            and keep every rupee moving with confidence.
          </p>

          <div className="acts">
            <button
              className="prim"
              type="button"
              onClick={() => setActivePage('signup')}
            >
              Get Started
            </button>
            <button
              className="sec"
              type="button"
              onClick={() => setActivePage('manager')}
            >
              Open Manager
            </button>
            <button
              className="sec"
              type="button"
              onClick={() => setActivePage('invest')}
            >
              Invest Options
            </button>
          </div>
        </div>

      </section>
    )
  }

  return (
    <main className="app">
      <header className="head">
        <button
          className="brnd"
          type="button"
          aria-label="Paisa Manager home"
          onClick={() => setActivePage('home')}
        >
          <span className="mark">P</span>
          <span>Paisa Manager</span>
        </button>

        <nav className="nav" aria-label="Primary navigation">
          {menuItems.map((item) => (
            <button
              className={activePage === item.page ? 'actv' : ''}
              key={item.page}
              type="button"
              onClick={() => setActivePage(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="auth">
          <button
            className="logn"
            type="button"
            onClick={() => setActivePage('login')}
          >
            Login
          </button>
          <button
            className="sign"
            type="button"
            onClick={() => setActivePage('signup')}
          >
            Signup
          </button>
        </div>
      </header>

      {renderPage()}
    </main>
  )
}

export default App

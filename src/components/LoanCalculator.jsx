import { useState } from 'react'
import { formatMoney, readNumber } from './calculatorUtils.js'

function LoanCalculator() {
  const [income, setIncome] = useState(0)
  const [monthlyDebt, setMonthlyDebt] = useState(0)
  const [rate, setRate] = useState(0)
  const [years, setYears] = useState(0)

  const safeEmi = Math.max(readNumber(income) * 0.45 - readNumber(monthlyDebt), 0)
  const monthlyRate = readNumber(rate) / 12 / 100
  const months = readNumber(years) * 12
  const eligibleLoan =
    safeEmi && months
      ? monthlyRate
        ? (safeEmi * ((1 + monthlyRate) ** months - 1)) /
          (monthlyRate * (1 + monthlyRate) ** months)
        : safeEmi * months
      : 0

  const fields = [
    ['Monthly Income', income, setIncome],
    ['Existing Monthly EMI', monthlyDebt, setMonthlyDebt],
    ['Interest Rate Per Year', rate, setRate, '0.1'],
    ['Tenure In Years', years, setYears],
  ]

  const handleClear = () => {
    setIncome(0)
    setMonthlyDebt(0)
    setRate(0)
    setYears(0)
  }

  return (
    <section className="page">
      <div className="phdg">
        <p className="eye">Loan calculator</p>
        <h1>Check your safe loan amount.</h1>
      </div>

      <div className="calc">
        <form className="card">
          {fields.map(([label, value, setter, step]) => (
            <label key={label}>
              {label}
              <input
                min="0"
                step={step}
                type="number"
                value={value}
                onChange={(event) => setter(event.target.value)}
              />
            </label>
          ))}
          <button className="clr" type="button" onClick={handleClear}>
            Clear
          </button>
        </form>

        <div className="rslt">
          <span>Eligible Loan</span>
          <strong>{formatMoney(eligibleLoan)}</strong>
          <div>
            <p>Safe Monthly EMI</p>
            <b>{formatMoney(safeEmi)}</b>
          </div>
          <div>
            <p>Total Payment Capacity</p>
            <b>{formatMoney(safeEmi * months)}</b>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoanCalculator

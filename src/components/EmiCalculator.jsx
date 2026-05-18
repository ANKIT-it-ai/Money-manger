import { useState } from 'react'
import { formatMoney, readNumber } from './calculatorUtils.js'

function EmiCalculator() {
  // Input state
  const [amt, setAmt] = useState(0)
  const [rat, setRat] = useState(0)
  const [yrs, setYrs] = useState(0)

  // EMI calculation
  const mon = readNumber(rat) / 12 / 100
  const dur = readNumber(yrs) * 12
  const emi =
    readNumber(amt) && dur
      ? mon
        ? (readNumber(amt) * mon * (1 + mon) ** dur) / ((1 + mon) ** dur - 1)
        : readNumber(amt) / dur
      : 0
  const tot = emi * dur

  // Form fields
  const fields = [
    ['Loan Amount', amt, setAmt],
    ['Interest Rate Per Year', rat, setRat, '0.1'],
    ['Tenure In Years', yrs, setYrs],
  ]

  // Clear all input values
  const handleClear = () => fields.forEach(([, , setValue]) => setValue(0))

  // Page UI
  return (
    <section className="page">
      <div className="phdg">
        <p className="eye">EMI calculator</p>
        <h1>Calculate your monthly EMI.</h1>
      </div>

      <div className="calc">
        <form className="card">
          {fields.map(([label, value, setValue, step]) => (
            <label key={label}>
              {label}
              <input
                min="0"
                step={step}
                type="number"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </label>
          ))}
          <button className="clr" type="button" onClick={handleClear}>
            Clear
          </button>
        </form>

        <div className="rslt">
          <span>Monthly EMI</span>
          <strong>{formatMoney(emi)}</strong>
          <div>
            <p>Total Payment</p>
            <b>{formatMoney(tot)}</b>
          </div>
          <div>
            <p>Total Interest</p>
            <b>{formatMoney(tot - readNumber(amt))}</b>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmiCalculator

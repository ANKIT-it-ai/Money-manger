import { useMemo, useState } from 'react'
import { formatMoney, readNumber } from './calculatorUtils.js'

function ManagerPage() {
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('credit')
  const [reason, setReason] = useState('')
  const [transactions, setTransactions] = useState([])

  const summary = useMemo(() => {
    return transactions.reduce(
      (total, item) => {
        if (item.type === 'credit') {
          total.credit += item.amount
        } else {
          total.debit += item.amount
        }

        total.balance = total.credit - total.debit
        return total
      },
      { credit: 0, debit: 0, balance: 0 },
    )
  }, [transactions])

  const handleSubmit = (event) => {
    event.preventDefault()

    const enteredAmount = readNumber(amount)
    if (!enteredAmount || !reason.trim()) return

    setTransactions((current) => [
      {
        id: Date.now(),
        amount: enteredAmount,
        type,
        reason: reason.trim(),
      },
      ...current,
    ])
    setAmount('')
    setReason('')
    setType('credit')
  }

  const handleClear = () => {
    setAmount('')
    setReason('')
    setType('credit')
    setTransactions([])
  }

  return (
    <section className="page">
      <div className="phdg">
        <p className="eye">Money manager</p>
        <h1>Add credit and debit entries.</h1>
      </div>

      <div className="mrgd">
        <article>
          <span>Total Credit</span>
          <strong>{formatMoney(summary.credit)}</strong>
        </article>
        <article>
          <span>Total Debit</span>
          <strong>{formatMoney(summary.debit)}</strong>
        </article>
        <article>
          <span>Balance</span>
          <strong>{formatMoney(summary.balance)}</strong>
        </article>
        <article>
          <span>Entries</span>
          <strong>{transactions.length}</strong>
        </article>
      </div>

      <div className="mlay">
        <form className="card" onSubmit={handleSubmit}>
          <label>
            Amount
            <input
              min="1"
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter amount"
            />
          </label>

          <label>
            Type
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </label>

          <label>
            Reason
            <input
              type="text"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder="Salary, rent, food..."
            />
          </label>

          <button className="prim" type="submit">
            Add Entry
          </button>
          <button className="clr" type="button" onClick={handleClear}>
            Clear Balance
          </button>
        </form>

        <div className="mlst">
          {transactions.length === 0 && (
            <p className="emp">No entries. Balance is clear.</p>
          )}
          {transactions.map((item) => (
            <div className="ment" key={item.id}>
              <div>
                <span>{item.reason}</span>
                <p>{item.type === 'credit' ? 'Credit' : 'Debit'}</p>
              </div>
              <strong className={item.type === 'credit' ? 'cred' : 'debt'}>
                {item.type === 'credit' ? '+' : '-'}
                {formatMoney(item.amount)}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManagerPage

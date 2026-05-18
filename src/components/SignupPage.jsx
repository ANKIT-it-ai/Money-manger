import { useState } from 'react'

function SignupPage() {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Signup form ready. ')
  }

  return (
    <section className="apge">
      <form className="acrd" onSubmit={handleSubmit}>
        <p className="eye">Signup</p>
        <h1>Create account.</h1>
        <label>
          Full Name
          <input required type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email
          <input required type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input required minLength="6" type="password" placeholder="Create password" />
        </label>
        <button className="prim" type="submit">
          Signup
        </button>
        {message && <p className="msg">{message}</p>}
      </form>
    </section>
  )
}

export default SignupPage

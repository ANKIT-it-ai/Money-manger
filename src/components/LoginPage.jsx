import { useState } from 'react'

function LoginPage() {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Login ready..')
  }

  return (
    <section className="apge">
      <form className="acrd" onSubmit={handleSubmit}>
        <p className="eye">Login</p>
        <h1>Welcome back.</h1>
        <label>
          Email
          <input required type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input required minLength="6" type="password" placeholder="Enter password" />
        </label>
        <button className="prim" type="submit">
          Login
        </button>
        {message && <p className="msg">{message}</p>}
      </form>
    </section>
  )
}

export default LoginPage

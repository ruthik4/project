import React from 'react'
import '../css/Login.css'

export default function Login() {
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
            <div className="input-group">
                <label >Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="input-group">
                <label >Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>











    </div>
  )
}

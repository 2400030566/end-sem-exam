import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register(){
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function submit(e){
    e.preventDefault();
    setError('')
    if(!email || password.length < 6){ setError('Provide valid email and password (min 6 chars)'); return }
    // For demo, save user as non-admin and navigate to dashboard
    localStorage.setItem('auth', JSON.stringify({ email, isAdmin: false }))
    nav('/dashboard')
  }

  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh',background:'linear-gradient(135deg,#fff7ed,#fefce8)'}}>
      <div className="card" style={{width:460}}>
        <h2>Create Account</h2>
        <form onSubmit={submit}>
          <div style={{marginBottom:10}}>
            <label>Email</label>
            <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div style={{marginBottom:16}}>
            <label>Password</label>
            <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          {error && <div style={{color:'#ef4444',marginBottom:10}}>{error}</div>}
          <button className="button" style={{width:'100%'}}>Create Account</button>
        </form>
        <div style={{marginTop:14,textAlign:'center'}}>Already have account? <Link to="/login" className="link">Sign in</Link></div>
      </div>
    </div>
  )
}

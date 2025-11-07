import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register(){
  const nav = useNavigate();
  function submit(e){ e.preventDefault(); nav('/dashboard'); }
  return (
    <div style={{display:'grid',placeItems:'center',minHeight:'100vh',background:'linear-gradient(135deg,#e9efff,#f7f9ff)'}}>
      <div className="card" style={{width:640}}>
        <div style={{display:'grid',placeItems:'center',gap:8,marginBottom:14}}>
          <div style={{width:64,height:64,borderRadius:16,display:'grid',placeItems:'center',
          background:'linear-gradient(135deg,#6a11cb,#2575fc)',color:'#fff',fontSize:30}}>🏢</div>
          <h2 style={{margin:'8px 0 0'}}>SmartCityHub</h2>
          <div style={{color:'var(--muted)'}}>Your Digital City Services</div>
        </div>
        <form onSubmit={submit}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div><label>Full Name</label><input className="input" placeholder="Enter your full name"/></div>
            <div><label>Email</label><input className="input" placeholder="Enter your email"/></div>
            <div><label>Phone Number</label><input className="input" placeholder="Enter your phone number"/></div>
            <div><label>Address</label><input className="input" placeholder="Enter your address"/></div>
            <div><label>Password</label><input className="input" type="password" placeholder="Create a password"/></div>
            <div><label>Confirm Password</label><input className="input" type="password" placeholder="Confirm your password"/></div>
          </div>
          <div style={{margin:'10px 0'}}><input type="checkbox"/> I agree to the <span className="link">Terms of Service</span> and <span className="link">Privacy Policy</span></div>
          <button className="button" style={{width:'100%'}}>Create Account</button>
        </form>
        <div style={{marginTop:14,textAlign:'center'}}>
          Already have an account? <Link to="/login" className="link">Sign in here</Link>
        </div>
        <div style={{marginTop:10,textAlign:'center'}}>
          <Link className="link" to="/dashboard">← Back to Home Screen</Link>
        </div>
      </div>
    </div>
  )
}
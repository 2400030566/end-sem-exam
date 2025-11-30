import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
	const nav = useNavigate()
	const [isAdmin, setIsAdmin] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	function submit(e){
		e.preventDefault();
		setError('')
		if(!email || !password){ setError('Please provide email and password'); return }

		if(isAdmin){
			// Admin convenience: accept the known admin password regardless of email
			if(password === 'admin123'){
				const adminEmail = email && email.trim() !== '' ? email.trim() : 'admin@smartcity.com'
				localStorage.setItem('auth', JSON.stringify({ email: adminEmail, isAdmin: true }))
				nav('/admin')
			} else {
				setError('Invalid admin password (use "admin123" for admin access)')
			}
			return
		}

		// Accept other credentials for demo: basic validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if(!emailRegex.test(email) || password.length < 1){
			setError('Enter a valid email and password')
			return
		}

		localStorage.setItem('auth', JSON.stringify({ email, isAdmin: false }))
		nav('/dashboard')
	}

	return (
		<div style={{display:'grid',placeItems:'center',height:'100vh',background:'linear-gradient(135deg,#e9efff,#f7f9ff)'}}>
			<div className="card" style={{width:460}}>
				<div style={{display:'grid',placeItems:'center',gap:8,marginBottom:14}}>
					<div style={{width:64,height:64,borderRadius:16,display:'grid',placeItems:'center',
					background:'linear-gradient(135deg,#6a11cb,#2575fc)',color:'#fff',fontSize:30}}>🏢</div>
					<h2 style={{margin:'8px 0 0'}}>SmartCityHub</h2>
					<div style={{color:'var(--muted)'}}>Your Digital City Services</div>
				</div>
				<form onSubmit={submit}>
					<div style={{marginBottom:10}}>
						<label>
							<input 
								type="checkbox" 
								checked={isAdmin}
								onChange={(e)=>setIsAdmin(e.target.checked)}
								style={{marginRight:8}}
							/> Login as Admin
						</label>
					</div>
					<div style={{marginBottom:10}}>
						<label>Email</label>
						<input className="input" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
					</div>
					<div style={{marginBottom:16}}>
						<label>Password</label>
						<input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
					</div>
					{error && <div style={{color:'#ef4444',marginBottom:10,textAlign:'center'}}>{error}</div>}
					<button className="button" style={{width:'100%'}}>Sign In {isAdmin ? 'as Admin' : ''}</button>
				</form>
				<div style={{marginTop:14,textAlign:'center'}}>
					Don't have an account? <Link to="/register" className="link">Register here</Link>
				</div>
				<div style={{marginTop:10,textAlign:'center'}}>
					<Link className="link" to="/">← Back to Home Screen</Link>
				</div>
			</div>
		</div>
	)
}

import React from 'react'

export default function Admin(){
  return (
    <div style={{padding:24}}>
      <h2>Admin</h2>
      <p>Admin dashboard placeholder — content will be restored shortly.</p>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import seedBills from '../data/bills.json'

const BILLS_KEY = 'billsData'

function readAuth(){
  try { return JSON.parse(localStorage.getItem('auth')) || null } catch(e){ return null }
}

function loadBills(){
  try{ const raw = localStorage.getItem(BILLS_KEY); if(raw) return JSON.parse(raw) }catch(e){}
  return seedBills
}

export default function Admin(){
  const navigate = useNavigate()
  const [auth, setAuth] = useState(readAuth())
  const [bills, setBills] = useState(loadBills())

  useEffect(()=>{
    const a = readAuth()
    setAuth(a)
    if(!a || !a.isAdmin){
      navigate('/login')
    }
  }, [navigate])

  useEffect(()=>{
    // watch localStorage changes (if admin made edits in another tab)
    function onStorage(){ setBills(loadBills()) }
    window.addEventListener('storage', onStorage)
    return ()=> window.removeEventListener('storage', onStorage)
  }, [])

  function logout(){ localStorage.removeItem('auth'); navigate('/login') }

  const usersCount = 1234 // placeholder; replace with real data when available

  // compute payments total for 'today' for a simple summary
  const today = new Date().toISOString().slice(0,10)
  const paymentsToday = bills.payments.filter(p => p[2] === today || p[2] === '' ).reduce((s,p)=> s + (parseFloat(String(p[1]).replace(/[^0-9.]/g,'')) || 0), 0)

  return (
    <div style={{display:'flex',minHeight:'100vh'}}>
      <aside style={{width:280,padding:20,background:'#fff',boxShadow:'0 10px 20px rgba(0,0,0,.06)',position:'relative'}}>
        <h3 style={{marginTop:0}}>Admin Console</h3>
        <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:8}}>
          <button className="button secondary" onClick={()=>navigate('/admin')}>Dashboard</button>
          <button className="button secondary" onClick={()=>navigate('/admin/bills')}>Manage Bills</button>
          <button className="button secondary" onClick={()=>navigate('/admin/users')}>Manage Users</button>
        </div>

        <div style={{position:'absolute',bottom:24,left:20,right:20}}>
          <button className="button" style={{background:'#ef4444',width:'100%'}} onClick={logout}>Logout</button>
        </div>
      </aside>

      <main style={{flex:1,padding:24}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{margin:0}}>Administrator Dashboard</h2>
          <div style={{display:'flex',gap:8}}>
            <button className="button secondary" onClick={()=>navigate('/admin/users')}>Users</button>
            <button className="button" onClick={()=>navigate('/admin/bills')}>Bills</button>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:18}}>
          <div className="card">
            <div style={{fontSize:12,color:'var(--muted)'}}>Active Users</div>
            <div style={{fontWeight:700,fontSize:22}}>{usersCount.toLocaleString()}</div>
          </div>
          <div className="card">
            <div style={{fontSize:12,color:'var(--muted)'}}>Open Complaints</div>
            <div style={{fontWeight:700,fontSize:22}}>32</div>
          </div>
          <div className="card">
            <div style={{fontSize:12,color:'var(--muted)'}}>Payments Today</div>
            <div style={{fontWeight:700,fontSize:22}}>${paymentsToday.toFixed(2)}</div>
          </div>
        </div>

        <div style={{marginTop:18,display:'grid',gridTemplateColumns:'2fr 1fr',gap:12}}>
          <div className="card">
            <h3 style={{marginTop:0}}>Recent Payments</h3>
            <table className="table">
              <thead>
                <tr><th>Service</th><th>Amount</th><th>Date</th><th>Status</th></tr>
              </thead>
              <tbody>
                {bills.payments.slice(0,8).map((p, i)=> (
                  <tr key={i}>
                    <td>{p[0]}</td>
                    <td>{p[1]}</td>
                    <td>{p[2]}</td>
                    <td>{p[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3 style={{marginTop:0}}>Quick Actions</h3>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <button className="button" onClick={()=>navigate('/admin/bills')}>Create Bill</button>
              <button className="button secondary" onClick={()=>navigate('/admin/users')}>Manage Users</button>
              <button className="button secondary" onClick={()=>{ localStorage.removeItem('billsData'); setBills(loadBills()); }}>Reset Bills Data</button>
            </div>
          </div>
        </div>

        <div style={{marginTop:14}} className="card">
          <h3 style={{marginTop:0}}>Debug — current auth</h3>
          <pre style={{whiteSpace:'pre-wrap',margin:0}}>{JSON.stringify(auth, null, 2)}</pre>
        </div>
      </main>
    </div>
  )
}

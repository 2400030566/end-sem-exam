import React from 'react'
import { Link } from 'react-router-dom'
import bills from '../data/bills.json'

export default function Dashboard(){
  return (
    <div>
      <h2>Welcome to SmartCityHub</h2>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        {bills.cards.map((c, i)=> (
          <div key={i} className="card" style={{flex:1}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontSize:12,color:'var(--muted)'}}>Service</div>
                <div style={{fontWeight:700,fontSize:18}}>{c.name}</div>
              </div>
              <div style={{fontWeight:700}}>{c.amount}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:18}} className="card">
        <h3 style={{marginTop:0}}>Quick Links</h3>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link to="/bills" className="link">Bills & Payments</Link>
          <Link to="/complaints" className="link">Complaints</Link>
          <Link to="/transport" className="link">Transport</Link>
          <Link to="/healthcare" className="link">Healthcare</Link>
          <Link to="/tourism" className="link">Tourism</Link>
        </div>
      </div>
    </div>
  )
}

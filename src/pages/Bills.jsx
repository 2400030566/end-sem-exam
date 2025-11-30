import React from 'react'
import data from '../data/bills.json'

export default function Bills(){
  return (
    <div>
      <h2>Bills & Payments</h2>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        {data.cards.map((c,i)=> (
          <div key={i} className="card" style={{flex:1}}>
            <div style={{fontSize:12,color:'var(--muted)'}}>{c.name}</div>
            <div style={{fontWeight:700,fontSize:20}}>{c.amount}</div>
          </div>
        ))}
      </div>

      <div style={{marginTop:18}} className="card">
        <h3 style={{marginTop:0}}>Recent Payments</h3>
        <table className="table">
          <thead>
            <tr><th>Service</th><th>Amount</th><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            {data.payments.map((p,i)=> (
              <tr key={i}><td>{p[0]}</td><td>{p[1]}</td><td>{p[2]}</td><td>{p[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

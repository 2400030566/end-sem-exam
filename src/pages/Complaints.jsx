import React from 'react'
import data from '../data/complaints.json'

export default function Complaints(){
  return (
    <div>
      <h2>Complaints & Reports</h2>
      <div style={{marginTop:12}}>
        {data.map((c)=> (
          <div key={c.id} className="card" style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:12,color:'var(--muted)'}}>{c.type} • {c.id}</div>
                <div style={{fontWeight:700}}>{c.title}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div className={c.status === 'Resolved' ? 'badge green' : 'badge amber'}>{c.status}</div>
                <div style={{fontSize:12,color:'var(--muted)'}}>{c.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

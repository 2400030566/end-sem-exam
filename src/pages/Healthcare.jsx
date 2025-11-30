import React from 'react'
import data from '../data/hospitals.json'

export default function Healthcare(){
  return (
    <div>
      <h2>Healthcare Facilities</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        {data.map((h,i)=> (
          <div key={i} className="card">
            <div style={{fontWeight:700}}>{h.name}</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>{h.dist} • Rating {h.rating}</div>
            <div style={{marginTop:8,display:'flex',gap:6,flexWrap:'wrap'}}>
              {h.tags.map((t, idx)=>(<div key={idx} className="badge">{t}</div>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

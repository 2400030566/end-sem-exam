import React from 'react'
import data from '../data/tourism.json'

export default function Tourism(){
  return (
    <div>
      <h2>Tourism & Attractions</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        {data.map((p,i)=> (
          <div key={i} className="card">
            <div style={{fontWeight:700}}>{p.name}</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>{p.dist} • Rating {p.rating}</div>
            <div style={{marginTop:8}}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

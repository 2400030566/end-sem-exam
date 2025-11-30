import React from 'react'
import data from '../data/transport.json'

export default function Transport(){
  return (
    <div>
      <h2>Transport</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        <div className="card">
          <h3 style={{marginTop:0}}>Bus Stops</h3>
          {data.busStops.map((s,i)=> (
            <div key={i} style={{padding:'8px 0',borderBottom:'1px solid #f1f5f9'}}>
              <div style={{fontWeight:700}}>{s.name}</div>
              <div style={{fontSize:13,color:'var(--muted)'}}>{s.dist} • {s.lines.join(', ')}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{marginTop:0}}>Metro</h3>
          {data.metro.map((m,i)=> (
            <div key={i} style={{padding:'8px 0',borderBottom:'1px solid #f1f5f9'}}>
              <div style={{fontWeight:700}}>{m.name}</div>
              <div style={{fontSize:13,color:'var(--muted)'}}>{m.line} • Next: {m.next}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

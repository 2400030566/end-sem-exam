import React from 'react';
export default function Card({icon, title, desc, actionText, onClick}){
  return (
    <div className="card" style={{display:'flex', gap:14, alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', gap:14, alignItems:'center'}}>
        <div style={{width:42,height:42,borderRadius:12,display:'grid',placeItems:'center',background:'#eef2ff'}}>{icon}</div>
        <div>
          <div style={{fontWeight:600}}>{title}</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>{desc}</div>
        </div>
      </div>
      {actionText && <button className="button secondary" onClick={onClick}>{actionText}</button>}
    </div>
  )
}
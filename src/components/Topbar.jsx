import React from 'react';

export default function Topbar(){
  return (
    <div className="header">
      <div className="search">
        <input placeholder="Search city services, locations, facilities..." />
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <span className="badge">📍 Downtown, City Center</span>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:600}}>Rohini</div>
          <div style={{fontSize:12,color:'#64748b'}}>Citizen</div>
        </div>
        <div style={{width:36,height:36,background:'#eef2ff',borderRadius:999,display:'grid',placeItems:'center'}}>👤</div>
      </div>
    </div>
  )
}
import React from 'react';
import Layout from '../components/Layout';
import data from '../data/transport.json';

export default function Transport(){
  return (
    <Layout title="Public Transport">
      <div className="card" style={{marginBottom:14}}>📍 <b>Current Location:</b> Downtown, City Center</div>
      <div className="grid cols-2">
        <div className="card">
          <div style={{fontWeight:600, marginBottom:10}}>🚌 Nearby Bus Stops</div>
          {data.busStops.map((b,i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #eee'}}>
              <div>
                <div style={{fontWeight:600}}>{b.name}</div>
                <div className="muted">{b.dist} away</div>
                <div style={{marginTop:6}}>{b.lines.map(l=><span key={l} className="badge">{l}</span>)}</div>
              </div>
              <span className="badge green">Live</span>
            </div>
          ))}
        </div>
        <div className="card">
          <div style={{fontWeight:600, marginBottom:10}}>🚇 Metro Stations</div>
          {data.metro.map((m,i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #eee'}}>
              <div>
                <div style={{fontWeight:600}}>{m.name}</div>
                <div className="muted">{m.line}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div className="kbd">{m.next}</div>
                <div style={{fontSize:12,color:'#64748b'}}>Next train</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{marginTop:14}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
          <div style={{fontWeight:600}}>Transit Map</div>
          <span className="link">Change Location</span>
        </div>
        <div className="map">Map data ©2024 Google (placeholder)</div>
      </div>
    </Layout>
  )
}
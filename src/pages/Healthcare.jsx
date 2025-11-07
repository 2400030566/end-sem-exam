import React from 'react';
import Layout from '../components/Layout';
import hospitals from '../data/hospitals.json';

export default function Healthcare(){
  return (
    <Layout title="Healthcare Services">
      <div className="card" style={{marginBottom:14}}>Showing hospitals near: <b>Downtown, City Center</b></div>
      <div className="grid cols-2">
        <div className="card">
          <div style={{fontWeight:600, marginBottom:10}}>🏥 Nearby Hospitals</div>
          <div className="grid" style={{gridTemplateColumns:'1fr 1fr',gap:12}}>
          {hospitals.map((h,i)=>(
            <div key={i} className="card" style={{padding:14}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:600}}>{h.name}</div>
                <div>⭐ {h.rating}</div>
              </div>
              <div className="muted" style={{marginBottom:6}}>{h.dist} away</div>
              <div style={{marginBottom:10}}>
                {h.tags.map(t=><span key={t} className="badge">{t}</span>)}
              </div>
              <div style={{display:'flex',gap:8}}>
                <button className="button" onClick={()=>alert('Booking flow demo')}>Book Appointment</button>
                <button className="button secondary" onClick={()=>alert('Calling hospital...')}>📞</button>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="card">
          <div style={{fontWeight:600, marginBottom:10}}>Hospital Locations</div>
          <div className="map">Map (placeholder)</div>
        </div>
      </div>
    </Layout>
  )
}
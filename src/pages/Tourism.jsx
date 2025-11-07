import React from 'react';
import Layout from '../components/Layout';
import items from '../data/tourism.json';

const Attraction = ({a}) => (
  <div className="card" style={{padding:14}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{fontWeight:600}}>{a.name}</div>
      <div>⭐ {a.rating}</div>
    </div>
    <div className="muted">{a.dist} away</div>
    <div style={{marginTop:8}} className="badge">{a.tag}</div>
    <div style={{marginTop:8,fontSize:13,color:'#475569'}}>{a.desc}</div>
  </div>
)

export default function Tourism(){
  return (
    <Layout title="City Tourism">
      <div className="card" style={{marginBottom:14}}>Popular Attractions</div>
      <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
        {items.map((a,i)=>(<Attraction key={i} a={a}/>))}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
          <div style={{fontWeight:600}}>Tourist Map</div>
          <span className="link">Change Location</span>
        </div>
        <div className="map">Map data ©2024 Google (placeholder)</div>
      </div>
    </Layout>
  )
}
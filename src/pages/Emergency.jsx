import React from 'react';
import Layout from '../components/Layout';

const Card = ({title,desc,number,color}) => (
  <div className="card" style={{borderTop:`4px solid ${color}`}}>
    <div style={{fontWeight:600,marginBottom:8}}>{title}</div>
    <div style={{color:'#64748b',marginBottom:10}}>{desc}</div>
    <div style={{fontSize:24,fontWeight:700,marginBottom:10}}>{number}</div>
    <button className="button" onClick={()=>alert('Calling '+number)}>Call Now</button>
  </div>
)

export default function Emergency(){
  return (
    <Layout title="Emergency Services">
      <div className="card" style={{marginBottom:14, background:'#fff3f3', border:'1px solid #ffd1d1'}}>
        ⚠️ For life-threatening emergencies, call 911 immediately
      </div>
      <div className="grid cols-3">
        <Card title="Police Emergency" desc="Crime, accidents, emergencies" number="911" color="#3b82f6"/>
        <Card title="Fire Department" desc="Fires, rescues, hazardous materials" number="911" color="#ef4444"/>
        <Card title="Medical Emergency" desc="Ambulance, medical emergencies" number="911" color="#22c55e"/>
        <Card title="Poison Control" desc="24/7 poison emergency hotline" number="+1-800-222-1222" color="#8b5cf6"/>
        <Card title="Mental Health Crisis" desc="Suicide & crisis lifeline" number="+1-988" color="#06b6d4"/>
        <Card title="Non-Emergency Police" desc="Non-urgent police matters" number="+1-555-0100" color="#6366f1"/>
      </div>
    </Layout>
  )
}
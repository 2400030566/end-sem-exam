import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
  const nav = useNavigate();
  return (
    <Layout title="City Services Dashboard">
      <div className="grid cols-3">
        <Card icon="🚌" title="Public Transport" desc="Real-time bus and train schedules" actionText="Open" onClick={()=>nav('/transport')}/>
        <Card icon="💳" title="Bill Payments" desc="Pay utilities and taxes online" actionText="Open" onClick={()=>nav('/bills')}/>
        <Card icon="🧑‍⚕️" title="Healthcare Services" desc="Book appointments and emergency contacts" actionText="Open" onClick={()=>nav('/healthcare')}/>
        <Card icon="🛠️" title="Report Issues" desc="Submit complaints and track status" actionText="Open" onClick={()=>nav('/complaints')}/>
        <Card icon="📘" title="City Tourism" desc="Explore attractions and events" actionText="Open" onClick={()=>nav('/tourism')}/>
        <Card icon="🚨" title="Emergency Services" desc="Quick access to emergency contacts" actionText="Open" onClick={()=>nav('/emergency')}/>
      </div>
    </Layout>
  )
}
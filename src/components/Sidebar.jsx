import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Item = ({to, icon, label}) => (
  <NavLink to={to} className={({isActive})=> isActive ? 'active' : ''}>
    <span style={{width:22,textAlign:'center'}}>{icon}</span> {label}
  </NavLink>
);

export default function Sidebar(){
  const nav = useNavigate();
  return (
    <aside className="sidebar">
      <h1>🏙️ <span>SmartCityHub</span></h1>
      <div className="nav">
        <Item to="/dashboard" icon="🏠" label="Home"/>
        <Item to="/transport" icon="🚌" label="Transport"/>
        <Item to="/healthcare" icon="🧑‍⚕️" label="Healthcare"/>
        <Item to="/emergency" icon="🚨" label="Emergency"/>
        <Item to="/bills" icon="💰" label="Bills & Tax"/>
        <Item to="/complaints" icon="📝" label="Complaints"/>
        <Item to="/tourism" icon="🗺️" label="Tourism"/>
      </div>
      <div style={{position:'absolute', bottom:18}}>
        <button className="button secondary" onClick={()=>nav('/login')}>Logout</button>
      </div>
    </aside>
  )
}
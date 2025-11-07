import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({children, title}){
  return (
    <div className="layout">
      <Sidebar/>
      <div className="content">
        <Topbar/>
        <div className="page">
          {title && <h2 style={{marginTop:0}}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  )
}
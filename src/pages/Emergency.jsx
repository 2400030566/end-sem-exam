import React from 'react'

export default function Emergency(){
  return (
    <div>
      <h2>Emergency Services</h2>
      <div className="card" style={{marginTop:12}}>
        <div style={{display:'flex',gap:12}}>
          <div style={{flex:1}}>
            <h3 style={{marginTop:0}}>Police</h3>
            <div>Phone: <b>100</b></div>
            <div>Response: <b>Immediate</b></div>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginTop:0}}>Ambulance</h3>
            <div>Phone: <b>102</b></div>
            <div>Response: <b>Immediate</b></div>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginTop:0}}>Fire</h3>
            <div>Phone: <b>101</b></div>
            <div>Response: <b>Immediate</b></div>
          </div>
        </div>
      </div>
    </div>
  )
}

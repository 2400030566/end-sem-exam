import React from 'react'

export default function AdminUsers(){
  // Simple demo list — in a real app this would come from the server
  const users = [
    {email: 'user1@example.com', role: 'Citizen'},
    {email: 'admin@smartcity.com', role: 'Administrator'},
    {email: 'user2@example.com', role: 'Citizen'}
  ]

  return (
    <div style={{padding:24}}>
      <h2>Manage Users</h2>
      <div style={{marginTop:12}}>
        {users.map((u, i)=> (
          <div key={i} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
            <div>
              <div style={{fontWeight:700}}>{u.email}</div>
              <div style={{fontSize:13,color:'var(--muted)'}}>{u.role}</div>
            </div>
            <div style={{display:'flex',gap:8}}>
              <button className="button secondary">Edit</button>
              <button className="button" style={{background:'#ef4444'}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

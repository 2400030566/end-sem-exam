import React from 'react';
import Layout from '../components/Layout';
import items from '../data/complaints.json';

const Row = ({it}) => (
  <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div>
      <div style={{fontSize:12,color:'#64748b'}}>{it.id} • <span className="badge">{it.type}</span></div>
      <div style={{fontWeight:600}}>{it.title}</div>
      <div style={{fontSize:12,color:'#64748b'}}>Submitted: {it.date}</div>
    </div>
    <div style={{color: it.status==='Resolved'?'#16a34a': it.status==='In Progress'?'#2563eb':'#f59e0b' }}>{it.status}</div>
  </div>
)

export default function Complaints(){
  return (
    <Layout title="Reports & Complaints">
      <div className="grid cols-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        <div className="card"><div style={{fontWeight:600}}>📣 File Complaint</div><div className="muted">Report service issues, billing problems</div><button className="button" style={{marginTop:10}} onClick={()=>alert('Open complaint form')}>Start</button></div>
        <div className="card"><div style={{fontWeight:600}}>📤 Submit Report</div><div className="muted">Infrastructure issues, safety concerns</div><button className="button" style={{marginTop:10}} onClick={()=>alert('Open report form')}>Start</button></div>
        <div className="card"><div style={{fontWeight:600}}>💡 Give Feedback</div><div className="muted">Service suggestions, improvements</div><button className="button" style={{marginTop:10}} onClick={()=>alert('Open feedback form')}>Start</button></div>
      </div>
      <div className="card" style={{marginTop:16}}>
        <div style={{fontWeight:600,marginBottom:10}}>Your Recent Submissions</div>
        <div className="grid" style={{gridTemplateColumns:'1fr',gap:10}}>
          {items.map(it=> <Row key={it.id} it={it}/>)}
        </div>
      </div>
    </Layout>
  )
}
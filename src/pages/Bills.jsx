import React from 'react';
import Layout from '../components/Layout';
import bills from '../data/bills.json';

export default function Bills(){
  return (
    <Layout title="Bills & Payments">
      <div className="grid cols-4" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {bills.cards.map((c,i)=>(
          <div key={i} className="card">
            <div style={{fontWeight:600,marginBottom:6}}>{c.name}</div>
            <div style={{fontSize:24,fontWeight:800,marginBottom:10}}>{c.amount}</div>
            <button className="button" onClick={()=>alert('Paying '+c.name)}>Pay Now</button>
          </div>
        ))}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div style={{fontWeight:600,marginBottom:10}}>Recent Payments</div>
        <table className="table">
          <thead><tr><th>Service</th><th>Amount</th><th>Date</th><th>Status</th><th>Receipt</th></tr></thead>
          <tbody>
            {bills.payments.map((row,i)=>(
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td><span className="badge green">Paid</span></td>
                <td><span className="link" onClick={()=>alert('Downloading receipt...')}>Download</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
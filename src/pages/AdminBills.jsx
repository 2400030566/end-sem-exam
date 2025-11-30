import React, { useEffect, useState } from 'react'
import seedData from '../data/bills.json'

const STORAGE_KEY = 'billsData'

function loadBills(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(raw) return JSON.parse(raw)
  }catch(e){}
  return seedData
}

function saveBills(obj){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
}

export default function AdminBills(){
  const [data, setData] = useState({cards:[], payments:[]})
  const [service, setService] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('Unpaid')
  const [editingIndex, setEditingIndex] = useState(-1)

  useEffect(()=>{
    const d = loadBills()
    setData(d)
  }, [])

  function persist(next){
    setData(next)
    saveBills(next)
  }

  function resetForm(){ setService(''); setAmount(''); setDate(''); setStatus('Unpaid'); setEditingIndex(-1) }

  function onSubmit(e){
    e.preventDefault()
    if(!service || !amount) return
    const pay = [service, `$${parseFloat(amount).toFixed(2)}`, date || new Date().toISOString().slice(0,10), status, 'Download']

    const next = {...data, payments: [...data.payments]}
    if(editingIndex >= 0){
      next.payments[editingIndex] = pay
    } else {
      next.payments.unshift(pay)
    }
    // ensure service exists in cards
    const has = next.cards.find(c=>c.name === service)
    if(!has) next.cards.push({name: service, amount: `$${parseFloat(amount).toFixed(2)}`})

    persist(next)
    resetForm()
  }

  function onEdit(i){
    const p = data.payments[i]
    if(!p) return
    setService(p[0])
    setAmount(p[1].replace(/[^0-9.]/g,''))
    setDate(p[2])
    setStatus(p[3])
    setEditingIndex(i)
  }

  function onDelete(i){
    if(!confirm('Delete this payment?')) return
    const next = {...data, payments: data.payments.filter((_,idx)=>idx!==i)}
    persist(next)
  }

  function addService(){
    const name = prompt('New service name')
    if(!name) return
    const next = {...data, cards: [...data.cards, {name, amount: '$0.00'}]}
    persist(next)
  }

  return (
    <div>
      <h2>Admin — Bills Management</h2>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <div style={{flex:1}} className="card">
          <h3 style={{marginTop:0}}>Generate / Edit Bill</h3>
          <form onSubmit={onSubmit}>
            <div style={{marginBottom:8}}>
              <label>Service</label>
              <select className="input" value={service} onChange={(e)=>setService(e.target.value)}>
                <option value="">-- select service --</option>
                {data.cards.map((c, i)=> <option key={i} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div style={{display:'flex',gap:8}}>
              <div style={{flex:1}}>
                <label>Amount</label>
                <input className="input" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="0.00" />
              </div>
              <div style={{width:160}}>
                <label>Date</label>
                <input className="input" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
              </div>
            </div>
            <div style={{marginTop:8}}>
              <label>Status</label>
              <select className="input" value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option>Unpaid</option>
                <option>Paid</option>
              </select>
            </div>
            <div style={{display:'flex',gap:8,marginTop:12}}>
              <button className="button" type="submit">{editingIndex>=0 ? 'Save Payment' : 'Generate Bill'}</button>
              <button type="button" className="button secondary" onClick={resetForm}>Reset</button>
              <button type="button" className="button secondary" onClick={addService}>Add Service</button>
            </div>
          </form>
        </div>

        <div style={{flex:2}}>
          <div className="card">
            <h3 style={{marginTop:0}}>Services</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {data.cards.map((c,i)=> (
                <div key={i} style={{padding:10,background:'#f8fafc',borderRadius:10, minWidth:140}}>
                  <div style={{fontSize:12,color:'var(--muted)'}}>{c.name}</div>
                  <div style={{fontWeight:700}}>{c.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{marginTop:12}}>
            <h3 style={{marginTop:0}}>Payments</h3>
            <table className="table">
              <thead>
                <tr><th>Service</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {data.payments.map((p,i)=> (
                  <tr key={i}>
                    <td>{p[0]}</td>
                    <td>{p[1]}</td>
                    <td>{p[2]}</td>
                    <td>{p[3]}</td>
                    <td style={{whiteSpace:'nowrap'}}>
                      <button className="button secondary" onClick={()=>onEdit(i)}>Edit</button>
                      <button className="button" style={{marginLeft:8,background:'#ef4444'}} onClick={()=>onDelete(i)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

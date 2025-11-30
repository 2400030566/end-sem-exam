import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Admin from './pages/AdminNew'
import AdminUsers from './pages/AdminUsers'
import AdminBills from './pages/AdminBills'
import Analytics from './pages/Analytics'
import Bills from './pages/Bills'
import Complaints from './pages/Complaints'
import Transport from './pages/Transport'
import Healthcare from './pages/Healthcare'
import Tourism from './pages/Tourism'
import Emergency from './pages/Emergency'

function getAuth(){
	try { return JSON.parse(localStorage.getItem('auth')) || null } catch(e){ return null }
}

function ProtectedRoute({children, adminOnly}){
	const auth = getAuth()
	if(!auth) return <Navigate to="/login" replace />
	if(adminOnly && !auth.isAdmin) return <Navigate to="/dashboard" replace />
	return children
}

export default function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>} />

				<Route path="/admin" element={
					<ProtectedRoute adminOnly>
						<Admin />
					</ProtectedRoute>
				} />

					<Route path="/admin/users" element={
						<ProtectedRoute adminOnly>
							<AdminUsers />
						</ProtectedRoute>
					} />

					<Route path="/admin/bills" element={
						<ProtectedRoute adminOnly>
							<AdminBills />
						</ProtectedRoute>
					} />

					{/* debug route removed */}

				<Route path="/" element={<Navigate to="/dashboard" replace />} />

				<Route path="/dashboard" element={
					<ProtectedRoute>
						<Layout><Dashboard/></Layout>
					</ProtectedRoute>
				} />

				<Route path="/analytics" element={<ProtectedRoute><Layout><Analytics/></Layout></ProtectedRoute>} />
				<Route path="/bills" element={<ProtectedRoute><Layout><Bills/></Layout></ProtectedRoute>} />
				<Route path="/complaints" element={<ProtectedRoute><Layout><Complaints/></Layout></ProtectedRoute>} />
				<Route path="/transport" element={<ProtectedRoute><Layout><Transport/></Layout></ProtectedRoute>} />
				<Route path="/healthcare" element={<ProtectedRoute><Layout><Healthcare/></Layout></ProtectedRoute>} />
		<Route path="/tourism" element={<ProtectedRoute><Layout><Tourism/></Layout></ProtectedRoute>} />
				<Route path="/emergency" element={<ProtectedRoute><Layout><Emergency/></Layout></ProtectedRoute>} />

				<Route path="*" element={<div style={{padding:32}}>Page not found — <a href="/">Go Home</a></div>} />
			</Routes>
		</BrowserRouter>
	)
}

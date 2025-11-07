import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineReport } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiSiren } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function Admin() {
  const navigate = useNavigate();

  const logout = () => navigate("/login");

  return (
    <div className="layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <h1>🏙 SmartCityHub</h1>

        <div className="nav">
          <Link to="/admin" className="active"><MdOutlineDashboard /> Admin Dashboard</Link>
          <Link to="/dashboard"><FaUsers /> User Management</Link>
          <Link to="/analytics"><BiBarChartAlt2 /> Analytics</Link>
          <Link to="/complaints"><MdOutlineReport /> Manage Complaints</Link>
        </div>

        <div style={{ marginTop: "40px" }}>
          <button onClick={() => navigate("/dashboard")} className="button secondary" style={{ width: "100%" }}>
            <FaUsers /> Citizen View
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="header">
          <div className="search">
            <input placeholder="Search city services, locations, facilities..." />
          </div>

          <div>Welcome, <b>Admin</b><br />
            <span className="badge green">Administrator</span>
          </div>

          <button className="button red" onClick={logout} style={{ background:"#ef4444" }}>Logout</button>
        </header>

        <div className="page">
          <h2>City Management Dashboard</h2>

          {/* Stats */}
          <div className="grid cols-4" style={{ marginTop: "20px" }}>
            <Card icon={<FaUsers />} title="Total Citizens" value="54,723" trend="+5.2% from last month" trendColor="green" />
            <Card icon={<MdOutlineReport />} title="Active Complaints" value="127" trend="-12% from last month" trendColor="red" />
            <Card icon={<GiSiren />} title="Emergency Calls" value="18" trend="+3 from last month" trendColor="green" />
            <Card icon={<RiMoneyDollarCircleFill />} title="Revenue (Month)" value="$2.1M" trend="+8.1% from last month" trendColor="green" />
          </div>

          {/* Feature Cards */}
          <div className="grid cols-3" style={{ marginTop: "28px" }}>
            <Feature title="User Management" text="Manage citizen accounts and permissions" link="/dashboard" />
            <Feature title="System Analytics" text="View detailed reports and statistics" link="/analytics" />
            <Feature title="Manage Complaints" text="Review and resolve citizen issues" link="/complaints" />
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({ icon, title, value, trend, trendColor }) {
  return (
    <div className="card">
      <div className="badge">{icon}</div>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <span className={`badge ${trendColor}`}>{trend}</span>
    </div>
  );
}

function Feature({ title, text, link }) {
  return (
    <Link to={link} className="card" style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

const metrics = [
  { label: 'Daily Collection', value: '1,280 kg', trend: '+12%' },
  { label: 'Recycling Rate', value: '78.4%', trend: '+4.8%' },
  { label: 'Bin Health', value: '96%', trend: '+2.1%' },
  { label: 'Alerts', value: '07', trend: '-3' },
]

const bins = [
  { name: 'Residential Zone A', fill: 72, color: '#34d399', type: 'Mixed Waste' },
  { name: 'Campus Block 4', fill: 58, color: '#60a5fa', type: 'Recyclables' },
  { name: 'Market Street', fill: 84, color: '#fbbf24', type: 'Organic Waste' },
  { name: 'Hospital Area', fill: 41, color: '#f87171', type: 'Hazardous' },
]

const wasteTypes = [
  { name: 'Plastic', share: 34, color: '#60a5fa' },
  { name: 'Paper', share: 26, color: '#34d399' },
  { name: 'Organic', share: 22, color: '#fbbf24' },
  { name: 'Metal', share: 18, color: '#f87171' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">SW</div>
          <div>
            <p className="eyebrow">AI Waste System</p>
            <h1>Smart Waste</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Collections</button>
          <button className="nav-item">Classification</button>
          <button className="nav-item">Alerts</button>
          <button className="nav-item">Reports</button>
        </nav>

        <div className="status-card">
          <p>Vision Model</p>
          <strong>92.6% Accuracy</strong>
          <span>Updated 3 mins ago</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h2>Waste Management Overview</h2>
          </div>
          <button className="primary-btn">Generate Report</button>
        </header>

        <section className="metrics-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p>{metric.label}</p>
              <h3>{metric.value}</h3>
              <span>{metric.trend}</span>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Smart Bin Status</h3>
              <span>Live</span>
            </div>

            <div className="bin-list">
              {bins.map((bin) => (
                <div key={bin.name} className="bin-row">
                  <div className="bin-meta">
                    <strong>{bin.name}</strong>
                    <span>{bin.type}</span>
                  </div>

                  <div className="progress-wrap">
                    <div className="progress-bar">
                      <span style={{ width: `${bin.fill}%`, background: bin.color }} />
                    </div>
                    <small>{bin.fill}%</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Waste Composition</h3>
              <span>This week</span>
            </div>

            <div className="waste-chart">
              {wasteTypes.map((item) => (
                <div key={item.name} className="waste-row">
                  <div className="legend">
                    <span className="dot" style={{ background: item.color }} />
                    <label>{item.name}</label>
                  </div>
                  <div className="bar-track">
                    <span style={{ width: `${item.share}%`, background: item.color }} />
                  </div>
                  <strong>{item.share}%</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

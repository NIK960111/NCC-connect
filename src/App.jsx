import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          🪖 <span>NCC</span> Connect
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <button className="login-btn">
          Login
        </button>
      </header>


      {/* Hero Section */}
      <main>

        <section className="hero-section" id="home">

          <div className="hero-content">

            <p className="tagline">
              🪖 NATIONAL CADET CORPS
            </p>

            <h1>
              Manage Your NCC
              <span> Smarter.</span>
            </h1>

            <p className="description">
              A digital platform for managing cadet attendance,
              events, records, certificates and more — all in one place.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Get Started →
              </button>

              <button className="secondary-btn">
                Learn More
              </button>
            </div>

          </div>


          {/* Dashboard Preview */}
          <div className="dashboard-card">

            <div className="card-header">
              <div>
                <p>Welcome back, Cadet 👋</p>
                <h2>NCC Dashboard</h2>
              </div>

              <div className="profile-circle">
                N
              </div>
            </div>


            <div className="stats">

              <div className="stat-card">
                <span>📋</span>
                <p>Attendance</p>
                <h3>87%</h3>
              </div>

              <div className="stat-card">
                <span>📅</span>
                <p>Events</p>
                <h3>08</h3>
              </div>

              <div className="stat-card">
                <span>🏆</span>
                <p>Achievements</p>
                <h3>12</h3>
              </div>

            </div>


            <div className="upcoming">

              <div className="section-title">
                <h3>Upcoming Events</h3>
                <span>View all →</span>
              </div>

              <div className="event">
                <div className="event-date">
                  <strong>08</strong>
                  <small>OCT</small>
                </div>

                <div>
                  <h4>NCC Rank Ceremony</h4>
                  <p>College Campus</p>
                </div>
              </div>

              <div className="event">
                <div className="event-date">
                  <strong>10</strong>
                  <small>OCT</small>
                </div>

                <div>
                  <h4>Blood Donation Camp</h4>
                  <p>College Campus</p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section className="features" id="features">

          <div className="section-heading">
            <p>ONE PLATFORM</p>
            <h2>Everything NCC needs</h2>
          </div>


          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Attendance</h3>
              <p>
                Track daily parade and event attendance
                digitally.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Events</h3>
              <p>
                Organize NCC events, camps and activities
                efficiently.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>Records</h3>
              <p>
                Store cadet documents, certificates and
                achievements securely.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Reports</h3>
              <p>
                Generate attendance and event reports
                whenever required.
              </p>
            </div>

          </div>

        </section>


        {/* About */}
        <section className="about" id="about">

          <div>
            <p className="tagline">ABOUT NCC CONNECT</p>

            <h2>
              From paperwork to
              <span> digital management.</span>
            </h2>

            <p>
              NCC Connect is designed to bring cadet management,
              attendance, events and records into one simple
              digital platform.
            </p>
          </div>

        </section>

      </main>


      {/* Footer */}
      <footer>
        <div className="logo">
          🪖 NCC Connect
        </div>

        <p>
          NCC Cadet Management System
        </p>

        <p>
          © 2026 NCC Connect
        </p>
      </footer>

    </div>
  )
}

export default App

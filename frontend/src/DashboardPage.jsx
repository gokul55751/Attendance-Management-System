const classes = [
  { time: '09:00 AM', subject: 'Database Systems', room: 'CS-204', status: 'Completed' },
  { time: '11:00 AM', subject: 'Computer Networks', room: 'CS-106', status: 'Next class' },
  { time: '01:30 PM', subject: 'Software Engineering', room: 'LAB-03', status: 'Upcoming' },
];

function DashboardPage({ displayName, onSignOut }) {
  const today = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <a className="brand" href="#dashboard" aria-label="Present dashboard">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Present</span>
        </a>

        <div className="dashboard-user">
          <span className="user-avatar" aria-hidden="true">
            {displayName.charAt(0).toUpperCase()}
          </span>
          <span className="user-name">{displayName}</span>
          <button className="sign-out-button" type="button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-welcome" aria-labelledby="dashboard-title">
          <div>
            <p className="dashboard-date">{today}</p>
            <h1 id="dashboard-title">Good morning, {displayName}.</h1>
            <p>Here is today&rsquo;s attendance overview.</p>
          </div>
          <button className="primary-action" type="button">
            <span aria-hidden="true">+</span> Mark attendance
          </button>
        </section>

        <section className="metric-grid" aria-label="Attendance summary">
          <article className="metric-card metric-highlight">
            <p>Today&rsquo;s attendance</p>
            <strong>92%</strong>
            <span>2% higher than yesterday</span>
          </article>
          <article className="metric-card">
            <p>Students present</p>
            <strong>138</strong>
            <span>Across 3 classes</span>
          </article>
          <article className="metric-card">
            <p>Students absent</p>
            <strong>12</strong>
            <span>8 excused, 4 unexcused</span>
          </article>
          <article className="metric-card">
            <p>Classes today</p>
            <strong>3</strong>
            <span>1 completed, 2 remaining</span>
          </article>
        </section>

        <div className="dashboard-grid">
          <section className="dashboard-panel attendance-panel" aria-labelledby="weekly-title">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">WEEKLY SUMMARY</p>
                <h2 id="weekly-title">Attendance rate</h2>
              </div>
              <span className="status-pill">On track</span>
            </div>

            <div className="weekly-summary">
              <div className="attendance-ring" aria-label="94 percent attendance">
                <span><strong>94%</strong>average</span>
              </div>
              <div className="weekly-details">
                <div><span>Present</span><strong>704</strong></div>
                <div><span>Absent</span><strong>46</strong></div>
                <div><span>Total records</span><strong>750</strong></div>
              </div>
            </div>
          </section>

          <section className="dashboard-panel classes-panel" aria-labelledby="classes-title">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">SCHEDULE</p>
                <h2 id="classes-title">Today&rsquo;s classes</h2>
              </div>
              <span className="class-count">3 classes</span>
            </div>

            <div className="class-list">
              {classes.map((classItem) => (
                <article className="class-item" key={classItem.subject}>
                  <time>{classItem.time}</time>
                  <div>
                    <h3>{classItem.subject}</h3>
                    <p>{classItem.room}</p>
                  </div>
                  <span className={`class-status ${classItem.status === 'Next class' ? 'is-next' : ''}`}>
                    {classItem.status}
                  </span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;

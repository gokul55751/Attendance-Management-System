import './App.css';

function App() {
  return (
    <div className="signup-page">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Present home">
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <span>Present</span>
        </a>

        <p className="header-action">
          Already have an account? <a href="#sign-in">Sign in</a>
        </p>
      </header>

      <main className="signup-main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">ATTENDANCE, MADE SIMPLE</p>
          <h1 id="intro-title">A better way to keep every class on track.</h1>
          <p className="intro-copy">
            Create your account and start managing student attendance in one
            clear, dependable place.
          </p>

          <div className="attendance-preview" aria-hidden="true">
            <div className="preview-topline">
              <span>Today&rsquo;s attendance</span>
              <span className="live-pill">Live</span>
            </div>
            <strong>92%</strong>
            <div className="progress-track">
              <span />
            </div>
            <div className="preview-stats">
              <span><i className="dot dot-present" />46 present</span>
              <span><i className="dot dot-absent" />4 absent</span>
            </div>
          </div>
        </section>

        <section className="signup-card" aria-labelledby="signup-title">
          <div className="card-heading">
            <span className="card-icon" aria-hidden="true">+</span>
            <div>
              <h2 id="signup-title">Create your account</h2>
              <p>Enter your details to get started.</p>
            </div>
          </div>

          <form className="signup-form">
            <div className="name-row">
              <div className="field">
                <label htmlFor="first-name">First name</label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="Gokul"
                  autoComplete="given-name"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              <div className="field">
                <label htmlFor="last-name">Last name</label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Kumar"
                  autoComplete="family-name"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@college.edu"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={128}
              />
            </div>

            <label className="terms">
              <input type="checkbox" name="terms" required />
              <span>
                I agree to the <a href="#terms">Terms of Service</a> and{' '}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit">Create account</button>
          </form>

          <p className="mobile-signin">
            Already have an account? <a href="#sign-in">Sign in</a>
          </p>
        </section>
      </main>

      <footer>
        <span>&copy; 2026 Present</span>
        <span>Attendance Management System</span>
      </footer>
    </div>
  );
}

export default App;

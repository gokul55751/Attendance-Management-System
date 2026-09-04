function LoginPage({ onSubmit }) {
  return (
    <div className="signup-page">
      <header className="site-header">
        <a className="brand" href="#create-account" aria-label="Present home">
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <span>Present</span>
        </a>

        <p className="header-action">
          New to Present? <a href="#create-account">Create an account</a>
        </p>
      </header>

      <main className="signup-main">
        <section className="intro" aria-labelledby="login-intro-title">
          <p className="eyebrow">WELCOME BACK</p>
          <h1 id="login-intro-title">Pick up right where your class left off.</h1>
          <p className="intro-copy">
            Sign in to review attendance, update student records, and keep your
            classes running smoothly.
          </p>

          <div className="attendance-preview" aria-hidden="true">
            <div className="preview-topline">
              <span>This week</span>
              <span className="live-pill">On track</span>
            </div>
            <strong>94%</strong>
            <div className="progress-track login-progress">
              <span />
            </div>
            <div className="preview-stats">
              <span><i className="dot dot-present" />235 check-ins</span>
              <span><i className="dot dot-absent" />15 absences</span>
            </div>
          </div>
        </section>

        <section className="signup-card login-card" aria-labelledby="login-title">
          <div className="card-heading">
            <span className="card-icon" aria-hidden="true">→</span>
            <div>
              <h2 id="login-title">Sign in to Present</h2>
              <p>Enter your account details to continue.</p>
            </div>
          </div>

          <form className="signup-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="login-email">Email address</label>
              <input
                id="login-email"
                name="email"
                type="email"
                placeholder="you@college.edu"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>

            <div className="field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                minLength={8}
                maxLength={128}
              />
            </div>

            <label className="terms login-remember">
              <input type="checkbox" name="remember" />
              <span>Keep me signed in on this device</span>
            </label>

            <button type="submit">Sign in</button>
          </form>

          <p className="mobile-signin login-create-account">
            New to Present? <a href="#create-account">Create an account</a>
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

export default LoginPage;

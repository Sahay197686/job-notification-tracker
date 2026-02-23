import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './style.css'

type PageDefinition = {
  id: string
  path: string
  label: string
}

const navPages: PageDefinition[] = [
  { id: 'dashboard', path: '/dashboard', label: 'Dashboard' },
  { id: 'saved', path: '/saved', label: 'Saved' },
  { id: 'digest', path: '/digest', label: 'Digest' },
  { id: 'settings', path: '/settings', label: 'Settings' },
  { id: 'proof', path: '/proof', label: 'Proof' },
]

type PlaceholderPageProps = {
  title: string
  subtitle?: string
}

function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="context-title">
        <div className="context-header__text">
          <h1 id="context-title" className="context-header__title">
            {title}
          </h1>
          <p className="context-header__subtitle">
            {subtitle ?? 'This section will be built in the next step.'}
          </p>
        </div>
      </section>
    </main>
  )
}

function LandingPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="landing-title">
        <div className="context-header__text">
          <h1 id="landing-title" className="context-header__title">
            Stop Missing The Right Jobs.
          </h1>
          <p className="context-header__subtitle">
            Precision-matched job discovery delivered daily at 9AM.
          </p>
          <div className="landing-actions">
            <Link to="/settings" className="btn btn--primary">
              Start Tracking
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function SettingsPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="settings-title">
        <div className="context-header__text">
          <h1 id="settings-title" className="context-header__title">
            Notification preferences
          </h1>
          <p className="context-header__subtitle">
            Define the kind of roles and locations you care about. This is a placeholder; nothing
            will be saved yet.
          </p>
        </div>
      </section>

      <section className="settings">
        <div className="settings__group">
          <label className="field">
            <span className="field__label">Role keywords</span>
            <input
              className="field__input"
              placeholder="e.g. Frontend Engineer, Product Manager"
            />
            <span className="field__hint">Use keywords to describe the roles you want to hear about.</span>
          </label>
        </div>

        <div className="settings__group">
          <label className="field">
            <span className="field__label">Preferred locations</span>
            <input className="field__input" placeholder="e.g. Berlin, London, Remote Europe" />
            <span className="field__hint">
              List cities or regions. This is for layout only; changes are not persisted.
            </span>
          </label>
        </div>

        <div className="settings__group settings__group--row">
          <label className="field">
            <span className="field__label">Mode</span>
            <select className="field__input">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
            <span className="field__hint">Choose the working mode that best matches your search.</span>
          </label>

          <label className="field">
            <span className="field__label">Experience level</span>
            <select className="field__input">
              <option>Entry</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
            <span className="field__hint">
              This is a placeholder selector; it does not change any behavior yet.
            </span>
          </label>
        </div>
      </section>
    </main>
  )
}

function DashboardPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="dashboard-title">
        <div className="context-header__text">
          <h1 id="dashboard-title" className="context-header__title">
            Dashboard
          </h1>
          <p className="context-header__subtitle">
            No jobs yet. In the next step, you will load a realistic dataset.
          </p>
        </div>
      </section>
    </main>
  )
}

function SavedPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="saved-title">
        <div className="context-header__text">
          <h1 id="saved-title" className="context-header__title">
            Saved jobs
          </h1>
          <p className="context-header__subtitle">
            This space will hold roles you choose to keep close. For now, there is no data yet.
          </p>
        </div>
      </section>
    </main>
  )
}

function DigestPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="digest-title">
        <div className="context-header__text">
          <h1 id="digest-title" className="context-header__title">
            Daily digest
          </h1>
          <p className="context-header__subtitle">
            A premium daily summary of matching roles will appear here in a future step.
          </p>
        </div>
      </section>
    </main>
  )
}

function ProofPage() {
  return (
    <main className="page">
      <section className="context-header" aria-labelledby="proof-title">
        <div className="context-header__text">
          <h1 id="proof-title" className="context-header__title">
            Proof of work
          </h1>
          <p className="context-header__subtitle">
            Placeholder area for collecting artifacts, screenshots, and evidence of shipped changes.
          </p>
        </div>
      </section>
    </main>
  )
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app-root">
      <header className="top-bar" aria-label="Primary navigation">
        <div className="top-bar__left">Job Notification App</div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
        </button>

        <nav className="nav">
          <ul className="nav__list" aria-label="Main">
            {navPages.map((page) => (
              <li key={page.id}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                  onClick={closeMenu}
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {menuOpen && (
          <nav className="nav-mobile" aria-label="Main mobile">
            <ul className="nav-mobile__list">
              {navPages.map((page) => (
                <li key={page.id}>
                  <NavLink
                    to={page.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-mobile__link nav-mobile__link--active' : 'nav-mobile__link'
                    }
                    onClick={closeMenu}
                  >
                    {page.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/digest" element={<DigestPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/proof" element={<ProofPage />} />
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Page Not Found"
              subtitle="The page you are looking for does not exist."
            />
          }
        />
      </Routes>

      <footer className="proof-footer" aria-label="Build checklist">
        <div className="proof-footer__content">
          <span className="proof-footer__label">Proof checklist</span>
          <ul className="proof-footer__list">
            <li>
              <span className="proof-footer__box" aria-hidden="true">
                □
              </span>
              <span>UI Built</span>
            </li>
            <li>
              <span className="proof-footer__box" aria-hidden="true">
                □
              </span>
              <span>Logic Working</span>
            </li>
            <li>
              <span className="proof-footer__box" aria-hidden="true">
                □
              </span>
              <span>Test Passed</span>
            </li>
            <li>
              <span className="proof-footer__box" aria-hidden="true">
                □
              </span>
              <span>Deployed</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return <AppShell />
}

export default App

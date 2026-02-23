import { NavLink, Route, Routes } from 'react-router-dom'
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
        <Route
          path="/"
          element={<PlaceholderPage title="Welcome" subtitle="This section will be built in the next step." />}
        />
        <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
        <Route path="/saved" element={<PlaceholderPage title="Saved" />} />
        <Route path="/digest" element={<PlaceholderPage title="Digest" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="/proof" element={<PlaceholderPage title="Proof" />} />
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

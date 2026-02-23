import './style.css'

function App() {
  return (
    <div className="app-root">
      <header className="top-bar">
        <div className="top-bar__left">Job Notification App</div>
        <div className="top-bar__center" aria-label="Progress">
          <span className="top-bar__progress-label">Step</span>
          <span className="top-bar__progress-value">1 / 4</span>
        </div>
        <div className="top-bar__right">
          <span className="status-badge status-badge--inactive">Not Started</span>
        </div>
      </header>

      <main className="page-layout">
        <section className="context-header" aria-labelledby="context-title">
          <div className="context-header__text">
            <h1 id="context-title" className="context-header__title">
              Design system foundation
            </h1>
            <p className="context-header__subtitle">
              Establish the visual and structural rules for the job notification workspace.
            </p>
          </div>
        </section>

        <section className="workspace">
          <div className="workspace__primary">
            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Core interface tokens</h2>
                <p className="card__subtitle">
                  Shared values for color, typography, and spacing. These power every surface.
                </p>
              </div>
              <div className="card__body">
                <div className="token-grid">
                  <div className="token-group">
                    <h3 className="token-group__label">Color</h3>
                    <dl className="token-list">
                      <div className="token-list__item">
                        <dt>Background</dt>
                        <dd>#F7F6F3</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Text</dt>
                        <dd>#111111</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Accent</dt>
                        <dd>#8B0000</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Support</dt>
                        <dd>Muted success / warning</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="token-group">
                    <h3 className="token-group__label">Typography</h3>
                    <dl className="token-list">
                      <div className="token-list__item">
                        <dt>Headings</dt>
                        <dd>Serif, confident, spacious</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Body</dt>
                        <dd>Sans-serif, 16–18px, line-height 1.6–1.8</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Measure</dt>
                        <dd>Max 720px text width</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="token-group">
                    <h3 className="token-group__label">Spacing</h3>
                    <dl className="token-list">
                      <div className="token-list__item">
                        <dt>Scale</dt>
                        <dd>8px, 16px, 24px, 40px, 64px</dd>
                      </div>
                      <div className="token-list__item">
                        <dt>Usage</dt>
                        <dd>Consistent vertical and horizontal rhythm</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Foundational components</h2>
                <p className="card__subtitle">
                  Buttons, inputs, and cards with consistent behavior and interaction rules.
                </p>
              </div>
              <div className="card__body">
                <div className="component-row">
                  <button className="btn btn--primary" type="button">
                    Primary action
                  </button>
                  <button className="btn btn--secondary" type="button">
                    Secondary action
                  </button>
                  <button className="btn btn--ghost" type="button">
                    Tertiary action
                  </button>
                </div>

                <div className="component-row">
                  <label className="field">
                    <span className="field__label">Sample input</span>
                    <input
                      className="field__input"
                      placeholder="Clear label, quiet styling, clear focus state"
                    />
                    <span className="field__hint">Inputs stay neutral until user needs guidance.</span>
                  </label>
                </div>

                <div className="component-row component-row--stack">
                  <div className="card card--subtle">
                    <div className="card__header">
                      <h3 className="card__title">Neutral state</h3>
                    </div>
                    <div className="card__body">
                      <p className="body-text">
                        Calm layout with clear hierarchy and predictable actions. No unnecessary
                        decoration.
                      </p>
                    </div>
                  </div>

                  <div className="card card--system card--system-success">
                    <div className="card__header">
                      <h3 className="card__title">Success state</h3>
                    </div>
                    <div className="card__body">
                      <p className="body-text">
                        Use muted green to confirm progress. Briefly state what worked and what
                        continues next.
                      </p>
                    </div>
                  </div>

                  <div className="card card--system card--system-warning">
                    <div className="card__header">
                      <h3 className="card__title">Warning state</h3>
                    </div>
                    <div className="card__body">
                      <p className="body-text">
                        Use muted amber when attention is needed. Explain what is blocking progress
                        and how to move forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="workspace__secondary">
            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Step guidance</h2>
                <p className="card__subtitle">
                  Each page begins with context, then presents a focused workspace and a quiet
                  support panel.
                </p>
              </div>
              <div className="card__body">
                <p className="body-text">
                  Keep copy brief and practical. Avoid hype language. Explain what this step is for
                  and the outcome of completing it.
                </p>

                <div className="copy-block">
                  <div className="copy-block__label">Sample explanation</div>
                  <pre className="copy-block__body" aria-label="Copyable guidance">
Design this step so a user can understand where they are, what they are deciding, and what happens next.
                  </pre>
                  <div className="copy-block__actions">
                    <button className="btn btn--secondary" type="button">
                      Copy text
                    </button>
                  </div>
                </div>

                <div className="secondary-section">
                  <h3 className="secondary-section__title">Error &amp; empty states</h3>
                  <p className="body-text">
                    When something goes wrong, describe the issue in plain language and offer a
                    concrete next step. When there is no data yet, show a calm placeholder and a
                    suggestion for what to do first.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

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

export default App

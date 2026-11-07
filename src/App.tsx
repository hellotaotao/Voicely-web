import './App.css'
import { LiveTranscriptionDemo } from './demo/LiveTranscriptionDemo'
import { voicelyMessaging } from './productMessaging'

function AppStoreCallToAction({ className }: { className: string }) {
  if (voicelyMessaging.appStoreUrl) {
    return (
      <a className={className} href={voicelyMessaging.appStoreUrl}>
        Get it free on the App Store
      </a>
    )
  }
  return <span className={`${className} is-pending`}>Coming soon to the App Store</span>
}

function App() {
  return (
    <main className="page-shell">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Voicely home">
          <span className="brand-mark">◖</span>
          Voicely
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="/support">Support</a>
        </div>
        <AppStoreCallToAction className="nav-cta" />
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{voicelyMessaging.hero.eyebrow}</p>
          <h1>{voicelyMessaging.hero.headline}</h1>
          <p className="hero-subtitle">{voicelyMessaging.hero.subheadline}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <AppStoreCallToAction className="primary-button" />
            <a className="secondary-button" href="#how-it-works">How it works</a>
          </div>
        </div>

        <div className="app-shot">
          <LiveTranscriptionDemo />
        </div>
      </section>

      <section className="audience-strip facts-strip" aria-label="Key facts">
        {voicelyMessaging.facts.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </section>

      <section id="features" className="content-section light-section">
        <div className="section-heading centered">
          <p className="eyebrow">Features</p>
          <h2>Made for meetings that run an hour, not ten-second memos.</h2>
        </div>
        <div className="feature-grid four-column">
          {voicelyMessaging.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="workflow-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From the meeting to minutes in your AI assistant.</h2>
        </div>
        <div className="workflow-rail four-steps">
          {voicelyMessaging.workflow.map((step, index) => (
            <article className="workflow-step" key={step.action}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.action}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="proof-section">
        <div>
          <p className="eyebrow">Privacy and how it runs</p>
          <h2>The transcript is made where the recording is.</h2>
          <ul className="proof-list" aria-label="What runs inside the app">
            {voicelyMessaging.underTheHood.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="trust-stack">
          {voicelyMessaging.privacy.map((item) => (
            <article className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Voicely</p>
        <h2>Free for iPhone, iPad and Mac.</h2>
        <ul className="requirements" aria-label="Requirements">
          {voicelyMessaging.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <AppStoreCallToAction className="primary-button" />
        <div className="footer-links" aria-label="Public pages">
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="mailto:hellotaotao@gmail.com">Contact</a>
        </div>
      </section>
    </main>
  )
}

export default App

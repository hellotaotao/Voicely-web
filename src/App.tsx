import './App.css'
import { voicelyMessaging } from './productMessaging'

function App() {
  return (
    <main className="page-shell">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Voicely home">
          <span className="brand-mark">◖</span>
          Voicely
        </a>
        <div className="nav-links">
          <a href="#problems">Problems</a>
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#proof">Proof</a>
        </div>
        <a className="nav-cta" href="#waitlist">Join waitlist</a>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{voicelyMessaging.hero.eyebrow}</p>
          <h1>{voicelyMessaging.hero.headline}</h1>
          <p className="hero-subtitle">{voicelyMessaging.hero.subheadline}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-button" href="#workflow">See the workflow</a>
            <a className="secondary-button" href="#features">Explore features</a>
          </div>
        </div>

        <div className="phone-stage" aria-label="Voicely app preview">
          <div className="phone-frame">
            <div className="phone-topbar">
              <span>9:41</span>
              <span>Voice Notes</span>
              <span>●●●</span>
            </div>
            <div className="recording-card active-recording">
              <div>
                <p className="card-label">Recording now</p>
                <h2>Product idea while walking</h2>
              </div>
              <div className="waveform" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, index) => (
                  <span key={index} style={{ height: `${22 + ((index * 17) % 48)}px` }} />
                ))}
              </div>
              <div className="record-meta">
                <span>00:42</span>
                <span>On-device</span>
              </div>
            </div>

            <div className="transcript-card">
              <p className="card-label">Transcript</p>
              <p>
                “The important part is not just saving audio. It is turning a quick spoken thought into text I can search, reuse, and trust later.”
              </p>
            </div>

            <div className="mini-list">
              <div>
                <strong>School pickup reminder</strong>
                <span>Transcribed · 12 sec</span>
              </div>
              <div>
                <strong>Client call follow-up</strong>
                <span>Queued · iCloud sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-label="Who Voicely is for">
        {voicelyMessaging.audience.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </section>

      <section id="problems" className="content-section warm-section">
        <div className="section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2>Voice capture is easy. Recovering value from voice is the hard part.</h2>
        </div>
        <div className="card-grid two-column">
          {voicelyMessaging.painPoints.map((pain) => (
            <article className="insight-card" key={pain.title}>
              <span className="dot" />
              <h3>{pain.title}</h3>
              <p>{pain.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="content-section light-section">
        <div className="section-heading centered">
          <p className="eyebrow">Product shape</p>
          <h2>A native iPhone notebook for spoken thoughts, private transcripts, and synced memory.</h2>
        </div>
        <div className="feature-grid">
          {voicelyMessaging.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflow-section">
        <div className="section-heading">
          <p className="eyebrow">From thought to searchable memory</p>
          <h2>One simple loop, designed around the moment you actually need it.</h2>
        </div>
        <div className="workflow-rail">
          {voicelyMessaging.workflow.map((step, index) => (
            <article className="workflow-step" key={step.action}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.action}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="proof-section">
        <div>
          <p className="eyebrow">Built like a real iPhone app</p>
          <h2>Private by design, native by default, and grounded in the existing Voicely app architecture.</h2>
        </div>
        <ul>
          {voicelyMessaging.proof.map((proof) => (
            <li key={proof}>{proof}</li>
          ))}
        </ul>
      </section>

      <section id="waitlist" className="final-cta">
        <p className="eyebrow">Voicely</p>
        <h2>Speak now. Search later. Keep the note useful.</h2>
        <p>
          Join the early-access list for an iOS voice notes app built around fast capture, on-device transcription, and iCloud-backed continuity.
        </p>
        <a className="primary-button" href="#top">Back to top</a>
      </section>
    </main>
  )
}

export default App

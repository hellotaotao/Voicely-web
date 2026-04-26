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
          <a href="#difference">Difference</a>
          <a href="#use-cases">Use cases</a>
          <a href="#workflow">Workflow</a>
          <a href="#trust">Trust</a>
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
            <a className="secondary-button" href="#difference">Why local matters</a>
          </div>
        </div>

        <div className="phone-stage" aria-label="Voicely app preview">
          <div className="phone-frame">
            <div className="phone-topbar">
              <span>9:41</span>
              <span>Sensitive Meeting</span>
              <span>●●●</span>
            </div>
            <div className="recording-card active-recording">
              <div>
                <p className="card-label">Recording locally</p>
                <h2>Client compliance review</h2>
              </div>
              <div className="waveform" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, index) => (
                  <span key={index} style={{ height: `${22 + ((index * 17) % 48)}px` }} />
                ))}
              </div>
              <div className="record-meta">
                <span>47:18</span>
                <span>On-device transcription</span>
              </div>
            </div>

            <div className="transcript-card">
              <p className="card-label">Transcript</p>
              <p>
                “We need a searchable transcript for the file, but the raw meeting audio cannot be sent to an outside transcription service.”
              </p>
            </div>

            <div className="mini-list">
              <div>
                <strong>Government program review</strong>
                <span>Local transcript · 52 min</span>
              </div>
              <div>
                <strong>HR interview notes</strong>
                <span>Review audio · export transcript</span>
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
          <p className="eyebrow">Why local matters</p>
          <h2>Cloud transcription is useful until policy says the audio cannot leave.</h2>
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

      <section id="difference" className="content-section light-section">
        <div className="section-heading centered">
          <p className="eyebrow">The difference</p>
          <h2>Local WhisperKit/CoreML processing makes privacy a product boundary.</h2>
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

      <section id="use-cases" className="content-section warm-section">
        <div className="section-heading">
          <p className="eyebrow">Use cases</p>
          <h2>Built for meetings where convenience has to answer to policy.</h2>
        </div>
        <div className="card-grid two-column">
          {voicelyMessaging.useCases.map((useCase) => (
            <article className="insight-card" key={useCase.title}>
              <span className="dot" />
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflow-section">
        <div className="section-heading">
          <p className="eyebrow">Meeting workflow</p>
          <h2>Record, transcribe locally, review, then decide what should remain.</h2>
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

      <section id="trust" className="proof-section">
        <div>
          <p className="eyebrow">Trust and privacy</p>
          <h2>Designed for sensitive meeting audio from the first product decision.</h2>
          <ul className="proof-list" aria-label="Architecture proof points">
            {voicelyMessaging.proof.map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
        </div>
        <div className="trust-stack">
          {voicelyMessaging.trust.map((item) => (
            <article className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" className="final-cta">
        <p className="eyebrow">Voicely</p>
        <h2>Turn sensitive meetings into transcripts without a cloud transcription handoff.</h2>
        <p>
          Join the early-access list for a local-first iOS meeting transcription app built around WhisperKit/CoreML, user-controlled retention, and compliance-sensitive workflows.
        </p>
        <a className="primary-button" href="#top">Back to top</a>
      </section>
    </main>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import './demo.css'
import {
  BackIcon,
  BubbleIcon,
  CheckIcon,
  ChipIcon,
  ClockIcon,
  CopyIcon,
  FolderIcon,
  GearIcon,
  MicIcon,
  PauseIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  RecordIcon,
  RetryIcon,
  SearchIcon,
  ShareIcon,
  SidebarIcon,
  StopIcon,
  TimerIcon,
  TrayIcon,
  UpDownIcon,
  WaveIcon,
} from './icons'
import {
  type CursorSpot,
  type DemoFrame,
  LOOP_SECONDS,
  STILL_TIME,
  finishedTitle,
  frameAt,
  recordingTitle,
  sentences,
} from './liveTranscriptionTimeline'

/** Design sizes in points, matching the app's Mac window and an iPhone screen. */
const WIDE = { width: 1100, height: 600 }
const COMPACT = { width: 390, height: 640 }
const COMPACT_BREAKPOINT = 640
/** Room around the canvas for its shadow. */
const PAD = 28

const olderNotes = [
  { title: '季度规划会', when: '6 Nov 2026 at 15:57', length: '72m 0s', folder: 'work', preview: '这个季度我们主要做三件事：iPad 版上线、改进新用户引导，还有把客服的回复时间压到一天以内。' },
  { title: 'Q3 Vendor Review', when: '5 Nov 2026 at 15:57', length: '52m 20s', folder: 'clients', preview: 'Thanks for joining. We want to go through the Q3 delivery numbers first and then talk about the renewal.' },
  { title: 'Hiring Debrief', when: '4 Nov 2026 at 15:57', length: '24m 20s', folder: 'work', preview: "Let's go around the room. Overall I'd say strong yes on the technical side. 沟通方面我觉得也不错。" },
  { title: 'Client Call: Onboarding Plan', when: '2 Nov 2026 at 15:57', length: '38m 10s', folder: 'clients', preview: "We'd like to roll this out to two teams first, about forty people, and then the rest of the office." },
]

const cursorSpots: Record<'wide' | 'compact', Record<CursorSpot, [number, number]>> = {
  wide: { rest: [720, 420], record: [280, 558], aside: [560, 470], stop: [280, 558], away: [700, 420] },
  compact: { rest: [250, 470], record: [346, 598], aside: [240, 470], stop: [346, 598], away: [250, 470] },
}

function useDemoTime(running: boolean) {
  const [time, setTime] = useState(0)
  useEffect(() => {
    if (!running) return
    const startedAt = performance.now() - time * 1000
    const id = window.setInterval(() => {
      setTime(((performance.now() - startedAt) / 1000) % LOOP_SECONDS)
    }, 100)
    return () => window.clearInterval(id)
    // Restart the clock only when running changes; keep the current position.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])
  return time
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function LiveTranscriptionDemo() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [stageWidth, setStageWidth] = useState(0)
  const [visible, setVisible] = useState(true)
  const [pageShown, setPageShown] = useState(true)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const resize = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width))
    resize.observe(stage)
    const intersect = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    intersect.observe(stage)
    const onVisibility = () => setPageShown(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      resize.disconnect()
      intersect.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const time = useDemoTime(!reduced && visible && pageShown && stageWidth > 0)
  const frame = frameAt(reduced ? STILL_TIME : time)
  const compact = stageWidth > 0 && stageWidth < COMPACT_BREAKPOINT
  const design = compact ? COMPACT : WIDE
  const scale = stageWidth > 0 ? Math.min(1, (stageWidth - 2 * PAD) / design.width) : 1

  return (
    <div
      ref={stageRef}
      className="demo-stage"
      style={{ height: stageWidth > 0 ? design.height * scale + 2 * PAD : undefined }}
      role="img"
      aria-label="Animation: Voicely starts recording a meeting, and the transcript appears sentence by sentence while people talk, switching between English and Chinese. When the recording stops, the note is finished with its transcript."
    >
      <div
        className={`demo-canvas ${compact ? 'is-compact' : 'is-wide'} ${frame.fadingOut ? 'is-fading' : ''}`}
        style={{ top: PAD, width: design.width, height: design.height, transform: `scale(${scale})` }}
        aria-hidden="true"
      >
        {compact ? <CompactScreen frame={frame} /> : <WideWindow frame={frame} />}
        {!reduced && <Cursor frame={frame} layout={compact ? 'compact' : 'wide'} />}
      </div>
    </div>
  )
}

function Cursor({ frame, layout }: { frame: DemoFrame; layout: 'wide' | 'compact' }) {
  const [x, y] = cursorSpots[layout][frame.cursor]
  if (layout === 'compact') {
    return (
      <div className={`demo-tap ${frame.pressing ? 'is-pressing' : ''}`} style={{ left: x, top: y }} />
    )
  }
  return (
    <div className={`demo-cursor ${frame.pressing ? 'is-pressing' : ''}`} style={{ left: x, top: y }}>
      <svg width="22" height="28" viewBox="0 0 22 28">
        <path d="M2 2v20.5l5.2-5 3.6 8.3 3.7-1.6-3.6-8.1h7.3z" fill="#111" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function WideWindow({ frame }: { frame: DemoFrame }) {
  const hasNote = frame.phase !== 'idle'
  return (
    <div className="demo-window">
      <div className="demo-lights">
        <span />
        <span />
        <span />
      </div>
      <aside className="demo-sidebar">
        <Library frame={frame} />
        <RecordingBar frame={frame} />
      </aside>
      <main className="demo-detail">
        {hasNote ? <NoteDetail frame={frame} /> : <Placeholder />}
      </main>
    </div>
  )
}

function CompactScreen({ frame }: { frame: DemoFrame }) {
  const hasNote = frame.phase !== 'idle'
  return (
    <div className="demo-phone">
      <div className="demo-phone-status">
        <span>10:02</span>
        <span className="demo-phone-island" />
        <span>●●●</span>
      </div>
      {hasNote ? (
        <>
          <div className="demo-phone-nav">
            <BackIcon /> Voicely
          </div>
          <div className="demo-phone-body">
            <NoteDetail frame={frame} compact />
          </div>
        </>
      ) : (
        <div className="demo-phone-library">
          <Library frame={frame} />
        </div>
      )}
      <RecordingBar frame={frame} />
    </div>
  )
}

function Library({ frame }: { frame: DemoFrame }) {
  const hasNote = frame.phase !== 'idle'
  return (
    <>
      <div className="demo-sidebar-head">
        <span className="demo-round-button"><GearIcon /></span>
        <strong>Voicely</strong>
        <span className="demo-pill-button">Edit</span>
        <span className="demo-round-button"><SidebarIcon /></span>
      </div>
      <div className="demo-search"><SearchIcon /> Search recordings</div>
      <div className="demo-folders">
        <FolderChip label="All" kind="all" />
        <FolderChip label="Unfiled" kind="unfiled" />
        <FolderChip label="Work" kind="work" />
        <FolderChip label="Clients" kind="clients" />
        <FolderChip label="New" kind="new" />
        <FolderChip label="New" kind="new" />
      </div>
      <div className={`demo-list ${hasNote ? 'has-new-note' : ''}`}>
        <NewNoteRow frame={frame} />
        {olderNotes.map((note) => (
          <div className="demo-row" key={note.title}>
            <div className="demo-row-head">
              <span className={`demo-dot is-${note.folder}`} />
              <strong>{note.title}</strong>
              <span className="demo-row-length"><WaveIcon size={10} /> {note.length}</span>
            </div>
            <div className="demo-row-when">{note.when}</div>
            <p>{note.preview}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function FolderChip({ label, kind }: { label: string; kind: 'all' | 'unfiled' | 'work' | 'clients' | 'new' }) {
  const icon = kind === 'new' ? <PlusIcon /> : kind === 'all' || kind === 'unfiled' ? <TrayIcon /> : <FolderIcon />
  return (
    <div className={`demo-folder is-${kind}`}>
      <span>{icon}</span>
      <small>{label}</small>
    </div>
  )
}

function liveText(frame: DemoFrame) {
  return sentences.slice(0, frame.visibleSentences).map((sentence) => sentence.text).join(' ')
}

function NewNoteRow({ frame }: { frame: DemoFrame }) {
  const text = liveText(frame)
  const recording = frame.phase === 'recording'
  return (
    <div className="demo-row is-selected is-new">
      <div className="demo-row-head">
        <span className="demo-dot is-unfiled" />
        <strong>{frame.phase === 'done' ? finishedTitle : recordingTitle}</strong>
        {recording ? (
          text ? (
            <span className="demo-badge is-accent"><WaveIcon /> Live transcript</span>
          ) : (
            <span className="demo-badge is-danger"><RecordIcon /> Recording</span>
          )
        ) : frame.phase === 'finishing' ? (
          <span className="demo-badge is-accent"><WaveIcon /> Finalizing</span>
        ) : (
          <span className="demo-row-length"><WaveIcon size={10} /> {frame.elapsed}s</span>
        )}
      </div>
      <div className="demo-row-when">7 Nov 2026 at 10:02</div>
      <p>{text || 'Recording… waiting for the first live transcript.'}</p>
    </div>
  )
}

function Placeholder() {
  return (
    <div className="demo-placeholder">
      <span><WaveIcon size={22} /></span>
      <strong>Select a recording</strong>
      <small>Choose a note or start a new recording.</small>
    </div>
  )
}

function badges(frame: DemoFrame) {
  if (frame.phase === 'recording') {
    const clock = `00:${String(frame.elapsed).padStart(2, '0')}`
    return (
      <>
        <span className="demo-badge is-neutral"><ClockIcon /> {clock}</span>
        {frame.visibleSentences > 0 ? (
          <span className="demo-badge is-accent"><WaveIcon /> Live transcript</span>
        ) : (
          <span className="demo-badge is-danger"><RecordIcon /> Recording</span>
        )}
      </>
    )
  }
  if (frame.phase === 'finishing') {
    return (
      <>
        <span className="demo-badge is-neutral"><ClockIcon /> {frame.elapsed}s</span>
        <span className="demo-badge is-accent"><WaveIcon /> Finalizing</span>
      </>
    )
  }
  return (
    <>
      <span className="demo-badge is-neutral"><ClockIcon /> {frame.elapsed}s</span>
      <span className="demo-badge is-success"><CheckIcon /> Transcript</span>
      <span className="demo-badge is-info"><ChipIcon /> Qwen3 ASR 0.6B</span>
      <span className="demo-badge is-info"><BubbleIcon /> Parakeet</span>
    </>
  )
}

const playerBars = Array.from({ length: 64 }, (_, index) => 0.45 + 0.55 * Math.abs(Math.sin(index * 1.7) * Math.cos(index * 0.37)))

function NoteDetail({ frame, compact = false }: { frame: DemoFrame; compact?: boolean }) {
  const done = frame.phase === 'done'
  return (
    <div className="demo-note">
      <div className="demo-note-head">
        <div>
          <h3>{done ? finishedTitle : recordingTitle}</h3>
          <div className="demo-note-when">7 Nov 2026 at 10:02</div>
        </div>
        {!compact && <span className="demo-edit"><PencilIcon /> Edit</span>}
      </div>
      <div className="demo-badges">{badges(frame)}</div>
      <div className={`demo-player ${done ? 'is-shown' : ''}`}>
        <div className="demo-player-bars">
          {playerBars.slice(0, compact ? 30 : 64).map((height, index) => (
            <span key={index} style={{ height: `${height * 100}%` }} />
          ))}
        </div>
        <div className="demo-player-controls">
          <small>00:00</small>
          <span className="demo-play"><PlayIcon /></span>
          <small>00:{String(frame.elapsed).padStart(2, '0')}</small>
        </div>
      </div>
      <div className="demo-card">
        <div className="demo-card-head">
          <strong>Transcription</strong>
          {done && (
            <span className="demo-card-actions">
              <span><CopyIcon /></span>
              <span><ShareIcon /></span>
              {!compact && <span className="is-wide"><RetryIcon /> Re-transcribe</span>}
            </span>
          )}
        </div>
        <p className="demo-transcript">
          {frame.visibleSentences === 0 ? (
            <span className="demo-waiting">Recording… waiting for the first live transcript.</span>
          ) : (
            sentences.slice(0, frame.visibleSentences).map((sentence, index) => (
              <span key={index} className={index === frame.arrivingSentence ? 'is-arriving' : undefined}>
                {sentence.text}{' '}
              </span>
            ))
          )}
        </p>
      </div>
    </div>
  )
}

function RecordingBar({ frame }: { frame: DemoFrame }) {
  const recording = frame.phase === 'recording'
  return (
    <div className="demo-bar">
      {recording ? (
        <>
          <div className="demo-level">
            <span className="demo-level-dot" />
            <span className="demo-level-wave">
              {Array.from({ length: 18 }, (_, index) => (
                <i key={index} style={{ animationDelay: `${(index * 137) % 900}ms` }} />
              ))}
            </span>
            <b>00:{String(frame.elapsed).padStart(2, '0')}</b>
          </div>
          <span className="demo-circle"><PauseIcon /></span>
          <span className="demo-circle"><TimerIcon /></span>
          <span className="demo-circle is-stop"><StopIcon /></span>
        </>
      ) : (
        <>
          <div className="demo-language">
            <span className="demo-language-dot" />
            <span>
              <small>Language</small>
              Auto Detect
            </span>
            <UpDownIcon />
          </div>
          <span className="demo-circle"><TimerIcon /></span>
          <span className="demo-circle is-record"><MicIcon /></span>
        </>
      )}
    </div>
  )
}

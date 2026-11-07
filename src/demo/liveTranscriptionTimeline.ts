// The live transcription demo as a pure function of time, so the component
// only renders what frameAt returns and the story can be tested.

export const LOOP_SECONDS = 18

/** When the cursor presses record, and when the recording actually starts. */
export const RECORD_PRESS = 1.3
export const RECORD_START = 1.45
/** When the cursor presses stop, and when the app has finished the transcript. */
export const STOP_PRESS = 14.4
export const STOP_START = 14.55
export const FINISHED = 15.4
/** The last moment of the loop fades out before it starts again. */
export const FADE_OUT = 17.3

export const recordingTitle = 'Voice Note 10:02 AM'
/** What VoiceNoteAutoTitle makes of the first sentence once the note is done. */
export const finishedTitle = "Okay, let's get started. The main thing today is"

/**
 * Sentences in the order the app appends them. Each lands a moment after it
 * is spoken, the way slices cut at pauses arrive in the real app.
 */
export const sentences: { at: number; text: string }[] = [
  { at: 3.4, text: "Okay, let's get started. The main thing today is the launch date for the iPad version." },
  { at: 5.6, text: "QA found two crashes on the older iPads, so I'd rather move it to next Thursday." },
  { at: 7.8, text: '我这边没问题。那我把 release checklist 更新一下，下午发到群里。' },
  { at: 10.0, text: "Great. Who's taking the App Store screenshots this time?" },
  { at: 12.1, text: '截图我来做，周二之前给大家看初稿。' },
]

export type Phase = 'idle' | 'recording' | 'finishing' | 'done'
export type CursorSpot = 'rest' | 'record' | 'aside' | 'stop' | 'away'

export type DemoFrame = {
  phase: Phase
  /** Whole seconds shown on the recording timer. */
  elapsed: number
  visibleSentences: number
  /** Index of the sentence that just arrived and is still fading in. */
  arrivingSentence: number | null
  cursor: CursorSpot
  pressing: boolean
  fadingOut: boolean
}

export function frameAt(time: number): DemoFrame {
  // Wrap only outside the loop: modulo turns 3.4 into 3.3999999.
  const t = time >= 0 && time < LOOP_SECONDS ? time : ((time % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS

  let phase: Phase = 'idle'
  if (t >= FINISHED) phase = 'done'
  else if (t >= STOP_START) phase = 'finishing'
  else if (t >= RECORD_START) phase = 'recording'

  const visibleSentences = phase === 'idle' ? 0 : sentences.filter((sentence) => sentence.at <= t).length
  const newest = visibleSentences - 1
  const arrivingSentence = newest >= 0 && t - sentences[newest].at < 0.6 ? newest : null

  const recordedUntil = phase === 'recording' ? t : STOP_START
  const elapsed = phase === 'idle' ? 0 : Math.floor(recordedUntil - RECORD_START)

  let cursor: CursorSpot = 'rest'
  if (t >= STOP_PRESS + 0.6) cursor = 'away'
  else if (t >= STOP_PRESS - 1.3) cursor = 'stop'
  else if (t >= RECORD_PRESS + 0.6) cursor = 'aside'
  else if (t >= 0.2) cursor = 'record'

  const pressing = Math.abs(t - RECORD_PRESS) < 0.15 || Math.abs(t - STOP_PRESS) < 0.15

  return { phase, elapsed, visibleSentences, arrivingSentence, cursor, pressing, fadingOut: t >= FADE_OUT }
}

/** The still frame shown when the reader prefers reduced motion. */
export const STILL_TIME = 12.9

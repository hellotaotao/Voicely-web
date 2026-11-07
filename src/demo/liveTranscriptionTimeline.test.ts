import { describe, expect, it } from 'vitest'
import { FINISHED, LOOP_SECONDS, RECORD_START, STOP_START, frameAt, sentences } from './liveTranscriptionTimeline'

describe('live transcription demo timeline', () => {
  it('starts idle and records until stop', () => {
    expect(frameAt(0).phase).toBe('idle')
    expect(frameAt(RECORD_START + 0.1).phase).toBe('recording')
    expect(frameAt(STOP_START + 0.1).phase).toBe('finishing')
    expect(frameAt(FINISHED + 0.1).phase).toBe('done')
  })

  it('adds sentences in order while recording and keeps them all once done', () => {
    expect(frameAt(sentences[0].at - 0.05).visibleSentences).toBe(0)
    expect(frameAt(sentences[0].at).visibleSentences).toBe(1)
    expect(frameAt(sentences[2].at + 0.1).arrivingSentence).toBe(2)
    expect(frameAt(FINISHED + 0.5).visibleSentences).toBe(sentences.length)
  })

  it('mixes English and Chinese and lands every sentence before the stop', () => {
    expect(sentences.some((sentence) => /[一-鿿]/.test(sentence.text))).toBe(true)
    expect(sentences.some((sentence) => /^[\x20-\x7e]+$/.test(sentence.text))).toBe(true)
    expect(Math.max(...sentences.map((sentence) => sentence.at))).toBeLessThan(STOP_START)
  })

  it('counts the timer in real seconds and freezes it at the stop', () => {
    expect(frameAt(RECORD_START + 5.5).elapsed).toBe(5)
    expect(frameAt(LOOP_SECONDS - 0.1).elapsed).toBe(Math.floor(STOP_START - RECORD_START))
  })

  it('loops', () => {
    expect(frameAt(LOOP_SECONDS + 0.5)).toEqual(frameAt(0.5))
  })
})

import { describe, expect, it } from 'vitest'
import { voicelyMessaging } from './productMessaging'

const messagingText = () => JSON.stringify(voicelyMessaging).toLowerCase()

describe('voicelyMessaging', () => {
  it('presents Voicely as on-device meeting transcription on all three platforms', () => {
    const heroText = `${voicelyMessaging.hero.eyebrow} ${voicelyMessaging.hero.headline} ${voicelyMessaging.hero.subheadline}`.toLowerCase()

    expect(voicelyMessaging.productName).toBe('Voicely')
    expect(voicelyMessaging.platforms).toEqual(['iPhone', 'iPad', 'Mac'])
    expect(heroText).toContain('meeting')
    expect(heroText).toContain('on your device')
    expect(heroText).toContain('never uploaded')
  })

  it('no longer mentions the retired Whisper engine or model downloads', () => {
    const allText = messagingText()

    expect(allText).not.toContain('whisper')
    expect(allText).not.toContain('download a model')
    expect(allText).toContain('nothing to download after install')
  })

  it('states the privacy facts and the limits', () => {
    const privacyText = voicelyMessaging.privacy.map((item) => `${item.title} ${item.description}`).join(' ').toLowerCase()

    expect(privacyText).toContain('no account, no ads, no analytics')
    expect(privacyText).toContain('no developer server')
    expect(privacyText).toContain('no compliance certification')
  })

  it('walks from recording to a summary in an AI assistant', () => {
    expect(voicelyMessaging.workflow.map((step) => step.action)).toEqual([
      'Record',
      'Read along',
      'Stop',
      'Summarize',
    ])
  })

  it('lists the requirements a buyer needs before installing', () => {
    const requirements = voicelyMessaging.requirements.join(' ')

    expect(requirements).toContain('iOS / iPadOS 18')
    expect(requirements).toContain('Apple silicon')
    expect(requirements).toContain('1.4 GB')
  })
})

import { describe, expect, it } from 'vitest'
import { voicelyMessaging } from './productMessaging'

describe('voicelyMessaging', () => {
  it('positions Voicely as a focused iOS voice notes product, not generic AI audio software', () => {
    expect(voicelyMessaging.productName).toBe('Voicely')
    expect(voicelyMessaging.platform).toContain('iOS')
    expect(voicelyMessaging.hero.headline.toLowerCase()).toContain('voice notes')
    expect(voicelyMessaging.hero.subheadline.toLowerCase()).toContain('transcribed')
  })

  it('names painful user problems that justify the app', () => {
    const painText = voicelyMessaging.painPoints.map((pain) => `${pain.title} ${pain.description}`).join(' ').toLowerCase()

    expect(painText).toContain('thoughts')
    expect(painText).toContain('search')
    expect(painText).toContain('long recordings')
    expect(painText).toContain('private')
  })

  it('connects features to real shipped architecture', () => {
    const featureText = voicelyMessaging.features.map((feature) => `${feature.title} ${feature.description}`).join(' ').toLowerCase()

    expect(featureText).toContain('on-device')
    expect(featureText).toContain('whisperkit')
    expect(featureText).toContain('icloud')
    expect(featureText).toContain('progress')
    expect(featureText).toContain('swiftui')
  })

  it('has a clear user workflow from capture to retrieval', () => {
    expect(voicelyMessaging.workflow.map((step) => step.action)).toEqual([
      'Record',
      'Transcribe',
      'Review',
      'Sync',
      'Retrieve',
    ])
  })
})

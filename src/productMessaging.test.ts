import { describe, expect, it } from 'vitest'
import { voicelyMessaging } from './productMessaging'

const messagingText = () => JSON.stringify(voicelyMessaging).toLowerCase()

describe('voicelyMessaging', () => {
  it('positions Voicely as local-first meeting transcription, not generic voice notes', () => {
    const heroText = `${voicelyMessaging.hero.eyebrow} ${voicelyMessaging.hero.headline} ${voicelyMessaging.hero.subheadline}`.toLowerCase()

    expect(voicelyMessaging.productName).toBe('Voicely')
    expect(voicelyMessaging.platform).toContain('iOS')
    expect(heroText).toContain('local-first')
    expect(heroText).toContain('meeting')
    expect(heroText).toContain('transcribes')
    expect(heroText).not.toContain('voice notes')
  })

  it('states that transcription is local or on-device and does not require cloud upload', () => {
    const allText = messagingText()

    expect(allText).toContain('on-device')
    expect(allText).toContain('audio can stay on device')
    expect(allText).toContain('without requiring cloud upload')
    expect(allText).toContain('no cloud transcription api required')
  })

  it('includes compliance-sensitive meeting audiences and use cases', () => {
    const audienceAndUseCaseText = [
      ...voicelyMessaging.audience,
      ...voicelyMessaging.useCases.map((useCase) => `${useCase.title} ${useCase.description}`),
    ].join(' ').toLowerCase()
    const allText = messagingText()

    expect(audienceAndUseCaseText).toContain('government contractors')
    expect(audienceAndUseCaseText).toContain('consulting')
    expect(audienceAndUseCaseText).toContain('professional services')
    expect(audienceAndUseCaseText).toContain('legal')
    expect(audienceAndUseCaseText).toContain('hr')
    expect(audienceAndUseCaseText).toContain('internal operations')
    expect(audienceAndUseCaseText).toContain('enterprise')
    expect(allText).toContain('compliance-sensitive')
  })

  it('does not over-focus the story on quick capture', () => {
    const heroText = `${voicelyMessaging.hero.eyebrow} ${voicelyMessaging.hero.headline} ${voicelyMessaging.hero.subheadline}`.toLowerCase()
    const allText = messagingText()

    expect(heroText).not.toContain('quick')
    expect(allText).not.toContain('ten-second')
    expect(allText).not.toContain('voice memo')
    expect(allText).toContain('30-60 minute')
    expect(allText).toContain('sensitive meetings are not quick memos')
  })

  it('ties WhisperKit and CoreML to user privacy value', () => {
    const whisperFeature = voicelyMessaging.features.find((feature) =>
      `${feature.title} ${feature.description}`.toLowerCase().includes('whisperkit'),
    )
    const whisperText = `${whisperFeature?.title ?? ''} ${whisperFeature?.description ?? ''}`.toLowerCase()

    expect(whisperFeature).toBeDefined()
    expect(whisperText).toContain('coreml')
    expect(whisperText).toContain('privacy outcome')
    expect(whisperText).toContain('without a cloud transcription service')
  })

  it('has a clear meeting workflow from recording to retention and export', () => {
    expect(voicelyMessaging.workflow.map((step) => step.action)).toEqual([
      'Record',
      'Transcribe locally',
      'Review',
      'Keep or delete',
      'Export',
    ])
  })
})

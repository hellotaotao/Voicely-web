export type MessagingCard = {
  title: string
  description: string
}

export type WorkflowStep = {
  action: string
  detail: string
}

export const voicelyMessaging = {
  productName: 'Voicely',
  platform: 'iOS, iPhone, and iCloud',
  hero: {
    eyebrow: 'Private voice notes for people who think out loud',
    headline: 'Voice notes that become searchable text before the idea goes cold.',
    subheadline:
      'Voicely records your thoughts, meetings, drafts, and reminders, then turns them into transcribed notes on your iPhone with WhisperKit and iCloud sync.',
  },
  audience: [
    'Founders and builders capturing product thoughts between tasks.',
    'Consultants and contractors turning field conversations into searchable notes.',
    'Writers, students, and creators who prefer speaking first and organizing later.',
    'Busy parents and professionals who need fast capture without a heavyweight workflow.',
  ],
  painPoints: [
    {
      title: 'Good thoughts disappear quickly',
      description:
        'Typing is too slow when you are walking, driving, cooking, or switching between work and family. Voicely makes speaking the lowest-friction capture path.',
    },
    {
      title: 'Audio alone is hard to search',
      description:
        'A folder of recordings is almost useless when you need one quote, decision, or idea later. Transcripts turn recordings into material you can scan and reuse.',
    },
    {
      title: 'Long recordings should not feel stuck',
      description:
        'Long voice notes and meetings need visible progress, cancellation, and queue handling so users know the app is working instead of frozen.',
    },
    {
      title: 'Private notes should stay private by default',
      description:
        'Voice notes often contain personal thoughts, client context, or family details. On-device transcription reduces the need to send raw audio to a cloud service.',
    },
  ] satisfies MessagingCard[],
  features: [
    {
      title: 'On-device transcription with WhisperKit',
      description:
        'Speech recognition runs through WhisperKit/CoreML models on the device, designed for private, fast, everyday voice capture.',
    },
    {
      title: 'Recording-first SwiftUI experience',
      description:
        'A native SwiftUI interface keeps the primary action obvious: record now, then let the transcript arrive in the same note library.',
    },
    {
      title: 'Progress, cancellation, and pending queues',
      description:
        'Transcription state is visible and controllable, with pending note processing for recordings that need to finish later.',
    },
    {
      title: 'iCloud audio and note sync',
      description:
        'SwiftData and CloudKit keep the voice note library available across Apple devices without turning the product into a web account system.',
    },
    {
      title: 'Model and language settings',
      description:
        'Settings expose model selection, language, and prompt configuration so power users can tune transcription for their workflow.',
    },
    {
      title: 'Built for short thoughts and long sessions',
      description:
        'Fast capture supports quick ten-second ideas, while the architecture is moving toward more robust progressive handling for longer recordings.',
    },
  ] satisfies MessagingCard[],
  workflow: [
    { action: 'Record', detail: 'Tap once and capture the thought while it is still fresh.' },
    { action: 'Transcribe', detail: 'Voicely converts the audio with an on-device WhisperKit model.' },
    { action: 'Review', detail: 'Open the note, replay the audio, and clean up the transcript if needed.' },
    { action: 'Sync', detail: 'Audio and note state can move through iCloud/CloudKit across devices.' },
    { action: 'Retrieve', detail: 'Use the transcript as searchable memory instead of hunting through raw audio.' },
  ] satisfies WorkflowStep[],
  proof: [
    'Native SwiftUI iOS app',
    'WhisperKit/CoreML transcription engine',
    'SwiftData + CloudKit/iCloud sync architecture',
    'Recording, playback, settings, sync status, and transcription services already modeled',
  ],
}

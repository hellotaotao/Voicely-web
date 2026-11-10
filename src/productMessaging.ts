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
  platforms: ['iPhone', 'iPad', 'Mac'],
  /** While null, the page says the app is coming soon instead of linking to the App Store. */
  appStoreUrl: 'https://apps.apple.com/app/id6746871154' as string | null,
  hero: {
    eyebrow: 'Meeting transcription for iPhone, iPad and Mac',
    headline: 'Meeting transcripts, made on your device.',
    subheadline:
      'Voicely transcribes while you record and finishes moments after you stop. The speech models come with the app, so your audio is never uploaded to be transcribed.',
  },
  facts: ['Free', 'No account', 'Transcribes offline', 'Many languages, even mixed'],
  features: [
    {
      title: 'Text while you record',
      description:
        'The transcript builds as the meeting goes. When you stop, Voicely finishes the last few seconds and the note is ready.',
    },
    {
      title: 'Keeps going when you lock the screen',
      description:
        'Lock your iPhone or switch apps and the recording and transcription carry on. Pause or resume from the Lock Screen and Dynamic Island.',
    },
    {
      title: 'Mixed languages',
      description:
        'Auto Detect handles many languages, including meetings that switch between them, for example Chinese with English. For all-English recordings, choose English to transcribe faster.',
    },
    {
      title: 'Stops on time',
      description:
        'Set a length or an end time before or during a recording. You get a reminder before it stops and can extend it with one tap, so a forgotten recording does not run for hours.',
    },
    {
      title: 'Tap a sentence to hear it',
      description:
        'Playback starts from the sentence you tap, and the transcript follows along while it plays.',
    },
    {
      title: 'Folders and search',
      description:
        'Sort notes into up to four folders. Search titles and full transcripts, with every match highlighted in the note.',
    },
    {
      title: 'Import audio files',
      description:
        'Bring in recordings from Files or other apps and transcribe them the same way.',
    },
    {
      title: 'Sync through your iCloud',
      description:
        'Turn on iCloud for Voicely and your notes appear on your other devices, through your own iCloud account.',
    },
  ] satisfies MessagingCard[],
  workflow: [
    { action: 'Record', detail: 'Tap record when the meeting starts, and set it to stop at the end time if you like.' },
    { action: 'Read along', detail: 'The transcript appears while people talk, on the device in your hand.' },
    { action: 'Stop', detail: 'The last few seconds are transcribed and the note is complete.' },
    { action: 'Use it', detail: 'Copy or share the text, or find it later by searching across all your notes.' },
  ] satisfies WorkflowStep[],
  privacy: [
    {
      title: 'Transcribed on the device',
      description:
        'Speech recognition runs on your iPhone, iPad or Mac. It works without an internet connection, and audio is never sent anywhere to be transcribed.',
    },
    {
      title: 'Nothing for us to see',
      description:
        'No account, no ads, no analytics, and no developer server. Recordings and transcripts stay on your devices and, if you turn it on, in your own iCloud account.',
    },
    {
      title: 'Honest limits',
      description:
        'Voicely holds no compliance certification and does not replace your organization’s consent or retention rules. Accuracy depends on the audio: distance, noise and people talking over each other.',
    },
  ] satisfies MessagingCard[],
  underTheHood: [
    'Qwen3-ASR 0.6B for every language, on the GPU on Mac and the Neural Engine on iPhone and iPad',
    'Parakeet TDT 0.6B v2 for long English passages and English-only recordings',
    'Voice activity detection that skips silence and cuts audio at pauses',
    'Both models ship inside the app: nothing to download after install',
  ],
  requirements: [
    'iPhone or iPad with iOS / iPadOS 18 or later',
    'Mac with Apple silicon and macOS 15 or later',
    'About 1.4 GB of storage (1.5 GB on Mac), mostly the speech models',
  ],
}

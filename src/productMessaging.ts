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
  platform: 'iOS, iPhone, WhisperKit/CoreML, and optional iCloud workflows',
  hero: {
    eyebrow: 'Local-first transcription for sensitive meetings',
    headline: 'Private meeting transcripts without sending audio to the cloud.',
    subheadline:
      'Voicely records 30-60 minute conversations and transcribes them on iPhone with WhisperKit/CoreML, so sensitive audio can stay on device and does not require a cloud transcription vendor.',
  },
  audience: [
    'Government contractors and public-sector teams handling restricted conversations.',
    'Consulting and professional services teams documenting client meetings without forwarding audio to another vendor.',
    'Legal, HR, and internal operations teams capturing interviews, investigations, and policy discussions.',
    'Enterprise teams with sensitive strategy, finance, product, or customer meetings.',
    'Privacy-conscious professionals who need transcripts without making every recording a cloud artifact.',
  ],
  painPoints: [
    {
      title: 'Cloud transcription creates compliance friction',
      description:
        'Cloud transcription is convenient, but many business, government, consulting, legal, HR, and internal meetings cannot send raw audio to a third-party transcription API.',
    },
    {
      title: 'Sensitive meetings are not quick memos',
      description:
        'The valuable sessions are often 30-60 minute client calls, interviews, strategy reviews, and compliance-sensitive discussions where privacy matters more than instant capture.',
    },
    {
      title: 'Recordings need retention choices',
      description:
        'Some workflows need a transcript-only record, local review before export, or deleting audio after transcription. Voicely is shaped around user-controlled storage decisions instead of a mandatory cloud upload path.',
    },
    {
      title: 'Searchable records still matter after the meeting',
      description:
        'Teams still need action items, quotes, decisions, and searchable history. Local transcription turns meeting audio into usable text while reducing exposure of the original recording.',
    },
  ] satisfies MessagingCard[],
  features: [
    {
      title: 'Local WhisperKit/CoreML transcription',
      description:
        'WhisperKit runs Whisper models through CoreML on iPhone, tying the model choice to a practical privacy outcome: transcription can happen locally without a cloud transcription service.',
    },
    {
      title: 'Audio does not need to leave the device',
      description:
        'The core transcript path is on-device. iCloud can be treated as an Apple continuity option, not a dependency for creating text from a sensitive meeting.',
    },
    {
      title: 'Privacy by architecture',
      description:
        'Voicely is not positioned as an online API wrapper. The product boundary starts with record, process, and review on the device before a user chooses any export or sync workflow.',
    },
    {
      title: 'Built for meeting-length sessions',
      description:
        'Longer recordings need visible progress, cancellation, and pending queues so a 30-60 minute meeting feels controlled instead of stuck.',
    },
    {
      title: 'User-controlled retention model',
      description:
        'The workflow is oriented around deciding what to keep: transcript-only notes, retained local audio, deleting recordings after review, or exporting text where policy allows.',
    },
    {
      title: 'Native iOS controls for serious work',
      description:
        'A SwiftUI app with recording, playback, model settings, language settings, sync status, and transcription state gives sensitive workflows clear operational controls.',
    },
  ] satisfies MessagingCard[],
  useCases: [
    {
      title: 'Government and regulated programs',
      description:
        'Capture meetings where procurement, program, policy, or citizen data makes third-party audio processing difficult to approve.',
    },
    {
      title: 'Consulting and professional services',
      description:
        'Turn client workshops and discovery calls into searchable transcripts without automatically sending client audio to an external transcription vendor.',
    },
    {
      title: 'Legal, HR, and internal operations',
      description:
        'Document interviews, investigations, employee relations, and policy discussions with a local-first transcription path.',
    },
    {
      title: 'Enterprise strategy meetings',
      description:
        'Review finance, product, customer, and leadership conversations as text while keeping the raw recording under tighter user control.',
    },
  ] satisfies MessagingCard[],
  workflow: [
    { action: 'Record', detail: 'Capture the meeting on iPhone when policy allows a local recording.' },
    { action: 'Transcribe locally', detail: 'Voicely converts the audio with WhisperKit/CoreML without requiring cloud upload.' },
    { action: 'Review', detail: 'Scan the transcript, replay locally when needed, and clean up names, decisions, or action items.' },
    { action: 'Keep or delete', detail: 'Choose whether to retain the audio, move toward transcript-only storage, or delete the recording after review.' },
    { action: 'Export', detail: 'Share the transcript into the approved client, case, HR, or internal documentation system.' },
  ] satisfies WorkflowStep[],
  trust: [
    {
      title: 'Local by default for transcription',
      description:
        'The privacy promise comes from architecture: the transcript can be produced on the device instead of by sending meeting audio to an online transcription API.',
    },
    {
      title: 'Cloud is a choice, not the transcription engine',
      description:
        'Sync and export should stay under user control. The fundamental value is that sensitive audio does not need cloud processing to become text.',
    },
    {
      title: 'Retention can match policy',
      description:
        'Voicely is being shaped for workflows where teams may keep only the transcript, retain audio locally, or delete recordings after transcription when policy requires it.',
    },
  ] satisfies MessagingCard[],
  proof: [
    'Native SwiftUI iOS app',
    'Local WhisperKit/CoreML transcription engine',
    'No cloud transcription API required to produce text',
    'SwiftData + CloudKit/iCloud architecture for optional Apple continuity workflows',
    'Recording, playback, settings, sync status, progress, cancellation, queues, and transcription services already modeled',
    'Product direction accounts for transcript-only and delete-audio-after-review retention workflows',
  ],
}

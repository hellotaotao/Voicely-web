// Small stroke icons modeled on the SF Symbols the app uses.

type IconProps = { size?: number; className?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const GearIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
)

export const SidebarIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M9 4v16M5.5 8h1.5M5.5 11h1.5" />
  </svg>
)

export const SearchIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
)

export const TrayIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 13h4l1.5 2.5h5L16 13h4" />
    <path d="M5.5 6h13L21 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z" />
  </svg>
)

export const FolderIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor" stroke="none">
    <path d="M3 7a2 2 0 0 1 2-2h4.2l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
)

export const PlusIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MicIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </svg>
)

export const StopIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className} stroke="none" fill="currentColor">
    <rect x="6" y="6" width="12" height="12" rx="2.5" />
  </svg>
)

export const PauseIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className} stroke="none" fill="currentColor">
    <rect x="6.5" y="5" width="4" height="14" rx="1.3" />
    <rect x="13.5" y="5" width="4" height="14" rx="1.3" />
  </svg>
)

export const PlayIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className} stroke="none" fill="currentColor">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z" />
  </svg>
)

export const TimerIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 13V9.5M12 3v2M10 3h4" />
  </svg>
)

export const ClockIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.4}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const CheckIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.8}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)

export const ChipIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.4}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3" />
  </svg>
)

export const BubbleIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.4}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M9.5 13 12 8l2.5 5M10.3 11.5h3.4" />
  </svg>
)

export const WaveIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.6}>
    <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
  </svg>
)

export const RecordIcon = ({ size = 11, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.4}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
  </svg>
)

export const CopyIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
)

export const ShareIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3v12M8 7l4-4 4 4" />
    <path d="M6 11v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8" />
  </svg>
)

export const RetryIcon = ({ size = 13, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M20 12a8 8 0 1 1-2.3-5.7" />
    <path d="M20 4v5h-5" />
  </svg>
)

export const UpDownIcon = ({ size = 12, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="m8 9 4-4 4 4M8 15l4 4 4-4" />
  </svg>
)

export const PencilIcon = ({ size = 12, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 20h4L19 9l-4-4L4 16z" />
  </svg>
)

export const BackIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={2.4}>
    <path d="m15 5-7 7 7 7" />
  </svg>
)

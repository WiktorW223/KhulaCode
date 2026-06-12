// A gentle wave divider placed BETWEEN two sections.
// `top` = colour of the section above (the divider's background),
// `bottom` = colour of the section below (the wave fill).
export default function SectionWave({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div aria-hidden="true" style={{ background: top, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '48px' }}>
        <path fill={bottom} d="M0,28 C240,60 480,4 720,20 C960,36 1200,60 1440,24 L1440,60 L0,60 Z" />
      </svg>
    </div>
  )
}

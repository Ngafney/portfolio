import { useEffect, useState } from 'react'
import { Placeholder } from './ImageBlock.jsx'

/**
 * Page section with a colour theme (white / light / black / dark / bright), a
 * height preset (small / medium / custom / none) and an optional full-bleed
 * background image with dark overlay - the Squarespace "page-section" pattern.
 */
export default function Section({
  theme = 'white',
  height = 'small',
  bg,
  bgFocal,
  overlay = 0.3,
  heroOverlay = false,
  className = '',
  id,
  children,
}) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [bg])

  const cls = [
    'section',
    `theme-${theme}`,
    height !== 'none' ? `section--${height}` : '',
    heroOverlay ? 'section--hero-overlay' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={cls} style={{ '--overlay': overlay }}>
      {bg && (
        <div className="section__bg" aria-hidden="true">
          {!failed ? (
            <img src={bg} alt="" style={bgFocal ? { objectPosition: bgFocal } : undefined} onError={() => setFailed(true)} />
          ) : (
            <Placeholder src={bg} />
          )}
          <div className="section__overlay" />
        </div>
      )}
      <div className="section__content">{children}</div>
    </section>
  )
}

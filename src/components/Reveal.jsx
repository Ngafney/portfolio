import { useEffect, useRef, useState } from 'react'

/**
 * Fade + clip scroll-reveal, mirroring the reference site's global animations
 * (tweak-global-animations-animation-style-fade / animation-type-clip).
 *
 * The outer element is what gets observed and laid out; the clip/opacity is
 * applied to an inner wrapper. (Chrome's IntersectionObserver honours the
 * target's own clip-path, so clipping the observed element to zero height
 * would mean it never intersects.)
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    // Anything already on screen reveals immediately (no blank first paint).
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} {...rest}>
      <div className={`reveal${inView ? ' reveal--in' : ''}`}>{children}</div>
    </Tag>
  )
}

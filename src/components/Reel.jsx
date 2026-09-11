import { useEffect, useState } from 'react'
import { Placeholder } from './ImageBlock.jsx'

function ReelItem({ src, w }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])
  return (
    <div className="reel__item" style={w ? { '--w': w } : undefined}>
      {!failed ? <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} /> : <Placeholder src={src} />}
    </div>
  )
}

/**
 * Auto-scrolling photo strip (the reference site's "gallery reel" with a
 * custom CSS marquee animation). Images are duplicated for a seamless loop.
 */
export default function Reel({ images = [] }) {
  if (!images.length) return null
  const list = [...images, ...images]
  const duration = `${Math.max(24, images.length * 7)}s`
  return (
    <div className="reel" style={{ '--reel-duration': duration }}>
      <div className="reel__track">
        {list.map((img, i) => {
          const src = typeof img === 'string' ? img : img.src
          const w = typeof img === 'string' ? undefined : img.w
          return <ReelItem key={`${i}-${src}`} src={src} w={w} />
        })}
      </div>
    </div>
  )
}

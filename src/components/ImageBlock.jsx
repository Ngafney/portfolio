import { useEffect, useState } from 'react'
import { ImageIcon } from './Icons.jsx'

/** Shown wherever a photo has not been added to /public/images yet. */
export function Placeholder({ src }) {
  const name = src ? src.replace(/^\/images\//, '') : 'image'
  return (
    <div className="image-placeholder" aria-hidden="true">
      <ImageIcon />
      <span>Add photo</span>
      <code>{name}</code>
    </div>
  )
}

/**
 * Image that fills its grid area (object-fit: cover) or fits inside it (fit=true).
 * `ratio` (e.g. "3/2") gives the block an intrinsic height so grid rows expand around it.
 * `natural` keeps the block at that ratio instead of stretching to the grid area's height.
 */
export default function ImageBlock({
  src,
  alt = '',
  fit = false,
  ratio,
  focal,
  rounded = false,
  natural = false,
  priority = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])

  const style = {}
  if (ratio) style['--ratio'] = ratio
  if (focal) style['--focal'] = focal
  const cls = [
    'image-block',
    fit ? 'image-block--fit' : '',
    rounded ? 'image-block--rounded' : '',
    natural ? 'image-block--natural' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} style={style}>
      {src && !failed ? (
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
      ) : (
        <Placeholder src={src} />
      )}
    </div>
  )
}

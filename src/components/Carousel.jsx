import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from './Icons.jsx'

function getCols(max) {
  if (typeof window === 'undefined') return max
  const w = window.innerWidth
  if (w < 768) return 1
  if (w < 1024) return Math.min(2, max)
  return max
}

const DRAG_THRESHOLD = 6 // px of movement before a press counts as a drag (and not a click)

/**
 * Replica of the Squarespace list-section carousel:
 * N columns, infinite looping, 60px arrow buttons overlaid on the slide edges
 * (vertically centred on the 3:2 media). Slides can be dragged with a mouse,
 * pen or finger; on release the track snaps to the nearest slide, with a flick
 * carrying it further. When there are no more items than columns it renders as
 * a static row.
 */
export default function Carousel({ items, columns = 3, adjacent = false, gap = 20, renderItem, ariaLabel = 'Carousel' }) {
  const n = items.length
  const [cols, setCols] = useState(() => getCols(columns))
  const [width, setWidth] = useState(0)
  const [pos, setPos] = useState(n) // index into the tripled list
  const [animated, setAnimated] = useState(true)
  const [dragX, setDragX] = useState(0) // live offset while dragging, in px
  const [dragging, setDragging] = useState(false)
  const windowRef = useRef(null)
  const drag = useRef(null) // { id, startX, lastX, lastT, velocity, moved }
  const suppressClick = useRef(false) // true between the end of a drag and the click the browser fires after it

  useEffect(() => {
    const onResize = () => setCols(getCols(columns))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [columns])

  useLayoutEffect(() => {
    const el = windowRef.current
    if (!el) return undefined
    const measure = () => setWidth(el.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // After a silent jump (no transition) re-enable the animation on the next frame.
  useEffect(() => {
    if (animated) return undefined
    let id2 = 0
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setAnimated(true))
    })
    return () => {
      cancelAnimationFrame(id1)
      cancelAnimationFrame(id2)
    }
  }, [animated])

  const isStatic = n <= cols
  const slideWidth = (width - gap * (cols - 1)) / cols
  const step = slideWidth + gap
  const mediaHeight = (slideWidth * 2) / 3
  const list = isStatic ? items : [...items, ...items, ...items]

  // Keep the index inside the middle copy of the tripled list so there is
  // always a full screen of slides on either side.
  const normalize = (p) => {
    if (p >= 2 * n) return p - n
    if (p < n) return p + n
    return p
  }

  const go = (dir) => {
    setAnimated(true)
    setPos((p) => p + dir)
  }

  const onTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
    const next = normalize(pos)
    if (next !== pos) {
      setAnimated(false)
      setPos(next)
    }
  }

  // ---- drag (pointer events cover mouse, pen and touch) ----
  const onPointerDown = (e) => {
    if (isStatic || (e.pointerType === 'mouse' && e.button !== 0)) return
    suppressClick.current = false
    drag.current = { id: e.pointerId, startX: e.clientX, lastX: e.clientX, lastT: e.timeStamp, velocity: 0, moved: false }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d || e.pointerId !== d.id) return
    const dx = e.clientX - d.startX
    if (!d.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return
      d.moved = true
      setDragging(true)
      setAnimated(false)
      // take the pointer so the drag keeps working outside the carousel and links do not fire
      e.currentTarget.setPointerCapture?.(e.pointerId)
    }
    const dt = e.timeStamp - d.lastT
    if (dt > 0) d.velocity = (e.clientX - d.lastX) / dt // px per ms
    d.lastX = e.clientX
    d.lastT = e.timeStamp
    setDragX(dx)
  }

  const endDrag = (e) => {
    const d = drag.current
    if (!d || e.pointerId !== d.id) return
    drag.current = null
    if (!d.moved) return
    suppressClick.current = true
    e.currentTarget.releasePointerCapture?.(e.pointerId)

    const dx = e.clientX - d.startX
    // slides moved: distance plus a little momentum from a flick
    let slides = Math.round(-(dx + d.velocity * 120) / step)
    if (slides === 0 && Math.abs(dx) > step * 0.2) slides = dx < 0 ? 1 : -1
    slides = Math.max(-n, Math.min(n, slides))

    setDragging(false)
    setDragX(0)
    setAnimated(true)
    setPos((p) => p + slides)
  }

  // A drag that ends on a link/button must not count as a click on it.
  const onClickCapture = (e) => {
    if (suppressClick.current) {
      suppressClick.current = false
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const translate = isStatic ? 0 : -pos * step + dragX

  return (
    <div
      className={`carousel${adjacent ? ' carousel--adjacent' : ''}`}
      style={{ '--arrow-top': `${mediaHeight / 2}px` }}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="carousel__viewport">
        <div
          className={`carousel__window${isStatic ? '' : ' carousel__window--draggable'}${dragging ? ' carousel__window--dragging' : ''}`}
          ref={windowRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          <div
            className={`carousel__track${animated && !dragging ? ' carousel__track--animated' : ''}`}
            style={{
              '--cols': cols,
              '--gap': `${gap}px`,
              transform: isStatic ? 'none' : `translateX(${translate}px)`,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {list.map((item, i) => (
              <div className="carousel__slide" key={`${i}-${item.slug || item.title || i}`}>
                {renderItem(item, i % n)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isStatic && (
        <>
          <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={() => go(-1)} aria-label="Previous slide">
            <ArrowLeft />
          </button>
          <button type="button" className="carousel__arrow carousel__arrow--next" onClick={() => go(1)} aria-label="Next slide">
            <ArrowRight />
          </button>
        </>
      )}
    </div>
  )
}

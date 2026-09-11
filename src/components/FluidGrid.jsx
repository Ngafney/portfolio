import Reveal from './Reveal.jsx'

/**
 * Replica of Squarespace's "fluid engine" layout grid.
 *   Desktop (>= 768px): 24 columns + 2 gutter columns, rows of minmax(24px, auto), 11px gaps.
 *   Mobile:              8 columns + 2 gutter columns.
 * Blocks are positioned with grid-area strings "rowStart/colStart/rowEnd/colEnd"
 * via the `d` (desktop) and `m` (mobile) props, exactly like the reference markup.
 */
export function Fe({ rowsD = 10, rowsM = 10, className = '', style, children }) {
  return (
    <div className={`fe${className ? ` ${className}` : ''}`} style={{ '--rows-d': rowsD, '--rows-m': rowsM, ...style }}>
      {children}
    </div>
  )
}

export function FeBlock({ d, m, z, zm, vAlign, hCenter = false, reveal = true, className = '', style, children }) {
  const cls = [
    'fe-block',
    vAlign === 'center' ? 'fe-block--v-center' : '',
    vAlign === 'end' ? 'fe-block--v-end' : '',
    hCenter ? 'fe-block--h-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const st = { '--d': d, '--m': m, ...style }
  if (z != null) st['--z'] = z
  if (zm != null) st['--zm'] = zm

  if (reveal) {
    return (
      <Reveal className={cls} style={st}>
        {children}
      </Reveal>
    )
  }
  return (
    <div className={cls} style={st}>
      {children}
    </div>
  )
}

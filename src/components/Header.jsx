import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'
import { SocialIcon } from './Icons.jsx'

/**
 * Fixed header replicating the reference layout:
 * nav on the left, site title centred, social icons on the right.
 * Transparent over photo heroes (project pages), solid white otherwise / once scrolled.
 * On mobile: title left, burger right, full-screen "light" overlay menu.
 */
export default function Header({ overlay = false }) {
  const ref = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Publish the measured header height as a CSS variable (used for page offset / hero padding).
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const set = () => document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`)
    set()
    const ro = new ResizeObserver(set)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = !overlay || scrolled || open
  const classes = ['header', solid ? 'header--solid' : '', scrolled ? 'header--scrolled' : '', open ? 'header--open' : '']
    .filter(Boolean)
    .join(' ')
  const navClass = ({ isActive }) => (isActive ? 'active' : undefined)
  const close = () => setOpen(false)

  const socialLinks = site.social.map((s) => (
    <a
      key={s.type}
      href={s.href}
      aria-label={s.label}
      {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <SocialIcon type={s.type} />
    </a>
  ))

  return (
    <>
      <header ref={ref} className={classes} style={solid ? undefined : { color: 'var(--white)' }}>
        <div className="header__bar">
          <div className="header__inner">
            <nav className="header__nav" aria-label="Primary">
              {site.nav.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.to === '/'} className={navClass}>
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div className="header__title">
              <Link to="/">{site.title}</Link>
            </div>
            <div className="header__actions">
              <div className="header__social">{socialLinks}</div>
              <button
                type="button"
                className="header__burger"
                aria-label={open ? 'Close Menu' : 'Open Menu'}
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
              >
                <span className="burger">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`menu${open ? ' menu--open' : ''}`} aria-hidden={!open}>
        <nav className="menu__nav" aria-label="Mobile">
          {site.nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={navClass} onClick={close}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="menu__social">{socialLinks}</div>
      </div>
    </>
  )
}

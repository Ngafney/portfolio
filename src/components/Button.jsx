import { Link } from 'react-router-dom'

/** Primary button: solid, petal-shaped, uppercase (matches the reference theme). */
export default function Button({ to, href, children, className = '', stretch = false, small = false, ...rest }) {
  const cls = ['btn', small ? 'btn--small' : '', stretch ? 'btn--stretch' : '', className].filter(Boolean).join(' ')
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}

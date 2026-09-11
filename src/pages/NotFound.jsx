import { useEffect } from 'react'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import { site } from '../data/site.js'

export default function NotFound() {
  useEffect(() => {
    document.title = `Not Found — ${site.title}`
  }, [])
  return (
    <Section theme="white" height="medium">
      <div className="notfound">
        <h1>Page not found.</h1>
        <p className="text-large">The page you are looking for does not exist.</p>
        <p>
          <Button to="/">Back Home</Button>
        </p>
      </div>
    </Section>
  )
}

import { useEffect } from 'react'
import Section from '../components/Section.jsx'
import { Fe, FeBlock } from '../components/FluidGrid.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import Button from '../components/Button.jsx'
import { site } from '../data/site.js'
import { resume } from '../data/resume.js'

function Entry({ org, role, location, date, bullets }) {
  return (
    <div className="resume__item">
      <div className="resume__row">
        <span>
          {org && <span className="resume__org">{org}</span>}
          {org && role ? ', ' : ''}
          {role && <span className="resume__role">{role}</span>}
          {location ? `, ${location}` : ''}
        </span>
        {date && <span className="resume__date">{date}</span>}
      </div>
      {bullets && (
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ResumeCard() {
  return (
    <div className="resume">
      <div className="resume__head">
        <h2>{resume.name}</h2>
        <div className="resume__contact">
          {resume.contact.map((c, i) => (
            <span key={i}>
              {i > 0 && <span aria-hidden="true">| </span>}
              {c.href ? (
                <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  {c.label}
                </a>
              ) : (
                c.label
              )}
            </span>
          ))}
        </div>
        <div className="resume__actions">
          <Button href={site.resumePdf} small target="_blank" rel="noreferrer">
            Download PDF
          </Button>
        </div>
      </div>

      <div className="resume__section">
        <h3>Education</h3>
        {resume.education.map((e, i) => (
          <div className="resume__item" key={i}>
            <div className="resume__row">
              <span className="resume__org">{e.org}</span>
              <span className="resume__date">{e.date}</span>
            </div>
            {e.lines.map((l, j) => (
              <p className="resume__line" key={j}>
                <strong>{l.label}:</strong> {l.text}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="resume__section">
        <h3>Relevant Experience</h3>
        {resume.experience.map((e, i) =>
          e.sub ? (
            <div className="resume__item" key={i}>
              <div className="resume__row">
                <span className="resume__org">{e.org}</span>
              </div>
              {e.sub.map((s, j) => (
                <Entry key={j} {...s} />
              ))}
            </div>
          ) : (
            <Entry key={i} {...e} />
          ),
        )}
      </div>

      <div className="resume__section">
        <h3>Leadership Experience</h3>
        {resume.leadership.map((e, i) => (
          <Entry key={i} {...e} />
        ))}
      </div>

      <div className="resume__section">
        <h3>Skills &amp; Interests</h3>
        {resume.skills.map((s, i) => (
          <p className="resume__line" key={i}>
            <strong>{s.label}:</strong> {s.text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function Resume() {
  useEffect(() => {
    document.title = `Resume — ${site.title}`
  }, [])

  const [p1, p2, p3, p4] = site.resumePage.photos

  return (
    <Section theme="white" height="medium">
      <Fe rowsD={31} rowsM={44}>
        <FeBlock d="1/11/3/17" m="1/2/3/10" z={7} hCenter>
          <h1>Resume</h1>
        </FeBlock>
        <FeBlock d="4/5/6/23" m="3/2/8/10" z={2} hCenter>
          <p className="text-large">{site.resumePage.intro}</p>
        </FeBlock>
        <FeBlock d="6/2/31/16" m="8/2/20/10" z={1}>
          <ResumeCard />
        </FeBlock>
        <FeBlock d="6/16/14/26" m="20/2/26/10" z={3}>
          <ImageBlock src={p1.src} ratio={p1.ratio} />
        </FeBlock>
        <FeBlock d="14/16/24/21" m="26/2/32/10" z={5}>
          <ImageBlock src={p2.src} ratio={p2.ratio} />
        </FeBlock>
        <FeBlock d="14/21/24/26" m="32/2/38/10" z={6}>
          <ImageBlock src={p3.src} ratio={p3.ratio} />
        </FeBlock>
        <FeBlock d="24/16/31/26" m="38/2/44/10" z={4}>
          <ImageBlock src={p4.src} ratio={p4.ratio} />
        </FeBlock>
      </Fe>
    </Section>
  )
}

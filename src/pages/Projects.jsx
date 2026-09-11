import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import { Fe, FeBlock } from '../components/FluidGrid.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { site } from '../data/site.js'
import { projectBySlug } from '../data/projects.js'

/**
 * Staggered collage of project photos with overlapping title labels -
 * the same grid positions as the reference "Projects." page (5 slots).
 * slot = { slug, img: {d, m}, label: {d, m} }
 */
const slots = [
  { slug: 'crosspaths', ratio: '22/25', img: { d: '4/5/18/14', m: '3/2/11/10' }, label: { d: '4/3/7/10', m: '9/3/12/10' } },
  { slug: 'nd-trading-competition', ratio: '1/1', img: { d: '3/15/17/25', m: '13/2/21/10' }, label: { d: '14/15/18/22', m: '19/3/22/10' } },
  { slug: 'garda-capital-partners', ratio: '9/10', img: { d: '18/15/30/24', m: '23/2/31/10' }, label: { d: '28/13/31/21', m: '29/3/32/10' } },
  { slug: 'pathaware', ratio: '4/5', img: { d: '19/3/33/11', m: '33/2/41/10' }, label: { d: '31/5/34/12', m: '39/3/42/10' } },
  { slug: 'dunne-hall-ra', ratio: '9/10', img: { d: '31/15/44/24', m: '43/2/51/10' }, label: { d: '42/14/45/21', m: '49/3/52/10' } },
]

export default function Projects() {
  useEffect(() => {
    document.title = `Projects — ${site.title}`
  }, [])

  return (
    <Section theme="white" height="medium">
      <Fe rowsD={45} rowsM={52}>
        <FeBlock d="1/2/3/26" m="1/2/3/10" z={0}>
          <h2>Projects</h2>
        </FeBlock>

        {slots.map(({ slug, ratio, img, label }, i) => {
          const p = projectBySlug(slug)
          if (!p) return null
          return [
            <FeBlock key={`${slug}-img`} d={img.d} m={img.m} z={i * 2 + 1}>
              <Link to={`/${p.slug}`} aria-label={p.title} className="image-link">
                <ImageBlock src={p.cover} alt={p.title} ratio={ratio} focal={p.coverFocal} />
              </Link>
            </FeBlock>,
            <FeBlock key={`${slug}-label`} d={label.d} m={label.m} z={i * 2 + 2}>
              <div className="text-box">
                <h3>
                  <Link to={`/${p.slug}`} className="plain-link">
                    {p.title}
                  </Link>
                </h3>
              </div>
            </FeBlock>,
          ]
        })}
      </Fe>
    </Section>
  )
}

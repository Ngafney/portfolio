import { useEffect } from 'react'
import Section from '../components/Section.jsx'
import { Fe, FeBlock } from '../components/FluidGrid.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import Button from '../components/Button.jsx'
import Carousel from '../components/Carousel.jsx'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'

export default function Home() {
  useEffect(() => {
    document.title = site.title
  }, [])

  const { hero, images } = site

  return (
    <>
      {/* Hero: same fluid-grid placement as the reference homepage.
          Only the portrait carries an aspect ratio (it sets the row height);
          the decorative images just fit whatever area the grid gives them. */}
      <Section theme="white" height="small">
        <Fe rowsD={18} rowsM={31}>
          <FeBlock d="2/3/16/13" m="1/2/10/10" z={2}>
            <ImageBlock src={images.profile} alt="Nathan Gafney" ratio="1/1" rounded priority />
          </FeBlock>
          <FeBlock d="1/20/7/26" m="9/7/13/11" z={3}>
            <ImageBlock src={images.deco1} fit />
          </FeBlock>
          <FeBlock d="4/15/9/25" m="13/2/16/10" z={5} vAlign="center" hCenter>
            <h2>{hero.heading}</h2>
          </FeBlock>
          <FeBlock d="9/15/11/25" m="16/2/19/10" z={6} hCenter>
            <p>{hero.intro}</p>
          </FeBlock>
          <FeBlock d="10/13/16/18" m="27/2/31/6" z={1}>
            <ImageBlock src={images.deco2} fit />
          </FeBlock>
          <FeBlock d="11/15/13/25" m="19/2/21/10" z={7} hCenter>
            <p>{hero.scroll}</p>
          </FeBlock>
          <FeBlock d="13/18/14/22" m="21/4/23/8" z={8}>
            <Button href={site.linkedin} target="_blank" rel="noreferrer" stretch>
              LinkedIn
            </Button>
          </FeBlock>
          <FeBlock d="14/18/15/22" m="23/4/25/8" z={9}>
            <Button to="/projects" stretch>
              Projects
            </Button>
          </FeBlock>
          <FeBlock d="15/18/16/22" m="25/4/27/8" z={10}>
            <Button to="/resume" stretch>
              Resume
            </Button>
          </FeBlock>
          <FeBlock d="11/22/18/26" m="27/6/31/10" z={4}>
            <ImageBlock src={images.deco3} fit />
          </FeBlock>
        </Fe>
      </Section>

      {/* Projects carousel: 3 columns, 3:2 media, "Learn More" buttons, overlaid arrows */}
      <Section theme="white" height="none" className="carousel-section">
        <Carousel
          items={projects}
          columns={3}
          adjacent
          gap={40}
          ariaLabel="Projects"
          renderItem={(p) => (
            <>
              <div className="carousel__media">
                <ImageBlock src={p.cover} alt={p.title} focal={p.coverFocal} />
              </div>
              <h2 className="carousel__title">{p.title}</h2>
              <div className="carousel__actions">
                <Button to={`/${p.slug}`}>Learn More</Button>
              </div>
            </>
          )}
        />
      </Section>
    </>
  )
}

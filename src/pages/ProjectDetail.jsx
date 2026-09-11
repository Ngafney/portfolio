import { useEffect } from 'react'
import Section from '../components/Section.jsx'
import { Fe, FeBlock } from '../components/FluidGrid.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import Carousel from '../components/Carousel.jsx'
import Reel from '../components/Reel.jsx'
import { site } from '../data/site.js'

/**
 * Project page. Every project opens with a full-bleed photo hero (black theme)
 * carrying the title and a "stat | stat | stat" line. Below that, one of two layouts:
 *
 *  overview  - one photo on the left, heading + paragraphs on the right
 *  full      - three trait cards (image, "Trait", paragraph), an auto-scrolling
 *              photo reel, and a closing story (heading + long paragraph)
 */
export default function ProjectDetail({ project }) {
  useEffect(() => {
    document.title = `${project.title} — ${site.title}`
  }, [project])

  return (
    <>
      <Section theme="black" height="medium" bg={project.hero} bgFocal={project.heroFocal} overlay={0.55} heroOverlay>
        <Fe rowsD={4} rowsM={5}>
          <FeBlock d="1/2/3/20" m="1/2/3/10" z={1} vAlign="end">
            <h1>{project.title}</h1>
          </FeBlock>
          <FeBlock d="3/2/4/20" m="3/2/5/10" z={1}>
            <p>{project.subtitle}</p>
          </FeBlock>
        </Fe>
      </Section>

      {project.overview ? (
        <Section theme="white" height="medium" className="overview">
          <Fe rowsD={8} rowsM={12}>
            <FeBlock d="1/2/9/12" m="1/2/7/10" z={1} vAlign="center">
              <ImageBlock
                src={project.overview.image}
                alt={project.overview.alt || project.title}
                ratio={project.overview.ratio}
                focal={project.overview.focal}
                natural
              />
            </FeBlock>
            <FeBlock d="1/13/9/26" m="7/2/13/10" z={2} vAlign="center">
              <h2>{project.overview.title}</h2>
              {project.overview.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </FeBlock>
          </Fe>
        </Section>
      ) : (
        <>
          <Section theme="white" height="none" className="carousel-section">
            <Carousel
              items={project.cards}
              columns={3}
              ariaLabel={`${project.title} highlights`}
              renderItem={(card) => (
                <>
                  <div className="carousel__media">
                    <ImageBlock src={card.image} alt={card.title} />
                  </div>
                  <h2 className="carousel__title">{card.title}</h2>
                  <p className="carousel__body">{card.body}</p>
                </>
              )}
            />
          </Section>

          {project.reel?.length > 0 && (
            <Section theme="white" height="none" className="reel-section">
              <Reel images={project.reel} />
            </Section>
          )}

          {project.closing && (
            <Section theme="white" height="custom">
              <Fe rowsD={8} rowsM={4}>
                <FeBlock d="1/2/3/8" m="1/2/3/10" z={1}>
                  <h2>{project.closing.title}</h2>
                </FeBlock>
                <FeBlock d="3/2/9/26" m="3/2/5/10" z={1}>
                  <p>{project.closing.body}</p>
                </FeBlock>
              </Fe>
            </Section>
          )}
        </>
      )}
    </>
  )
}

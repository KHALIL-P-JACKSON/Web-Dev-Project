import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import Monogram from './Monogram';
import Reveal from './Reveal';
import { portrait } from '../data/portfolio';

function HeroSection() {
  return (
    <section id="Home" aria-labelledby="hero-heading" className="hero-section">
      <Container size="4" px="4">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Software developer · Atlanta, GA
            </p>
            <p className="hero-greeting">Hey, I’m</p>
            <h1 id="hero-heading">
              Khalil
              <br />
              <span>Jackson.</span>
            </h1>
            <p className="hero-tagline">
              Thoughtful code.
              <br />
              <em>Real-world impact.</em>
            </p>
            <p className="hero-description">
              I’m an IT student at Kennesaw State and a Software Developer Co-op
              at Chick-fil-A. I turn ideas into intuitive experiences for the
              web and beyond.
            </p>
            <div className="hero-actions">
              <a className="button" href="#Projects">
                Explore my work{' '}
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a className="text-link" href="#Contact">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="hero-visual">
            <div className="portrait-glow" aria-hidden="true" />
            <Monogram className="hero-monogram" />
            <figure className="portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}${portrait.image}`}
                alt={portrait.alt}
                style={{ objectPosition: portrait.position }}
                width={portrait.width}
                height={portrait.height}
                fetchPriority="high"
              />
              <figcaption>
                <span>Curiosity. Care. Craft.</span>
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
              </figcaption>
            </figure>
            <div className="portrait-note">
              <span className="code-symbol" aria-hidden="true">
                &lt;/&gt;
              </span>
              <div>
                <strong>Building with purpose</strong>
                <span>One idea at a time.</span>
              </div>
            </div>
            <div className="portrait-label">
              <span className="status-dot" /> Developer &amp; lifelong learner
            </div>
          </Reveal>
        </div>
        <div className="hero-footer">
          <span>Web experiences · Native apps · Human-centered design</span>
          <a href="#Projects" className="scroll-cue">
            Take a look around <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

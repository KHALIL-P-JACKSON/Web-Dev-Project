import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import Reveal from './Reveal';
import { currentBuild } from '../data/portfolio';

function CurrentlyBuilding() {
  return (
    <section className="building-section" aria-labelledby="building-heading">
      <Container size="4" px="4">
        <Reveal className="building-card">
          <div className="building-label">
            <span className="eyebrow">
              <span className="status-dot" /> Currently building
            </span>
            <p>
              A little peek
              <br />
              at my workbench.
            </p>
          </div>
          <div className="building-copy">
            <h2 id="building-heading">{currentBuild.title}</h2>
            <p>{currentBuild.description}</p>
            <ul
              className="skill-tags"
              aria-label="Current project technologies"
            >
              {currentBuild.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          <a
            className="building-link"
            href={currentBuild.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow my portfolio build on GitHub (opens in a new tab)"
          >
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
            <span>Follow the build</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export default CurrentlyBuilding;

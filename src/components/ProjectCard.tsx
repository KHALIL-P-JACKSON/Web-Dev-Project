import ArrowIcon from './ArrowIcon';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const isApp = project.preview.kind === 'app';
  const imageUrl = `${import.meta.env.BASE_URL}${project.preview.image}`;
  return (
    <article
      className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={`project-stage project-stage--${project.id}`}>
        {isApp ? (
          <div className="phone-frame">
            <div className="phone-island" aria-hidden="true" />
            {project.preview.screenImage ? (
              <img
                className="phone-screenshot"
                src={`${import.meta.env.BASE_URL}${project.preview.screenImage}`}
                alt={
                  project.preview.screenAlt ?? `${project.title} app screenshot`
                }
                loading="lazy"
              />
            ) : (
              <div className="phone-cover">
                <span className="phone-category">Native iOS app</span>
                <img
                  src={imageUrl}
                  alt={project.preview.alt}
                  width="1024"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
                <strong>{project.title}</strong>
                <span>Train. Track. Progress.</span>
                <div className="phone-features">
                  Workout logging
                  <br />
                  Training plans
                  <br />
                  Strength progress
                </div>
              </div>
            )}
            <div className="phone-home" aria-hidden="true" />
          </div>
        ) : (
          <div className="browser-frame">
            <div className="project-browser-bar" aria-hidden="true">
              <div>
                <span />
                <span />
                <span />
              </div>
              <span className="browser-address">
                {project.websiteUrl
                  ? new URL(project.websiteUrl).pathname
                  : project.title}
              </span>
              <span>
                <ArrowIcon />
              </span>
            </div>
            <div className="browser-image">
              <img
                src={imageUrl}
                alt={project.preview.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        <span className="stage-caption">
          {isApp ? 'Built for iPhone' : 'Designed for the web'}{' '}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </span>
      </div>
      <div className="project-content">
        <p className="eyebrow">
          {project.featured ? 'Featured project / ' : ''}
          {project.category}
        </p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="skill-tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.websiteUrl && (
            <a
              className="button button-small"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website (opens in a new tab)`}
            >
              Visit website{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          )}
          <a
            className={isApp ? 'button button-small' : 'text-link'}
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} code on GitHub (opens in a new tab)`}
          >
            View code{' '}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

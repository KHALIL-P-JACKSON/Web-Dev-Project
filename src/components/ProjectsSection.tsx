import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import { projects } from '../data/projects';

function ProjectsSection() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );
  return (
    <section
      id="Projects"
      aria-labelledby="projects-heading"
      className="projects-section section-space"
    >
      <Container size="4" px="4">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="projects-heading">
              Ideas made <em>real.</em>
            </h2>
          </div>
          <p>
            From a local business’s home on the web to an app for everyday
            training. A few things I’ve brought to life.
          </p>
        </Reveal>
        <div className="projects-grid">
          {orderedProjects.map((project) => (
            <Reveal
              key={project.id}
              className={project.featured ? 'project-featured-slot' : ''}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <a
          className="text-link projects-github-link"
          href="https://github.com/KHALIL-P-JACKSON"
          target="_blank"
          rel="noopener noreferrer"
        >
          More from my workbench on GitHub{' '}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </Container>
    </section>
  );
}

export default ProjectsSection;

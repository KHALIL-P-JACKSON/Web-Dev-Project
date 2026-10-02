import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const isApp = project.preview.kind === 'app';

  return (
    <Card asChild size="3" className="project-card">
      <article aria-labelledby={`${project.id}-title`}>
        <Box
          className={`project-preview project-preview--${project.preview.kind}`}
        >
          {!isApp && (
            <div className="project-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
          <img
            src={`${import.meta.env.BASE_URL}${project.preview.image}`}
            alt={project.preview.alt}
            loading="lazy"
            decoding="async"
            width={isApp ? 1024 : 1280}
            height={isApp ? 1024 : 720}
          />
          {isApp && (
            <Flex direction="column" align="center" gap="1">
              <Text size="5" weight="bold">
                {project.title}
              </Text>
              <Text size="2" color="gray">
                Train. Track. Progress.
              </Text>
            </Flex>
          )}
        </Box>

        <Flex direction="column" gap="4" className="project-content">
          <Box>
            <Badge color="mint" variant="soft" size="1" mb="2">
              {project.category}
            </Badge>
            <Heading as="h3" size="5" id={`${project.id}-title`} mb="2">
              {project.title}
            </Heading>
            <Text as="p" size="2" color="gray" className="project-description">
              {project.description}
            </Text>
          </Box>

          <Flex gap="2" wrap="wrap" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <Badge key={technology} color="gray" variant="surface" size="1">
                {technology}
              </Badge>
            ))}
          </Flex>

          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <Flex gap="3" wrap="wrap" className="project-actions">
            {project.websiteUrl && (
              <Button variant="solid" size="2" asChild>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website (opens in a new tab)`}
                >
                  Visit Website <span aria-hidden="true">↗</span>
                </a>
              </Button>
            )}
            <Button variant={isApp ? 'solid' : 'surface'} size="2" asChild>
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} code on GitHub (opens in a new tab)`}
              >
                View Code <span aria-hidden="true">↗</span>
              </a>
            </Button>
          </Flex>
        </Flex>
      </article>
    </Card>
  );
}

export default ProjectCard;

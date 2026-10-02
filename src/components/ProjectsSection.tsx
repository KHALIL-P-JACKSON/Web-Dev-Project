import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from '@radix-ui/themes';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <Box asChild py={{ initial: '8', md: '9' }} className="projects-section">
      <section id="Projects" aria-labelledby="projects-heading">
        <Container size="4" px="4">
          <Flex
            direction="column"
            align="center"
            gap="2"
            pb="7"
            className="projects-header"
          >
            <Badge
              color="mint"
              variant="surface"
              size="2"
              className="projects-label"
            >
              From idea to application
            </Badge>
            <Heading
              as="h2"
              size={{ initial: '8', md: '9' }}
              id="projects-heading"
            >
              Selected Projects
            </Heading>
            <Text as="p" size="3" color="gray" className="projects-intro">
              A look at what I’ve been building—from websites for the web to a
              native app for everyday training.
            </Text>
          </Flex>

          <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>

          <Text as="p" size="2" color="gray" align="center" mt="6">
            Follow along with what I’m building on{' '}
            <a
              className="projects-github-link"
              href="https://github.com/KHALIL-P-JACKSON"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </Text>
        </Container>
      </section>
    </Box>
  );
}

export default ProjectsSection;

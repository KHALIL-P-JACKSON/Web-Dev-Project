import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Card,
  Separator,
} from '@radix-ui/themes';
import ResumeCard from './ResumeCard';

function AboutSection() {
  return (
    <Box
      id="About"
      py={{ initial: '8', md: '9' }}
      style={{
        backgroundColor: 'var(--gray-2)',
        borderTop: '1px solid var(--gray-4)',
        borderBottom: '1px solid var(--gray-4)',
      }}
    >
      <Container size="4" px="4">
        {/* Section Header */}
        <Flex
          direction="column"
          align="center"
          gap="2"
          pb="7"
          style={{ textAlign: 'center' }}
        >
          <Badge
            color="mint"
            variant="surface"
            size="2"
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '4px 12px',
            }}
          >
            Get to know me
          </Badge>
          <Heading size={{ initial: '8', md: '9' }} weight="bold">
            Who Am I?
          </Heading>
          <Text size="3" color="gray" style={{ maxWidth: '600px' }}>
            A driven Information Technology student and software developer
            passionate about building impactful software and solving real-world
            challenges.
          </Text>
        </Flex>

        {/* Main Grid: Story on Left, Resume on Right */}
        <Grid
          columns={{ initial: '1', md: '12' }}
          gap={{ initial: '7', md: '8' }}
          align="start"
        >
          {/* Left Column: Narrative, Pillars, and Skills */}
          <Box gridColumn={{ initial: '1', md: 'span 7' }}>
            <Flex direction="column" gap="5">
              {/* Narrative Bio */}
              <Box>
                <Heading size="6" weight="bold" mb="3">
                  My Journey &amp; Passion
                </Heading>
                <Flex direction="column" gap="3">
                  <Text size="3" color="gray" style={{ lineHeight: '1.8' }}>
                    I am an Information Technology student at{' '}
                    <strong style={{ color: 'var(--gray-12)' }}>
                      Kennesaw State University
                    </strong>{' '}
                    and an Honors Scholar. My passion lies at the intersection
                    of technology and human-centered design—crafting software
                    solutions that are both resilient and intuitive.
                  </Text>
                  <Text size="3" color="gray" style={{ lineHeight: '1.8' }}>
                    Currently, as a{' '}
                    <strong style={{ color: 'var(--gray-12)' }}>
                      Software Developer Co-op at Chick-fil-A
                    </strong>
                    , I contribute to building scalable software systems.
                    Combined with my previous background as an Area Supervisor
                    at Chick-fil-A and Master of Ceremonies for the Clayton
                    County CTAE ceremony, I bring both engineering proficiency
                    and exceptional leadership, adaptability, and teamwork to
                    every project.
                  </Text>
                </Flex>
              </Box>

              <Separator size="4" my="1" />

              {/* Experience & Academic Pillar Cards */}
              <Box>
                <Heading size="4" weight="bold" mb="3">
                  Key Highlights
                </Heading>
                <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                  <Card size="2" style={{ borderRadius: '12px' }}>
                    <Flex gap="3" align="start">
                      <Box style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                        🦉
                      </Box>
                      <Flex direction="column" gap="1">
                        <Text size="3" weight="bold">
                          Kennesaw State
                        </Text>
                        <Text size="2" color="gray">
                          B.S. Information Technology &bull; Honors Student
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>

                  <Card size="2" style={{ borderRadius: '12px' }}>
                    <Flex gap="3" align="start">
                      <Box style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                        🐔
                      </Box>
                      <Flex direction="column" gap="1">
                        <Text size="3" weight="bold">
                          Chick-fil-A
                        </Text>
                        <Text size="2" color="gray">
                          Software Developer Co-op &bull; Former Area Supervisor
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>

                  <Card size="2" style={{ borderRadius: '12px' }}>
                    <Flex gap="3" align="start">
                      <Box style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                        🎤
                      </Box>
                      <Flex direction="column" gap="1">
                        <Text size="3" weight="bold">
                          Leadership &amp; MC
                        </Text>
                        <Text size="2" color="gray">
                          Clayton County CTAE MC &bull; Program Supervisor
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>

                  <Card size="2" style={{ borderRadius: '12px' }}>
                    <Flex gap="3" align="start">
                      <Box style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                        💻
                      </Box>
                      <Flex direction="column" gap="1">
                        <Text size="3" weight="bold">
                          Engineering Focus
                        </Text>
                        <Text size="2" color="gray">
                          Full-Stack Web Dev &bull; UI/UX &bull; Cloud Systems
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Grid>
              </Box>

              {/* Technologies & Skills Badges */}
              <Box>
                <Heading size="4" weight="bold" mb="3">
                  Technologies &amp; Skills
                </Heading>
                <Flex gap="2" wrap="wrap">
                  <Badge color="mint" variant="soft" size="2">
                    React
                  </Badge>
                  <Badge color="mint" variant="soft" size="2">
                    TypeScript
                  </Badge>
                  <Badge color="mint" variant="soft" size="2">
                    JavaScript (ES6+)
                  </Badge>
                  <Badge color="mint" variant="soft" size="2">
                    HTML5 &amp; CSS3
                  </Badge>
                  <Badge color="mint" variant="soft" size="2">
                    Vite
                  </Badge>
                  <Badge color="mint" variant="soft" size="2">
                    Radix UI
                  </Badge>
                  <Badge color="gray" variant="soft" size="2">
                    Git &amp; GitHub
                  </Badge>
                  <Badge color="gray" variant="soft" size="2">
                    Team Leadership
                  </Badge>
                  <Badge color="gray" variant="soft" size="2">
                    Operational Agility
                  </Badge>
                </Flex>
              </Box>
            </Flex>
          </Box>

          {/* Right Column: Resume Card */}
          <Box gridColumn={{ initial: '1', md: 'span 5' }}>
            <ResumeCard />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;

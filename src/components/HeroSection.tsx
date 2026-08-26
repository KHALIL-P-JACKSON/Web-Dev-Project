import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Button,
  Card,
} from '@radix-ui/themes';

function HeroSection() {
  return (
    <Box
      id="Home"
      py={{ initial: '6', md: '9' }}
      style={{
        background:
          'radial-gradient(ellipse at 50% 10%, var(--accent-a3) 0%, transparent 60%)',
      }}
    >
      <Container size="4" px="4">
        <Grid
          columns={{ initial: '1', md: '12' }}
          gap={{ initial: '6', md: '8' }}
          align="center"
        >
          {/* Left Column: Text & Intro Details */}
          <Box gridColumn={{ initial: '1', md: 'span 7' }}>
            <Flex direction="column" gap="4">
              {/* Badges / Highlights */}
              <Flex gap="2" wrap="wrap" align="center">
                <Badge color="red" variant="surface" size="2">
                  🐔 Chick-fil-A &bull; Software Developer Co-op
                </Badge>
                <Badge color="amber" variant="surface" size="2">
                  🦉 KSU &bull; Information Technology
                </Badge>
              </Flex>

              {/* Main Headline */}
              <Box>
                <Text size="3" color="gray" weight="medium">
                  Welcome to my portfolio
                </Text>
                <Heading size={{ initial: '8', md: '9' }} weight="bold" mt="1">
                  Hi, I&apos;m{' '}
                  <span style={{ color: 'var(--accent-11)' }}>
                    Khalil Jackson
                  </span>
                </Heading>
              </Box>

              {/* Subheading / Tagline */}
              <Text size={{ initial: '4', md: '5' }} color="gray" highContrast>
                Software Developer &amp; Information Technology Student
              </Text>

              {/* Welcoming Bio */}
              <Text size="3" color="gray" style={{ lineHeight: '1.75' }}>
                Welcome! I am an Information Technology student at Kennesaw
                State University and currently a Software Developer Co-op at
                Chick-fil-A. I specialize in building intuitive, responsive web
                applications and love turning ideas into elegant digital
                solutions.
              </Text>

              {/* Call-to-Action Buttons */}
              <Flex gap="3" pt="2" wrap="wrap">
                <Button size="3" variant="solid" asChild>
                  <a href="#Contact">Get in Touch</a>
                </Button>
                <Button size="3" variant="soft" asChild>
                  <a href="#About">About Me</a>
                </Button>
              </Flex>
            </Flex>
          </Box>

          {/* Right Column: Profile Card / Image */}
          <Box gridColumn={{ initial: '1', md: 'span 5' }}>
            <Card
              size="3"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Flex direction="column" align="center" gap="3" p="2">
                <Box
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--gray-3)',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG_7380.jpeg`}
                    alt="Khalil Jackson"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>
                <Flex direction="column" align="center" gap="1" pt="1">
                  <Text size="4" weight="bold">
                    Khalil Jackson
                  </Text>
                  <Text size="2" color="gray">
                    Software Developer &bull; KSU IT Student
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;

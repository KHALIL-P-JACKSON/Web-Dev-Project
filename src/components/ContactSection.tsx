import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Card,
  Button,
} from '@radix-ui/themes';

function ContactSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      description: 'Professional experience, updates, and networking',
      href: 'https://www.linkedin.com/in/khaliljackson2005/',
      image: `${import.meta.env.BASE_URL}icons8-linkedin-144.png`,
      cta: 'Connect on LinkedIn',
    },
    {
      name: 'Handshake',
      description: 'University recruiting, career milestones & profile',
      href: 'https://kennesaw.joinhandshake.com/profiles/rwufvk',
      image: `${import.meta.env.BASE_URL}icons8-handshake-100.png`,
      cta: 'View Handshake',
    },
    {
      name: 'Merit Pages',
      description: 'Academic honors, achievements & leadership',
      href: 'https://meritpages.com/Khalil-Jackson/8178900',
      image: `${import.meta.env.BASE_URL}icons8-m-100.png`,
      cta: 'View Merit Page',
    },
  ];

  return (
    <Box
      id="Contact"
      py={{ initial: '8', md: '9' }}
      style={{
        background:
          'radial-gradient(ellipse at 50% 100%, var(--accent-a3) 0%, transparent 60%)',
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
            Connect With Me
          </Badge>
          <Heading size={{ initial: '8', md: '9' }} weight="bold">
            Where to Find Me
          </Heading>
          <Text size="3" color="gray" style={{ maxWidth: '600px' }}>
            I am always eager to connect with fellow developers, recruiters, and
            collaborators. Reach out through any platform below or send a direct
            message!
          </Text>
        </Flex>

        {/* Social Platforms Grid */}
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4" mb="7">
          {socialLinks.map((link) => (
            <Card
              key={link.name}
              size="3"
              style={{
                borderRadius: '16px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <Flex
                direction="column"
                justify="between"
                align="center"
                gap="4"
                p="2"
                style={{ height: '100%', textAlign: 'center' }}
              >
                <Box
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '16px',
                    backgroundColor: 'var(--gray-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                  }}
                >
                  <img
                    src={link.image}
                    alt={link.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>

                <Flex direction="column" gap="1">
                  <Heading size="4" weight="bold">
                    {link.name}
                  </Heading>
                  <Text size="2" color="gray">
                    {link.description}
                  </Text>
                </Flex>

                <Button
                  size="2"
                  variant="surface"
                  color="mint"
                  style={{ width: '100%', fontWeight: 600 }}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.cta} &rarr;
                  </a>
                </Button>
              </Flex>
            </Card>
          ))}
        </Grid>

        {/* Direct Email / Contact Card */}
        <Card
          size="3"
          style={{
            borderRadius: '20px',
            backgroundColor: 'var(--gray-2)',
            border: '1px solid var(--gray-4)',
            boxShadow: '0 8px 30px -10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Flex
            direction={{ initial: 'column', md: 'row' }}
            justify="between"
            align="center"
            gap="5"
            p="4"
          >
            <Flex direction="column" gap="2" style={{ textAlign: 'left' }}>
              <Flex gap="2" align="center" wrap="wrap">
                <Badge color="mint" variant="solid" size="2">
                  🟢 Open to Opportunities
                </Badge>
                <Text size="2" color="gray">
                  📍 Greater Atlanta Area, GA
                </Text>
              </Flex>
              <Heading size="6" weight="bold">
                Let&apos;s build something together
              </Heading>
              <Text size="3" color="gray">
                Have a question, opportunity, or project in mind? My inbox is
                always open.
              </Text>
            </Flex>

            <Flex gap="3" align="center" wrap="wrap">
              <Button
                size="3"
                variant="solid"
                style={{
                  backgroundColor: '#204f46',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  padding: '10px 24px',
                  cursor: 'pointer',
                }}
                asChild
              >
                <a href="mailto:Jacksonkhalil05@gmail.com">
                  ✉️ Jacksonkhalil05@gmail.com
                </a>
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Box>
  );
}

export default ContactSection;

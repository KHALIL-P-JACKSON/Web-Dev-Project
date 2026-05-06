import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

function HeroSection() {
  return (
    <Box id="Home" className="hero-bg">
      <Container size="4">
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="4"
          py="9"
          style={{ textAlign: 'center' }}
        >
          {/* Intro */}
          <Text size="5">I am</Text>

          <Heading size="9" color="red">
            Khalil Jackson
          </Heading>

          <Text size="5">from Atlanta, GA</Text>

          {/* Image */}
          <Box>
            <img
              src="/IMG_7380.jpeg"
              alt="Khalil Jackson"
              style={{
                width: '50%',
                maxWidth: '3200px',
                height: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Box>

          {/* Education Section */}
          <Box mt="6">
            <Text size="4">Current</Text>

            <Heading size="6" mt="2">
              Honors Scholar
            </Heading>

            <Text size="4" mt="2">
              At Kennesaw State University pursuing a Bachelor of Science in
            </Text>

            <Heading size="5" mt="2">
              Information Technology
            </Heading>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default HeroSection;

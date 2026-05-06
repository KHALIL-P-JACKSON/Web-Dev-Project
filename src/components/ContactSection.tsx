import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import SocialLink from './SocialLink';

function ContactSection() {
  return (
    <Box id="Contact" className="contact-bg">
      <Container>
        {/* Section Title */}
        <Flex direction="column" align="center" gap="2" py="9">
          <Heading size="8">Where to Find Me</Heading>
        </Flex>

        {/* Social Links */}
        <Flex
          direction="row"
          justify="center"
          align="center"
          gap="6"
          wrap="wrap"
          mb="9"
        >
          <SocialLink
            name="LinkedIn"
            href="https://www.linkedin.com/in/khaliljackson2005/"
            image={`${import.meta.env.BASE_URL}icons8-linkedin-144.png`}
            alt="LinkedIn"
          />

          <SocialLink
            name="Handshake"
            href="https://kennesaw.joinhandshake.com/profiles/rwufvk"
            image={`${import.meta.env.BASE_URL}icons8-handshake-100.png`}
            alt="Handshake"
          />

          <SocialLink
            name="Merit"
            href="https://meritpages.com/Khalil-Jackson/8178900"
            image={`${import.meta.env.BASE_URL}icons8-m-100.png`}
            alt="Merit"
          />
        </Flex>

        {/* Contact Info */}
        <Flex direction="column" align="center" gap="3" py="8">
          <Heading size="6">Send Me a Message</Heading>

          <Text size="4" weight="bold">
            Email:
          </Text>

          <Text size="4">Jacksonkhalil05@gmail.com</Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default ContactSection;

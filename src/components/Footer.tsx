import { Box, Container, Text, Flex } from '@radix-ui/themes';

function Footer() {
  return (
    <Box asChild>
      <footer className="footer-bg">
        <Container size="4">
          <Flex justify="center" align="center" py="6">
            <Text size="2" color="gray">
              Website made by Khalil Jackson on GitHub
            </Text>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}

export default Footer;

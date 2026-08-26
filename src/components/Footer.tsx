import { Box, Container, Text, Flex, Link } from '@radix-ui/themes';

function Footer() {
  return (
    <Box
      asChild
      style={{
        borderTop: '1px solid var(--gray-4)',
        backgroundColor: 'var(--gray-1)',
      }}
    >
      <footer>
        <Container size="4" px="4">
          <Flex
            direction={{ initial: 'column', sm: 'row' }}
            justify="between"
            align="center"
            gap="2"
            py="6"
          >
            <Text size="2" color="gray">
              &copy; {new Date().getFullYear()} Khalil Jackson. All rights
              reserved.
            </Text>
            <Text size="2" color="gray">
              Built with React, TypeScript &amp; Radix Themes &bull;{' '}
              <Link
                href="https://github.com/KHALIL-P-JACKSON/Web-Dev-Project"
                target="_blank"
                rel="noreferrer"
                color="mint"
              >
                GitHub
              </Link>
            </Text>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}

export default Footer;

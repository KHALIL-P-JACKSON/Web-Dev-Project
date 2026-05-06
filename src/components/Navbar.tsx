import { Box, Container, Flex, Heading } from '@radix-ui/themes';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function Navbar() {
  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--gray-6)',
        backgroundColor: 'rgba(17, 17, 17, 0.8)',
      }}
    >
      <Container size="4">
        <Flex justify="between" align="center" py="4">
          {/* Logo / Brand */}
          <Heading size="5" color="iris">
            Khalil Jackson
          </Heading>

          {/* Navigation */}
          <NavigationMenu.Root>
            <NavigationMenu.List
              style={{
                display: 'flex',
                gap: '1.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center',
              }}
            >
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <a href="#Home" style={linkStyle}>
                    Home
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <a href="#About" style={linkStyle}>
                    About
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <a href="#Contact" style={linkStyle}>
                    Contact
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </Flex>
      </Container>
    </Box>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 500,
  transition: 'opacity 0.2s ease',
};

export default Navbar;

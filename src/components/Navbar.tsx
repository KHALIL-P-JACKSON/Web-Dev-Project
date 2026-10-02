import { Box, Container, Flex, Heading, Button, Badge } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function Navbar() {
  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#204f46',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container size="4" px="4">
        <Flex
          justify="between"
          align={{ initial: 'start', md: 'center' }}
          direction={{ initial: 'column', md: 'row' }}
          gap="3"
          py="4"
        >
          {/* Logo / Brand */}
          <a
            href="#Home"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Badge
              size="3"
              style={{
                backgroundColor: '#ffffff',
                color: '#204f46',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '1.15rem',
                padding: '6px 10px',
              }}
            >
              KJ
            </Badge>
            <Heading
              size={{ initial: '5', md: '6' }}
              weight="bold"
              style={{
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Khalil Jackson
            </Heading>
          </a>

          {/* Navigation Items & CTA */}
          <Flex
            align="center"
            gap={{ initial: '3', md: '6' }}
            className="navbar-actions"
          >
            <NavigationMenu.Root aria-label="Main navigation">
              <NavigationMenu.List
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  alignItems: 'center',
                }}
              >
                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <a href="#Home" className="nav-link">
                      Home
                    </a>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <a href="#About" className="nav-link">
                      About
                    </a>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <a href="#Projects" className="nav-link">
                      Projects
                    </a>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <a href="#Contact" className="nav-link">
                      Contact
                    </a>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>

            {/* Quick Contact / Connect CTA Button */}
            <Button
              size="3"
              className="navbar-connect"
              style={{
                backgroundColor: '#ffffff',
                color: '#204f46',
                fontWeight: 700,
                fontSize: '1.15rem',
                padding: '10px 20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
              }}
              asChild
            >
              <a href="#Contact">Connect</a>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;

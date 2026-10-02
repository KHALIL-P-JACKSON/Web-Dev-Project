import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Badge,
  IconButton,
  Popover,
} from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const navigationLinks = [
  { href: '#Home', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#Projects', label: 'Projects' },
  { href: '#Contact', label: 'Contact' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };

    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <Box
      asChild
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#204f46',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <header>
        <Container size="4" px="4">
          <Flex justify="between" align="center" gap="3" py="3">
            {/* Logo / Brand */}
            <a
              href="#Home"
              className="navbar-brand"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
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
                size={{ initial: '4', sm: '5', md: '6' }}
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
              display={{ initial: 'none', md: 'flex' }}
              align="center"
              gap="6"
            >
              <NavigationMenu.Root aria-label="Primary navigation">
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
                  {navigationLinks.map((link) => (
                    <NavigationMenu.Item key={link.href}>
                      <NavigationMenu.Link asChild>
                        <a href={link.href} className="nav-link">
                          {link.label}
                        </a>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.List>
              </NavigationMenu.Root>

              {/* Quick Contact / Connect CTA Button */}
              <Button
                size="3"
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
            <Flex display={{ initial: 'flex', md: 'none' }} flexShrink="0">
              <Popover.Root
                open={mobileMenuOpen}
                onOpenChange={setMobileMenuOpen}
              >
                <Popover.Trigger>
                  <IconButton
                    className="navbar-menu-toggle"
                    variant="ghost"
                    size="3"
                    aria-label={
                      mobileMenuOpen
                        ? 'Close navigation menu'
                        : 'Open navigation menu'
                    }
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      {mobileMenuOpen ? (
                        <path d="m6 6 12 12M6 18 18 6" />
                      ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </IconButton>
                </Popover.Trigger>
                <Popover.Content
                  className="navbar-mobile-menu"
                  align="end"
                  sideOffset={12}
                  collisionPadding={16}
                  size="2"
                  onOpenAutoFocus={(event) => {
                    event.preventDefault();
                    firstMobileLink.current?.focus();
                  }}
                >
                  <nav aria-label="Mobile navigation">
                    <Flex direction="column" gap="2">
                      {navigationLinks.map((link) => (
                        <a
                          key={link.href}
                          ref={
                            link.href === '#Home' ? firstMobileLink : undefined
                          }
                          href={link.href}
                          className="nav-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                      <Button
                        className="navbar-mobile-connect"
                        size="3"
                        variant="solid"
                        asChild
                      >
                        <a
                          href="#Contact"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Connect
                        </a>
                      </Button>
                    </Flex>
                  </nav>
                </Popover.Content>
              </Popover.Root>
            </Flex>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}

export default Navbar;

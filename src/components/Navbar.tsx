import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import Monogram from './Monogram';
import ThemeToggle from './ThemeToggle';
import type { ColorMode } from '../hooks/useColorMode';

interface NavbarProps {
  colorMode: ColorMode;
  onToggleColorMode: () => void;
}

const navigation = ['Home', 'Projects', 'About', 'Contact'];

function Navbar({ colorMode, onToggleColorMode }: NavbarProps) {
  return (
    <header className="navbar">
      <Container size="4" px="4">
        <div className="navbar-inner">
          <a href="#Home" className="brand" aria-label="Khalil Jackson home">
            <Monogram />
            <span>
              Khalil Jackson<span className="brand-dot">.</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="navbar-links">
            {navigation.map((section) => (
              <a key={section} href={`#${section}`} className="nav-link">
                {section}
              </a>
            ))}
          </nav>
          <div className="navbar-tools">
            <ThemeToggle colorMode={colorMode} onToggle={onToggleColorMode} />
            <a href="#Contact" className="button button-small navbar-connect">
              Let’s talk{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;

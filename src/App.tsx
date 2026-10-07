import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useColorMode } from './hooks/useColorMode';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Theme
      appearance={colorMode}
      accentColor="mint"
      grayColor="sage"
      panelBackground="solid"
      scaling="100%"
      radius="large"
      className="portfolio-theme"
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar colorMode={colorMode} onToggleColorMode={toggleColorMode} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <CurrentlyBuilding />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </Theme>
  );
}

export default App;

import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import Monogram from './Monogram';

const copyrightYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <Container size="4" px="4">
        <div className="footer-inner">
          <a className="footer-brand" href="#Home" aria-label="Back to top">
            <Monogram />
            <span>© {copyrightYear} Khalil Jackson</span>
          </a>
          <span>Made with care. Built with React.</span>
          <a
            className="text-link"
            href="https://github.com/KHALIL-P-JACKSON/Web-Dev-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source{' '}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

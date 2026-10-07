import ArrowIcon from './ArrowIcon';
import { Container } from '@radix-ui/themes';
import Reveal from './Reveal';

const socialLinks = [
  {
    name: 'LinkedIn',
    description: 'Experience, updates & connections',
    href: 'https://www.linkedin.com/in/khaliljackson2005/',
    image: 'icons8-linkedin-144.png',
  },
  {
    name: 'Handshake',
    description: 'University recruiting & career profile',
    href: 'https://kennesaw.joinhandshake.com/profiles/rwufvk',
    image: 'icons8-handshake-100.png',
  },
  {
    name: 'Merit Pages',
    description: 'Academic honors & achievements',
    href: 'https://meritpages.com/Khalil-Jackson/8178900',
    image: 'icons8-m-100.png',
  },
];

function ContactSection() {
  return (
    <section
      id="Contact"
      aria-labelledby="contact-heading"
      className="contact-section section-space"
    >
      <Container size="4" px="4">
        <Reveal className="contact-intro">
          <p className="eyebrow">03 / Let’s connect</p>
          <h2 id="contact-heading">
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have an idea, an opportunity, or just want to say hello?
            <br />
            I’d love to hear from you.
          </p>
          <a className="button" href="mailto:Jacksonkhalil05@gmail.com">
            Say hello{' '}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
          <a className="contact-email" href="mailto:Jacksonkhalil05@gmail.com">
            Jacksonkhalil05@gmail.com
          </a>
        </Reveal>
        <Reveal className="social-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="social-card"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View my ${link.name} profile (opens in a new tab)`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${link.image}`}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <div>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </div>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export default ContactSection;

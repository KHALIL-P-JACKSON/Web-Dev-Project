import { Container } from '@radix-ui/themes';
import ResumeCard from './ResumeCard';
import CareerTimeline from './CareerTimeline';
import Reveal from './Reveal';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML & CSS',
  'Vite',
  'Radix UI',
  'Git & GitHub',
  'Team leadership',
];

function AboutSection() {
  return (
    <section
      id="About"
      aria-labelledby="about-heading"
      className="about-section section-space"
    >
      <Container size="4" px="4">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">02 / A little about me</p>
            <h2 id="about-heading">
              People first.
              <br />
              <em>Then the pixels.</em>
            </h2>
          </div>
          <p>
            I care about how things work—and how they feel to the people using
            them.
          </p>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-story">
            <p>
              I’m an Information Technology student and Honors Scholar at{' '}
              <strong>Kennesaw State University</strong>, exploring the space
              where technology meets human-centered design.
            </p>
            <p>
              My path has taken me from leading teams to building software.
              Today, as a{' '}
              <strong>Software Developer Co-op at Chick-fil-A</strong>, I bring
              curiosity, care, and a collaborative mindset to every project.
            </p>
            <CareerTimeline />
            <div className="about-skills">
              <h3>Tools I build with</h3>
              <ul className="skill-tags" aria-label="Technologies and skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="about-resume">
            <ResumeCard />
            <p className="resume-caption">
              The experience behind the work.
              <br />
              Explore my full resume above.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;

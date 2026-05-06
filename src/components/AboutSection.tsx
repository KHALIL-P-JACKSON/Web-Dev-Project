import ResumeCard from './ResumeCard';

function AboutSection() {
  return (
    <div className="container-fluid bg-2 text-center" id="About">
      <h2 className="section-header">Who Am I?</h2>

      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-sm-4">
          <ResumeCard />
        </div>

        <div className="col-sm-4 col-sm-offset-4">
          <br />

          <h3>About Me</h3>

          <br />
          <br />
          <br />

          <p id="p1">
            I am an enthusiastic and driven Information Technology Sophomore at
            Kennesaw State University with a passion for leveraging technology
            to solve real-world problems. I bring a diverse skill set to the
            table, having honed my leadership abilities as the Master of
            Ceremonies for Clayton County CTAE ceremony in 2023. As an honors
            student, I consistently demonstrate exceptional soft skills,
            including communication, teamwork, and adaptability.
          </p>

          <p id="p1">
            In addition to my academic achievements, I have a strong background
            in management and operations, gained through my experience as an
            Area Supervisor at Chick-fil-A. In this role, I developed expertise
            in team leadership, customer service, and organizational efficiency.
            I have also contributed my skills to the community as a Program
            Supervisor in the Parks and Recreation sector, where I played a key
            role in enhancing recreational programs and community engagement.
          </p>

          <p id="p1">
            I am passionate about harnessing technology&apos;s power to create
            innovative solutions and eager to explore opportunities that allow
            me to further develop my technical skills and contribute
            meaningfully to the IT industry. Let&apos;s connect and explore how
            my unique background and enthusiasm can add value to your team or
            project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

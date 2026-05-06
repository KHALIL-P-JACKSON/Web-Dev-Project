import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import ResumeCard from './ResumeCard';

function AboutSection() {
  return (
    <Box id="About" className="about-bg">
      <Container size="4">
        {/* Section Title */}
        <Flex direction="column" align="center" gap="4" py="9">
          <Heading size="8">Who Am I?</Heading>
        </Flex>

        {/* Main Layout */}
        <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
          {/* Left: Resume Card */}
          <Box>
            <ResumeCard />
          </Box>

          {/* Right: About Text */}
          <Box>
            <Heading size="6" mb="4">
              About Me
            </Heading>

            <Flex direction="column" gap="4">
              <Text size="3" style={{ lineHeight: '1.7' }}>
                I am an enthusiastic and driven Information Technology sophomore
                at Kennesaw State University with a passion for leveraging
                technology to solve real-world problems. I bring a diverse skill
                set to the table, having honed my leadership abilities as the
                Master of Ceremonies for the Clayton County CTAE ceremony in
                2023. As an honors student, I consistently demonstrate strong
                communication, teamwork, and adaptability.
              </Text>

              <Text size="3" style={{ lineHeight: '1.7' }}>
                In addition to my academic achievements, I have a strong
                background in management and operations, gained through my
                experience as an Area Supervisor at Chick-fil-A. I developed
                expertise in team leadership, customer service, and
                organizational efficiency. I also contributed as a Program
                Supervisor in Parks and Recreation, supporting community
                engagement and program development.
              </Text>

              <Text size="3" style={{ lineHeight: '1.7' }}>
                I am passionate about using technology to create innovative
                solutions and I’m eager to grow my technical skills while
                contributing meaningfully to the IT industry. Let’s connect and
                explore how I can add value to your team or project.
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;

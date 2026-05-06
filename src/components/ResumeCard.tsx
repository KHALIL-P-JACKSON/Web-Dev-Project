import { Box, Card, Flex, Heading } from '@radix-ui/themes';

function ResumeCard() {
  return (
    <Card size="3">
      <Flex direction="column" align="center" gap="4">
        <Heading size="5">Check Out My Resume!</Heading>

        <Box
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '12px',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}resume.png`}
            alt="Resume"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Flex>
    </Card>
  );
}

export default ResumeCard;

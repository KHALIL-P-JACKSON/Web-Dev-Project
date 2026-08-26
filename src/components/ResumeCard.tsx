import { Box, Card, Flex, Heading, Button, Text } from '@radix-ui/themes';

function ResumeCard() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.png`;

  return (
    <Card
      size="3"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.25)',
        border: '1px solid var(--gray-a4)',
      }}
    >
      <Flex direction="column" gap="4" p="2">
        <Flex justify="between" align="center" wrap="wrap" gap="2">
          <Flex direction="column" gap="1">
            <Heading size="5" weight="bold">
              Resume Preview
            </Heading>
            <Text size="2" color="gray">
              Experience &amp; Academic Credentials
            </Text>
          </Flex>
          <Button
            size="2"
            variant="solid"
            style={{
              backgroundColor: '#204f46',
              color: '#ffffff',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            asChild
          >
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              View Full
            </a>
          </Button>
        </Flex>

        <Box
          style={{
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--gray-5)',
            backgroundColor: 'var(--gray-3)',
            maxHeight: '480px',
          }}
        >
          <img
            src={resumeUrl}
            alt="Khalil Jackson Resume"
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

import { Box, Flex, Text } from '@radix-ui/themes';

type SocialLinkProps = {
  name: string;
  href: string;
  image: string;
  alt: string;
  width?: string;
};

function SocialLink({ name, href, image, alt, width }: SocialLinkProps) {
  return (
    <Box>
      <Flex direction="column" align="center" gap="2">
        <Text size="3" weight="medium">
          {name}
        </Text>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
          }}
        >
          <img
            src={image}
            alt={alt}
            style={{
              width: width ?? '60px',
              height: 'auto',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'scale(1.08)')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </a>
      </Flex>
    </Box>
  );
}

export default SocialLink;

type SocialLinkProps = {
  name: string;
  href: string;
  image: string;
  alt: string;
  width?: string;
};

function SocialLink({ name, href, image, alt, width }: SocialLinkProps) {
  return (
    <div className="col-sm-4">
      <p>{name}</p>

      <a href={href} target="_blank" rel="noreferrer">
        <img src={image} alt={alt} style={width ? { width } : {}} />
      </a>
    </div>
  );
}

export default SocialLink;

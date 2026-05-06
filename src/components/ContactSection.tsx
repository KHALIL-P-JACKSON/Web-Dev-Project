import SocialLink from './SocialLink';

function ContactSection() {
  return (
    <div className="container-fluid bg-3 text-center" id="Contact">
      <h3>Where to Find Me</h3>

      <div className="row">
        <SocialLink
          name="LinkedIn"
          href="https://www.linkedin.com/in/khaliljackson2005/"
          image="/icons8-linkedin-144.png"
          alt="LinkedIn"
        />

        <SocialLink
          name="Handshake"
          href="https://kennesaw.joinhandshake.com/profiles/rwufvk"
          image="/icons8-handshake-100.png"
          alt="Handshake"
          width="30%"
        />

        <SocialLink
          name="Merit"
          href="https://meritpages.com/Khalil-Jackson/8178900"
          image="/icons8-m-100.png"
          alt="Merit"
          width="30%"
        />
      </div>

      <br />
      <br />
      <br />
      <br />

      <h3>Send Me a Message</h3>

      <br />
      <br />

      <h4>Email:</h4>

      <h4>Jacksonkhalil05@gmail.com</h4>
    </div>
  );
}

export default ContactSection;

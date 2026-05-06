function HeroSection() {
  return (
    <div className="container-fluid bg-1 text-center" id="Home">
      <h1>I am</h1>

      <h1 id="nameplate">Khalil Jackson</h1>

      <h1>from Atlanta, Ga</h1>

      <br />
      <br />

      <img
        src="/IMG_7380.jpeg"
        className="img-thumbnail"
        alt="Khalil Jackson"
        style={{
          width: '50%',
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />

      <br />
      <br />
      <br />

      <h3>Current</h3>

      <h3 id="honors">Honors Scholar</h3>

      <h3>At Kennesaw University Pursuing a Bachelors of Science in</h3>

      <h3 id="information">Information Technology</h3>
    </div>
  );
}

export default HeroSection;

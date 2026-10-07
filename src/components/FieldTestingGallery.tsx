import ArrowIcon from './ArrowIcon';
import Reveal from './Reveal';
import { fieldPhotos } from '../data/portfolio';

function FieldTestingGallery() {
  return (
    <section className="field-gallery" aria-labelledby="field-gallery-heading">
      <Reveal className="field-gallery-heading">
        <div>
          <p className="eyebrow">Behind the work / Chick-fil-A</p>
          <h3 id="field-gallery-heading">
            From the screen
            <br />
            to the <em>field.</em>
          </h3>
        </div>
        <p>
          Part of building software is seeing it in action. A look at field
          testing alongside the restaurant team at Chick-fil-A.
        </p>
      </Reveal>
      <div className="field-photo-grid">
        {fieldPhotos.map((photo) => {
          const url = `${import.meta.env.BASE_URL}${photo.image}`;
          return (
            <Reveal key={photo.image}>
              <figure className="field-photo">
                <a
                  className="field-photo-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full photo: ${photo.title} (opens in a new tab)`}
                >
                  <img
                    src={url}
                    alt={photo.alt}
                    width="853"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="field-photo-open" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
                <figcaption>
                  <h4>{photo.title}</h4>
                  <p>{photo.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default FieldTestingGallery;

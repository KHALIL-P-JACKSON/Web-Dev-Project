import ArrowIcon from './ArrowIcon';
function ResumeCard() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.png`;
  return (
    <div className="resume-card">
      <div className="resume-card-header">
        <div>
          <p className="eyebrow">A closer look</p>
          <h3>My resume</h3>
        </div>
        <a
          className="button button-small"
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my full resume (opens in a new tab)"
        >
          View full{' '}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </div>
      <a
        className="resume-preview"
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Khalil Jackson’s resume (opens in a new tab)"
      >
        <img
          src={resumeUrl}
          alt="Khalil Jackson’s resume with experience and academic credentials"
          width="1700"
          height="2200"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  );
}

export default ResumeCard;

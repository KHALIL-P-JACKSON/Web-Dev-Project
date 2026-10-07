import { milestones } from '../data/portfolio';

function CareerTimeline() {
  return (
    <div className="career-journey">
      <h3>My journey so far</h3>
      <ol className="career-timeline">
        {milestones.map((milestone) => (
          <li key={milestone.id}>
            <span className="timeline-marker" aria-hidden="true" />
            <span className="eyebrow">{milestone.label}</span>
            <h4>{milestone.title}</h4>
            <p className="timeline-role">{milestone.role}</p>
            <p>{milestone.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CareerTimeline;

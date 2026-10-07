import { useState } from 'react';
import ArrowIcon from './ArrowIcon';
import type { AppScreenshot } from '../data/projects';

interface AppScreenshotPreviewProps {
  projectId: string;
  projectTitle: string;
  screenshots: AppScreenshot[];
}

function AppScreenshotPreview({
  projectId,
  projectTitle,
  screenshots,
}: AppScreenshotPreviewProps) {
  const [selectedId, setSelectedId] = useState(screenshots[0]?.id);
  const active =
    screenshots.find((screen) => screen.id === selectedId) ?? screenshots[0];
  if (!active) return null;
  const imageUrl = `${import.meta.env.BASE_URL}${active.image}`;
  const previewId = `${projectId}-screen-preview`;

  return (
    <div className="app-screen-preview">
      <a
        className="phone-frame phone-frame--screenshot"
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${projectTitle} ${active.label} screenshot at full size (opens in a new tab)`}
      >
        <img
          id={previewId}
          className="phone-screenshot"
          src={imageUrl}
          alt={active.alt}
          width={active.width}
          height={active.height}
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className="screen-picker">
        <p className="eyebrow">Inside the app</p>
        <div
          className="screen-options"
          role="group"
          aria-label={`${projectTitle} screenshots`}
        >
          {screenshots.map((screen) => (
            <button
              key={screen.id}
              type="button"
              className="screen-option"
              aria-pressed={active.id === screen.id}
              aria-controls={previewId}
              onClick={() => setSelectedId(screen.id)}
            >
              {screen.label}
            </button>
          ))}
        </div>
        <p className="screen-preview-label" aria-live="polite">
          {active.label} screen
        </p>
        <a
          className="text-link screen-full-size"
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View full-size ${projectTitle} ${active.label} screenshot (opens in a new tab)`}
        >
          View full size <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

export default AppScreenshotPreview;

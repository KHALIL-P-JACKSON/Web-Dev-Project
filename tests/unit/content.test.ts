// @vitest-environment node
import { statSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { describe, expect, it } from 'vitest';
import { projects } from '../../src/data/projects';
import {
  currentBuild,
  fieldPhotos,
  milestones,
  portrait,
} from '../../src/data/portfolio';

describe('portfolio content contracts', () => {
  it('ships every configured image with meaningful alt text', () => {
    const publicRoot = resolve('public');
    const images = [
      portrait,
      ...fieldPhotos,
      ...projects.flatMap((project) => [
        project.preview,
        ...(project.preview.screenshots ?? []),
      ]),
    ];
    for (const image of images) {
      const path = resolve(publicRoot, image.image);
      expect(path.startsWith(publicRoot + sep)).toBe(true);
      expect(statSync(path).isFile(), image.image).toBe(true);
      expect(image.alt.trim().length, image.image).toBeGreaterThan(10);
    }
  });

  it('keeps identifiers unique for links and screenshot controls', () => {
    expect(new Set(projects.map((project) => project.id)).size).toBe(
      projects.length
    );
    expect(new Set(milestones.map((milestone) => milestone.id)).size).toBe(
      milestones.length
    );
    for (const project of projects) {
      const screenshots = project.preview.screenshots ?? [];
      expect(new Set(screenshots.map((screen) => screen.id)).size).toBe(
        screenshots.length
      );
      for (const screenshot of screenshots) {
        expect(screenshot.width).toBeGreaterThan(0);
        expect(screenshot.height).toBeGreaterThan(0);
        expect(screenshot.label.trim()).not.toBe('');
      }
    }
  });

  it('uses complete HTTPS URLs for project and current-build destinations', () => {
    const destinations = [
      currentBuild.repositoryUrl,
      ...projects.flatMap((project) => [
        project.repositoryUrl,
        ...(project.websiteUrl ? [project.websiteUrl] : []),
      ]),
    ];
    for (const destination of destinations) {
      const url = new URL(destination);
      expect(url.protocol).toBe('https:');
      expect(url.hostname).not.toBe('');
    }
  });
});

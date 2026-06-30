import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../src/Pages/Home';

describe('Hero section', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('displays correct background image and text', () => {
    const hero = screen.getByRole('banner');
    expect(hero).toHaveStyle(/background-image/i);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('CTA button is visible and styled', () => {
    const ctaButton = screen.getByRole('button', { name: /shop now/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveClass('cta-button');
  });

  test('CTA button navigates to intended page', () => {
    const ctaButton = screen.getByRole('button', { name: /shop now/i });
    fireEvent.click(ctaButton);
    expect(ctaButton.closest('a')).toHaveAttribute('href');
  });

  test('responsive image resolution and CTA visibility on tablet and mobile', () => {
    // Tablet
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    render(<Home />);
    const hero = screen.getByRole('banner');
    expect(hero).toHaveStyle(/background-image/i);

    // Mobile
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    render(<Home />);
    const ctaButton = screen.getByRole('button', { name: /shop now/i });
    expect(ctaButton).toBeInTheDocument();
  });
});
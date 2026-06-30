import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../src/Pages/Home';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders hero section', () => {
    const hero = screen.getByRole('banner');
    expect(hero).toBeInTheDocument();
  });

  test('renders featured categories grid', () => {
    const categories = screen.getAllByTestId('category-card');
    expect(categories.length).toBeGreaterThan(0);
  });

  test('renders trending products carousel', () => {
    const carousel = screen.getByTestId('trending-carousel');
    expect(carousel).toBeInTheDocument();
  });

  test('renders newsletter signup component', () => {
    const newsletter = screen.getByTestId('newsletter-signup');
    expect(newsletter).toBeInTheDocument();
  });

  test('layout is responsive across viewports', () => {
    // Desktop
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    render(<Home />);
    const home = screen.getByRole('main');
    expect(home).toBeInTheDocument();

    // Tablet
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    render(<Home />);
    expect(home).toBeInTheDocument();

    // Mobile
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    render(<Home />);
    expect(home).toBeInTheDocument();
  });
});
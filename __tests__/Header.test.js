import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../src/components/Common/NewHeader';

describe('Header component', () => {
  beforeEach(() => {
    // Set default viewport to desktop
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  test('renders logo, navigation links, and search bar', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);

    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('link');
    navLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).not.toBe('#');
    });
  });

  test('search input accepts user input', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'test query' } });
    expect(searchInput).toHaveValue('test query');
  });

  test('responsive layout adapts to tablet and mobile widths', () => {
    // Tablet
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    // Mobile
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    render(<Header />);
    const mobileMenuButton = screen.getByLabelText(/menu/i);
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
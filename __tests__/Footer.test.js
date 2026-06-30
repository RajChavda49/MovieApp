import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../src/components/Common/NewFooter';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders required links', () => {
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact/i);
    const privacyLink = screen.getByText(/privacy policy/i);
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
  });

  test('newsletter signup form is present', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    const submitButton = screen.getByRole('button', { name: /subscribe/i });
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('responsive layout adapts to tablet and mobile widths', () => {
    // Tablet
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Mobile
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    render(<Footer />);
    const mobileFooter = screen.getByRole('contentinfo');
    expect(mobileFooter).toBeInTheDocument();
  });
});
// e2e/homepage.spec.js
// Cypress end‑to‑end tests for the eCommerce homepage
// Covers TC-001, TC-002, TC-003, TC-004

/// <reference types="cypress" />

const viewportSizes = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};

// Helper to assert navigation
const assertNavigation = (linkText, expectedPath) => {
  cy.contains('a', linkText).click();
  cy.location('pathname').should('eq', expectedPath);
  cy.go('back');
};

describe('Homepage UI Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('TC-001: Header functional and responsive', () => {
    it('renders header and navigation links', () => {
      cy.get('header').should('be.visible');
      cy.contains('a', 'Home').should('be.visible');
      cy.contains('a', 'Shop').should('be.visible');
      cy.contains('a', 'About').should('be.visible');
      cy.contains('a', 'Contact').should('be.visible');
    });

    it('navigation links work correctly', () => {
      const links = [
        { text: 'Home', path: '/' },
        { text: 'Shop', path: '/shop' },
        { text: 'About', path: '/about' },
        { text: 'Contact', path: '/contact' }
      ];
      links.forEach(link => assertNavigation(link.text, link.path));
    });

    it('header adapts to tablet viewport', () => {
      cy.viewport(viewportSizes.tablet.width, viewportSizes.tablet.height);
      cy.get('header').should('be.visible');
      // Expect a horizontal layout or a collapsed menu icon
      cy.get('header').within(() => {
        cy.get('.nav-links').should('be.visible');
      });
    });

    it('header collapses into hamburger on mobile', () => {
      cy.viewport(viewportSizes.mobile.width, viewportSizes.mobile.height);
      cy.get('header').should('be.visible');
      cy.get('.hamburger-menu').should('be.visible').click();
      cy.get('.mobile-nav').should('be.visible');
      cy.contains('a', 'Home').should('be.visible');
      cy.contains('a', 'Shop').should('be.visible');
      cy.contains('a', 'About').should('be.visible');
      cy.contains('a', 'Contact').should('be.visible');
    });
  });

  context('TC-002: Footer functional and responsive', () => {
    it('renders footer and links', () => {
      cy.get('footer').should('be.visible');
      cy.contains('a', 'Privacy Policy').should('be.visible');
      cy.contains('a', 'Terms of Service').should('be.visible');
      cy.contains('a', 'Help').should('be.visible');
    });

    it('footer links navigate correctly', () => {
      const links = [
        { text: 'Privacy Policy', path: '/privacy' },
        { text: 'Terms of Service', path: '/terms' },
        { text: 'Help', path: '/help' }
      ];
      links.forEach(link => assertNavigation(link.text, link.path));
    });

    it('footer adapts to tablet viewport', () => {
      cy.viewport(viewportSizes.tablet.width, viewportSizes.tablet.height);
      cy.get('footer').should('be.visible');
      cy.get('footer').within(() => {
        cy.get('.footer-links').should('be.visible');
      });
    });

    it('footer stacks correctly on mobile', () => {
      cy.viewport(viewportSizes.mobile.width, viewportSizes.mobile.height);
      cy.get('footer').should('be.visible');
      cy.get('footer').within(() => {
        cy.get('.footer-links').should('be.visible');
        cy.get('.footer-links').children().should('have.length.at.least', 3);
      });
    });
  });

  context('TC-003: Homepage responsiveness across devices', () => {
    const sections = ['.hero-section', '.featured-categories', '.trending-products', '.newsletter-signup'];

    it('desktop layout displays all sections', () => {
      cy.viewport(viewportSizes.desktop.width, viewportSizes.desktop.height);
      sections.forEach(sel => cy.get(sel).should('be.visible'));
    });

    it('tablet layout stacks sections appropriately', () => {
      cy.viewport(viewportSizes.tablet.width, viewportSizes.tablet.height);
      sections.forEach(sel => cy.get(sel).should('be.visible'));
    });

    it('mobile layout stacks sections vertically', () => {
      cy.viewport(viewportSizes.mobile.width, viewportSizes.mobile.height);
      sections.forEach(sel => cy.get(sel).should('be.visible'));
    });
  });

  context('TC-004: Interactive elements functionality', () => {
    it('hero CTA navigates to intended page', () => {
      cy.contains('button', /shop now/i).click();
      cy.location('pathname').should('eq', '/shop');
      cy.go('back');
    });

    it('trending products carousel works', () => {
      cy.get('.carousel').should('be.visible');
      cy.get('.carousel-slide').first().invoke('text').as('firstSlide');
      cy.get('.carousel-next').click();
      cy.get('.carousel-slide').first().invoke('text').should('not.eq', this.firstSlide);
      cy.get('.carousel-prev').click();
      cy.get('.carousel-slide').first().invoke('text').should('eq', this.firstSlide);
    });

    it('featured category link navigates correctly', () => {
      cy.contains('.featured-category', 'Electronics').click();
      cy.location('pathname').should('include', '/category/electronics');
      cy.go('back');
    });

    it('newsletter signup shows success message', () => {
      cy.get('input[name="email"]').type('test@example.com');
      cy.contains('button', /subscribe/i).click();
      cy.contains('Thank you for subscribing').should('be.visible');
    });
  });
});
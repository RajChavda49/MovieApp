import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Discover Your Next Adventure</h1>
        <p className="hero__subtitle">Explore top destinations and exclusive deals curated just for you.</p>
        <a href="/shop" className="hero__cta">Shop Now</a>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 400px;
          background: url('/images/hero-bg.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
          padding: 0 1rem;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        .hero__content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .hero__title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .hero__subtitle {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .hero__cta {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #ff5a5f;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        .hero__cta:hover {
          background: #e04e52;
        }
        @media (min-width: 768px) {
          .hero {
            height: 70vh;
          }
          .hero__title {
            font-size: 3.5rem;
          }
          .hero__subtitle {
            font-size: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .hero {
            height: 80vh;
          }
          .hero__title {
            font-size: 4rem;
          }
          .hero__subtitle {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

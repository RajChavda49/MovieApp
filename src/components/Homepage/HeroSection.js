import React from 'react';

const HeroSection = () => (
  <section className="hero">
    <div className="overlay">
      <h1 className="title">Discover Your Next Adventure</h1>
      <p className="subtitle">Explore top destinations and exclusive deals.</p>
      <a href="/shop" className="cta">Shop Now</a>
    </div>
    <img
      src="https://source.unsplash.com/random/1600x900?travel"
      alt="Hero Banner"
      className="image"
    />
    <style jsx>{`
      .hero {
        position: relative;
        width: 100%;
        height: 80vh;
        min-height: 400px;
        overflow: hidden;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.6);
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-align: center;
        padding: 0 1rem;
      }
      .title {
        font-size: 3rem;
        margin-bottom: 0.5rem;
      }
      .subtitle {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .cta {
        background: #ff5a5f;
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        text-decoration: none;
        font-weight: 600;
      }
      @media (max-width: 768px) {
        .title { font-size: 2rem; }
        .subtitle { font-size: 1.2rem; }
      }
    `}</style>
  </section>
);

export default HeroSection;

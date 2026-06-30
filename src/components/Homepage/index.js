import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section style={{ position: 'relative', textAlign: 'center', color: '#fff', padding: '4rem 1rem', backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Our Store</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Discover the best products at unbeatable prices.</p>
    <Link href="/shop">
      <a style={{ padding: '0.75rem 1.5rem', backgroundColor: '#ff5a5f', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Shop Now</a>
    </Link>
  </section>
);

const FeaturedCategories = () => (
  <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
    <h2 style={{ marginBottom: '2rem' }}>Featured Categories</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys', 'Beauty'].map((cat) => (
        <div key={cat} style={{ flex: '1 1 200px', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1rem', minWidth: '150px' }}>
          <h3>{cat}</h3>
          <p>Explore the latest in {cat.toLowerCase()}.</p>
        </div>
      ))}
    </div>
  </section>
);

const TrendingCarousel = () => {
  const products = [
    { id: 1, name: 'Smartphone', price: '$699', img: '/product1.jpg' },
    { id: 2, name: 'Running Shoes', price: '$129', img: '/product2.jpg' },
    { id: 3, name: 'Coffee Maker', price: '$89', img: '/product3.jpg' },
    { id: 4, name: 'Bluetooth Speaker', price: '$59', img: '/product4.jpg' },
  ];

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Trending Products</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '0 1rem' }}>
        {products.map((p) => (
          <div key={p.id} style={{ minWidth: '200px', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1rem', backgroundColor: '#fff' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <h3 style={{ margin: '0.5rem 0' }}>{p.name}</h3>
            <p style={{ fontWeight: 'bold' }}>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const NewsletterSignup = () => (
  <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
    <h2 style={{ marginBottom: '1rem' }}>Stay Updated</h2>
    <p style={{ marginBottom: '1.5rem' }}>Subscribe to our newsletter for the latest deals.</p>
    <form style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }} onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
      <input type="email" placeholder="Your email" required style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', flex: '1 0 200px' }} />
      <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#ff5a5f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Subscribe</button>
    </form>
  </section>
);

const Homepage = () => (
  <>
    <HeroSection />
    <FeaturedCategories />
    <TrendingCarousel />
    <NewsletterSignup />
  </>
);

export default Homepage;

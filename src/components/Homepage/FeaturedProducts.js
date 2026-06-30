import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$29.99', image: 'https://via.placeholder.com/300x300?text=Product+1' },
  { id: 2, name: 'Product 2', price: '$39.99', image: 'https://via.placeholder.com/300x300?text=Product+2' },
  { id: 3, name: 'Product 3', price: '$49.99', image: 'https://via.placeholder.com/300x300?text=Product+3' },
  { id: 4, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/300x300?text=Product+4' },
  { id: 5, name: 'Product 5', price: '$69.99', image: 'https://via.placeholder.com/300x300?text=Product+5' },
  { id: 6, name: 'Product 6', price: '$79.99', image: 'https://via.placeholder.com/300x300?text=Product+6' },
];

const FeaturedProducts = () => {
  return (
    <section aria-labelledby="featured-products-title" style={{ padding: '2rem 1rem' }}>
      <h2 id="featured-products-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Featured Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '0.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1rem', margin: '0 0 0.5rem 0' }}>{product.name}</h3>
              <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{product.price}</p>
              <button style={{
                padding: '0.5rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
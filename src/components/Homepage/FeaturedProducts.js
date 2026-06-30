import React from 'react';

const featuredProducts = [
  {
    id: 1,
    title: 'Classic Leather Jacket',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Modern Sneakers',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Elegant Wristwatch',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Stylish Sunglasses',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Luxury Handbag',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Smart Watch',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
];

const FeaturedProducts = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Products</h2>
      <div style={styles.grid}>
        {featuredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.title}>{product.title}</h3>
              <p style={styles.price}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  info: {
    padding: '0.75rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1rem',
    margin: '0 0 0.5rem 0',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
};

export default FeaturedProducts;

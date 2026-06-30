import React from 'react';

const GlobalHeader = () => {
  return (
    <header style={headerStyle}>
      <div style={brandStyle}>Raj chavda the developer</div>
      <nav style={navStyle}>
        <a href="/shop" style={linkStyle}>Shop</a>
        <a href="/categories" style={linkStyle}>Categories</a>
        <a href="/search" style={linkStyle}>Search</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #eaeaea',
  flexWrap: 'wrap',
};

const brandStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const navStyle = {
  display: 'flex',
  gap: '15px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '1rem',
};

export default GlobalHeader;
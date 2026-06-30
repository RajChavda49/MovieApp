import React from 'react';

const NewFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>About Us</h4>
          <p style={styles.text}>We are a leading eCommerce platform providing quality products worldwide.</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/shop" style={styles.link}>Shop</a></li>
            <li><a href="/about" style={styles.link}>About</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/faq" style={styles.link}>FAQ</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Newsletter</h4>
          <p style={styles.text}>Subscribe to get the latest updates.</p>
          <form onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }}>
            <input type="email" placeholder="Email address" style={styles.input} required />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copy}>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#bbb',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    width: '70%',
    marginRight: '5px',
    borderRadius: '4px',
    border: 'none',
  },
  button: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ff6600',
    color: '#fff',
    cursor: 'pointer',
  },
  bottom: {
    borderTop: '1px solid #444',
    marginTop: '20px',
    paddingTop: '10px',
    textAlign: 'center',
  },
  copy: {
    fontSize: '12px',
    color: '#777',
  },
};

export default NewFooter;
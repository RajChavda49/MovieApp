import React, { useState } from "react";

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.logo}>MyShop</a>
        <nav style={{ ...styles.nav, ...(menuOpen ? styles.navOpen : {}) }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.link}>
              {link.name}
            </a>
          ))}
          <a href="/search" style={styles.link}>
            🔍
          </a>
        </nav>
        <button onClick={toggleMenu} style={styles.menuButton} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #eaeaea",
    padding: "0.5rem 1rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#333",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    transition: "max-height 0.3s ease",
    overflow: "hidden",
    maxHeight: "100vh",
  },
  navOpen: {
    maxHeight: "500px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
  },
  menuButton: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};

// Responsive styles
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const handleResize = () => {
    if (mediaQuery.matches) {
      styles.nav.maxHeight = menuOpen ? "500px" : "0";
      styles.menuButton.display = "block";
      styles.nav.display = "flex";
      styles.nav.flexDirection = "column";
    } else {
      styles.nav.maxHeight = "100vh";
      styles.menuButton.display = "none";
      styles.nav.display = "flex";
      styles.nav.flexDirection = "row";
    }
  };
  mediaQuery.addEventListener("change", handleResize);
  handleResize();
}

export default NewHeader;

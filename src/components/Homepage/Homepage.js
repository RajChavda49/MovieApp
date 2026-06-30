import React, { useState, useEffect } from "react";
import NewHeader from "../Common/NewHeader";
import NewFooter from "../Common/NewFooter";

const heroStyle = {
  position: "relative",
  width: "100%",
  height: "60vh",
  backgroundImage: "url('https://via.placeholder.com/1200x600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  padding: "0 1rem",
};

const heroOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
};

const heroContent = {
  position: "relative",
  zIndex: 1,
  maxWidth: "800px",
};

const buttonStyle = {
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#ff6f61",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};

const categoriesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem",
  padding: "2rem 1rem",
};

const categoryCard = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  cursor: "pointer",
};

const categoryImage = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  transition: "transform 0.3s",
};

const categoryOverlay = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "0.5rem",
  background: "rgba(0,0,0,0.6)",
  color: "white",
  textAlign: "center",
};

const carouselContainer = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "300px",
  margin: "2rem 0",
};

const carouselSlide = {
  display: "flex",
  transition: "transform 0.5s ease-in-out",
};

const carouselItem = {
  minWidth: "100%",
  height: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const newsletter = {
  backgroundColor: "#f5f5f5",
  padding: "2rem 1rem",
  textAlign: "center",
};

const inputStyle = {
  padding: "0.5rem",
  width: "250px",
  maxWidth: "80%",
  marginRight: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const HomePage = () => {
  const categories = [
    { id: 1, title: "Electronics", img: "https://via.placeholder.com/400x300" },
    { id: 2, title: "Fashion", img: "https://via.placeholder.com/400x300" },
    { id: 3, title: "Home & Garden", img: "https://via.placeholder.com/400x300" },
    { id: 4, title: "Sports", img: "https://via.placeholder.com/400x300" },
  ];

  const trending = [
    { id: 1, title: "Smartphone", img: "https://via.placeholder.com/800x300" },
    { id: 2, title: "Running Shoes", img: "https://via.placeholder.com/800x300" },
    { id: 3, title: "Coffee Maker", img: "https://via.placeholder.com/800x300" },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % trending.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [trending.length]);

  return (
    <div>
      <NewHeader />
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <h1>Welcome to Our Store</h1>
          <p>Discover the best products at unbeatable prices.</p>
          <button style={buttonStyle}>Shop Now</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={categoriesGrid}>
        {categories.map((cat) => (
          <div key={cat.id} style={categoryCard}>
            <img src={cat.img} alt={cat.title} style={categoryImage} />
            <div style={categoryOverlay}>{cat.title}</div>
          </div>
        ))}
      </section>

      {/* Trending Carousel */}
      <section style={carouselContainer}>
        <div
          style={{
            ...carouselSlide,
            transform: `translateX(-${slideIndex * 100}%)`,
          }}
        >
          {trending.map((item) => (
            <div
              key={item.id}
              style={{ ...carouselItem, backgroundImage: `url(${item.img})` }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  color: "white",
                  background: "rgba(0,0,0,0.5)",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={newsletter}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and exclusive offers.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed!");
          }}
        >
          <input type="email" placeholder="Your email" style={inputStyle} required />
          <button type="submit" style={buttonStyle}>Subscribe</button>
        </form>
      </section>

      <NewFooter />
    </div>
  );
};

export default HomePage;

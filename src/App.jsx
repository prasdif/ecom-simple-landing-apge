import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, ArrowRight, Star, Heart, Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Quantum Over-Ear Headphones', price: '$299', category: 'Audio', color: '139, 92, 246', secondColor: '59, 130, 246' },
  { id: 2, name: 'Aero X1 Smartwatch', price: '$199', category: 'Wearables', color: '16, 185, 129', secondColor: '59, 130, 246' },
  { id: 3, name: 'Nebula VR Headset', price: '$499', category: 'Gaming', color: '244, 63, 94', secondColor: '139, 92, 246' },
  { id: 4, name: 'Stellar Bluetooth Speaker', price: '$149', category: 'Audio', color: '245, 158, 11', secondColor: '236, 72, 153' },
  { id: 5, name: 'Nova Pro Camera X', price: '$899', category: 'Photography', color: '59, 130, 246', secondColor: '16, 185, 129' },
  { id: 6, name: 'Eclipse Gaming Keyboard', price: '$129', category: 'Accessories', color: '236, 72, 153', secondColor: '139, 92, 246' }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--accent-gradient)' }}></div>
            NEONICS
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">New Arrivals</a>
            <a href="#categories">Categories</a>
            <a href="#about">About Us</a>
          </div>
          <div className="nav-actions">
            <div className="btn-icon">
              <Search size={20} />
            </div>
            <div className="cart-icon" onClick={() => {}}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            {/* Mobile menu could go here */}
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <Star size={16} fill="currentColor" /> Welcome to the Future
            </div>
            <h1>Experience Next-Gen <span className="text-gradient">Technology</span></h1>
            <p>
              Discover our curated collection of premium gadgets. Engineered for perfection, designed to impress, and built to elevate your everyday life.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Shop Now <ArrowRight size={18} style={{ marginLeft: 8 }} /></button>
              <button className="btn btn-outline">Watch Video</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="product-showcase">
              <div className="abstract-product">
                <div className="orb"></div>
                <div className="ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Trending Products</h2>
            <p>Our most sought-after selection of tech essentials. Elevate your setup with cutting-edge designs.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card glass-panel">
                <div className="card-image">
                  <div className="mini-orb" style={{
                    background: `linear-gradient(135deg, rgba(${product.color}, 1), rgba(${product.secondColor}, 1))`
                  }}></div>
                  <div style={{ position: 'absolute', top: 15, right: 15 }}>
                    <Heart size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }}/>
                  </div>
                </div>
                <div className="card-content">
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="card-price">{product.price}</div>
                  <div className="card-footer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Star size={16} fill="#f59e0b" color="#f59e0b" />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>4.8</span>
                    </div>
                    <button className="btn-icon" onClick={addToCart} title="Add to Cart">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="promo-banner glass-panel">
          <div className="promo-glow"></div>
          <div className="promo-content">
            <div className="hero-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)', color: '#93c5fd' }}>
              Limited Time Offer
            </div>
            <h2>Unleash Your Creativity With Nova Pro</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>Get 20% off our flagship camera system. Capture the impossible in stunning 8K resolution.</p>
            <button className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>Claim Offer</button>
          </div>
          <div className="promo-image" style={{ width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1e3a8a)', boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)', position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', borderStyle: 'dashed' }}></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{ marginBottom: '1.5rem' }}>
                <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--accent-gradient)' }}></div>
                NEONICS
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Redefining the boundaries of technology and design. Explore our collection of premium gadgets for the modern visionary.
              </p>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <div className="footer-links">
                <a href="#">Audio</a>
                <a href="#">Wearables</a>
                <a href="#">Photography</a>
                <a href="#">Accessories</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#">Help Center</a>
                <a href="#">Track Order</a>
                <a href="#">Returns</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Neonics Inc. All rights reserved. Designed for the future.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

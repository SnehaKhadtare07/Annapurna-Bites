import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import WebBuscuits from './WebBuscuits';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookieConsent") === "accepted"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const rejectCount = parseInt(localStorage.getItem("cookieRejectCount")) || 0;

    if (!cookiesAccepted && rejectCount < 3) {
      const timer = setTimeout(() => {
        setShowCookies(true);
      }, 10000); // 10 seconds delay

      return () => clearTimeout(timer); // cleanup
    }
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookiesAccepted(true);
    setShowCookies(false);
    navigate("/login"); // redirect after accepting
  };

  return (
    <div className="home">
      {/* Show cookie popup after 10s */}
      {showCookies && !cookiesAccepted && <WebBuscuits onAccept={handleAcceptCookies} />}
     
      {/* Page content below */}
      <section className="hero">
        <div className="overlay">
          <h1>A TASTE OF INDIA</h1>
          <a href="/store" className="multicolor-btn">Dine with Us</a>
        </div>
      </section>
    
      {/* Section 2: Taste of Tradition */}
      <section className="tradition">
        <div className="tradition-content">
          <img src="src/assets/IMG-20250712-WA0014.jpg" alt="Tradition Left" className="tradition-img" />
          <div className="tradition-text">
            <h2>🌿 A TASTE OF TRADITION</h2>
            <p>
              AnnapurnaBites was born from the heart of India, where every flavor tells a story.
              Our journey began with the desire to celebrate authentic Indian catering — from
              soulful sweets to savory bites, rich spices to comforting classics. We’re not just
              serving food, we’re sharing moments, memories, and our deep-rooted love for tradition.
            </p>
            <a href="/store" className="multicolor-btn">Book Now</a>
          </div>
          <img src="/src/assets/T2.jpg" alt="Tradition Right" className="tradition-img"/>
        </div>
      </section>

      {/* Section 3: Flavors of India */}
      <section className="flavors">
        <div className="flavors-container">
          <div className="flavor-text">
            <h2>FLAVORS OF INDIA</h2>
            <p>
              Flavors that hug you like home.  
              AnnapurnaBites brings spice, love, and a lil drama. Every dish tells a story, 
              rich with tradition and handpicked spices. From buttery naan to tangy chaat, 
              it’s comfort in every bite. Let the aroma pull you in and the taste make you stay.
            </p>
          </div>
          <div className="flavor-images">
            <div>
              <img src="src/assets/WhatsApp Image 2025-07-13 at 18.00.11_cb66156a.jpg" alt="Appetizers" />
              <a href="/store?page=6" className="flavor-link" onClick={(e) => { e.preventDefault(); navigate('/store?page=6'); }}> MOUTHWATERING APPETIZERS </a>
            </div>
            <div>
              <img src="src/assets/IMG-20250712-WA0020.jpg" alt="Mains" />
            <a href="/store?page=1" className="flavor-link" onClick={(e) => { e.preventDefault(); navigate('/store?page=1'); }}>WhOLESOME MAINS</a>
            </div>
            <div>
              <img src="src/assets/IMG-20250712-WA0017.jpg" alt="Sweets" />
              <a href="/store?page=5" className="flavor-link" onClick={(e) => { e.preventDefault(); navigate('/store?page=5'); }}>SWEET ENDINGS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="testimonials">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="testimonial-boxes">
          <div>
            <p className="quote">“</p>
            <div className="testimonial-content">
              <h4>A BITE OF HOME</h4>
              <p>Reminded me of my nani’s kitchen. Comforting, nostalgic, made with heart.</p>
              <p>- Rhea, Designer</p>
            </div>
          </div>
          <div>
            <p className="quote">“</p>
            <div className="testimonial-content">
              <h4>PURE DESI DELIGHT</h4>
              <p>
                Authentic taste, rich spices, and a homely vibe!
                This place? A weekly ritual now.
              </p>
              <p>- Amit, Father of two</p>
            </div>
          </div>
          <div>
            <p className="quote">“</p>
            <div className="testimonial-content">
              <h4>FLAVORS THAT SPEAK</h4>
              <p>
                I travel a lot, but only this place makes me feel rooted.
                Rich soulful food that tells a story.
              </p>
              <p>- Ishaan, Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact */}
      <section className="contact">
        <div className="contact-img">
          <img src="src/assets/T1.jpg" alt="Food Table" />
        </div>
        <div className="contact-info">
          <h2>SEE YOU SOON</h2>
          <p><strong>PHONE NUMBER</strong><br /> XX XXX95 XXX95</p>
          <p><strong>EMAIL ADDRESS</strong><br /> AnnapurnaBites@gmail.com</p>
          <p><strong>– PEHALE PET POOJA , FIR KAAM DUJA !!</strong></p>
        </div>
      </section>
    </div>
  );
};

export default Home;

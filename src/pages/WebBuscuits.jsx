// while coding i am laughing so hard bacause i wanted to name this file
// as CookieConsent or WebCookies but vs code doesn't allowing me to do so .. so not fair  :(
// Note : in the memories of 11 - 7 -2025 ... Hehe 
// letssssss gooooooo ... (future me or anyone if you are reading my commentss please try to smile a little bright today for yourself !)
// - Sneha ( Ms. developer )

import React, { useState, useEffect } from 'react';
import '../styles/WebBuscuits.css';
import { useNavigate } from 'react-router-dom';

export default function WebBuscuits() {
  const [showPopup, setShowPopup] = useState(false);
  const [rejectionCount, setRejectionCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // ⏱️ Delay popup by 10 seconds

    return () => clearTimeout(timeout);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowPopup(false);
    navigate('/login'); // 🔁 Redirect to login page
  };

  const handleReject = () => {
    const newCount = rejectionCount + 1;
    setRejectionCount(newCount);

    if (newCount >= 3) {
      alert('You have rejected cookies too many times. You are blocked from using the site.');
      // You can also navigate them away, show a blocked screen, or disable features here
    } else {
      alert(`You need to accept cookies to continue. Rejection attempt ${newCount}/3.`);
    }
  };

  if (!showPopup) return null;
  return (
    <div className="cookie-popup-overlay">
      <div className="cookie-popup">
       <h3>🍪 Cookie Consent</h3>
      <p>
        Welcome to our Catering Reservation System. We use cookies to personalize your
        experience and to better understand how our users interact with the platform.
        Your privacy and data security are of utmost importance to us. The information
        collected through cookies is solely for improving your browsing experience and
        for ensuring the smooth operation of our services. We never share your data
        with third parties without your explicit consent. Misuse of this platform, 
        such as attempts to hack, copy, or distribute unauthorized content, is strictly
        prohibited and will be met with appropriate legal action. Cookies also enable 
        critical functionality such as product reviews, ratings, and order placements.
        By accepting cookies, you support the secure and seamless functioning of our website.
        If you choose to reject cookies, you may experience limited functionality, such as
        being unable to leave reviews or place orders.
      </p>
      <p>
            Please understand that this decision impacts your overall site experience. 
        We respect your privacy choices and provide this option to give you control. However, 
        repeated rejection of cookies—specifically,rejecting three times—will result in restricted access to the site. 
        We encourage you to read our Privacy Policy for full details on how your data is handled. Your trust
        and safety matter deeply to us. We are committed to maintaining a respectful and
        secure digital environment. Thank you for being a part of our growing community
        of catering enthusiasts. Stay safe, browse smart, and enjoy the best of our heritage
        culinary services with confidence and care.
       </p>
        <div className="cookie-buttons">
          <button onClick={handleAccept}>Accept All</button>
          <button onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
}
 